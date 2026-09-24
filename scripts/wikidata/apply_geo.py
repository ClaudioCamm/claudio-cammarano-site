#!/usr/bin/env python3
"""Scrive il campo geo nell'indice dei concetti (audit 2026, L8).

Fonti, in ordine di precedenza:
  1. scripts/wikidata/decisioni.json -> geo (scelte di Claudio);
  2. scripts/wikidata/out/geo.json (Wikidata), ricondotto agli Stati attuali
     con la tabella "successori": diventa geografia diretta;
  3. ereditarieta' dalle voci collegate in `related` che hanno geografia
     diretta: geografia "teorico";
  4. altrimenti "nessuna".
Forma nel file: geo: { modo: "diretta" | "teorico" | "nessuna", paesi: [...] }
"""
import json, pathlib, re, subprocess

ROOT = pathlib.Path(__file__).resolve().parents[2]
INDEX = ROOT / "src" / "_data" / "conceptsIndex.js"
d = json.loads((ROOT / "scripts/wikidata/decisioni.json").read_text())
wd = json.loads((ROOT / "scripts/wikidata/out/geo.json").read_text())
succ = d["successori"]

idx = json.loads(subprocess.run(["node", "-e",
    "const c=require('./src/_data/conceptsIndex.js');console.log(JSON.stringify("
    "(typeof c==='function'?c():c).map(x=>({name:x.name,related:(x.related||[]).map(r=>r.name)}))))"],
    cwd=ROOT, capture_output=True, text=True, check=True).stdout)

own = {}
for e in idx:
    n = e["name"]
    if n in d["geo"]:
        own[n] = d["geo"][n]
    elif n in wd and wd[n]["paesi"]:
        ps = []
        for x in wd[n]["paesi"]:
            l = succ.get(x["label"], x["label"])
            if l != "Unione Sovietica" and not l.startswith("DA DECIDERE") and l not in ps:
                ps.append(l)
        if ps:
            own[n] = {"modo": "diretta", "paesi": ps}
res = {}
for e in idx:
    n = e["name"]
    if n in own:
        res[n] = own[n]; continue
    inh = []
    for r in e["related"]:
        if r in own and own[r]["modo"] == "diretta":
            inh += [p for p in own[r]["paesi"] if p not in inh]
    res[n] = {"modo": "teorico", "paesi": inh} if inh else {"modo": "nessuna", "paesi": []}

s = INDEX.read_text()
changed = 0
for n, g in res.items():
    m = re.search(r'\n(\s*)name:\s*"' + re.escape(n) + r'",\n', s)
    if not m:
        print("non trovata:", n); continue
    end = s.find("\n  }", m.end())
    block = s[m.end():end]
    line = f'{m.group(1)}geo: {{ modo: "{g["modo"]}", paesi: {json.dumps(g["paesi"], ensure_ascii=False)} }},\n'
    old = re.search(r'\n?(\s*)geo:\s*\{[^\n]*\},\n', block)
    if old:
        s = s[:m.end() + old.start()] + ("\n" if old.group(0).startswith("\n") else "") + line + s[m.end() + old.end():]
    else:
        t = re.search(r'(\s*)(sameAs:[^\n]*|type:\s*"[^"]*",)\n', block)
        pos = m.end() + (t.end() if t else 0)
        s = s[:pos] + line + s[pos:]
    changed += 1
INDEX.write_text(s)
from collections import Counter
print("voci aggiornate:", changed, Counter(g["modo"] for g in res.values()))
print("paesi usati:", sorted({p for g in res.values() for p in g["paesi"]}))
