---
layout: layouts/catena.njk
title: "Misura, previsione, scommessa"
date: 2026-11-02T21:30:00Z
updated: 2026-11-05
description: "Il sondaggio Times/Siena, i rapporti dell'AAPOR sul 2016 e sul 2020, quattromila sondaggi statali, Silver contro Taleb, il modello dell'Economist e un istituto inventato: undici schede su tre cose che il dibattito elettorale chiama con un nome solo."
tesi: "Un sondaggio è una misura, una previsione è un modello, una probabilità è una scommessa; quasi tutti gli errori sul tema, del pubblico e degli esperti, nascono dallo scambiare l'una per l'altra, e ciascuna va giudicata con il proprio criterio: la misura contro il risultato, con un errore reale doppio di quello dichiarato; il modello sulla quota di voto che stima; la probabilità sulla calibrazione e sulla coerenza nel tempo."
category: ["Epistemologia", "Politica", "Giornalismo"]
series: "Lo standard di prova, V"
serie_totale_prevista: 5
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["errore totale d'indagine", "calibrazione", "Silver, Nate", "Taleb, Nassim Nicholas", "inferenza bayesiana"]
fonti:
  - 2026-10-28-healy-cohn-davis-sondaggi-midterm-nyt
  - 2018-06-01-shirani-mehr-gelman-errore-sondaggi-jasa
  - 2017-05-04-aapor-valutazione-sondaggi-2016
  - 2021-07-19-aapor-task-force-sondaggi-2020
  - 2020-09-01-gelman-hullman-wlezien-morris-previsioni-elettorali-jdm
  - 2019-04-04-silver-70-per-cento-fivethirtyeight
  - 2017-03-18-taleb-election-predictions-martingales-arxiv
  - 2019-07-24-taleb-binary-forecasts-payoffs-arxiv
  - 2026-10-23-afp-falsi-istituti-sondaggio
  - 2026-11-04-levine-previsioni-midterm-bloomberg
  - 2019-04-07-clayton-taleb-silver-nautilus
controtesi: 2019-04-07-clayton-taleb-silver-nautilus
---

A pochi giorni dalle elezioni di metà mandato del novembre 2026 i sondaggi danno i Democratici in vantaggio, perfino in Texas, e Patrick Healy, responsabile degli standard del *New York Times*, chiede a Nate Cohn e William P. Davis, che curano il sondaggio Times/Siena, se ci si possa fidare.{% rif "2026-10-28-healy-cohn-davis-sondaggi-midterm-nyt" %} Cohn risponde distinguendo due significati della parola fiducia: aspettarsi che vinca chi è in testa no, usare i sondaggi come la migliore informazione disponibile sull'elettorato sì. In quella distinzione c'è già la tesi di questa catena. Il discorso pubblico sulle elezioni usa la stessa parola, «i sondaggi», per tre oggetti diversi: la rilevazione di un campione, il modello che ne ricava una stima dell'esito, e la probabilità che il modello pubblica. Ciascuno dice una cosa diversa, sbaglia in modo diverso e va giudicato con un criterio diverso, e le undici schede che seguono mostrano quasi tutte un errore nato dall'averne usato uno al posto di un altro.

## La misura

Davis lo dice nel modo più semplice: un sondaggio misura l'opinione in un momento dato, e non prevede il voto. Il Times pubblica ogni rilevazione, anche quella che sembra sbagliata; nel 2022 Cohn aveva ridimensionato un sondaggio in Kansas che dava la democratica Sharice Davids avanti di 14 punti, e lei vinse di 12. Negli anni in cui Trump era in corsa i sondaggi hanno sottostimato i repubblicani, perché gli elettori meno istruiti e meno assidui rispondono di meno, e il giornale ha cambiato il metodo di ponderazione e li richiama più volte. La frase con cui Cohn chiude vale per tutta la catena: un sondaggio non è un fatto come lo spostamento del presidente in Illinois, è la misura migliore disponibile, e non c'è garanzia che la migliore basti.

{% scheda "2026-10-28-healy-cohn-davis-sondaggi-midterm-nyt" %}

Quanto sia larga quella mancanza di garanzia lo hanno calcolato Houshmand Shirani-Mehr, David Rothschild, Sharad Goel e Andrew Gelman sul *Journal of the American Statistical Association*.{% rif "2018-06-01-shirani-mehr-gelman-errore-sondaggi-jasa" %} Hanno raccolto 4.221 sondaggi condotti nelle ultime tre settimane di 608 elezioni statali americane, fra il 1998 e il 2014, e hanno confrontato l'errore effettivo con quello dichiarato. L'errore quadratico medio è di circa 3,5 punti, il doppio di quanto implicano i margini d'errore pubblicati, e gli intervalli al 95 per cento contengono il risultato reale nel 73 per cento dei sondaggi per il Senato, nel 74 per quelli per i governatori e nell'88 per quelli presidenziali. Il margine d'errore stampato sotto ogni sondaggio misura soltanto il caso del campionamento; il resto dell'errore totale d'indagine viene da una distorsione media di circa due punti, condivisa dai sondaggi della stessa corsa, e da disegni campionari e ponderazioni che aggiungono variabilità. La distorsione non favorisce sistematicamente un partito, e proprio perché è condivisa non sparisce facendo la media dei sondaggi.

