# Manuale operativo — claudiocammarano.com

Sito statico Eleventy (v3). Sorgenti in `src/`, output compilato in `_site/`. Deploy automatico su Netlify a ogni `git push` sul branch `main`.

---

## Stack in due righe

| Pezzo | Tecnologia |
|---|---|
| Generatore | Eleventy 3 + Nunjucks |
| Stile | CSS custom (`src/css/style.css`) |
| Deploy | Netlify (auto da git push) |
| Grafo concetti | D3.js v7 (caricato lazy solo desktop) |
| Font | Source Serif 4 (Google Fonts) |
| Ricerca | Pagefind (`npm run index`) |

---

## Struttura cartelle

```
src/
  writings/        # Saggi originali (.md)
  curated/         # Link esterni con commento (.md)
  learning/        # Note di apprendimento (.md)
  _data/
    clusters.js    # Tassonomia cluster → tag
    conceptsIndex.js  # Tassonomia concetti (fonte di verità)
    tagDescriptions.json
    seriesDescriptions.json
  _includes/
    layouts/
      base.njk     # Layout base (header, footer)
      article.njk  # Layout saggi
    components/    # Header, footer ecc.
  css/
    style.css      # Unico file CSS
  images/          # Immagini articoli
  *.njk            # Pagine indice (temi, indice, curated, serie…)
```

---

## Comandi

```bash
# Sviluppo locale con live reload
cd ~/Documents/PROJECTS/claudio-cammarano-site
npm start
# → http://localhost:8080

# Build di produzione
npm run build

# Deploy
git add -A
git commit -m "descrizione"
git push
# Netlify fa il resto in automatico
```

---

## 1. Pubblicare un saggio (writing)

### File
Posizione: `src/writings/YYYY-MM-DD-slug-italiano.md`

Slug: titolo in minuscolo, spazi → trattini, accenti rimossi (`è→e`, `à→a` ecc.), max 6 parole.

### Frontmatter minimo
```yaml
---
layout: layouts/article.njk
title: "Titolo completo"
date: 2026-06-19
description: "1-2 frasi che funzionano da pitch, non da riassunto."
category: ["AI", "Geopolitica"]
lang: "🇮🇹 Italiano"
tags: [writings]
---
```

### Campi opzionali
```yaml
og_image: "/images/nome-file.avif"        # immagine Open Graph e hero
series: "Nome serie, I"                    # formato esatto con virgola + numero romano
english_version: "https://substack.com/…" # URL versione inglese
serie_totale_prevista: 3                   # solo se la serie ha lunghezza pianificata
```

### Tag `category` validi

I valori devono essere scritti esattamente così (maiuscola inclusa):

**Epistemologia & AI:** `AI` · `Epistemologia` · `Filosofia` · `Scrittura`

**Geopolitica & potere:** `Democrazia` · `Geopolitica` · `Medio Oriente` · `Mediterraneo` · `Regimi politici` · `Scenario Planning` · `Teoria dei giochi`

**Editoria & comunicazione:** `Comunicazione` · `Dual Use` · `Formazione` · `Scienze della Comunicazione`

**Italia & istituzioni:** `Bologna` · `Humanities` · `Istituzioni` · `Italia` · `Politica`

### Struttura corpo

```markdown
<!-- Immagine hero (opzionale) -->
<figure class="article-hero">
  <img src="/images/nome.jpg" alt="Descrizione" />
  <figcaption>Didascalia. © Fonte</figcaption>
</figure>

Paragrafo di apertura...

## Prima sezione

Testo. **Asserzioni chiave in grassetto come frasi intere.**
Titoli libri e riviste in *corsivo*.
[Link contestuale](https://url.com) integrato nel testo.

## Seconda sezione

Tabella markdown:

| Colonna A | Colonna B |
|---|---|
| Valore | Valore |

---

## Bibliografia essenziale

Cognome, N. (Anno). *Titolo*. Città: Editore.
```

### Shortcode disponibili

