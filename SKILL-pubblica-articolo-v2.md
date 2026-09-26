# Skill `pubblica-articolo` — dov'è la fonte di verità

**La skill vive nelle impostazioni di Claude (Capacità → Skill), non in questo repo.**

Questo file conteneva una copia integrale del testo della skill, ferma al 26 agosto
2026. Nel frattempo la skill viva è andata avanti — fra le altre cose con la sezione
1e-bis sulla geografia obbligatoria — e la copia è rimasta indietro senza che nessuno
se ne accorgesse. Due fonti di verità che divergono sono peggio di una sola: la copia
è stata sostituita da questo promemoria.

Se serve leggere la skill, aprila dalle impostazioni. Se serve modificarla, si modifica
lì: quello che sta nel repo non ha alcun effetto su come la skill si comporta.

## Cosa deve restare allineato fra skill e repo

La skill descrive convenzioni che vivono nel codice. Quando cambiano qui, vanno
riportate lì — nessun controllo automatico lo verifica:

| Nel repo | Nella skill |
|---|---|
| `src/_data/criteri.json` | la lista chiusa dei criteri di selezione (§2a) |
| `src/_data/geoPaesi.json` + `scripts/validate-geo.js` | il campo `geo` e le regole sui nomi paese (§1e-bis) |
| `src/_data/curatedTagAliases.js` + `scripts/check-tags.js` | la regola sui tag decorativi (§2a) |
| `src/_data/clusters.js` + `tagDescriptions.json` | la tassonomia categorie (§3) e le categorie nuove (§1f) |
| `src/_data/aiNotation.js` + audit in `.eleventy.js` | i codici `ai_prose` e `ai_scope` (§1a-bis) |
| `src/_data/conceptsIndex.js` | l'estratto della tassonomia concetti (§4), che è solo un estratto |

Il manuale operativo del sito resta `MANUALE.md`, ed è quello la fonte di verità
per il funzionamento: la skill ne è la versione operativa per chi scrive i pezzi.

## Storia degli allineamenti

- **26 agosto 2026** — versione copiata qui (poi rimasta indietro).
- **settembre 2026** — nella skill viva: sezione 1e-bis, geografia obbligatoria.
- **26 settembre 2026** — nella skill viva: `date` dei curated = data di pubblicazione
  originale del pezzo esterno (non dell'archiviazione); `perche` che deve reggersi da
  solo; regola sui tag non mappati; avvertenza sull'ordine dei campi in
  `conceptsIndex.js`. Questo file è diventato un promemoria.
