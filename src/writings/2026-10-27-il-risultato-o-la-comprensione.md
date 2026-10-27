---
layout: layouts/catena.njk
title: "Il risultato o la comprensione"
date: 2026-10-27T13:40:00Z
description: "Navier-Stokes risolto da diecimila agenti, la scala di Gödel, la scienza a forma di Claude, i co-scienziati di Google, la bixonimania, la prima bozza e le mantidi inventate: undici schede su che cosa resta da fare quando la macchina consegna il risultato."
tesi: "Quando una macchina produce il risultato, una dimostrazione, un'ipotesi, una bozza, il bene scarso diventa la comprensione di chi deve giudicarlo; chi fa ricerca o scrive deve dire se cercava il risultato o la comprensione, perché un risultato senza comprensione si verifica male, si confonde con il vero e alla fine torna nei dati da cui la macchina stessa impara."
category: ["AI", "Epistemologia", "Scienza"]
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["delega epistemica", "cognitive offloading", "verum ipsum factum", "teoremi di incompletezza", "crisi della replicazione"]
fonti:
  - 2026-10-14-fry-openai-crisi-matematica-newscientist
  - 2026-10-15-gheorghiu-ladder-of-knowledge-aeon
  - 2026-10-01-schwartz-claude-shaped-science-anthropic
  - 2026-09-21-dolgin-ai-co-scientists-nature
  - 2026-10-04-kiros-ai-real-gift-science-atlantic
  - 2026-10-14-economist-ai-burocrazia-scienza
  - 2026-10-06-pearson-how-to-assemble-science-aeon
  - 2026-10-22-getty-cooper-prima-bozza-ideo
  - 2026-10-13-challenger-deskilling-the-body-aeon
  - 2026-10-16-boodman-citizen-science-slop-nyt
  - 2026-09-29-cruz-scrittura-pensiero-nyt
controtesi: 2026-09-29-cruz-scrittura-pensiero-nyt
---

Hannah Fry ha fatto il dottorato sulle equazioni di Navier-Stokes, e nell'ottobre 2026 racconta sul *New Scientist* come OpenAI abbia trovato il controesempio che le fa cadere, chiudendo uno dei problemi del Millennium Prize.{% rif "2026-10-14-fry-openai-crisi-matematica-newscientist" %} Ci sono voluti diecimila agenti, tre milioni di messaggi e ottantotto ore di calcolo, e il risultato sono 166 pagine e centinaia di migliaia di righe di codice formale che quasi nessuno vuole leggere. Poi sono arrivate centinaia di altre dimostrazioni, comprese alcune sull'ipotesi di Riemann, lasciate su GitHub perché le controllino altri. Il problema è chiuso, e nessuno sa spiegare alla lavagna perché quel vortice rompe tutto.

{% scheda "2026-10-14-fry-openai-crisi-matematica-newscientist" %}

Fry paragona la crisi dei matematici a quella di Lee Sedol dopo AlphaGo: se una macchina chiude i problemi senza produrre comprensione, la ricerca deve ridire a che cosa servono i problemi aperti. Il suo giudizio su OpenAI, «conquest over stewardship», va letto come quello di una parte, e le dimostrazioni, lo lascia intendere lei stessa, non sono ancora state verificate. La domanda però resta in piedi a prescindere, e questa catena la porta fuori dalla matematica: che cosa resta da fare a chi riceve un risultato che non ha prodotto, e che cosa succede se nessuno lo fa.

## La scala costruita da altri

