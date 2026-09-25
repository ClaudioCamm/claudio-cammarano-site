#!/usr/bin/env python3
"""Ricerca Wikidata per le voci nuove di L10 (25/9).
Uso dal Mac: python3 scripts/wikidata/search3.py
Stampa i candidati e scrive scripts/wikidata/out/candidati3.json."""
import json, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from fetch import get, API, OUT

TERMS = {
  "strutturalismo": [("strutturalismo", "it"), ("structuralism", "en")],
  "poststrutturalismo": [("poststrutturalismo", "it"), ("post-structuralism", "en")],
  "Enciclopedia Einaudi": [("Enciclopedia Einaudi", "it"), ("Enciclopedia Einaudi", "en")],
}
out = {}
for voce, queries in TERMS.items():
    seen = []
    for q, lang in queries:
        d = get(API, {"action": "wbsearchentities", "search": q, "language": lang,
                      "uselang": "it", "type": "item", "limit": 5, "format": "json"})
        for x in d.get("search", []):
            if x["id"] not in [s["id"] for s in seen]:
                seen.append({"id": x["id"], "label": x.get("label"), "desc": x.get("description")})
    out[voce] = seen
    print(voce)
    for s in seen: print("  ", s["id"], "·", s["label"], "·", s["desc"])
(OUT / "candidati3.json").write_text(json.dumps(out, ensure_ascii=False, indent=1))
print("Fatto: scripts/wikidata/out/candidati3.json")
