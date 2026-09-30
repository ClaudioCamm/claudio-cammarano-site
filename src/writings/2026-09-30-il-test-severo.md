---
layout: layouts/catena.njk
title: "Il test severo"
date: 2026-09-30T14:25:00Z
description: "Una tesi che non si lascia smentire non è nemmeno sbagliata, e una tesi che ha superato soltanto prove incapaci di smentirla non ha guadagnato niente. Dieci schede su come si misura quanto vale una conferma, dentro e fuori dalla statistica."
tesi: "Una conferma vale quanto la probabilità che la prova aveva di smentire; la domanda, nata per giudicare gli esperimenti, si applica ai numeri del giornalismo, alle scoperte dei modelli e alle affermazioni di questo archivio."
category: ["Epistemologia", "Scienza", "AI"]
series: "Lo standard di prova, II"
serie_totale_prevista: 3
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["test severo", "not even wrong", "statistica dell'errore", "preregistrazione", "crisi della replicazione"]
fonti:
  - 2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics
  - 2026-07-31-thornton-karl-popper-sep
  - 2026-09-18-enders-short-form-video-cognizione-guardian
  - 2026-06-10-floridi-not-even-wrong-1-lavoro-ssrn
  - 2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist
  - 2005-08-30-ioannidis-most-published-findings-false-plosmed
  - 2015-08-28-open-science-collaboration-riproducibilita-science
  - 2023-01-25-kirchenbauer-watermark-llm-arxiv
  - 2026-08-10-anthropic-riemann-zeta-claude
  - 2025-10-01-romeijn-filosofia-della-statistica-sep
controtesi: 2025-10-01-romeijn-filosofia-della-statistica-sep
---

La catena [*Non è nemmeno sbagliato*](/writings/2026-09-29-non-e-nemmeno-sbagliato/) si chiudeva con una domanda da rivolgere a ogni previsione sull'intelligenza artificiale: che cosa dovrebbe accadere perché risulti sbagliata. È la condizione minima, quella di Popper, e non basta, perché un'affermazione può essere smentibile in linea di principio e aver superato soltanto prove che non l'avrebbero mai smentita. Questa è la seconda catena della serie *Lo standard di prova*. La [prima](/writings/2026-09-30-il-p-value-e-le-sue-guerre/) ha ricostruito il p-value e le scuole che se lo contendono; questa prova a portare fuori dal laboratorio lo standard che l'archivio ha adottato, il test severo, e a usarlo su affermazioni che nessun p-value accompagna.

## La prova che avrebbe potuto fallire

Nella definizione di Deborah Mayo, che l'archivio ha preso dal suo post su Peirce, un'ipotesi supera un test severo quando il dato concorda con l'ipotesi e la procedura, se l'ipotesi fosse sbagliata, lo avrebbe segnalato con probabilità molto alta.{% rif "2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics" %} Mayo lo spiega con un metal detector: la domanda utile è se quel modello, passato su un chiodo, suonerebbe. Da Peirce ricava anche tre ordini di induzione, che uso come scala per qualunque affermazione. Il primo è l'induzione rozza, che procede per assenza di confutazione ed è in sostanza un argomento dall'ignoranza. Nel secondo la prova è genuina, e la sua forza dipende da quanto la previsione vada contro ciò che ci si aspetterebbe senza l'ipotesi. Il terzo comincia quando quella distanza si può misurare con probabilità d'errore dichiarate.

Popper aveva già l'idea, e la voce di Stephen Thornton la riporta con le sue parole: la corroborazione conta solo se è il risultato di una previsione genuinamente rischiosa.{% rif "2026-07-31-thornton-karl-popper-sep" %} La stessa voce registra l'obiezione di Lakatos su Nettuno, secondo cui nessuna osservazione isolata falsifica una teoria di alto livello, perché il fallimento si può sempre addebitare a un'ipotesi ausiliaria. La mossa di Mayo sposta la valutazione dalla teoria alla procedura. Invece di chiedere se un'osservazione abbia confutato la fisica newtoniana, chiede se la procedura usata avrebbe rilevato quell'errore specifico, e in questo modo può giudicare anche le ipotesi ausiliarie, una alla volta. Mayo stessa scrive che Popper l'idea della severità non l'ha mai incassata adeguatamente.

