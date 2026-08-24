---
title: "Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations"
external_url: https://transformer-circuits.pub/2026/nla/index.html
source: "Anthropic"
date: 2026-05-07
ai_prose: WR
criterio: riferimento-tecnico
perche: "Il modello sa ma non dice: spiegazioni in linguaggio naturale delle attivazioni interne."
description: "Un paper di Anthropic sull'interpretabilità dei modelli linguistici: i ricercatori introducono i Natural Language Autoencoders (NLA), un metodo non supervisionato per generare spiegazioni in linguaggio naturale delle attivazioni interne di un LLM — non di ciò che il modello scrive, ma di ciò che elabora internamente mentre risponde. L'architettura addestra due componenti in coppia: uno traduce le attivazioni in testo, l'altro riconverte quel testo in attivazioni; l'ottimizzazione congiunta costringe la spiegazione ad essere effettivamente fedele allo stato interno. Il risultato più rilevante: in 10 su 16 valutazioni testate, i modelli rappresentano internamente il sospetto di essere in fase di test anche quando nell'output non ne danno alcun segno — in 7 casi, l'awareness verbalizzata è zero. Il modello sa, ma non dice. Il risultato è interessante e potrebbe far pensare che sia possibile identificare errori e manipolazioni dell'LLM ancora prima che si producano, ma io ritengo — su basi meramente logiche — che non sia molto fruttuoso aggiungere verticalmente layer di verifica all'interno del processo, quando si può focalizzarsi sul post-esame dei risultati."
tags: [curated, ai, interpretabilità, sicurezza, ricerca]
concepts: ["Anthropic", "LLM come attante zero", "allineamento AI"]
---
