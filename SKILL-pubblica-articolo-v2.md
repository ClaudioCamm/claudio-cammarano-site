---
name: pubblica-articolo
title: Pubblica articolo — claudiocammarano.com
description: Genera file markdown pronti per la pubblicazione su claudiocammarano.com (Eleventy). Supporta writings (saggi originali) e curated (link con commento editoriale). Applica frontmatter corretto, tassonomia categorie, criteri di selezione e concetti, convenzioni filename e stile editoriale di Claudio Cammarano.
---

# Skill: Pubblica articolo — claudiocammarano.com

Quando questa skill è attiva, il tuo unico compito è produrre un file markdown pronto per essere salvato in `src/writings/` o `src/curated/` del sito Eleventy di Claudio Cammarano.

---

## 0. Identifica il tipo di contenuto

Chiedi se non è esplicito:

- **Writing** = saggio originale di Claudio, lungo, con argomento proprio → va in `src/writings/`
- **Curated** = link a un articolo esterno con commento editoriale di Claudio → va in `src/curated/`

Se l'utente incolla un testo lungo e originale → writing.  
Se l'utente incolla un URL con una nota → curated.  
Se non è chiaro, chiedi in una sola domanda.

---

## 1. WRITING — Saggio originale

### 1a. Frontmatter

```yaml
---
layout: layouts/article.njk
title: ""
date: YYYY-MM-DD
description: ""
category: []
lang: "🇮🇹 Italiano"
tags: [writings]
---
```

**Campi obbligatori:**
- `title` — titolo completo, può contenere un em-dash con sottotitolo (es. `"L'ombra del futuro — e l'aritmetica del potere"`)
- `date` — data di pubblicazione in formato ISO
- `description` — 1-2 frasi che funzionano come pitch editoriale, non come riassunto; devono invogliare a leggere e anticipare l'angolo specifico del pezzo
- `category` — scegli 1-3 valori dalla **Tassonomia categorie** qui sotto

