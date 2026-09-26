# Wikidata — voci da rivedere

Allineate automaticamente: **169 su 261**. Restano **92** voci senza `sameAs`.

Regola applicata: aggancio accettato solo con corrispondenza esatta di label o alias **e** tipo (P31) compatibile, poi verifica a mano contro la nota della voce. Un Q-id sbagliato e' peggio di nessun Q-id.


## A — candidato trovato e scartato (17)

Qui Wikidata ha qualcosa con quel nome esatto, ma non e' la tua voce. Servono i tuoi occhi.

- **Anduril** *(istituzione)* — I match esatti sono la spada di Tolkien e un framework software. L'azienda non compare con questo label.
- **Palantir** *(istituzione)* — I match esatti sono i palantiri di Tolkien. L'azienda non compare con questo label.
- **Frey, Jennifer** *(persona)* — I match sono una giornalista del Washington Post e una generica 'researcher'. La filosofa non e' identificabile con certezza.
- **Karp, Alexander** *(persona)* — Nessun candidato e' il CEO di Palantir: i match esatti sono tre matematici omonimi.
- **GEO** *(teoria)* — Match esatti su una rivista tedesca, un marchio GM e il genoma. La Generative Engine Optimization non ha ancora un item.
- **Tit-for-Tat** *(teoria)* — L'unico match esatto e' un film del 1906. La strategia esiste su Wikidata sotto un altro label.
- **WEIRD** *(teoria)* — Match esatti su un sottogenere horror, un singolo musicale e un concetto mitologico.
- **costruttivismo** *(teoria)* — Q207103 e' il costruttivismo russo in arte e architettura. La tua voce e' la postura epistemologica: va scelta a mano fra social constructionism e constructivism (philosophy of science).
- **dual use** *(teoria)* — Match esatti su un tipo di operazione elicotteristica e su un articolo scientifico.
- **epistemia** *(teoria)* — Q138835467 esiste ma senza descrizione ne' tipo: non verificabile.
- **extended mind** *(teoria)* — L'unico match esatto e' Q1362699, l'articolo di Clark e Chalmers (1998), non la tesi.
- **general purpose technologies** *(teoria)* — Unico match esatto: un articolo scientifico.
- **sovranità cognitiva** *(teoria)* — Q141256368 e' un costrutto del 2026 di F. S. Canepa, di significato diverso dal tuo.
- **watermarking** *(teoria)* — Q875932 e' la filigrana della carta, non il watermarking crittografico degli output LLM.
- **La condition postmoderne** *(testo)* — Q131715313 e' privo di descrizione, probabilmente un'edizione. L'opera ha un item diverso, da scegliere a mano.
- **The Embodied Mind** *(testo)* — Quattro match, tutti edizioni prive di descrizione.
- **The End of History and the Last Man** *(testo)* — Q1340341 e' il concetto 'fine della storia', non il libro; Q60412221 e' l'edizione 1992. Scegli tu quale dei due e' la tua voce.

## B — nessuna corrispondenza esatta (75)

In buona parte sono coniazioni tue, acronimi, o formulazioni italiane che su Wikidata esistono sotto un label diverso (spesso inglese). Una seconda passata con corrispondenza allentata ne recupererebbe stimati 30-40, ma richiede una scelta caso per caso.


**istituzione**

- 77 Brigade
- Cannes Lions
- Netcomm Forum

**luogo**

- Bergamo / Val Brembana
- Iran 1978–79
- Libano / Beirut
- Mediterraneo come spazio strategico
- Taiwan / TSMC

**persona**

- Brose, Christian
- Dondi, Ilaria Maria
- Ottaviani, Jacopo

**teoria**

- allineamento AI
- antifragilità
- armi autonome
- atti illocutori
- capitale semantico
- capitale simbolico
- cigni neri
- controllo riflessivo
- cosmotecnica
- dati come beni comuni
- delega epistemica
- democrazia di guerra
- dilemma del prigioniero iterato
- dilemma di Collingridge
- disuguaglianze
- dottrina Gerasimov
- dragon-restaurant diplomacy
- drone democracy
- educazione estetica
- embodied mind
- ermeneutica del sospetto
- fattore di sconto δ
- free-energy principle
- guadagno epistemico
- Hunhu/Ubuntu
- incredulità verso le metanarrazioni
- industria dell'animazione
- industrie creative
- inemendabilità della realtà
- iperattenzione
- iperoggetti
- istituzioni inclusive vs. estrattive
- legge della varietà richiesta
- LLM come attante zero
- marketing valoriale
- memoria storica
- mezza attenzione
- monitorabilità
- moral deskilling
- narrazione interattiva
- neghentropia
- news avoidance
- paradigma tecnocratico
- patto sociale
- piano dei regimi
- piccola impresa
- polarizzazione cognitiva
- post-cognition
- ragione comunicativa
- sfiducia sistemica
- shadow of the future
- successione aziendale
- tassonomia D1–D7
- trasferimenti monetari diretti
- two-level games
- two-pizza team
- verum ipsum factum
- violenza speculativa
- win-set domestico

**teoria**

- cattura regolatoria
- criti-hype
- modelli a pesi aperti

**persona**

- Huang, Jensen

**istituzione**

- Nvidia

**testo**

- Digital News Report
- Le Fake News e il Marketing del Vero
- Stratechery
- The Technium
- Why Nations Fail

---

Per aggiungerne una: apri `src/_data/conceptsIndex.js`, trova la voce e inserisci sotto `type:` la riga

```js
    sameAs: ["https://www.wikidata.org/wiki/Q12345"],
```

Il build la propaga da solo: nessun'altra modifica serve.
