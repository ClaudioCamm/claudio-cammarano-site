---
layout: layouts/article.njk
title: "La forza della scrittura e la sua direzione"
date: 2026-08-26
ai_prose: ED
ai_scope: [FM]
description: "Ho costruito un simulatore della mia equazione sull’autenticità e il simulatore l’ha rotta in tre punti. Che cosa succede al valore di un testo quando si smette di misurare quanto sposta il lettore e si comincia a misurare in che direzione lo sposta."
category: ["Epistemologia", "Scrittura", "AI"]
series: "L’equazione del valore, II"
serie_totale_prevista: 2
lang: "🇮🇹 Italiano"
tags: [writings]
og_image: "/images/passaggio-del-niemen-1812-hero.jpg"
---

<script>
window.MathJax = {
  tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] },
  svg: { fontCache: 'global' }
};
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<figure class="article-hero">
  <img src="/images/passaggio-del-niemen-1812-hero.jpg" alt="Acquatinta ottocentesca: l’esercito di Napoleone attraversa il Niemen su ponti di barche, con lo stato maggiore a cavallo in primo piano." />
  <figcaption>Il passaggio del Niemen, giugno 1812. Acquatinta di John Heaviside Clark e M. Dubourg. Il soggetto è inaspettatamente pertinente: il lettore del 1869 credeva che la guerra fosse decisa dal genio di un uomo a cavallo, esattamente il prior che <em>Guerra e pace</em> doveva spostare. Se il romanzo ha una tesi, è che i «grandi uomini» sono strumenti in mano alla volontà dei popoli. Disturbante, isn’t it? McGill University Libraries, via Wikimedia Commons.</figcaption>
</figure>

<div class="info-box">
  <p><strong>Che cosa cambia rispetto al saggio del 23 agosto.</strong> Il guadagno epistemico acquista una direzione, e si scompone esattamente in <em>quanto hai spinto verso il mondo</em> meno <em>quanto ti è costato spingere</em>. La sindrome di Siddharta smette di essere un caso raro e diventa una separatrice di misura nulla. Le sei etichette del simulatore si riducono a due numeri puri, α e r, e ne esce un quadrante che il saggio precedente classificava come fallimento e che invece ha valore. Il termine ecologico smette di essere postulato e mostra un punto fisso: il campo non collassa, si assesta. La tesi centrale — lo stack di strumenti Σ non compare in nessun termine additivo di contenuto — sopravvive a tutte e cinque le modifiche, e la terza la rafforza.</p>
</div>

## 0. Perché torno sull’equazione

Pochi giorni fa ho pubblicato [una formalizzazione del valore di un testo](/writings/2026-08-23-la-formula-dellautenticita/), costruita per rispondere a una domanda che considero mal posta — «chi o cosa ha scritto questo?», in relazione al crescente uso degli LLM per scrivere testi — sostituendola con quattro domande che considero poste un po’ meglio: quanta osservazione nuova entra, chi ha operato la selezione, quale tasso d’errore non corretto viaggia nel testo, e che cosa accade alla varietà del sistema quando molti testi vengono prodotti così. Il risultato centrale era che lo stack di strumenti $\Sigma$, dentro cui sta l’AI generativa, non compare in nessun termine additivo di contenuto. Entra al contrario come coefficiente moltiplicativo saturante — potenzia quello che è già in nuce nel testo —, come termine d’errore azzerabile per verifica — può produrre errori, ma il problema è superabile ricorrendo a una validazione responsabile — e come costo ecologico di popolazione, perché tende effettivamente ad appiattire l’ecosistema culturale.

Si tratta naturalmente di una formalizzazione delle mie stesse assunzioni, e in quanto tale opinabilissima. Tuttavia, dopo quell’esperienza ho iniziato a interrogarmi ulteriormente e a cercare, per così dire, uno spazio intermedio fra la cosa pensata e la realtà, comunque la si voglia intendere. Che è probabilmente il punto più interessante in cui stare, dopo aver abbozzato un pensiero: perché è precisamente il luogo in cui le nostre idee possono essere testate.

Nel caso specifico, le mie assunzioni non sono esattamente testabili. È d’altra parte possibile sottoporre a prova di stress la loro coerenza interna, e in questo la formalizzazione matematica — che nel pezzo precedente era poco più che un gioco — diviene improvvisamente una condizione utile, che aiuta a espandere l’argomento.

Mi sono infatti imbarcato in un esercizio che non avevo previsto di fare qualche giorno fa, e che raccomando a chiunque scriva formule con intenzioni argomentative: sempre con l’aiuto di un LLM, ho costruito un simulatore. Vedere è meglio che calcolare, per lo meno in termini di efficacia estetica. Volevo quindi osservare che cosa succede al valore finale di un testo, quando si cambiano i termini in presa diretta. L’ho costruito per chiarirmi le idee, in second’ordine per divulgare, e devo dire che ha funzionato piuttosto bene anche come strumento di falsificazione.

Che cosa ho scoperto? Il modello conservava il suo senso di fondo, ma ho trovato delle aree sulla superficie che erano coperte non troppo bene. Casi paradigmatici molto interessanti, che non richiedono di rivedere l’impianto complessivo del lavoro, né di buttare nel cestino il mio sistema di certificazione dell’impiego degli LLM, che utilizzo anche per questo sito. L’idea insomma teneva, ma c’era di più.

**Tre cose in particolare si sono rotte, e nessuna delle tre tocca la tesi centrale.** L’elemento che rimane è che $\Sigma$ resta fuori da ogni termine additivo di contenuto, e anzi la terza rottura rafforza quella conclusione in un punto in cui il testo di prima era più debole di quanto non veda ora. Ma tutte e tre toccano l’impalcatura con cui la tesi era sostenuta. Due delle tre producono configurazioni che il saggio precedente non aveva immaginato, il che mi consente di dare loro un nome e un cognome.

Il risultato è un modello che consente di riflettere un po’ meno astrattamente sul potere del testo — in una prospettiva molto differente dagli approcci testualistici a cui sono abituato a ricorrere, penso per esempio alla semiotica del testo, ma che a ben vedere rispetto ad essi risulta straordinariamente complementare. Perché stiamo ancora parlando di una caratteristica strutturale: il tutto viene considerato senza uscire dalla dimensione dell’*intentio operis*.

Entriamo quindi nel cuore dell’argomentazione, osservando la formalizzazione un po’ più da vicino rispetto alla volta precedente. Per la lettrice o il lettore, potrebbe essere un incentivo alla falsificazione. Il che sarebbe un’ottima cosa.

## 1. Il banco di misura, e le tre cose che ha rotto

La dashboard, che riproduco in fondo a questo testo, consiste di tre pannelli con statuti epistemici molto diversi: vale la pena tenerli separati anche visivamente, perché il rischio di un simulatore è restituire un senso di esattezza che non corrisponde alla realtà concreta.

**Il primo pannello è abbastanza referenziale.** Prende i quattro scenari sul mercato del libro usati come esempio nel saggio precedente — l’operatore che pensava che il mercato non avesse granché da dire, e si trova smentito nelle sue aspettative —, permette di muovere a mano tre distribuzioni, cioè le attese prima della lettura, le attese dopo e il mondo, e calcola in tempo reale spostamento, struttura, rigidità e guadagno. Qui non c’è nulla di inventato: sono divergenza di Kullback-Leibler ed entropia di Shannon su un dominio finito, e i numeri che ne risultano sono bit veri.

**Il secondo pannello è un esploratore di forme.** Per far girare l’equazione finale ho dovuto specificare due funzioni che il saggio lascia volutamente indeterminate: come $\eta$ dipende da $\Sigma$ e dalla competenza formale, e come $\varepsilon$ dipende da $\Sigma$ e dalla verifica. Ho scelto una saturante per la prima e un’esponenziale decrescente nella verifica per la seconda. Nessuna delle due sta nel testo precedente, e questa è la lezione implementativa: un simulatore costringe a decidere ciò che una formalizzazione può permettersi di lasciare aperto, e ogni decisione è un’aggiunta teorica travestita da dettaglio tecnico. Questo può sembrare che indebolisca il modello, ma per come la vedo io lo rafforza, perché rende esplicita una debolezza che era già nella prima proposta, anche se meno in luce.

**Il terzo pannello è dinamico.** Si tratta dell’elemento che strutturalmente è impossibile da replicare: l’ambiente circostante. In una simulazione possiamo solo cercare di costruire una riduzione; in uno studio reale, serve fare ricorso alla statistica. In questo caso ho pensato di rappresentare ottanta autori e autrici con prior distribuiti casualmente; a ogni passo ciascuno pubblica mescolando il proprio prior con la media del corpus in proporzione $\Sigma$, e legge quel che gli altri hanno pubblicato. E si osserva la varianza fra i prior nel tempo.

E ora finalmente le tre rotture, in ordine di gravità crescente.

**La prima.** Il caso che nel saggio precedente chiamavo sindrome di Siddharta — spostamento alto e guadagno nullo, un errore sostituito con un altro errore ugualmente distante — è quasi impossibile da centrare muovendo i cursori. In realtà il nome della sindrome tradisce il messaggio di Hesse: per Siddharta tutte le esperienze, prese singolarmente, sono fallimentari, ma il percorso significativo si compone di tutte; qui non direi. In ogni caso, Siddharta si trova solo costruendolo di proposito: è una configurazione molto pensabile — qualcosa che ha a che vedere con l’euristica della disponibilità di Kahneman — ma molto rara. Il mio sospetto era che si trattasse di un artefatto del dominio a quattro scenari: una casella su quattro, dunque logicamente frequente. Era invece una proprietà geometrica che il saggio non poteva vedere, perché non aveva mai scomposto lo spostamento in modulo e direzione. Ci torno in §2.5, dove la cosa si vede in una figura.

