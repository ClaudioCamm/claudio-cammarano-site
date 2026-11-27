---
layout: layouts/catena.njk
title: "Chi sta in mezzo"
date: 2026-11-27T14:05:00Z
description: "La biblioteca diventata catalogo, ChatGPT che ricorda per chi voti, la comodità che batte la fiducia, l'esperimento di uscire da AI Overviews, Google e Reddit nello stesso giorno, le guide di GTA, il robots.txt rovesciato del Wall Street Journal, la licenza collettiva, gli agenti nelle redazioni, Grokipedia, i link morti, le testate zombie e gli editoriali contro Waymo: sedici schede su chi governa il passaggio fra il lettore e la fonte."
tesi: "Il motore di risposta non toglie soltanto il clic: decide che cosa mettere in evidenza, trattiene su di sé il valore che il link distribuiva e trasforma il permesso di leggere in una merce che sanno vendere solo i grandi. Della fonte resta la reputazione, ed è proprio la reputazione che si compra, si svuota e si riempie di testi generati."
category: ["Giornalismo", "Media", "AI"]
series: "Dopo il link, II"
serie_totale_prevista: 2
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["ottimizzazione per i motori di ricerca", "economia dell'attenzione", "giornalismo locale", "ecologia dei media"]
fonti:
  - 2024-11-08-wong-morte-della-ricerca-atlantic
  - 2026-11-09-princeton-chatgpt-elezioni-memoria-citp
  - 2026-10-30-simon-nielsen-fletcher-ai-generativa-notizie-reuters
  - 2026-11-24-chung-algoritmi-giovani-anziani-niemanlab
  - 2026-11-05-shepard-uscita-ai-google-zyppy
  - 2026-10-29-newton-google-reddit-platformer
  - 2026-11-17-leake-giornalismo-videogiochi-gta-reuters
  - 2026-11-24-deck-tameez-wsj-bot-niemanlab
  - 2026-11-12-guaglione-licenza-collettiva-yahoo-digiday
  - 2026-11-25-adami-agenti-ai-redazioni-reuters
  - 2026-11-02-adair-grokipedia-errori-niemanlab
  - 2026-10-28-klee-let-the-internet-die-wired
  - 2026-11-11-billypenn-siti-zombie-notizie-locali
  - 2026-11-08-tani-waymo-editoriali-ai-semafor
  - 2026-10-26-chayka-substack-mckenzie-newyorker
  - 2026-11-10-tobitt-visibilita-google-editori-uk-pressgazette
controtesi: 2026-11-10-tobitt-visibilita-google-editori-uk-pressgazette
---

La prima parte di questa serie, a fine settembre, seguiva il collegamento ipertestuale da Locke alle risposte generate e concludeva che per le testate la via d'uscita fosse istituzionale, fatta di fiducia e di regole più che di traffico. Le schede arrivate da allora spostano lo sguardo dal link a chi sta in mezzo fra il lettore e la fonte: il motore che risponde, la piattaforma che decide chi entra, l'organismo che vende licenze. Sono sedici, e insieme descrivono un intermediario che sceglie, trattiene e fa pagare. Uno degli autori dichiara un legame con Anthropic, e questa catena è scritta con un modello di Anthropic.

## L'intermediario che sceglie

Matteo Wong, sull'*Atlantic*, aveva visto il punto già nel novembre 2024, quando Google estendeva AI Overviews a più di cento paesi e OpenAI portava la ricerca dentro ChatGPT.{% rif "2024-11-08-wong-morte-della-ricerca-atlantic" %} Alla domanda sul perché Kamala Harris avesse perso, il chatbot restituiva quattro fattori generici; i link di Google portavano ad analisi che costringevano a leggere. Wong paragona il passaggio a quello da una biblioteca a scaffale aperto, dove si incontrano i libri vicini a quello cercato, a un catalogo da cui si ordina il volume da ritirare. La ricerca tradizionale era indiretta, e in quell'indirezione si imparava ciò che non si sapeva di cercare; la risposta generata la elimina anche quando è corretta.

{% scheda "2024-11-08-wong-morte-della-ricerca-atlantic" %}

