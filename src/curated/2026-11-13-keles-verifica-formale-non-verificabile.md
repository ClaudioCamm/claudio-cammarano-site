---
title: "Formal Verification is Not Verifiable"
external_url: "https://alperenkeles.com/posts/formal-verification-is-not-verifiable/"
source: "Alperen Keles"
date: 2026-11-13
ai_prose: WR
criterio: strumento-concettuale
perche: "Una prova formale è vera rispetto a definizioni, modelli e verificatori che nessuno ha verificato: il problema della fiducia non sparisce, si sposta dove si vede meno."
rinvio: /curated/2026-11-11-economist-yang-mills-dimostrazione-ai/
description: |
  Alperen Keles, ricercatore di metodi formali, osserva che nel 2026 l'AI ha portato la verifica formale nella pratica corrente: le startup del settore si sono moltiplicate e, secondo Keles, in un solo progetto Claude ha scritto un miliardo di righe di Rocq. Keles si dichiara ottimista, ma distingue le parti di una verifica. La prova si controlla da sola. Restano difficili da controllare le definizioni, i modelli dell'oggetto su cui si dimostra e i programmi che verificano. Una verifica formale fa affermazioni universali, che valgono per tutti i casi; un test fa affermazioni esistenziali, perché trova un caso. Nella verifica basta un errore in una delle parti date per buone perché la prova cada. Il test invece è verificabile da una persona, perché produce un oggetto leggibile: la segnalazione di un bug. Prima dell'AI la reputazione dei ricercatori e la revisione fra pari garantivano che non si dimostrassero proprietà banali, e anche così sistemi verificati come CompCert e seL4 hanno avuto bug. Se l'AI ha moltiplicato per dieci il software, scrive Keles, ha moltiplicato forse per mille quello «formalmente verificato». **Si dovrebbe smettere di dire che un software è formalmente verificato e dire ogni volta quali proprietà sono dimostrate, che cosa si dà per fidato e che cosa resta fuori.** Il software più vicino alla macchina, come un database, ha specifiche nette. Quello più vicino all'utente, come un'interfaccia, segue linee guida e gusti, e per lui una nozione unica di correttezza non esiste. Keles prevede che si potranno dimostrare le proprietà dei programmi a un solo thread. Al test casuale affida il compito di misurare il sistema reale e di falsificare i modelli su cui la verifica si regge.
tags: [curated, ai, tecnologia, epistemologia]
concepts: ["verifica formale", "dimostrazione assistita dal calcolatore", "Popper, Karl"]
---
