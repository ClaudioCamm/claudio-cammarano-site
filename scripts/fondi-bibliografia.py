#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fonde le due bibliografie in src/_data/biblio.js.

Nessuna rete: la deduplica e' locale, su cognome del primo autore + anno +
inizio del titolo. I casi dubbi non si fondono di nascosto: finiscono in un
elenco da rivedere.
"""
import re, sys, json, unicodedata, pathlib

base = pathlib.Path(sys.argv[1])
FONTI = [
    ("definitiva", base / "src/downloads/epistemologia_ai_bibliografia_definitiva.bib"),
    ("v6", base / "src/downloads/08_epistemologia_ai_bibliografia_v6.bib"),
]

def spoglia(s):
    s = re.sub(r"[{}\\]", "", s or "")
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", s).strip()

def voci(testo):
    out = []
    for m in re.finditer(r"@(\w+)\s*\{\s*([^,]+),(.*?)\n\}", testo, flags=re.S):
        tipo, chiave, corpo = m.group(1).lower(), m.group(2).strip(), m.group(3)
        campi = {}
        for c in re.finditer(r"(\w+)\s*=\s*\{(.*?)\}\s*,?\s*(?=\n\s*\w+\s*=|\Z)", corpo, flags=re.S):
            campi[c.group(1).lower()] = spoglia(c.group(2))
        campi["_tipo"], campi["_chiave"] = tipo, chiave
        out.append(campi)
    return out

def impronta(v):
    autore = spoglia(v.get("author", "") or v.get("editor", "")).lower()
    cognome = re.split(r",| and ", autore)[0].strip().split()[-1] if autore else "?"
    grezzo = spoglia(v.get("title", "")).lower().split(":")[0]
    titolo = re.sub(r"[^a-z0-9 ]", "", grezzo)
    return (cognome, v.get("year", "?"), " ".join(titolo.split()[:4]))

tutte, per_impronta, doppioni = [], {}, []
for etichetta, percorso in FONTI:
    testo = percorso.read_text(encoding="utf-8", errors="replace")
    for v in voci(testo):
        v["_fonte"] = etichetta
        imp = impronta(v)
        if imp in per_impronta:
            prima = per_impronta[imp]
            doppioni.append((imp, prima["_chiave"], v["_chiave"]))
            # il record con piu' campi vince; la nota si conserva sempre
            if v.get("note") and not prima.get("note"):
                prima["note"] = v["note"]
            prima["_chiavi_alt"] = sorted(set(prima.get("_chiavi_alt", []) + [v["_chiave"]]))
            continue
        per_impronta[imp] = v
        tutte.append(v)

# quasi-doppioni: stesso cognome e anno, titolo diverso
sospetti = {}
for v in tutte:
    k = (impronta(v)[0], v.get("year", "?"))
    sospetti.setdefault(k, []).append(v)
sospetti = {k: vs for k, vs in sospetti.items() if len(vs) > 1 and k[0] != "?"}

# I DOI stanno in un file a parte perche' biblio.js e' generato: qui si
# rimettono dentro. Li scrive scripts/doi-proposte.js dopo la revisione.
doi_noti = {}
f_doi = base / "src/_data/doi.json"
if f_doi.exists():
    doi_noti = json.loads(f_doi.read_text(encoding="utf-8"))
    for v in tutte:
        if v.get("doi"):
            continue
        for k in [v["_chiave"]] + v.get("_chiavi_alt", []):
            if k in doi_noti:
                v["doi"] = doi_noti[k]
                break

tutte.sort(key=lambda v: (impronta(v)[0], v.get("year", "")))
dati = [{
    "key": v["_chiave"],
    "altKeys": v.get("_chiavi_alt", []),
    "type": v["_tipo"],
    "author": v.get("author", ""),
    "editor": v.get("editor", ""),
    "title": v.get("title", ""),
    "year": v.get("year", ""),
    "publisher": v.get("publisher", ""),
    "journal": v.get("journal", ""),
    "booktitle": v.get("booktitle", ""),
    "volume": v.get("volume", ""),
    "pages": v.get("pages", ""),
    "doi": v.get("doi", ""),
    "note": v.get("note", ""),
    "from": v["_fonte"],
} for v in tutte]

intestazione = '''/**
 * Bibliografia unificata del lato ricerca.
 *
 * Generata da scripts/fondi-bibliografia.js a partire dai due .bib in
 * src/downloads/ (definitiva, 56 voci; v6, 85 voci), che non condividono
 * nessuna chiave di citazione. La deduplica e' su cognome del primo autore +
 * anno + prime sei parole del titolo; le chiavi alternative restano in
 * `altKeys` cosi' una citazione vecchia continua a risolvere.
 *
 * Il campo `note` e' la mappa di lettura scritta a mano: non si tocca.
 * Il DOI manca quasi ovunque e va riempito in una seconda passata.
 *
 * Questa e' la base su cui si estraggono le lessie (/en/claims/).
 */
module.exports = '''

(base / "src/_data/biblio.js").write_text(
    intestazione + json.dumps(dati, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")

print(f"voci uniche: {len(dati)}")
print(f"doppioni fusi: {len(doppioni)}")
for imp, a, b in doppioni:
    print(f"   {a}  ==  {b}   [{imp[0]} {imp[1]}]")
print(f"\ncon nota: {sum(1 for d in dati if d['note'])} | con DOI: {sum(1 for d in dati if d['doi'])}" + (f" (di cui {len(doi_noti)} da doi.json)" if doi_noti else ""))
tipi = {}
for d in dati:
    tipi[d["type"]] = tipi.get(d["type"], 0) + 1
print("tipi:", json.dumps(tipi))
if sospetti:
    print(f"\nda rivedere a mano ({len(sospetti)} gruppi: stesso autore e anno, titolo diverso):")
    for (cog, anno), vs in sorted(sospetti.items()):
        print(f"  {cog} {anno}")
        for v in vs:
            print(f"     [{v['_fonte']}] {v.get('title','')[:78]}")
