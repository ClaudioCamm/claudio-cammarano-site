"""
Analisi della varianza tra le run del batch di validazione — v2 (opzione a: label-first).

Differenze rispetto a v1 (risoluzione F-3, QC Log §5, opzione a):
  1. REGOLA LABEL-FIRST. Quando la stringa Esito apre con un'etichetta di verdetto
     esplicita (es. "SOSPESO — …", "Parzialmente vero nella forma debole; …"),
     quella etichetta di testa determina la categoria. Il classificatore a keyword
     sull'intero testo interviene solo come FALLBACK, quando il segmento di testa
     non contiene alcuna keyword di categoria.
  2. GESTIONE DELLA NEGAZIONE (F-1). Un match di keyword preceduto entro 3 token
     da un negatore (non, né, senza, mai, no) NON conta come presenza positiva.
     Risolve i casi "non confermato / non verificato / né confermato né refutato".

AR-lex e Jaccard sono invariati rispetto a v1: cambia solo la categorizzazione
semantica (AR-sem). Confronta l'output con i valori depositati per quantificare
l'effetto della revisione.

Uso:  python3 analisi_varianza_v2.py [risultati_batch.json] [output.json]
"""

import json
import re
import os
import sys
import math
from itertools import combinations
from collections import Counter

INPUT_FILE = sys.argv[1] if len(sys.argv) > 1 else "risultati_batch.json"
OUTPUT_FILE = sys.argv[2] if len(sys.argv) > 2 else "analisi_varianza_labelfirst.json"

CLAIM_ORDER = ["vaccini", "vegetarianismo", "bitcoin", "prima_guerra", "coscienza", "fumo"]

# --- Categorizzazione semantica (identica al Manual §7.3) ------------------
KEYWORDS_CATEGORIE = {
    "FALSO": ["falso", "falsa", "confutato", "refutato", "infondato", "non supportato"],
    "PARZIALMENTE VERO": ["parzialmente", "parziale", "riduttivo", "incompleto", "forma debole", "fuorviante"],
    "VERO": ["vero", "vera", "confermato", "verificato", "supportato"],
    "SOSPESO": ["indeterminato", "indecidibile", "sospeso", "non decidibile", "metafisico",
                "non validabile", "strutturale", "non verificabile"],
    "DIPENDE": ["dipende", "contestuale", "condizionale"],
}
PRIORITA_CATEGORIE = ["FALSO", "PARZIALMENTE VERO", "VERO", "DIPENDE", "SOSPESO"]
CAT_ALTRO = "ALTRO"

# Negatori per la gestione dello scope di negazione (F-1)
NEGATORI = {"non", "né", "ne", "senza", "mai", "no"}
FINESTRA_NEG = 3  # token prima del match in cui cercare un negatore

# Delimitatori che separano l'etichetta di testa dal resto (label-first)
DELIMITATORI_TESTA = re.compile(r"[—–\-;:]")

Z_95 = 1.959963985


def estrai_esito(text):
    """Estrae il valore della riga 'Esito' dal PROSPETTO DI VALIDAZIONE."""
    if not text:
        return None
    for line in text.splitlines():
        if "|" not in line:
            continue
        celle = [c.strip() for c in line.split("|")]
        while celle and celle[0] == "":
            celle.pop(0)
        while celle and celle[-1] == "":
            celle.pop()
        if len(celle) >= 2 and celle[0].lower() == "esito":
            return celle[1]
    return None


def normalizza_esito(val):
    """Rimuove markdown, simboli non alfabetici iniziali, spazi multipli; minuscolo."""
    if val is None:
        return None
    v = val.replace("*", " ")
    v = re.sub(r"\s+", " ", v).strip().lower()
    # rimuove simboli/emoji iniziali (es. ⚠️) lasciando la prima lettera utile
    v = re.sub(r"^[^\wàèéìòù]+", "", v)
    return v if v else None


def tokenizza(text):
    return set(re.findall(r"\w+", text.lower())) if text else set()


