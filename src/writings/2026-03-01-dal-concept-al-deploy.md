---
layout: layouts/article.njk
title: "Dal concept al deploy: costruire un sito professionale con JAMstack"
date: 2026-03-01
category: ["AI", "Vibe Coding", "Claude"]
lang: "🇮🇹 Italiano"
description: "La storia tecnica di come questo sito è nato: dall'architettura informativa al deploy, passando per design system e workflow editoriale."
---

<img src="/images/claude-logo-and-app.webp" alt="Claude AI interface" style="width: 100%; max-width: 800px; margin-bottom: 48px;">

<div class="info-box" style="font-style: italic; margin-bottom: 48px;">

È domenica pomeriggio. Mia moglie Luisa dorme sul divano, ignorando che le gatte le stanno facendo compagnia all'altezza dei piedi; mia figlia Emilia fa i compiti. Da anni volevo costruirmi un sito personale. Medium, dove ho scritto con fin troppa insistenza per un paio d'anni, è stato sempre un ripiego non troppo di lusso, ma in passato mi era capitato di scomodare amici e sviluppatori per progetti più o meno ambiziosi su un mio sito di scrittura. L'esperienza di scrittura di Medium è notevole, ma  - nel delirio di onnipotenza - ho sempre voluto avviare un progetto à la *Stratechery* di Ben Thompson - ma i preventivi, per quanto limati all'osso in amicizia, erano sempre troppo esosi. Oppure troppo onerosi i progetti da gestire come project manager di me stesso, considerato il pochissimo tempo di cui dispongo. 

Poi è arrivato Claude. Mi sono iscritto per un mese con l'abbonamento Pro, più che altro per esplorarne le potenzialità. Ho scoperto che l'AI di Anthropic parla forbito ed è il sogno proibito degli umanisti. In più, forte delle mie poverissime basi di Python e di alcuni elementarissimi linguaggi di markup, ho iniziato a fare vibe coding. Avevo già un vecchio brief, fatto bene. L'ho caricato e ho aggiunto poche altre specifiche, poi ho chiesto a Claude di fare il resto. A esagerare, in 40 minuti ho chiuso l'MVP. In due settimane, giusto perché sono parecchio impegnato, ho pubblicato il sito - facendo in 5 minuti operazioni semplici per molti altri, ma che a me sarebbero costate mezz'ore di tentativi a vuoto.

Visto che la gratitudine non si nega nemmeno alle macchine (e no, le AI non hanno una coscienza), ho chiesto a Claude anche di scrivere il primo articolo, che è quello che segue. Il suo è una sorta di sintesi dal suo punto di vista, e quindi poco emozionante, di come è andato il progetto. Questo è il risultato. Sulla forma c'è molto da fare, ma la ricostruzione è abbastanza corretta. A rileggerlo, sento la mancanza di calore e di ironia (che non è detto che io sappia esprimere meglio, beninteso): tuttavia, me lo faccimo andare bene, perché, chiaramente, questo sito è tanto suo quanto mio. Buona lettura.

</div>

---

## Il contesto

Avevo bisogno di consolidare la mia presenza online frammentata tra Medium, LinkedIn e Twitter. L'obiettivo: un hub centrale che riflettesse il mio approccio interdisciplinare al marketing e all'editoria, con totale controllo sui contenuti e zero costi ricorrenti.

## Lo stack tecnico

**Eleventy (11ty)** come static site generator. Perché? Performance eccellenti, semplicità concettuale, e la possibilità di scrivere in Markdown puro senza compromessi sulla flessibilità del templating.

**Netlify** per hosting e continuous deployment. Ogni push su GitHub trigghera un rebuild automatico. SSL incluso, zero configurazione.

**Decap CMS** (ex Netlify CMS) come editor visuale. Git-based: i contenuti vivono come file Markdown nel repository, non in un database proprietario.

## Il design system: Bold Editorial

L'estetica doveva bilanciare impatto visivo e leggibilità professionale. Ho chiamato l'approccio "Bold Editorial":

- **Tipografia aggressiva** per titoli (56px, font-weight 900)
- **Box colorati** per creare gerarchie visuali immediate
- **Border-left pesanti** (4-6px) per delimitare sezioni
- **Spazio bianco generoso** per dare respiro al contenuto

Palette minimalista: blu primario (#1C0E80), bordeaux per Irene Media (#800020), nero puro per testo e bordi.

## Architettura dei contenuti

Tre sezioni principali, ciascuna con logica e formato diversi:

**Writings**: Articoli originali in Markdown. Metadata YAML per categoria, lingua, data. Sistema di tagging flessibile.

**Curated**: Link esterni con commento critico. La fonte viene evidenziata visivamente con un badge riquadrato — riconoscimento esplicito della provenienza.

**Learning Log**: Risorse scaricabili con licenza Creative Commons. Layout a card, no paywall, no tracking. L'analisi dei download sarà server-side via Netlify Analytics.

## Il workflow editoriale

**Locale**: Ulysses con external folder puntata a `src/writings/`. Scrivo in Markdown nativo, salvo, e Eleventy rigenera automaticamente.

**Remoto (futuro)**: Decap CMS accessibile via `/admin/`. Interface tipo Medium, ma i file restano git-versioned. Ogni edit è un commit.

**Mobile**: iPad + Working Copy app per quick fixes e pubblicazioni in movimento.

## I trade-off

**Non ho un backend**. Niente form processing complesso, niente user authentication avanzata, niente real-time features. Ma non mi servono.

**Il rebuild richiede ~60 secondi**. Accettabile per un blog, improponibile per e-commerce con inventory live.

**SEO**: tutto statico significa meta tag perfetti e performance elevatissime. Google ama gli static site.

## Costi finali

- Hosting Netlify: €0
- GitHub: €0  
- Decap CMS: €0
- Dominio claudiocammarano.com: ~€12/anno

**Totale mensile: €1.**

## Cosa ho imparato

Le migliori architetture sono quelle che scompaiono. Non penso più alla piattaforma: scrivo Markdown, faccio push, il sito si aggiorna. Fine.

Il JAMstack non è hype: è una scelta architettonica solida per chi produce contenuti e vuole controllo totale senza overhead operativo.

E soprattutto: **owning your platform matters**. Medium può cambiare algoritmo domani. Il mio repository Git no.
