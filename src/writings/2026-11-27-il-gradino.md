---
layout: layouts/catena.njk
title: "Il gradino"
date: 2026-11-27T14:10:00Z
description: "Il paradosso di Jevons che si rompe, le domande aperte di Benedict Evans, la consulenza che non è un involucro, i junior che spariscono dentro Anthropic, l'agente del cliente sopra quello del venditore, i giochi abbondanti di Roblox, la cultura del cruscotto, il canone dei chatbot, i fondi indice consigliati dall'AI e il prototipo prima del comunicato: undici schede su perché il prezzo dell'AI scende e il suo uso non sale da solo."
tesi: "Il prezzo dei modelli scende, e dentro ogni livello d'uso l'AI si usa di più; ma passare al livello successivo è un problema di organizzazione, e nessun taglio di prezzo lo risolve. Mentre l'esecuzione diventa abbondante, il valore si sposta su ciò che un'organizzazione deve ancora fare da sé: decidere che cosa automatizzare, abbinare l'offerta alla domanda, rispondere di una scelta, rivedere ciò che la macchina produce."
category: ["AI", "Economia", "Lavoro"]
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["paradosso di Jevons", "AI come tecnologia normale", "commercio agentico", "commoditizzazione", "general purpose technologies"]
fonti:
  - 2026-11-25-alderson-paradosso-jevons
  - 2026-11-24-evans-ai-questions
  - 2026-10-16-wilmers-lavoro-anthropic-institute
  - 2026-06-30-vogels-two-pizza-culture-allthingsdistributed
  - 2026-11-19-thompson-seufert-commercio-agentico-stratechery
  - 2026-11-12-thompson-baszucki-roblox-stratechery
  - 2026-11-23-kapoor-moshtagi-consulenza-normaltech
  - 2026-11-25-smith-ubriachi-di-dati-raremind
  - 2026-11-22-kushner-weiner-gusto-macchine-nyt
  - 2026-11-08-baldinger-ai-investitori-al-dettaglio-nyu
  - 2026-01-01-dube-xu-email-marketing-llm-qme
controtesi: 2026-01-01-dube-xu-email-marketing-llm-qme
---

[Il prezzo di chi compra anche altro](/writings/2026-11-12-il-prezzo-di-chi-compra-anche-altro/) guardava al prezzo di Borsa dell'intelligenza artificiale e a chi lo forma. Questa catena guarda al prezzo d'uso, quello che un'impresa paga per ogni token, e alla domanda che ne discende: se l'AI costa sempre meno, perché non la si usa sempre di più? Le undici schede rispondono, in modi diversi, che fra il prezzo e l'uso c'è un gradino, e che a salirlo è l'organizzazione. Due schede vengono da Anthropic o ne riportano i conti, e questa catena è scritta con un modello di Anthropic.

## Il prezzo e il gradino

Martin Alderson, ingegnere del software, parte da un dato di Ramp, una società di carte aziendali: la crescita della spesa delle imprese in token è scesa dal 42 per cento di luglio all'1,5 di agosto e settembre messi insieme, e l'amministratore delegato ne ha concluso che il paradosso di Jevons «si è rotto».{% rif "2026-11-25-alderson-paradosso-jevons" %} Il paradosso, formulato nel 1865 a proposito del carbone, dice che rendere più efficiente una risorsa può farne aumentare il consumo. Alderson ammette che i dati sono rumorosi e propone quattro gradini d'uso, dalla chat occasionale, circa 50.000 token al giorno per persona, agli agenti autonomi che gestiscono reparti interi e ne consumano miliardi. Le cifre sono sue stime. L'argomento regge anche senza: un prezzo più basso fa usare di più l'AI dentro un gradino, e per salire a quello successivo serve cambiare il modo in cui il lavoro è organizzato.

{% scheda "2026-11-25-alderson-paradosso-jevons" %}

Benedict Evans, nella presentazione annuale sullo stato della tecnologia, descrive lo stesso scarto dal lato dell'adozione.{% rif "2026-11-24-evans-ai-questions" %} L'uso è largo e superficiale: molti utenti, pochi quotidiani, la spesa concentrata in pochissime imprese. Intanto i modelli migliorano e diventano intercambiabili, e i laboratori spendono per costruirli più di quanto incassino in un ciclo: secondo i dati di Anthropic che Evans riporta, l'80 per cento dei ricavi del terzo trimestre viene da modelli costruiti negli ultimi sei mesi, che sono costati il 60 per cento dei ricavi. Dare a tutti lo strumento nuovo è diffusione; la trasformazione arriva quando cambia il modo di lavorare, e quella non si compra con il prezzo.

## Chi sale