Un catalogo, poi, sceglie che cosa mostrare. Il progetto Algorithms+Elections di Princeton ha interrogato ChatGPT dagli account di 160 utenti di cinque stati, nei giorni prima del voto di metà mandato, con la memoria attiva e senza.{% rif "2026-11-09-princeton-chatgpt-elezioni-memoria-citp" %} Con la memoria le risposte si spostano verso il partito dell'utente, di poco ma in modo statisticamente chiaro. Le raccomandazioni esplicite sono rarissime, 2 su 576: lo spostamento passa per ciò che la risposta mette per primo, e per gli utenti democratici la quota di risposte che nominava prima il candidato repubblicano scende dal 56 al 48 per cento. Fra i due giudici automatici usati per valutare l'orientamento c'è un modello di Anthropic. I risultati sono preliminari, ma descrivono un intermediario che non ha bisogno di consigliare per orientare.

Chi usa questi sistemi non lo fa perché si fida di più. Il rapporto del Reuters Institute firmato da Felix Simon, Rasmus Kleis Nielsen e Richard Fletcher, su nove paesi, registra l'uso settimanale dell'AI generativa salito dal 34 al 51 per cento in un anno nei sei paesi seguiti dal 2024, e la ricerca di informazioni diventata l'uso più comune.{% rif "2026-10-30-simon-nielsen-fletcher-ai-generativa-notizie-reuters" %} Il 64 per cento indica la comodità di una risposta più rapida, il 21 per cento informazioni più affidabili che altrove. Chi usa i chatbot dice di usare meno i motori di ricerca e, in misura minore, i siti di notizie; il 17 per cento di chi li usa per le notizie li ha usati in una settimana per aggirare un paywall.

{% scheda "2026-10-30-simon-nielsen-fletcher-ai-generativa-notizie-reuters" %}

Myojung Chung, della Northeastern University, aggiunge che la familiarità con questi filtri non rende più capaci di giudicarli.{% rif "2026-11-24-chung-algoritmi-giovani-anziani-niemanlab" %} Su 1.205 adulti americani, i giovani si attribuiscono una comprensione degli algoritmi molto più alta degli anziani, mentre la conoscenza effettiva è più o meno la stessa a tutte le età. I giovani troppo sicuri giudicano più affidabile il proprio feed e credono di vedere più punti di vista. L'intermediario sceglie, e chi lo usa ogni giorno è il più convinto di sapere come.

## Il traffico che cambia proprietario

Se l'intermediario trattiene la risposta, il valore resta a lui. Cyrus Shepard ha fatto la prova contraria: ad agosto Google ha permesso di escludere un sito da AI Overviews senza toglierlo dalla ricerca, e lui ne è uscito per 28 giorni, poi è rientrato.{% rif "2026-11-05-shepard-uscita-ai-google-zyppy" %} Le citazioni nelle risposte sono sparite entro un'ora, il primo posto organico è rimasto, e secondo le sue stime, ottenute per sottrazione su un solo sito, le risposte AI valevano circa il 23 per cento dei clic da Google. La conclusione pratica è restare dentro. È l'opzione d'uscita che Google concede, e il risultato è che conviene non usarla.

Casey Newton, su *Platformer*, legge lo stesso meccanismo dal lato dei conti.{% rif "2026-10-29-newton-google-reddit-platformer" %} Il 29 ottobre Alphabet ammette che la modalità AI della ricerca rende meno di quella tradizionale e che i ricavi della ricerca sono fermi anche se le domande crescono; poche ore dopo Reddit perde il 15 per cento in Borsa, con il traffico da Google in calo e la decisione di chiudere il sito a chi non ha un account. Newton ne fa un circolo: le risposte trattengono il valore, i siti perdono traffico e chiudono i contenuti per venderli in licenza, e il web che ne esce è più piccolo, più caro da leggere e più favorevole a chi può pagare. Newton dichiara che il suo fidanzato lavora ad Anthropic, che Reddit ha citato in giudizio nel 2025.

{% scheda "2026-10-29-newton-google-reddit-platformer" %}

Matthew Leake, per il Reuters Institute, porta il circolo in un settore intero, alla vigilia dell'uscita di *Grand Theft Auto VI*.{% rif "2026-11-17-leake-giornalismo-videogiochi-gta-reuters" %} Fra il 2021 e il 2023 i siti europei specializzati in videogiochi sono scesi da 1.511 a 406. Le guide, le istruzioni passo passo per superare i livelli, erano il lavoro che li manteneva; oggi rispondono al loro posto i chatbot addestrati su quelle guide. Il chatbot vive delle pagine scritte dai giornalisti e toglie ai loro siti il traffico che le pagava.

