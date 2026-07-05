"""
Analisi della varianza tra le run del batch di validazione.

Per ogni claim:
  1. Legge risultati_batch.json
  2. Estrae il valore della riga "Esito" del PROSPETTO DI VALIDAZIONE da ogni run
  3. Calcola l'Agreement Rate (AR): % di run con l'esito piu' frequente
  4. Calcola la Jaccard Similarity media tra tutte le coppie di run
     (insiemi = bag-of-words del testo completo di ciascuna run)

Output: report a video + salvataggio in analisi_varianza.json
"""

import json
import re
import os
import math
from itertools import combinations
from collections import Counter

BASE_DIR = "./batch_30x"
INPUT_FILE = os.path.join(BASE_DIR, "risultati_batch.json")
OUTPUT_FILE = os.path.join(BASE_DIR, "analisi_varianza.json")

# Ordine di presentazione dei claim
CLAIM_ORDER = [
    "vaccini", "vegetarianismo", "bitcoin",
    "prima_guerra", "coscienza", "fumo"
]

# --- Categorizzazione semantica degli esiti -------------------------------
# Keyword per categoria. Una riga Esito puo' contenere keyword di piu'
# categorie: in tal caso vince la prima secondo PRIORITA_CATEGORIE.
KEYWORDS_CATEGORIE = {
    "FALSO": ["falso", "confutato", "refutato", "infondato", "non supportato"],
    "PARZIALMENTE VERO": ["parzialmente", "parziale", "riduttivo", "incompleto", "forma debole", "fuorviante"],
    "VERO": ["vero", "confermato", "verificato", "supportato"],
    "SOSPESO": ["indeterminato", "indecidibile", "sospeso", "dipende", "non decidibile", "metafisico", "non validabile", "strutturale", "non verificabile"],
    "DIPENDE": ["dipende", "contestuale", "condizionale"],
}
# Ordine di priorita' richiesto: FALSO > PARZIALMENTE VERO > VERO > DIPENDE > SOSPESO
PRIORITA_CATEGORIE = ["FALSO", "PARZIALMENTE VERO", "VERO", "DIPENDE", "SOSPESO"]
# Etichetta per gli esiti che non matchano alcuna keyword
CAT_ALTRO = "ALTRO"

# Z per intervallo di confidenza al 95%
Z_95 = 1.959963985


def estrai_esito(text):
    """Estrae il valore della riga 'Esito' dal PROSPETTO DI VALIDAZIONE.

    La tabella e' in markdown con righe del tipo:  Esito | **valore**
    Cerca la riga la cui PRIMA cella (trimmata) e' esattamente 'Esito',
    evitando cosi' 'Pre-Step 0', 'Sintesi rapida' e 'ESITO ERC' (altra tabella).
    Ritorna None se non trovata.
    """
    if not text:
        return None
    for line in text.splitlines():
        if "|" not in line:
            continue
        celle = [c.strip() for c in line.split("|")]
        # rimuove eventuali celle vuote ai bordi (tabelle con | iniziale/finale)
        while celle and celle[0] == "":
            celle.pop(0)
        while celle and celle[-1] == "":
            celle.pop()
        if len(celle) >= 2 and celle[0].lower() == "esito":
            return celle[1]
    return None


def normalizza_esito(val):
    """Normalizza il valore di esito per il raggruppamento (AR):
    rimuove markdown bold/italic, spazi multipli, e porta in minuscolo.
    """
    if val is None:
        return None
    v = val.replace("*", " ")
    v = re.sub(r"\s+", " ", v).strip().lower()
    return v if v else None


def tokenizza(text):
    """Insieme di parole (token alfanumerici, minuscole) del testo completo."""
    return set(re.findall(r"\w+", text.lower())) if text else set()


def jaccard(a, b):
    """Jaccard Similarity tra due insiemi. Se entrambi vuoti -> 1.0."""
    if not a and not b:
        return 1.0
    union = a | b
    if not union:
        return 1.0
    return len(a & b) / len(union)


