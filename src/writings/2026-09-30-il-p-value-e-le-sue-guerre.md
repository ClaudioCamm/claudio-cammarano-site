---
layout: layouts/catena.njk
title: "Il p-value e le sue guerre"
date: 2026-09-30T14:20:00Z
description: "Un numero che quasi tutti usano e pochi sanno definire ha diviso la statistica per vent'anni. Tredici schede dell'archivio, da Popper alla task force dell'American Statistical Association, con una tabella delle scuole e le sei letture sbagliate del p-value: una catena pensata come strumento di lavoro."
tesi: "Il p-value misura quanto i dati sarebbero sorprendenti se l'ipotesi nulla fosse vera; le guerre della statistica sono nate dall'averlo letto come la probabilità che un'ipotesi sia vera o come un verdetto automatico, e le scuole in lotta rispondono a domande diverse più spesso di quanto diano risposte diverse alla stessa domanda."
category: ["Epistemologia", "Scienza", "Statistica"]
series: "Lo standard di prova, I"
serie_totale_prevista: 3
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["p-value", "guerre della statistica", "test severo", "inferenza bayesiana", "statistica dell'errore", "crisi della replicazione"]
fonti:
  - 2025-10-01-romeijn-filosofia-della-statistica-sep
  - 2026-07-31-thornton-karl-popper-sep
  - 2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics
  - 2016-03-07-wasserstein-lazar-dichiarazione-asa-p-value
  - 2005-08-30-ioannidis-most-published-findings-false-plosmed
  - 2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist
  - 2015-08-28-open-science-collaboration-riproducibilita-science
  - 2017-09-01-benjamin-redefine-statistical-significance-nhb
  - 2018-02-26-lakens-justify-your-alpha-nhb
  - 2019-03-20-amrhein-greenland-mcshane-significativita-nature
  - 2021-08-01-task-force-asa-significativita-replicabilita-aoas
  - 2021-12-06-mayo-conflitti-interesse-intellettuali-conbio
  - 2014-02-12-nuzzo-errori-statistici-nature
controtesi: 2014-02-12-nuzzo-errori-statistici-nature
---

Questa catena nasce da un'esigenza pratica. Da quando l'archivio ha adottato il test severo come standard per giudicare le affermazioni che vi entrano, mi capita sempre più spesso di dover pesare un risultato accompagnato da un p-value, e mi sono accorto che la definizione che avevo in testa era approssimativa quanto quella della maggior parte delle persone che lo usano. Ho messo insieme le schede che servono per ricostruire il campo da capo: che cosa misura il p-value, a quale domanda rispondono le scuole che se lo contendono, come la crisi della replicazione ha trasformato una disputa tecnica in una guerra istituzionale e come quella guerra si è chiusa. È la prima di tre catene della serie *Lo standard di prova* e fa da manuale per le altre due: la [seconda](/writings/2026-09-30-il-test-severo/) porta la severità fuori dal laboratorio, la [terza](/writings/2026-09-30-chi-fissa-lo-standard/) si chiede chi abbia il potere di fissare la soglia.

## Due domande prima delle scuole

La mappa migliore del campo è la voce della *Stanford Encyclopedia of Philosophy* firmata da Jan-Willem Romeijn, e la metto in testa per il modo in cui è costruita.{% rif "2025-10-01-romeijn-filosofia-della-statistica-sep" %} Le esposizioni correnti mettono in fila le scuole come partiti, Fisher, Neyman e Pearson, i bayesiani, i verosimigliantisti, mentre Romeijn le fa discendere da due domande preliminari. La prima riguarda la natura della probabilità, che può essere una tendenza del mondo a produrre frequenze oppure un grado di credenza. La seconda riguarda il luogo in cui la probabilità è definita, se soltanto sui dati possibili o anche sulle ipotesi. Chi sceglie la prima lettura non può assegnare una probabilità a un'ipotesi, perché un'ipotesi, scrive Romeijn, è vera o falsa una volta per tutte e non ha frequenze con cui si verifica; chi sceglie la seconda può farlo, ed è questo il tratto che definisce la statistica bayesiana. Fisher e Neyman-Pearson stanno entrambi dalla parte classica, e la loro differenza è interna: il test di significatività di Fisher dice poco su che cosa accade quando l'ipotesi nulla è falsa, e la teoria di Neyman e Pearson, fra il 1928 e il 1933, nasce per colmare quel vuoto con i tassi d'errore. Il discriminante operativo fra classici e bayesiani è il principio di verosimiglianza: per un bayesiano conta soltanto il dato osservato, per un classico conta anche la probabilità dei campioni che si sarebbero potuti osservare e non si sono osservati. Tornerà nella seconda catena della serie, perché è l'obiezione più seria allo standard che l'archivio usa.

