---
title: "Informal Verification"
external_url: "https://www.nikolasgoebel.com/2026/11/22/informal-verification.html"
source: "Nikolas Göbel"
date: 2026-11-22
ai_prose: WR
criterio: strumento-concettuale
perche: "Verificare serve a costruire fiducia, e la fiducia è di due tipi: quella che nasce dal collaudo e quella che nasce dal capire perché un sistema funziona. Una prova informale, controllata passo per passo, può dare la seconda dove quella formale non arriva."
rinvio: /curated/2026-11-20-moskowitz-riemann-verificata-sciam/
description: |
  Nikolas Göbel, ingegnere del software, parte da un problema pratico: per lasciare che un agente modifichi un sistema complesso bisogna fidarsi. La fiducia empirica nasce dal curriculum, cioè da quante volte l'agente sbaglia e da quante volte rompe qualcosa in produzione. Non basta, perché settimane di correzioni riuscite non distinguono un debito tecnico che cresce da interventi fondati su una comprensione profonda. L'esempio è una macchina che sembra smistare le biglie per colore e invece le smista per dimensione: lo si scopre solo guardandoci dentro, oppure con una biglia blu grande. Serve allora una fiducia epistemica, la convinzione che il sistema funzioni come lo si immagina. Una prova formale in Lean la dà in parte, ma comporta un «rischio di traduzione». Göbel cita un conteggio secondo cui, dei 290 teoremi di OpenAI accompagnati da codice Lean, circa 38 non enunciano nemmeno il risultato principale dell'articolo. **Una prova informale, scritta in linguaggio naturale e controllata passo per passo da un modello veloce che rifiuta i salti di ragionamento, non elimina gli errori, ma rende visibili le premesse e permette a una persona di confrontarle con la propria idea del sistema.** Göbel lo mostra su un caso concreto: il controllore rifiuta un passaggio non giustificato, e da lì si scopre che una query lascia leggere a qualunque cliente le fatture degli altri. Lo strumento che usa, autoground, è suo, e ne discute i limiti: il modello che controlla non è deterministico e risolve le ambiguità come un lettore esperto, a volte nel senso sbagliato. In chiusura rimanda a Lakatos: le prove si cercano anche per la comprensione e la fiducia che si costruiscono lungo la strada.
tags: [curated, ai, tecnologia, epistemologia]
concepts: ["verifica formale", "test severo"]
---
