---
layout: layouts/catena.njk
title: "Chi resta fuori dal recinto"
date: 2026-09-28T09:05:00Z
description: "Se l'allarme dei laboratori diventa regola, il recinto si misura da chi resta fuori: nuovi entranti, modelli aperti in gran parte cinesi, paesi che vorrebbero un'intelligenza artificiale propria. Quattordici schede dell'archivio, e una domanda su Nvidia e sulla rete che si divide."
tesi: "Le barriere che l'allarme giustifica cadono soprattutto sui modelli a pesi aperti, cioè sullo strumento con cui chi non è americano può avere un'intelligenza artificiale propria; il fornitore di tutti, Nvidia, ha l'interesse opposto, e la sua strategia ricorda la diffusione del web soltanto in parte."
category: ["AI", "Geopolitica"]
series: "Il recinto, II"
serie_totale_prevista: 2
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["Huang, Jensen", "Nvidia", "modelli a pesi aperti", "cattura regolatoria", "Cina"]
fonti:
  - 2026-09-23-klein-huang-alarmismo-ai-nyt
  - 2026-06-11-mariniello-ai-act-costi-conformita-bruegel
  - 2026-08-12-zuniga-pesi-aperti-manifesti-icle
  - 2026-08-10-villasenor-pesi-aperti-leadership-brookings
  - 2026-07-20-stratechery-chinese-models
  - 2026-05-14-chan-china-ai-nyt
  - 2026-08-03-osnos-future-made-china-newyorker
  - 2026-03-09-grogan-pesi-aperti-sovranita-ai
  - 2026-09-27-crescenzi-ambasciate-dati-guerredirete
  - 2024-02-01-nocetti-splintered-internet-ifri
  - 2025-12-19-osw-great-russian-firewall
  - 2025-06-01-fidler-splinternet-outward-turn-sciencespo
  - 2026-01-04-kulesza-internet-governance-2026-circleid
  - 2026-09-25-grandcontinent-sicurezza-ai-cina-stati-uniti
controtesi: 2026-09-25-grandcontinent-sicurezza-ai-cina-stati-uniti
---

La prima catena si chiudeva su un'immagine: se sul versante degli investitori l'allarme esistenziale sostiene un'aspettativa, sul versante dei regolatori rischia di costruire un recinto. Il testimone più utile per capire chi ne resterebbe fuori è anche il più interessato, e lo tratto come tale. In un'ora e mezza di conversazione con Ezra Klein, Jensen Huang respinge ogni richiesta di regole nuove con la stessa mossa ripetuta senza variazioni, se il prodotto non è sicuro non lo si spedisce e le leggi per punire chi lo fa esistono già, e poi indica l'asimmetria che rende scomoda la discussione: nessuno sta costruendo più capacità di calcolo di chi chiede di essere rallentato.{% rif "2026-09-23-klein-huang-alarmismo-ai-nyt" %} Huang vende a tutti, e un mercato piccolo non gli conviene. La sua posizione coincide con il suo interesse, e questo non basta a renderla falsa: basta a leggerla con la stessa diffidenza che la prima catena ha riservato ai laboratori.

{% scheda "2026-09-23-klein-huang-alarmismo-ai-nyt" %}

La tesi di questa seconda parte è che **le barriere giustificate dall'allarme cadono soprattutto sui modelli a pesi aperti**, cioè sullo strumento con cui un'impresa nuova, un concorrente straniero o uno Stato che non vuole dipendere dalle piattaforme americane possono avere un'intelligenza artificiale propria. Ne discendono effetti che vanno oltre la concorrenza fra laboratori e toccano la produttività, la crescita e la sicurezza informatica di chiunque resti fuori.

## Il costo della soglia