Che cosa succeda a chi il gradino lo sale lo raccontano quattro ricercatori dell'Anthropic Institute, che hanno studiato la propria azienda con i dati interni.{% rif "2026-10-16-wilmers-lavoro-anthropic-institute" %} Ad agosto gli agenti lanciati dai dipendenti lavoravano sei ore per ogni ora umana, e seguendo le stesse persone prima e dopo l'adozione la produzione cresce senza differenze misurabili nella qualità. Il lavoro però si sposta dall'esecuzione alla supervisione: leggere tutto ciò che scrivono i propri agenti richiederebbe metà della settimana, il tempo in riunione cresce, e il «meta-lavoro» di istruirli e controllarli sale dal 10 al 22 per cento delle sessioni. La quota di junior fra i nuovi assunti nei reparti tecnici scende dal 27 al 9 per cento. È l'azienda che produce il modello a studiare sé stessa, e chi adotta per primo, avvertono gli autori, non è un campione casuale.

{% scheda "2026-10-16-wilmers-lavoro-anthropic-institute" %}

Werner Vogels, direttore tecnico di Amazon, mostra il gradino da un'altra parte, quella dei metodi.{% rif "2026-06-30-vogels-two-pizza-culture-allthingsdistributed" %} Un prototipo costruito in una notte con un agente di programmazione, Quick Desktop, è diventato in poche settimane un prodotto usato da centinaia di migliaia di persone, e Vogels ne ricava un'inversione del metodo Amazon: prima il prototipo, poi il comunicato che lo descrive. Quando costruire costa una sera, l'ordine delle cose cambia, e i gruppi piccoli che decidono senza chiedere permesso diventano la condizione per approfittarne. Nell'uno e nell'altro caso a salire è un'organizzazione che ha cambiato le proprie regole.

## Dove si sposta il valore

Se l'esecuzione diventa abbondante, il valore va a chi la smista. Eric Seufert, nell'intervista con Ben Thompson su *Stratechery*, distingue tre forme di commercio agentico, da quella in cui l'agente compra da solo a quella in cui si limita a consigliare.{% rif "2026-11-19-thompson-seufert-commercio-agentico-stratechery" %} I grandi rivenditori aprono le porte agli agenti esterni solo in apparenza: per comprare su Walmart l'agente del cliente deve passare la richiesta a Sparky, l'agente di Walmart, e diventa un'interfaccia sopra quello del venditore. Sulle transazioni resta poco da guadagnare, e la scoperta si monetizza con la pubblicità. Thompson dissente sul piano pratico, e per un'azienda senza un'attività pubblicitaria da difendere chiudersi agli agenti gli pare un errore.

{% scheda "2026-11-19-thompson-seufert-commercio-agentico-stratechery" %}

David Baszucki, fondatore di Roblox, nella sua terza intervista con Thompson porta il ragionamento ai giochi.{% rif "2026-11-12-thompson-baszucki-roblox-stratechery" %} Con Roblox Build si descrive a parole un gioco e l'AI lo costruisce sul telefono, e nei test ne sono già stati pubblicati migliaia. Quando i giochi diventano abbondanti conta chi abbina il giocatore giusto al gioco giusto, e su quell'abbinamento si fonda l'aggregatore, con la pubblicità come esito naturale. È la stessa conclusione di Seufert arrivata da un mercato diverso: il gradino che la produzione sale da sola sposta il valore su chi decide che cosa arriva a chi.

## Che cosa resta da fare

Sayash Kapoor e Rod Moshtagi, dal gruppo che ha formulato la tesi dell'AI come tecnologia normale, rispondono alle previsioni sul crollo della consulenza aziendale.{% rif "2026-11-23-kapoor-moshtagi-consulenza-normaltech" %} Quelle previsioni trattano il consulente come un involucro sottile sull'intelligenza, qualcuno che elabora informazioni. Gli autori contano cinque fonti di valore, e l'analisi, dove l'AI migliora di più, è solo la prima: restano il giudizio, il coordinamento degli interessi interni, la credibilità e la responsabilità. Anche un'AI che giudicasse bene lascerebbe all'azienda il bisogno di qualcuno che metta d'accordo i manager colpiti da una decisione, la renda credibile davanti al consiglio e ne risponda se va male. Le tecnologie di uso generale del passato, ricordano, hanno creato domanda di consulenza invece di ridurla.

{% scheda "2026-11-23-kapoor-moshtagi-consulenza-normaltech" %}

Alex M H Smith, consulente di strategia, indica il rischio opposto, quello di un'organizzazione che sale il gradino adattandosi alla macchina.{% rif "2026-11-25-smith-ubriachi-di-dati-raremind" %} La cultura del cruscotto, il controllo continuo degli indicatori con piccole ottimizzazioni, fa somigliare l'impresa a un videogioco da risolvere, e l'AI la accelera. Smith la chiama *toolification*: le imprese prendono la forma che i dati sanno ottimizzare meglio, e restano in ombra le idee che creano un bisogno invece di rispondere a uno esistente. L'esempio è Hyrox, che ha fatto dell'allenamento uno sport senza che alcun dato ne indicasse la domanda.

