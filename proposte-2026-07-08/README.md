# Proposte di modifica — 8 luglio 2026

Sette patch indipendenti, applicabili una a una dalla radice del repository con:

```
git apply proposte-2026-07-08/patches/NOME.patch
```

Per rifiutarne una basta non applicarla. Per annullare una patch già applicata: `git apply -R ...`. Nessun commit è stato fatto. La build completa con tutte le patch applicate è stata verificata (Eleventy 3.1.2, 365 file, nessun errore).

## Le proposte

**01-about-attacco.patch** — Sostituisce l'apertura dell'About con i due paragrafi concordati (De Agostini + quattro università; le svolte del settore). Raccordo minimo con il paragrafo successivo: l'attacco «Il mio approccio è interdisciplinare per necessità, non per moda» diventa «A quella domanda serve un approccio interdisciplinare: per necessità, non per moda», così da agganciarsi a «Ogni volta la stessa domanda». Il resto della pagina è invariato.

**02-about-jsonld-cmo.patch** — Rimuove la frase "Profile suited for CMO roles..." dalla description del JSON-LD dell'About. Nota: tocca il testo (non la struttura) dello Schema.org, in deroga al vincolo, perché è l'unico punto dell'About in cui compare l'etichetta CMO; il testo visibile non la conteneva. La stessa frase resta in `index.njk` (JSON-LD) e in `profilo.njk` (testo e JSON-LD): fuori perimetro, dimmi se vuoi un patch anche lì.

**03-home-start-here.patch** — Box "Start here" in homepage, sopra il flusso degli articoli. Due colonne: About e tre saggi con riga di contesto e tempo di lettura calcolato dal filtro `readingTime` del sito (oggi: 15, 25 e 33 min). Saggi scelti: *L'infrastruttura del sapere* (validazione AI), *La macchina e la lotta*, *L'ombra del futuro*. Avvertenza: tra i writings non esiste un saggio dedicato al mercato del libro in senso stretto; *La macchina e la lotta* è il più vicino al versante editoriale. Per sostituirne uno basta cambiare URL e riga di contesto nell'array `startHere` in `index.njk`. Stile: sfondo `--color-bg-alt`, bordo, nessun elemento promozionale; compatibile con la dark mode (usa solo variabili CSS).

**04-substack-embed.patch** — Form di iscrizione Substack embeddato (iframe `substack.com/embed`) in due punti: nel blocco a fine articolo (al posto del solo bottone, che diventa un link "Archivio") e nel footer. Sono due hunk distinti: se preferisci un solo punto, applica il patch e rimuovi l'altro blocco, oppure dimmelo e lo separo. Nota: l'aspetto interno del form (colori, testo) si controlla dalle impostazioni Substack, non dal CSS del sito.

**05-og-cards.patch + assets/images/og/** — OG card dedicate (1200×630) per i 5 articoli principali: *L'infrastruttura del sapere*, *La macchina e la lotta*, *L'ombra del futuro*, *L'ombra del passato*, *Nessuna tecnologia è innocua*. Template: sfondo `#f5f5f0`, filetto superiore `#1C0E80`, titolo in Source Serif 4 SemiBold, eventuale occhiello di serie, dominio in basso. Il patch introduce in `base.njk` una chiave `og_card` che ha precedenza su `og_image` **solo** per il tag `og:image`: l'immagine hero resta invariata per preload LCP e JSON-LD. Prima di applicare il patch copia le immagini:

```
mkdir -p src/images/og && cp proposte-2026-07-08/assets/images/og/*.png src/images/og/
```

Lo script `assets/og-generate.py` (Pillow + TTF di Source Serif 4) rigenera le card o ne produce di nuove per altri articoli.

**06-meta-descriptions.patch** — Differenzia le meta description: la homepage descrive il sito (saggi, curation, progetto di ricerca), l'About descrive la persona (allineata al nuovo attacco). Indipendente dal patch 01.

**07-loghi-webp.patch + assets/images/*.webp** — I 12 loghi dell'About convertiti in WebP ad altezza uniforme (156 px, ~3× l'altezza massima di visualizzazione, per i display retina). `unibergamo.jpg` diventa `logo-bergamo.webp` per coerenza di naming. Peso complessivo: da ~1,1 MB a ~98 KB. Prima di applicare il patch copia i file:

```
cp proposte-2026-07-08/assets/images/*.webp src/images/
```

I file originali non vengono toccati (alcuni sono usati anche in `profilo.njk`); si possono rimuovere in un secondo momento.

## Osservazioni fuori perimetro

Non ho modificato nulla di quanto segue, ma lo segnalo per coerenza con l'impostazione "nessun layer commerciale": in fondo all'About c'è il bottone «Scrivimi →» (mailto); valuta se rientra nel registro che vuoi. Tassonomia, serie, struttura URL e JSON-LD (salvo il punto 02, esplicitato) sono intatti.