Il caso più istruttivo viene dall'Europa, dove nessuno sospetta che l'AI Act sia stato scritto per favorire OpenAI o Anthropic. Mario Mariniello, in un policy brief di Bruegel che smonta il regolamento dall'interno, riprende la stima secondo cui la conformità costa fra quindici e trentamila euro per sistema, fra il 9 e il 17% dei costi di sviluppo.{% rif "2026-06-11-mariniello-ai-act-costi-conformita-bruegel" %} Sono costi fissi, e i costi fissi pesano in proporzione su chi è piccolo: il precedente che Mariniello porta è la concentrazione di mercato documentata dopo il GDPR. Il punto mi pare decisivo per la tesi, perché mostra che una soglia produce selezione anche quando nessuno la progetta a quello scopo, e che la cattura regolatoria, se c'è, ha bisogno soltanto di assecondare una tendenza che la regola ha già.

{% scheda "2026-06-11-mariniello-ai-act-costi-conformita-bruegel" %}

Negli Stati Uniti la soglia ha un bersaglio più preciso. Mario Zúñiga, che scrive per un centro di *law and economics* con una diffidenza strutturale verso la regolazione preventiva, osserva che i piani di sicurezza pubblicati in questa stagione dai dirigenti e dai ricercatori dei laboratori convergono su due strumenti, l'approvazione obbligatoria prima del rilascio e le restrizioni ai modelli a pesi aperti.{% rif "2026-08-12-zuniga-pesi-aperti-manifesti-icle" %} La sua obiezione riguarda la struttura del mercato: con Susan Athey sostiene che pochi modelli aperti di buon livello bastano a disciplinare prezzi e condotta dei modelli chiusi, e che i pesi pubblicati permettono a una startup di costruire prodotti senza sostenere il costo dell'addestramento, la vera barriera d'ingresso del settore. Restringere l'apertura toglie di mezzo il meccanismo che tiene contendibile il mercato a valle. Che su questo punto un economista della concorrenza e il fornitore dei chip arrivino alla stessa conclusione partendo da interessi opposti è un fatto da spiegare, e la spiegazione più semplice è che la contendibilità conviene a entrambi.

John Villasenor, da Brookings, porta lo stesso argomento sul terreno dell'interesse nazionale americano, e aggiunge il passaggio che mi interessa di più.{% rif "2026-08-10-villasenor-pesi-aperti-leadership-brookings" %} I modelli a pesi aperti girano sui dispositivi, senza passare dal cloud: per un veicolo autonomo o per un drone impiegato nel soccorso l'assenza di latenza è la condizione perché il sistema funzioni. Chi restringe i pesi aperti esclude quindi un'intera classe di applicazioni, quella dei modelli locali, che a mio parere è la prossima cosa importante del settore e che nessun laboratorio chiuso ha interesse a far crescere.

## Chi sta fuori

Resta da vedere chi occupi, oggi, lo spazio che il recinto lascerebbe fuori, e le schede dell'archivio rispondono in modo concorde. Ben Thompson legge il panico per Kimi K3, il modello aperto di Moonshot uscito nella stessa settimana di Qwen, con la dinamica dei mercati di materie prime, e conclude che i laboratori americani stanno bene, perché servono modelli di frontiera da più tempo e hanno ottimizzato il costo d'inferenza meglio di chiunque; la mossa cinese la legge come *commoditize your complements*, rendere economico il modello per vendere ciò che gli sta intorno.{% rif "2026-07-20-stratechery-chinese-models" %} Kyle Chan, intervistato da Ross Douthat, dice la stessa cosa dal lato cinese: i due paesi corrono gare diverse, gli Stati Uniti verso l'intelligenza generale e la Cina verso l'efficienza, la diffusione, l'open source e le applicazioni fisiche, e i controlli sulle esportazioni di chip la spingono proprio verso ciò in cui è più forte.{% rif "2026-05-14-chan-china-ai-nyt" %} Evan Osnos, tornato in Cina per il *New Yorker*, dà la misura di quel mondo fisico: il 70% dei droni, dei veicoli elettrici, delle batterie al litio e delle celle solari del pianeta.{% rif "2026-08-03-osnos-future-made-china-newyorker" %}

Messe in fila, le tre schede dicono che il concorrente a cui una barriera sui pesi aperti farebbe più male gioca un'altra partita, e che i suoi modelli sono, per gran parte del mondo, l'alternativa disponibile a quelli americani. Una regola scritta a Washington per contenere Pechino finirebbe così per decidere che cosa possono adottare a Nairobi, a Giacarta o a Bergamo.

