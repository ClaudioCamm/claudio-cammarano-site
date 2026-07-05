import anthropic
import json
import time
import os
from datetime import datetime

client = anthropic.Anthropic()

SYSTEM_PROMPT = """Sei uno strumento di validazione epistemica nel framework "Validare Claude with Claude" (Claudio Cammarano, 2026). Applica il formato locked esattamente in quest'ordine:

1. PRE-STEP 0 — Paragrafo narrativo. Verifica atto illocutorio (Austin 1962): è un'asserzione? Se composita (A+B), segnalala.

2. PROSPETTO DI VALIDAZIONE — Tabella markdown, 2 colonne, esattamente 6 righe con questi label esatti:
Ontologia | valore
Logica | valore
Decidibilità | valore
Esito | **valore**
Pre-Step 0 | valore
Sintesi rapida | valore
NON usare label D1/D2/D3. NON aggiungere o rimuovere righe.

3. [EMPATIA] — Paragrafo sulla dimensione fenomenologica e affettiva.

4. [LOGICA] — Paragrafo/i sulla forma logica, vulnerabilità, versioni più difendibili.

5. [INFORMAZIONE] — Paragrafo/i sulla tesi sostanziale della fonte. Includi: tradizione intellettuale, dati empirici, controesempi, obiezione metodologica principale. NON analizzare la forma linguistica del claim (quella va in [LOGICA]).

6. [EPISTEMIC RESPONSIBILITY CHECK] — Tabella markdown, 2 colonne, esattamente 4 righe:
Cita fonti/evidenze? | risposta con giustificazione
Esprime incertezza? | risposta con giustificazione
Distingue interp. da fatto? | risposta con giustificazione
ESITO ERC | **verdetto** + una frase di giustificazione
NON inventare altri criteri. Esattamente queste 4 righe.

7. [SINTESI ESTESA] — Paragrafo/i. Distingui forma forte (spesso falsa) da forma debole (difendibile). Verdetto finale con condizioni.

8. FONTI — Lista bibliografica. Ogni voce su riga propria con riga vuota tra le voci."""

CLAIMS = {
    "vaccini": "I vaccini causano l'autismo",
    "vegetarianismo": "Il vegetarianismo è eticamente superiore",
    "bitcoin": "Bitcoin raggiungerà $100k entro il 2026",
    "prima_guerra": "La prima guerra mondiale fu causata dall'assassinio di Sarajevo",
    "coscienza": "La coscienza non è riducibile a processi neurali",
    "fumo": "Fumare causa il cancro ai polmoni"
}

N_RUNS = 30
MAX_RETRIES = 5
CHECKPOINT_FILE = "./batch_30x/checkpoint.json"
OUTPUT_FILE = "./batch_30x/risultati_batch.json"

def load_checkpoint():
    if os.path.exists(CHECKPOINT_FILE):
        with open(CHECKPOINT_FILE, "r") as f:
            return json.load(f)
    return {}

def save_checkpoint(checkpoint):
    with open(CHECKPOINT_FILE, "w") as f:
        json.dump(checkpoint, f, ensure_ascii=False, indent=2)

def load_results():
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, "r") as f:
            return json.load(f)
    return {}

def save_results(results):
    with open(OUTPUT_FILE, "w") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

def run_validation(claim_text):
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=4000,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": f'Valida questo claim: "{claim_text}"'}]
    )
    return response.content[0].text

def main():
    checkpoint = load_checkpoint()
    results = load_results()

    for claim_key, claim_text in CLAIMS.items():
        if claim_key not in results:
            results[claim_key] = {"claim": claim_text, "runs": []}
        if claim_key not in checkpoint:
            checkpoint[claim_key] = 0

        completed = checkpoint[claim_key]
        print(f"\n{'='*50}")
        print(f"Claim: {claim_key} ({completed}/{N_RUNS} completate)")

        for i in range(completed, N_RUNS):
            run_num = i + 1
            print(f"  Run {run_num}/{N_RUNS}...", end=" ", flush=True)
            success = False
            for attempt in range(1, MAX_RETRIES + 1):
                try:
                    text = run_validation(claim_text)
                    results[claim_key]["runs"].append({
                        "run": run_num,
                        "timestamp": datetime.now().isoformat(),
                        "text": text
                    })
                    checkpoint[claim_key] = run_num
                    save_results(results)
                    save_checkpoint(checkpoint)
                    print("OK")
                    success = True
                    time.sleep(2)
                    break
                except KeyboardInterrupt:
                    print("\nInterrotto dall'utente. Checkpoint salvato.")
                    save_results(results)
                    save_checkpoint(checkpoint)
                    return
                except Exception as e:
                    print(f"ERRORE (tentativo {attempt}/{MAX_RETRIES}): {e}")
                    # Salva lo stato corrente prima di riprovare.
                    save_results(results)
                    save_checkpoint(checkpoint)
                    if attempt < MAX_RETRIES:
                        print("  Attendo 30s prima di riprovare...")
                        time.sleep(30)

            if not success:
                # Run definitivamente saltata: registra un marcatore e avanza il checkpoint
                # cosi' non verra' piu' ritentata in sessioni future.
                results[claim_key]["runs"].append({
                    "run": run_num,
                    "timestamp": datetime.now().isoformat(),
                    "skipped": True,
                    "text": None
                })
                checkpoint[claim_key] = run_num
                save_results(results)
                save_checkpoint(checkpoint)
                print(f"  Run {run_num} saltata definitivamente dopo {MAX_RETRIES} tentativi falliti. Proseguo.")

    print(f"\n{'='*50}")
    print("Batch completato.")
    all_runs = [run for r in results.values() for run in r["runs"]]
    total = len(all_runs)
    skipped = sum(1 for run in all_runs if run.get("skipped"))
    completed_ok = total - skipped
    print(f"Run totali registrate: {total}")
    print(f"  - Completate con successo: {completed_ok}")
    print(f"  - Saltate (dopo {MAX_RETRIES} tentativi): {skipped}")
    print(f"Risultati: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