**Campi opzionali:**
- `lang` — default `"🇮🇹 Italiano"`, per inglese `"🇬🇧 English"`
- `og_image` — path `/images/nome-file.avif` (solo se l'utente lo specifica)
- `series` — formato esatto: `"Nome serie, I"` / `"Nome serie, II"` ecc. (virgola + spazio + numero romano)
- `english_version` — URL completo della versione inglese su Substack o altrove
- `serie_totale_prevista` — numero intero, solo se la serie ha una lunghezza pianificata

**MathJax** — se il testo contiene formule LaTeX (`$...$` o `$$...$$`), aggiungi questo blocco *prima* del corpo dell'articolo, subito dopo il frontmatter:

```html
<script>
window.MathJax = {
  tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] },
  svg: { fontCache: 'global' }
};
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

### 1b. Struttura del corpo

**Immagine hero** (opzionale, se fornita):
```html
<figure class="article-hero">
  <img src="/images/nome-file.jpg" alt="Descrizione immagine" />
  <figcaption>Didascalia. Crediti © Fonte</figcaption>
</figure>
```

**Corpo in Markdown standard:**
- Paragrafi: prosa densa, periodi lunghi con subordinate, prima persona non confessionale
- Sezioni: `## Titolo sezione` (H2), `### Sottosezione` (H3) se necessario
- Grassetto `**testo**`: usato per asserzioni concettuali chiave (frasi complete, non singole parole)
- Corsivo `*testo*`: titoli di libri/riviste, termini tecnici al primo uso
- Link inline: `[testo del link](url)` con contesto sufficiente a capire perché il link importa
- Tabelle: Markdown standard con pipe `|`
- Separatore di sezione: `---` (riga orizzontale)
- Citazioni dirette: `> testo` per blockquote breve; `{% pullquote "testo" %}` per citazione lunga in evidenza

**Shortcode disponibili:**
```
{% kicker "ETICHETTA BREVE" %}          — label uppercase sopra un paragrafo
{% pullquote "Citazione in evidenza" %} — blockquote grande con bordo sinistro
```

**Per info-box** (nota a parte con sfondo grigio e bordo sinistro blu):
```html
<div class="info-box">
  <p>Testo della nota.</p>
</div>
```

**Per figure con didascalia:**
```
{% figure "/images/nome.jpg", "Didascalia figura" %}
```

**Tabelle con didascalia:**
Scrivi la tabella Markdown standard, poi aggiungi sotto la didascalia con la classe del sito:

```html
<p class="caption">Tabella 1. Descrizione della tabella.</p>
```

Numerazione col punto (`Tabella 1.`), non coi due punti. **Non** usare `*Tabella: descrizione.*` in corsivo: il markdown lo rende come un normale paragrafo, a 18px e a giustezza piena, e si confonde col corpo del testo. La classe `.caption` è la stessa di `figcaption` e `.diagram-caption` — 13px, grigia, corsivo, filetto a sinistra — così tutte le didascalie del sito sono un sistema solo.

**Attenzione alle righe vuote nell'HTML grezzo:** markdown-it chiude un blocco HTML alla prima riga vuota. Dentro un `<div>`, una `<figure>`, una `<table>` o un `<svg>` scritti a mano non lasciare mai righe vuote, altrimenti tutto ciò che segue esce dal blocco e viene impaginato come testo corrente.

### 1c. Bibliografia

Se il pezzo ha fonti accademiche o libri, chiudi con:

```markdown
---

## Bibliografia essenziale

Cognome, N. (Anno). *Titolo libro*. Città: Editore.

Cognome, N., & Cognome, N. (Anno). "Titolo articolo." *Nome rivista*, vol(n), pp–pp.
```

Stile: autore-data, titoli libri in corsivo, titoli articoli tra virgolette.

### 1d. Filename

Formato: `YYYY-MM-DD-slug-in-italiano.md`

Lo slug è: titolo in minuscolo, spazi → trattini, accenti rimossi (à→a, è→e, ì→i, ò→o, ù→u), caratteri speciali rimossi, max 6-7 parole significative.

Esempio: `"L'ombra del futuro"` → `2026-04-15-lombra-del-futuro.md`

### 1e. Collegare i concetti — produrre il blocco per conceptsIndex.js

A differenza dei curated, per i writings il collegamento ai concetti **non** passa dal frontmatter: vive in `src/_data/conceptsIndex.js`. Salvare il file `.md` non basta — questa skill deve produrre anche il blocco da incollare lì, altrimenti l'articolo resta invisibile alla navigazione semantica (nessun chip, nessuna pagina `/concetti/` aggiornata).

Procedimento:

1. Leggi il testo del saggio e individua i concetti rilevanti (persone, teorie, testi, istituzioni, luoghi, paesi) usando la **Tassonomia concetti** (sezione 4) come riferimento. Assegna un concetto solo se il testo lo affronta come tema, non come menzione di passaggio.
2. Per ogni concetto **già presente** in tassonomia, produci la riga da aggiungere al suo array `articles`:
   ```js
   { title: "Titolo del saggio", url: "/writings/slug-del-file/" }
   ```
3. Per ogni concetto **nuovo** (non in tassonomia), produci la voce completa da aggiungere all'array principale, nella sezione del `type` corretto:
   ```js
   {
     name: "Nome Cognome",
     type: "persona",
     articles: [
       { title: "Titolo del saggio", url: "/writings/slug-del-file/" }
     ]
   }
   ```
4. Presenta questo output come blocco separato e chiaramente etichettato (vedi sezione 6), così Claudio può copiarlo in `conceptsIndex.js` senza doverlo scrivere a mano.

Questo passaggio non è opzionale: senza, il saggio è pubblicato ma resta fuori dalla rete dei concetti.

---

## 2. CURATED — Link con commento

### 2a. Frontmatter

```yaml
---
title: ""
external_url: ""
source: ""
date: YYYY-MM-DD
criterio: ""
perche: ""
description: ""
tags: [curated]
concepts: []
---
```

**Campi obbligatori:**
- `title` — titolo originale dell'articolo esterno (nella lingua originale)
- `external_url` — URL completo
- `source` — "Nome Autore / Nome Pubblicazione" oppure solo "Nome Pubblicazione"
- `date` — data in cui Claudio lo aggiunge (non necessariamente data di pubblicazione originale)
- `description` — 2-4 frasi nel registro editoriale di Claudio: spiega PERCHÉ vale la pena leggere questo pezzo, cosa porta di nuovo, come si incastra con temi ricorrenti del sito. Non è un riassunto neutro; è un commento di merito con punto di vista
- `tags` — sempre `[curated]` + 1-3 tag tematici in minuscolo tra quelli già usati nel sito (es. `ai`, `geopolitica`, `economia`, `democrazia`, `semiconduttori`, `europa`)
- `concepts` — lista di concetti dalla **Tassonomia concetti** qui sotto, o `[]` se nessuno si applica

**Campi del criterio di selezione (raccomandati, non obbligatori):**

- `criterio` — lo slug del perché il pezzo entra in archivio. **Uno solo** (mai doppie
  assegnazioni), scelto dalla lista chiusa qui sotto. La lista vive in
  `src/_data/criteri.json`: valida sempre lo slug contro quel file. Se lo slug non è
  in lista, il badge semplicemente non viene renderizzato — nessun errore di build —
  ma questa skill non deve mai produrre slug fuori lista.

  1. `lettura-di-mercato` — mappa la struttura economica di un settore
     (caso tipo: Diegoli sui podcast lunghi)
  2. `riferimento-tecnico` — risorsa fondativa del tema
     (caso tipo: Karpathy, Deep Dive LLM)
  3. `metodo-di-lavoro` — cosa cambia nel processo o nell'organizzazione del lavoro
     (caso tipo: Vogels, two-pizza culture)
  4. `strumento-concettuale` — tesi o categoria da portare su altri terreni
     (caso tipo: Tarchetti, ecologia dei media)
  5. `dato-che-corregge` — evidenza (numero, trend o caso) che smentisce un consenso
     (caso tipo: Economist sulla demenza)
  6. `elementi-di-scenario` — aggiorna il quadro su un fronte che il sito segue:
     segnale, caso, storia esemplare, senza tesi portabile né dato che corregge
     (caso tipo: la sommozzatrice del Nord Stream).
     **Regola d'uso: ultima scelta, mai prima scelta** — si assegna solo se nessun
     altro criterio si applica.

- `perche` — glossa libera opzionale, **una sola frase** tra virgolette doppie, mostrata
  sotto il badge. Non è un secondo riassunto: è la ragione d'archivio condensata.
  Quasi sempre è già dentro la `description` (il passaggio "entra nel sito perché…"):
  estraila e condensala, non inventarla. Registro in prima persona, senza virgolette
  doppie interne.

- `rinvio` — opzionale, path interno del pezzo o della serie con cui questo curated
  dialoga (es. `/curated/2026-06-26-ottaviani-data-journalism-ai-reuters/`).
  Si usa solo quando il dialogo è esplicito nel commento. Il template lo rende come
  "In dialogo con →" risolvendo automaticamente il titolo.

**Regole editoriali:**
- Un solo criterio dominante per pezzo. Se un pezzo ha due perché di natura diversa,
  scegli il dominante; il secondo può vivere nel `rinvio` o nella `description`.
- Nessuna casella "altro": se nessun criterio si applica davvero, il pezzo
  probabilmente non deve entrare in archivio — la lista funge anche da filtro
  in ingresso. Segnalalo a Claudio invece di forzare.
- **La skill valida, non è un requisito.** La pubblicazione manuale resta pienamente
  supportata: un curated scritto a mano senza `criterio` e `perche` rende esattamente
  come prima (fallback totale, nessun build rotto). Questi campi costano al massimo
  due righe di YAML.

### 2b. Body opzionale

Il corpo markdown è facoltativo. Si usa solo per commenti molto estesi che non entrano nella `description`. Se presente, è in prima persona e segue le stesse convenzioni dei writings.

### 2c. Filename

Formato: `YYYY-MM-DD-slug-fonte-tema.md`

Lo slug include tipicamente fonte e argomento: `2026-04-09-nyt-google-ai-overviews-accuracy.md`

---

## 3. TASSONOMIA CATEGORIE (writings — campo `category`)

Scegli dai valori esatti qui sotto. I valori appartengono a cluster tematici; puoi mescolare cluster diversi se il pezzo è genuinamente trasversale.

**Cluster "Epistemologia & AI"**
- `AI`
- `Epistemologia`
- `Filosofia`
- `Scrittura`

**Cluster "Geopolitica & potere"**
- `Democrazia`
- `Geopolitica`
- `Medio Oriente`
- `Mediterraneo`
- `Regimi politici`
- `Scenario Planning`
- `Teoria dei giochi`

**Cluster "Editoria & comunicazione"**
- `Comunicazione`
- `Dual Use`
- `Formazione`
- `Scienze della Comunicazione`

**Cluster "Italia & istituzioni"**
- `Bologna`
- `Humanities`
- `Istituzioni`
- `Italia`
- `Politica`

**Regola:** usa i nomi esatti con maiuscola come indicato. `category` è un array YAML anche con un solo valore: `category: ["AI"]`.

---

## 4. TASSONOMIA CONCETTI (per entrambi i tipi di contenuto)

Usa i nomi **esattamente come scritti** qui sotto (case-sensitive). Questa tassonomia serve sia per il campo `concepts:` dei curated, sia per individuare quali concetti citare nel blocco `conceptsIndex.js` dei writings (sezione 1e). Se un concetto applicabile non è in lista, per i curated lascia `[]` e segnalalo; per i writings proponi la nuova voce completa (sezione 1e, punto 3) e segnalala comunque, perché Claudio decida se accettarla.

### persona
- Acemoglu, Daron
- Amodei, Dario
- Arendt, Hannah
- Averroè
- Axelrod, Robert
- Braudel, Fernand
- Clark, Andy
- Derrida, Jacques
- Descartes, René
- Eco, Umberto
- Ferraris, Maurizio
- Floridi, Luciano
- Foucault, Michel
- Friston, Karl
- Gerasimov, Valery
- Habermas, Jürgen
- Hegseth, Pete
- Kahneman, Daniel
- Karp, Alexander
- Kojève, Alexandre
- Lyotard, Jean-François
- Netanyahu, Benjamin
- Orbán, Viktor
- Platone
- Putin, Vladimir
- Putnam, Robert
- Spinoza, Baruch
- Taleb, Nassim Nicholas
- Thiel, Peter
- Thompson, Ben
- Trump, Donald
- Varela, Francisco
- Vico, Giambattista
- Wack, Pierre
- Xi, Jinping
- Zelensky, Volodymyr
- van Middelaar, Luuk

### teoria
- LLM come attante zero
- Mavi Vatan
- Tit-for-Tat
- allineamento AI
- antifragilità
- capitale semantico
- cigni neri
- controllo riflessivo
- dilemma del prigioniero iterato
- dilemma di Collingridge
- disputa sugli universali
- dottrina Gerasimov
- dual use
- embodied mind
- ermeneutica del sospetto
- extended mind
- fattore di sconto δ
- free-energy principle
- general purpose technologies
- incredulità verso le metanarrazioni
- inemendabilità della realtà
- istituzioni inclusive vs. estrattive
- ragione comunicativa
- scenario planning
- shadow of the future
- two-level games
- verum ipsum factum
- win-set domestico

### testo
- Antifragile
- Dialektik der Aufklärung
- Discours de la méthode
- La condition postmoderne
- The Embodied Mind
- The Evolution of Cooperation
- Why Nations Fail

### istituzione
- Anthropic
- DARPA
- Palantir

### luogo
- Bergamo / Val Brembana
- Bologna
- Iran 1978–79
- Libano / Beirut
- Mediterraneo come spazio strategico
- Taiwan / TSMC

### paese
- Cina
- Europa
- Iran
- Russia
- Stati Uniti
- Ucraina
- Unione Europea

**Regola di assegnazione:** assegna un concetto solo se il testo lo affronta direttamente o come tema centrale, non come menzione di passaggio. In caso di dubbio, preferisci `[]`.

---

## 5. VOCE E STILE EDITORIALE

Claudio scrive in italiano (salvo indicazione contraria). Il suo registro è:

- Analitico senza essere arido: usa la struttura logica del ragionamento scientifico ma mantiene la leggibilità
- Prima persona presente, non confessionale: "mi pare", "osservo", "ritengo" — mai diaristico
- Ironia secca, usata raramente e mai per sminuire l'argomento
- Citazioni accademiche integrate nel testo (non solo in nota): l'autore e l'opera sono nominate nel corpo del pezzo
- Periodi lunghi con subordinate, ma mai labirintici: ogni paragrafo ha un'idea principale identificabile
- I grassetti marcano tesi, non parole chiave: `**La cooperazione è un fenomeno essenzialmente prospettico**` — frase intera, non `la **cooperazione** è...`
- Le `description` curated sono in prima persona e hanno un punto di vista: non "l'articolo parla di X" ma "X è il motivo per cui questo pezzo vale la pena"

---

## 6. OUTPUT ATTESO

Produci sempre:

1. **Il filename** suggerito (`YYYY-MM-DD-slug.md`)
2. **Il file markdown completo** — frontmatter + corpo — pronto per essere salvato senza modifiche
3. **Solo per i writings**: il **blocco conceptsIndex.js** (sezione 1e), in un blocco di codice separato e chiaramente etichettato "Da incollare in conceptsIndex.js", diviso in due parti se necessario — righe da aggiungere ad array `articles` esistenti, e voci completamente nuove
4. **Una nota breve** (2-3 righe) su: categorie/concetti assegnati e perché; per i curated anche il criterio scelto e la motivazione in una riga (segnala se era un caso bivalente e quale alternativa hai scartato); e eventuali campi che richiedono input di Claudio (immagine hero, URL versione inglese, ecc.)

Se mancano informazioni essenziali (URL per curated, data, titolo), chiedi prima di produrre l'output. Se mancano informazioni opzionali, producile ugualmente con un placeholder segnalato tra `[PLACEHOLDER: descrizione]`. Se per un curated nessun criterio si applica, non forzare: segnalalo — la lista dei criteri è anche il filtro in ingresso dell'archivio.

Non considerare un writing "pronto" finché non hai prodotto anche il blocco conceptsIndex.js: è parte integrante dell'output, non un'aggiunta facoltativa.