## Pesi e ambasciate

Qui la questione cambia scala, e diventa di sovranità. Jared Grogan, in un preprint di marzo che va letto come tale, rovescia la convinzione secondo cui un governo prudente compra capacità da un fornitore affidabile e si tutela con un contratto.{% rif "2026-03-09-grogan-pesi-aperti-sovranita-ai" %} Un modello chiuso è una capacità in affitto, revocabile per un cambio di condizioni commerciali, per il dissesto del fornitore o per decisione del governo che lo ospita; un governo che possiede i pesi esercita la capacità alle proprie condizioni. L'archivio conosce già il caso che rende l'argomento concreto, quello di Fable 5, una capacità spenta in quarantotto ore da un provvedimento amministrativo estero. Grogan registra anche l'asimmetria che rende urgente la questione: i controlli americani agiscono sull'hardware e non hanno un corrispettivo sui pesi, che è il lato da cui l'influenza si propaga più in fretta. Devo una precisazione: Grogan argomenta che i pesi aperti sono la condizione della sovranità, e il passaggio che collega le regole sull'apertura alla dipendenza è mio, non suo.

{% scheda "2026-03-09-grogan-pesi-aperti-sovranita-ai" %}

Chiara Crescenzi racconta, su *Guerre di Rete*, un'altra risposta allo stesso problema.{% rif "2026-09-27-crescenzi-ambasciate-dati-guerredirete" %} Dal 2017 l'Estonia tiene catasto, anagrafe e previdenza in un data center in Lussemburgo, dentro un'enclave con garanzie di immunità simili a quelle di una sede diplomatica e chiavi di cifratura che controlla soltanto Tallinn. Il modello si sta diffondendo, e il suo limite è istruttivo: l'immunità di un'ambasciata dei dati è un'obbligazione bilaterale fra due Stati, e regge finché regge il rapporto fra i due, cioè la variabile da cui ci si voleva rendere indipendenti. Accanto al paper di Grogan la scheda mostra due soluzioni che falliscono su fronti opposti: l'ambasciata protegge bene un archivio fermo e non dice nulla su chi lo elabora, i pesi aperti garantiscono l'elaborazione e presuppongono che qualcuno continui a produrli. Un paese che volesse un'intelligenza artificiale propria avrebbe bisogno di entrambe le cose, e una barriera sui pesi gliene toglierebbe una.

{% scheda "2026-09-27-crescenzi-ambasciate-dati-guerredirete" %}

## Le autostrade, di nuovo

Resta la domanda da cui è partita questa serie. Alla fine degli anni Novanta le autostrade dell'informazione promettevano una rete sola, aperta a chiunque avesse un modem; da allora si sono chiuse in una rete occidentale, una cinese e una russa, forse domani in una indiana. La parola che si usa per dirlo, *splinternet*, confonde però cose diverse, e lo studio di Julien Nocetti per l'Ifri le separa: la frammentazione tecnica dei protocolli incompatibili, quella geopolitica dei blocchi di Stato, quella commerciale delle piattaforme proprietarie.{% rif "2024-02-01-nocetti-splintered-internet-ifri" %} Il confronto fra quattro strategie mostra la Cina che costruisce standard, cavi e applicazioni propri, la Russia che punta alla scissione, l'India sospesa fra una terza via e la dipendenza dalla Silicon Valley, l'Unione europea che resiste per via normativa invece che tecnica. E contiene un dato che ridimensiona la nostalgia per la rete aperta: le tredici identità dei server radice del DNS sono controllate da nove organizzazioni americane, due europee e una giapponese. La rete degli anni Novanta era aperta nei protocolli e concentrata nella proprietà, ed è per questo che la frammentazione può essere rivendicata come emancipazione anche da chi ne paga il prezzo.