```nunjucks
{% kicker "ETICHETTA BREVE" %}

{% pullquote "Citazione lunga in evidenza con bordo sinistro." %}

{% figure "/images/nome.jpg", "Didascalia figura" %}
```

Info-box (sfondo grigio, bordo blu sinistro):
```html
<div class="info-box">
  <p>Contenuto nota.</p>
</div>
```

### Formule matematiche (LaTeX)

Inserire prima del corpo dell'articolo:
```html
<script>
window.MathJax = {
  tex: { inlineMath: [['$', '$']], displayMath: [['$$', '$$']] },
  svg: { fontCache: 'global' }
};
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

Poi nel testo: `$formula inline$` oppure `$$formula display$$`.

### Collegare i concetti — passaggio manuale, non automatico

A differenza dei curated, per i **writings** il collegamento ai concetti non passa dal frontmatter del file: vive in `src/_data/conceptsIndex.js`. **Salvare il file `.md` non basta.**

- Se l'articolo cita un concetto già in tassonomia → aggiungi `{ title: "Titolo articolo", url: "/writings/slug-articolo/" }` all'array `articles` della voce corrispondente in `conceptsIndex.js` (sezione 4 per il formato).
- Se introduce un concetto nuovo → crea una nuova voce.

**La skill `pubblica-articolo` non fa questo passaggio.** Genera solo il file markdown del writing; non tocca `conceptsIndex.js`. Va fatto a mano, articolo per articolo.

Checklist completa per pubblicare un writing:
1. Salva il file in `src/writings/`
2. Apri `src/_data/conceptsIndex.js` e aggiorna le voci dei concetti citati (vedi sopra)
3. `git push` (o `npm run build` in locale) — non esiste un comando separato di "aggiornamento semantico": indici, pagine `/concetti/`, chip e grafo si rigenerano da soli al build, una volta che i dati sono corretti

---

## 2. Pubblicare un curated

### File
Posizione: `src/curated/YYYY-MM-DD-slug-fonte-tema.md`

Convenzione slug: include spesso nome fonte + tema, es. `2026-04-09-nyt-google-ai-overviews.md`

### Frontmatter
```yaml
---
title: "Titolo originale dell'articolo esterno"
external_url: "https://url-completo.com/articolo"
source: "Nome Autore / Nome Pubblicazione"
date: 2026-06-19
description: "2-4 frasi in prima persona. Non riassunto neutro: commento di merito con punto di vista. Spiega perché vale la pena leggere e come si incastra con i temi del sito."
tags: [curated, ai, geopolitica]
concepts: ["Anthropic", "allineamento AI"]
---
```

`tags`: sempre inizia con `curated`, poi 1-3 tag tematici in minuscolo.

`concepts`: lista di nomi dalla tassonomia concetti (sezione 4). Usa `[]` se nessuno si applica. **I nomi sono case-sensitive.**

### Body
Opzionale. Si usa solo per commenti molto estesi. Di solito il frontmatter basta.

---

## 3. Aggiungere una serie

1. I saggi di una serie usano il campo `series: "Nome serie, I"` (con numero romano).
2. Aggiungere la descrizione della serie in `src/_data/seriesDescriptions.json`:

```json
{
  "Nome serie": "Descrizione della serie per la pagina /serie/."
}
```

3. Nessun altro intervento: le pagine `/serie/` e `/serie/nome-serie/` si generano automaticamente.

---

## 4. Tassonomia concetti (`_data/conceptsIndex.js`)

Questo file è la **fonte di verità** per l'indice analitico e le pagine `/concetti/slug/`.

### Struttura di una voce
```js
{
  name: "Axelrod, Robert",      // nome esatto, usato come ID
  type: "persona",               // persona | teoria | testo | istituzione | luogo | paese
  articles: [                    // articoli writings che lo citano
    { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" }
  ],
  note: "Testo facoltativo."     // nota descrittiva (opzionale)
}
```

### Aggiungere un nuovo concetto

1. Aprire `src/_data/conceptsIndex.js`
2. Aggiungere la voce nell'array, rispettando il formato sopra
3. Per i **writings**: inserire subito gli articoli che lo citano nell'array `articles`
4. Per i **curated**: lasciare `articles: []` e aggiungere il nome nel campo `concepts:` del file curated — il sistema li unisce automaticamente a build time
5. Fare il build: la pagina `/concetti/nome-slug/` appare automaticamente

### Tipi validi

| Tipo | Esempi |
|---|---|
| `persona` | Axelrod, Robert · Trump, Donald · Arendt, Hannah |
| `teoria` | scenario planning · dual use · allineamento AI |
| `testo` | The Evolution of Cooperation · Antifragile |
| `istituzione` | Anthropic · Palantir · DARPA |
| `luogo` | Bologna · Libano / Beirut · Taiwan / TSMC |
| `paese` | Europa · Stati Uniti · Cina · Russia |

---

## 5. Come funziona la navigazione semantica

Il sistema ha tre livelli collegati:

```
/indice/              → tutti i concetti per tipo, con conteggio articoli
                        ogni nome è cliccabile
        ↓
/concetti/slug/       → pagina del singolo concetto
                        grafo D3 (desktop) + chip "concetti vicini" + lista articoli
        ↓
/writings/slug/       → articolo
                        sezione "Concetti" in fondo con chip linkati
```

I chip appaiono **automaticamente al build**, una volta che i dati sono corretti — non richiedono un comando di aggiornamento separato.

- **Writings**: i concetti vengono da `conceptsIndex.js` (campo `articles`) — va aggiornato a mano, vedi sezione 1
- **Curated**: i concetti vengono dal campo `concepts:` nel frontmatter — niente da toccare altrove

**Non esiste un comando per "aggiornare l'indice semantico".** È lo stesso identico `git push` (o `npm run build`) con cui pubblichi il sito. Se i dati a monte (frontmatter o `conceptsIndex.js`) sono corretti, il build successivo rigenera tutto: niente da "richiamare" a parte.

---

## 6. Cluster tematici (`_data/clusters.js`)

Usati per il breadcrumb (`Home · Cluster · Articolo`) e la pagina `/temi/`.

```js
module.exports = {
  "Epistemologia & AI":        ["Filosofia", "Epistemologia", "AI", "Scrittura"],
  "Geopolitica & potere":      ["Geopolitica", "Teoria dei giochi", ...],
  "Editoria & comunicazione":  ["Comunicazione", "Dual Use", ...],
  "Italia & istituzioni":      ["Italia", "Bologna", "Humanities", ...]
};
```

Per aggiungere un tag a un cluster: inserirlo nell'array del cluster corrispondente. Il breadcrumb e la pagina `/temi/` si aggiornano al prossimo build.

---

## 7. Cosa NON toccare senza capire

| File | Perché è delicato |
|---|---|
| `.eleventy.js` | Filtri e collections: un errore blocca il build |
| `src/_includes/layouts/article.njk` | Template di tutti i saggi |
| `src/_includes/layouts/base.njk` | Template base di tutto il sito |
| `src/css/style.css` | Unico file CSS, ~3700 righe |
| `src/_data/conceptsIndex.js` | Fonte di verità per indice e concetti |

---

## 8. Troubleshooting rapido

**Build fallisce con errore Nunjucks**
→ Controllare la sintassi del file `.njk` modificato. Errore più comune: tag `{% %}` non chiusi.

**Pagina concetto non appare**
→ Verificare che il nome in `concepts:` del curated corrisponda **esattamente** (maiuscole comprese) a un `name` in `conceptsIndex.js`.

**Chip concetti non appaiono in un articolo**
→ Per i writings: verificare che l'URL dell'articolo sia presente nell'array `articles` della voce in `conceptsIndex.js`.
→ Per i curated: verificare che il campo `concepts:` sia presente e non vuoto.

**Netlify build fallisce**
→ Guardare il log su `app.netlify.com` → Deploy → log del deploy fallito. Di solito è un errore di sintassi in un file `.md` o `.njk`.

**Grafo D3 non compare**
→ Il grafo è visibile solo su schermo ≥ 900px. Su mobile è sostituito dalla lista articoli.