**La seconda.** Per etichettare il regime del testo nel pannello ho dovuto scrivere sei rami condizionali, dove il saggio ne prevedeva quattro. E il sesto era un tappabuchi, una casella «regime misto» per le configurazioni in cui i segni non concordano e la tassonomia precedente non ha nome. Quel tappabuchi si è rivelato il quadrante mancante della teoria.

**La terza.** Il pannello ecologico appiattisce il campo anche con $\Sigma$ portato a zero. Basta alzare la permeabilità, cioè quanto gli autori si aggiornano leggendosi fra loro. Il campionamento modale accelera il processo e taglia la compensazione, e non lo causa.

## 2. Prima correzione: il guadagno ha una direzione

### 2.1 Le tre distribuzioni, e cosa vogliono dire

Riprendo tutto dall’inizio, con calma, perché quello che segue si regge su definizioni che conviene avere fresche e perché voglio che i conti siano riproducibili.

Si fissa una domanda e si elencano le risposte possibili, in modo che siano mutuamente esclusive e coprano tutti i casi. L’insieme di quelle risposte è il dominio, che chiamo $\Omega$. Nel mio esempio la domanda è: che cosa sta succedendo al mercato del libro? E le risposte possibili sono quattro. **Una distribuzione** su $\Omega$ è semplicemente il modo in cui qualcuno ripartisce cento punti di fiducia su quelle quattro risposte. Se ne assegna ottantacinque alla stabilità, sta dicendo che la ritiene di gran lunga la più probabile.

Le distribuzioni in gioco sono tre. La prima, che chiamo $p$, sono le attese del lettore prima di leggere. La seconda, $p^{\prime}$, sono le sue attese dopo. La terza, $q$, è il mondo — o, più onestamente, il miglior surrogato del mondo di cui si disponga, che nel caso del mercato del libro sono i dati di sell-out incrociati con gli ascolti dell’audiolibro. Sul fatto che $q$ non sia accessibile e vada surrogato tornerò fra i limiti; per ora lo si prenda come dato.

Il lettore dell’esempio è un operatore del settore convinto che non stia succedendo granché, e il testo lo porta a credere al riassetto: il trade cala, l’ascolto cresce. Ecco le tre distribuzioni.

| Scenario | $p$ — prima | $p^{\prime}$ — dopo | $q$ — mondo |
|---|---|---|---|
| Il mercato cresce | 0,05 | 0,10 | 0,10 |
| Il mercato resta stabile | 0,85 | 0,10 | 0,15 |
| Il mercato cala | 0,05 | 0,10 | 0,10 |
| Il mercato si riassetta | 0,05 | 0,70 | 0,65 |

<p class="caption">Tabella 1. Le tre distribuzioni sul dominio a quattro scenari.</p>

Su queste tre distribuzioni si costruisce una sola operazione, che si chiama **divergenza di Kullback-Leibler** e che si scrive $D(a \parallel b)$. Il modo più utile per intenderla: quanto costa, in bit, usare il modello $b$ per prevedere un mondo che si comporta come $a$. Se i due coincidono il costo è zero, e più $b$ si allontana da $a$ più il costo cresce. La divergenza non è simmetrica — sbagliarsi per eccesso di certezza costa più che sbagliarsi per prudenza — e questa asimmetria tornerà utile quando parlerò dell’idealtipo dei fratelli Karamazov, che è l’esatto opposto del caso Siddharta.

Con questa sola operazione si definiscono le due grandezze del saggio precedente. Lo spostamento è quanto le attese si sono mosse:

<div class="math-display">$$D \;=\; D(\,p^{\prime} \parallel p\,) \;=\; \sum_\omega p^{\prime}(\omega)\,\log_2 \frac{p^{\prime}(\omega)}{p(\omega)}$$</div>

e il guadagno epistemico è l’accorciamento di distanza dal mondo, cioè quanto era distante prima meno quanto è distante dopo:

<div class="math-display">$$G \;=\; D(\,p \parallel q\,) \;-\; D(\,p^{\prime} \parallel q\,)$$</div>

Nel primo testo ero andato in effetti un po’ troppo veloce. Svolgo lo spostamento sui numeri della tavola, termine per termine, così che si veda dove nasce. Il rapporto $p^{\prime}/p$ vale 2 sul primo scenario, 0,118 sul secondo, 2 sul terzo e 14 sul quarto; i logaritmi in base due di quei rapporti valgono 1, −3,09, 1 e 3,81; ciascuno va pesato per la probabilità che il lettore assegna dopo:

<div class="math-display">$$D \;=\; 0{,}10\cdot(1) \;+\; 0{,}10\cdot(-3{,}09) \;+\; 0{,}10\cdot(1) \;+\; 0{,}70\cdot(3{,}81) \;=\; 2{,}56 \ \text{bit}$$</div>

Due bit e mezzo di spostamento. Il testo ha lavorato.

### 2.2 L’unica cosa nuova: il prodotto interno

Ora il punto da cui è nata tutta questa riscrittura. **Lo spostamento $D$ è un numero solo**, e un numero solo non ha direzione: dice quanto forte, e tace su dove. Ma la differenza fra le due distribuzioni è un vettore — quattro numeri, uno per scenario — e nel formalismo c’è già un secondo vettore che indica dove sta il mondo. Bastava guardarli, e in prima battuta non l’ho fatto, forse stordito dalle formule.

Il primo vettore lo chiamo $\Delta$, e vale $p^{\prime}$ meno $p$, scenario per scenario. Dice dove il testo ha spostato la massa di fiducia: positivo dove l’ha aggiunta, negativo dove l’ha tolta.

Il secondo lo chiamo $u$, e vale il logaritmo del rapporto fra il mondo e le attese iniziali, cioè $\log_2(q/p)$, sempre scenario per scenario. Dice dove sta il mondo rispetto a dove stava il lettore: positivo negli scenari che il lettore sottostimava, negativo in quelli che sopravvalutava, e tanto più grande in valore assoluto quanto più grosso era l’errore. È, in una riga, la mappa dell’errore iniziale.

Ecco i due vettori sul nostro esempio, e il conto che li mette insieme.

| Scenario | $\Delta = p^{\prime} - p$ | $u = \log_2(q/p)$ | prodotto $\Delta \cdot u$ |
|---|---|---|---|
| Il mercato cresce | +0,05 | +1,00 | +0,05 |
| Il mercato resta stabile | −0,75 | −2,50 | +1,88 |
| Il mercato cala | +0,05 | +1,00 | +0,05 |
| Il mercato si riassetta | +0,65 | +3,70 | +2,41 |
| **Somma** | 0,00 | — | **⟨ Δ , u ⟩ = 4,38** |

<p class="caption">Tabella 2. Lo spostamento scomposto in direzione. La colonna di Δ somma a zero per costruzione.</p>

L’operazione dell’ultima colonna si chiama **prodotto interno** e si scrive fra parentesi angolari: due vettori con lo stesso numero di componenti, si moltiplicano componente per componente e si sommano i risultati. Con quattro scenari sono quattro moltiplicazioni e una somma. Niente di più.

Vale la pena leggere la tavola riga per riga, perché è lì che si vede la cosa. Sul secondo scenario il testo ha tolto 0,75 di fiducia alla stabilità, e la mappa dell’errore dice che il lettore la sopravvalutava di parecchio: due segni negativi che si moltiplicano danno un contributo positivo di 1,88. Sul quarto il testo ha aggiunto 0,65 al riassetto, che il lettore sottostimava di un fattore tredici: due segni positivi, contributo di 2,41. I due scenari centrali contribuiscono briciole. Il totale, 4,38 bit, misura quanto il testo abbia aggiunto massa esattamente dove ne mancava, per il solo fatto di esistere.

**Questa formalizzazione esprime quanto il testo ha spinto nella direzione giusta.** L’aspetto forse più interessante, e discutibile, è epistemologico: presuppone che esista una realtà esterna — che come mi pare di aver espresso più volte è una prospettiva in cui mi riconosco — e che questa realtà esterna sia misurabile.

### 2.3 Perché si somma su tutti gli scenari

Vale la pena fermarsi su un’obiezione che a questo punto è naturale, e che mi è stata fatta appena ho mostrato la tavola: se il mercato del libro farà una cosa sola, e mai tutte e quattro insieme, perché sommare su quattro righe invece di guardare quella che si realizzerà? La risposta ha tre parti, e la terza è quella che tiene in piedi il resto dell’articolo.

**La prima.** Lo spostamento non si misura nel momento in cui il mercato rivela cosa sta facendo, ma nel momento in cui il lettore chiude il testo. E in quel momento nessuno dei quattro scenari si è realizzato: ciò che esiste è soltanto una ripartizione di fiducia su quattro possibilità. La grandezza che voglio misurare è quanto quella ripartizione si sia mossa, e una ripartizione ha quattro componenti per definizione. Aspettare la realizzazione significherebbe misurare un’altra cosa, che ha anche un nome ordinario: il senno di poi. Utilissimo, e inservibile per valutare un testo il giorno in cui esce.