{% scheda "2025-10-01-romeijn-filosofia-della-statistica-sep" %}

La tesi di questa catena è che **il p-value misura quanto i dati sarebbero sorprendenti se l'ipotesi nulla fosse vera, e le guerre della statistica sono nate dall'averlo letto come la probabilità che un'ipotesi sia vera o come un verdetto automatico**. Le scuole in lotta rispondono a domande diverse più spesso di quanto diano risposte diverse alla stessa domanda, e la tabella che segue serve a tenere separate le domande.

<aside class="catena-apparato" aria-label="Le scuole a confronto">
<p class="catena-apparato-label">Apparato · Le posizioni a confronto</p>
<div class="catena-apparato-tabella">
<table>
<thead><tr><th>Posizione</th><th>Che cosa misura</th><th>A quale domanda risponde</th><th>L’equivoco tipico</th></tr></thead>
<tbody>
<tr><td>Popper, falsificazionismo</td><td>Nessuna probabilità: la corroborazione, cioè la resistenza a previsioni rischiose</td><td>La teoria ha superato un tentativo serio di confutarla?</td><td>Credere che una singola osservazione basti a falsificare una teoria (l’obiezione di Lakatos)</td></tr>
<tr><td>Fisher, test di significatività</td><td>Il p-value: quanto è estremo il dato, se l’ipotesi nulla fosse vera</td><td>Questi dati sono sorprendenti sotto l’ipotesi nulla?</td><td>Leggerlo come la probabilità che l’ipotesi nulla sia vera</td></tr>
<tr><td>Neyman e Pearson, test d’ipotesi</td><td>I tassi d’errore di primo e secondo tipo di una regola fissata in anticipo (α e potenza)</td><td>Quale regola di decisione sbaglia di rado, ripetuta nel tempo?</td><td>Usare α come misura dell’evidenza del singolo studio</td></tr>
<tr><td>L’ibrido dei manuali</td><td>Un p confrontato con 0,05, e un’etichetta: «significativo»</td><td>Nessuna delle due precedenti, che mescola</td><td>Scambiare «significativo» per importante e «non significativo» per assente</td></tr>
<tr><td>Bayesiani</td><td>La probabilità a posteriori delle ipotesi, o il fattore di Bayes fra due ipotesi</td><td>Quanto devo credere all’ipotesi dopo aver visto i dati?</td><td>Nascondere quanto il risultato dipenda dalla probabilità a priori</td></tr>
<tr><td>Statistica dell’errore (Mayo)</td><td>La severità: la capacità della procedura di rilevare l’errore, se ci fosse</td><td>L’ipotesi ha superato una prova che avrebbe potuto fallire?</td><td>Confondere la quantità dei dati con la severità della prova</td></tr>
</tbody>
</table>
</div>
</aside>

## Da Popper alla severità

Il test severo comincia con Popper, e la voce che Stephen Thornton gli dedica nella stessa enciclopedia ne riporta il criterio nella forma operativa: una teoria è scientifica se è incompatibile con osservazioni possibili.{% rif "2026-07-31-thornton-karl-popper-sep" %} Da lì discende l'idea che interessa questa catena, cioè che la corroborazione conti solo quando viene da una previsione genuinamente rischiosa, che sarebbe potuta risultare falsa, insieme alla preferenza controintuitiva di Popper per le teorie improbabili, perché contenuto informativo e probabilità variano in senso inverso. La voce registra anche il vuoto che Popper lascia. Lakatos chiede che cosa sarebbe successo se Galle non avesse trovato Nettuno, e risponde che nessuno avrebbe dichiarato falsificata la fisica newtoniana: il fallimento si sarebbe addebitato a una delle molte ipotesi ausiliarie che proteggono ogni teoria di alto livello. Popper dice che un test vale per quanto avrebbe potuto smentire, e non dice come lo si misura.

