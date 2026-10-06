---
title: "Different Time, Different Language: Revisiting the Bias Against Non-Native Speakers in GPT Detectors"
external_url: "https://arxiv.org/abs/2602.05769"
source: "Adnan Al Ali, Jindřich Helcl e Jindřich Libovický / EACL 2026"
date: 2026-02-05
ai_prose: WR
criterio: dato-che-corregge
perche: "Sul ceco la perplessità dei non madrelingua non è più bassa, e i rilevatori contemporanei non si basano più su quella: il meccanismo che reggeva la difesa più usata non c'è più."
rinvio: /curated/2026-08-06-karr-perche-la-rilevazione-fallisce-arxiv/
description: |
  Adnan Al Ali e Jindřich Libovický dell'Università Carlo di Praga, con Jindřich Helcl del gruppo di tecnologie linguistiche di Oslo. Preprint del 5 febbraio 2026, poi negli atti di EACL 2026 a Rabat. Entra in archivio perché smonta una tesi che questo stesso archivio ospita, e lo fa sul punto giusto.

  La tesi smontata è il *meccanismo* dello studio di Stanford del 2023: i rilevatori segnalerebbero i non madrelingua perché il loro testo ha perplessità più bassa, cioè è più prevedibile. Gli autori rifanno la verifica due anni dopo, in ceco, e trovano tre cose. Testuale: «Mostriamo che la perplessità dei testi di parlanti non nativi di ceco non è più bassa di quella dei nativi. Esaminiamo poi rilevatori di tre famiglie separate e non troviamo alcun bias sistematico contro i parlanti non nativi. Infine, dimostriamo che i rilevatori contemporanei operano efficacemente senza basarsi sulla perplessità.»

  Tre affermazioni distinte, e conviene tenerle separate perché hanno forza diversa. La prima è empirica e limitata a una lingua: in ceco la premessa linguistica del 2023 non si verifica. La seconda è la misura che interessa di più ed è negativa: nessun bias sistematico trovato. La terza è architetturale e ha la portata maggiore, perché se gli strumenti attuali non usano più la perplessità, allora l'intera spiegazione del 2023 — per quanto corretta sui rilevatori che descriveva — non si applica più a quelli di oggi. La difesa più diffusa di chiunque venga segnalato, «lo strumento discrimina chi non è madrelingua», non si può più usare nella forma in cui circola.

  Nello stesso anno la verifica più ampia va nella stessa direzione: Van Vlasselaer, Van Droogenbroeck e Spruyt, alla Vrije Universiteit Brussel, testano 160 documenti a verità nota e 1.163 tesi magistrali del 2024-25, e non trovano nessun falso positivo per Pangram, Copyleaks e Turnitin, con i testi di studenti non madrelingua identificati correttamente al cento per cento.

  Perché allora la scheda non chiude la questione a favore dei rilevatori. Perché quella stessa équipe, nel paragrafo successivo, scrive la frase che sopravvive a tutta la letteratura, favorevole e contraria: gli strumenti «non dovrebbero essere usati come prova unica in decisioni ad alta posta». E perché restano in piedi tre limiti che nessuno di questi lavori tocca. Il ceco non è il francese, e una misurazione indipendente e sottoposta a revisione dei falsi positivi sul francese letterario non esiste. I test sono su saggi accademici e tesi, non su prosa letteraria. E l'eludibilità resta intatta, il che significa che un punteggio basso non dice nulla e un punteggio alto dice meno di quanto sembri. Il risultato netto è scomodo per entrambe le parti, ed è il motivo per cui la scheda sta qui: lo strumento è migliore di come lo descrivono i suoi critici e meno conclusivo di come lo usano i suoi utilizzatori.
tags: [curated, ai, epistemologia, scienza]
concepts: ["rilevatori di testo generato", "test severo", "metodo scientifico"]
---
