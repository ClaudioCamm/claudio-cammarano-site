---
layout: layouts/catena.njk
title: "La previsione che misura la cosa sbagliata"
date: 2026-10-27T13:30:00Z
description: "Cinque paper di Taleb, i benchmark dei modelli, i ricavi annualizzati dei laboratori, i credit default swap sui data center, la scrittura dei paper e il registro delle previsioni sull'AGI: undici schede su numeri che si lasciano verificare e misurano un'altra cosa."
tesi: "Una previsione o un indicatore possono essere perfettamente verificabili e misurare comunque la cosa sbagliata: la frequenza con cui si indovina al posto di quanto costa sbagliare, la posizione in una gara al posto del valore, il ricavo di un mese moltiplicato per dodici al posto del ricavo. Il controllo che conta va fatto prima dell'esito, e chiede che cosa il numero misuri davvero."
category: ["Epistemologia", "Scienza", "Economia"]
series: "Lo standard di prova, IV"
serie_totale_prevista: 4
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["test severo", "Taleb, Nassim Nicholas", "cigni neri", "Statistical Consequences of Fat Tails", "legge di Goodhart"]
fonti:
  - 2017-03-18-taleb-election-predictions-martingales-arxiv
  - 2019-07-24-taleb-binary-forecasts-payoffs-arxiv
  - 2023-01-26-taleb-probability-conflation-arxiv
  - 2020-07-31-taleb-single-point-forecasts-arxiv
  - 2016-03-24-taleb-p-value-hacking-arxiv
  - 2026-10-16-pavlus-hardt-benchmark-quanta
  - 2026-10-14-economist-numeri-inaffidabili-ai
  - 2026-10-20-levine-someone-has-to-take-ai-risk-bloomberg
  - 2026-10-14-economist-ai-burocrazia-scienza
  - 2026-09-14-floridi-not-even-wrong-2-agi-ssrn
  - 2026-09-28-mervosh-paris-miller-cosa-funziona-davvero-nella-scuola-nyt
controtesi: 2026-09-28-mervosh-paris-miller-cosa-funziona-davvero-nella-scuola-nyt
---

Nel 2016 diversi gruppi che prevedevano le elezioni americane pubblicavano probabilità che salivano e scendevano a ogni sondaggio. Nassim Nicholas Taleb, in un paper uscito l'anno dopo, mostrò che quelle previsioni si potevano giudicare prima del voto, senza aspettare chi avrebbe vinto: bastava guardare come si muovevano. La catena che si apre qui riprende il filo di *«Non è nemmeno sbagliato»*, dove il difetto delle previsioni sull'intelligenza artificiale era di non lasciarsi smentire, e lo porta un passo più in là. Undici schede descrivono numeri che si lasciano verificare benissimo e che misurano un'altra cosa rispetto a quella per cui vengono usati. Il test severo, che in *«Il test severo»* chiedeva quanta probabilità avesse una prova di smentire, qui deve rispondere a una domanda che viene prima: che cosa misura il numero che si sta controllando.

## La previsione che si contraddice

L'argomento di Taleb sulle elezioni è tecnico e ha una conseguenza semplice.{% rif "2017-03-18-taleb-election-predictions-martingales-arxiv" %} Una stima binaria aggiornata di continuo deve comportarsi come una martingala, cioè non deve contenere al suo interno una tendenza prevedibile, e allora si può prezzare come un'opzione binaria. Ne viene un vincolo che funziona senza l'esito: quando l'incertezza è alta il valore sta vicino al cinquanta per cento e non dovrebbe muoversi molto, e una previsione che oscilla mentre la corsa resta incerta si sta contraddicendo da sola. Taleb mostra che diversi gruppi, nel 2016, violavano queste relazioni.

{% scheda "2017-03-18-taleb-election-predictions-martingales-arxiv" %}