Il test severo come standard misurabile è di Deborah Mayo, e l'archivio lo ha preso dalla fonte con il post in cui Mayo rilegge la tesi autocorrettiva di Charles Sanders Peirce.{% rif "2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics" %} Un'ipotesi supera un test severo con un dato se il dato concorda con l'ipotesi e se la procedura, nel caso in cui l'ipotesi fosse sbagliata, lo avrebbe segnalato con probabilità molto alta. Le probabilità si attaccano alle procedure e non alle ipotesi, come Peirce scriveva già nel 1878, e la domanda da porre riguarda l'affidabilità del modo in cui un'ipotesi è stata messa alla prova. Mayo ne ricava anche il conto che rende concreto il problema della predesignazione: chi esamina venti fattori e riporta come test quello risultato significativo non ha condotto un test al cinque per cento, perché la probabilità di trovare almeno un falso positivo è di circa il sessantaquattro per cento, dato che 0,95 elevato alla ventesima fa 0,36.

{% scheda "2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics" %}

## Che cosa dice un p-value

La definizione da tenere è quella dell'American Statistical Association, nella dichiarazione che Ronald Wasserstein e Nicole Lazar pubblicarono nel marzo 2016 su *The American Statistician*: il p-value è la probabilità, sotto un modello statistico specificato, che un riassunto statistico dei dati sia uguale o più estremo del valore osservato.{% rif "2016-03-07-wasserstein-lazar-dichiarazione-asa-p-value" %} La definizione è modesta di proposito, e i sei principi che la accompagnano sono per metà un elenco di cose che il p-value non dice. Non misura la probabilità che l'ipotesi studiata sia vera, né quella che i dati siano stati prodotti dal solo caso; non misura la grandezza di un effetto né la sua importanza; e un p vicino a 0,05, preso da solo, offre soltanto evidenza debole contro l'ipotesi nulla. Il sesto principio è quello che la pratica ignora di più. Ne ho ricavato l'apparato che segue, e lo tengo a portata di mano ogni volta che una scheda riporta un risultato significativo.

<aside class="catena-apparato" aria-label="Sei letture sbagliate del p-value">
<p class="catena-apparato-label">Apparato · Sei letture sbagliate del p-value</p>
<ol class="catena-apparato-lista">
<li><strong>«p = 0,03: l’ipotesi nulla ha il 3% di probabilità di essere vera.»</strong> Il p-value è calcolato assumendo che l’ipotesi nulla sia vera, e non può dire quanto lo sia (secondo principio dell’ASA).{% rif "2016-03-07-wasserstein-lazar-dichiarazione-asa-p-value" %}</li>
<li><strong>«p = 0,03: c’è il 3% di probabilità che il risultato sia dovuto al caso.»</strong> È la stessa lettura detta in un altro modo: il p è un’affermazione sui dati in relazione a una spiegazione ipotetica, non sulla spiegazione.</li>
<li><strong>«p = 0,05: la probabilità di un falso allarme è del 5%.»</strong> Dipende da quanto era plausibile l’ipotesi prima dello studio; con la calibrazione di Sellke, Bayarri e Berger riportata da Nuzzo, un p di 0,05 lascia almeno il 29% di probabilità di falso allarme.{% rif "2014-02-12-nuzzo-errori-statistici-nature" %}</li>
<li><strong>«p &lt; 0,001: l’effetto è grande.»</strong> Con un campione abbastanza grande anche un effetto minuscolo produce un p piccolissimo; grandezza e importanza si leggono nella stima e nel suo intervallo (quinto principio).</li>
<li><strong>«p &gt; 0,05: non c’è effetto.»</strong> Due studi sugli antinfiammatori trovano lo stesso rapporto di rischio, 1,2; quello con p = 0,091 conclude che non c’è associazione, quello con p = 0,0003 che c’è. Le due stime coincidono, e cambia solo la precisione.{% rif "2019-03-20-amrhein-greenland-mcshane-significativita-nature" %}</li>
<li><strong>«Il p vale qualunque cosa si sia fatto prima di calcolarlo.»</strong> Se ciò che si riporta è stato scelto guardando i risultati, o se le decisioni di analisi sono state prese dopo aver visto i dati, il p nominale sopravvaluta la prova (quarto principio; il giardino di Gelman e Loken; il conto dei venti fattori di Mayo).{% rif "2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist" %}</li>
</ol>
</aside>

