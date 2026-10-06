#!/usr/bin/env bash
# Candidati Wikidata per le voci di conceptsIndex.js. Da lanciare dal Mac (serve la rete).
#
#   scripts/wikidata/cerca.sh "hagwon" "mark to market"        cerca quei termini
#   scripts/wikidata/cerca.sh "danno collaterale=collateral damage|collateral casualty"
#                                                            voce=termini di ricerca, separati da |
#   scripts/wikidata/cerca.sh --elenco                         elenca le voci ancora senza sameAs
#   scripts/wikidata/cerca.sh --tutte                          cerca tutte le voci elencate sopra
#
# Senza "=", i termini si ricavano dal nome: "Cognome, Nome" diventa "Nome Cognome",
# "A / B" si cerca come A e come B. Non scrive nulla: stampa i candidati (inglese e
# italiano) con Q-id, etichetta e descrizione. Un Q-id sbagliato è peggio di nessuno.
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
    print("  (nessun candidato)")
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

termini_di() {
  local v="$1"
  case "$v" in
    *=*) printf '%s\n' "${v#*=}" | tr '|' '\n'; return ;;
  esac
  v="${v// δ/}"
  if [[ "$v" =~ ^([^,]+),\ (.+)$ ]]; then
    echo "${BASH_REMATCH[2]} ${BASH_REMATCH[1]}"
  else
    printf '%s\n' "$v" | awk '{ gsub(/ \/ /, "\n"); print }'
  fi
}

cerca() {
  local voce="$1" t lang i=0
  echo "── ${voce%%=*}"
  rm -f "$TMP"/r*.json
  while IFS= read -r t; do
    [ -z "$t" ] && continue
    for lang in en it; do
      i=$((i+1))
      curl -s -m 20 -A "$UA" -G "https://www.wikidata.org/w/api.php" \
        --data-urlencode "action=wbsearchentities" --data-urlencode "search=$t" \
        --data-urlencode "language=$lang" --data-urlencode "uselang=$lang" \
        --data-urlencode "limit=5" --data-urlencode "format=json" > "$(printf '%s/r%03d.json' "$TMP" "$i")"
    done
  done <<EOF
$(termini_di "$voce")
EOF
  python3 "$TMP/stampa.py" "$TMP"/r*.json
  sleep 0.3
}

case "${1:-}" in
  --elenco) voci_mancanti ;;
  --tutte)  voci_mancanti | while IFS= read -r t; do cerca "$t"; done ;;
  "")       sed -n '2,12p' "$0" | sed 's/^# \{0,1\}//' ;;
  *)        for t in "$@"; do cerca "$t"; done ;;
esac
