#!/usr/bin/env python3
"""Interroga Wikidata per l'indice dei concetti (audit 2026, L7-L8).

Si lancia dal Mac (serve la rete):  python3 scripts/wikidata/fetch.py
Solo libreria standard. Scrive in scripts/wikidata/out/:
  candidati.json  per le voci senza Q-id: i primi candidati da Wikidata
                  (ricerca in italiano e in inglese), da scegliere a mano;
  geo.json        per le voci con Q-id: i paesi collegati (origine,
                  cittadinanza, sede, luogo di lavoro, giurisdizione...).
Non modifica l'indice: le scelte si applicano dopo la revisione.
"""
import json, pathlib, re, subprocess, sys, time, urllib.parse, urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / "scripts" / "wikidata" / "out"
UA = "claudiocammarano.com-concept-index/1.0 (https://claudiocammarano.com; c.cammarano@gmail.com)"
API = "https://www.wikidata.org/w/api.php"
SPARQL = "https://query.wikidata.org/sparql"

def get(url, params):
    q = url + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(q, headers={"User-Agent": UA, "Accept": "application/json"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.load(r)
        except Exception as e:
            print(f"  riprovo ({e})", file=sys.stderr)
            time.sleep(3 * (attempt + 1))
    raise RuntimeError("Wikidata non risponde: " + q[:120])

def concepts():
    js = ("const c=require('./src/_data/conceptsIndex.js');"
          "console.log(JSON.stringify((typeof c==='function'?c():c).map(x=>"
          "({name:x.name,type:x.type,aliases:x.aliases||[],sameAs:x.sameAs||[]}))))")
    return json.loads(subprocess.run(["node", "-e", js], cwd=ROOT, capture_output=True,
                                     text=True, check=True).stdout)

def qid(entry):
    for u in entry["sameAs"]:
        m = re.search(r"wikidata\.org/(?:wiki|entity)/(Q\d+)", u)
        if m: return m.group(1)
    return None

def variants(e):
    n = e["name"]
    out = [n]
    if e["type"] == "persona" and "," in n:
        last, first = [x.strip() for x in n.split(",", 1)]
        out.insert(0, f"{first} {last}")
    return out + list(e["aliases"])

def search(term, lang):
    d = get(API, {"action": "wbsearchentities", "search": term, "language": lang,
                  "uselang": "it", "type": "item", "limit": 5, "format": "json"})
    return [{"id": x["id"], "label": x.get("label", ""), "description": x.get("description", "")}
            for x in d.get("search", [])]

GEO_QUERY = """
SELECT ?item ?prop ?country ?countryLabel WHERE {
  VALUES ?item { %s }
  { ?item wdt:P495 ?country . BIND("origine" AS ?prop) } UNION
  { ?item wdt:P27 ?country . BIND("cittadinanza" AS ?prop) } UNION
  { ?item wdt:P17 ?country . BIND("paese" AS ?prop) } UNION
  { ?item wdt:P159/wdt:P17 ?country . BIND("sede" AS ?prop) } UNION
  { ?item wdt:P937/wdt:P17 ?country . BIND("luogo di lavoro" AS ?prop) } UNION
  { ?item wdt:P1001 ?country . BIND("giurisdizione" AS ?prop) } UNION
  { ?item wdt:P2341 ?country . BIND("diffusione" AS ?prop) } UNION
  { ?item wdt:P276/wdt:P17 ?country . BIND("luogo" AS ?prop) }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "it,en". }
}"""

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    cs = concepts()
    senza = [c for c in cs if not qid(c)]
    con = [c for c in cs if qid(c)]
    print(f"{len(cs)} voci: {len(con)} con Q-id, {len(senza)} senza")

    cand = {}
    for i, c in enumerate(senza, 1):
        seen, lst = set(), []
        for term in variants(c)[:3]:
            for lang in ("it", "en"):
                for x in search(term, lang):
                    if x["id"] not in seen:
                        seen.add(x["id"]); lst.append(x)
                time.sleep(0.3)
        cand[c["name"]] = {"type": c["type"], "candidati": lst[:8]}
        print(f"  [{i}/{len(senza)}] {c['name']}: {len(lst)} candidati")
    (OUT / "candidati.json").write_text(json.dumps(cand, ensure_ascii=False, indent=2))

    geo = {c["name"]: {"qid": qid(c), "type": c["type"], "paesi": []} for c in con}
    by_q = {}
    for c in con: by_q.setdefault(qid(c), []).append(c["name"])
    qs = list(by_q)
    for i in range(0, len(qs), 40):
        chunk = qs[i:i + 40]
        d = get(SPARQL, {"query": GEO_QUERY % " ".join("wd:" + q for q in chunk), "format": "json"})
        for b in d["results"]["bindings"]:
            q = b["item"]["value"].rsplit("/", 1)[1]
            row = {"rel": b["prop"]["value"], "qid": b["country"]["value"].rsplit("/", 1)[1],
                   "label": b.get("countryLabel", {}).get("value", "")}
            for n in by_q[q]:
                if row not in geo[n]["paesi"]: geo[n]["paesi"].append(row)
        print(f"  geo {min(i + 40, len(qs))}/{len(qs)}")
        time.sleep(1)
    (OUT / "geo.json").write_text(json.dumps(geo, ensure_ascii=False, indent=2))
    print("Fatto: scripts/wikidata/out/candidati.json e geo.json")

if __name__ == "__main__":
    main()