**La seconda.** Il termine per un solo scenario esiste, ed è già nella tavola: è il logaritmo del rapporto fra le attese dopo e le attese prima, quello che vale 1, poi −3,09, poi 1, poi 3,81. Si legge così: se il mondo si rivelasse essere questo, di quanto il lettore ne uscirebbe meglio attrezzato? Sul riassetto vale 3,81 bit; sulla stabilità vale meno 3,09, perché se il mercato restasse stabile il testo avrebbe peggiorato le cose. Quattro scenari, quattro risposte, tutte legittime e tutte diverse. Ma la domanda che mi interessa è un’altra: prima di sapere quale si realizzerà, quanto è ragionevole aspettarsi che il lettore abbia guadagnato? E la risposta a quella domanda è la media dei quattro valori, pesata per quanto ciascuno scenario è ritenuto probabile.

<div class="math-display">$$D \;=\; \text{media pesata di } \log_2\!\left(\frac{p^{\prime}}{p}\right) \text{ su tutti gli scenari}$$</div>

La somma, insomma, è una media. È la stessa operazione che si fa calcolando il rendimento atteso di un portafoglio: nessuno detiene quattro scenari contemporaneamente, e a nessuno viene in mente di obiettare che la somma pesata sia illegittima. Un dettaglio che non è neutro, e che dichiaro: la media è pesata per le attese *dopo*, e questa è una scelta con una conseguenza precisa. Una divergenza di Kullback-Leibler non è mai negativa, quale che sia il peso; ma pesare per $p^{\prime}$ è ciò che rende questa media esattamente una divergenza, e quindi ciò che garantisce che lo spostamento non possa risultare negativo. Chi si è appena mosso giudica il proprio movimento un miglioramento, per costruzione. Pesare per le attese prima darebbe una grandezza diversa e altrettanto sensata.

**La terza, ed è quella che conta.** Si guardi la colonna di $\Delta$ nella tavola: +0,05 meno 0,75 più 0,05 più 0,65 fa esattamente zero. E somma a zero sempre, quale che sia il testo, perché entrambe le distribuzioni valgono uno. Il testo non aggiunge fiducia da nessuna parte: la ridistribuisce, e ciò che toglie da una casella lo mette in un’altra. Un numero solo non può descrivere una ridistribuzione — servono almeno due caselle per dire da dove a dove — ed è precisamente da qui che nasce la direzione. Il prodotto interno chiede se lo spostamento sia avvenuto verso le caselle che il lettore sottostimava. Si riduca tutto a un solo scenario e la direzione svanisce: resta uno scalare, cioè esattamente il problema del saggio precedente, che misurava quanto forte e taceva su dove.

Il fatto che $\Delta$ sommi a zero regala anche un piccolo bonus di rigore, che segnalo perché è raro trovare formalismi che si proteggano da soli. Aggiungere una costante a tutte le componenti della mappa dell’errore non cambia il prodotto interno, perché quella costante finisce per moltiplicare una somma nulla. La direzione del mondo è dunque definita solo a meno di uno spostamento d’insieme, e il rapporto che costruirò fra poco non ne risente.

### 2.4 L’identità, dimostrata

Il guadagno epistemico è allora quella spinta utile, meno il costo dello spostamento:

<div class="math-display">$$G \;=\; \langle\, \Delta \,,\, u \,\rangle \;-\; D$$</div>

L’identità è esatta e non approssimata, e la derivazione sta in quattro righe che svolgo per intero. Si parte dalla definizione del guadagno e si lavora separatamente sui due addendi.

Il secondo addendo si spezza aggiungendo e togliendo il logaritmo del prior sotto il segno di somma, che è un’operazione legittima perché $\log(p^{\prime}/q)$ si può scrivere come $\log(p^{\prime}/p)$ più $\log(p/q)$:

<div class="math-display">$$D(\,p^{\prime} \parallel q\,) \;=\; \sum p^{\prime} \log\frac{p^{\prime}}{p} \;+\; \sum p^{\prime} \log\frac{p}{q}$$</div>

La prima somma è per definizione lo spostamento $D$. La seconda è il prodotto interno fra $p^{\prime}$ e il vettore $\log(p/q)$, che è l’opposto di $u$; quindi vale meno $\langle p^{\prime}, u \rangle$. In tutto:

<div class="math-display">$$D(\,p^{\prime} \parallel q\,) \;=\; D \;-\; \langle\, p^{\prime} \,,\, u \,\rangle$$</div>

Il primo addendo è più semplice, perché non contiene $p^{\prime}$. La divergenza iniziale è la somma di $p$ per $\log(p/q)$, che è di nuovo l’opposto di $u$, e quindi:

<div class="math-display">$$D(\,p \parallel q\,) \;=\; -\, \langle\, p \,,\, u \,\rangle$$</div>

Non resta che sottrarre la seconda espressione dalla prima:

<div class="math-display">$$G \;=\; -\langle p, u \rangle \;-\; D \;+\; \langle p^{\prime}, u \rangle \;=\; \langle\, p^{\prime} - p \,,\, u \,\rangle \;-\; D \;=\; \langle\, \Delta \,,\, u \,\rangle \;-\; D$$</div>

Sul nostro esempio: 4,38 meno 2,56 fa 1,83 bit di guadagno epistemico. Chi voglia controllare per la via lunga trova che la distanza dal mondo era 1,84 bit prima della lettura e 0,02 dopo, e la differenza è la stessa a meno degli arrotondamenti.

A parole, e questa è la frase che vorrei restasse: **il guadagno è quanto hai spinto nella direzione giusta, meno quanto ti è costato spingere.** Lo spostamento si paga sempre, comunque il lettore si muova, perché muovere qualcuno è un costo in sé; solo la componente allineata al mondo lo ripaga.

Una precisazione di rigore, che servirà se qualcuno obietta. $\Delta$ e $u$ vivono in due sistemi di coordinate diversi — miscele di probabilità l’uno, logaritmi l’altro — che in geometria dell’informazione sono irriducibili fra loro. L’accoppiamento fra i due è quello canonico, quindi l’operazione è pienamente legittima; ma la parola «proiezione», che userò per comodità, va intesa in quel senso e non in quello della geometria euclidea che abbiamo appreso alle scuole superiori. Non sto misurando l’ombra di una freccia su un’altra freccia.

### 2.5 Perché Siddharta era introvabile

Divido ora la spinta utile per il costo dello spostamento, e ottengo un numero che chiamo $\alpha$:

<div class="math-display">$$\alpha \;=\; \frac{\langle\, \Delta \,,\, u \,\rangle}{D} \qquad\text{da cui}\qquad G \;=\; D\,(\alpha - 1)$$</div>

La seconda scrittura si ottiene dalla prima con un passaggio solo: se la spinta utile vale $\alpha$ volte $D$, allora la spinta meno $D$ vale $D$ per $(\alpha - 1)$. Sul nostro esempio $\alpha$ vale 4,38 diviso 2,56, cioè 1,71: il testo ha spinto nella direzione giusta per una quantità pari a una volta e sette decimi il costo che ha fatto pagare.

E qui si scioglie la prima rottura. Il guadagno cambia segno esattamente in $\alpha = 1$, e mai altrove. In termini urbani: non è una «zona», ma un punto esatto. **La sindrome di Siddharta non è un caso raro per coincidenza: è la separatrice fra i due regimi.** Ha, come si dice, misura nulla. Vuol dire questo: se si estraessero testi a caso, la probabilità di beccarne uno esattamente sulla linea sarebbe del tutto analoga a zero, esattamente come la probabilità di piantare uno spillo a caso su un tavolo e centrare una riga tracciata a matita. E insieme è impossibile non attraversarla, passando dal fallimento al valore, come è impossibile andare da una parte all’altra del tavolo senza scavalcare la riga.

<style>
.fg{--fg-pos:#185FA5;--fg-neg:#A13D3D;--fg-och:#8B5E1F;
    --fg-posT:rgba(24,95,165,.075);--fg-negT:rgba(161,61,61,.075);
    --fg-ochT:rgba(139,94,31,.10);--fg-neuT:rgba(26,26,26,.045);
    --fg-line:rgba(26,26,26,.22)}
@media (prefers-color-scheme:dark){
  .fg{--fg-pos:#6BAED6;--fg-neg:#D98C8C;--fg-och:#C9A24A;
      --fg-posT:rgba(107,174,214,.11);--fg-negT:rgba(217,140,140,.11);
      --fg-ochT:rgba(201,162,74,.13);--fg-neuT:rgba(232,228,220,.055);
      --fg-line:rgba(232,228,220,.26)}
}
.fg svg{display:block;width:100%;height:auto;overflow:visible}
.fg-pair{display:flex;flex-wrap:wrap;gap:26px}
.fg-pair > div{flex:1 1 270px;min-width:0}
.fg text{font-family:var(--font-serif),Georgia,serif}
.fg .s{font-family:var(--font-sans),sans-serif}
.fg .t1{font-size:14px;fill:var(--color-text)}
.fg .t2{font-size:11px;font-style:italic;fill:var(--color-text-light)}
.fg .lb{font-size:13.5px;fill:var(--color-text)}
.fg .gl{font-size:10.5px;font-style:italic;fill:var(--color-text-light)}
.fg .ax{font-size:10.5px;fill:var(--color-text-light);letter-spacing:.04em}
.fg .sg{font-size:11px;letter-spacing:.02em}
.fg .pos{fill:var(--fg-pos)} .fg .neg{fill:var(--fg-neg)} .fg .och{fill:var(--fg-och)}
.fg .fpos{fill:var(--fg-posT)} .fg .fneg{fill:var(--fg-negT)}
.fg .foch{fill:var(--fg-ochT)} .fg .fneu{fill:var(--fg-neuT)}
.fg .rule{stroke:var(--fg-line);stroke-width:1;fill:none}
.fg .crit{stroke:var(--color-text);stroke-width:1.4;fill:none;opacity:.6}
.fg .zero{stroke:var(--fg-och);stroke-width:1.4;fill:none;stroke-dasharray:5 4}
.fg .lead{stroke:var(--color-text-light);stroke-width:.9;fill:none}
.fg .dot{fill:var(--color-primary)}
.fg .dotr{stroke:var(--color-bg);stroke-width:1.6;fill:var(--color-primary)}
</style>