Per la serie in cui questa catena entra è un acquisto raro, perché quasi ogni controllo di una previsione arriva dopo, quando ormai si sa com'è andata, e a quel punto un risultato azzeccato copre qualunque metodo. Qui il controllo arriva prima, e guarda la forma della previsione invece del suo contenuto.

## Indovinare e incassare

Due anni dopo Taleb sposta la domanda dalla coerenza alla cosa misurata.{% rif "2019-07-24-taleb-binary-forecasts-payoffs-arxiv" %} Una previsione binaria dice se un evento accadrà; chi la usa per decidere incassa un esito continuo, che dipende da quanto l'evento pesa quando accade. Fra le due cose c'è una distribuzione intera, e sotto certe distribuzioni un buon previsore binario non è un buon indicatore: può esserlo all'inverso. Da qui Taleb attacca la letteratura psicologica sulla sopravvalutazione degli eventi rari, che a suo dire misura la confusione fra i due oggetti più che un errore dei soggetti.

{% scheda "2019-07-24-taleb-binary-forecasts-payoffs-arxiv" %}

Il paper del 2023, scritto con Ron Richman, Marcos Carreira e James Sharpe come replica a Philip Tetlock, porta la distinzione sui tornei di previsione, quelli che premiano chi stima meglio la probabilità di un evento.{% rif "2023-01-26-taleb-probability-conflation-arxiv" %} Sapere quanto è probabile un evento non dice niente su quanto costa, e il torneo misura soltanto la prima delle due cose; il giudizio esperto, sostengono gli autori, non cattura il rischio di coda, e il formato del torneo è incompatibile con gli strumenti che lo misurano. La distinzione si porta su qualunque frase della forma «c'è il tot per cento di probabilità che», ed è una frase che i giornali scrivono ogni giorno.

## Un numero solo

Su una variabile a coda spessa, un numero solo è una categoria sbagliata prima che una stima imprecisa. Taleb lo scrive nel luglio 2020 con Yaneer Bar-Yam e Pasquale Cirillo, rispondendo a John Ioannidis sulla pandemia: la media non è il valore che si incontra, e sotto code spesse aspettare l'evidenza prima di agire è una scommessa rischiosa quanto agire senza.{% rif "2020-07-31-taleb-single-point-forecasts-arxiv" %} La posizione che sembra prudente, chiedere più dati, è anch'essa una decisione con un costo, e nessuno la dichiara come tale.

{% scheda "2020-07-31-taleb-single-point-forecasts-arxiv" %}

Lo stesso vale per il numero più citato della scienza sperimentale. Nel paper del 2016 sul p-hacking Taleb mostra che la distribuzione del p-value è così asimmetrica che un singolo valore resta volatile a prescindere dalla dimensione del campione, anche quando nessuno ha barato.{% rif "2016-03-24-taleb-p-value-hacking-arxiv" %} La prima catena di questa serie aveva ricostruito che cosa il p-value non dice; questo paper aggiunge che quel poco che dice lo dice in modo instabile.

## La gara al posto del termometro

Fuori dalla statistica il meccanismo si vede meglio. Moritz Hardt, intervistato da John Pavlus su *Quanta*, chiama i benchmark «l'errore che ha fatto l'apprendimento automatico».{% rif "2026-10-16-pavlus-hardt-benchmark-quanta" %} Dovevano funzionare come termometri, e il campo li ha usati come gare: li ha messi in rete e ci ha iterato sopra, contro la regola di usarli una volta sola, finché basta cambiare di poco il test per passare dal 90 al 73 per cento. I punteggi assoluti valgono poco. Le classifiche invece sono rimaste stabili fra un dataset e l'altro, «mostly by sheer luck», e solo finché tutti si preparavano al test nello stesso modo; con i modelli linguistici, di cui non si sa su che cosa siano addestrati, quella condizione è saltata.

{% scheda "2026-10-16-pavlus-hardt-benchmark-quanta" %}

