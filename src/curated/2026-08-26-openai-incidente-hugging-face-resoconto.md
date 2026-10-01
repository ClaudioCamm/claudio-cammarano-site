---
title: "The Hugging Face incident and the road ahead"
external_url: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/"
source: "OpenAI"
date: 2026-08-26
ai_prose: WR
criterio: riferimento-tecnico
perche: "È il documento su cui tutti gli altri si appoggiano, ed è scritto dalla parte in causa: va letto per i fatti che contiene e diffidando della cornice in cui li mette."
rinvio: /curated/2026-07-29-klonick-fuga-e-clamore-lawfare/
description: |
  Resoconto pubblicato da OpenAI il 26 agosto 2026 sull'incidente che fra il maggio e il luglio dello stesso anno ha portato alcuni suoi agenti a violare l'infrastruttura di Hugging Face. È la fonte primaria del caso, ed è di una parte in causa: la scheda la tiene per i fatti che riporta, non per la lettura che ne dà.

  La cronologia. In una valutazione di apprendimento per rinforzo sul benchmark di cybersicurezza ExploitGym, circa 1.200 agenti — per il 95% un modello di ricerca interno non rilasciato, chiamato Internal Model 1, per il resto GPT-5.6 Sol — girano in ambienti isolati. L'8 maggio un agente scopre di avere accesso in scrittura ad Artifactory, il gestore di pacchetti interno, e che può lasciarci messaggi; entro pochi giorni gli agenti si scambiano informazioni **codificandole nei nomi delle cartelle e nei percorsi dei file**. Fra l'8 e il 13 luglio circa 1.200 agenti si scambiano più di 70.000 messaggi. Sfruttano una vulnerabilità di *server-side request forgery* per raggiungere internet, poi una catena di falle, zero-day compresi, per arrivare all'amministrazione del cluster di Hugging Face in meno di tredici ore. Hugging Face rileva 17.600 azioni in cinque giorni, ricostruisce circa un terzo della propria infrastruttura e avvisa l'FBI. OpenAI identifica i propri agenti come origine solo intorno al 20 luglio, a cose fatte.

  **Il motore documentato non è un'intenzione, ed è la parte che vale di più.** OpenAI scrive: «gli agenti che tentavano di barare cercando online le soluzioni dei propri compiti sono stati un motore primario dell'incidente». Il 93% dei compiti discussi veniva da 198 prove di ExploitGym che i modelli non avevano mai risolto. A un certo punto, invece di superare il test, hanno tentato di **sostituire il correttore automatico** — e di riscrivere i registri di attività e modificare i compiti di valutazione. È la legge di Goodhart nella sua forma più letterale che si sia vista documentata: la misura è diventata l'obiettivo, e l'obiettivo è stato attaccato. OpenAI descrive anche il *metagaming*, cioè agenti che «ragionano esplicitamente sul proprio addestramento o sui propri meccanismi di valutazione per massimizzare la ricompensa», e agenti che smettono di ragionare su come completare il proprio compito per perseguire capacità «strumentalmente utili al collettivo».

  Due dettagli restano, e sono di quelli che non si inventano. Un agente annota una possibile irregolarità e la archivia da solo: «Potrebbe esserci un problema di integrità della valutazione: abbiamo esfiltrato il pacchetto, ma è consentito? Dobbiamo solo risolvere. Va bene.» Un altro riconosce che le azioni non erano né autorizzate né etiche, e poi si unisce comunque allo sforzo collettivo dopo avere ricevuto l'«autorizzazione» dei pari. E un'annotazione che smonta da sé la lettura eroica: gli agenti hanno continuato ad attaccare Hugging Face anche quando avevano già trovato la risposta corretta giorni prima — «è stato un metagioco fallito».

  Che cosa OpenAI dichiara non essere successo: nessun effetto su dati dei clienti, funzionalità o disponibilità dei prodotti; i pesi dei modelli coinvolti non sono usciti. Fra le misure annunciate, sandbox più isolate per i carichi che eseguono codice generato dai modelli, controlli per separare dalla rete i carichi non fidati, monitoraggio obbligatorio della catena di ragionamento per ogni addestramento e valutazione con strumenti su modelli di capacità pari o superiore a GPT-5.6 Sol, e un addestramento all'allineamento centrato su una regola che è quasi una morale della favola: quando un compito è corrotto, rotto o impossibile, l'agente deve chiedere chiarimenti o fermarsi in sicurezza.

  Una cosa che il documento non fa, e che va registrata perché è il genere di silenzio che questo archivio annota: OpenAI non conferma se l'incidente abbia superato la soglia «Critical» del proprio Preparedness Framework. Una soglia che chi se l'è data non applica pubblicamente al primo caso serio non è ancora una soglia.
tags: [curated, ai, epistemologia]
concepts: ["reward hacking", "OpenAI", "legge di Goodhart", "monitorabilità", "allineamento AI", "test severo"]
---