<!-- ===================== FIGURA 1 ===================== -->
<div class="diagram-block fg">
<div class="diagram-title">Perché Siddharta era introvabile</div>
<div class="fg-pair">
<div>
<svg viewBox="0 0 340 296" role="img" aria-label="Come mi aspettavo fosse distribuita la sindrome di Siddharta: una casella su quattro nel piano spostamento-struttura.">
  <text class="t1" x="170" y="16" text-anchor="middle">Come me l'aspettavo</text>
  <text class="t2" x="170" y="33" text-anchor="middle">una casella su quattro, quindi frequente</text>
  <rect class="fneg" x="62" y="56"  width="118" height="76" rx="3"/>
  <rect class="fpos" x="192" y="56"  width="118" height="76" rx="3"/>
  <rect class="fneu" x="62" y="142" width="118" height="76" rx="3"/>
  <rect class="foch" x="192" y="142" width="118" height="76" rx="3"/>
  <rect x="192" y="142" width="118" height="76" rx="3" fill="none" stroke="var(--fg-neg)" stroke-width="1.6"/>
  <text class="lb" x="121" y="86"  text-anchor="middle">Organizza</text>
  <text class="lb" x="121" y="102" text-anchor="middle">senza muovere</text>
  <text class="gl" x="121" y="118" text-anchor="middle">conferma</text>
  <text class="lb" x="251" y="94"  text-anchor="middle">Valore</text>
  <text class="gl" x="251" y="112" text-anchor="middle">muove e organizza</text>
  <text class="lb" x="121" y="172" text-anchor="middle">Operatore</text>
  <text class="lb" x="121" y="188" text-anchor="middle">identità</text>
  <text class="gl" x="121" y="204" text-anchor="middle">nessun effetto</text>
  <text class="lb" x="251" y="180" text-anchor="middle">Muove senza</text>
  <text class="lb" x="251" y="196" text-anchor="middle">organizzare</text>
  <text class="gl" x="251" y="212" text-anchor="middle">provocazione</text>
  <path class="rule" d="M52 228 L320 228"/>
  <path class="rule" d="M52 228 L52 48"/>
  <text class="ax s" x="118" y="248" text-anchor="middle">spostamento  D  →</text>
  <text class="ax s" x="0" y="0" text-anchor="middle" transform="translate(38,138) rotate(-90)">struttura  ΔH  →</text>
  <text class="neg s" x="251" y="244" text-anchor="middle" font-size="12">↑</text>
  <text class="neg s" x="251" y="262" text-anchor="middle" font-size="10.5">qui credevo stesse Siddharta</text>
</svg>
</div>
<div>
<svg viewBox="0 0 340 296" role="img" aria-label="Come stanno le cose: alfa uguale a uno è una separatrice di misura nulla fra guadagno negativo e guadagno positivo.">
  <text class="t1" x="170" y="16" text-anchor="middle">Com'è</text>
  <text class="t2" x="170" y="33" text-anchor="middle">una separatrice, quindi introvabile per caso</text>
  <rect class="fneg" x="52" y="88"  width="134" height="130" rx="3"/>
  <rect class="fpos" x="186" y="88" width="134" height="130" rx="3"/>
  <text class="lb neg" x="119" y="142" text-anchor="middle" font-size="15">G &lt; 0</text>
  <text class="gl"     x="119" y="162" text-anchor="middle">il testo allontana</text>
  <text class="lb pos" x="253" y="142" text-anchor="middle" font-size="15">G &gt; 0</text>
  <text class="gl"     x="253" y="162" text-anchor="middle">il testo avvicina</text>
  <line x1="186" y1="82" x2="186" y2="224" stroke="var(--color-text)" stroke-width="3"/>
  <path class="lead" d="M232 60 C 210 62, 192 66, 187 80"/>
  <text class="sg s" x="238" y="52" fill="var(--color-text)">Siddharta:</text>
  <text class="sg s" x="238" y="66" fill="var(--color-text)">α = 1 esatto</text>
  <path class="rule" d="M52 228 L320 228"/>
  <text class="ax s" x="186" y="248" text-anchor="middle">α = 1</text>
  <text class="t2"   x="186" y="270" text-anchor="middle">una retta senza spessore: misura nulla</text>
  <text class="ax s" x="186" y="288" text-anchor="middle">α  =  spinta utile / costo</text>
</svg>
</div>
</div>
<p class="diagram-caption">A sinistra la tassonomia del saggio precedente, in cui la sindrome di Siddharta occupava un quadrante e avrebbe dovuto essere frequente. A destra ciò che il simulatore ha mostrato: il guadagno cambia segno in α = 1 e mai altrove, quindi Siddharta non è una zona ma una retta — impossibile da centrare per caso, e impossibile da non attraversare passando dal fallimento al valore.</p>
</div>

Il che spiega, per giunta, la fenomenologia che il saggio precedente descriveva a intuito. La sensazione soggettiva di aver finalmente capito è massima proprio dove il guadagno è nullo, perché in quel punto lo spostamento è alto — ci si è mossi tantissimo, e lo si sente — e il guadagno non lo è.

Come ho detto, resta un debito sul nome. Nel romanzo di Hesse, Siddharta arriva. La tesi del libro è precisamente che i movimenti laterali non erano laterali: l’ascesi, la ricchezza, la disperazione e il fiume sono le tappe necessarie di un percorso che converge verso una forma di illuminazione meno canonica, ma sostanzialmente equivalente a quella del Buddha. Senza gli anni da mercante, o da satrapo, il fiume al povero Siddharta non avrebbe detto nulla. Il nostro eroe eponimo è dunque un emblema sbagliato di $\alpha = 1$ sul percorso completo, perché a suo modo lui almeno ce la fa, ed è un ottimo emblema di $\alpha = 1$ misurato tappa per tappa: passare il guado non significante fra una significanza e un’altra di segno diverso.

La discrepanza è utile, perché isola una distinzione che il saggio precedente non aveva: **il guadagno per testo e il guadagno per traiettoria possono avere segni diversi**, ed è la stessa dipendenza dal tempo che dichiaravo fra i limiti nella stima di $q$. Tengo comunque il nome, così ci capiamo.

## 3. Seconda correzione: due numeri puri al posto di sei etichette

### 3.1 La rigidità, spiegata forse bene

Il saggio precedente ha già un’identità della stessa forma di quella appena dimostrata, e questa simmetria è ciò che permette il passo successivo. Riguarda la seconda grandezza, la struttura, che misura quanta indifferenza il testo abbia consumato: quanto il lettore sia uscito con le idee più chiare di come è entrato.

La struttura si scrive come differenza fra l’entropia prima e l’entropia dopo. L’entropia di Shannon, qui, va intesa nel senso termodinamico che ho già argomentato: è la misura del piattume, dell’equiprobabilità, dello stato in cui tutto è ugualmente possibile e quindi nulla è previsto. La condizione entropica di un sistema è letteralmente il peggior scenario di fine del mondo mai visto: un inferno termodinamico in cui non succede nulla ed è tutto uguale.

Un lettore che assegna un quarto a ciascuno dei quattro scenari ha entropia massima, che su quattro alternative vale due bit. Il nostro operatore, che assegna 0,85 alla stabilità, ha entropia 0,85 bit: ha già un pensiero formulato, per quanto banale. Dopo la lettura ha entropia 1,36 bit, perché la sua certezza si è redistribuita.

Fra spostamento e struttura si insinua una terza grandezza, che nel saggio precedente chiamo **rigidità** e indico con $\rho$. Formalmente è l’entropia incrociata $C(p^{\prime}, p)$ meno l’entropia di $p$ — dove l’entropia incrociata è il costo in bit di descrivere il mondo secondo $p^{\prime}$ usando il codice tarato su $p$. Sostanzialmente misura una cosa sola: **quanto il modello iniziale del lettore fosse mal tarato proprio sugli stati che il testo rende probabili**. Un lettore che sbaglia poco ha rigidità piccola; un lettore che aveva quasi escluso ciò che il testo dimostra ha rigidità grande.

Sul nostro operatore l’entropia incrociata vale 3,91 bit — costa carissimo descrivere un mondo di riassetto con un codice costruito per la stabilità — e sottraendo l’entropia iniziale di 0,85 si ottiene una rigidità di 3,07 bit. L’identità che lega le tre grandezze è:

<div class="math-display">$$\Delta H \;=\; D \;-\; \rho \qquad\text{cioè}\qquad -0{,}51 \;=\; 2{,}56 \;-\; 3{,}07$$</div>

