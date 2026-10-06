---
title: "GPT detectors are biased against non-native English writers"
external_url: "https://doi.org/10.1016/j.patter.2023.100779"
source: "Weixin Liang, Mert Yuksekgonul, Yining Mao, Eric Wu e James Zou / Patterns"
date: 2023-07-10
ai_prose: WR
criterio: riferimento-tecnico
perche: "Il 61,22% dei saggi di non madrelingua classificato come generato da una macchina, contro il 5,19% dei madrelingua: lo studio da cui parte ogni discussione sui rilevatori, e che va datato."
rinvio: /curated/2026-02-05-al-ali-bias-rilevatori-rivisitato-eacl/
description: |
  *Patterns* 4(7), 100779, 10 luglio 2023, open access. Cinque autori di Stanford — informatica, ingegneria elettrica e scienza dei dati biomedici. È il lavoro fondativo sui limiti dei software che dichiarano di riconoscere il testo generato da un modello, ed è citato in quasi ogni discussione successiva, spesso senza la data.

  Il disegno è semplice e la ragione per cui regge. Sette rilevatori — Originality.AI, Quil.org, Sapling, quello di OpenAI, Crossplag, GPTZero, ZeroGPT — vengono applicati a 91 saggi TOEFL scritti da non madrelingua e a 88 temi di studenti statunitensi di terza media. Il risultato: i rilevatori «hanno classificato erroneamente più della metà dei saggi TOEFL come generati da AI, con un tasso medio di falsi positivi del 61,22%», mentre sui testi dei madrelingua l'accuratezza è «quasi perfetta», con un tasso di falsi positivi del 5,19%. Diciotto saggi su novantuno sono stati marcati come artificiali all'unanimità dai sette strumenti; ottantanove su novantuno da almeno uno.

  La spiegazione proposta è il meccanismo, e va capita perché è quella che le ricerche successive metteranno in discussione: i rilevatori di quella generazione stimavano la *perplessità* del testo, cioè quanto le parole scelte risultino prevedibili per un modello linguistico, e «gli autori non madrelingua mostrano una variabilità linguistica e una scelta lessicale limitate, il che produce di conseguenza testi a perplessità più bassa». La prova sperimentale è elegante e vale più del numero. Chiedendo a ChatGPT di arricchire il lessico dei saggi TOEFL «perché suonino più da madrelingua», il tasso di falsi positivi crolla dal 61,22% all'11,77%. Chiedendo l'operazione inversa sui testi dei madrelingua — «semplifica le scelte lessicali come se fossero di un non madrelingua» — i falsi positivi salgono dal 5,19% al 56,65%. **Non è l'autore a essere rilevato, è lo stile.**

  La raccomandazione degli autori è esplicita e non ammette sfumature: «sconsigliamo fermamente l'uso dei rilevatori GPT in contesti valutativi o educativi, in particolare quando si valuta il lavoro di parlanti non nativi». E la conseguenza morale: i rilevatori «possono penalizzare involontariamente chi scrive con espressioni linguistiche più vincolate».

  Va però datato con precisione, perché il sito pubblica anche ciò che lo smentisce. Questo è il 2023, e riguarda rilevatori di prima generazione, in inglese. La letteratura del 2026 ha rivisto il meccanismo della perplessità e ha misurato falsi positivi vicini allo zero su strumenti più recenti: chi usa questo studio oggi come se fosse l'ultima parola commette lo stesso errore di chi usa un punteggio come prova.
tags: [curated, ai, epistemologia, scienza]
concepts: ["rilevatori di testo generato", "test severo", "privilegio", "Stati Uniti"]
---