## Il permesso come merce

Chi perde il traffico prova a farsi pagare l'accesso. Andrew Deck e Hanaa' Tameez, su *Nieman Lab*, raccontano Dow Jones, che da maggio blocca per impostazione predefinita tutti i bot su *Wall Street Journal*, *Barron's* e *MarketWatch*: il robots.txt non elenca più chi è escluso, elenca chi è ammesso.{% rif "2026-11-24-deck-tameez-wsj-bot-niemanlab" %} Fra gli oltre sessanta ammessi ci sono tre programmi di OpenAI, che con News Corp ha un accordo da oltre 250 milioni di dollari. Solo il 2 per cento di mille grandi siti di notizie in inglese fa lo stesso. Il robots.txt resta un'indicazione volontaria, che chi non è in lista può ignorare, e Slate, che accordi non ne ha, valuta un paywall lato server.

{% scheda "2026-11-24-deck-tameez-wsj-bot-niemanlab" %}

Per chi non ha la forza di News Corp c'è la contrattazione collettiva. Sara Guaglione, su *Digiday*, racconta il primo contratto dell'Internet Licensing Collective, nato come RSL: Yahoo paga una licenza complessiva per usare i contenuti di oltre tremila editori nel suo motore di risposta.{% rif "2026-11-12-guaglione-licenza-collettiva-yahoo-digiday" %} Le quote si calcolano su quanto un contenuto viene usato e sul fatto che sia citato, e le regole premiano la qualità invece del volume, per togliere alle aziende la convenienza di preferire i testi che costano meno. Il modello è promettente e per ora ha un solo cliente.

Marina Adami, sempre per il Reuters Institute, chiede che cosa succede quando a leggere non sono più i motori ma gli agenti, i sistemi che navigano e svolgono compiti per l'utente.{% rif "2026-11-25-adami-agenti-ai-redazioni-reuters" %} Gina Chua divide il lavoro di una testata in tre strati, il consumo, la sintesi e la creazione dei fatti originali, e osserva che gli agenti si prendono i primi due. Alla testata resta lo strato che costa di più, e il permesso di leggerlo è l'unica cosa che può vendere.

## Che cosa resta della fonte

Quando l'intermediario scrive da sé, si vede che cosa perde la fonte. Bill Adair, fondatore di PolitiFact, conta 32 errori nella voce che Grokipedia, l'enciclopedia scritta dal modello di xAI, gli dedica, nonostante l'etichetta «verificato da Grok».{% rif "2026-11-02-adair-grokipedia-errori-niemanlab" %} Sette sono invenzioni, cinque nascono da una ricerca che si ferma alla notizia vecchia, e la maggioranza sono informazioni trovate davvero e lette male, attribuite alla persona sbagliata, perché il modello non distingue ciò che conta da ciò che non conta. Adair riconosce che il modello trova dettagli che i redattori umani non vedono, e conclude che il giudizio umano resta il centro della curatela.

{% scheda "2026-11-02-adair-grokipedia-errori-niemanlab" %}

Il guaio è che la fonte stessa è più fragile di quanto si creda. Miles Klee, su *Wired*, riprende il libro di John West sulla mortalità della rete: un quarto dei link pubblicati sul sito del *New York Times* fra il 1996 e il 2019 non funziona più, e tre citazioni accademiche su quattro rimandano a pagine cambiate.{% rif "2026-10-28-klee-let-the-internet-die-wired" %} Con i collegamenti si indebolisce la possibilità di verificare ciò che è stato affermato, e una risposta che non cita nulla lo rende invisibile.

Della fonte, allora, resta il nome. Julia Binswanger e Violet Comber-Wilen, per *Billy Penn*, hanno seguito per mesi i siti di testate locali storiche di Filadelfia e del New Jersey, fra cui il *Northeast Times*, fondato nel 1932, e il *Princeton Packet*, nato nel 1786.{% rif "2026-11-11-billypenn-siti-zombie-notizie-locali" %} Vi hanno trovato articoli firmati da giornalisti che non ci lavorano da anni, foto di profilo di altre persone, testi copiati parola per parola. Domini e archivi erano stati venduti a una società di marketing digitale. Si compra la reputazione accumulata, che per i motori di ricerca vale, e la si riempie di testi generati sotto nomi che i lettori riconoscono.