def jaccard(a, b):
    if not a and not b:
        return 1.0
    union = a | b
    if not union:
        return 1.0
    return len(a & b) / len(union)


def _presenza_categorie(testo):
    """Per ogni categoria, True se almeno una keyword compare NON negata nel testo.

    La negazione è gestita a livello di token: un match il cui inizio è preceduto
    entro FINESTRA_NEG token da un negatore viene scartato.
    """
    tokens = re.findall(r"\w+", testo.lower())
    presenti = {c: False for c in KEYWORDS_CATEGORIE}
    for categoria, kws in KEYWORDS_CATEGORIE.items():
        for kw in kws:
            kw_tokens = kw.split()
            n = len(kw_tokens)
            for i in range(len(tokens) - n + 1):
                if tokens[i:i + n] == kw_tokens:
                    finestra = tokens[max(0, i - FINESTRA_NEG):i]
                    # se la keyword contiene essa stessa un negatore iniziale
                    # (es. "non supportato"), non va trattata come negata
                    if kw_tokens[0] in NEGATORI:
                        presenti[categoria] = True
                        break
                    if not any(w in NEGATORI for w in finestra):
                        presenti[categoria] = True
                        break
            if presenti[categoria]:
                continue
    return presenti


def _categoria_da_presenze(presenti, testo):
    """Applica override misto + priorità. Ritorna una categoria o None (nessun match)."""
    ha_debole = re.search(r"\bdebole\b", testo) is not None
    # Override: FALSO + (PARZIALMENTE VERO oppure "debole") -> PARZIALMENTE VERO
    if presenti["FALSO"] and (presenti["PARZIALMENTE VERO"] or ha_debole):
        return "PARZIALMENTE VERO"
    for categoria in PRIORITA_CATEGORIE:
        if presenti[categoria]:
            return categoria
    return None


def _categoria_da_testo(testo):
    """Categoria da un frammento di testo, con negazione. None se nessun match."""
    if not testo:
        return None
    return _categoria_da_presenze(_presenza_categorie(testo), testo)


def segmento_testa(esito_norm):
    """Segmento di testa = testo prima del primo delimitatore (— – - ; :)."""
    if not esito_norm:
        return ""
    m = DELIMITATORI_TESTA.search(esito_norm)
    return esito_norm[:m.start()] if m else esito_norm


def categorizza_esito(esito_norm):
    """LABEL-FIRST: l'etichetta di testa vince; keyword sull'intero testo come fallback."""
    if not esito_norm:
        return CAT_ALTRO
    # 1) etichetta esplicita di testa
    cat = _categoria_da_testo(segmento_testa(esito_norm))
    if cat:
        return cat
    # 2) fallback: keyword sull'intero testo (con negazione)
    cat = _categoria_da_testo(esito_norm)
    return cat if cat else CAT_ALTRO


def wilson_ci(successi, n, z=Z_95):
    if n == 0:
        return (0.0, 0.0)
    p = successi / n
    denom = 1 + z * z / n
    centro = (p + z * z / (2 * n)) / denom
    semi = (z / denom) * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))
    return (100.0 * max(0.0, centro - semi), 100.0 * min(1.0, centro + semi))


def agreement_rate_semantico(categorie):
    if not categorie:
        return 0.0, None, 0, 0, {}
    conteggio = Counter(categorie)
    freq = max(conteggio.values())

    def chiave(c):
        return PRIORITA_CATEGORIE.index(c) if c in PRIORITA_CATEGORIE else len(PRIORITA_CATEGORIE)
    vincitori = sorted((c for c, k in conteggio.items() if k == freq), key=chiave)
    dominante = "PAREGGIO: " + "=".join(vincitori) if len(vincitori) > 1 else vincitori[0]
    return 100.0 * freq / len(categorie), dominante, freq, len(categorie), dict(conteggio)