Jonah Weiner, intervistato da Adam Kushner per il *New York Times*, trova lo stesso appiattimento nel gusto.{% rif "2026-11-22-kushner-weiner-gusto-macchine-nyt" %} Chiedendo a modelli diversi quale sia il migliore in una categoria, le risposte si ammassano sulle stesse scelte di consenso, e Weiner chiama il risultato «Chatbot Canon». I suoi test sono informali, per sua ammissione. L'osservazione che conta riguarda chi viene tolto dal giudizio: nella forma migliore il gusto porta dentro la soggettività di altre persone, e il consiglio della macchina le toglie dall'equazione.

{% scheda "2026-11-22-kushner-weiner-gusto-macchine-nyt" %}

Lo stesso consiglio medio, però, può essere esattamente quello che serve. Valerie Baldinger, in un lavoro ancora in corso alla NYU, usa i dati di una piattaforma di gestione patrimoniale che dal 2024 offre un assistente basato su ChatGPT e Gemini.{% rif "2026-11-08-baldinger-ai-investitori-al-dettaglio-nyu" %} Le risposte raccomandano con costanza i fondi passivi rispetto ai titoli singoli, gli investitori le seguono, e l'adozione riduce in media di 43 punti base il rendimento perso per scarsa diversificazione. Dove l'errore più comune è conosciuto, il canone della macchina lo corregge. Il valore dipende da chi ha deciso in quale campo usarla, e quella decisione resta fuori dal modello.

<aside class="catena-apparato" aria-label="Quattro gradini">
<p class="catena-apparato-label">Apparato · Quattro gradini</p>
<div class="catena-apparato-tabella">
<table>
<thead><tr><th>Gradino</th><th>Consumo stimato</th><th>Che cosa serve per salirlo</th><th>Dove va il valore</th><th>Scheda</th></tr></thead>
<tbody>
<tr><td>Chat occasionale</td><td>Circa 50.000 token al giorno per persona</td><td>Una licenza</td><td>Al singolo che risparmia tempo</td><td>Alderson, Evans</td></tr>
<tr><td>Agenti usati di tanto in tanto</td><td>Circa tre milioni</td><td>Persone che sappiano istruirli e controllarli</td><td>Alla supervisione, a scapito dei posti junior</td><td>Wilmers, Vogels</td></tr>
<tr><td>Agenti per processi ripetibili</td><td>Centinaia di milioni</td><td>Processi riscritti, gruppi che decidono da sé</td><td>A chi abbina offerta e domanda</td><td>Seufert, Baszucki</td></tr>
<tr><td>Agenti autonomi</td><td>Miliardi</td><td>Qualcuno che risponda delle decisioni</td><td>Al giudizio, alla credibilità, alla responsabilità</td><td>Kapoor e Moshtagi, Smith</td></tr>
</tbody>
</table>
</div>
</aside>

{% controtesi "2026-01-01-dube-xu-email-marketing-llm-qme" %}
Si può obiettare che il gradino sia più basso di come la catena lo descrive, e che per molte imprese basti il prezzo. Jean-Pierre Dubé e Ariel Xu, della Booth School di Chicago, hanno condotto tre esperimenti randomizzati con Wine Access, un piccolo rivenditore di vino della Napa Valley, confrontando le newsletter scritte dai redattori con quelle generate da un modello e con quelle ibride, scritte dal modello e corrette da una persona.{% rif "2026-01-01-dube-xu-email-marketing-llm-qme" %} Tutte e tre raddoppiano circa i profitti rispetto al gruppo che non riceve email, e le differenze fra umani e AI non sono significative. A parità di efficacia decide il costo, e in tutti e tre gli esperimenti una soluzione con l'AI batte quella umana sul profitto netto, con risparmi sul lavoro fino all'83 per cento. Una piccola impresa sale il gradino senza riorganizzare nulla.
{% endcontrotesi %}

Lo studio è il più rigoroso fra quelli della catena, e su testi brevi e ripetitivi ha ragione. Ma contiene un risultato che lo riporta alla tesi: l'ibrido funziona meglio quando a correggere è il gruppo marketing, più favorevole all'AI, di quando lo fa un redattore, e gli autori vi leggono un calo di produttività per i redattori e un aumento per chi accoglie lo strumento. A parità di modello e di prezzo, il risultato cambia con chi rivede. È il gradino di Alderson visto da vicino, su una scala piccola: la differenza la fa la persona messa a controllare ciò che la macchina produce, e chi la sceglie. Il gradino seguente, dove a scrivere per le macchine sono i marchi stessi, è il tema di [Marketing per le macchine](/writings/2026-09-28-marketing-per-le-macchine/).