{% scheda "2026-11-11-billypenn-siti-zombie-notizie-locali" %}

Max Tani, su *Semafor*, racconta lo stesso uso della reputazione nella pagina delle opinioni.{% rif "2026-11-08-tani-waymo-editoriali-ai-semafor" %} Gli oppositori di Waymo hanno pubblicato su giornali locali americani articoli che il servizio Pangram stima scritti in buona parte con l'AI, senza alcuna dichiarazione; uno degli autori dice che la prima bozza l'aveva preparata la sua agenzia di relazioni pubbliche. L'editoriale è sempre stato in parte scritto da altri, e l'AI rende misurabile un'abitudine che restava invisibile. Il commento di *Semafor* indica il valore che resta a un giornale quando i chatbot rispondono gratis: la garanzia che una persona abbia verificato ciò che pubblica.

<aside class="catena-apparato" aria-label="Dove va il valore">
<p class="catena-apparato-label">Apparato · Dove va il valore</p>
<div class="catena-apparato-tabella">
<table>
<thead><tr><th>Passaggio</th><th>Prima</th><th>Adesso</th><th>Chi ci guadagna</th><th>Scheda</th></tr></thead>
<tbody>
<tr><td>La scelta</td><td>Una pagina di link da leggere</td><td>Una risposta che mette qualcosa per primo</td><td>L’intermediario che risponde</td><td>Wong, Princeton, Chung</td></tr>
<tr><td>Il traffico</td><td>Il clic verso la fonte</td><td>La risposta che trattiene il lettore</td><td>Google, i chatbot</td><td>Shepard, Newton, Leake</td></tr>
<tr><td>Il permesso</td><td>Lettura libera, robots.txt per esclusione</td><td>Liste di ammessi, licenze</td><td>Chi ha la forza di trattare</td><td>Deck e Tameez, Guaglione, Adami</td></tr>
<tr><td>La reputazione</td><td>Il nome della testata garantiva il testo</td><td>Il nome si compra e si riempie</td><td>Chi compra domini e archivi</td><td>Billy Penn, Tani, Adair, Klee</td></tr>
</tbody>
</table>
</div>
</aside>

{% controtesi "2026-11-10-tobitt-visibilita-google-editori-uk-pressgazette" %}
Si può obiettare che l'intermediario stia redistribuendo, invece di trattenere. Charlotte Tobitt, su *Press Gazette*, riporta i dati di Sistrix: più di due terzi dei maggiori siti di notizie britannici hanno perso visibilità nella ricerca di Google in un anno, BBC News è scesa da 41,8 a 20,35, e il sito che cresce di più è Substack, che la raddoppia.{% rif "2026-11-10-tobitt-visibilita-google-editori-uk-pressgazette" %} Per il consulente Barry Adams Google sta dando più varietà ai risultati, e se vincono i piccoli perdono i grandi. In questa lettura il motore toglie alle grandi testate e premia gli autori firmati e riconoscibili, cioè proprio la reputazione personale che la catena considera l'ultima risorsa della fonte.
{% endcontrotesi %}

L'obiezione registra un fatto vero, e la scheda stessa avverte che misura la visibilità e non il traffico reale. Ma il vincitore che indica è una piattaforma, e ha le regole di una piattaforma. Kyle Chayka, sul *New Yorker*, riconosce a Substack di aver dato una carriera a migliaia di scrittori, e osserva che ha preso le forme dei suoi nemici: un flusso di post scelti da un algoritmo, la giustificazione della piattaforma neutrale sulla moderazione, un pubblico che si concentra sulle voci più forti.{% rif "2026-10-26-chayka-substack-mckenzie-newyorker" %} Farsi notare come personaggio resta la condizione per essere letti. Se Google sposta la visibilità dalle testate agli autori, la sposta da un intermediario all'altro, e la reputazione personale che premia è la stessa risorsa che, a Filadelfia, si è vista comprare e svuotare. La conclusione della prima parte regge, con una correzione: la fiducia e le regole servono alle testate, e servono anche contro chi oggi sta in mezzo.
