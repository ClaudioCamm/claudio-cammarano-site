---
layout: layouts/catena.njk
title: "Dove passa il confine"
date: 2026-11-12T10:35:00Z
description: "Descola e Latour, i canti omerici, il faro delle storie generate, Sellars e lo spazio delle ragioni, una dimostrazione che nessuno ha capito, la scala di Gödel, la giuria di Lilburne: dieci schede su che cosa diventa un modello linguistico a seconda di chi lo guarda."
tesi: "La domanda su che cosa sia un modello linguistico non ha una risposta di natura: ogni cultura traccia a modo suo il confine fra persone e cose, e i moderni lo tracciano in un modo quando ne parlano e in un altro quando lo praticano. Classificare un modello rivela l'ontologia di chi lo classifica, e il confine, di fatto, si decide nelle pratiche, l'allineamento, la verifica, le istituzioni in cui si sta da pari, più che nelle definizioni."
category: ["AI", "Filosofia"]
series: "L’attante zero, IV"
serie_totale_prevista: 4
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["LLM come attante zero", "grande partage", "tecnologia culturale", "mito del dato", "uguaglianza"]
fonti:
  - 2026-10-31-descola-ia-animalita-grandcontinent
  - 2026-11-11-denis-descola-latour-grand-partage-grandcontinent
  - 2026-10-28-farrell-shalizi-canti-omerici-economist
  - 2026-05-26-hamilton-mimno-elias-faro-storie-llm-arxiv
  - 2026-10-12-wolchover-attention-intelligenza-quanta
  - 2021-03-17-sheff-sellars-mito-del-dato-psyche
  - 2026-11-08-aaronson-congettura-dimostrata-ai-shtetl
  - 2026-10-15-gheorghiu-ladder-of-knowledge-aeon
  - 2017-03-15-koopman-power-thinker-foucault-aeon
  - 2026-11-09-bejan-uguaglianza-aeon
controtesi: 2026-10-31-descola-ia-animalita-grandcontinent
---

Le prime tre parti di questa serie hanno posto la stessa domanda a oggetti diversi: quanti agenti ci sono davvero quando una macchina agisce. La prima ha mostrato che l'allineamento dei modelli codifica un'etica occidentale presentata come universale; la seconda ha messo a confronto l'altruismo efficace, che nella stanza vede due agenti, con l'attante zero, che ne vede uno; la terza si è chiesta se prima di cercare qualcuno in casa non convenga chiedersi se la domanda sia ben posta. Questa quarta parte fa un passo indietro e si chiede da dove venga la domanda stessa. Philippe Descola, in un saggio su *Le Grand Continent*, scrive che per un antropologo non esiste un'umanità universale: ogni collettivo la definisce in base a ciò che lo separa dagli altri esseri.{% rif "2026-10-31-descola-ia-animalita-grandcontinent" %} Se è così, chiedere che cosa sia un modello linguistico significa chiedere dove una cultura mette il proprio confine, e le dieci schede che seguono mostrano che quel confine si traccia più nelle pratiche che nelle definizioni.

## Il confine come ontologia

Descola parte da una fotografia di Andres Serrano, la testa di un vitello che fissa lo spettatore, per mostrare come lo sguardo moderno, che chiama naturalista, attribuisca agli animali un'interiorità di tipo umano annullandone l'estraneità. In Amazzonia, nel regime animista, l'interiorità degli animali si manifesta nel sogno, dove si presentano come persone e parlano la lingua degli umani; nei mondi analogisti, dalla grande catena dell'essere a Montaigne, umani e animali si distinguono solo per gradi. All'intelligenza artificiale, dichiarando che non è il suo campo, dedica il passaggio finale: per il naturalismo è il compimento, la verifica sperimentale che la mente umana obbedisce alle stesse leggi della materia, e dopo di essa la nostra eccezionalità consiste soltanto nell'aver saputo costruire macchine che ci imitano.

Valentin Denis, intervistato su *Le Grand Continent* a proposito del suo libro sulla controversia fra Descola e Latour, mostra che quella frase contiene una scelta.{% rif "2026-11-11-denis-descola-latour-grand-partage-grandcontinent" %} I due antropologi concordano sul fatto che la separazione fra natura e società, il «grande partage», sia la matrice della modernità occidentale. Discordano sulla sua effettività. Per Descola il naturalismo è l'ontologia dei moderni; per Latour è ciò che i moderni dicono di sé, mentre nelle loro pratiche restano analogisti, più ibridi di chiunque altro, e per capirli bisogna studiarli come un'altra tribù, a partire dal laboratorio, misurando la distanza fra ciò che fanno e ciò che dicono di fare.

{% scheda "2026-11-11-denis-descola-latour-grand-partage-grandcontinent" %}

Applicata ai modelli linguistici, la controversia descrive con precisione il nostro imbarazzo. Quando ne parliamo siamo naturalisti, e chiediamo se dentro ci sia coscienza, comprensione, intenzione; quando li usiamo li trattiamo come interlocutori, colleghi, revisori, e diciamo «gli ho chiesto» e «mi ha risposto». La domanda teorica e la pratica quotidiana tracciano due confini diversi, ed è la seconda, se Latour ha ragione, a dire che cosa crediamo davvero.