**dove ciascun numero ha un nome.** Il 2,56 è lo spostamento: quanto le attese si sono mosse, e l’abbiamo calcolato riga per riga poco fa. Il 3,07 è la rigidità: quanto il modello di partenza del lettore fosse mal tarato proprio sugli stati che il testo rende probabili, ed è grande perché quest’uomo aveva quasi escluso il riassetto. Il −0,51 è ciò che resta, cioè la struttura: la parte dello spostamento che si converte in ordine invece che in disorientamento. Qui il resto è negativo perché la rigidità supera lo spostamento: il testo ha dovuto spendere più di quanto abbia mosso, e la differenza il lettore la paga in certezze perdute.

Il segno negativo dice che questo lettore esce meno organizzato di come era entrato, e conviene fermarsi un attimo su questo, perché è controintuitivo e sarà decisivo. Il testo lo ha convinto di qualcosa di vero, e insieme gli ha tolto una certezza che aveva: entra sicuro della stabilità ed esce ragionevolmente orientato sul riassetto, ma con una fiducia meno concentrata di quella di partenza. Ha imparato, e ha perso sicurezza. Le due cose accadono insieme.

### 3.2 La divisione

Adesso il punto tecnico, che è di una banalità disarmante e produce tutto il resto. Le due identità sono:

<div class="math-display">$$\Delta H \;=\; D - \rho \qquad\qquad G \;=\; \langle \Delta, u \rangle - D$$</div>

In entrambe compare $D$, e in entrambe compare da solo. E $D$ è sempre positivo, perché una divergenza non può essere negativa. Allora lo si può raccogliere, cioè dividere tutto per $D$, senza che nulla cambi di segno. Definisco un secondo rapporto accanto ad $\alpha$:

<div class="math-display">$$r \;=\; \frac{\rho}{D} \qquad\text{accanto a}\qquad \alpha \;=\; \frac{\langle \Delta, u \rangle}{D}$$</div>

e le due identità diventano, dopo aver raccolto:

<div class="math-display">$$\Delta H \;=\; D\,(1 - r) \qquad\qquad G \;=\; D\,(\alpha - 1)$$</div>

Il guadagno della divisione è che **lo spostamento esce dal giudizio e resta come pura intensità**. Il segno della struttura ora dipende soltanto da $r$ maggiore o minore di uno; il segno del guadagno soltanto da $\alpha$ maggiore o minore di uno. $D$ non decide più niente sul merito: diventa il volume dell’amplificatore, dice quanto forte e tace su quanto buono.

Sul nostro operatore: $r$ vale 3,07 diviso 2,56, cioè 1,20, che essendo maggiore di uno dà struttura negativa; $\alpha$ vale 1,71, che essendo maggiore di uno dà guadagno positivo. Due numeri, e il regime è deciso.

Sono numeri adimensionali, cioè privi di unità di misura: i bit si semplificano nella divisione, come i chilometri si semplificano in un rapporto fra distanze. È lo stesso mestiere del numero di Reynolds in fluidodinamica o del rapporto debito su PIL in economia, dove si divide una grandezza per la sua scala naturale proprio per poter confrontare oggetti di taglia diversa. *I fratelli Karamazov* e un editoriale di Repubblica hanno spostamenti incomparabili e $\alpha$ perfettamente comparabili, ed è precisamente questo che rende possibile il confronto fra i sei romanzi che farò più avanti.

L’unico prezzo è che con $D$ uguale a zero i due rapporti non sono definiti, perché dividere per zero non si può. Ma $D$ uguale a zero è l’operatore identità del saggio precedente, il testo lungo, elegante, documentato e privo di effetti sulle attese di chi lo legge, che giustamente non ha regime. Su questo buco tornerò, perché è più abitato di quanto sembri.

## 4. Il piano dei regimi

A questo punto il regime di un testo rispetto a un lettore è un punto su un piano: $\alpha$ in orizzontale, $r$ in verticale, con due rette critiche che si incrociano nel punto di coordinate uno e uno.

<!-- ===================== FIGURA 2 ===================== -->
<div class="diagram-block fg">
<div class="diagram-title">Il piano dei regimi</div>
<svg viewBox="0 0 620 462" role="img" aria-label="Il piano dei regimi: alfa in ascissa, r in ordinata. Quattro quadranti divisi dalle rette alfa uguale a uno e r uguale a uno, più la banda della conferma sotto r uguale a zero.">
  <rect class="fneg" x="70"    y="40"    width="188.5" height="273.1"/>
  <rect class="fpos" x="258.5" y="40"    width="301.5" height="273.1"/>
  <rect class="foch" x="70"    y="313.1" width="490"   height="86.9"/>
  <rect x="70" y="40" width="490" height="360" fill="none" stroke="var(--fg-line)" stroke-width="1"/>
  <line class="crit" x1="258.5" y1="40" x2="258.5" y2="400"/>
  <line class="crit" x1="70" y1="189" x2="560" y2="189"/>
  <line class="zero" x1="70" y1="313.1" x2="560" y2="313.1"/>
  <text class="ax s" x="258.5" y="32"  text-anchor="middle">α = 1</text>
  <text class="ax s" x="64"    y="193" text-anchor="end">r = 1</text>
  <text class="ax s och" x="64" y="317" text-anchor="end">r = 0</text>
  <text class="lb pos" x="409" y="80"  text-anchor="middle" font-size="16">Apertura</text>
  <text class="gl"     x="409" y="99"  text-anchor="middle">disorienta e avvicina</text>
  <text class="sg s pos" x="409" y="120" text-anchor="middle">ΔH &lt; 0 · G &gt; 0</text>
  <text class="lb neg" x="164" y="80"  text-anchor="middle" font-size="16">Provocazione</text>
  <text class="gl"     x="164" y="99"  text-anchor="middle">disorienta e allontana</text>
  <text class="sg s neg" x="164" y="120" text-anchor="middle">ΔH &lt; 0 · G &lt; 0</text>
  <text class="lb pos" x="409" y="216" text-anchor="middle" font-size="16">Valore</text>
  <text class="gl"     x="409" y="235" text-anchor="middle">organizza e avvicina</text>
  <text class="sg s pos" x="409" y="256" text-anchor="middle">ΔH &gt; 0 · G &gt; 0</text>
  <text class="lb neg" x="164" y="216" text-anchor="middle" font-size="16">Struttura falsa</text>
  <text class="gl"     x="164" y="235" text-anchor="middle">organizza e allontana</text>
  <text class="sg s neg" x="164" y="256" text-anchor="middle">ΔH &gt; 0 · G &lt; 0</text>
  <rect x="118" y="332" width="394" height="48" fill="var(--color-bg-alt)"/>
  <rect class="foch" x="118" y="332" width="394" height="48"/>
  <text class="lb och" x="315" y="352" text-anchor="middle" font-size="15">Conferma</text>
  <text class="gl"     x="315" y="371" text-anchor="middle">concentra su ciò che il lettore già credeva · qualsiasi α</text>
  <circle class="dotr" cx="392.3" cy="164.1" r="5"/>
  <text class="sg s" x="406" y="160" fill="var(--color-text)">l'operatore</text>
  <text class="ax s" x="406" y="176">α 1,71 · r 1,20</text>
  <circle class="dotr" cx="399.8" cy="313.1" r="5"/>
  <text class="sg s" x="386" y="291" text-anchor="end" fill="var(--color-text)">il lettore piatto</text>
  <text class="ax s" x="386" y="307" text-anchor="end">α 1,75 · r 0</text>
  <text class="ax s" x="70"    y="418" text-anchor="middle">0</text>
  <text class="ax s" x="258.5" y="418" text-anchor="middle">1</text>
  <text class="ax s" x="447"   y="418" text-anchor="middle">2</text>
  <text class="ax s" x="315"   y="440" text-anchor="middle">α  =  spinta utile / costo dello spostamento</text>
  <text class="ax s" x="0" y="0" text-anchor="middle" transform="translate(30,220) rotate(-90)">r  =  rigidità / spostamento</text>
</svg>
<p class="diagram-caption">Il piano dei regimi. Le due rette critiche in α = 1 e r = 1 dividono quattro quadranti; sotto r = 0 corre la banda della conferma, che li attraversa tutti. I due punti sono i lettori dell'esempio del mercato del libro: lo stesso identico testo, e due posizioni diverse — con α quasi identico.</p>
</div>

Le quattro caselle che ne risultano sostituiscono i sei rami condizionali che avevo dovuto scrivere nella prima versione del simulatore, e il tappabuchi si scopre essere un quadrante pieno.

| Posizione | Che cosa fa il testo | Nome |
|---|---|---|
| $\alpha > 1$ · $0 < r < 1$ | Organizza il lettore e lo avvicina al mondo | Valore |
| $\alpha < 1$ · $0 < r < 1$ | Organizza il lettore e lo allontana dal mondo | Struttura falsa |
| $\alpha < 1$ · $r > 1$ | Disorganizza e allontana | Provocazione |
| $\alpha > 1$ · $r > 1$ | Disorganizza e avvicina | **Apertura** |
| $r < 0$ · qualsiasi $\alpha$ | Concentra su ciò che il lettore già credeva | Conferma |

<p class="caption">Tabella 3. I regimi. Il quarto è il quadrante che il saggio precedente non aveva.</p>

Il quadrante in alto a destra è il guadagno vero di questa riscrittura, e la ragione per cui il saggio precedente va corretto e non soltanto arricchito. **Quel saggio dice che il valore richiede entrambe le grandezze positive.** Il quadrante in questione ha struttura negativa e guadagno positivo, ed è abitato: è il testo che avvicina al mondo lasciando il lettore con più alternative aperte di prima, perché il mondo ne ha più di quante lui ne credesse. Nella tassonomia precedente sarebbe stato classificato come fallimento. Lo chiamo **apertura**, e nel seguito lo chiamerò anche regime Karamazov, per la ragione che si vedrà.