Alexander Gheorghiu, logico all'University College London, scrive su *Aeon* un secolo di ricerca dei limiti della conoscenza, da Hume e Kant al programma di Hilbert e ai teoremi di incompletezza di Gödel.{% rif "2026-10-15-gheorghiu-ladder-of-knowledge-aeon" %} La lettura corrente prende Gödel come un tetto, l'esistenza di verità che nessun sistema raggiungerà. Gheorghiu, a partire da Dummett e dal lavoro di Tor Sandqvist, propone un'immagine diversa: la verità è una scala che arriva esattamente fin dove l'abbiamo costruita, e ogni estensione fedele di un sistema ne aggiunge un piolo. Il saggio è anche la presentazione del quadro che il suo gruppo ha sviluppato, e va letto così. Accanto al caso di Fry pone la domanda che Gheorghiu non fa: se i pioli li costruisce una macchina e nessuno ci sale, di chi è quella verità.

## Problemi della forma giusta

Matthew Schwartz, fisico teorico ospite di Anthropic, descrive sul sito dell'azienda la divisione del lavoro che secondo lui funziona, e la scheda ricorda dove il testo è pubblicato.{% rif "2026-10-01-schwartz-claude-shaped-science-anthropic" %} A dicembre aveva trovato nel modello un buon dottorando venti volte più veloce, da correggere di continuo; con il tempo ha capito che rende quando gli si danno problemi che hanno la forma delle sue capacità, calcolo esatto e verificabile, conoscenza larga, lettura rapida, e si lascia a un esperto decidere quali risultati contano. In quasi tutti i casi, scrive, i risultati erano tecnicamente corretti e scientificamente poco interessanti finché un esperto non li riorientava.

{% scheda "2026-10-01-schwartz-claude-shaped-science-anthropic" %}

Il metodo che descrive è una lista di contrappesi alla tendenza del modello a dichiarare vittoria troppo presto: criteri di successo rigidi, grafici controllati a mano, sessioni separate che fanno da revisori avversari. In tre mesi ne sono usciti 36 manoscritti in 18 discipline, su circa quattrocento problemi candidati. Il dato più utile è la proporzione, perché dice quanto lavoro di giudizio stia dietro ogni risultato che arriva in fondo.

## Chi vede che cosa manca

Elie Dolgin, su *Nature*, mette alla prova i sistemi che si presentano come co-scienziati.{% rif "2026-09-21-dolgin-ai-co-scientists-nature" %} La prova più solida viene dall'Imperial College, dove José Penadés e Tiago Costa hanno tenuto nascosti i propri dati non pubblicati, e in due giorni il sistema di Google, partendo dalla sola letteratura, è arrivato alla teoria che il loro gruppo aveva costruito in anni: un test costruito in modo che il sistema potesse fallire, e che il sistema ha superato. Il resto del pezzo dice dove il guadagno si ferma. Anna Pertl, al Whitehead Institute, ha bisogno di quasi un'ora di correzioni perché il sistema smetta di scambiare l'obiettivo per il farmaco, e quando ripete la richiesta con limiti di tempo e di costo realistici non ottiene nessuna ipotesi praticabile.

{% scheda "2026-09-21-dolgin-ai-co-scientists-nature" %}

Anton Sinitskiy, della Northeastern, mette il limite nel punto giusto: una macchina può proporre qualsiasi cosa, e il collo di bottiglia diventa la validazione. Un errore scientifico sembra ragionevole finché qualcuno con abbastanza competenza non vede che cosa manca, e più il sistema entra nel processo, più quella competenza diventa l'abilità decisiva. Hana Kiros, sull'*Atlantic*, arriva allo stesso punto da un caso di comunicazione: il «sistema enzimatico» simile a CRISPR che secondo Anthropic Claude avrebbe trovato in meno di ventiquattr'ore, e che diversi accademici hanno definito un risultato incrementale presentato come scoperta.{% rif "2026-10-04-kiros-ai-real-gift-science-atlantic" %} Kiros ne ricava che il valore reale sta altrove, nel passare al setaccio dati che nessun gruppo avrebbe il tempo di guardare, e ricorda che già nel 2012 un comitato di bioinformatici scriveva che il collo di bottiglia si era spostato dalla produzione dei dati alla loro analisi.

## Il segnale e la somma

