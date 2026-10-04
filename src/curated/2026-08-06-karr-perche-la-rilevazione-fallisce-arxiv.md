---
title: "Why AI Detection Fails for Academic Integrity"
external_url: "https://arxiv.org/abs/2608.11256"
source: "Jonathan A. Karr Jr, Grigorii Khvatskii, Ting Hua e Nitesh V. Chawla / University of Notre Dame"
date: 2026-08-06
ai_prose: WR
criterio: dato-che-corregge
perche: "Chi usa l'AI dichiarandolo rischia la sanzione più di chi la usa e poi fa riscrivere il testo per non farsi prendere: il rilevatore premia la dissimulazione."
rinvio: /curated/2026-06-26-commonwealth-nazir-falso-positivo-brittlepaper/
description: |
  Quattro ricercatori dell'Università di Notre Dame; preprint del 6 agosto 2026, seconda versione del 20 agosto, accettato all'ACM AI Leadership Summit. È lo studio che rovescia il problema: non chiede se i rilevatori funzionino, chiede che cosa premino.

  Il disegno confronta abstract pubblicati in quattro discipline, mettendo a confronto lavori vecchi — 2013-2015, cioè precedenti a qualunque modello generativo di largo uso — e recenti, 2023-2025. Tre risultati, e vanno letti insieme.

  Il primo: gli originali recenti **non modificati** vengono segnalati fra il 9% e il 15%. Testi umani, scritti da ricercatori, marcati come artificiali in una proporzione che in un'aula si tradurrebbe in accuse.

  Il secondo è quello che fa la differenza: i punteggi «correlavano con misure di densità lessicale piuttosto che con l'intenzione autoriale effettiva», e le discipline umanistiche mostrano tassi di rilevazione nettamente superiori a quelle scientifiche. **La prosa colta alza il punteggio a prescindere da chi l'ha scritta.** È lo stesso meccanismo che lo studio di Stanford del 2023 aveva trovato in forma speculare — lì a essere punita era la povertà lessicale, qui la ricchezza — ed è la ragione per cui un punteggio non è mai un'informazione sull'autore ma sullo stile.

  Il terzo è il più scomodo, e dà il titolo alla scheda. Un intervento di editing leggero con un modello fa scattare la segnalazione fra il 38% e l'80% dei casi; ma dopo il passaggio in un servizio di «umanizzazione» del testo, **meno del 4%** delle riscritture generate resta segnalato — un tasso di falsi negativi superiore al 96%. La conclusione degli autori è una riga: «l'editing onesto con l'AI comporta un rischio di sanzione più alto dell'elusione assistita da un umanizzatore». Chi dichiara e usa poco viene preso; chi usa molto e nasconde no.

  Ne segue la frase che la catena porta via: «i punteggi dei rilevatori non dovrebbero servire come prova autonoma di cattiva condotta». Ma la conseguenza vera è più larga di una norma disciplinare, ed è di teoria della misura: un indicatore che punisce chi lo rispetta e assolve chi lo aggira non è un indicatore difettoso, è un indicatore che ha cambiato oggetto. Misura la capacità di dissimulare, e la chiama integrità. Chi lo adotta ottiene una popolazione selezionata per quella capacità — che è esattamente il meccanismo della legge di Goodhart, con l'aggravante che qui chi è misurato può intervenire sul proprio punteggio senza toccare il proprio comportamento.
tags: [curated, ai, epistemologia, formazione]
concepts: ["rilevatori di testo generato", "legge di Goodhart", "reward hacking", "università", "Stati Uniti"]
---