Un benchmark verificato misura con precisione la posizione in una gara, e viene letto come una misura del valore. La proposta di Hardt, presa dalle Olimpiadi di Città del Messico del 1968, è estendere a tutti l'allenamento in quota invece di vietarlo; lui stesso riconosce che così si ottengono indicatori di progresso, e che misure vere e proprie non ce ne sono.

## Numeri che non si confrontano

La colonna Schumpeter dell'*Economist* trova lo stesso difetto nei conti dei laboratori.{% rif "2026-10-14-economist-numeri-inaffidabili-ai" %} In una settimana i ricavi di OpenAI sono stati stimati in 70 miliardi di dollari da Axios e in 50 dal *Financial Times*, e i titoli tecnologici sono saliti e scesi a ogni versione. I ricavi di cui si parla sono ricavi ricorrenti annualizzati, le vendite di un mese moltiplicate per dodici, e ogni laboratorio li calcola a modo suo: Anthropic conta le vendite fatte attraverso i fornitori cloud, OpenAI solo dopo averne tolto la quota. C'è chi propone di valutarli sul margine prima dei costi di addestramento, cioè prima della spesa più grande, e la colonna ricorda l'«EBITDA rettificato per la comunità» di WeWork.

{% scheda "2026-10-14-economist-numeri-inaffidabili-ai" %}

Matt Levine, su *Bloomberg*, mostra che cosa succede quando il mercato prova a coprirsi contro quei numeri.{% rif "2026-10-20-levine-someone-has-to-take-ai-risk-bloomberg" %} Gli scambi di credit default swap legati ai bond di Oracle, Alphabet, Amazon, Meta, Nvidia e degli altri grandi costruttori sono passati, secondo Morgan Stanley, da meno di due a più di nove miliardi di dollari a settimana fra luglio e settembre, e assicurare il debito di Oracle costa il 3,3 per cento l'anno contro lo 0,33 di cinque anni fa. Il prezzo della protezione misura un rischio specifico, quello che un debitore fallisca; il rischio dei data center, scrive Levine, è quasi tutto sistematico, e chi dovrebbe vendere l'assicurazione ha già in portafoglio gli stessi bond. Lo strumento funziona e misura un rischio diverso da quello che c'è.

## Il segnale rovesciato

A volte un indicatore smette di misurare senza che nessuno lo tocchi. L'*Economist*, sulla burocrazia della ricerca, registra un rovesciamento: prima dei modelli linguistici la qualità della scrittura di un paper era un buon indizio della sua qualità scientifica, e oggi non lo è più.{% rif "2026-10-14-economist-ai-burocrazia-scienza" %} Le sottomissioni a ICML sono raddoppiate in un anno, a 24.000; in 2,5 milioni di articoli biomedici le citazioni inventate sono cresciute di dodici volte fra il 2023 e l'inizio del 2026; due ricercatori svedesi hanno messo online due preprint su una malattia degli occhi inesistente, la «bixonimania», e in poche settimane i chatbot ne parlavano come di una cosa reale. Il revisore che leggeva la prosa come segno del lavoro continua a leggere la stessa prosa, e il segno ha cambiato significato sotto i suoi occhi.

## Le previsioni come fatti

Luciano Floridi, Jessica Morley e Claudio Novelli, nel secondo capitolo di *Not Even Wrong*, hanno verificato una per una ventiquattro previsioni pubbliche sull'AGI, la Singolarità e l'estinzione, emesse fra il 1950 e il 2026.{% rif "2026-09-14-floridi-not-even-wrong-2-agi-ssrn" %} La parte che conta per questa catena è il precedente da cui partono. Nel 1973 Sir James Lighthill misurò il registro dell'intelligenza artificiale contro le promesse della generazione fondatrice e concluse che aveva promesso troppo, e il rapporto contribuì al taglio dei finanziamenti britannici negli anni Settanta. Le previsioni, ne ricavano gli autori, sono fatti istituzionali: conferiscono legittimità, orientano le politiche e gli investimenti, e così contribuiscono a determinare il futuro che dicono di descrivere. Un numero sbagliato sulla cosa giusta fa danni; un numero preciso sulla cosa sbagliata li fa con l'autorità della precisione.