Quando i risultati si moltiplicano, anche gli strumenti con cui la comunità li riconosceva perdono presa. L'*Economist* documenta l'esplosione della produzione di bassa qualità: le sottomissioni a ICML raddoppiate in un anno, le citazioni inventate cresciute di dodici volte in 2,5 milioni di articoli biomedici, e due preprint su una malattia degli occhi inesistente, la «bixonimania», di cui in poche settimane i chatbot parlavano come di una cosa reale.{% rif "2026-10-14-economist-ai-burocrazia-scienza" %} Prima dei modelli linguistici la qualità della scrittura di un paper era un buon indizio della sua qualità scientifica; oggi non lo è più. I revisori che usano l'AI trovano più errori tecnici, nota il giornale, e gli umani restano migliori nel giudicare novità e rilevanza, cioè proprio la parte del lavoro che Schwartz lasciava all'esperto.

{% scheda "2026-10-14-economist-ai-burocrazia-scienza" %}

Helen Pearson, su *Aeon*, ricorda che il problema della scienza è da tempo la somma più che la scarsità: nel 2025 sono usciti circa sette milioni di articoli, e lo studio singolo fa notizia mentre la sintesi fa conoscenza.{% rif "2026-10-06-pearson-how-to-assemble-science-aeon" %} L'intelligenza artificiale potrà fare gran parte della raccolta, scrive, ma oggi alimenta anche un'ondata di revisioni scadenti, e la tentazione di chiedere a un chatbot che cosa dicano le prove al posto di una sintesi rigorosa. Un risultato in più costa sempre meno; capire che cosa aggiunga a quelli che ci sono costa quanto prima.

## La prima bozza

La stessa divisione attraversa la scrittura. Stuart Getty e Zane Cooper, per il blog di IDEO, raccolgono regole pratiche per scrivere con un modello, e la prima è non cedergli la bozza iniziale, perché è lì che si mettono alla prova le idee e si scopre di che cosa si sta parlando.{% rif "2026-10-22-getty-cooper-prima-bozza-ideo" %} L'osservazione che vale il pezzo viene dalla loro redazione: due colleghi, lavorando sullo stesso tema con lo stesso strumento, hanno consegnato bozze simili fino ai giri di frase. Se tutti interrogano la stessa macchina, la scrittura converge su un unico testo, e il testo è il risultato senza la comprensione che la bozza avrebbe prodotto in chi la scriveva.

Melanie Challenger, su *Aeon*, spiega perché quella comprensione non torna da sola quando serve.{% rif "2026-10-13-challenger-deskilling-the-body-aeon" %} Le capacità si perdono per sostituzione ripetuta, non per contatto: copiare un testo scritto dall'AI invece di stenderlo e poi farlo rivedere riduce la fiducia nel rifare il lavoro da soli, come l'uso del GPS riduce la memoria spaziale. I dati sono pochi e su campioni piccoli, e la catena *«La mente che si scarica»* li ha già messi al centro; qui servono a dire che il giudizio di cui parlano Sinitskiy e Schwartz è una capacità, e che si consuma se non la si esercita.

## Il dato che torna indietro

L'ultimo anello chiude il cerchio. Eric Boodman, sul *New York Times*, racconta come le comunità della scienza partecipata, iNaturalist, eBird, OpenStreetMap, Zooniverse, stiano costruendo difese contro le immagini generate.{% rif "2026-10-16-boodman-citizen-science-slop-nyt" %} Kris Anderson, che ogni sera classifica le foto di mantidi caricate su iNaturalist, ne ha trovata una che sembrava una specie nuova ed era inventata. Il danno più insidioso, però, è la foto ritoccata in buona fede, che aggiunge una striscia sulle ali o cambia un colore, perché consegna ai modelli di riconoscimento dati di animali che non esistono, e rischia di rovinare proprio gli strumenti da cui i modelli generativi sono nati.

{% scheda "2026-10-16-boodman-citizen-science-slop-nyt" %}