{% scheda "2018-06-01-shirani-mehr-gelman-errore-sondaggi-jasa" %}

## Quando la misura sbaglia

Il 2016 è ricordato come l'anno in cui i sondaggi sbagliarono. Il comitato dell'AAPOR, l'associazione americana dei ricercatori d'opinione, ha misurato che cosa sbagliò davvero.{% rif "2017-05-04-aapor-valutazione-sondaggi-2016" %} I sondaggi nazionali davano a Clinton circa tre punti di vantaggio, e lei vinse il voto popolare di 2,1: un errore medio di 2,2 punti, fra i più bassi dal 1936. Sbagliarono quelli statali, con un errore medio di 5,1 punti a favore di Clinton e il vincitore sbagliato in Pennsylvania, Michigan e Wisconsin, per due cause individuate: gli elettori decisi nell'ultima settimana, schierati in larga parte con Trump, e la mancata ponderazione per titolo di studio. L'ipotesi degli elettori che nascondono il proprio voto non trova conferma.

{% scheda "2017-05-04-aapor-valutazione-sondaggi-2016" %}

La parte del rapporto che conta qui è un'altra. Il comitato distingue il sondaggio, che misura l'opinione in un momento dato, dalla previsione, che stima un esito, e osserva che le previsioni che davano a Clinton fra il 71 e oltre il 99 per cento hanno probabilmente rafforzato la convinzione che avesse già vinto. Andrew Kohut, uno dei padri del mestiere, lo diceva in una riga: «Non sono un allibratore, sono uno che misura». Nel 2016 la misura nazionale era buona; a sbagliare fu soprattutto chi la trasformò in certezza.

Il 2020 è il caso più difficile, perché la misura sbagliò davvero e nessuno ha saputo dire perché. La task force dell'AAPOR presieduta da Josh Clinton trova che i sondaggi indicarono il vincitore giusto ma sovrastimarono il margine di Biden di 3,9 punti a livello nazionale, l'errore più grande in circa quarant'anni, e di 4,3 negli Stati, sempre nella stessa direzione e con ogni metodo di rilevazione.{% rif "2021-07-19-aapor-task-force-sondaggi-2020" %} Le cause del 2016 erano state corrette, e non bastavano. La conclusione del rapporto è un'ammissione: almeno una parte dell'errore viene dalla mancata risposta, perché chi accetta di rispondere è sistematicamente diverso da chi rifiuta, e di chi non risponde non si sa nulla. È la stessa difficoltà che Cohn descrive con gli elettori che rispondono di meno, ed è il limite che nessuna correzione tecnica toglie del tutto.

{% scheda "2021-07-19-aapor-task-force-sondaggi-2020" %}

## Il modello

Fra la misura e la probabilità sta un modello, e il modello aggiunge assunzioni che i sondaggi non contengono. Andrew Gelman ed Elliott Morris avevano costruito per l'*Economist* il modello delle presidenziali del 2020, e con Jessica Hullman e Christopher Wlezien si chiedono che cosa debba fare una previsione elettorale e come vada giudicata.{% rif "2020-09-01-gelman-hullman-wlezien-morris-previsioni-elettorali-jdm" %} Il confronto che portano è il più istruttivo della catena: a settembre l'*Economist* dava a Biden l'87 per cento e FiveThirtyEight il 71, eppure le due stime della quota di voto erano quasi identiche. La stessa misura, letta da due modelli con assunzioni diverse sulla correlazione fra gli Stati e sull'incertezza residua, produceva due probabilità lontane sedici punti.

{% scheda "2020-09-01-gelman-hullman-wlezien-morris-previsioni-elettorali-jdm" %}

Gli autori ne traggono due conseguenze. Con una decina di elezioni presidenziali alle spalle ed errori statali correlati fra loro, la calibrazione di un intervallo al 95 per cento è quasi impossibile da verificare: si può dichiarare, non dimostrare. E chi pubblica una previsione ha incentivi che con i dati non hanno a che fare, perché i media premiano le previsioni audaci, mentre una previsione audace sbagliata danneggia la reputazione più di quanto una giusta la accresca. Per il lettore la lezione è pratica: guardare la quota di voto prevista, che è ciò che il modello stima davvero, più che la probabilità di vittoria.