## La crisi

Tre schede spiegano perché, nel primo decennio del secolo, la questione ha smesso di essere accademica. John Ioannidis, nel 2005 su *PLoS Medicine*, propone un modello, anche se il titolo diventato slogan lo ha fatto leggere come un pamphlet.{% rif "2005-08-30-ioannidis-most-published-findings-false-plosmed" %} La probabilità che un risultato dichiarato sia vero dipende dalla soglia e insieme dalla potenza degli studi, dalla proporzione di relazioni vere fra quelle che un campo mette alla prova e dal bias; un risultato è più probabilmente vero che falso soltanto se la potenza moltiplicata per quella proporzione supera α. Il ragionamento ha la struttura di un calcolo bayesiano, e la tabella dei casi dà l'ordine di grandezza: un buon studio randomizzato arriva a un valore predittivo di 0,85, la ricerca esplorativa con test massivi, come quella genomica, a un risultato vero su mille. Dei sei corollari, quello che porterò nella seconda catena è l'ultimo: più un campo è caldo, con più squadre in competizione, meno i suoi risultati sono veri.

Andrew Gelman ed Eric Loken, nel 2014, aggiungono la parte meno intuitiva.{% rif "2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist" %} Il p pubblicato può essere invalido anche quando il ricercatore ha fatto una sola analisi, senza pescare e senza barare, perché contano le analisi che sarebbero state possibili con dati diversi: le scelte su esclusioni, codifiche e trasformazioni, prese dopo aver guardato i dati, producono lo stesso effetto di una pesca deliberata. È il giardino dei sentieri che si biforcano, e la frase che lo rende inquietante è la loro: il fatto stesso che gli scienziati generalmente non barino li rende vulnerabili a conclusioni forti quando incontrano uno schema abbastanza robusto da superare la soglia.

La misura arriva nel 2015 con l'Open Science Collaboration, duecentosettanta autori coordinati da Brian Nosek, che replica cento studi di psicologia usciti nel 2008.{% rif "2015-08-28-open-science-collaboration-riproducibilita-science" %} Il 97 per cento degli originali aveva un risultato significativo; lo ha avuto il 36 per cento delle repliche, e gli effetti si sono dimezzati, da una media di 0,403 a una di 0,197. Gli autori danno la spiegazione strutturale, cioè bassa potenza e bias di pubblicazione, e aggiungono le cautele che quasi nessuno ha ripreso: una replica riuscita non conferma la spiegazione teorica di un risultato, e una replica fallita non basta a dimostrare che l'originale fosse un falso positivo.

{% scheda "2015-08-28-open-science-collaboration-riproducibilita-science" %}

## La guerra

Dal 2016 la disputa diventa istituzionale, e le schede permettono di seguirla anno per anno. La dichiarazione dell'ASA è il punto di partenza condiviso. Nel settembre 2017 settantadue autori, fra cui James Berger e Valen Johnson, propongono su *Nature Human Behaviour* di spostare la soglia da 0,05 a 0,005, e solo per le affermazioni di nuove scoperte.{% rif "2017-09-01-benjamin-redefine-statistical-significance-nhb" %} La giustificazione è una traduzione bayesiana: un p di 0,05 corrisponde a un fattore di Bayes fra 2,5 e 3,4, cioè a evidenza debole, mentre 0,005 corrisponde a un fattore fra 14 e 26. I risultati che restano in mezzo cambiano nome e diventano «suggestivi»; il prezzo è un campione più grande di circa il settanta per cento. Cinque mesi dopo, ottantotto autori guidati da Daniël Lakens rispondono sulla stessa rivista che a creare il problema è l'esistenza di una soglia unica, qualunque ne sia il valore, e chiedono che ciascuno giustifichi la propria dichiarando α, modelli, probabilità a priori, potenza e dimensione del campione, e preregistrandoli quando si può.{% rif "2018-02-26-lakens-justify-your-alpha-nhb" %} Leggo le due schede insieme perché nessuno dei due gruppi sbaglia i conti: le conclusioni opposte vengono dallo stesso settanta per cento, letto da una parte come investimento e dall'altra come costo.

