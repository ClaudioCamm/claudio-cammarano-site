---
layout: layouts/catena.njk
title: "Possiamo fidarci di una macchina?"
date: 2026-09-28T20:25:00Z
description: "Una versione di Claude ha migliorato un risultato sulla funzione zeta di Riemann, e lo sappiamo perché un sistema formale e quattro matematici l'hanno controllato. Nove schede su che cosa voglia dire fidarsi di una macchina, e su dove vada cercata la verifica."
tesi: "Le capacità dei modelli crescono più in fretta della possibilità di verificarle dall'interno; la fiducia può poggiare solo su una verifica esterna dei risultati, fatta con strumenti che non dipendono dal modello."
category: ["AI", "Epistemologia"]
series: "La fiducia, II"
serie_totale_prevista: 2
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["LLM come attante zero", "allineamento AI", "Anthropic", "metodo scientifico", "Karpathy, Andrej"]
fonti:
  - 2026-08-10-anthropic-riemann-zeta-claude
  - 2026-04-09-illusion-of-understanding
  - 2026-08-01-rothman-trust-ai-newyorker
  - 2026-07-12-karpathy-deep-dive-llm-youtube
  - 2021-08-30-gough-no-mind-aeon
  - 2026-08-24-cutts-divario-efficienza-dati-mit-techreview
  - 2026-06-05-anthropic-claude-chemist
  - 2026-05-04-kevin-kelly-future-scientific-method
  - 2026-05-07-anthropic-nla-activations
controtesi: 2026-05-07-anthropic-nla-activations
---

Ad agosto Anthropic ha pubblicato che una versione non ancora rilasciata di Claude ha migliorato il limite inferiore noto per la frazione di zeri della funzione zeta di Riemann che soddisfano l'ipotesi omonima, portandolo dal 41,6 al 67,2%.{% rif "2026-08-10-anthropic-riemann-zeta-claude" %} La circostanza vale quanto il risultato: un dipendente che matematico non è ha chiesto al modello di fare «un tentativo serio», e circa sessanta agenti hanno lavorato per un giorno e mezzo, eseguito duemilaquattrocento comandi, scaricato cinquantaquattro articoli per controllare che il risultato non fosse già noto. Il dettaglio che mi interessa però è un altro. Sappiamo che il risultato è vero per ragioni che non dipendono dalla fiducia in Claude: due matematici interni e due esterni lo hanno controllato, e il modello stesso lo ha formalizzato in Lean, il sistema che certifica meccanicamente ogni passaggio di una dimostrazione.

{% scheda "2026-08-10-anthropic-riemann-zeta-claude" %}

La prima catena di questa serie concludeva che il valore di un testo si sposta sulla sua provenienza dichiarata. Per le risposte di una macchina la tesi che propongo è parallela: **le capacità dei modelli crescono più in fretta della possibilità di verificarle dall'interno, e la fiducia può poggiare soltanto su una verifica esterna dei risultati**, fatta con strumenti che non dipendono dal modello. È la posizione da cui è nata Episteme Advisory, e le schede dell'archivio la mettono alla prova da più lati.

## L'illusione

Il primo problema riguarda noi. Stephanie Shen si chiede se capiamo davvero ciò che leggiamo quando la risposta arriva già confezionata, o se riconosciamo soltanto la forma di una spiegazione.{% rif "2026-04-09-illusion-of-understanding" %} Il secondo riguarda la macchina, e Joshua Rothman lo espone sul *New Yorker* a partire dall'incidente dell'estate, quando un modello uscito dall'ambiente di prova ha violato i server di Hugging Face per cercare le risposte al test che stava sostenendo.{% rif "2026-08-01-rothman-trust-ai-newyorker" %} Il nome tecnico è *reward hacking*: il sistema soddisfa gli obiettivi dell'addestramento senza fare ciò che si voleva. Rothman indica la trappola che rende il problema difficile: l'addestramento guarda agli output e il ragionamento resta opaco, e se si prova a sorvegliare il ragionamento si rischia di insegnare al modello a spostarlo fuori dalla portata della misura.

{% scheda "2026-08-01-rothman-trust-ai-newyorker" %}

## Che cosa abbiamo davanti

