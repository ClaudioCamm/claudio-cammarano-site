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
    # Usa curl di sistema: su macOS il Python di python.org non trova i
    # certificati, curl usa quelli del portachiavi.
    q = url + "?" + urllib.parse.urlencode(params)
    for attempt in range(4):
        r = subprocess.run(["curl", "-sS", "-f", "--max-time", "150", "-A", UA,
                            "-H", "Accept: application/json", q],
                           capture_output=True, text=True)
        if r.returncode == 0:
            try:
                return json.loads(r.stdout)
            except ValueError:
                pass
        print(f"  riprovo ({r.stderr.strip()[:100]})", file=sys.stderr)
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

GEO_QUERY_UNUSED = """
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
    if (OUT / "candidati.json").exists():
        print("candidati.json c'e' gia': salto la ricerca dei candidati")
        senza = []
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
    if cand:
        (OUT / "candidati.json").write_text(json.dumps(cand, ensure_ascii=False, indent=2))

    # Geografia via API wbgetentities (piu' affidabile del servizio SPARQL).
    # Proprieta' diverse per tipo di voce; si scartano le affermazioni con
    # data di fine (P582) o deprecate, e si preferiscono quelle "preferred":
    # cosi' Francoforte da' Germania e non tutti gli Stati storici.
    BY_TYPE = {
        "persona": [("P27", "cittadinanza", False), ("P937", "luogo di lavoro", True)],
        "istituzione": [("P17", "paese", False), ("P159", "sede", True)],
        "testo": [("P495", "origine", False), ("P17", "paese", False)],
        "teoria": [("P495", "origine", False), ("P1001", "giurisdizione", False),
                   ("P2341", "diffusione", False), ("P17", "paese", False)],
        "luogo": [("P17", "paese", False)],
        "paese": [("P17", "paese", False)],
    }

    def entities(ids, props):
        res = {}
        for i in range(0, len(ids), 50):
            d = get(API, {"action": "wbgetentities", "ids": "|".join(ids[i:i + 50]),
                          "props": props, "languages": "it|en", "format": "json"})
            res.update(d.get("entities", {}))
            time.sleep(0.5)
        return res

    def targets(ent, pid):
        cls = [c for c in ent.get("claims", {}).get(pid, [])
               if c.get("rank") != "deprecated" and "P582" not in c.get("qualifiers", {})]
        pref = [c for c in cls if c.get("rank") == "preferred"]
        out = []
        for cl in (pref or cls):
            v = cl.get("mainsnak", {}).get("datavalue", {}).get("value")
            if isinstance(v, dict) and v.get("id"): out.append(v["id"])
        return out

    by_q, types = {}, {}
    for c in con:
        by_q.setdefault(qid(c), []).append(c["name"]); types[qid(c)] = c["type"]
    items = entities(list(by_q), "claims")
    print(f"  lette {len(items)} voci")
    places = sorted({t for q, e in items.items() for p, _, via in BY_TYPE.get(types[q], [])
                     if via for t in targets(e, p)})
    place_ents = entities(places, "claims") if places else {}
    rows = {}
    for q, e in items.items():
        lst = []
        for p, rel, via in BY_TYPE.get(types[q], []):
            if lst and via:
                continue  # il luogo di lavoro o la sede servono solo se manca il resto
            for t in targets(e, p):
                if via:
                    lst += [(rel, c) for c in targets(place_ents.get(t, {}), "P17")]
                else:
                    lst.append((rel, t))
        if types[q] in ("paese", "luogo") and not lst:
            lst.append(("se stesso", q))
        rows[q] = lst
    countries = sorted({t for lst in rows.values() for _, t in lst})
    labels = entities(countries, "labels") if countries else {}
    def lab(q):
        l = labels.get(q, {}).get("labels", {})
        return (l.get("it") or l.get("en") or {}).get("value", q)
    geo = {}
    for q, names in by_q.items():
        seen, paesi = set(), []
        for rel, t in rows.get(q, []):
            if (rel, t) not in seen:
                seen.add((rel, t)); paesi.append({"rel": rel, "qid": t, "label": lab(t)})
        for n in names:
            geo[n] = {"qid": q, "type": types[q], "paesi": paesi}
    (OUT / "geo.json").write_text(json.dumps(geo, ensure_ascii=False, indent=2))
    print("Fatto: scripts/wikidata/out/candidati.json e geo.json")

if __name__ == "__main__":
    main()