Il prezzo, quando la si pratica fino in fondo, è alto. Il rapporto di Maria Domańska e Katarzyna Chawryło per il Centro di studi orientali di Varsavia registra, nel solo giugno 2025, 655 blocchi regionali della rete russa, più di quanti se ne fossero contati nel mondo in tutto il 2024, e il passaggio alle whitelist in almeno trenta regioni; ogni ora di blocco della rete mobile in una regione costa circa 750 milioni di rubli.{% rif "2025-12-19-osw-great-russian-firewall" %} L'internet sovrano di Mosca funziona, e si paga in crescita e produttività: è la versione estrema del costo che le sezioni precedenti attribuivano a chi resta fuori dal recinto, qui scelto invece che subito.

Il pezzo che lega lo splinternet a Nvidia è quello di Mailyn Fidler per Sciences Po.{% rif "2025-06-01-fidler-splinternet-outward-turn-sciencespo" %} Fidler osserva che dal 2024 la frammentazione ha cambiato direzione: serve sempre meno a controllare la rete dentro i propri confini e sempre più a degradare quella altrui, e fra le forme di questa frammentazione rivolta all'esterno mette al primo posto i controlli sull'esportazione di semiconduttori e componenti per l'intelligenza artificiale. I chip di Nvidia sono quindi, oggi, uno degli strumenti principali con cui la rete si divide. Joanna Kulesza descrive l'esito istituzionale dello stesso movimento: la governance multistakeholder resta in piedi nella forma, mentre l'autorità migra verso gli Stati, che legiferano per via di sicurezza e di commercio, e la fiducia in un fornitore smette di poggiare sulla verifica tecnica per poggiare sull'allineamento politico.{% rif "2026-01-04-kulesza-internet-governance-2026-circleid" %}

{% scheda "2025-06-01-fidler-splinternet-outward-turn-sciencespo" %}

Messe accanto all'intervista di Huang, queste schede mi portano a una risposta più netta di quella da cui ero partito. La strategia di Nvidia somiglia alla diffusione del web in un solo senso, perché vuole il mercato più largo possibile. Il web degli anni Novanta si è diffuso su protocolli pubblici; la diffusione di cui parla Huang passa per i chip di un solo fornitore, sottoposti a un regime di esportazione deciso a Washington, e nell'intervista con Klein lo dice apertamente, quando indica come ambizione americana un mondo che giri sullo stack tecnologico americano come gira sul dollaro e sull'inglese. Una rete così si allarga lungo le linee dell'allineamento politico che Kulesza descrive, e il suo casello coincide con lo strumento che secondo Fidler divide la rete. Se le autostrade si riapriranno dipende allora da ciò che Nvidia non controlla: dalla possibilità che i pesi continuino a circolare anche dove i chip non arrivano, cioè proprio dai modelli aperti che il recinto vorrebbe contenere.

{% controtesi "2026-09-25-grandcontinent-sicurezza-ai-cina-stati-uniti" %}
Il *Grand Continent* riporta l'argomento di Cheryl Wu, economista a Yale, contro la premessa che circola in entrambe le capitali: un ritardo nelle capacità non implica un ritardo negli incidenti.{% rif "2026-09-25-grandcontinent-sicurezza-ai-cina-stati-uniti" %} La diffusione dei modelli a pesi aperti sottrae al produttore il controllo su come e da chi vengono usati, e dentro i laboratori cinesi non risulta alcun valutatore indipendente, per cui meno incidenti segnalati non vuol dire meno incidenti. Anche Zúñiga riconosce che la distillazione su larga scala dei modelli americani da parte di sviluppatori cinesi è un problema reale. Una parte della preoccupazione per i modelli aperti ha dunque fondamento, e una barriera potrebbe essere legittima.
{% endcontrotesi %}

La controtesi non cancella la tesi, e le restituisce il criterio con cui si chiudeva la prima catena. Una regola mossa dalla sicurezza dovrebbe chiedere valutazione indipendente e segnalazione degli incidenti a chiunque, cominciando dai laboratori americani e dai loro deployment interni; una regola mossa dall'interesse chiederà licenze e soglie che pesano soprattutto sui modelli aperti e su chi li usa. Nei prossimi mesi i testi di legge diranno quale delle due ha prevalso, e con essa quanti paesi potranno permettersi un'intelligenza artificiale che non dipenda da un permesso altrui.