La banda inferiore merita una riga a parte, perché la sua meccanica non è ovvia. Con $r$ negativo la rigidità è negativa, il che accade quando il testo concentra il lettore proprio su ciò che riteneva già più probabile: il codice iniziale era già ben tarato sugli stati che il testo rende probabili, e allora l’identità dice che la struttura eccede lo spostamento. È la forma esatta della conferma, che il saggio precedente descriveva a parole come caso limite e che qui diventa una regione delimitata. Vale la pena osservare che **un lettore piatto ha rigidità nulla per costruzione**, perché non ha nessuna taratura da sbagliare: la retta $r = 0$ è il luogo di chi non sa che pesci pigliare.

### 4.1 Un risultato che non mi aspettavo

Quello che segue viene dal simulatore, riguarda l’esempio di punta del saggio precedente, e credo sia la cosa più interessante di tutto il pezzo.

Ho preso lo stesso testo — le stesse $p^{\prime}$ e la stessa $q$ — e l’ho fatto leggere a due lettori diversi. Il primo è l’operatore del settore, con la sua certezza sulla stabilità. Il secondo è un lettore che del settore non sa nulla e assegna un quarto a ciascuno scenario. Ecco i due profili.

| | Operatore | Lettore piatto | Rapporto |
|---|---|---|---|
| Spostamento $D$ | 2,56 bit | 0,64 bit | 4 volte |
| Struttura $\Delta H$ | −0,51 bit | +0,64 bit | segno opposto |
| Rigidità $\rho$ | 3,07 bit | 0,00 bit | — |
| Guadagno $G$ | 1,83 bit | 0,48 bit | 3,8 volte |
| $r$ | 1,20 | 0,00 | — |
| $\alpha$ | **1,71** | **1,75** | quasi identico |

<p class="caption">Tabella 4. Lo stesso testo, due lettori. Tutto cambia tranne α.</p>

Le due grandezze su cui il saggio precedente costruiva tutto il giudizio cambiano completamente da un lettore all’altro, e la struttura cambia perfino di segno: lo stesso identico testo disorganizza il primo e organizza il secondo. Il rapporto $\alpha$ resta praticamente uguale, 1,71 contro 1,75.

La ragione intuitiva è che $\alpha$ misura una proprietà relativa. Il numeratore chiede dove il testo abbia spinto rispetto all’errore di quel lettore; il denominatore chiede quanto gli sia costato. Un lettore che parte più lontano dal vero ha più da guadagnare e paga di più, e i due effetti si compensano. Resta il rapporto fra la direzione della spinta e il suo costo, che è una proprietà del testo più che del lettore.

Non ho una dimostrazione che questo valga in generale, ovviamente. Diciamo che lo dichiaro come congettura verificabile invece che come teorema: due lettori su un dominio a quattro scenari non fanno una prova. Ma, se dovesse reggere, la conseguenza sarebbe pesante. Il saggio precedente sostiene che non esiste la quantità di informazione «di un testo» e che esiste soltanto la differenza che fa a qualcuno. **Resterebbe vero per l’intensità, e diventerebbe falso per la direzione**: la forza con cui un testo colpisce dipende da chi legge, la direzione in cui spinge molto meno. Il che restituirebbe una parte di quel realismo testuale che avevo abbandonato, e la restituirebbe nel punto in cui serve.

Il banco di misura in fondo alla pagina serve esattamente a questo, e chi voglia falsificarmi ha i cursori a disposizione: basta trovare due lettori per cui $\alpha$ diverga di molto sullo stesso testo.

## 5. Sei casi

Veniamo ora a una piccola serie di casistiche, tratte anche in questo caso dal mondo del libro. Prendiamo sei romanzi e li collochiamo sul piano. Non sono illustrazioni: ciascuno rompe una cosa diversa, e insieme coprono lo spettro delle manipolazioni che lo strumento permette. Li ordino per gravità del danno che fanno al modello. Si tratta chiaramente di idealtipi con un’etichetta attaccata sopra: qui non stiamo facendo critica testuale o letteraria.

### a) *Guerra e pace* di Lev Tolstoj

Quadrante del valore, con $\alpha$ alto e $r$ fra zero e uno. È l’unico dei sei con osservazione genuina: archivi, reduci interrogati, ricognizioni sui campi di battaglia. Contro un lettore del 1869 con un prior napoleonico-eroico, la tesi che la guerra sia contingente e non guidata dal genio individuale spinge nella direzione del mondo, e organizza. **Il caso serve però soprattutto per un’altra ragione**: i capitoli saggistici, quelli che tutti saltano — stranamente, quando l’ho letto io non me lo sono sognato nemmeno lontanamente — sono la traccia visibile del prior dell’autore che si muove mentre scrive. Potremmo quasi dire che Tolstoj non li ha messi lì per il lettore. Ci torno più avanti, perché indicano un termine che nell’equazione non c’è.

### b) *I fratelli Karamazov* di Fëdor Dostoevskij

Quadrante dell’apertura, e ci sta per progetto. La struttura polifonica produce $\Delta H$ negativo deliberatamente: si esce con più voci in gioco di quante se ne avessero entrando, e nessuna delle tre posizioni sul male, la fede e la colpa viene liquidata. Eppure ha valore, e chiunque lo abbia letto lo sa.

La riparazione che questo caso impone è forte e va accettata per intero. **L’obiettivo non è portare l’entropia del lettore al minimo, ma portarla verso l’entropia del mondo.** Se il mondo contiene un conflitto morale irriducibile, un testo che lascia certi è mal calibrato, e la certezza eccessiva diventa un difetto che il criterio della struttura positiva premia attivamente.

Vale la pena vedere che la cosa si misura anche sul nostro esempio banale, e non solo su Dostoevskij. L’entropia del mondo, cioè di $q$, vale 1,48 bit. L’entropia del lettore dopo la lettura vale 1,36. Il testo ha reso il lettore leggermente più sicuro di quanto il mondo autorizzi: ha lavorato bene, e ha superato di poco il bersaglio. Nessuna delle due grandezze del saggio precedente rileva questo scarto, mentre il guadagno epistemico lo rileva, perché la divergenza di Kullback-Leibler punisce la sovraconfidenza in modo asimmetrico.

La modifica consiste dunque nel togliere alla struttura lo statuto di co-requisito che il saggio precedente le assegna in un punto e le toglie a metà in un altro. L’articolo precedente era già incoerente su questo, e la correzione lo rende più sensato.

### c) *Il nome della rosa* di Umberto Eco

Occupa due posizioni con lo stesso identico testo, e il testimone non è ricusabile, visto che Eco è l’autore che ha teorizzato il lettore come variabile ed è già nella bibliografia del saggio precedente. Per chi non conosce la filosofia scolastica il romanzo sta nel quadrante del valore, perché insegna un Medioevo reale, per quanto intellettualizzato, sotto la forma del poliziesco; per il medievista lo spostamento è prossimo a zero e il punto scivola verso l’origine, dove il regime non è definito — anche se la svolta pop non esclude a rigore un cambio di prospettiva. La lettura a due livelli era dichiarata dall’autore prima che qualunque teoria la formalizzasse, e la doppia posizione è progettata appositamente per questo. Altri romanzi di Eco potrebbero avere posizioni molto diverse: *Il pendolo di Foucault* e *L’isola del giorno prima*, per esempio, sono molto meno postmoderni nell’accezione letteraria del termine, e la doppia posizione si presta meno.

### d) *Resurrezione*, sempre di Lev Tolstoj

È il caso di $\Lambda$, il fattore di propagazione dell’errore. Romanzo a tesi su istituzioni reali, con struttura alta, e con un $\alpha$ che dipende interamente da chi fornisce $q$: positivo per chi accetta il mondo di Tolstoj, negativo per il Sinodo della Chiesa ortodossa, che ne aveva un altro. Il punto attraversa la retta $\alpha = 1$ a seconda dell’arbitro, ed è l’unico dei sei per cui questo accada.

E il testo ha vinto, il che significa che ha occupato la posizione da cui l’errore, se di errore si tratta, si propaga: la scomunica è la risposta del campo a un testo che occupa quella posizione. Il fattore asimmetrico maggiore dell’unità smette qui di essere un postulato comodo e diventa la descrizione di un fatto storico.

### e) *Finnegans Wake* di James Joyce

È il caso che dimostra un errore formale, e non un raffinamento. Nell’equazione finale il coefficiente $\eta$ — l’efficienza con cui il contenuto arriva a destinazione — sta fuori dall’integrale sui riceventi, come se fosse una proprietà del testo e degli strumenti. Per il lettore ordinario $\eta$ è prossimo a zero, il guadagno consegnato è prossimo a zero, e con esso lo spostamento: il punto non esiste sul piano, sta nel buco dell’origine. Per il lettore specialista $\eta$ è tutt’altro che piccolo, e il libro si colloca in alto a destra. Potrebbe essere un caso di performance artistica progettata per essere non significante e proprio per questo molto significante: citofonare Carmelo Bene.

**Il coefficiente va dentro l’integrale e dipende anche dal ricevente.** La conseguenza non è banale, e vale la pena scriverla per esteso: la stessa prosa assistita alza $\eta$ per certi lettori e lo abbassa per altri — un testo levigato arriva meglio a chi non è del mestiere e peggio a chi riconosce la levigatura. Il che rende la domanda su chi abbia scritto il testo ancora meno sensata di quanto sostenessi prima: la forma vince sull’intenzione dell’autore; o, se si vuole, è lo strumento attraverso cui questa si dispiega.