Il 2019 è l'anno dell'escalation. Un editoriale di Wasserstein, Schirm e Lazar su *The American Statistician* arriva a un passo dal raccomandare l'abbandono della dizione «statisticamente significativo», e nello stesso anno Valentin Amrhein, Sander Greenland e Blake McShane pubblicano su *Nature* un commento con più di ottocento firme.{% rif "2019-03-20-amrhein-greenland-mcshane-significativita-nature" %} Va letto per quello che chiede davvero, perché quasi tutti lo hanno letto come un'abolizione dei p-value: gli autori scrivono due volte che non chiedono alcun divieto, vogliono p riportati con precisione, come 0,021 o 0,13, e chiedono di smettere di usarli per dividere i risultati in due categorie. Propongono di chiamare gli intervalli di confidenza intervalli di compatibilità, perché tutti i valori al loro interno sono ragionevolmente compatibili con i dati.

{% scheda "2019-03-20-amrhein-greenland-mcshane-significativita-nature" %}

La chiusura arriva nel 2021, al contrario di come la si ricorda. La task force istituita dalla presidente dell'ASA, Karen Kafadar, per chiarire che l'editoriale del 2019 non era la politica ufficiale dell'associazione, pubblica sugli *Annals of Applied Statistics* uno statement che si apre dicendo che i p-value sono misure statistiche valide.{% rif "2021-08-01-task-force-asa-significativita-replicabilita-aoas" %} Le soglie, aggiunge, sono utili quando bisogna decidere un'azione. Il dettaglio che dice molto è che nemmeno quello statement è politica ufficiale, perché il consiglio dell'associazione non lo ha adottato. Deborah Mayo, pochi mesi dopo su *Conservation Biology*, dà alla vicenda il nome che la terza catena della serie userà come attrezzo, conflitto di interessi intellettuale, cioè quello di chi ha il potere di imporre lo standard con cui sarà giudicata la propria posizione.{% rif "2021-12-06-mayo-conflitti-interesse-intellettuali-conbio" %} La sua frase più netta riguarda la posizione senza soglie: se non si può dire in anticipo di nessun risultato che non sarà ammesso a contare in favore di una tesi, quella tesi non la si sta testando. Togliere le soglie, aggiunge, rende invisibile la pesca nei dati invece di ridurla, perché il ricercatore continua ad aver bisogno di un numero piccolo e nessuno può più distinguere quello ottenuto per disciplina da quello ottenuto per insistenza.

{% controtesi "2014-02-12-nuzzo-errori-statistici-nature" %}
Tutto questo lascia senza risposta la domanda che chi legge un risultato si pone davvero, cioè quanto sia probabile che l'effetto esista. Regina Nuzzo, su *Nature* nel 2014, la mette al centro con il caso di Matt Motyl, che aveva trovato un p di 0,01 su quasi duemila persone e con dati aggiuntivi lo ha visto salire a 0,59.{% rif "2014-02-12-nuzzo-errori-statistici-nature" %} Tradurre un p in probabilità che l'ipotesi sia vera richiede di sapere quanto era plausibile prima: con un'ipotesi a cinquanta e cinquanta un p di 0,05 la porta al 71 per cento, con un'ipotesi implausibile all'11. Il p-value non può lavorare a rovescio, e per l'economista Stephen Ziliak non fa il suo lavoro perché non può.
{% endcontrotesi %}

La controtesi ha ragione sul punto che conta, e questa catena non la smentisce. Il p-value non dice quanto sia probabile che un'ipotesi sia vera, e la severità nemmeno, perché rispondono a un'altra domanda; per rispondere a quella di Nuzzo serve una probabilità a priori, e nella maggior parte delle affermazioni che arrivano in archivio nessuno la dichiara. Noto però che la proposta dello 0,005 fa proprio questo lavoro di traduzione, prendendo la calibrazione bayesiana su cui si reggono anche i numeri di Nuzzo e trasformandola in una soglia frequentista: quando le scuole si parlano, riescono a tradursi. La regola di lettura che ne ricavo è di chiedere a ogni p-value quale fosse l'ipotesi nulla, quante strade avrebbe potuto prendere l'analisi, quanto sia grande l'effetto e quanto largo il suo intervallo, e quanto fosse plausibile l'ipotesi prima dello studio. Se all'ultima domanda nessuno risponde, un p piccolo va letto come una prova più debole di quanto sembri.