La tesi di questa catena è che **una conferma vale quanto la probabilità che la prova aveva di smentire**, e che la domanda, nata per giudicare gli esperimenti, si applica ai numeri del giornalismo, alle scoperte dei modelli e alle affermazioni di questo archivio.

{% scheda "2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics" %}

## Il primo ordine

L'argomento dall'ignoranza ha una versione istituzionale, e Caty Enders, sul *Guardian*, la trova nella frase con cui Mark Zuckerberg difende le piattaforme, cioè che la scienza sul video in formato breve non è conclusiva.{% rif "2026-09-18-enders-short-form-video-cognizione-guardian" %} La meta-analisi più recente, su circa settanta studi, associa il formato breve a cambiamenti cognitivi più che al peggioramento della salute mentale, ed Enders dichiara per prima i limiti di quell'evidenza: letteratura scarsa, un solo studio sulla memoria, risultati che chiedono replicazione, ricerca concentrata in Cina su un prodotto che non è lo stesso. La scheda aggiunge il punto che interessa qui. Dire che nessuno ha dimostrato il danno è un'induzione del primo ordine, che dall'assenza di prova ricava un permesso, e il costo dell'attesa ricade su chi non decide mentre chi decide guadagna dal ritardo.

Luciano Floridi, Claudio Novelli e Jessica Morley aggiungono un caso che viene prima della severità stessa.{% rif "2026-06-10-floridi-not-even-wrong-1-lavoro-ssrn" %} Una previsione che trattiene metodo, dati e incertezza non si può mettere alla prova, e la sua severità è nulla per costruzione, qualunque cifra esibisca. Il loro esempio più istruttivo è il paper di Frey e Osborne del 2013, che annunciava di voler evitare previsioni sulla legislazione e sull'accettazione pubblica della tecnologia. Sembrava prudenza, e metteva al riparo il 47 per cento, perché qualunque cosa avesse fatto poi il mercato del lavoro si poteva addebitare alle variabili escluse. Gli autori lo chiamano il predicamento di Duhem-Quine in miniatura, che è l'obiezione di Lakatos vista dal lato di chi la sfrutta, e ne ricavano una regola che uso da allora: un'affermazione formulata in una metrica è confermata o smentita soltanto da un esito formulato nella stessa metrica.

## Quando nessuno bara

Il giardino dei sentieri che si biforcano, di Andrew Gelman ed Eric Loken, è la scheda che ha cambiato di più il mio modo di leggere i numeri del giornalismo.{% rif "2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist" %} Un articolo di dati che sceglie il periodo, il confronto e la categoria dopo aver guardato le serie compie le stesse scelte che loro descrivono, quasi sempre in buona fede, e il risultato che pubblica ha superato una prova che difficilmente avrebbe potuto fallire. Gli autori indicano come rimedio la preregistrazione dell'intero protocollo o la replica prima della pubblicazione, e ammettono con onestà che nei loro progetti applicati hanno imparato tantissimo proprio guardando i dati.

{% scheda "2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist" %}

Il sesto corollario di John Ioannidis aiuta a capire dove aspettarsi i sentieri più numerosi: più un campo è caldo, con più squadre in competizione, meno i suoi risultati sono veri.{% rif "2005-08-30-ioannidis-most-published-findings-false-plosmed" %} Nessun campo è oggi più caldo dell'intelligenza artificiale, e il corollario suggerisce di leggere con il sospetto maggiore proprio i risultati che arrivano con più clamore, a cominciare dai confronti sui benchmark. Ioannidis si spinge oltre, e scrive che in molti campi le dimensioni d'effetto dichiarate possono essere semplicemente misure accurate del bias prevalente.

La replica è il modo più diretto di rendere severa una prova, perché la ripete senza il giardino alle spalle, e l'Open Science Collaboration mostra che cosa ne resta: il 36 per cento dei risultati significativi, con effetti dimezzati.{% rif "2015-08-28-open-science-collaboration-riproducibilita-science" %} Le cautele degli autori valgono anche fuori dalla psicologia. Una replica riuscita misura l'affidabilità di un risultato e lascia aperta la correttezza della sua spiegazione, e un singolo studio, scrivono, non risolve quasi mai una questione in un senso o nell'altro.