### f) *Fourth Wing* di Rebecca Yarros

Sta nella banda della conferma, con $r$ negativo, perché consegna al lettore esattamente le attese di genere con cui è entrato, e sul piano occupa una posizione poco informativa. Il che è precisamente il punto: quello che il libro fa non sta sul piano.

Contrae la varianza fra i produttori — il romantasy è facilmente decostruibile e riproducibile, ed è per questo che funziona su scala industriale — e insieme allarga il supporto della misura sui riceventi, costruendo lettori che prima non c’erano e che poi leggeranno altro. **Due segni opposti tenuti sotto un solo coefficiente $\kappa$.** Vanno separati, perché la varianza fra gli autori e la popolazione dei riceventi sono grandezze distinte, e la seconda è endogena, cosa che il saggio precedente assume fissa scrivendo la misura senza indice temporale. È anche il caso in cui il mio mestiere entra nel testo senza aneddoto.

## 6. Le caselle vuote

Un piano si giudica anche da dove i casi non cadono, e con questi sei restano vuote quattro regioni. Tre sono informative, e la quarta mi obbliga a una concessione.

**Il quadrante della provocazione è clamorosamente vuoto.** Nessuno dei sei romanzi disorganizza allontanando, e il modello prevede che quella sia la regione più popolata della produzione complessiva di testi. La spiegazione sta nel campione, e va detta perché indebolisce la prova: ho scelto sei opere canoniche, e la canonizzazione è essa stessa un filtro. Un canone seleziona su $\alpha$ e tollera qualunque valore di $D$ — *I fratelli Karamazov* e *Il nome della rosa* hanno intensità incomparabili e stanno entrambi dentro. Sei casi canonici testano dunque il modello in modo asimmetrico, e per popolare la metà sinistra del piano servono testi che nessuno ha canonizzato.

**Il quadrante della struttura falsa è vuoto in senso assoluto e pieno in senso relativo.** *Resurrezione* ci sta, per il Sinodo. Ed è la regione che conta di più nel dibattito da cui questa intera costruzione è partita, perché un testo con $\eta$ alto e un tasso d’errore non verificato cade esattamente lì: la prosa eccellente organizza il lettore attorno a configurazioni lontane dal mondo, e organizza tanto meglio quanto migliore è la forma. Che nessun romanzo canonico ci cada, e che il corpus di cui ci preoccupiamo ne sia pieno, è la ragione per cui la letteratura è un banco di prova generoso e la saggistica corrente un banco di prova severo.

L’altra considerazione, ovviamente, è che l’attribuzione degli esempi è mia ed è puramente arbitraria. La sua funzione è ostensiva: in questo senso potrei tranquillamente attribuire a un romanzo il ruolo necessario in commedia, ma sarebbe poco utile — e soprattutto sarebbe una forma di accanimento su un’opera, a partire da un giudizio personale. Potrebbe essere *Viaggio al termine della notte* di Céline, e tutto il côté della letteratura «maledetta»: ma in quanto letteratura risulterebbe comunque canonizzata.

**La banda della conferma verso il vero è strutturalmente vuota per la narrativa.** Un testo con $r$ negativo e $\alpha$ maggiore di uno concentra il lettore su ciò che già riteneva probabile, e lo fa nella direzione giusta: è il manuale ben fatto, il buon libro di testo, la traduzione riuscita di un’opera che il lettore non poteva leggere. Nessuno dei sei ci sta, e quasi tutta la produzione editoriale ci sta. Rientra in questo ambito tutta la produzione cosiddetta «consolatoria», o che conferma il genere. Può essere anche di un certo successo; sulla longevità si può disputare, ma i meccanismi di selezione culturale non sono per nulla lineari, così come non lo è la definizione di qualità letteraria.

**L’origine è un buco, e il buco è abitato.** Con spostamento nullo i due rapporti non esistono, e lì cadono *Finnegans Wake* per il lettore ordinario, una traduzione per chi ha già letto l’originale, e qualunque testo lungo e ben scritto che non muova le attese di nessuno. Il piano ha una singolarità nel punto in cui il dibattito sull’autenticità passa gran parte del suo tempo. Non so ripararla, e lo dico chiaro. Magari un’altra volta, con Carmelo Bene o una riflessione sulle avanguardie.

## 7. Terza correzione: il campo si assesta, e non collassa

La terza rottura è quella che nel simulatore avevo trovato più fastidiosa, e si è rivelata la più utile. Il pannello ecologico contrae la varianza fra i prior degli autori anche portando $\Sigma$ a zero: basta alzare la permeabilità, cioè quanto gli autori si aggiornano leggendosi fra loro.

Scrivo la dinamica nella forma più semplice che la riproduca, e la spiego termine per termine. A ogni passo la varianza fra i prior cambia per due ragioni opposte. Da un lato si contrae, perché ciascuno legge gli altri e si sposta verso la media: la contrazione è proporzionale alla varianza presente, dato che più il campo è vario più ogni lettura ne consuma, e chiamo $\lambda$ il coefficiente di quella proporzionalità. Dall’altro si espande, perché entra osservazione nuova dal mondo, e quella entra soltanto attraverso la quota di produzione che non è campionata dalla media del corpus, cioè attraverso $(1 - \Sigma)$. Chiamo $\omega$ l’intensità dell’osservazione. In formule:

<div class="math-display">$$\Delta \mathrm{Var} \;=\; -\,\lambda \cdot \mathrm{Var}[\mathcal{P}] \;+\; (1 - \Sigma)\,\omega^2$$</div>

Una dinamica di questa forma ha un punto fisso, cioè un valore della varianza in corrispondenza del quale i due effetti si compensano esattamente e il sistema smette di muoversi. Lo si trova ponendo l’incremento uguale a zero e risolvendo:

<div class="math-display">$$0 \;=\; -\,\lambda \cdot \mathrm{Var}^{*} \;+\; (1 - \Sigma)\,\omega^2 \qquad\Longrightarrow\qquad \mathrm{Var}^{*} \;=\; \frac{(1 - \Sigma)\,\omega^2}{\lambda}$$</div>

Il campo non converge a zero: **si assesta su una diversità di equilibrio**, che dipende da quanta osservazione entra e da quanto in fretta la lettura reciproca la consuma. E $\Sigma$ vi compare come coefficiente moltiplicativo del numeratore, cioè nella stessa posizione in cui compare nelle altre due occorrenze.

Questo rinforza la tesi centrale in un punto in cui il testo precedente era più debole di quanto avessi visto. Là la terza occorrenza di $\Sigma$ sembrava l’unica in cui lo strumento agisse da termine autonomo, e per giunta sulla scala di popolazione, dove nessun autore singolo può compensarlo. Non lo è. **Σ non è mai causa: è ovunque coefficiente.** Il campionamento modale su larga scala toglie l’antidoto invece di introdurre il veleno, e questo lascia intatto l’allarme quantitativo correggendone la meccanica.

Metto qualche numero, perché la formula da sola non dice quanto pesino le due leve. Con la permeabilità a 0,09 e l’osservazione a 0,11 — i valori di partenza del pannello — un campo che parte da varianza uno si assesta a 0,13 con $\Sigma$ uguale a zero, e a 0,09 con $\Sigma$ a 0,35. Portare $\Sigma$ da 0,35 a zero moltiplica la diversità di equilibrio per un fattore uno e mezzo. Dimezzare la permeabilità la moltiplica per due.

Ne segue una contromisura operativa che il saggio precedente non aveva. Un autore singolo non può abbassare $\Sigma$ nel campo, perché $\Sigma$ è una proprietà del campo e non sua, e può fare due cose: **alzare $\omega$, cioè immettere osservazione, oppure abbassare $\lambda$**. Leggere meno il proprio campo e più lontano da esso è, formalmente, protezione di varianza — ed è la leva più forte delle due. È anche ciò che gli autori interessanti hanno sempre fatto senza avere una notazione per dirlo, ed è l’unica raccomandazione pratica che questa costruzione produca.

## 8. Tre modifiche dichiarate e non sviluppate

Le prime due vengono dai casi e sono di riparazione: le scrivo nell’equazione riscritta senza svilupparne le conseguenze. La terza è di ampliamento, ed è la più discutibile.

**Il coefficiente entra nell’integrale.** Per *Finnegans Wake*, e per chiunque abbia visto lo stesso testo funzionare con un pubblico e disperdersi con un altro. Nell’equazione riscritta $\eta$ dipende da $\Sigma$, dalla competenza formale e dal ricevente, e sta sotto il segno d’integrale. Il costo è che l’efficienza di trasmissione smette di essere stimabile guardando il testo, e l’operazionalizzazione perde uno stimatore.

**La misura sui riceventi è endogena.** Per *Fourth Wing*. Il pubblico di un campo cambia mentre il campo produce, e certi testi lo costruiscono. Nell’equazione riscritta la misura porta un indice temporale, e il termine ecologico andrebbe sdoppiato in un costo sulla varianza degli autori e in un effetto, di segno qualunque, sull’ampiezza del pubblico. Il costo è che i due effetti non sono commensurabili e che sommarli richiede un coefficiente di conversione che non ho.