Il direttore di iNaturalist lo dice in una frase: quei modelli valgono quanto la comunità umana che li corregge. È la conseguenza ultima di un risultato senza comprensione. Chi non capisce che cosa ha ricevuto non lo corregge, lo rimette in circolo, e la macchina impara da ciò che ha prodotto.

<aside class="catena-apparato" aria-label="Il risultato e la comprensione, caso per caso">
<p class="catena-apparato-label">Apparato · Il risultato e la comprensione, caso per caso</p>
<div class="catena-apparato-tabella">
<table>
<thead><tr><th>Caso</th><th>Che cosa consegna la macchina</th><th>Che cosa manca</th><th>Chi deve fornirlo</th></tr></thead>
<tbody>
<tr><td>Navier-Stokes, ottobre 2026</td><td>166 pagine di dimostrazione formale</td><td>Una spiegazione alla lavagna</td><td>I matematici, che non l’hanno ancora data</td></tr>
<tr><td>BootLoops di Schwartz</td><td>Risultati tecnicamente corretti</td><td>Il giudizio su quali contano</td><td>L’esperto che li riorienta</td></tr>
<tr><td>Co-Scientist all’Imperial College</td><td>Una teoria trovata in due giorni</td><td>Il controllo su ciò che manca</td><td>Chi ha abbastanza competenza da vederlo</td></tr>
<tr><td>Paper scritti con l’AI</td><td>Prosa corretta</td><td>Un segnale della qualità della ricerca</td><td>Revisori che giudicano novità e rilevanza</td></tr>
<tr><td>La prima bozza</td><td>Un testo simile a quello di tutti</td><td>Il momento in cui si capisce che cosa si vuole dire</td><td>Chi scrive, prima di aprire il modello</td></tr>
<tr><td>Foto ritoccate su iNaturalist</td><td>Animali plausibili</td><td>Il confronto con quelli veri</td><td>La comunità che corregge</td></tr>
</tbody>
</table>
</div>
</aside>

{% controtesi "2026-09-29-cruz-scrittura-pensiero-nyt" %}
Si può obiettare che la catena dia per scontato un legame fra produrre e capire che non è dimostrato. Joe Cruz, che dirige il dipartimento di filosofia del Williams College, sostiene sul *New York Times* che la convinzione di imparare a pensare scrivendo è recente, risale al movimento *writing across the curriculum* degli anni Settanta e alla formulazione di James Britton del 1980, e non è mai diventata la prova di un'affermazione più forte.{% rif "2026-09-29-cruz-scrittura-pensiero-nyt" %} Nel *Fedro* Socrate obiettava già che le parole scritte non sanno rispondere alle domande, e che la comprensione nasce nella conversazione fra menti. Il compito scritto, conclude Cruz, è comodo per l'istituzione che deve valutarlo, e questo non lo rende il modo in cui si pensa. Se ha ragione, cedere il prodotto alla macchina non toglie niente alla comprensione.
{% endcontrotesi %}

È l'obiezione più forte, e la catena la accoglie in parte: Cruz ha ragione a dire che la comprensione non coincide con il prodotto scritto, e questa è la ragione per cui la catena li tiene separati fin dal titolo. Ma il suo argomento sposta la comprensione nella conversazione, e i casi messi in fila qui sono proprio casi in cui la conversazione manca. I matematici di Fry non sanno spiegare la dimostrazione alla lavagna, che è la conversazione fra menti di cui parla Socrate; gli esperti di Schwartz e di Dolgin sono quelli che interrogano il risultato e lo riorientano; la comunità di iNaturalist è una conversazione permanente fra esperti e appassionati. Se il prodotto non è il luogo del pensiero, allora un prodotto arrivato senza nessuno che ne abbia discusso è esattamente un risultato senza comprensione. La conclusione di Cruz, il dialogo al posto del compito, è il rimedio che questa catena chiede, e va dichiarata come scelta ogni volta che si consegna un risultato.