## Il terzo ordine

Il terzo ordine si riconosce da un dettaglio: chi fa l'affermazione dichiara la probabilità d'errore della procedura. Il watermark proposto nel 2023 da John Kirchenbauer e dai colleghi dell'Università del Maryland ne è un esempio pulito.{% rif "2023-01-25-kirchenbauer-watermark-llm-arxiv" %} Il modello, prima di generare ogni token, favorisce leggermente una lista di token scelta con un hash del token precedente, e il segnale si rileva con un semplice z-test: alla soglia z = 4 i falsi positivi sono tre su centomila, e bastano sedici token. È una prova di cui si conosce la severità prima di usarla. I rilevatori di testo artificiale oggi in commercio non possono contare su un watermark, perché nessun modello diffuso lo implementa, e restano scatole nere statistiche che non dichiarano nulla del genere; i loro verdetti andrebbero pesati di conseguenza, cioè come induzioni di secondo ordine presentate come se fossero di terzo.

All'estremo opposto sta la dimostrazione formale. Quando Anthropic ha annunciato che una versione di Claude aveva migliorato il limite inferiore della frazione di zeri della funzione zeta che soddisfano l'ipotesi di Riemann, dal 41,6 al 67,2 per cento, il risultato è arrivato validato da quattro matematici, due interni e due esterni, e formalizzato in Lean, un sistema che certifica meccanicamente ogni passaggio logico.{% rif "2026-08-10-anthropic-riemann-zeta-claude" %} Un verificatore formale avrebbe rifiutato la dimostrazione se contenesse un errore, e questo porta la severità vicino al massimo possibile, con un limite che va detto: Lean certifica che la dimostrazione prova l'enunciato formalizzato, e resta ai matematici giudicare se quell'enunciato è quello che intendevano. La catena [*Possiamo fidarci di una macchina?*](/writings/2026-09-28-possiamo-fidarci-di-una-macchina/) sosteneva che la fiducia nei modelli può poggiare solo su una verifica esterna dei risultati; la severità dà a quella verifica una misura.

{% scheda "2026-08-10-anthropic-riemann-zeta-claude" %}

{% controtesi "2025-10-01-romeijn-filosofia-della-statistica-sep" %}
La severità ha un avversario di principio, e la voce di Jan-Willem Romeijn lo nomina.{% rif "2025-10-01-romeijn-filosofia-della-statistica-sep" %} Per un bayesiano l'evidenza portata da un dato dipende soltanto dal dato osservato, secondo il principio di verosimiglianza, e la statistica classica lo viola: nella sua impostazione, scrive Romeijn, l'impatto dei dati osservati può cambiare a seconda della probabilità di campioni diversi da quello osservato. La severità fa esattamente questo, perché giudica una conferma in base a ciò che la procedura avrebbe fatto in casi che non si sono verificati. Due ricercatori con gli stessi dati, uno che aveva deciso in anticipo quando fermarsi e uno che ha continuato a raccogliere finché il risultato è arrivato, ricevono dalla severità giudizi diversi, e per un bayesiano far dipendere l'evidenza dalle intenzioni di chi la raccoglie è un paradosso.
{% endcontrotesi %}

Prendo l'obiezione sul serio, e questa catena non la risolve. Osservo soltanto che fuori dal laboratorio la dipendenza dalle intenzioni è proprio ciò che serve. Il giornalista che ha scelto il confronto dopo aver visto i dati e quello che lo aveva dichiarato prima mi mettono davanti la stessa tabella, e da lettore voglio sapere quale dei due mi sta parlando. Il bayesiano mi chiederebbe una probabilità a priori che nessuno dei due mi dà, mentre la domanda di Mayo, cioè che cosa avrebbero trovato se la loro tesi fosse sbagliata, posso farla a entrambi. Per l'archivio la regola diventa doppia: a ogni affermazione che entra chiedo se sia smentibile, come voleva Pauli, e poi quante possibilità avesse di non superare la prova che cita. Resta da capire chi decida quale prova basti, ed è l'oggetto della [terza catena](/writings/2026-09-30-chi-fissa-lo-standard/) della serie.