**Il guadagno dell’autore.** Per *Guerra e pace*, e per il modo in cui è stato scritto questo articolo. L’equazione misura la differenza che un testo fa a un pubblico, e tace sulla differenza che fa a chi lo scrive. La nota temporale del saggio precedente — le posizioni che delegano la fase in cui l’autore impara producono lo stesso testo oggi e un autore diverso domani — è la formulazione a parole di un termine che nell’equazione non ha casa. Lo chiamo $G(A)$, il guadagno epistemico che il processo di scrittura produce sul prior dell’autore, e si scrive esattamente come l’altro, con $p$ e $p^{\prime}$ riferiti a lui invece che al lettore.

Tengo $G(A)$ fuori da $V$, e la ragione è che i due misurano il guadagno di destinatari diversi, e sommarli richiederebbe un tasso di cambio arbitrario fra ciò che vale per il pubblico e ciò che vale per chi scrive. Ma ne dichiaro tre proprietà. **È il solo termine che la delega azzera davvero**, perché un testo generato e poi verificato ha lo stesso $\varepsilon$ di un testo scritto a mano, e lascia l’autore dov’era. È il termine di cui il saggio precedente parlava senza nominarlo, quando concludeva che lo strumento diventa distruttivo nel punto in cui gli si delega la selezione: delegare la selezione azzera insieme il termine additivo maggiore e il guadagno dell’autore, e le due cose sono la stessa operazione vista da due lati. E la sua stima è la più semplice di tutte, perché l’autore è l’unico ricevente di cui si conosca il prior dall’interno.

Chiudo con la dichiarazione che questa costruzione impone a se stessa, e che nella mia notazione è dovuta. Ho costruito il simulatore in dialogo con un modello, e il simulatore ha rotto la teoria in tre punti che nessuna rilettura del testo mi aveva mostrato. Nella griglia del saggio precedente è un caso di apparato formale assistito, il codice che pesa di più perché è il solo capace di spostare un termine additivo. Nella notazione di questo articolo è un valore alto di $G(A)$ ottenuto con $\Sigma$ alto, che è precisamente la combinazione che il dibattito corrente considera impossibile.

## 9. L’equazione riscritta

Metto insieme le tre correzioni e le due riparazioni. Il valore di un testo per un pubblico al tempo $t$:

<div class="math-display">$$V(T;\mu) \;=\; \int \eta(\Sigma, F, R)\,\bigl[\, G_{\text{oss}} + G_{\text{sel}} + G_{\text{ric}} \,\bigr]\, d\mu_t(R) \;-\; \Lambda \cdot \varepsilon(\Sigma, \nu) \;-\; \kappa \cdot \Delta\mathrm{Var}[\mathcal{P}]$$</div>

con la dinamica ecologica esplicitata invece che postulata:

<div class="math-display">$$\Delta\mathrm{Var}[\mathcal{P}] \;=\; -\,\lambda \cdot \mathrm{Var}[\mathcal{P}] \;+\; (1 - \Sigma)\,\omega^2$$</div>

e, separato perché ha un altro destinatario, il guadagno dell’autore:

<div class="math-display">$$G(A) \;=\; D(\,p_A \parallel q\,) \;-\; D(\,p^{\prime}_A \parallel q\,)$$</div>

Il regime di un testo rispetto a un ricevente si legge su due numeri puri, $\alpha$ e $r$, con l’intensità $D$ tenuta a parte.

E la tesi del saggio precedente sopravvive intatta a tutte e cinque le modifiche. Lo stack di strumenti compare dentro $\eta$, dove satura; dentro $\varepsilon$, dove la verifica lo azzera; e come coefficiente del termine di immissione nella dinamica ecologica, dove riduce l’antidoto invece di introdurre il veleno. In nessun termine additivo di contenuto.

Aggiungo la conseguenza che le correzioni producono e che prima non potevo scrivere. **Ciò che va sorvegliato non è la quantità di intervento, ma la sua direzione.** Il codice della griglia dichiarativa misura quanta superficie del testo sia passata dal modello, e la superficie agisce su $\alpha$ per nulla: due testi con codici agli antipodi possono avere lo stesso $\alpha$. La selezione, che nessun codice registra, agisce su $\alpha$ interamente. Un sistema di dichiarazione onesto dichiara ciò che si può verificare, e ciò che si può verificare è il termine che pesa meno: era già la difesa della [mia notazione](/colophon/#notazione), e adesso ha una forma quantitativa.

## 10. Limiti aggiornati

I quattro limiti dichiarati nel saggio precedente restano tutti: i prior dei riceventi non sono distribuzioni in senso proprio, e il dominio è definibile con rigore solo su questioni circoscritte; la distribuzione di riferimento non è accessibile e va surrogata; i coefficienti di propagazione e di peso ecologico sono postulati e non derivati; la griglia dichiarativa tace sulla selezione. A questi ne aggiungo tre.

**Il piano ha una singolarità nell’origine**, e l’origine è abitata da una classe di testi che il dibattito discute molto. Un formalismo che non dice nulla proprio dove si concentra la discussione è, sotto quel profilo, inservibile.

**La congettura sulla stabilità di $\alpha$ fra riceventi diversi poggia su un esempio a quattro scenari e due lettori.** Va falsificata o confermata su un campione vero, e finché non lo è, la tesi precedente sulla relatività al ricevente resta in vigore così com’è.

**Le forme funzionali che il simulatore adotta per $\eta$ e per $\varepsilon$ sono state scelte per far girare il modello** e non compaiono in nessuna delle due versioni della teoria. Cambiarle cambia i numeri e lascia i segni dove sono, ma chiunque le usi per stimare qualcosa sta usando le mie scelte implementative e non la mia teoria.

## 11. Lo strumento, e due modi per falsificarmi

Il banco di misura è qui sotto, e funziona anche da telefono. Tre pannelli: le grandezze in bit sul dominio a quattro scenari, con i sei romanzi come posizioni precaricate e il piano dei regimi che si aggiorna mentre si trascinano i cursori; l’equazione completa con i cursori su ogni variabile e i codici della griglia come preset; la dinamica di popolazione con il punto fisso tracciato. Se preferite tenerlo aperto a parte, sta anche [alla sua pagina](/visualizations/banco-di-misura/).

<div class="diagram-block">
<div class="diagram-title">Il banco di misura</div>
<iframe id="banco-di-misura" src="/visualizations/banco-di-misura/" title="Banco di misura — l'equazione del valore di un testo" style="width:100%;height:1500px;border:none;display:block" loading="lazy"></iframe>
<p class="diagram-caption">Tre pannelli con statuti epistemici diversi: il primo calcola bit veri, il secondo esplora forme funzionali che il saggio non fissa, il terzo simula una popolazione. Nessun dato esce dalla pagina.</p>
</div>

<script>
(function () {
  var f = document.getElementById('banco-di-misura');
  if (!f) return;
  window.addEventListener('message', function (e) {
    if (!f.contentWindow || e.source !== f.contentWindow) return;
    var d = e.data;
    if (d && d.type === 'bdm-height' && typeof d.height === 'number' && d.height > 240 && d.height < 20000) {
      f.style.height = Math.ceil(d.height) + 'px';
    }
  });
})();
</script>

Chi voglia contestare questa costruzione ha due modi rapidi per farlo. Il primo: trovare una configurazione in cui il quadrante dell’apertura sia manifestamente privo di valore, e allora cade il risultato principale di questo pezzo. Il secondo: trovare due lettori con prior molto diversi per cui $\alpha$ diverga di molto sullo stesso testo, e allora cade la congettura e con essa buona parte dell’interesse della riscrittura.

Nel saggio precedente scrivevo che una teoria che non si lascia falsificare non serve a niente. I cursori sono l’unica forma di quella frase che io sappia produrre.

---

## Bibliografia

AMARI, Shun-ichi, [*Information Geometry and Its Applications*](https://openlibrary.org/books/OL28159480M/Information_Geometry_and_Its_Applications), Tokyo, Springer, 2016.

COVER, Thomas M., e Joy A. Thomas, [*Elements of Information Theory*](https://openlibrary.org/books/OL24250281M/Elements_of_Information_Theory), 2ª ed., Hoboken, Wiley-Interscience, 2006.

ECO, Umberto, [*Lector in fabula. La cooperazione interpretativa nei testi narrativi*](https://openlibrary.org/works/OL8996442W/Lector_In_Fabula), Milano, Bompiani, 1979.

HESSE, Hermann, [*Siddhartha*](https://openlibrary.org/books/OL6666707M/Siddhartha), Berlino, S. Fischer, 1922 (trad. it. *Siddharta*, Milano, Adelphi, 1975).

KAHNEMAN, Daniel, [*Thinking, Fast and Slow*](https://openlibrary.org/books/OL28227306M/Thinking_Fast_and_Slow), New York, Farrar, Straus and Giroux, 2011 (trad. it. *Pensieri lenti e veloci*, Milano, Mondadori, 2012).

KULLBACK, Solomon, e Richard A. Leibler, ["On Information and Sufficiency"](https://doi.org/10.1214/aoms/1177729694), *The Annals of Mathematical Statistics*, vol. 22, n. 1, 1951, pp. 79-86.

POPPER, Karl R., [*The Logic of Scientific Discovery*](https://openlibrary.org/books/OL23778452M/The_logic_of_scientific_discovery), Londra, Hutchinson, 1959 (ed. or. *Logik der Forschung*, Vienna, Springer, 1934; trad. it. *Logica della scoperta scientifica*, Torino, Einaudi, 1970).

SHANNON, Claude E., ["A Mathematical Theory of Communication"](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x), *The Bell System Technical Journal*, vol. 27, 1948, pp. 379-423 e 623-656.
