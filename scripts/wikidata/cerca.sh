#!/usr/bin/env bash
# Candidati Wikidata per le voci di conceptsIndex.js. Da lanciare dal Mac (serve la rete).
#
#   scripts/wikidata/cerca.sh "hagwon" "mark to market"   cerca quei termini
#   scripts/wikidata/cerca.sh --elenco                    elenca le voci ancora senza sameAs
#   scripts/wikidata/cerca.sh --tutte                     cerca tutte le voci elencate sopra
#
# Non scrive nulla: stampa i primi cinque candidati (inglese e italiano) con Q-id,
# etichetta e descrizione. Si sceglie guardando la descrizione e si risponde con le
# associazioni. Un Q-id sbagliato è peggio di nessun Q-id: nel dubbio, nessuno.
set -u
cd "$(dirname "$0")/../.." || exit 1
UA="claudiocammarano.com wikidata-check (https://claudiocammarano.com)"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

cat > "$TMP/stampa.py" <<'PYEOF'
import sys, json
seen = set()
for p in sys.argv[1:]:
    try:
        d = json.load(open(p))
    except Exception:
        continue
    for r in d.get("search", []):
        if r["id"] in seen:
            continue
        seen.add(r["id"])
        print("  %-11s %-38s %s" % (r["id"], (r.get("label") or "")[:38], (r.get("description") or "")[:90]))
if not seen:
    print("  (nessun candidato, o rete non raggiungibile)")
PYEOF

voci_mancanti() {
  node -e '
    const c = require("./src/_data/conceptsIndex.js");
    const a = Array.isArray(c) ? c : (c.default || Object.values(c)[0]);
    const d = require("./scripts/wikidata/decisioni.json");
    const skip = new Set([...(d.conio||[]), ...Object.keys(d.nessun_qid||{}), ...Object.keys(d.da_verificare||{})]);
    for (const x of a) if (!(x.sameAs && x.sameAs.length) && !skip.has(x.name)) console.log(x.name);
  '
}

cerca() {
  local term="$1" lang
  echo "── $term"
  for lang in en it; do
    curl -s -m 20 -A "$UA" -G "https://www.wikidata.org/w/api.php" \
      --data-urlencode "action=wbsearchentities" --data-urlencode "search=$term" \
      --data-urlencode "language=$lang" --data-urlencode "uselang=$lang" \
      --data-urlencode "limit=5" --data-urlencode "format=json" > "$TMP/$lang.json"
  done
  python3 "$TMP/stampa.py" "$TMP/en.json" "$TMP/it.json"
  sleep 0.3
}

case "${1:-}" in
  --elenco) voci_mancanti ;;
  --tutte)  voci_mancanti | while IFS= read -r t; do cerca "$t"; done ;;
  "")       sed -n '2,9p' "$0" | sed 's/^# \{0,1\}//' ;;
  *)        for t in "$@"; do cerca "$t"; done ;;
esac
