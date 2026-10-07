#!/usr/bin/env bash
# Titolo originale dei curated, letto dalla pagina della fonte. Da lanciare dal Mac (serve la rete).
#   scripts/titolo-originale.sh src/curated/2026-10-01-xxx.md [altri file...]
# Stampa per ogni file il titolo attuale e quelli dichiarati dalla pagina (og:title, twitter:title, <title>).
# Molte testate a pagamento espongono comunque og:title. Non scrive nulla.
set -u
cd "$(dirname "$0")/.." || exit 1
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15"
for f in "$@"; do
  url=$(grep -m1 '^external_url:' "$f" | sed 's/^external_url: *//; s/^"//; s/"$//')
  echo "── $(basename "$f")"
  echo "   ora:  $(grep -m1 '^title:' "$f" | sed 's/^title: *//')"
  curl -sL -m 25 -A "$UA" "$url" | python3 -c '
import sys, re, html
t = sys.stdin.read()
seen = set()
for pat in [r"<meta[^>]+property=\"og:title\"[^>]+content=\"([^\"]+)\"", r"<meta[^>]+content=\"([^\"]+)\"[^>]+property=\"og:title\"",
            r"<meta[^>]+name=\"twitter:title\"[^>]+content=\"([^\"]+)\"", r"<title[^>]*>(.*?)</title>"]:
    for m in re.findall(pat, t, re.S | re.I)[:1]:
        v = html.unescape(m.strip())
        if v and v not in seen:
            seen.add(v); print("   fonte:", v)
if not seen: print("   fonte: (nessun titolo leggibile)")
'
done