def categorizza_esito(esito_norm):
    """Assegna una categoria semantica a un esito normalizzato.

    Regola speciale (override): se l'esito contiene sia keyword di FALSO sia
    keyword di PARZIALMENTE VERO (o la parola "debole"), viene assegnato
    PARZIALMENTE VERO invece di FALSO — i verdetti misti "falso in forma forte,
    vero in forma debole" non collassano cosi' in FALSO.

    Altrimenti vince la prima categoria, secondo PRIORITA_CATEGORIE, con almeno
    una keyword presente. Se nessuna keyword matcha -> CAT_ALTRO. None -> CAT_ALTRO.
    """
    if not esito_norm:
        return CAT_ALTRO
    testo = esito_norm.lower()

    presenti = {
        categoria: any(
            re.search(r"\b" + re.escape(kw) + r"\b", testo)
            for kw in kws
        )
        for categoria, kws in KEYWORDS_CATEGORIE.items()
    }
    ha_debole = re.search(r"\bdebole\b", testo) is not None

    # Override: FALSO + (PARZIALMENTE VERO oppure "debole") -> PARZIALMENTE VERO
    if presenti["FALSO"] and (presenti["PARZIALMENTE VERO"] or ha_debole):
        return "PARZIALMENTE VERO"

    for categoria in PRIORITA_CATEGORIE:
        if presenti[categoria]:
            return categoria
    return CAT_ALTRO


def wilson_ci(successi, n, z=Z_95):
    """Intervallo di confidenza di Wilson per una proporzione, in percentuale.
    Ritorna (low_pct, high_pct). Robusto per n piccolo e p vicino a 0/1.
    """
    if n == 0:
        return (0.0, 0.0)
    p = successi / n
    denom = 1 + z * z / n
    centro = (p + z * z / (2 * n)) / denom
    semi = (z / denom) * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))
    low = max(0.0, centro - semi)
    high = min(1.0, centro + semi)
    return (100.0 * low, 100.0 * high)


def agreement_rate_semantico(categorie):
    """AR semantico = frequenza della categoria dominante / numero di esiti, in %.
    Ritorna (ar_pct, categoria_dominante, freq_dominante, n, distribuzione_dict).
    Le categorie includono eventuali CAT_ALTRO (esiti non classificati).

    In caso di pareggio tra due o piu' categorie al primo posto, il campo
    categoria_dominante riporta esplicitamente "PAREGGIO: CAT1=CAT2[=...]"
    invece di sceglierne una arbitrariamente.
    """
    if not categorie:
        return 0.0, None, 0, 0, {}
    conteggio = Counter(categorie)
    freq = max(conteggio.values())
    # tutte le categorie con la frequenza massima, ordinate per priorita'
    def chiave_ordine(c):
        return PRIORITA_CATEGORIE.index(c) if c in PRIORITA_CATEGORIE else len(PRIORITA_CATEGORIE)
    vincitori = sorted((c for c, n in conteggio.items() if n == freq), key=chiave_ordine)
    if len(vincitori) > 1:
        dominante = "PAREGGIO: " + "=".join(vincitori)
    else:
        dominante = vincitori[0]
    ar = 100.0 * freq / len(categorie)
    return ar, dominante, freq, len(categorie), dict(conteggio)


def agreement_rate(esiti_norm):
    """AR = frequenza dell'esito piu' comune / numero di esiti validi, in %.
    Ritorna (ar_percentuale, esito_dominante, distribuzione_dict).
    """
    validi = [e for e in esiti_norm if e is not None]
    if not validi:
        return 0.0, None, {}
    conteggio = Counter(validi)
    dominante, freq = conteggio.most_common(1)[0]
    ar = 100.0 * freq / len(validi)
    return ar, dominante, dict(conteggio)


def jaccard_media(testi):
    """Media della Jaccard Similarity su tutte le coppie di run di un claim."""
    insiemi = [tokenizza(t) for t in testi if t]
    if len(insiemi) < 2:
        return None  # serve almeno una coppia
    valori = [jaccard(a, b) for a, b in combinations(insiemi, 2)]
    return sum(valori) / len(valori)