## Né pappagallo né dio

Henry Farrell e Cosma Shalizi, sull'*Economist*, rifiutano le due letture opposte, il «pappagallo stocastico» degli scettici e il «dio macchina» degli entusiasti, e ne propongono una terza con due libri di più di sessant'anni fa.{% rif "2026-10-28-farrell-shalizi-canti-omerici-economist" %} Jacques Barzun distingueva l'intelletto, il sapere fissato nella scrittura e ordinato in biblioteche, dall'intelligenza viva che lo produce; Albert Lord, con Milman Parry, mostrava che i bardi jugoslavi non ricordavano a memoria i loro poemi ma li ricomponevano a ogni esecuzione con formule e temi ricorrenti, come era avvenuto per l'*Iliade*. Un modello linguistico, scrivono, comprime l'intera casa dell'intelletto in schemi statistici e la ricompone al volo: un canto omerico tecnologico, che negli agenti non si limita a raccontare ma agisce.

{% scheda "2026-10-28-farrell-shalizi-canti-omerici-economist" %}

È una classificazione culturale, invece che naturale, e ha una conseguenza che gli autori mettono in chiusura: i miti che scriviamo oggi sugli agenti diventeranno il materiale da cui gli agenti di domani impareranno chi essere. Sil Hamilton e David Mimno, in un preprint di Cornell, mostrano che quella ricomposizione passa per un collo di bottiglia molto stretto.{% rif "2026-05-26-hamilton-mimno-elias-faro-storie-llm-arxiv" %} Chiesto a quattro modelli di «scrivere una storia» ventimila volte, nell'88 per cento dei testi compare almeno una di undici parole, Elias, Mara, Elara, il guardiano, l'orologiaio, e più di metà delle storie ha un faro; Elias è circa novecento volte più frequente che nei romanzi pubblicati. L'omologazione non viene dalla quantità dei dati: viene dal peso che l'allineamento dà a pochi esempi preferiti. La casa dell'intelletto, insomma, viene ricomposta secondo una scelta fatta a valle da poche persone, ed è lì, in una pratica di selezione, che si decide che cosa il canto racconta.

Natalie Wolchover, su *Quanta*, aggiunge il rovescio storico di ogni classificazione.{% rif "2026-10-12-wolchover-attention-intelligenza-quanta" %} Ogni epoca descrive la mente con la tecnologia che ha in mano, la tavoletta, il libro, il computer, e l'attenzione dei transformer è l'ultima di queste metafore. Il confine fra la macchina e la mente si sposta insieme alla metafora: quando la mente è un calcolatore, il calcolatore sembra una mente.

## Lo spazio delle ragioni

Nate Sheff, su *Psyche*, spiega senza gergo il «mito del dato» di Wilfrid Sellars.{% rif "2021-03-17-sheff-sellars-mito-del-dato-psyche" %} Gli anelli di un tronco ci informano sull'età dell'albero, ma non affermano nulla e non possono sbagliare; un enunciato invece può essere vero o falso. Le sensazioni stanno nell'ordine causale, il sapere sta nello «spazio delle ragioni», e il passaggio dall'uno all'altro richiede l'apprendimento di regole che nessuna esperienza fornisce da sola. Il neonato che sente l'odore della madre non sa ancora che è sua madre, così come la cenere che per caso disegna un finale di scacchi non è una partita.

{% scheda "2021-03-17-sheff-sellars-mito-del-dato-psyche" %}

La distinzione di Sellars sposta la domanda su un modello linguistico dal suo interno al suo posto. Un testo generato è un evento causale finché qualcuno non lo fa entrare nello spazio delle ragioni, e l'ingresso avviene attraverso una pratica. Scott Aaronson ne dà un esempio esatto.{% rif "2026-11-08-aaronson-congettura-dimostrata-ai-shtetl" %} Una congettura che aveva formulato nel 2009 con Andris Ambainis è stata dimostrata da una startup con un sistema di ricerca costruito attorno a un modello interno di Claude, e Aaronson ammette di non aver ancora capito la prova. La crede giusta per due ragioni: c'è un certificato in Lean, il linguaggio di verifica formale, e altri esperti l'hanno già ricostruita. La dimostrazione è entrata nel sapere della matematica attraverso una pratica, la verifica formale e la ricostruzione fra pari, senza passare per la comprensione dell'autore della congettura.

{% scheda "2026-11-08-aaronson-congettura-dimostrata-ai-shtetl" %}

Alexander Gheorghiu, logico all'University College London, dà a questo passaggio una forma generale.{% rif "2026-10-15-gheorghiu-ladder-of-knowledge-aeon" %} Rilegge i teoremi di incompletezza di Gödel, che la lettura corrente prende come un tetto, e propone un'altra immagine: la verità è una scala che arriva esattamente fin dove l'abbiamo costruita, e ogni estensione fedele di un sistema ne aggiunge un piolo. La sua scheda, in archivio, pone la domanda che il saggio non fa: se i pioli li costruisce una macchina e nessuno ci sale, di chi è quella verità? Il caso di Aaronson offre una risposta provvisoria, cioè di chi controlla i pioli.