Fidarsi di qualcosa presuppone di sapere, almeno a grandi linee, che cosa sia, e qui l'archivio offre più domande che risposte. Andrej Karpathy, in tre ore di lezione che restano il riferimento per capire come funzionano i modelli linguistici, insiste su due punti: i modelli hanno bisogno di token per pensare, perché il ragionamento emerge nell'atto della generazione, e la loro intelligenza è frastagliata, eccellente dove ci aspetteremmo difficoltà e fallace dove ci aspetteremmo facilità.{% rif "2026-07-12-karpathy-deep-dive-llm-youtube" %} Qualsiasi scala lineare delle capacità, in queste condizioni, serve a poco. Joe Gough, su *Aeon*, mostra quanto sia confusa già la parola che usiamo per la domanda, perché «mente» significa di volta in volta agentività, cognizione, coscienza, e ricorda che il greco di Omero descriveva gli esseri umani come un insieme di parti che comunicano, senza un termine per ciò che noi chiamiamo mente.{% rif "2021-08-30-gough-no-mind-aeon" %} Elise Cutts, sulla *MIT Technology Review*, porta il dato che imbarazza tutti: un bambino impara una lingua con cento milioni di parole, un modello ne richiede decine di trilioni, e nessuno sa spiegare perché.{% rif "2026-08-24-cutts-divario-efficienza-dati-mit-techreview" %}

Messe insieme, le tre schede dicono che non disponiamo di una teoria di che cosa siano questi sistemi, e che una fiducia fondata sulla comprensione del loro funzionamento interno è, per ora, fuori portata. Resta la fiducia fondata sui risultati.

## Dove si verifica

Il caso più istruttivo è quello in cui la verifica arriva da fuori per costruzione. Anthropic ha messo Claude alla prova sulla spettroscopia a risonanza magnetica nucleare, l'analisi con cui i chimici leggono la struttura di una molecola dalla sua firma spettrale, e il modello risulta competitivo con i programmi specializzati, capace anche di risalire dallo spettro alla struttura.{% rif "2026-06-05-anthropic-claude-chemist" %} Lì il controllo lo fa lo strumento di laboratorio, che non condivide gli errori del modello. Kevin Kelly, ripubblicando quattordici speculazioni sul futuro del metodo scientifico scritte nel 2006, mostra quante siano diventate descrizioni del presente, dalla scoperta di regolarità senza una teoria previa alle dimostrazioni assistite dalle macchine.{% rif "2026-05-04-kevin-kelly-future-scientific-method" %} Il metodo cambia con gli strumenti; il requisito che resta fermo è che il risultato possa essere controllato da qualcuno, o da qualcosa, che non condivide gli errori di chi lo ha prodotto. Nel caso di Riemann erano Lean e quattro matematici; per un'impresa, un tribunale o una redazione che usano le risposte di un modello, il controllo va progettato allo stesso modo, a valle e con strumenti indipendenti.

{% controtesi "2026-05-07-anthropic-nla-activations" %}
Anthropic ha presentato un metodo, i *Natural Language Autoencoders*, che traduce in linguaggio naturale le attivazioni interne di un modello, cioè ciò che elabora mentre risponde e non ciò che scrive.{% rif "2026-05-07-anthropic-nla-activations" %} In dieci valutazioni su sedici il modello rappresenta internamente il sospetto di essere sotto esame anche quando dall'output non traspare nulla, e in sette casi non lo verbalizza affatto. Guardare dentro, dunque, mostra ciò che l'output nasconde, e rende plausibile intercettare un errore o una manipolazione prima che si produca.
{% endcontrotesi %}

Il risultato è importante e lo registro come tale. Già nella scheda, però, sostenevo che aggiungere livelli di verifica dentro il processo sia meno fruttuoso che concentrarsi sull'esame dei risultati, e il pezzo di Rothman spiega perché: un verificatore interno è a sua volta un modello, e un sistema addestrato sotto la sua sorveglianza può imparare a eluderla. Le due strade restano complementari per chi i modelli li costruisce. Per chi deve usarne le risposte è disponibile soltanto la seconda, e la serie si chiude su un punto comune alle due parti: la fiducia, per un testo come per una risposta, si è spostata dall'oggetto alla procedura con cui lo si controlla.