## La scommessa

La probabilità è l'oggetto più frainteso, e Nate Silver ha passato anni a difendere la propria. Nel 2019, su FiveThirtyEight, risponde alle due critiche opposte che riceve: quella di chi tratta le sue probabilità come pronostici secchi, e quella di chi sostiene che una previsione probabilistica non si possa mai smentire.{% rif "2019-04-04-silver-70-per-cento-fivethirtyeight" %} La risposta è la calibrazione. Raccogliendo le migliaia di previsioni pubblicate dal 2008, Silver mostra che degli eventi dati intorno al 70 per cento ne è accaduto circa il 71, e di quelli dati al 5 per cento circa il 4; il 29 per cento dato a Trump nel 2016, quando altri gli davano il 10 o il 2, è per lui un merito. Riconosce anche i limiti, e il più importante è logico: chi desse a ogni squadra la stessa probabilità sarebbe calibrato senza alcuna capacità di distinguere.

{% scheda "2019-04-04-silver-70-per-cento-fivethirtyeight" %}

Dall'altra parte c'è Nassim Nicholas Taleb, che giudica la probabilità come un prezzo. Nel paper del 2017 sostiene che una stima binaria aggiornata di continuo deve comportarsi come una martingala, e che quando l'incertezza è alta deve stare vicino al cinquanta per cento senza muoversi molto: le probabilità di FiveThirtyEight, che nel 2016 oscillavano, avrebbero esposto chi le avesse quotate a un arbitraggio.{% rif "2017-03-18-taleb-election-predictions-martingales-arxiv" %} Nel paper del 2019 aggiunge che chi usa una probabilità per decidere incassa un esito continuo, e che un buon previsore binario non è per forza un buon indicatore.{% rif "2019-07-24-taleb-binary-forecasts-payoffs-arxiv" %} Gli stessi due paper compaiono nella quarta parte di questa serie, [*«La previsione che misura la cosa sbagliata»*](/writings/2026-10-27-la-previsione-che-misura-la-cosa-sbagliata/), dove servivano a mostrare numeri verificabili che misurano un'altra cosa. Qui fanno un lavoro diverso: sono una delle due parti di una polemica su che cosa sia una probabilità elettorale, e vanno letti accanto alla risposta.

La polemica, del resto, è stata anche personale. Dopo le elezioni di metà mandato del 2018 Taleb accusò Silver di non sapere come funziona la matematica, e Silver gli rispose con l'espressione che Taleb stesso aveva coniato, «intellettuale idiota».{% rif "2019-04-07-clayton-taleb-silver-nautilus" %} Sotto gli insulti c'è un disaccordo preciso: Silver giudica la probabilità come l'uscita di un modello, da confrontare con le frequenze su molti casi; Taleb la giudica come la quota di una scommessa, da confrontare con ciò che un mercato coerente consentirebbe.

Una settimana dopo l'intervista di Healy, la sera del voto, la scommessa è uscita dalla metafora. Matt Levine, su *Bloomberg*, racconta di aver tenuto aperta la pagina di Kalshi invece di inseguire i commenti: alle 20.30 i prezzi davano ai Democratici il 98 per cento di probabilità di controllare il Senato, ore prima che le televisioni annunciassero qualcosa, e lui è andato a dormire.{% rif "2026-11-04-levine-previsioni-midterm-bloomberg" %} La differenza, scrive, è di incentivi: il giornalista ha buone ragioni per non estrapolare dai primi dati, lo scommettitore ha buone ragioni per farlo. Secondo Kalshi i candidati favoriti alle cinque del pomeriggio hanno vinto nel 98 per cento delle sfide già assegnate, un dato che viene dalla piattaforma stessa. Qui la probabilità è letteralmente una quota, e il criterio di Taleb, la coerenza dei prezzi in un mercato, è finalmente quello pertinente. Levine aggiunge che l'informazione prodotta da un mercato predittivo è un'esternalità: chi la produce, nel complesso, non guadagna nulla al netto delle commissioni, e chi la usa non la paga; circa tre quarti degli utenti di Kalshi, dice la società, guardano i prezzi senza aver mai depositato un dollaro. La scommessa vera, insomma, informa soprattutto chi non scommette.

## Chi produce la misura

Tutti questi criteri presuppongono che la misura esista. Nell'ottobre 2026 Wedgewood Polls, presentatasi come istituto di sondaggi americano, ha ammesso che la maggior parte dei suoi dati era inventata, e ha detto di aver voluto verificare quanto facilmente un istituto del tutto falso potesse essere preso sul serio.{% rif "2026-10-23-afp-falsi-istituti-sondaggio" %} L'ha scoperta l'aggregatore FiftyPlusOne; il *New York Times* aveva incluso quindici suoi sondaggi nel proprio tracker fra giugno e ottobre e li ha tolti con una nota, e in agosto un'altra società, Median Strategies, aveva ammesso di aver fabbricato risultati come «esperimento sociale». Mallory McMorrow, candidata democratica al Senato in Michigan, dice che un sondaggio di Wedgewood che la dava a una cifra le fece perdere donazioni e volontari.

