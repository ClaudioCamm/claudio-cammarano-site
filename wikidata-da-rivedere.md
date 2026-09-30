# Wikidata — voci da rivedere

Allineate: **258 su 324**. Restano **66** voci senza `sameAs`.

Giro del 30 settembre 2026, sera — agganciate le sei voci dell'apparato sulla crisi della replicazione: `Fisher, Ronald Aylmer` (Q216723), `Gelman, Andrew` (Q4757073), `Ioannidis, John` (Q6251482), `crisi della replicazione` (Q25303778), `preregistrazione` (Q60752967), `giardino dei sentieri che si biforcano` (Q121365276).

Giro del 30 settembre 2026, pomeriggio — agganciate: `Popper, Karl` (Q81244), `Jaynes, Edwin Thompson` (Q711210), `Error and the Growth of Experimental Knowledge` (Q140105163), `inferenza bayesiana` (Q812535), `p-value` (Q253255). Tre scartate con motivo, in sezione A.

Da verificare, aggiunte il 30 settembre 2026 con l'apparato bayesiani/frequentisti: `Popper, Karl`, `Jaynes, Edwin Thompson`, `Probability Theory: The Logic of Science`, `Error and the Growth of Experimental Knowledge`, `inferenza bayesiana`, `statistica dell'errore`, `guerre della statistica`, `conflitto di interessi intellettuale`. Sulle ultime due non mi aspetto corrispondenze: `error statistics` e il conflitto d'interessi intellettuale sono formulazioni di Mayo, non termini con voce propria.

Ultimo giro: 30 settembre 2026 — Peirce, Mayo, test severo.

Regola applicata: aggancio accettato solo con corrispondenza esatta di label o alias **e** tipo (P31) compatibile, poi verifica a mano contro la nota della voce. Un Q-id sbagliato e' peggio di nessun Q-id.


## A — candidato trovato e scartato (26)

Qui Wikidata ha qualcosa con quel nome esatto, ma non e' la tua voce. Servono i tuoi occhi.

- **Anduril** *(istituzione)* — I match esatti sono la spada di Tolkien e un framework software. L'azienda non compare con questo label.

- **giardino dei sentieri che si biforcano** *(teoria)*, secondo candidato — `garden of forking paths` restituisce anche **Q120986778 scartato**, che è una pagina di disambiguazione di Wikimedia e rimanda in prima istanza al racconto di Borges. La voce è agganciata invece a **Q121365276**, `forking paths problem`, descritto come «fallacy in statistical hypothesis testing». Nota metodologica: qui l'aggancio non passa dalla corrispondenza di etichetta, perché il nome italiano segue la metafora di Gelman e Loken mentre Wikidata usa il nome descrittivo; passa dall'identità di concetto, confermata dalla descrizione. È l'eccezione consentita alla regola dell'etichetta esatta, e va dichiarata quando si applica.

- **Ioannidis, John** *(persona)* — **Q6251482 confermato** il 30 settembre 2026 con una chiamata su `P108`: fra i datori di lavoro compare Q41506, Stanford University. L'etichetta italiana dell'elemento è «John P. A. Ioannidis», la forma con cui firma il paper del 2005, e la data di nascita è il 21 agosto 1965. La riserva è caduta. Restano non verificate `P27` (cittadinanza) e `P19` (luogo di nascita): per questo la nota della voce è stata alleggerita, e il campo `geo` resta impostato a Stati Uniti e Grecia su base non confermata — una chiamata su quelle due proprietà lo chiuderebbe.

- **statistica dell'errore** *(teoria)* — `frequentist inference` restituisce **Q2158281, scartato**, e lo scarto è il punto della voce. Quell'elemento descrive l'inferenza frequentista come famiglia di tecniche; la voce nomina la posizione filosofica specifica di Mayo, e la nota dice esplicitamente che quel nome è preferibile al generico frequentismo proprio perché le distingue. Agganciarla lì identificherebbe la tesi con la famiglia che la contiene: è l'errore che questa sezione esiste per evitare.

- **conflitto di interessi intellettuale** *(teoria)* — `conflict of interest` restituisce **Q211067, scartato**, stesso errore di categoria: il conflitto d'interessi generico è il genere, la formulazione di Mayo è la specie, e la specie su Wikidata non c'è. Gli altri match sono quattro episodi di serie televisive.

- **Probability Theory: The Logic of Science** *(testo)* — due candidati, **entrambi scartati**. Q105611991 è dato come pubblicato nel 2013, anno che contraddice la nota; Q135651180 si dichiara «2003 hardcover edition», cioè un elemento a livello di edizione e non di opera. Tutti i ventidue `testo` già in indice usano elementi d'opera, nessuno di stampa, e non vale rompere la regola per ottenere una simmetria. **Nota per te:** ne risulta un'asimmetria visibile, perché i due libri si fronteggiano nell'indice e uno solo è ancorato. Si recupera appena compare un elemento d'opera.

- **coscienza fenomenica** *(teoria)* — **Q11573483 scartato**, controllo eseguito il 30 settembre 2026: `P31` vuoto, nessun sitelink inglese, label solo in inglese. E' un elemento nudo, e per il criterio scritto nella sezione C si scarta. Vale la pena aggiungere la ragione di merito: non e' una coniazione recente ma il termine di Ned Block dei primi anni Novanta, con trent'anni di letteratura dietro; se una nozione con quella storia su Wikidata e' solo un'etichetta senza tipo e senza voce enciclopedica, l'aggancio asserirebbe un'identificazione che l'elemento non sostiene. La voce resta ancorata soltanto in /ns/.

  **Da sciogliere, incoerenza fra tre file.** Questa riga motiva lo scarto citando `epistemia` come precedente scartato, ma l'archivio dice altro: `conceptsIndex.js` (riga 1895) ha `sameAs: Q138835467` e `scripts/wikidata/decisioni.json` lo registra come accettato. Due file su tre dicono accettato, e la sezione A qui sotto dice scartato. Probabilmente e' questo file a essere rimasto indietro dopo un'accettazione successiva — ma e' una decisione tua, e non tocco un `sameAs` esistente per allineare un registro.
- **Palantir** *(istituzione)* — I match esatti sono i palantiri di Tolkien. L'azienda non compare con questo label.
- **Frey, Jennifer** *(persona)* — I match sono una giornalista del Washington Post e una generica 'researcher'. La filosofa non e' identificabile con certezza.
- **Karp, Alexander** *(persona)* — Nessun candidato e' il CEO di Palantir: i match esatti sono tre matematici omonimi.
- **GEO** *(teoria)* — Match esatti su una rivista tedesca, un marchio GM e il genoma. La Generative Engine Optimization non ha ancora un item.
- **Tit-for-Tat** *(teoria)* — L'unico match esatto e' un film del 1906. La strategia esiste su Wikidata sotto un altro label.
- **WEIRD** *(teoria)* — Match esatti su un sottogenere horror, un singolo musicale e un concetto mitologico.
- **costruttivismo** *(teoria)* — Q207103 e' il costruttivismo russo in arte e architettura. La tua voce e' la postura epistemologica: va scelta a mano fra social constructionism e constructivism (philosophy of science).
- **dual use** *(teoria)* — Match esatti su un tipo di operazione elicotteristica e su un articolo scientifico.
- **epistemia** *(teoria)* — Q138835467 esiste ma senza descrizione ne' tipo: non verificabile.
- **morte dell'autore** *(teoria)* — Q2166649 e' *The Death of the Author*, il saggio di Barthes del 1967, non la tesi. Stesso caso di extended mind: la voce e' il concetto, l'unico match e' il testo. Scartato.
- **extended mind** *(teoria)* — L'unico match esatto e' Q1362699, l'articolo di Clark e Chalmers (1998), non la tesi.
- **general purpose technologies** *(teoria)* — Unico match esatto: un articolo scientifico.
- **sovranità cognitiva** *(teoria)* — Q141256368 e' un costrutto del 2026 di F. S. Canepa, di significato diverso dal tuo.
- **watermarking** *(teoria)* — Q875932 e' la filigrana della carta, non il watermarking crittografico degli output LLM.
- **La condition postmoderne** *(testo)* — Q131715313 e' privo di descrizione, probabilmente un'edizione. L'opera ha un item diverso, da scegliere a mano.
- **The Embodied Mind** *(testo)* — Quattro match, tutti edizioni prive di descrizione.
- **The End of History and the Last Man** *(testo)* — Q1340341 e' il concetto 'fine della storia', non il libro; Q60412221 e' l'edizione 1992. Scegli tu quale dei due e' la tua voce.
- **Meaney, Thomas** *(persona)* — L'unico match esatto e' Q7792360, un politico irlandese. Il direttore di Granta non ha un item.
- **idea di Occidente** *(teoria)* — Q160381 *Western world* e' l'insieme dei paesi di cultura originariamente europea, cioe' una regione culturale, non la storia del termine. Errore di categoria, stesso caso di morte dell'autore. Scartato.
- **divario di efficienza dei dati** *(teoria)* — Q5227281 *Data efficiency* e' privo di descrizione e quindi non verificabile, e in ogni caso l'efficienza dei dati in generale non e' il divario fra bambino e modello. Scartato per entrambe le ragioni.
- **monocausalita** *(teoria)* — `monocausal explanation` non restituisce nulla; Q206829 *reductionism* e' la riduzione di un livello di descrizione alle sue parti, non la riduzione a una causa sola. Errore di categoria, scartato. Resta ancorata solo in /ns/, come gli altri conii.


## B — nessuna corrispondenza esatta (76)

In buona parte sono coniazioni tue, acronimi, o formulazioni italiane che su Wikidata esistono sotto un label diverso (spesso inglese). Una seconda passata con corrispondenza allentata ne recupererebbe stimati 30-40, ma richiede una scelta caso per caso.

- **test severo** *(teoria)* — verificato il 30 settembre 2026. `severity` restituisce un videogioco del 2009, un modificatore clinico, un indice di gravita' della malattia, l'arcangelo Samael e una voce di dizionario (Q19358103, «intensity, seriousness or critical state»). Nessuno e' lo standard di Mayo. Resta senza `sameAs`.


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
- criti-hype
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

## C — voci sospese (0)

Nessuna sospesa. Chiusa il 30 settembre 2026: `coscienza fenomenica` è passata in sezione A.

### Archivio del controllo eseguito

- **coscienza fenomenica** *(teoria)* — `phenomenal consciousness` restituisce **Q11573483**, label esatto, ma **senza descrizione**. Gli altri match sono un libro del 2011 e due articoli scientifici, quindi scartati. Non lo agganciamo finche' non sappiamo che tipo di elemento sia: un label esatto senza descrizione puo' essere un concetto tipizzato, una disambigua o un elemento vuoto, e il precedente `epistemia` (Q138835467) e' stato scartato proprio per questo. Il controllo e' una chiamata sola:

```
curl -s -G "https://www.wikidata.org/w/api.php" \
  --data-urlencode "action=wbgetentities" \
  --data-urlencode "ids=Q11573483" \
  --data-urlencode "props=claims|sitelinks|descriptions" \
  --data-urlencode "languages=en" \
  --data-urlencode "format=json" \
| python3 -c "import json,sys; d=json.load(sys.stdin)['entities']['Q11573483']; print('P31:', [c['mainsnak']['datavalue']['value']['id'] for c in d.get('claims',{}).get('P31',[])]); print('sitelink en:', d.get('sitelinks',{}).get('enwiki',{}).get('title','nessuno'))"
```

Se `P31` contiene un tipo concettuale e c'e' un sitelink inglese sensato, si aggancia; se e' una disambigua (Q4167410) o non c'e' nulla, si scarta e la voce resta ancorata solo in /ns/.


## D — verificati in anticipo, per nodi non ancora creati

- **falsificabilità** — `falsifiability` restituisce **Q220888**, definizione esatta: «property of a theory/hypothesis/statement that can be logically contradicted by an empirical test or a fact». Oggi vive dentro la nota di `Popper, Karl` e non ha voce propria; se verrà scorporata, il Q-id è pronto.

- **abduzione** — `abductive reasoning` restituisce **Q308495**, definizione esatta («form of logical inference that seeks the best conclusion that explains a set of given observations»). Il concetto e' oggi dentro la nota di Peirce e non ha voce propria: quando avra' due casi in archivio e verra' scorporato, il Q-id e' pronto.
