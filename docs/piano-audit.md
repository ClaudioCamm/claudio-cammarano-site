# Piano audit 2026 — stato dei lavori

Decisioni e piano completo: Project claude.ai "Costruire Il Mio Sito Personale", documenti `claude/decisioni-audit-2026-09-24.md` e `claude/piano-lavori-audit-2026.md`.

## Regole
- Un lotto = un branch `audit/Lx-nome` = una PR con anteprima Netlify = un merge.
- Commit frequenti. Chi riprende parte da qui e dal branch aperto.
- Chiusura lotto: casella spuntata qui, misure prima/dopo nella PR, test su telefono reale (Claudio), merge.

## Stato
- [x] **L0** Misure di partenza e piano nel repo
- [x] **L1** Correzioni rapide EN — tagline "Ideas, claims, checks"; riga "Paper α1, in preparation → Project status"; niente hreflang/translation fra le due home. **In sospeso:** il link D2 "Not a researcher? Try the quick test →" (il hero ha già un link al measuring bench: da chiarire con Claudio)
- [x] **L2** Testata — nav (b) con gruppo "Esplora" (anche mobile); bottone "Research EN" / "Saggi IT" con tooltip
- [x] **L3a** Raccordo — /da-qui/ "Che cosa c'è in inglese"; righe nelle About; riga inviti nell'About; riga IT su Lab (dipende da L2)
- [x] **L3b** Traduzioni — /en/episteme-advisory/ e /en/colophon/ pubblicabili come BOZZE: attendono la revisione dei testi di Claudio prima del merge
- [x] **L4** Home IT — serie dopo il claim; "Ultimo saggio" in una riga; Lab in fondo; spazio per la carta
- [x] **L5** Tecnica — font self-hosted (Source Serif 4, Cormorant Garamond per le visualizzazioni dual-use); MathJax 3.2.2 ospitato in /vendor/mathjax/ (già caricato solo nei 4 saggi con formule); rimozione Decap CMS e del dns-prefetch jsDelivr
- [x] **L6** PDF/ePub — .github/workflows/ebooks.yml + scripts/ebooks/ (Pandoc + XeLaTeX, Source Serif 4); soglia 3000 parole = 15 minuti; link "Scarica: PDF · ePub" in testa e in coda ai saggi quando i file esistono. I file li genera la Action dopo il merge su main
- [x] **L7** Wikidata (216 voci su 268 agganciate; decisioni in scripts/wikidata/decisioni.json, anche per la geografia delle voci senza Q-id) — Q-id per le 92 voci senza sameAs; i termini di conio solo in /ns/
- [x] **L8** Layer geografico (campo geo su 268 voci: 166 dirette, 49 dal teorico, 53 senza; forme-stato in src/_data/geoPaesi.json; controllo scripts/validate-geo.js nel build) — campo `geo`, validazione, precompilazione Wikidata, revisione (dipende da L7)
- [ ] **L9** Carta di Goode "Dove guarda questo sito" (dipende da L4, L8)

Fuori piano: preprint rinviato ad α1 (il v7 resta scaricabile); Episteme su dominio proprio; GA4 resta.

## Misure di partenza (L0, 24 settembre 2026, build locale)
Peso compresso (gzip) delle risorse del sito, esclusi Google Fonts e GA4:

| Pagina | HTML | CSS+JS locali | Immagini | Totale |
|---|---|---|---|---|
| Home IT `/` | 10,9 KB | 27,6 KB | 0 | 38,5 KB |
| Home EN `/en/` | 9,0 KB | 27,6 KB | 0 | 36,6 KB |
| Saggio lungo "La mappa e il crinale" | 27,7 KB | 27,6 KB | 83,4 KB | 138,7 KB |

Risorse esterne caricate in ogni pagina: Google Fonts (CSS + font da fonts.gstatic.com), GA4 (googletagmanager.com), dns-prefetch verso cdn.jsdelivr.net. MathJax solo nelle pagine con formule.

Budget advisory: home ≤ 200 KB compressi esclusi i font → rispettato (GA4 escluso per decisione). Da misurare sulle anteprime Netlify: LCP, CLS e accessibilità (Lighthouse / PageSpeed Insights).