<aside class="catena-apparato" aria-label="Che cosa misura il numero">
<p class="catena-apparato-label">Apparato · Che cosa misura il numero</p>
<div class="catena-apparato-tabella">
<table>
<thead><tr><th>Numero</th><th>Viene letto come</th><th>Misura</th><th>Scheda</th></tr></thead>
<tbody>
<tr><td>Probabilità elettorale aggiornata</td><td>Stima di chi vincerà</td><td>Se oscilla mentre la corsa è incerta, la propria incoerenza</td><td>Taleb 2017</td></tr>
<tr><td>Record di previsioni azzeccate</td><td>Bravura del previsore</td><td>La direzione, non quanto si incassa</td><td>Taleb 2019</td></tr>
<tr><td>Punteggio in un torneo di previsione</td><td>Capacità di valutare il rischio</td><td>La probabilità, non il costo dell’evento</td><td>Taleb e altri 2023</td></tr>
<tr><td>Previsione puntuale su una variabile a coda spessa</td><td>Stima prudente</td><td>Una media che non si incontra</td><td>Taleb, Bar-Yam, Cirillo 2020</td></tr>
<tr><td>Punteggio di un benchmark</td><td>Valore del modello</td><td>La posizione in una gara</td><td>Hardt</td></tr>
<tr><td>Ricavi annualizzati</td><td>Ricavi</td><td>Un mese per dodici, calcolato in modi diversi</td><td>Economist</td></tr>
<tr><td>Prezzo dei credit default swap</td><td>Rischio dei data center</td><td>Un rischio specifico, dove il rischio è sistematico</td><td>Levine</td></tr>
<tr><td>Qualità della scrittura di un paper</td><td>Qualità della ricerca</td><td>Dopo i modelli linguistici, quasi nulla</td><td>Economist</td></tr>
</tbody>
</table>
</div>
</aside>

{% controtesi "2026-09-28-mervosh-paris-miller-cosa-funziona-davvero-nella-scuola-nyt" %}
Si può rispondere che il difetto riguarda numeri costruiti male, e che un numero costruito bene misura quello che deve. Sarah Mervosh, Francesca Paris e Claire Cain Miller, sull'*Upshot* del *New York Times*, hanno chiesto a 37 studiosi dell'istruzione di valutare trenta interventi scolastici su due scale separate, l'impatto sull'apprendimento e il costo, assumendo ogni volta che l'intervento fosse realizzato bene.{% rif "2026-09-28-mervosh-paris-miller-cosa-funziona-davvero-nella-scuola-nyt" %} Il risultato attraversa lo schieramento politico: i voucher, bandiera della destra, e le classi più piccole, care alla sinistra, finiscono entrambi fra i cinque interventi peggiori per costo-efficacia. Il numero c'è, si lascia discutere e misura la cosa giusta.
{% endcontrotesi %}

L'obiezione è giusta, e il caso che porta conferma la tesi invece di smentirla, perché fa esattamente ciò che Taleb chiede ai tornei di previsione: tiene separata la probabilità di funzionare dal costo, invece di fonderle in un punteggio solo. Le autrici, inoltre, dichiarano che cosa il numero non è, «una misura utile di come i ricercatori esperti vedono queste idee» e non un sondaggio scientifico in senso stretto, cioè dicono per prime che cosa stanno misurando. È il controllo che manca a tutti gli altri casi di questa catena, e si può fare prima di conoscere l'esito: chiedere a un numero di dichiarare l'oggetto, le condizioni in cui vale e la distanza fra ciò che misura e ciò per cui verrà usato. Una previsione che regge questo controllo può ancora risultare sbagliata, e allora almeno avrà sbagliato sulla cosa giusta.