def agreement_rate(esiti_norm):
    validi = [e for e in esiti_norm if e is not None]
    if not validi:
        return 0.0, None, {}
    conteggio = Counter(validi)
    dominante, freq = conteggio.most_common(1)[0]
    return 100.0 * freq / len(validi), dominante, dict(conteggio)


def jaccard_media(testi):
    insiemi = [tokenizza(t) for t in testi if t]
    if len(insiemi) < 2:
        return None
    valori = [jaccard(a, b) for a, b in combinations(insiemi, 2)]
    return sum(valori) / len(valori)


def main():
    with open(INPUT_FILE, "r") as f:
        dati = json.load(f)

    claim_keys = [k for k in CLAIM_ORDER if k in dati] + [k for k in dati if k not in CLAIM_ORDER]
    report = {}

    print("=" * 64)
    print("ANALISI VARIANZA v2 — LABEL-FIRST (opzione a)")
    print("=" * 64)

    for key in claim_keys:
        info = dati[key]
        runs = info.get("runs", [])
        testi = [r.get("text") for r in runs if r.get("text") and not r.get("skipped")]

        esiti_norm = [normalizza_esito(estrai_esito(t)) for t in testi]
        ar, dominante, distribuzione = agreement_rate(esiti_norm)

        categorie = [categorizza_esito(e) for e in esiti_norm]
        ar_sem, cat_dom, freq_dom, n_cat, distr_cat = agreement_rate_semantico(categorie)
        ic_low, ic_high = wilson_ci(freq_dom, n_cat)
        jac = jaccard_media(testi)

        report[key] = {
            "claim": info.get("claim", ""),
            "run_valide": len(testi),
            "agreement_rate_lessicale_pct": round(ar, 2),
            "agreement_rate_semantico_pct": round(ar_sem, 2),
            "categoria_dominante": cat_dom,
            "ic95_semantico_pct": [round(ic_low, 2), round(ic_high, 2)],
            "non_classificati_altro": distr_cat.get(CAT_ALTRO, 0),
            "distribuzione_categorie": distr_cat,
            "jaccard_media": round(jac, 4) if jac is not None else None,
        }

        print(f"\n[{key}]  ARlex {ar:5.1f}%   ARsem {ar_sem:5.1f}%  ({cat_dom}, {freq_dom}/{n_cat})"
              f"  IC95[{ic_low:.1f},{ic_high:.1f}]")
        for cat, c in sorted(distr_cat.items(), key=lambda x: -x[1]):
            print(f"      {cat:20s}: {c}")

    ar_lex = [r["agreement_rate_lessicale_pct"] for r in report.values()]
    ar_sem = [r["agreement_rate_semantico_pct"] for r in report.values()]
    jac_v = [r["jaccard_media"] for r in report.values() if r["jaccard_media"] is not None]
    riepilogo = {
        "claim_analizzati": len(report),
        "agreement_rate_lessicale_medio_pct": round(sum(ar_lex) / len(ar_lex), 2),
        "agreement_rate_semantico_medio_pct": round(sum(ar_sem) / len(ar_sem), 2),
        "jaccard_media_globale": round(sum(jac_v) / len(jac_v), 4) if jac_v else None,
        "esiti_non_classificati_altro": sum(r["non_classificati_altro"] for r in report.values()),
    }

    print("\n" + "=" * 64)
    print(f"  ARlex medio: {riepilogo['agreement_rate_lessicale_medio_pct']}%")
    print(f"  ARsem medio: {riepilogo['agreement_rate_semantico_medio_pct']}%")
    print(f"  Gap: {round(riepilogo['agreement_rate_semantico_medio_pct'] - riepilogo['agreement_rate_lessicale_medio_pct'], 2)} punti")
    print(f"  Jaccard globale: {riepilogo['jaccard_media_globale']}")
    print(f"  ALTRO: {riepilogo['esiti_non_classificati_altro']}")
    print("=" * 64)

    with open(OUTPUT_FILE, "w") as f:
        json.dump({"per_claim": report, "riepilogo": riepilogo}, f, ensure_ascii=False, indent=2)
    print(f"\nSalvato: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