## Le pratiche che fanno i pari

Restano due schede che non parlano di macchine, e per questo servono. Colin Koopman, su *Aeon*, difende di Foucault il rifiuto di trattare il potere come un'essenza unitaria: accanto alla sovranità ci sono la disciplina e il biopotere, e il potere cambia forma in risposta alle resistenze, sicché definirlo in anticipo vorrebbe dire limitare in anticipo la libertà.{% rif "2017-03-15-koopman-power-thinker-foucault-aeon" %} Il saggio lascia aperta l'obiezione classica di Habermas e di Fraser: se il potere è ovunque, da dove si giudica quale sia inaccettabile, e chi ne risponde? È la stessa domanda che una definizione anticipata del modello linguistico chiude troppo presto, in un senso o nell'altro.

Teresa Bejan, su *Aeon*, mostra dove la risposta si trova di solito.{% rif "2026-11-09-bejan-uguaglianza-aeon" %} Nell'estate del 1646 il livellatore John Lilburne, davanti alla Camera dei Lord, rifiuta di inginocchiarsi: Dio ha creato tutti «uguali e simili». Il ragionamento non è rigoroso, ma funziona, perché si appoggia a un'istituzione nota, la giuria, in cui dodici uomini diversi per ricchezza e istruzione giudicano da pari. La pratica dell'uguaglianza ha preceduto la sua idea, e gli esclusi da quella pratica hanno dovuto lottare per secoli prima che lo stesso argomento valesse per loro.

{% scheda "2026-11-09-bejan-uguaglianza-aeon" %}

Per la domanda di questa serie la lezione è di metodo. Lo statuto di un essere, nella storia, si è deciso raramente per definizione e quasi sempre attraverso un'istituzione che stabiliva chi sedeva da pari, chi testimoniava, chi rispondeva. Lo stesso accadrà ai modelli linguistici, e in parte accade già: nell'allineamento che sceglie che cosa raccontano, nella verifica che decide quali loro prove entrano nel sapere, nelle regole che diranno chi risponde di ciò che fanno.

<aside class="catena-apparato" aria-label="Quattro modi di tracciare il confine">
<p class="catena-apparato-label">Apparato · Quattro modi di tracciare il confine</p>
<div class="catena-apparato-tabella">
<table>
<thead><tr><th>Lettura</th><th>Che cosa diventa il modello</th><th>Dove si decide il confine</th><th>Scheda</th></tr></thead>
<tbody>
<tr><td>Naturalismo</td><td>Una mente fatta di materia, la prova che la nostra lo è</td><td>In un esperimento sull’interiorità</td><td>Descola</td></tr>
<tr><td>Pratiche ibride</td><td>Un interlocutore che trattiamo da persona mentre diciamo che è una cosa</td><td>Nella distanza fra ciò che facciamo e ciò che diciamo</td><td>Latour, via Denis</td></tr>
<tr><td>Tecnologia culturale</td><td>La casa dell’intelletto ricomposta al volo</td><td>Nella selezione a valle che decide che cosa racconta</td><td>Farrell e Shalizi, Hamilton e Mimno</td></tr>
<tr><td>Spazio delle ragioni</td><td>Un produttore di eventi che diventano enunciati solo se qualcuno li verifica</td><td>Nella pratica di verifica, formale o fra pari</td><td>Sellars via Sheff, Aaronson, Gheorghiu</td></tr>
</tbody>
</table>
</div>
</aside>

{% controtesi "2026-10-31-descola-ia-animalita-grandcontinent" %}
Si può prendere Descola alla lettera e rovesciare la tesi. Se l'intelligenza artificiale è la verifica sperimentale che la mente umana obbedisce alle stesse leggi della materia, allora la questione è di natura e si decide per esperimento: una macchina che imita la mente o la imita abbastanza, o no, e nessuna istituzione cambierà l'esito.{% rif "2026-10-31-descola-ia-animalita-grandcontinent" %} La domanda su dove passa il confine avrebbe allora una risposta, e la daranno le scienze, non le pratiche.
{% endcontrotesi %}

L'obiezione dice una cosa vera del naturalismo, ed è proprio per questo che la catena la mette in fondo: è la forma in cui i moderni si raccontano la domanda. Ma Descola stesso la presenta come un'ontologia fra altre, la nostra, e non come la verità sugli esseri; e Latour, nella ricostruzione di Denis, ricorda che l'esperimento è a sua volta una pratica, fatta in un laboratorio, con strumenti, protocolli e una comunità che decide che cosa conta come risultato. Il caso di Aaronson lo mostra nel modo più netto: perfino una dimostrazione matematica, l'esito più «di natura» che si possa immaginare, entra nel sapere attraverso un certificato e una ricostruzione fra pari. Le scienze daranno risposte, e il confine che ne seguirà sarà comunque tracciato da un'istituzione che decide come trattare ciò che le risposte descrivono. La domanda che resta aperta, per l'attante zero come per i livellatori di Lilburne, è chi siederà in quella giuria.