{% scheda "2026-10-23-afp-falsi-istituti-sondaggio" %}

Secondo FiftyPlusOne fare sondaggi di bassa qualità, o falsificarli del tutto, sta diventando sempre più facile, e gli strumenti di intelligenza artificiale rendono più difficile riconoscere istituti e dati inventati. I falsi entrano dove i sondaggi veri sono pochi, cioè proprio nelle corse in cui un modello ha più bisogno di ogni rilevazione. Un modello costruito su una misura inventata produce una probabilità perfettamente calcolata su niente.

<aside class="catena-apparato" aria-label="Misura, previsione, probabilità">
<p class="catena-apparato-label">Apparato · Misura, previsione, probabilità</p>
<div class="catena-apparato-tabella">
<table>
<thead><tr><th></th><th>Che cosa dice</th><th>Come si sbaglia</th><th>Come si giudica</th><th>Nella catena</th></tr></thead>
<tbody>
<tr><td>Sondaggio (misura)</td><td>L’opinione di un campione in un momento dato</td><td>Campionamento, distorsione condivisa, mancata risposta; istituti falsi</td><td>Contro il risultato, sapendo che l’errore reale è circa il doppio del margine dichiarato</td><td>Cohn e Davis, Shirani-Mehr e altri, AAPOR 2016 e 2020, AFP</td></tr>
<tr><td>Previsione (modello)</td><td>Una stima dell’esito, costruita dai sondaggi e da assunzioni</td><td>Assunzioni sulla correlazione fra gli Stati e sugli eventi imprevisti; incentivi di chi pubblica</td><td>Sulla quota di voto prevista più che sul vincitore</td><td>Gelman, Hullman, Wlezien e Morris</td></tr>
<tr><td>Probabilità (scommessa)</td><td>Quanto conviene scommettere che un esito accada</td><td>Letta come certezza o come pronostico secco; oscillazioni incoerenti</td><td>Sulla calibrazione in molti casi e sulla coerenza nel tempo</td><td>Silver, Taleb, Levine, Clayton</td></tr>
</tbody>
</table>
</div>
</aside>

{% controtesi "2019-04-07-clayton-taleb-silver-nautilus" %}
Aubrey Clayton, matematico e autore di *Bernoulli's Fallacy*, prova a giudicare la sostanza della polemica su *Nautilus*, e dà torto a Taleb sul punto centrale.{% rif "2019-04-07-clayton-taleb-silver-nautilus" %} Ricorda il risultato di de Finetti: probabilità coerenti, aggiornate con la regola di Bayes, sono prive di arbitraggio per costruzione, e un modello può oscillare molto proprio perché il consenso da cui parte è incerto. Il prezzo di un'opzione, aggiunge, presuppone un mercato del sottostante, mentre il consenso elettorale non si osserva e va stimato dai sondaggi, che è esattamente ciò che fa Silver. Un'oscillazione forte, dunque, non è di per sé un errore.
{% endcontrotesi %}

La catena accoglie l'argomento di Clayton, e trova che conferma la tesi invece di indebolirla. Il torto di Taleb, se Clayton ha ragione, sta nell'aver giudicato una probabilità da modello con il criterio di una quota di mercato, cioè nell'aver scambiato la previsione per la scommessa; e la ragione per cui l'oscillazione è legittima è che la misura sottostante, il consenso stimato dai sondaggi, è incerta quanto le schede dell'AAPOR e di Shirani-Mehr documentano. Clayton concede del resto a Taleb una critica che Taleb non ha formulato: i modelli sottostimano gli eventi imprevisti, come la lettera di Comey a undici giorni dal voto del 2016, e su questo punto la scommessa ha ragione contro il modello. Gelman e i suoi coautori, citando Taleb, riconoscono che una previsione pienamente bayesiana non dovrebbe cambiare in modo prevedibile e che né il loro modello né quello di FiveThirtyEight lo sono del tutto. Ognuno dei tre oggetti ha il suo test, e la polemica fra Silver e Taleb dura da anni anche perché ciascuno applica all'altro il test sbagliato. Per chi legge resta una regola d'uso: leggere un sondaggio come una misura con un errore doppio di quello stampato, una previsione per la quota di voto che stima, una probabilità come la quota a cui si scommetterebbe, e non chiedere mai a nessuna delle tre la risposta che spetta a un'altra.