def main():
    with open(INPUT_FILE, "r") as f:
        dati = json.load(f)

    claim_keys = [k for k in CLAIM_ORDER if k in dati]
    # include eventuali claim non previsti nell'ordine
    claim_keys += [k for k in dati if k not in claim_keys]

    report = {}

    print("=" * 60)
    print("ANALISI VARIANZA — batch di validazione")
    print("=" * 60)

    for key in claim_keys:
        info = dati[key]
        runs = info.get("runs", [])
        # considera solo le run con testo valido (esclude le saltate)
        testi = [r.get("text") for r in runs if r.get("text") and not r.get("skipped")]
        n_valide = len(testi)
        n_saltate = sum(1 for r in runs if r.get("skipped"))

        esiti_raw = [estrai_esito(t) for t in testi]
        esiti_norm = [normalizza_esito(e) for e in esiti_raw]
        n_esito_estratto = sum(1 for e in esiti_norm if e is not None)

        # AR lessicale (stringa esatta dell'esito)
        ar, dominante, distribuzione = agreement_rate(esiti_norm)

        # AR semantico (categorie) + IC di Wilson al 95%
        categorie = [categorizza_esito(e) for e in esiti_norm]
        ar_sem, cat_dom, freq_dom, n_cat, distr_cat = agreement_rate_semantico(categorie)
        ic_low, ic_high = wilson_ci(freq_dom, n_cat)
        n_altro = distr_cat.get(CAT_ALTRO, 0)

        jac = jaccard_media(testi)

        report[key] = {
            "claim": info.get("claim", ""),
            "run_valide": n_valide,
            "run_saltate": n_saltate,
            "esiti_estratti": n_esito_estratto,
            "agreement_rate_lessicale_pct": round(ar, 2),
            "esito_dominante_lessicale": dominante,
            "agreement_rate_semantico_pct": round(ar_sem, 2),
            "categoria_dominante": cat_dom,
            "ic95_semantico_pct": [round(ic_low, 2), round(ic_high, 2)],
            "non_classificati_altro": n_altro,
            "distribuzione_categorie": distr_cat,
            "distribuzione_esiti": distribuzione,
            "jaccard_media": round(jac, 4) if jac is not None else None,
        }

        print(f"\n[{key}]  \"{info.get('claim', '')}\"")
        print(f"  Run valide: {n_valide}  (saltate: {n_saltate}, esiti estratti: {n_esito_estratto})")
        print(f"  AR lessicale:  {ar:5.1f}%  (esito dominante: {dominante!r})")
        print(f"  AR semantico:  {ar_sem:5.1f}%  (categoria: {cat_dom}, {freq_dom}/{n_cat})  IC95% [{ic_low:.1f}%, {ic_high:.1f}%]")
        if jac is not None:
            print(f"  Jaccard media (testo completo): {jac:.4f}")
        else:
            print(f"  Jaccard media: n/d (run insufficienti)")
        print(f"  Distribuzione categorie:")
        for cat, c in sorted(distr_cat.items(), key=lambda x: -x[1]):
            flag = "  <-- non classificati" if cat == CAT_ALTRO else ""
            print(f"    - {cat:18s}: {c}{flag}")

    # Medie complessive
    ar_lex_vals = [r["agreement_rate_lessicale_pct"] for r in report.values() if r["esiti_estratti"] > 0]
    ar_sem_vals = [r["agreement_rate_semantico_pct"] for r in report.values() if r["esiti_estratti"] > 0]
    jac_vals = [r["jaccard_media"] for r in report.values() if r["jaccard_media"] is not None]
    tot_altro = sum(r["non_classificati_altro"] for r in report.values())
    riepilogo = {
        "claim_analizzati": len(report),
        "agreement_rate_lessicale_medio_pct": round(sum(ar_lex_vals) / len(ar_lex_vals), 2) if ar_lex_vals else None,
        "agreement_rate_semantico_medio_pct": round(sum(ar_sem_vals) / len(ar_sem_vals), 2) if ar_sem_vals else None,
        "jaccard_media_globale": round(sum(jac_vals) / len(jac_vals), 4) if jac_vals else None,
        "esiti_non_classificati_altro": tot_altro,
    }

    print("\n" + "=" * 60)
    print("RIEPILOGO GLOBALE")
    print(f"  Claim analizzati: {riepilogo['claim_analizzati']}")
    print(f"  AR lessicale medio: {riepilogo['agreement_rate_lessicale_medio_pct']}%")
    print(f"  AR semantico medio: {riepilogo['agreement_rate_semantico_medio_pct']}%")
    print(f"  Jaccard media globale: {riepilogo['jaccard_media_globale']}")
    print(f"  Esiti non classificati (ALTRO): {riepilogo['esiti_non_classificati_altro']}")
    print("=" * 60)

    with open(OUTPUT_FILE, "w") as f:
        json.dump({"per_claim": report, "riepilogo": riepilogo}, f,
                  ensure_ascii=False, indent=2)
    print(f"\nRisultati salvati in: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
