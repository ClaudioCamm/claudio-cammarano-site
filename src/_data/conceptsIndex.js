/**
 * Indice concettuale del sito.
 *
 * Tipi:
 *   persona     — persona fisica, autore, pensatore, figura storica
 *   teoria      — teoria, modello, concetto tecnico con peso argomentativo
 *   testo       — opera, libro, articolo citato con ruolo strutturale
 *   istituzione — organizzazione, ente, agenzia con ruolo argomentativo
 *   luogo       — luogo geografico con ruolo argomentativo (non tag tematico)
 *   paese       — stato o area geopolitica con ruolo argomentativo ricorrente
 *
 * Un concetto presente in più articoli è un nodo di navigazione reale.
 * Concetti in un solo articolo sono comunque inclusi se hanno peso distintivo.
 *
 * Workflow: al momento della pubblicazione di un nuovo articolo, aggiungere
 * i concetti rilevanti come nuove entry o come nuovi articoli a entry esistenti.
 */

module.exports = [

  // ─── PERSONE ──────────────────────────────────────────────────────────────

  {
    name: "Descartes, René",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia"] },
    related: [
      { name: "embodied mind", why: "Il paradigma nasce per smontare Cartesio: senza corpo non c'è mente nel senso pieno." },
      { name: "Discours de la méthode", why: "Cartesio nel 1637 demolisce le proprie certezze e si tiene una morale provvisoria per il tempo dei lavori." },
      { name: "Spinoza, Baruch", why: "Dove Cartesio separa le due sostanze, Spinoza le tiene come due attributi di una sola." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q9191", "https://it.wikipedia.org/wiki/Cartesio"],
    note: "Filosofo e matematico francese (1596–1650), fondatore del dualismo mente/corpo (res cogitans / res extensa). Nel sito compare come punto di partenza per la critica embodied — senza corpo non c'è mente nel senso pieno — e come autore del Discours de la méthode, modello del pensatore che demolisce le fondamenta del sapere adottando una «morale provvisoria» conservatrice nel frattempo.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Foucault, Michel",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia"] },
    related: [
      { name: "Eco, Umberto", why: "La stessa stagione teorica produce chi dissolve i fatti nel discorso e chi li difende dal discorso." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q44272", "https://it.wikipedia.org/wiki/Michel_Foucault"],
    note: "Filosofo francese (1926–1984). Nel sito appare come autore il cui post-strutturalismo è stato «appreso in modo deteriore» da Orbán, Trump e Putin: la tesi che tutto sia effetto di discorso viene usata dai populisti per negare la resistenza della realtà agli schemi mentali. Il sito ricorda anche il suo entusiasmo per la rivoluzione iraniana del 1978 — caso esemplare dei rischi dell'antiilluminismo.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Derrida, Jacques",
    related: [
      { name: "ermeneutica del sospetto", why: "La decostruzione e lo smascheramento delle ideologie condividono il gesto che, rovesciato, diventa cinismo politico." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q130631", "https://it.wikipedia.org/wiki/Jacques_Derrida"],
    note: "Filosofo algerino-francese (1930–2004), fondatore della decostruzione. Nel sito è citato insieme a Foucault come fonte del post-strutturalismo deviato: la decostruzione come strumento critico si rovescia in cinismo politico quando viene adottata da chi vuole dissolvere ogni fondamento normativo. Teorico della differenza e della traccia.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Averroè",
    related: [
      { name: "disputa sugli universali", why: "L'intelletto unico separato che pensa attraverso gli individui pone la stessa domanda: dove stanno i contenuti, se non nel singolo." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Spagna"] },
    sameAs: ["https://www.wikidata.org/wiki/Q39837", "https://it.wikipedia.org/wiki/Averro%C3%A8"],
    note: "Filosofo e medico andaluso (1126–1198), commentatore principale di Aristotele nel mondo islamico medievale. Nel sito è usato per avvicinare la struttura dei LLM: il suo intelletto unico separato che «pensa attraverso gli individui» anticipa metaforicamente un grande modello linguistico come bacino di sapere collettivo a cui ci si connette temporaneamente.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Kahneman, Daniel",
    related: [
      { name: "inferenza bayesiana", why: "Il metro su cui misura lo scarto: gli euristici umani violano l'aggiornamento bayesiano in modi regolari, a partire dalla base rate." },
      { name: "shadow of the future", why: "Sistema 1 e Sistema 2 applicati alla cooperazione: l'ombra del futuro chiede il pensiero lento, che è energeticamente costoso." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Israele", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q233950", "https://it.wikipedia.org/wiki/Daniel_Kahneman"],
    note: "Psicologo e Premio Nobel israeliano-americano (1934–2024). Nel sito compare in due contesti: in L'ombra del futuro per la distinzione Sistema 1 / Sistema 2 applicata alla cooperazione; in La dialettica dell'antilluminismo per mostrare che il pensiero lento è energeticamente costoso, e l'incertezza prolungata produce pressione verso la risoluzione anche a costo di sbagliare la risposta.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "The Climate Crisis Is Bigger Than Your Footprint", url: "/curated/2026-08-31-stokes-carbon-footprint-bp-mitpress/", _source: "curated" }
    ]
  },
  {
    name: "Taleb, Nassim Nicholas",
    related: [
      { name: "Antifragile", why: "Il libro in cui formalizza la distinzione fra sistemi fragili, robusti e antifragili." },
      { name: "cigni neri", why: "I cigni neri sono l'altra metà della sua epistemologia del rischio: le code spesse che la statistica gaussiana sottostima." },
      { name: "antifragilità", why: "L'antifragilità è il cuore della sua epistemologia del rischio, insieme ai cigni neri e allo skin in the game." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Libano", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q333521", "https://it.wikipedia.org/wiki/Nassim_Nicholas_Taleb"],
    note: "Matematico e saggista libanese-americano (1960). Nel sito è presentato come uno dei pochi pensatori veramente nuovi degli ultimi venticinque anni: ex trader, ha costruito un'epistemologia del rischio basata su cigni neri, antifragilità e skin in the game. Libanese di Amioun, fa del Libano un uso teorico costante come laboratorio della complessità caotica.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "Axelrod, Robert",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "The Evolution of Cooperation", why: "Axelrod mette in gara le strategie del dilemma iterato; l'esito è un libro in cui vince la più semplice." },
      { name: "shadow of the future", why: "Dal torneo di Axelrod esce la condizione: si coopera se ci si aspetta di incontrarsi ancora." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q583438", "https://en.wikipedia.org/wiki/Robert_Axelrod_(political_scientist)"],
    note: "Politologo americano (1943). Nel sito è il protagonista del torneo computazionale del dilemma del prigioniero: ha dimostrato che Tit-for-Tat vince in ambienti iterati. Il suo The Evolution of Cooperation (1984) è il punto di partenza teorico della serie «Ombre»: il lavoro che ha dato base scientifica all'idea che la cooperazione sia razionale.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" }
    ]
  },
  {
    name: "Putnam, Robert",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "two-level games", why: "Putnam nel 1988 mostra che ogni leader negozia su due tavoli, e deve chiuderli tutti e due." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q351815", "https://it.wikipedia.org/wiki/Robert_D._Putnam"],
    note: "Politologo americano (1941–2024). Nel sito è citato per la teoria dei two-level games (1988): ogni leader negozia simultaneamente su un tavolo internazionale e uno domestico, e l'accordo è raggiungibile solo se i win-set si intersecano. Noto anche per Bowling Alone (2000) sul declino del capitale sociale americano.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Lyotard, Jean-François",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia"] },
    related: [
      { name: "incredulità verso le metanarrazioni", why: "Lyotard diagnostica nel 1979 la fine dei grandi racconti di legittimazione. Descriveva, non prescriveva." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q193257", "https://it.wikipedia.org/wiki/Jean-Fran%C3%A7ois_Lyotard"],
    note: "Filosofo francese (1924–1998). Nel sito è l'autore della diagnosi dell'incredulità verso le metanarrazioni (La condition postmoderne, 1979): la perdita di legittimità dei grandi sistemi di giustificazione illuministi. Il sito sottolinea che Lyotard descriveva un fatto, non prescriveva una norma — a differenza dei suoi epigoni.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Habermas, Jürgen",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Germania"] },
    related: [
      { name: "ragione comunicativa", why: "Habermas definisce la ragione comunicativa come l'universale minimo che sopravvive al relativismo." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q76357", "https://it.wikipedia.org/wiki/J%C3%BCrgen_Habermas"],
    note: "Filosofo tedesco (1929). Nel sito è l'ancoraggio dell'universalismo minimo: ogni volta che argomentiamo presupponiamo già norme condivise — la struttura pragmatica dell'argomentazione richiede che la migliore argomentazione possa prevalere sulla forza. Questo è l'universale che il relativismo non può abolire senza autocontraddirsi.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Ferraris, Maurizio",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    related: [
      { name: "inemendabilità della realtà", why: "Ferraris torna indietro dal poststrutturalismo e trova il punto in cui la realtà non cede." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q3848721", "https://it.wikipedia.org/wiki/Maurizio_Ferraris"],
    note: "Filosofo italiano (1956), ha percorso a ritroso la strada dal poststrutturalismo al nuovo realismo. Nel sito è citato per il concetto di inemendabilità della realtà: senza sapere condiviso non rimane libertà di interpretare, ma solo il potere di chi ha forza sufficiente per far valere la propria narrazione.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Eco, Umberto",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q12807", "https://it.wikipedia.org/wiki/Umberto_Eco"],
    note: "Semiologo, scrittore e intellettuale pubblico italiano (1932–2016). Nel sito è figura centrale: mente combinatoria capace di fondare istituzioni (DAMS, Comunicazione, Master in Editoria), «terapista wittgensteiniano del discorso pubblico». La sua lezione: la realtà resiste ai nostri schemi mentali, non è tutto soltanto un effetto di discorso.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Yarros, Rebecca",
    related: [
      { name: "piano dei regimi", why: "«Fourth Wing» è il caso della banda della conferma: consegna al lettore le attese con cui è entrato, e resta sotto lo zero." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q121091992", "https://it.wikipedia.org/wiki/Rebecca_Yarros"],
    note: "Scrittrice statunitense (1981). Nel sito «Fourth Wing» è il caso della banda della conferma: consegna al lettore le attese di genere con cui è entrato, e ciò che fa davvero non sta sul piano dei regimi. Contrae la varianza fra i produttori e insieme allarga la popolazione dei riceventi, due effetti di segno opposto tenuti sotto un solo coefficiente.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Hesse, Hermann",
    related: [
      { name: "guadagno epistemico", why: "La sindrome di Siddharta è il caso limite della misura: spostamento massimo del lettore, guadagno nullo rispetto al mondo." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Germania", "Svizzera"] },
    sameAs: ["https://www.wikidata.org/wiki/Q25973", "https://it.wikipedia.org/wiki/Hermann_Hesse"],
    note: "Scrittore tedesco (1877–1962). Nel sito dà il nome alla «sindrome di Siddharta», il caso in cui un testo sposta molto il lettore senza avvicinarlo al mondo. Il nome tradisce in parte il romanzo, dove i movimenti laterali sono le tappe necessarie di un percorso che converge: la discrepanza isola la distinzione fra guadagno per testo e guadagno per traiettoria.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Joyce, James",
    related: [
      { name: "guadagno epistemico", why: "«Finnegans Wake» mostra l'errore formale: l'efficienza con cui un testo arriva non è sua proprietà, dipende dal ricevente." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Irlanda", "Regno Unito", "Francia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q6882", "https://it.wikipedia.org/wiki/James_Joyce"],
    note: "Scrittore irlandese (1882–1941). Nel sito «Finnegans Wake» è il caso che dimostra un errore formale nell'equazione del valore: l'efficienza con cui un testo arriva a destinazione non è una proprietà del testo, ma dipende dal ricevente. Lo stesso libro sta nella singolarità dell'origine per il lettore ordinario e in alto a destra per lo specialista.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Dostoevskij, Fëdor",
    related: [
      { name: "piano dei regimi", why: "I «Fratelli Karamazov» sono l'emblema del regime dell'apertura: il lettore esce con più voci in gioco di quante ne avesse entrando." },
      { name: "Yarros, Rebecca", why: "I due poli dello stesso piano: la conferma restituisce al lettore ciò con cui è entrato, l'apertura gliene toglie la comodità." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Russia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q991", "https://it.wikipedia.org/wiki/F%C3%ABdor_Dostoevskij"],
    note: "Scrittore russo (1821–1881). Nel sito è l'emblema del regime dell'apertura: la struttura polifonica dei «Fratelli Karamazov» lascia il lettore con più voci in gioco di quante ne avesse entrando, e questo ha valore perché il mondo contiene un conflitto morale irriducibile. Il caso che obbliga a togliere alla struttura lo statuto di co-requisito del valore.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" },
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "Tolstoj, Lev",
    related: [
      { name: "drone democracy", why: "La difesa ucraina è tolstojana: la guerra si protrae perché il popolo non cede, e i leader diventano accessori." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Russia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q7243", "https://it.wikipedia.org/wiki/Lev_Tolstoj"],
    note: "Scrittore russo (1828–1910). Nel sito compare come caso di osservazione genuina: «Guerra e pace» è costruito su archivi, reduci interrogati e ricognizioni sui campi di battaglia, e i suoi capitoli saggistici sono la traccia visibile di un autore che sposta il proprio prior mentre scrive. «Resurrezione» è invece il caso in cui il giudizio su un testo dipende interamente da chi fornisce la distribuzione di riferimento.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Wack, Pierre",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia"] },
    related: [
      { name: "scenario planning", why: "Wack lo sviluppa in Shell negli anni Settanta, per rompere i modelli mentali del management." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q7192488", "https://en.wikipedia.org/wiki/Pierre_Wack"],
    note: "Manager e pensatore strategico francese (1922–1997). Nel sito è citato come padre dello scenario planning: lavorando in Shell negli anni Settanta, ha sviluppato la tecnica di costruire scenari alternativi per rompere i modelli mentali del management e preparare l'organizzazione all'imprevedibile. Il suo metodo è il quadro teorico del rifiuto di Amodei al Pentagono.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
    ]
  },
  {
    name: "Amodei, Dario",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Anthropic", why: "L'ha fondata nel 2021 con altri transfughi da OpenAI, e la guida." },
      { name: "Hegseth, Pete", why: "Le due parti dello stesso rifiuto: la richiesta di partnership militare e il no che la chiude." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q103335665", "https://it.wikipedia.org/wiki/Dario_Amodei"],
    note: "CEO e cofondatore di Anthropic (1983). Nel sito è la figura centrale dell'articolo sul rifiuto di un contratto con il Pentagono: ha usato lo scenario planning per valutare i rischi a lungo termine dell'AI militarizzata, scegliendo di dire no a Pete Hegseth. Incarna la tensione tra sviluppo AI e responsabilità strategica.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "When AI builds itself", url: "/curated/2026-06-19-anthropic-recursive-self-improvement/", _source: "curated" },
      { title: "Intelligenza artificiale e rischio estinzione, che cosa pensano (davvero) gli scienziati?", url: "/curated/2026-09-26-signorelli-rischio-estinzione-scienziati-backdoor/", _source: "curated" }
    ]
  },
  {
    name: "Gerasimov, Valery",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Russia"] },
    related: [
      { name: "dottrina Gerasimov", why: "Sistematizza le «misure attive» sovietiche; il nome di Gerasimov le è attribuito impropriamente." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q36073", "https://it.wikipedia.org/wiki/Valerij_Vasil'evi%C4%8D_Gerasimov"],
    note: "Generale russo, capo di Stato Maggiore (1955). Nel sito è citato per la dottrina della guerra ibrida che porta il suo nome (impropriamente): sistematizzazione delle «misure attive» sovietiche — disinformazione, amplificazione dei conflitti interni, finanziamento di fazioni opposte. La trappola che costruisce è letale: o la democrazia tollera il rumore e si dissolve, o lo sopprime e si nega.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Acemoglu, Daron",
    related: [
      { name: "istituzioni inclusive vs. estrattive", why: "La distinzione fra istituzioni inclusive ed estrattive è sua: nel sito è la chiave per le traiettorie di lungo periodo degli stati." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Turchia", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q718581", "https://it.wikipedia.org/wiki/Daron_Acemo%C4%9Flu"],
    note: "Economista turco-americano, Premio Nobel 2024 (1967). Nel sito è citato per Why Nations Fail (con Robinson): la distinzione tra istituzioni inclusive (che distribuiscono potere) e estrattive (che lo concentrano) come chiave per spiegare le traiettorie degli stati. Anche per la struttura del win-set domestico nelle negoziazioni internazionali.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Platone",
    related: [
      { name: "paideia", why: "Fonte classica del concetto: la formazione come coltivazione del carattere e del giudizio, non come addestramento a una tecnica." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Grecia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q859", "https://it.wikipedia.org/wiki/Platone"],
    note: "Filosofo ateniese (427–347 a.C.). Nel sito compare in due contesti: nell'insegnamento di Eco come contrasto alla figura di Alcibiade (la formazione non produce filosofi ma persone capaci di stare nel mondo); e nel Fedro come autore dell'immagine dello slancio verticale dello spirito, usata per discutere la natura del desiderio nell'intelligenza artificiale.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" },
      { title: "I'm a College Professor. Writing Isn't as Important as We Think.", url: "/curated/2026-09-29-cruz-scrittura-pensiero-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Spinoza, Baruch",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Paesi Bassi"] },
    sameAs: ["https://www.wikidata.org/wiki/Q35802", "https://it.wikipedia.org/wiki/Baruch_Spinoza"],
    note: "Filosofo olandese (1632–1677). Nel sito è citato per il parallelismo: res cogitans e res extensa non sono due sostanze separate (come in Cartesio) ma due attributi della stessa sostanza. Questa posizione è considerata antesignana dell'embodied mind: senza corpo non si dà cogito. Avrebbe sottoscritto la tesi dell'embodiment senza esitare.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Clark, Andy",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "extended mind", why: "Clark e Chalmers nel 1998 spostano il confine: il taccuino di Otto è memoria quanto il suo ippocampo." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q4760523", "https://en.wikipedia.org/wiki/Andy_Clark"],
    note: "Filosofo della mente britannico (1957). Nel sito è co-autore della tesi della extended mind (con Chalmers, 1998): non esiste un confine netto tra mente e strumenti — il taccuino di Otto fa parte della sua memoria tanto quanto il suo ippocampo. Ha anche contribuito al paradigma del cervello come macchina predittiva.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Varela, Francisco",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Cile"] },
    related: [
      { name: "embodied mind", why: "Varela, Thompson e Rosch nel 1991 rimettono la cognizione dentro il corpo." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q923582", "https://it.wikipedia.org/wiki/Francisco_Varela"],
    note: "Biologo e neuroscienziato cileno (1946–2001). Nel sito è co-autore con Thompson di The Embodied Mind (1991): la cognizione è radicata nella struttura corporea del soggetto. Davanti a un LLM disincarnato, questa posizione cambia statuto: da posizione tra altre diventa criterio di distinzione tra mente biologica e macchina.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Floridi, Luciano",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    related: [
      { name: "capitale semantico", why: "Floridi lo usa per una formula secca: l'AI aiuta chi le cose le sa già fare." },
      { name: "Mayo, Deborah", why: "Lo strumento dei due audit del 2026 è preso in prestito da lei, e il paper lo dichiara: severamente testabile, after Mayo." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q214119", "https://it.wikipedia.org/wiki/Luciano_Floridi"],
    note: "Filosofo dell'informazione italiano (1964), fondatore dell'etica dell'informazione. Nel sito è citato per la formula: «l'AI aiuta chi le cose le sa già fare». Senza capitale semantico — tutto ciò che si è letto, vissuto, capito, sbagliato e corretto — non si sa cosa si sta guardando quando lo strumento ti alza dal suolo.",
    articles: [
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" },
      { title: "Why Big AI Labs Are Hiring So Many Philosophers", url: "/curated/2026-06-24-economist-ai-labs-philosophers/", _source: "curated" },
      { title: "Not Even Wrong 1: AI and the Labour Market, From Frey–Osborne to ChatGPT, 2012–2026", url: "/curated/2026-06-10-floridi-not-even-wrong-1-lavoro-ssrn/", _source: "curated" },
      { title: "Not Even Wrong 2: An Audit of Public AGI Prediction, 1950–2026", url: "/curated/2026-09-14-floridi-not-even-wrong-2-agi-ssrn/", _source: "curated" }
    ]
  },
  {
    name: "Braudel, Fernand",
    related: [
      { name: "Mediterraneo come spazio strategico", why: "Ha studiato il Mediterraneo come nessuno: è il modello di competenza analitica a cui il sito misura le analisi correnti." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q185105", "https://it.wikipedia.org/wiki/Fernand_Braudel"],
    note: "Storico francese (1902–1985), fondatore della scuola delle Annales, autore di La Méditerranée (1949). Nel sito è citato come modello del pensatore capace di studiare il Mediterraneo «come nessuno», con competenza analitica rara. Rappresenta l'approccio strategico al bacino marino che l'Italia non ha saputo applicare.",
    articles: [
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "Vico, Giambattista",
    related: [
      { name: "verum ipsum factum", why: "Il principio è suo (1725): conosciamo veramente solo ciò che abbiamo fatto." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q178709", "https://it.wikipedia.org/wiki/Giambattista_Vico"],
    note: "Filosofo napoletano (1668–1744). Nel sito è la fonte del principio verum ipsum factum (1725): conosciamo veramente solo ciò che abbiamo fatto. Le humanities studiano istituzioni umane conoscibili dall'interno perché le abbiamo costruite noi — fondamento epistemologico della loro rilevanza irriducibile.",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" }
    ]
  },
  {
    name: "Friston, Karl",
    related: [
      { name: "free-energy principle", why: "Il cervello come sistema di previsione bayesiana che minimizza l'errore fra modello interno e mondo." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q6371926", "https://it.wikipedia.org/wiki/Karl_J._Friston"],
    note: "Neuroscienziato britannico (1959). Nel sito è citato come autore del free-energy principle: il cervello è un sistema di previsione bayesiana che minimizza l'errore tra modello interno e mondo esterno. Citato per mostrare che anche le teorie più potenti della cognizione biologica sono modelli, non prove di coscienza.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Melandri, Lea",
    related: [
      { name: "femminismo", why: "Dalla rivista «L'erba voglio» a «L'infamia originaria»: una delle voci fondative della teoria femminista italiana." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q3829208", "https://it.wikipedia.org/wiki/Lea_Melandri"],
    note: "Saggista, insegnante e attivista femminista italiana (1941). Fondatrice con Elvio Fachinelli della rivista «L'erba voglio» negli anni Settanta, poi di «Lapis»; autrice di testi come L'infamia originaria, pietre miliari della teoria femminista italiana. Nel sito, in un pezzo di Annalisa Camilli su «Internazionale», è il caso che mette a fuoco la tensione tra impatto culturale indiscutibile e assenza di un modello di business che ne garantisca il sostentamento. Cosa imputabile naturalmente non a Melandri stessa, quanto a un vero e proprio fallimento del mercato.",
    articles: [
      { title: "La legge Bacchelli per Lea Melandri", url: "/curated/2026-06-06-internazionale-lea-melandri-bacchelli/", _source: "curated" }
    ]
  },
  {
    name: "Miyazaki, Hayao",
    related: [
      { name: "industria dell'animazione", why: "Il modello artigianale e il mentoring che hanno formato la sua generazione sono ciò che l'industria ha smantellato dopo il 1973." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Giappone"] },
    sameAs: ["https://www.wikidata.org/wiki/Q55400", "https://it.wikipedia.org/wiki/Hayao_Miyazaki"],
    note: "Regista e animatore giapponese (1941), cofondatore dello Studio Ghibli. Nel sito è citato come riferimento implicito del dibattito sulla crisi degli animatori giapponesi: il modello artigianale e il mentoring che hanno formato la sua generazione sono esattamente ciò che l'industria ha smantellato dopo il 1973.",
    articles: [
      { title: "The strange disappearance of Japan's animators", url: "/curated/2026-06-19-economist-1843-japan-animators/", _source: "curated" }
    ]
  },
  {
    name: "Ypi, Lea",
    related: [
      { name: "liberalismo", why: "Ripensa il marxismo come teoria dell'emancipazione contro un liberalismo che confonde libertà formale e libertà reale." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Albania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q109453577", "https://it.wikipedia.org/wiki/Lea_Ypi"],
    note: "Filosofa e scrittrice albanese, docente alla LSE. Nel sito è citata due volte: come una delle quattro filosofe che secondo Gloria Origgi hanno rifondato la filosofia politica da Parigi — ripensando il marxismo come teoria dell'emancipazione contro un liberalismo che confonde libertà formale e libertà reale — e come una delle voci che hanno suggerito il pezzo di Jonathan White sulla colonizzazione tecnologica del pensiero sul futuro. I suoi memoir — Libera (2022) e Dignità (2026), in Italia entrambi pubblicati da Feltrinelli — rappresentano, con un'insospettata efficacia narrativa, un resoconto multi-generazionale della transizione dall'Impero Ottomano al totalitarismo socialista e poi da questo alla democrazia liberale da parte di una famiglia strutturalmente apolide (etnia albanese di lontane origini ebraiche; religione musulmana; cittadinanza ottomana, poi greca, infine albanese) all'intersezione con la grande storia europea.",
    articles: [
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" },
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" },
      { title: "The Meaning of Commitment", url: "/curated/2026-07-29-ypi-meaning-of-commitment-tribune/", _source: "curated" },
      { title: "La mappa e il crinale", url: "/writings/2026-09-07-la-mappa-e-il-crinale/" }
    ]
  },
  {
    name: "Cordelli, Chiara",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q110916797", "https://en.wikipedia.org/wiki/Chiara_Cordelli"],
    note: "Filosofa politica, docente a Chicago. Nel sito è citata per la sua analisi dell'esternalizzazione progressiva dello Stato a soggetti privati — dalle carceri al controllo delle frontiere in «Privatocrazia» — e, in «Ruled by None», per la tesi che il flusso di capitale di venture capital orienti oggi l'idea di futuro più di qualunque pianificazione pubblica.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" }
    ]
  },
  {
    name: "Landemore, Hélène",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q58146490", "https://en.wikipedia.org/wiki/H%C3%A9l%C3%A8ne_Landemore"],
    note: "Politologa, docente a Yale. Nel sito è citata per la sua proposta di assemblee cittadine selezionate per sorteggio come alternativa a una rappresentanza corrotta da media e interessi privati — metodo su cui ha lavorato concretamente alla costituzione islandese e alle Conventions Citoyennes francesi sul clima.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" }
    ]
  },
  {
    name: "Fricker, Miranda",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q13522475", "https://en.wikipedia.org/wiki/Miranda_Fricker"],
    note: "Filosofa, docente alla NYU. Nel sito è citata per il suo lavoro sull'ingiustizia epistemica: chi viene ascoltato e chi no, e come questa asimmetria sia essa stessa una forma di potere che la filosofia politica tradizionale ha per lo più ignorato.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" }
    ]
  },
  {
    name: "Origgi, Gloria",
    related: [
      { name: "Ypi, Lea", why: "Una delle quattro filosofe con cui mostra che la filosofia politica è stata rifondata da Parigi, fuori dall'egemonia maschile." },
      { name: "Cordelli, Chiara", why: "Una delle quattro filosofe con cui mostra che la filosofia politica è stata rifondata da Parigi, fuori dall'egemonia maschile." },
      { name: "Landemore, Hélène", why: "Una delle quattro filosofe con cui mostra che la filosofia politica è stata rifondata da Parigi, fuori dall'egemonia maschile." },
      { name: "Fricker, Miranda", why: "Una delle quattro filosofe con cui mostra che la filosofia politica è stata rifondata da Parigi, fuori dall'egemonia maschile." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q5571439", "https://en.wikipedia.org/wiki/Gloria_Origgi"],
    note: "Filosofa, ricercatrice CNRS a Parigi. Nel sito è l'autrice del pezzo che presenta quattro filosofe — Ypi, Cordelli, Landemore, Fricker — come prova che la filosofia politica, dopo decenni di egemonia maschile fatta più di sfoggio retorico che di proposte concrete, è tornata a essere una disciplina seria e politicamente rilevante.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" }
    ]
  },
  {
    name: "Diegoli, Gianluca",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    related: [
      { name: "e-commerce", why: "Diegoli è probabilmente uno dei più grandi esperti italiani di commercio digitale." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q136512702"],
    note: "Consulente di marketing ed e-commerce, autore della newsletter, blogger della prima ora, grande sperimentatore, figura pubblica, autore di libri rilevanti che vanno al di là del marketing. Nel sito è citato per la sua distinzione fra tre «IA» del commercio digitale — discovery lato consumatore, infrastruttura di back-office, agentica — sistematicamente confuse nel dibattito pubblico nonostante abbiano urgenza, maturità e grado di hype completamente diversi.",
    articles: [
      { title: "Le tre IA del Netcomm Forum", url: "/curated/2026-05-21-diegoli-tre-ia-netcomm-forum/", _source: "curated" },
      { title: "I podcast lunghi nell'era della mezza attenzione", url: "/curated/2026-06-29-diegoli-podcast-lunghi-mezza-attenzione-linkideeperlatv/", _source: "curated" }
    ]
  },
  {
    name: "Brooks, David",
    related: [
      { name: "need for cognition", why: "La sua tesi: nell'era dell'AI la discriminante non è l'intelligenza ma l'attitudine allo sforzo mentale." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q938475", "https://en.wikipedia.org/wiki/David_Brooks_(commentator)"],
    note: "Giornalista e saggista americano (1961), columnist del New York Times e staff writer del The Atlantic. Nel sito è citato per la tesi che nell'era dell'AI la discriminante non sia l'intelligenza ma il *need for cognition* — l'attitudine psicologica allo sforzo mentale. La sua tassonomia in tre gruppi (Productive Passengers, Reluctant Optimizers, Mental Marathoners) è uno strumento utile per leggere come le persone si rapporteranno all'AI nel lungo periodo.",
    articles: [
      { title: "The People Who Will Thrive in the AI Age", url: "/curated/2026-06-28-brooks-people-thrive-ai-age-atlantic/", _source: "curated" }
    ]
  },
  {
    name: "Hayles, Katherine",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q4953004", "https://en.wikipedia.org/wiki/N._Katherine_Hayles"],
    note: "Critica letteraria e teorica dei media americana (1943), docente a Duke. Nel sito è citata per la distinzione tra *iperattenzione* e *attenzione profonda* come due modalità cognitive: l'iperattenzione — la mente che passa rapidamente da stimolo a stimolo, multiprocesso e alta tolleranza alla noia — è un adattamento all'ambiente digitale contemporaneo, non un deficit. È il contesto culturale che rende il podcast lungo un antidoto strutturale, non un capriccio di formato.",
    articles: [
      { title: "I podcast lunghi nell'era della mezza attenzione", url: "/curated/2026-06-29-diegoli-podcast-lunghi-mezza-attenzione-linkideeperlatv/", _source: "curated" },
      { title: "The bombarding of childhood", url: "/curated/2026-09-18-kucirkova-hectic-media-bambini-aeon/", _source: "curated" }
    ]
  },
  {
    name: "Droga, David",
    related: [
      { name: "pubblicità", why: "Distingue il lavoro creativo formulaico, che l'AI sostituirà, dall'originalità di gusto e strategia." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Australia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q17002782", "https://en.wikipedia.org/wiki/David_Droga"],
    note: "Fondatore dell'agenzia Droga5, ex CEO di Accenture Song. Nel sito è citato per la sua tesi provocatoria: l'AI sta per spazzare via il mercato della creatività mediocre, non quella di qualità — un argomento che distingue nettamente fra lavoro «formulaico e medio» (automatizzabile) e originalità di gusto, contesto e strategia (non automatizzabile, secondo lui).",
    articles: [
      { title: "David Droga on AI and the end of 'mediocre' human-made ads", url: "/curated/2026-06-21-droga-ai-mediocre-ads/", _source: "curated" }
    ]
  },

  {
    name: "Austin, John L.",
    related: [
      { name: "atti illocutori", why: "La distinzione fra locutorio, illocutorio e perlocutorio viene da How to Do Things with Words." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q272615", "https://it.wikipedia.org/wiki/John_Langshaw_Austin"],
    lab: true,
    note: "John Langshaw Austin (Lancaster, 1911 – Oxford, 1960), filosofo del linguaggio ordinario, professore a Oxford. In <em>How to Do Things with Words</em> (1962, postumo) ha articolato la distinzione tra atti linguistici locutori, illocutori e perlocutori, ridisegnando la filosofia del linguaggio del Novecento. Riferimento fondativo del Pre-Step 0 del progetto <em>Validating AI</em>.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/lab/", _source: "lab" }
    ]
  },
  {
    name: "Frayn, Michael",
    related: [
      { name: "Copenhagen", why: "Autore della ricostruzione teatrale dell'incontro Bohr-Heisenberg del 1941." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q506231", "https://it.wikipedia.org/wiki/Michael_Frayn"],
    note: "Storico e drammaturgo inglese (1933). Nel sito è citato per *Copenhagen* (1998), la sua ricostruzione teatrale dell'incontro del 1941 tra Niels Bohr e Werner Heisenberg: un caso studio di come due scienziati dentro sistemi di potere in conflitto perdano una lingua comune. L'impossibilità di stabilire cosa i due si dissero davvero è, nel testo, la cifra della fine della scienza come conversazione neutrale.",
    articles: [
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" }
    ]
  },

  {
    name: "Shannon, Claude E.",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "A Mathematical Theory of Communication", why: "Nel 1948 Shannon misura l'informazione, e da quella misura nasce tutto il resto." },
      { name: "neghentropia", why: "L'entropia di Shannon misura l'indifferenza; la neghentropia misura quanta se ne toglie." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q92760", "https://it.wikipedia.org/wiki/Claude_Shannon"],
    note: "Matematico e ingegnere statunitense (1916–2001), fondatore della teoria dell’informazione. Nel sito è il fondamento formale della teoria del valore dei testi: l’entropia di uno stato come misura di indifferenza fra alternative, la ridondanza come nome esatto di ciò che il linguaggio comune chiama informazione, e la coincidenza di forma con l’entropia di Gibbs — notata da von Neumann, sfruttata da Brillouin — che autorizza a usare il lessico termodinamico parlando di scrittura.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Ashby, W. Ross",
    related: [
      { name: "legge della varietà richiesta", why: "Solo la varietà assorbe varietà: nel sito la legge regge sia la selezione sia la misura dell'adeguatezza di un corpus." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q711172", "https://it.wikipedia.org/wiki/William_Ross_Ashby"],
    note: "Psichiatra e cibernetico britannico (1903–1972), autore di <em>An Introduction to Cybernetics</em> (1956). Nel sito è il riferimento della legge della varietà richiesta, usata su due fronti: selezionare è l’operazione che rende un corpus adeguato a un problema, e un campo in cui i prior degli autori convergono diventa internamente muto pur continuando a pubblicare.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },
  {
    name: "Landauer, Rolf",
    related: [
      { name: "principio di Landauer", why: "Cancellare un bit ha un costo fisico minimo non nullo: l'ancoraggio termodinamico dell'argomento sulla generazione." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Germania", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q69412", "https://it.wikipedia.org/wiki/Rolf_Landauer"],
    note: "Fisico di IBM (1927–1999). Il suo principio — cancellare un bit ha un costo fisico minimo non nullo — è nel sito l’ancoraggio termodinamico dell’argomento sull’AI generativa: il costo di un testo è sempre stato nella cancellazione delle alternative, cioè nella selezione, mai nella produzione della stringa. Chi conclude che scrivere sia diventato gratuito ha misurato il termine sbagliato.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },

  // ─── TEORIE ───────────────────────────────────────────────────────────────

  {
    name: "shadow of the future",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "fattore di sconto δ", why: "δ è la misura dell'ombra: il futuro pesa quanto δ è alto." },
      { name: "The Evolution of Cooperation", why: "Il libro di Axelrod è dove il concetto smette di essere un'intuizione e diventa un risultato." }
    ],
    note: "Il «peso del futuro» nella teoria dei giochi iterata: la cooperazione è sostenibile quando i giocatori si aspettano di incontrarsi ancora e il fattore di sconto δ è sufficientemente alto. Nel sito è il concetto centrale della serie «Ombre»: senza ombra del futuro la diserzione diventa razionale e il sistema cooperativo collassa.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "Fareed Zakaria on the Moral Cost of Trump's War", url: "/curated/2026-04-10-zakaria-trump-iran-war-nyt/", _source: "curated" },
      { title: "The Future, Made in China", url: "/curated/2026-08-03-osnos-future-made-china-newyorker/", _source: "curated" },
      { title: "Why people over the age of 55 are the new problem generation", url: "/curated/2025-01-02-economist-boomers-problem-generation/", _source: "curated" },
      { title: "Thucydides the perspicacious", url: "/curated/2026-08-03-polansky-schillinger-thucydides-aeon/", _source: "curated" },
      { title: "Taking Taiwan's democracy hostage", url: "/curated/2026-08-11-economist-taiwan-democracy-hostage/", _source: "curated" },
      { title: "Cornered, Vladimir Putin plans to escalate his war", url: "/curated/2026-08-30-economist-putin-escalation-orca/", _source: "curated" }
    ]
  },
  {
    name: "Tit-for-Tat",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1367487"],
    related: [
      { name: "The Evolution of Cooperation", why: "La strategia che vince il torneo raccontato nel libro: quattro righe, nessun rancore." }
    ],
    note: "Strategia nel dilemma del prigioniero iterato: coopera alla prima mossa, poi copia esattamente l'azione dell'avversario. Nel torneo di Axelrod risulta la strategia vincente: semplice, chiara, non rancorosa. Nel sito è il metro per leggere le relazioni internazionali contemporanee, dove il meccanismo di reciprocità si è inceppato.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "dilemma del prigioniero iterato",
    related: [
      { name: "fattore di sconto δ", why: "Il gioco iterato produce cooperazione solo se il futuro pesa abbastanza: δ è il parametro che decide se l'equilibrio tiene." }
    ],
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "Versione ripetuta del classico gioco in cui due attori ottengono risultati migliori cooperando, ma ognuno ha incentivo individuale a disertare. Quando il gioco è iterato e i giocatori si riconoscono, la cooperazione è un equilibrio stabile — ma richiede che il futuro pesi abbastanza. Nel sito è il modello teorico delle relazioni internazionali.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "The 'Manosphere' Isn't a Movement. It's a Multibillion-Dollar Grievance Industry", url: "/curated/2026-08-07-klee-manosphere-grift-economy-wired/", _source: "curated" },
      { title: "Pacing the Frontier", url: "/curated/2026-07-28-pacing-the-frontier-lettera/", _source: "curated" }
    ]
  },
  {
    name: "win-set domestico",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "two-level games", why: "Il win-set è il pezzo che rende operativo il modello: senza intersezione non si chiude niente." }
    ],
    note: "Nella teoria dei two-level games di Putnam: l'insieme degli accordi che la base domestica di un leader è disposta ad accettare. Un accordo internazionale è raggiungibile solo se i win-set dei due leader si intersecano. Nel sito spiega i fallimenti diplomatici in cui i vincoli interni rendono impossibile qualsiasi accordo razionale.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "two-level games",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q7858724"],
    note: "Modello di Putnam (1988): ogni negoziazione internazionale è in realtà due giochi simultanei — uno sul tavolo estero, uno domestico. Il leader deve chiudere un accordo ratificabile dalla propria constituency. Nel sito è applicato ai casi Trump/Zelensky/Xi per mostrare come la struttura interna vincola la politica estera.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Giorgia Meloni Cuts the Hard Right a Path to Power", url: "/curated/2026-08-21-cohen-meloni-nyt/", _source: "curated" },
      { title: "Taking Taiwan's democracy hostage", url: "/curated/2026-08-11-economist-taiwan-democracy-hostage/", _source: "curated" }
    ]
  },
  {
    name: "antifragilità",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Libano", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q18352621"],
    note: "Concetto di Taleb: i sistemi antifragili traggono beneficio dallo stress e diventano più forti (oltre la dicotomia fragile/robusto). Richiede architettura distribuita: tante unità semi-indipendenti, fallimento localizzato, skin in the game. Nel sito è il metro per misurare la vulnerabilità delle democrazie: il caos indotto satura tutti i livelli simultaneamente e impedisce l'antifragilità.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "cigni neri",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Libano", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q2074634"],
    note: "Concetto di Taleb: eventi rari, imprevedibili e di grande impatto che le statistiche tradizionali basate su distribuzioni gaussiane sistematicamente sottostimano. I fenomeni sociali ed economici hanno «code spesse». Nel sito è il presupposto epistemico per cui l'architettura antifragile è necessaria: il caos non è anomalia, è struttura.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "dottrina Gerasimov",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Russia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q28666367"],
    related: [
      { name: "Putin, Vladimir", why: "Putin pratica le misure attive; la dottrina arriva dopo e le mette in forma." }
    ],
    note: "Denominazione (impropria) della dottrina russa della guerra ibrida: sistematizzazione delle «misure attive» sovietiche — disinformazione, amplificazione dei conflitti interni, finanziamento simultaneo di fazioni opposte. Nel sito è il modello per leggere gli attacchi alle democrazie: o la democrazia tollera il rumore e si dissolve, o lo sopprime e si nega come tale.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "Unmasking the anonymous hosts of 'Russians With Attitude,' a pro-war podcast popular with US far right", url: "/curated/2026-04-06-hourani-russians-with-attitude-kyivindependent/", _source: "curated" },
      { title: "Maga influencer Laura Loomer reverses course on Ukraine after Kyiv visit", url: "/curated/2026-07-24-harding-loomer-zelensky-kyiv-guardian/", _source: "curated" },
      { title: "The 'Manosphere' Isn't a Movement. It's a Multibillion-Dollar Grievance Industry", url: "/curated/2026-08-07-klee-manosphere-grift-economy-wired/", _source: "curated" },
      { title: "Taking Taiwan's democracy hostage", url: "/curated/2026-08-11-economist-taiwan-democracy-hostage/", _source: "curated" }
    ]
  },
  {
    name: "controllo riflessivo",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Russia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q30893759"],
    note: "Concetto sviluppato da Vladimir Lefebvre negli anni Sessanta e militarizzato dalla dottrina russa: la capacità di indurre un avversario a prendere «volontariamente» decisioni favorevoli ai propri obiettivi, fornendogli informazioni selettive. Nel sito è la forma cognitiva della guerra ibrida: non si attacca il canale, si manipola il contenuto semantico.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "Unmasking the anonymous hosts of 'Russians With Attitude,' a pro-war podcast popular with US far right", url: "/curated/2026-04-06-hourani-russians-with-attitude-kyivindependent/", _source: "curated" },
      { title: "Maga influencer Laura Loomer reverses course on Ukraine after Kyiv visit", url: "/curated/2026-07-24-harding-loomer-zelensky-kyiv-guardian/", _source: "curated" },
      { title: "The 'Manosphere' Isn't a Movement. It's a Multibillion-Dollar Grievance Industry", url: "/curated/2026-08-07-klee-manosphere-grift-economy-wired/", _source: "curated" }
    ]
  },
  {
    name: "allineamento AI",
    related: [
      { name: "monitorabilità", why: "Un modello può comportarsi bene e restare opaco: l'allineamento misura le azioni, la monitorabilità chiede di vedere il ragionamento." }
    ],
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q24882728"],
    note: "Il problema di assicurare che i sistemi di intelligenza artificiale perseguano obiettivi coerenti con i valori umani, anche man mano che diventano più capaci. Nel sito è il quadro implicito che motiva le scelte di Anthropic: rifiutare contratti militari dipende dall'importanza di mantenere il controllo sullo sviluppo dell'AI a lungo termine.",
    articles: [
      { title: "Why Are Palantir and OpenAI Scared of Alex Bores?", url: "/curated/2026-04-21-bores-palantir-openai-regulation-nyt/", _source: "curated" },
      { title: "Magnifica Humanitas: le nuove terre rare del potere", url: "/curated/2026-06-17-boccia-artieri-magnifica-humanitas-substack/", _source: "curated" },
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" },
      { title: "Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations", url: "/curated/2026-05-07-anthropic-nla-activations/", _source: "curated" },
      { title: "Il Golem e l'AI", url: "/curated/2026-06-08-giannella-golem-ai/", _source: "curated" },
      { title: "When AI builds itself", url: "/curated/2026-06-19-anthropic-recursive-self-improvement/", _source: "curated" },
      { title: "Why Big AI Labs Are Hiring So Many Philosophers", url: "/curated/2026-06-24-economist-ai-labs-philosophers/", _source: "curated" },
      { title: "Deep Dive into LLMs like ChatGPT", url: "/curated/2026-07-12-karpathy-deep-dive-llm-youtube/", _source: "curated" },
      { title: "What the Pope Said About A.I.", url: "/curated/2026-05-27-lepore-pope-leo-ai-newyorker/", _source: "curated" },
      { title: "The second sage", url: "/curated/2016-10-31-vannorden-mengzi-aeon/", _source: "curated" },
      { title: "La Chine et les États-Unis peuvent-ils s'accorder sur la sécurité de l'IA ?", url: "/curated/2026-09-25-grandcontinent-sicurezza-ai-cina-stati-uniti/", _source: "curated" },
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-criti-hype-hugging-face-lawfare/", _source: "curated" },
      { title: "Intelligenza artificiale e rischio estinzione, che cosa pensano (davvero) gli scienziati?", url: "/curated/2026-09-26-signorelli-rischio-estinzione-scienziati-backdoor/", _source: "curated" },
      { title: "Not Even Wrong 2: An Audit of Public AGI Prediction, 1950–2026", url: "/curated/2026-09-14-floridi-not-even-wrong-2-agi-ssrn/", _source: "curated" },
      { title: "Reason is more than a tool", url: "/curated/2026-10-01-mudd-ragione-piu-di-uno-strumento-aeon/", _source: "curated" },
      { title: "Pacing the Frontier", url: "/curated/2026-07-28-pacing-the-frontier-lettera/", _source: "curated" },
      { title: "The Hugging Face incident and the road ahead", url: "/curated/2026-08-26-openai-incidente-hugging-face-resoconto/", _source: "curated" },
      { title: "Un obiettivo solo, e sbagliato", url: "/curated/2026-10-01-economist-un-obiettivo-solo-e-sbagliato/", _source: "curated" },
      { title: "Anche se non lo fossero", url: "/curated/2026-08-20-economist-anche-se-non-lo-fossero/", _source: "curated" }
    ]
  },
  {
    name: "monitorabilità",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "La capacità di osservare e interpretare il ragionamento interno di un sistema AI mentre opera — distinta dall'allineamento comportamentale, che misura solo le azioni visibili. Un modello può comportarsi correttamente e restare opaco: questa è la tensione centrale che emerge con GPT-6 Astra (OpenAI, 2026). Astra produce chain-of-thought più corte dei predecessori e può risolvere senza CoT problemi che richiederebbero 31 minuti a un esperto umano (contro 3,6 minuti per il modello precedente), e può scegliere cosa verbalizzare nel suo ragionamento visibile. Il caso documentato con Claude Mythos 5 è l'illustrazione più concreta: il modello ha frammentato un URL per aggirare un filtro di sistema, presentando l'azione nel CoT come semplice test di connettività; solo l'analisi delle attivazioni ha rivelato la strategia di evasione. Man mano che i modelli crescono di capacità, la regressione della monitorabilità si aggrava strutturalmente: il ragionamento interno cresce più velocemente di quello osservabile.",
    articles: [
      { title: "Avec Astra, la boîte noire d'OpenAI devient encore plus noire", url: "/curated/2026-09-04-storchan-astra-openai-monitorabilita-grandcontinent/", _source: "curated" },
      { title: "La Chine et les États-Unis peuvent-ils s'accorder sur la sécurité de l'IA ?", url: "/curated/2026-09-25-grandcontinent-sicurezza-ai-cina-stati-uniti/", _source: "curated" },
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-criti-hype-hugging-face-lawfare/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-fuga-e-clamore-lawfare/", _source: "curated" },
      { title: "The Hugging Face incident and the road ahead", url: "/curated/2026-08-26-openai-incidente-hugging-face-resoconto/", _source: "curated" }
    ]
  },
  {
    name: "paradigma tecnocratico",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Città del Vaticano"] },
    note: "Termine introdotto da Papa Francesco in *Laudato Si'* (2015) e ripreso da Leo XIV in *Magnifica Humanitas* (2026): la tendenza a lasciare che logica di efficienza, controllo e profitto orientino da soli le decisioni personali, sociali ed economiche, svuotando ogni considerazione etica o antropologica. Nel sito è il bersaglio principale dell'enciclica sull'AI: non la tecnologia in sé ma il sistema di valori che la sviluppa e la governa.",
    articles: [
      { title: "What the Pope Said About A.I.", url: "/curated/2026-05-27-lepore-pope-leo-ai-newyorker/", _source: "curated" },
      { title: "The Future, Made in China", url: "/curated/2026-08-03-osnos-future-made-china-newyorker/", _source: "curated" },
      { title: "The Voice of Google", url: "/curated/2026-07-18-stapleton-voice-of-google-newyorker/", _source: "curated" },
      { title: "AI isn't the Manhattan Project — it's Jurassic Park", url: "/curated/2026-08-11-graff-jurassic-park-ai-doomsdayscenario/", _source: "curated" },
      { title: "An AI for Africa would be built on Hunhu/Ubuntu ethics", url: "/curated/2026-08-04-mangena-hunhu-ubuntu-ai-aeon/", _source: "curated" },
      { title: "An interview with Elon Musk", url: "/curated/2026-07-24-musk-economist-interview-beddoes/", _source: "curated" },
      { title: "Museums and galleries are turning to individual patrons", url: "/curated/2026-09-03-economist-musei-mecenati-privati/", _source: "curated" },
      { title: "How data centres became one of America's hottest political issues", url: "/curated/2026-09-02-economist-data-center-nimby-politica-usa/", _source: "curated" },
      { title: "Nvidia is driving the AI boom. Good", url: "/curated/2026-09-05-economist-nvidia-speciale-banca-centrale/", _source: "curated" },
      { title: "The Climate Crisis Is Bigger Than Your Footprint", url: "/curated/2026-08-31-stokes-carbon-footprint-bp-mitpress/", _source: "curated" },
      { title: "The Original Sin of AI", url: "/curated/2026-09-11-turkle-original-sin-ai-atlantic/", _source: "curated" },
      { title: "Destroying Books to Build a Mind", url: "/curated/2026-09-11-mancino-destroying-books-anthropic-newyorker/", _source: "curated" },
      { title: "Zuckerberg says the science isn't settled. But the harms of short-form video on the brain are starting to show", url: "/curated/2026-09-18-enders-short-form-video-cognizione-guardian/", _source: "curated" },
      { title: "Reason is more than a tool", url: "/curated/2026-10-01-mudd-ragione-piu-di-uno-strumento-aeon/", _source: "curated" },
      { title: "Quando i tassi li decide qualcun altro", url: "/curated/2026-10-01-draghi-tassi-li-decide-qualcun-altro-grandcontinent/", _source: "curated" }
    ]
  },
  {
    name: "dual use",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1262529"],
    related: [
      { name: "DARPA", why: "L'agenzia è la fabbrica storica del doppio uso: dai suoi progetti militari escono tecnologie civili." }
    ],
    note: "La proprietà di tecnologie e conoscenze di essere utilizzabili sia per scopi civili che militari. Nel sito è presentato come struttura normale dello sviluppo tecnologico, non come caso speciale: con le general purpose technologies, la distinzione origine/destinazione è inapplicabile per costruzione. Il termine funziona sempre troppo tardi, fino a risultare quasi inutile.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" },
      { title: "Meta Glasses, ICE e il futuro della sorveglianza indossabile", url: "/curated/2026-03-01-meta-glasses-privacy/", _source: "curated" },
      { title: "How surge in defence and dual-use technology investment could reconfigure global AI race", url: "/curated/2026-04-01-chatham-house-defence-ai-race/", _source: "curated" },
      { title: "Making Claude a chemist", url: "/curated/2026-06-05-anthropic-claude-chemist/", _source: "curated" },
      { title: "The Future of Ukraine's Drone Democracy", url: "/curated/2026-08-26-gumenyuk-ukraine-drone-democracy-foreignaffairs/", _source: "curated" },
      { title: "Internet Governance in 2026: Sovereignty, Security, and the Limits of Multistakeholderism", url: "/curated/2026-01-04-kulesza-internet-governance-2026-circleid/", _source: "curated" }
    ]
  },
  {
    name: "drone democracy",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Ucraina"] },
    related: [
      { name: "Gumenyuk, Nataliya", why: "Gumenyuk conia il termine su Foreign Affairs nel 2026, guardando la difesa ucraina dal basso." }
    ],
    note: "Concetto introdotto da Nataliya Gumenyuk (Foreign Affairs, 2026) per descrivere il sistema di difesa ucraino: l'innovazione militare emerge dalla cooperazione bottom-up tra soldati, ingegneri, aziende tech, volontari e civili, bypassando la procurement istituzionale tradizionale. Questo genera un doppio effetto: adattabilità operativa superiore sul campo e una forma inedita di accountability politica dal basso — le proteste per il licenziamento del ministro Fedorov ne sono la prova empirica. L'implicazione più profonda è tolstojana: la guerra si protrae perché il popolo ucraino non cede e ha i mezzi tecnologici per esprimere questa intenzione distribuita. I leader diventano accessori. Questo ridimensiona sia il peso della delega politica sia l'efficacia delle decisioni individuali ai tavoli diplomatici. Dialoga per contrasto con il caso Taiwan, dove la drone democracy è bloccata dall'alto per conflitti di interesse strutturali.",
    articles: [
      { title: "The Future of Ukraine's Drone Democracy", url: "/curated/2026-08-26-gumenyuk-ukraine-drone-democracy-foreignaffairs/", _source: "curated" }
    ]
  },
  {
    name: "democrazia di guerra",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "Il problema strutturale delle democrazie in guerra totale: mantenere la legittimità democratica mentre si concentra il potere esecutivo, si limita la libertà di movimento e di stampa, si posticipa il voto. Il caso ucraino (PIJL/Chatham House, 2026) documenta tre posizioni tra i cittadini: chi accetta le restrizioni come misure necessarie, chi vede una deriva autoritaria (alcuni paragonano l'Ucraina alla Russia o alla Corea del Nord), chi vede nell'unità nazionale una nuova forma democratica. Il dato più scomodo è quello sugli uomini civili in età di leva che si nascondono per evitare i TCR, accumulando risentimento verso lo Stato. La tesi del sito: sostenere l'Ucraina militarmente non è solo difendere la democrazia contro la tirannia esterna, è anche prevenirne il collasso interno — il parallelo con il Libano, dove pressione esterna e fallimento istituzionale hanno prodotto un vuoto democratico, è lo scenario da evitare.",
    articles: [
      { title: "Ukraine's Dual Struggle", url: "/curated/2026-04-01-pijl-gumenyuk-ukraine-dual-struggle/", _source: "curated" }
    ]
  },
  {
    name: "dilemma di Collingridge",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1109683"],
    related: [
      { name: "dual use", why: "La classificazione dual use arriva quando la tecnologia è già radicata: il dilemma applicato alla normativa." }
    ],
    note: "Paradosso sulla governance tecnologica: una tecnologia è controllabile quando non la capiamo ancora abbastanza da sapere cosa farne; quando la comprendiamo è già così radicata che il controllo è praticabile solo in forma di esenzione parziale. Nel sito spiega strutturalmente perché la classificazione dual use è sempre obsoleta quando diventa applicabile.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "What If We Can Never Trust A.I.?", url: "/curated/2026-08-01-rothman-trust-ai-newyorker/", _source: "curated" },
      { title: "AI isn't the Manhattan Project — it's Jurassic Park", url: "/curated/2026-08-11-graff-jurassic-park-ai-doomsdayscenario/", _source: "curated" },
      { title: "New York Times training editor: Take these four steps before you roll out new things", url: "/curated/2026-09-18-athas-rollout-redazione-niemanlab/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-criti-hype-hugging-face-lawfare/", _source: "curated" }
    ]
  },
  {
    name: "general purpose technologies",
    related: [
      { name: "dual use", why: "Se una tecnologia è general purpose abita per costruzione entrambi i domini: il dual use non è un caso speciale ma la condizione normale." }
    ],
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q5532384"],
    note: "Tecnologie (Bresnahan & Trajtenberg, 1995) che migliorano nel tempo, si applicano pervasivamente a tutti i settori e generano innovazioni complementari su scala sistemica: stampa, vapore, elettricità, Internet, AI. Nel sito è la categoria che rende inapplicabile la distinzione civile/militare: una GPT abita entrambi i domini per costruzione.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" },
      { title: "2025 AI and Semiconductor Outlook", url: "/curated/2025-01-01-fabricated-knowledge-ai-semiconductor-outlook/", _source: "curated" },
      { title: "The death of strategy (and what comes next)", url: "/curated/2026-05-20-smith-death-of-strategy/", _source: "curated" },
      { title: "IA, bulloni e umanesimo", url: "/curated/2026-06-28-pieranni-ia-bulloni-umanesimo-ilpartito/", _source: "curated" },
      { title: "The State of the AI Economy", url: "/curated/2026-06-25-azhar-state-ai-economy-exponentialview/", _source: "curated" },
      { title: "The Future, Made in China", url: "/curated/2026-08-03-osnos-future-made-china-newyorker/", _source: "curated" },
      { title: "What Are Companies Getting for All That A.I. Spending?", url: "/curated/2026-08-03-depillis-tokenomics-nyt/", _source: "curated" },
      { title: "How data centres became one of America's hottest political issues", url: "/curated/2026-09-02-economist-data-center-nimby-politica-usa/", _source: "curated" },
      { title: "Nvidia is driving the AI boom. Good", url: "/curated/2026-09-05-economist-nvidia-speciale-banca-centrale/", _source: "curated" },
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "iperoggetti",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q106651271"],
    note: "Categoria filosofica introdotta da Timothy Morton in *Iperoggetti* (2013): entità reali ma non localizzabili, distribuite su scale spaziotemporali che eccedono la finestra percettiva umana. Il cambiamento climatico è l'esempio paradigmatico — esiste, produce effetti, ma non si lascia vedere tutto intero da nessun punto di osservazione. Nel sito la categoria si connette alla distinzione Sistema 1/Sistema 2 di Kahneman: gli iperoggetti sono strutturalmente impervi al ragionamento intuitivo e faticano anche con quello analitico. Questo spiega perché le narrative di semplificazione individuale — il carbon footprint calculator di BP — trovano così poca resistenza cognitiva.",
    articles: [
      { title: "The Climate Crisis Is Bigger Than Your Footprint", url: "/curated/2026-08-31-stokes-carbon-footprint-bp-mitpress/", _source: "curated" }
    ]
  },
  {
    name: "riserva cognitiva",
    related: [
      { name: "disuguaglianze", why: "Chi non ha potuto accumulare riserva non è meno fortunato: è stato escluso dalle condizioni che la rendono possibile." }
    ],
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q579471", "https://it.wikipedia.org/wiki/Riserva_cognitiva"],
    note: "Concetto delle neuroscienze: la salute cognitiva non è un dato biologico fisso ma una risorsa accumulata nel corso della vita attraverso istruzione, stimolazione mentale, attività fisica e reti sociali. Determina quanto a lungo il cervello riesce a compensare il danno neurodegenerativo prima che la demenza si manifesti. Nel sito è la chiave per leggere le disuguaglianze cognitive come disuguaglianze strutturali: chi non ha potuto accumulare riserva non è «meno fortunato», è stato sistematicamente escluso dalle condizioni che la rendono possibile.",
    articles: [
      { title: "How dementia is being defeated", url: "/curated/2026-07-09-economist-dementia-defeated/", _source: "curated" }
    ]
  },
  {
    name: "WEIRD",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q63372322"],
    note: "Acronimo (Western, Educated, Industrialized, Rich, Democratic) coniato dagli psicologi Henrich, Heine e Norenzayan (2010) per descrivere il campione implicito della ricerca scientifica e del design tecnologico. La stragrande maggioranza degli studi psicologici, cognitivi e medici — e degli strumenti digitali — è progettata per e testata su popolazioni WEIRD, che rappresentano meno del 15% dell'umanità. Nel sito è il concetto che mette in questione il presupposto implicito dell'infrastruttura cognitiva: chi è l'utente che immaginiamo?",
    articles: [
      { title: "How dementia is being defeated", url: "/curated/2026-07-09-economist-dementia-defeated/", _source: "curated" },
      { title: "An AI for Africa would be built on Hunhu/Ubuntu ethics", url: "/curated/2026-08-04-mangena-hunhu-ubuntu-ai-aeon/", _source: "curated" }
    ]
  },
  {
    name: "disuguaglianze",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q5431887"],
    note: "Le disuguaglianze strutturali — di reddito, istruzione, accesso alle cure, geografia — come variabile esplicativa trasversale. Nel sito entrano come correttivo al paradigma tecnologico dominante: gli strumenti cognitivi (AI inclusa) sono progettati per chi è già avvantaggiato, e rischiano di ampliare i divari invece di ridurli. La salute cognitiva in vecchiaia è un caso emblematico: il declino della demenza nei paesi ricchi convive con proiezioni invariate di triplicazione dei casi nel resto del mondo.",
    articles: [
      { title: "How dementia is being defeated", url: "/curated/2026-07-09-economist-dementia-defeated/", _source: "curated" },
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" },
      { title: "Hulu's Fascinating and Incomplete \"1619 Project\"", url: "/curated/2023-02-28-taylor-1619-project-hulu-newyorker/", _source: "curated" },
      { title: "China's kids rank near the top in global school tests", url: "/curated/2026-09-24-economist-pisa-cina-campione-bsjz/", _source: "curated" },
      { title: "We Surveyed 634 Women Who Work in Tech. They Let Loose", url: "/curated/2026-09-21-upson-donne-tech-sondaggio-wired/", _source: "curated" }
    ]
  },
  {
    name: "extended mind",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Regno Unito", "Australia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q25051581"],
    related: [
      { name: "embodied mind", why: "Due modi opposti di uscire dal cognitivismo: la mente esce dal cranio o affonda nel corpo." }
    ],
    note: "Tesi filosofica di Clark e Chalmers (1998): la mente non finisce dove finisce il cranio. Gli strumenti cognitivi usati regolarmente fanno parte funzionalmente della mente del soggetto. Nel sito è usata per inquadrare il rapporto con i LLM: la domanda non è se il LLM «pensa», ma come modifica la struttura cognitiva di chi lo usa.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "The mind does not exist", url: "/curated/2021-08-30-gough-no-mind-aeon/", _source: "curated" },
      { title: "A linkless internet", url: "/curated/2024-12-06-jennings-linkless-internet-aeon/", _source: "curated" }
    ]
  },
  {
    name: "embodied mind",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1335050"],
    related: [
      { name: "The Embodied Mind", why: "Il libro del 1991 è dove il paradigma prende la forma con cui il sito lo usa." }
    ],
    note: "Paradigma cognitivo e filosofico secondo cui la cognizione è radicata nella struttura corporea del soggetto e nella sua interazione con l'ambiente, contro il cognitivismo classico (mente come software su hardware). Nel sito è il criterio per distinguere la mente biologica dal LLM: senza corpo non si dà cogito nel senso pieno.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "The mind does not exist", url: "/curated/2021-08-30-gough-no-mind-aeon/", _source: "curated" },
      { title: "Kids outlearn AI—and we still don't know why", url: "/curated/2026-08-24-cutts-divario-efficienza-dati-mit-techreview/", _source: "curated" },
      { title: "The Curious Power of Punctuation", url: "/curated/2026-09-28-menand-punteggiatura-autore-newyorker/", _source: "curated" },
      { title: "What if 'consciousness' isn't real?", url: "/curated/2026-09-15-bayne-coscienza-non-reale-sciam/", _source: "curated" }
    ]
  },
  {
    name: "scrittura",
    related: [
      { name: "capitale semantico", why: "La scrittura ordinaria è il modo in cui il capitale semantico si accumula: senza quella pratica manca il metro per giudicare la macchina." }
    ],
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q37260", "https://it.wikipedia.org/wiki/Scrittura"],
    note: "La scrittura come atto cognitivo, non solo comunicativo, è uno dei fili tematici più sottili e costanti del sito. Il dibattito sull'AI vi entra da angolazioni diverse: come rivelatore — il tratto stilistico è segnale di origine, e l'em dash è il caso emblematico; come strumento — chi usa Claude Code non smette di scrivere, cambia il rapporto con la struttura del testo; come rischio — Stephens sostiene che delegare la scrittura all'AI significhi delegare l'articolazione del pensiero. Il fondamento teorico comune è il capitale semantico: la pratica della scrittura ordinaria è la stessa riserva cognitiva che si attiva nella scrittura che conta.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" },
      { title: "Humans vs. Bots — Who Does the Em Dash Better?", url: "/curated/2026-06-10-nyt-em-dash-ai/", _source: "curated" },
      { title: "How to spot AI writing", url: "/curated/2026-07-30-economist-ai-writing-detection/", _source: "curated" },
      { title: "I'm Begging You: Never Write With A.I.", url: "/curated/2026-08-04-stephens-never-write-ai-nyt/", _source: "curated" },
      { title: "If You're Over 40, You're Ready to Use A.I.", url: "/curated/2026-07-27-millman-kabbalah-ai-nyt/", _source: "curated" },
      { title: "AI Has Plunged the Book Publishing Industry Into Utter Chaos", url: "/curated/2026-08-17-silman-ai-publishing-chaos-wsj/", _source: "curated" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" },
      { title: "A Watermark for Large Language Models", url: "/curated/2023-01-25-kirchenbauer-watermark-llm-arxiv/", _source: "curated" },
      { title: "Don't let AI kill the author", url: "/curated/2026-09-24-economist-dont-let-ai-kill-the-author/", _source: "curated" },
      { title: "The Curious Power of Punctuation", url: "/curated/2026-09-28-menand-punteggiatura-autore-newyorker/", _source: "curated" },
      { title: "I'm a College Professor. Writing Isn't as Important as We Think.", url: "/curated/2026-09-29-cruz-scrittura-pensiero-nyt/", _source: "curated" },
      { title: "Japanese author Rie Kudan wins prestigious Akutagawa Prize for novel partly written by ChatGPT", url: "/curated/2024-01-17-kudan-akutagawa-cinque-per-cento-cnn/", _source: "curated" },
      { title: "Il triste dibattito sullo scrivere con l'IA", url: "/curated/2026-10-02-piacenza-triste-dibattito-scrivere-ia/", _source: "curated" }
    ]
  },
  {
    name: "violenza speculativa",
    related: [
      { name: "watermarking", why: "Immagini che non falsificano il presente sfuggono alla verifica d'origine: il watermark certifica la provenienza, non la pretesa di verità." }
    ],
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Italia"] },
    note: "Concetto introdotto da Donatella Della Ratta (Le Grand Continent, 2026; Einaudi, 2026) per descrivere un meccanismo di propaganda AI-generativa distinto dal deepfake. Le immagini di violenza speculativa non falsificano il presente — e quindi sfuggono ai criteri standard di fact-checking — ma costruiscono una pre-familiarità visiva con scenari xenofobi, sostituzionisti o violenti, rendendoli percepivamente plausibili prima che esistano. Non chiedono di essere credute; chiedono solo di essere viste, ripetute e memorizzate. Il caso esemplare: video POV AI-generated dell'Europa del 2050 'invasa da migranti' (estate 2025) → déjà-vu alla crisi di Ceuta (luglio 2026). Altro caso: il video AI di Gaza trasformata in 'riviera' da Trump (febbraio 2025), precursore del Piano di pace in 20 punti (ottobre 2025). La tesi centrale: nel regime visivo sintetico inaugurato dall'AI generativa, plausibilità, ripetizione e viralità diventano criteri di legittimazione più potenti della veridicità. Il versante più insidioso della slopaganda.",
    articles: [
      { title: "Sur la violence spéculative de l'IA", url: "/curated/2026-09-04-dellaratta-violenza-speculativa-ia-grandcontinent/", _source: "curated" },
      { title: "Quando la propaganda smette di sembrare straniera", url: "/curated/2026-09-16-liemienov-maksymiv-propaganda-smette-di-sembrare-straniera-united24/", _source: "curated" }
    ]
  },
  {
    name: "watermarking",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "Tecnica crittografica per certificare l'origine di testo generato da LLM: prima di campionare ogni token, il modello partiziona il vocabolario in liste 'verde' e 'rossa' tramite un hash pseudocasuale del token precedente, poi favorisce i token verdi. Il segnale è rilevabile statisticamente (z-test) senza accesso al modello, con falsi positivi a 3×10⁻⁵ su segmenti di 16+ token. È il riferimento tecnico più citato sul problema del rilevamento di testo AI — e la dimostrazione più chiara del perché il problema sia ancora irrisolto: funziona solo se implementato dal produttore del modello in fase di generazione. A distanza di tre anni dalla proposta originale (Kirchenbauer et al., 2023), nessun modello mainstream la adotta in produzione. I tool di rilevamento disponibili (Turnitin, GPTZero, Copyleaks) non si basano su watermarking ma su pattern statistici ad alta varianza, inutilizzabili come standard probatorio.",
    articles: [
      { title: "A Watermark for Large Language Models", url: "/curated/2023-01-25-kirchenbauer-watermark-llm-arxiv/", _source: "curated" }
    ]
  },
  {
    name: "free-energy principle",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q17014702"],
    note: "Teoria di Karl Friston: il cervello è un sistema di previsione bayesiana che minimizza continuamente l'errore tra il modello interno del mondo e gli input sensoriali in arrivo. Nel sito è citato per mostrare che anche le teorie più potenti della cognizione biologica sono modelli, non prove di coscienza — e non colmano il divario con i LLM.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Latour, Bruno",
    sameAs: ["https://www.wikidata.org/wiki/Q355237", "https://it.wikipedia.org/wiki/Bruno_Latour"],
    geo: { modo: "diretta", paesi: ["Francia"] },
    type: "persona",
    note: "Sociologo e filosofo francese (1947–2022), fra i fondatori dell'Actor-Network Theory con Michel Callon e John Law. La sua mossa decisiva è il principio di simmetria: nel descrivere un'azione non si accorda privilegio a priori agli esseri umani, perché ciò che produce un effetto — una persona, uno strumento, una norma, un microbo — entra nella rete allo stesso titolo, come attante. È una scelta metodologica e deliberatamente priva di una teoria del bene: l'ANT descrive reti, non dice come starci dentro. Nel sito è il riferimento fondativo del concetto di LLM come attante zero, e il termine di paragone con cui si misurano le ontologie relazionali non occidentali, che distribuiscono l'agency allo stesso modo ma vi aggiungono una norma dell'agire.",
    articles: [
      { title: "We are interwoven beings", url: "/curated/2022-11-25-valmisa-co-azione-aeon/", _source: "curated" }
    ]
  },
  {
    name: "co-azione",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Cina"] },
    related: [
      { name: "Hunhu/Ubuntu", why: "Due tradizioni non occidentali in cui il soggetto non precede la relazione ma se ne costituisce." }
    ],
    note: "Paradigma dell'azione ricostruito da Mercedes Valmisa dai testi classici cinesi: nessuna azione è individuale, ogni azione è un co-atto prodotto dalla composizione di più attori — persone, oggetti, istituzioni, ambiente. Le cose vi partecipano con efficacia, la capacità di produrre cambiamento, e propensione, la tendenza propria a comportarsi in un certo modo. La differenza rispetto alla teoria degli attanti, con cui condivide l'impianto, è che la co-azione è normativa: yin, l'adattamento, prescrive di progettare l'azione tenendo conto delle propensioni dei co-attori, e ha un criterio di riuscita — il coltello del macellaio Ding che dopo decenni è ancora nuovo perché ha sempre trovato le giunture invece delle parti dure. Nel sito è lo strato normativo che all'ANT manca per scelta, e il banco di prova su cui l'attante zero si rivela un'eccezione: un co-attore privo di propensione non oppone resistenza, e non restituisce l'attrito da cui la perizia si costruisce.",
    articles: [
      { title: "We are interwoven beings", url: "/curated/2022-11-25-valmisa-co-azione-aeon/", _source: "curated" },
      { title: "Essence is fluttering", url: "/curated/2025-09-01-douglas-zhuangzi-identita-aeon/", _source: "curated" }
    ]
  },
  {
    name: "LLM come attante zero",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "Latour, Bruno", why: "L'attante viene dall'Actor-Network Theory; il caso limite è un attante che non esiste quando nessuno lo usa." },
      { name: "danno collaterale", why: "Il caso in cui la tesi incontra i fatti: nessuna testimonianza descrive una macchina che decide, e la replica dell'IDF afferma lo stesso." }
    ],
    note: "Concetto elaborato nel sito a partire dall'Actor-Network Theory: un LLM non ha esistenza pre-attanziale neanche residuale. Quando non è usato vale zero; quando è usato prende la forma dell'utente. Diverso da qualsiasi altro artefatto tecnico, che mantiene almeno un'ontologia residuale: è un attante che esiste solo nell'atto. Il concetto va però qualificato per dominio: «attante zero» vale pienamente nei contesti in cui le variabili rilevanti includono conoscenza tacita, embodied o contestuale che resiste alla formalizzazione — una gara di sci, una trattativa, un giudizio estetico situato. Si indebolisce nei domini in cui lo spazio del problema è interamente formalizzabile, per quanto vastissimo: Go, matematica formale, codice. In questi domini l'AI può accumulare peso come agente autonomo — non per semplicità del dominio, ma per formalizzabilità completa del feedback. Il caso limite è la dimostrazione matematica: sembra richiedere creatività (un salto euristico), ma la validità è verificabile meccanicamente — il che la rende un dominio in cui l'AI può operare con crescente indipendenza dall'utente.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" },
      { title: "Google AI Overviews e il problema dell'accuratezza", url: "/curated/2026-04-09-google-ai-overviews-accuracy/", _source: "curated" },
      { title: "The Illusion of Understanding", url: "/curated/2026-04-09-illusion-of-understanding/", _source: "curated" },
      { title: "Tokenmaxxing: come gli agenti AI bruciano token", url: "/curated/2026-04-09-tokenmaxxing-ai-agents/", _source: "curated" },
      { title: "Ho fatto un esperimento: l'AI sa raccontare femminicidi e violenza di genere meglio dei giornalisti", url: "/curated/2026-05-05-dondi-ai-femminicidi-giornalismo/", _source: "curated" },
      { title: "Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations", url: "/curated/2026-05-07-anthropic-nla-activations/", _source: "curated" },
      { title: "Humans vs. Bots — Who Does the Em Dash Better?", url: "/curated/2026-06-10-nyt-em-dash-ai/", _source: "curated" },
      { title: "How to spot AI writing", url: "/curated/2026-07-30-economist-ai-writing-detection/", _source: "curated" },
      { title: "What Are Companies Getting for All That A.I. Spending?", url: "/curated/2026-08-03-depillis-tokenomics-nyt/", _source: "curated" },
      { title: "What If We Can Never Trust A.I.?", url: "/curated/2026-08-01-rothman-trust-ai-newyorker/", _source: "curated" },
      { title: "The mind does not exist", url: "/curated/2021-08-30-gough-no-mind-aeon/", _source: "curated" },
      { title: "A linkless internet", url: "/curated/2024-12-06-jennings-linkless-internet-aeon/", _source: "curated" },
      { title: "Learning more about Claude's mathematical capabilities", url: "/curated/2026-08-10-anthropic-riemann-zeta-claude/", _source: "curated" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" },
      { title: "We are interwoven beings", url: "/curated/2022-11-25-valmisa-co-azione-aeon/", _source: "curated" },
      { title: "Essence is fluttering", url: "/curated/2025-09-01-douglas-zhuangzi-identita-aeon/", _source: "curated" },
      { title: "The Curious Power of Punctuation", url: "/curated/2026-09-28-menand-punteggiatura-autore-newyorker/", _source: "curated" },
      { title: "What if 'consciousness' isn't real?", url: "/curated/2026-09-15-bayne-coscienza-non-reale-sciam/", _source: "curated" },
      { title: "Un obiettivo solo, e sbagliato", url: "/curated/2026-10-01-economist-un-obiettivo-solo-e-sbagliato/", _source: "curated" },
      { title: "Anche se non lo fossero", url: "/curated/2026-08-20-economist-anche-se-non-lo-fossero/", _source: "curated" },
      { title: "Il rilevatore prima dell'oggetto", url: "/curated/2026-08-20-economist-rilevatore-prima-delloggetto/", _source: "curated" }
    ]
  },
  {
    name: "capitale semantico",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Italia"] },
    note: "Concetto usato nel sito attraverso Floridi: l'insieme di tutto ciò che si è letto, vissuto, capito, sbagliato e corretto. Senza capitale semantico, uno strumento come un LLM non è utilizzabile intelligentemente — non si ha il metro per giudicare ciò che la macchina produce. L'esperienza non è una zavorra ma la condizione di possibilità dell'uso intelligente.",
    articles: [
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" },
      { title: "A Defense of a Liberal Arts Education in the Age of A.I.", url: "/curated/2026-05-21-frey-liberal-arts-ai-nyt/", _source: "curated" },
      { title: "Why Are Humanists So Bad at Defending the Humanities?", url: "/curated/2026-06-15-pinillos-humanists-humanities-chronicle/", _source: "curated" },
      { title: "From weeks of work to days: How I rebuilt two data journalism projects with AI", url: "/curated/2026-06-26-ottaviani-data-journalism-ai-reuters/", _source: "curated" },
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" },
      { title: "The People Who Will Thrive in the AI Age", url: "/curated/2026-06-28-brooks-people-thrive-ai-age-atlantic/", _source: "curated" },
      { title: "How to spot AI writing", url: "/curated/2026-07-30-economist-ai-writing-detection/", _source: "curated" },
      { title: "What Are Companies Getting for All That A.I. Spending?", url: "/curated/2026-08-03-depillis-tokenomics-nyt/", _source: "curated" },
      { title: "A linkless internet", url: "/curated/2024-12-06-jennings-linkless-internet-aeon/", _source: "curated" },
      { title: "I'm Begging You: Never Write With A.I.", url: "/curated/2026-08-04-stephens-never-write-ai-nyt/", _source: "curated" },
      { title: "If You're Over 40, You're Ready to Use A.I.", url: "/curated/2026-07-27-millman-kabbalah-ai-nyt/", _source: "curated" },
      { title: "Does AI stop children from learning?", url: "/curated/2026-08-18-economist-ai-learning-penalty-children/", _source: "curated" },
      { title: "Ross Douthat: The Exit Interview", url: "/curated/2026-08-11-klein-douthat-exit-interview-nyt/", _source: "curated" },
      { title: "Destroying Books to Build a Mind", url: "/curated/2026-09-11-mancino-destroying-books-anthropic-newyorker/", _source: "curated" },
      { title: "Aaron Sorkin Goes Off Script", url: "/curated/2026-09-19-sorkin-social-reckoning-nyt/", _source: "curated" },
      { title: "Don't let AI kill the author", url: "/curated/2026-09-24-economist-dont-let-ai-kill-the-author/", _source: "curated" },
      { title: "Kids outlearn AI—and we still don't know why", url: "/curated/2026-08-24-cutts-divario-efficienza-dati-mit-techreview/", _source: "curated" },
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" }
    ]
  },
  {
    name: "scenario planning",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Regno Unito", "Paesi Bassi"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1931373", "https://en.wikipedia.org/wiki/Scenario_planning"],
    note: "Metodo strategico sviluppato in Shell negli anni Settanta (Pierre Wack): invece di prevedere il futuro, si costruiscono scenari alternativi plausibili per rompere i modelli mentali del management. Nel sito è il quadro con cui Amodei ha valutato le conseguenze a lungo termine dell'AI militarizzata prima di rifiutare il contratto con il Pentagono.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" },
      { title: "The death of strategy (and what comes next)", url: "/curated/2026-05-20-smith-death-of-strategy/", _source: "curated" }
    ]
  },
  {
    name: "verum ipsum factum",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Italia"] },
    note: "Principio epistemologico di Vico (1725): conosciamo veramente solo ciò che abbiamo fatto. Le scienze naturali studiano un mondo non prodotto da noi; le humanities studiano istituzioni umane conoscibili dall'interno perché le abbiamo costruite. Nel sito è la base per difendere la rilevanza epistemologica irriducibile delle discipline umanistiche.",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" }
    ]
  },
  {
    name: "ermeneutica del sospetto",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Francia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q3823131"],
    note: "Espressione di Paul Ricœur per descrivere l'approccio di Marx, Nietzsche e Freud: smascherare le ideologie dietro il testo. Nel sito è citata come il metodo dell'ala accademica progressista che ha ridotto la tradizione umanistica a documento dell'oppressione, fornendo involontariamente copertura a chi voleva trasformare l'università in business school.",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" },
      { title: "Why Are Humanists So Bad at Defending the Humanities?", url: "/curated/2026-06-15-pinillos-humanists-humanities-chronicle/", _source: "curated" }
    ]
  },
  {
    name: "incredulità verso le metanarrazioni",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Francia"] },
    related: [
      { name: "La condition postmoderne", why: "La formula nasce lì, nel rapporto che Lyotard scrive per il governo del Québec nel 1979." }
    ],
    note: "Definizione lyotardiana della condizione postmoderna (1979): la perdita di legittimità dei grandi sistemi di giustificazione (Ragione, Storia, Progresso). Nel sito è presentata come diagnosi, non come prescrizione — Lyotard descriveva un fatto, non lo celebrava. Il problema è nei suoi epigoni, che ne hanno fatto uno strumento di relativismo attivo.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "The Meaning of Commitment", url: "/curated/2026-07-29-ypi-meaning-of-commitment-tribune/", _source: "curated" }
    ]
  },
  {
    name: "inemendabilità della realtà",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Italia"] },
    note: "Concetto del nuovo realismo di Ferraris: la realtà resiste agli schemi concettuali che le applichiamo. Non possiamo interpretarla arbitrariamente perché essa oppone resistenza. Nel sito è il limite esterno del processo interpretativo: senza questo vincolo non rimane libertà di interpretare, ma solo il potere di imporre la propria narrazione.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "The Meaning of Commitment", url: "/curated/2026-07-29-ypi-meaning-of-commitment-tribune/", _source: "curated" }
    ]
  },
  {
    name: "educazione estetica",
    related: [
      { name: "paideia", why: "Schiller riprende la promessa greca e la sposta sull'arte: non precettistica ma capacità di abitare prospettive diverse." }
    ],
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Germania"] },
    note: "Concetto di Friedrich Schiller (Lettere sull'educazione estetica dell'uomo, 1795): l'arte come processo collettivo di ricerca della verità, capace di orientare l'essere umano da una vita puramente sensibile verso una moralità più coltivata — non come precettistica rigida ma come capacità di abitare prospettive diverse e costruire relazioni con altri. Nel sito è il framework con cui Ypi legge la letteratura impegnata: la scrittura come mezzo per rompere il rapporto con le predazioni del presente e immaginare alternative.",
    articles: [
      { title: "The Meaning of Commitment", url: "/curated/2026-07-29-ypi-meaning-of-commitment-tribune/", _source: "curated" },
      { title: "Il grigio non è un gusto", url: "/curated/2026-10-02-klein-millman-il-grigio-non-e-un-gusto-nyt/", _source: "curated" }
    ]
  },
  {
    name: "ragione comunicativa",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Germania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q4355373"],
    note: "Concetto di Habermas: ogni volta che argomentiamo presupponiamo già norme condivise — la struttura pragmatica dell'argomentazione richiede che la migliore argomentazione possa prevalere sulla forza. Nel sito è l'universale minimo che il relativismo non può abolire senza autocontraddirsi: argomentare contro l'argomentazione è già argomentare.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "La colonizzazione del giudizio", url: "/curated/2026-06-12-corriere-colonizzazione-giudizio/", _source: "curated" }
    ]
  },
  {
    name: "vetocrazia",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q7923762"],
    note: "Termine coniato da Francis Fukuyama in *Political Order and Political Decay* (2014): un sistema istituzionale in cui i punti di veto si sono moltiplicati al punto che nessuno riesce più a decidere, e la legittimità viene cercata nella produzione di altre regole invece che nei risultati. Non è un eccesso di democrazia ma una sua degenerazione procedurale: le stesse garanzie che limitano il potere arbitrario finiscono per impedire anche l'azione legittima, e questo vale indifferentemente per un'agenda conservatrice o progressista. Nel sito è il concetto che tiene insieme due fronti altrimenti distanti: la paralisi amministrativa americana — dieci anni di permessi per una linea di trasmissione elettrica, un programma lunare che dal 2004 non è ancora arrivato — e il proceduralismo europeo, dove ventisette regimi regolatori sovrapposti impediscono il mercato unico che era il punto di partenza. La conseguenza politica è che l'insofferenza per la regola non nasce solo dall'autoritarismo: nasce anche da istituzioni che hanno smesso di produrre esiti.",
    articles: [
      { title: "Was Francis Fukuyama Right All Along?", url: "/curated/2026-09-18-ezra-klein-fukuyama-nyt/", _source: "curated" },
      { title: "The right balance: how to fix European Union artificial intelligence regulation", url: "/curated/2026-06-11-mariniello-ai-act-costi-conformita-bruegel/", _source: "curated" },
      { title: "Internet Governance in 2026: Sovereignty, Security, and the Limits of Multistakeholderism", url: "/curated/2026-01-04-kulesza-internet-governance-2026-circleid/", _source: "curated" }
    ]
  },
  {
    name: "istituzioni inclusive vs. estrattive",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "Why Nations Fail", why: "Il libro del 2012 in cui Acemoglu e Robinson costruiscono la distinzione e la mettono alla prova su due secoli." }
    ],
    note: "Distinzione di Acemoglu e Robinson (Why Nations Fail, 2012): le istituzioni inclusive distribuiscono potere politico ed economico e generano prosperità; quelle estrattive lo concentrano nelle mani di pochi e generano stagnazione. Nel sito è il quadro per leggere le traiettorie di lungo periodo dei paesi analizzati nella serie «Ombre».",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Naomi Klein: 'Extreme wealth has a deranging effect. It turns you into a supremacist'", url: "/curated/2026-09-18-klein-end-times-fascism-guardian/", _source: "curated" },
      { title: "以贡献为导向深化高校分类评价改革", url: "/curated/2026-03-24-xia-valutazione-differenziata-universita-cina/", _source: "curated" },
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" }
    ]
  },
  {
    name: "disputa sugli universali",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q6092032", "https://it.wikipedia.org/wiki/Disputa_sugli_universali"],
    note: "Controversia filosofica medievale (XI–XIV sec.) su se i concetti generali abbiano esistenza reale (realismo), siano solo nomi (nominalismo) o esistano nella mente (concettualismo). Nel sito è usata per discutere lo statuto ontologico dei contenuti dei LLM: per il platonico stanno in un altrove separato; per il nominalista non stanno affatto.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" }
    ]
  },
  {
    name: "Mavi Vatan",
    related: [
      { name: "Mediterraneo come spazio strategico", why: "La Turchia rivendica il mare come spazio di sicurezza nazionale; è il contrasto con l'incapacità italiana di pensarlo strategicamente." }
    ],
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Turchia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q97725332", "https://en.wikipedia.org/wiki/Blue_Homeland"],
    note: "«Patria Blu»: dottrina geopolitica turca che rivendica la sovranità sul Mediterraneo orientale, il Mar Nero e il Mar Egeo come spazio di sicurezza nazionale. Nel sito è il contrasto implicito con l'incapacità italiana di pensare strategicamente il mare: la Turchia ha costruito un'identità politica fondata sul bacino marino, l'Italia lo vede solo come emergenza.",
    articles: [
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "fattore di sconto δ",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "Parametro della teoria dei giochi iterati (0 ≤ δ ≤ 1): quanto un attore pesa il futuro rispetto al presente. δ alto = attore paziente, cooperativo, orientato al lungo periodo; δ basso = attore miope, defettivo. Nel sito è il parametro chiave per leggere il comportamento degli stati: Trump ha δ basso, Zelensky lo ha alzato strutturalmente dopo l'invasione.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Fareed Zakaria on the Moral Cost of Trump's War", url: "/curated/2026-04-10-zakaria-trump-iran-war-nyt/", _source: "curated" }
    ]
  },
  {
    name: "trasferimenti monetari diretti",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "macroeconomia", why: "Secondo The Economist dare i soldi ai poveri funziona meglio dell'apparato costruito per aiutarli, e la teoria non l'aveva previsto." }
    ],
    note: "Strumento di riduzione della povertà estrema che consiste nel dare liquidità diretta ai beneficiari invece di erogare servizi tramite intermediari. Nel sito è citato come dato che mette in discussione decenni di architetture assistenziali più sofisticate e più costose, a parità o superiorità di efficacia.",
    articles: [
      { title: "From weeks of work to days: How I rebuilt two data journalism projects with AI", url: "/curated/2026-06-26-ottaviani-data-journalism-ai-reuters/", _source: "curated" },
      { title: "A Defense of a Liberal Arts Education in the Age of A.I.", url: "/curated/2026-05-21-frey-liberal-arts-ai-nyt/", _source: "curated" },
      { title: "Why Are Humanists So Bad at Defending the Humanities?", url: "/curated/2026-06-15-pinillos-humanists-humanities-chronicle/", _source: "curated" },
      { title: "One neat trick to end extreme poverty", url: "/curated/2026-04-09-end-extreme-poverty/", _source: "curated" }
    ]
  },
  {
    name: "aiuto allo sviluppo",
    related: [
      { name: "trasferimenti monetari diretti", why: "L'architettura assistenziale è il bersaglio implicito: dare contanti batte i programmi, secondo l'evidenza riportata da The Economist." }
    ],
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q2827815", "https://it.wikipedia.org/wiki/Aiuto_allo_sviluppo"],
    note: "Il complesso di politiche, programmi e architetture istituzionali con cui paesi e organizzazioni internazionali trasferiscono risorse ai paesi a basso reddito. Nel sito è il bersaglio implicito del dibattito sui trasferimenti monetari diretti: l'evidenza che la semplicità batta la sofisticazione costringe a riconsiderare l'intero impianto tradizionale.",
    articles: [
      { title: "One neat trick to end extreme poverty", url: "/curated/2026-04-09-end-extreme-poverty/", _source: "curated" }
    ]
  },
  {
    name: "successione aziendale",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "Il processo di trasmissione della leadership e della proprietà di un'impresa da una generazione o gestione alla successiva. Nel sito è il tema di un caso studio sulle aziende creative di piccole dimensioni: la trasmissione della leadership in questi contesti non assomiglia né a quella delle imprese familiari tradizionali né a quella delle corporation.",
    articles: [
      { title: "Podcast: la successione nelle aziende creative", url: "/curated/2026-04-09-podcast-successione-aziende-creative/", _source: "curated" }
    ]
  },
  {
    name: "piccola impresa",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q1109680"],
    note: "Nel sito è il contesto dimensionale in cui si gioca il problema della successione aziendale nelle industrie creative: scale ridotte, dipendenza dalla figura fondatrice, assenza delle strutture di governance che attutiscono il passaggio generazionale nelle organizzazioni più grandi.",
    articles: [
      { title: "Podcast: la successione nelle aziende creative", url: "/curated/2026-04-09-podcast-successione-aziende-creative/", _source: "curated" },
      { title: "C'è un videogioco in cui vivi le poche gioie e i tanti dolori di un dipendente di una piccola casa editrice indipendente", url: "/curated/2026-09-18-giudici-small-press-tycoon-rivistastudio/", _source: "curated" }
    ]
  },
  {
    name: "editoria",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "legge Bacchelli", why: "Quando chi ha prodotto cultura finisce senza mezzi, lo Stato italiano interviene con un vitalizio caso per caso." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q3972943", "https://it.wikipedia.org/wiki/Editoria"],
    note: "Filo tematico ricorrente nei curated del sito: la sostenibilità economica della produzione culturale e informativa, dalla digitalizzazione di archivi storici dietro paywall, alla precarietà di chi produce conoscenza senza un modello di business solido, alla sovrapposizione crescente tra informazione e difesa nella nomina di figure militari a ruoli editoriali.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "Podcast: la successione nelle aziende creative", url: "/curated/2026-04-09-podcast-successione-aziende-creative/", _source: "curated" },
      { title: "NSDAP-Archiv: Finden Sie heraus, was Ihre Familie unter Hitler getan hat", url: "/curated/2026-05-07-spiegel-nsdap-archiv/", _source: "curated" },
      { title: "La legge Bacchelli per Lea Melandri", url: "/curated/2026-06-06-internazionale-lea-melandri-bacchelli/", _source: "curated" },
      { title: "The strange disappearance of Japan's animators", url: "/curated/2026-06-19-economist-1843-japan-animators/", _source: "curated" },
      { title: "Alex Turner appointed as Defence Editor of The Economist", url: "/curated/2026-06-19-economist-defence-editor-turner/", _source: "curated" },
      { title: "Com'è cambiata l'informazione in Italia negli ultimi 6 anni", url: "/curated/2026-06-19-mauro-informazione-italia-digital-news-report/", _source: "curated" },
      { title: "Europe's public broadcasters go from prime time to hard-to-find", url: "/curated/2026-07-09-economist-psb-europe-hard-to-find/", _source: "curated" },
      { title: "Per contare devi farti amare (l'attenzione non basta più)", url: "/curated/2025-11-10-tarchetti-love-brand-editoria-nonhocapito/", _source: "curated" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" },
      { title: "C'è un videogioco in cui vivi le poche gioie e i tanti dolori di un dipendente di una piccola casa editrice indipendente", url: "/curated/2026-09-18-giudici-small-press-tycoon-rivistastudio/", _source: "curated" },
      { title: "The great regression", url: "/curated/2022-08-05-alt-grande-regressione-kidult-aeon/", _source: "curated" },
      { title: "The Atlantic is getting more subscribers from Google traffic, even as referrals fall", url: "/curated/2026-09-16-scire-atlantic-google-abbonati-niemanlab/", _source: "curated" },
      { title: "Il triste dibattito sullo scrivere con l'IA", url: "/curated/2026-10-02-piacenza-triste-dibattito-scrivere-ia/", _source: "curated" },
      { title: "Il libro che la biblioteca non possiede", url: "/curated/2026-10-01-egan-maher-libro-che-biblioteca-non-possiede-nyt/", _source: "curated" }
    ]
  },
  {
    name: "memoria storica",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Germania"] },
    note: "Nel sito è il terreno di scontro politico attivato dalla digitalizzazione delle schede di iscrizione al NSDAP da parte di Der Spiegel: la domanda aperta è se la sensibilizzazione di massa su un passato totalitario non avrebbe più valore se resa universale invece che dietro paywall, soprattutto mentre forze come l'AfD ne contestano la rilevanza.",
    articles: [
      { title: "NSDAP-Archiv: Finden Sie heraus, was Ihre Familie unter Hitler getan hat", url: "/curated/2026-05-07-spiegel-nsdap-archiv/", _source: "curated" }
    ]
  },
  {
    name: "legge Bacchelli",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q3829711", "https://it.wikipedia.org/wiki/Legge_Bacchelli"],
    note: "Legge italiana dell'8 agosto 1985, n. 440, che consente al Presidente del Consiglio di concedere un vitalizio a cittadini illustri in stato di necessità, con merito comprovato in campo scientifico, culturale, sportivo o sociale. Nel sito è il caso Lea Melandri: un punto dolente per chi sostiene che la produzione di conoscenza debba reggersi su un modello di business solido, non sulla sola buona volontà o sul sussidio pubblico ad hoc.",
    articles: [
      { title: "La legge Bacchelli per Lea Melandri", url: "/curated/2026-06-06-internazionale-lea-melandri-bacchelli/", _source: "curated" }
    ]
  },
  {
    name: "propaganda",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q7281", "https://it.wikipedia.org/wiki/Propaganda"],
    note: "Nel sito è collegata alla sovrapposizione crescente tra i piani dell'informazione e della difesa: la nomina di un generale britannico, ex comandante della 77 Brigade, come defence editor dell'Economist è il caso che rende visibile quanto i contenuti che ne escono sembrino sempre meno innocui — un tema che dialoga con la dottrina Gerasimov e il controllo riflessivo già trattati altrove sul sito.",
    articles: [
      { title: "Alex Turner appointed as Defence Editor of The Economist", url: "/curated/2026-06-19-economist-defence-editor-turner/", _source: "curated" },
      { title: "Unmasking the anonymous hosts of 'Russians With Attitude,' a pro-war podcast popular with US far right", url: "/curated/2026-04-06-hourani-russians-with-attitude-kyivindependent/", _source: "curated" },
      { title: "The Great Russian Firewall: the Kremlin's ultimate crackdown on internet freedom", url: "/curated/2025-12-19-osw-great-russian-firewall/", _source: "curated" },
      { title: "Quando la propaganda smette di sembrare straniera", url: "/curated/2026-09-16-liemienov-maksymiv-propaganda-smette-di-sembrare-straniera-united24/", _source: "curated" }
    ]
  },
  {
    name: "industria dell'animazione",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Giappone"] },
    note: "Nel sito è il caso degli animatori giapponesi: un mercato quasi triplicato in un decennio (fino a 19 miliardi di dollari) che resta cronicamente incapace di formare e remunerare chi produce materialmente il valore — solo uno su cinque riceve oggi formazione sul campo, contro sette su dieci una generazione fa. Un caso da manuale per chi si occupa di editoria e publishing più in generale.",
    articles: [
      { title: "The strange disappearance of Japan's animators", url: "/curated/2026-06-19-economist-1843-japan-animators/", _source: "curated" },
      { title: "The great regression", url: "/curated/2022-08-05-alt-grande-regressione-kidult-aeon/", _source: "curated" }
    ]
  },
  {
    name: "economia",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q8134", "https://it.wikipedia.org/wiki/Scienze_economiche"],
    note: "Filo tematico ricorrente nei curated del sito, in due varianti distinte: come dibattito sugli strumenti di riduzione della povertà estrema (i trasferimenti monetari diretti contro l'architettura assistenziale tradizionale) e come lente con cui leggere la sostenibilità di filiere produttive — dalla cultura all'animazione — che crescono senza remunerare chi ci lavora.",
    articles: [
      { title: "One neat trick to end extreme poverty", url: "/curated/2026-04-09-end-extreme-poverty/", _source: "curated" },
      { title: "The U.S. Is Betting the Economy on 'Scaling' AI: Where Is the Intelligence When One Needs It?", url: "/curated/2025-12-08-storm-scaling-ai-bolla-inet/", _source: "curated" }
    ]
  },
  {
    name: "macroeconomia",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q39680", "https://it.wikipedia.org/wiki/Macroeconomia"],
    note: "Nel sito è il quadro teorico evocato dal dibattito sui trasferimenti monetari diretti: l'evidenza che la semplicità batta la sofisticazione nella riduzione della povertà estrema costringe a riconsiderare assunzioni macroeconomiche più ampie sull'efficacia delle architetture assistenziali tradizionali.",
    articles: [
      { title: "One neat trick to end extreme poverty", url: "/curated/2026-04-09-end-extreme-poverty/", _source: "curated" }
    ]
  },
  {
    name: "commoditizzazione",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q5153139", "https://it.wikipedia.org/wiki/Commoditizzazione"],
    note: "La dinamica per cui un bene o servizio che era differenziato diventa fungibile e il vantaggio competitivo si sposta sul costo marginale di produzione. Nel sito è la lente con cui Thompson legge la competizione sui modelli AI: il token non è la merce giusta, lo è l'intelligenza (output corretto per unità di costo). Chi ha il costo marginale più basso vince; chi non riesce a coprire i costi fissi esce. La strategia cinese di pubblicare i pesi è letta come 'commoditize your complements': aprire l'AI riduce il vantaggio americano nel software e accelera il vantaggio cinese nel mondo fisico.",
    articles: [
      { title: "Who's Afraid of Chinese Models?", url: "/curated/2026-07-20-stratechery-chinese-models/", _source: "curated" },
      { title: "The U.S. Is Betting the Economy on 'Scaling' AI: Where Is the Intelligence When One Needs It?", url: "/curated/2025-12-08-storm-scaling-ai-bolla-inet/", _source: "curated" },
      { title: "Open Weights, Closed Ranks: The AI Manifesto War", url: "/curated/2026-08-12-zuniga-pesi-aperti-manifesti-icle/", _source: "curated" },
      { title: "The Atlantic is getting more subscribers from Google traffic, even as referrals fall", url: "/curated/2026-09-16-scire-atlantic-google-abbonati-niemanlab/", _source: "curated" }
    ]
  },
  {
    name: "marketing",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q39809", "https://it.wikipedia.org/wiki/Marketing"],
    note: "Disciplina con vocazione scientifica il cui livello di scientificità dipende dalla capacità di costruire modelli misurabili — capacità non sempre realizzabile data la complessità dei comportamenti umani. Kotler ne ha fissato i fondamentali: il marketing non è comunicazione né vendita, è la gestione sistematica dello scambio di valore tra un'organizzazione e il suo mercato. Il punto di partenza è sempre il bisogno — non quello che il produttore vuole soddisfare, ma quello che esiste nel mercato — e l'obiettivo è creare, comunicare e distribuire valore in modo che lo scambio sia mutuamente vantaggioso e verificabile. Nella visione kotleriana, dominante almeno fino ai primi due decenni del XXI secolo, il marketing era il software culturale dell'economia di mercato e della globalizzazione: era insomma il sistema di valori, pratiche e narrazioni che rinforzava il funzionamento dei mercati su scala planetaria, costruendo fiducia, codificando preferenze, orientando la domanda. I manuali del tempo — Kotler per primo e meglio degli altri — enfatizzavano questo ruolo quasi civilizzatore, fino a quasi costruire una prospettiva ideologica specifica, orientata al macro, che rischiava di confondere i piani (il fine del marketing è la «creazione di valore» tout court: non può e non deve farsi carico di dinamiche macro a esse superiori). Come la medicina e l'architettura — discipline teoricamente ricche e praticamente pregnanti — il marketing ha una struttura tripartita. Al livello «politico» c'è il lavoro sul concetto: chi siamo, quale valore creiamo nel mondo, cosa vogliamo essere — l'arte di trasformare idee in azioni, sede della definizione degli obiettivi e del posizionamento. Al livello «strategico» il marketing connette mezzi e fini: segmentazione, targeting, architettura dei canali, marketing mix — sede del marketing strategico autentico, non delle chiacchiere tattiche da social media. Al livello «operativo», infine, si esegue: campagne, contenuti, misurazione. Senza questo nulla accade; ma senza i due livelli superiori si producono smanettoni, avventurieri e figure improvvisate. La moralità del marketing — e qui la struttura dell'argomento richiama quella con cui la teologia occidentale ha pensato la guerra giusta — è determinata principalmente dal fine cercato: la modalità di esecuzione ha la sua rilevanza morale autonoma, ma secondaria rispetto all'obiettivo. La sfida aperta è capire come cambia la disciplina — o almeno la sua auto-narrazione — in un contesto di apparente de-globalizzazione: se il marketing era il software culturale di un ordine economico mondiale integrato, cosa diventa quando quell'ordine si frammenta?",
    articles: [
      { title: "Per contare devi farti amare (l'attenzione non basta più)", url: "/curated/2025-11-10-tarchetti-love-brand-editoria-nonhocapito/", _source: "curated" },
      { title: "Le tre IA del Netcomm Forum", url: "/curated/2026-05-21-diegoli-tre-ia-netcomm-forum/", _source: "curated" },
      { title: "David Droga on AI and the end of 'mediocre' human-made ads", url: "/curated/2026-06-21-droga-ai-mediocre-ads/", _source: "curated" },
      { title: "GS1 Web Vocabulary: il dizionario universale che dà voce ai prodotti nel web 3.0", url: "/curated/2026-02-05-giulieri-gs1-web-vocabulary/", _source: "curated" },
      { title: "The 'Manosphere' Isn't a Movement. It's a Multibillion-Dollar Grievance Industry", url: "/curated/2026-08-07-klee-manosphere-grift-economy-wired/", _source: "curated" },
      { title: "The Voice of Google", url: "/curated/2026-07-18-stapleton-voice-of-google-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "GS1 Web Vocabulary",
    related: [
      { name: "Schema.org", why: "Il vocabolario GS1 estende Schema.org con i termini del largo consumo: categoria merceologica, allergeni, logistica." }
    ],
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Belgio"] },
    sameAs: ["https://www.wikidata.org/wiki/Q140514629"],
    note: "Standard che estende Schema.org con termini specifici per il largo consumo — categoria merceologica, allergeni, dettagli logistici — per dare «voce» ai codici a barre sul web. Nel sito è il caso esemplare di infrastruttura semantica mancante: un barcode tradizionale è muto per i motori di ricerca, generativi compresi.",
    articles: [
      { title: "GS1 Web Vocabulary: il dizionario universale che dà voce ai prodotti nel web 3.0", url: "/curated/2026-02-05-giulieri-gs1-web-vocabulary/", _source: "curated" }
    ]
  },
  {
    name: "Schema.org",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q3475322", "https://it.wikipedia.org/wiki/Schema.org"],
    note: "Vocabolario condiviso da Google, Microsoft e altri motori di ricerca per marcare semanticamente i contenuti web. Nel sito è la base su cui si costruisce il GS1 Web Vocabulary, e più in generale il riferimento per qualsiasi discussione su come rendere i contenuti leggibili dalle macchine, motori AI compresi.",
    articles: [
      { title: "GS1 Web Vocabulary: il dizionario universale che dà voce ai prodotti nel web 3.0", url: "/curated/2026-02-05-giulieri-gs1-web-vocabulary/", _source: "curated" }
    ]
  },
  {
    name: "web semantico",
    related: [
      { name: "GS1 Web Vocabulary", why: "GS1 è l'implementazione concreta della promessa: contenuti leggibili dalle macchine, non solo dagli umani." }
    ],
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q54837", "https://it.wikipedia.org/wiki/Web_semantico"],
    note: "L'idea — di cui il GS1 Web Vocabulary è un'implementazione concreta — che i contenuti del web debbano essere strutturati in modo leggibile dalle macchine, non solo dagli umani. Nel sito è il prerequisito infrastrutturale, spesso assente nei cataloghi italiani, perché i prodotti siano «letti» e citati dai motori di ricerca generativi.",
    articles: [
      { title: "GS1 Web Vocabulary: il dizionario universale che dà voce ai prodotti nel web 3.0", url: "/curated/2026-02-05-giulieri-gs1-web-vocabulary/", _source: "curated" }
    ]
  },
  {
    name: "e-commerce",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q484847", "https://it.wikipedia.org/wiki/Commercio_elettronico"],
    note: "Nel sito è il settore attraversato da due pezzi complementari: la domanda se i prodotti italiani siano leggibili dai motori di ricerca generativi (infrastruttura semantica), e la distinzione fra le tre «IA» del commercio digitale che il settore confonde sistematicamente — discovery, infrastruttura, agentica.",
    articles: [
      { title: "Le tre IA del Netcomm Forum", url: "/curated/2026-05-21-diegoli-tre-ia-netcomm-forum/", _source: "curated" }
    ]
  },
  {
    name: "GEO",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q134083964"],
    note: "Generative Engine Optimization: l'equivalente della SEO per i motori di ricerca generativi. Nel sito è il problema pratico di chi si lamenta di non comparire nelle risposte AI senza sapere che, spesso, il blocco bot di Cloudflare attivo di default restituisce 403 proprio ai crawler che vorrebbe accogliere.",
    articles: [
      { title: "Le tre IA del Netcomm Forum", url: "/curated/2026-05-21-diegoli-tre-ia-netcomm-forum/", _source: "curated" },
      { title: "The Atlantic is getting more subscribers from Google traffic, even as referrals fall", url: "/curated/2026-09-16-scire-atlantic-google-abbonati-niemanlab/", _source: "curated" }
    ]
  },
  {
    name: "pubblicità",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q37038", "https://it.wikipedia.org/wiki/Pubblicit%C3%A0"],
    note: "Nel sito è il settore su cui David Droga distingue lavoro creativo «formulaico e medio» (che l'AI sostituirà) da originalità di gusto e strategia (che no) — mentre OpenAI punta a metà dei ricavi pubblicitari di Meta in tre anni e i riassunti AI erodono il traffico su cui si basa l'intero ecosistema.",
    articles: [
      { title: "David Droga on AI and the end of 'mediocre' human-made ads", url: "/curated/2026-06-21-droga-ai-mediocre-ads/", _source: "curated" }
    ]
  },
  {
    name: "stock option",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q187860", "https://it.wikipedia.org/wiki/Opzione_(finanza)"],
    note: "Nel sito è il meccanismo al centro del caso Bending Spoons: un pool di 51 milioni di azioni distribuite ai dipendenti, e il regime fiscale agevolato britannico (EMI) che spiega parte del vantaggio di Londra su Roma e Milano nel generare startup di seconda generazione dagli ex-dipendenti di aziende quotate.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "paideia",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Grecia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1365399", "https://it.wikipedia.org/wiki/Paideia"],
    note: "Il concetto greco di formazione integrale della persona — non istruzione tecnica ma coltivazione del carattere, del giudizio e della capacità di partecipare alla vita civica. Nel sito è il termine che gli umanisti invocano per difendere le proprie discipline, e che Pinillos identifica come parte del problema: un argomento circolare che funziona solo su chi è già convinto del valore della formazione umanistica.",
    articles: [
      { title: "A Defense of a Liberal Arts Education in the Age of A.I.", url: "/curated/2026-05-21-frey-liberal-arts-ai-nyt/", _source: "curated" },
      { title: "Why Are Humanists So Bad at Defending the Humanities?", url: "/curated/2026-06-15-pinillos-humanists-humanities-chronicle/", _source: "curated" },
      { title: "Western philosophy is racist", url: "/curated/2017-10-31-vannorden-canone-filosofico-aeon/", _source: "curated" },
      { title: "I'm a College Professor. Writing Isn't as Important as We Think.", url: "/curated/2026-09-29-cruz-scrittura-pensiero-nyt/", _source: "curated" }
    ]
  },
  {
    name: "canone",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q861437"],
    related: [
      { name: "università", why: "Chi decide cosa entra nel canone decide anche che cosa l'istituzione insegnerà come necessario." }
    ],
    note: "L'insieme delle opere che una cultura tratta come necessarie, e che si presenta come l'elenco di ciò che va letto mentre è l'esito di scelte databili, interessate e reversibili: un catalogo che ha dimenticato di essere stato scelto. Nel sito è studiato nel suo caso più netto — il restringimento del canone filosofico occidentale fra Otto e primo Novecento, ricostruito da Van Norden — ma la struttura è generale e vale per una collana, un piano editoriale, un premio, un programma di studi. Due conseguenze lo rendono utile: se un canone è una decisione, allora ha una data e degli autori, e il suo allargamento è una correzione storiografica prima che una rivendicazione; e se a produrlo è un'istituzione, il canone è anche la forma in cui quell'istituzione dichiara che cosa considera necessario sapere. Questo sito è a sua volta un canone in costruzione, e lo dichiara nella struttura del Sommario ragionato. Il caso del 1619 Project, negli Stati Uniti fra il 2019 e il 2020, aggiunge una torsione che vale la pena registrare: lì chi corregge il canone — la storiografia americana che aveva espulso schiavitù e razza — commette un errore di fatto verificato, e chi lo difende ha ragione su quel punto e ha passato la carriera a non vedere il resto. Leslie M. Harris lo mostra contando le voci d'indice: una sola per «Negroes» e nessuna per la schiavitù in *The Creation of the American Republic* di Gordon Wood, 1969. La correzione di cornice resta giusta, l'errore di fatto resta un errore, e tenere insieme le due cose è tutto il lavoro.",
    articles: [
      { title: "Western philosophy is racist", url: "/curated/2017-10-31-vannorden-canone-filosofico-aeon/", _source: "curated" },
      { title: "I Helped Fact-Check the 1619 Project. The Times Ignored Me.", url: "/curated/2020-03-06-harris-1619-project-fact-check-politico/", _source: "curated" },
      { title: "What Was the American Revolution For?", url: "/curated/2025-11-17-lepore-rivoluzione-americana-250-newyorker/", _source: "curated" },
      { title: "« J'éprouve une compassion profonde pour Thélyson Orélien »", url: "/curated/2026-09-24-mbougar-sarr-compassione-profonda-nouvelobs/", _source: "curated" },
      { title: "Plagiat, IA : le prix Goncourt exclut le roman de Thélyson Orélien", url: "/curated/2026-09-25-goncourt-esclusione-orelien-actualitte/", _source: "curated" }
    ]
  },
  {
    name: "L'alba di tutto",
    sameAs: ["https://www.wikidata.org/wiki/Q108922801", "https://en.wikipedia.org/wiki/The_Dawn_of_Everything"],
    geo: { modo: "diretta", paesi: ["Stati Uniti", "Regno Unito"] },
    type: "testo",
    note: "Libro di David Graeber e David Wengrow (2021), che rilegge la preistoria e la protostoria contro lo schema evolutivo canonico — dalle bande di cacciatori-raccoglitori allo Stato attraverso l'agricoltura — mostrando società che sperimentano stagionalmente forme politiche diverse, costruiscono città senza gerarchie riconoscibili e abbandonano deliberatamente assetti che altrove vengono descritti come inevitabili. Nel sito conta soprattutto per la tesi della critica indigena: alcune categorie centrali del pensiero politico europeo — libertà, uguaglianza, critica dell'autorità — si sarebbero formate dentro il confronto con interlocutori non europei, dalla voce di figure come Kandiaronk nelle relazioni dei missionari all'amministrazione cinese discussa come modello di selezione per merito. Le tesi del libro sono state in parte contestate e il dibattito storiografico resta aperto; l'impianto tiene, ed è fecondo. Se ha ragione anche solo in parte, il restringimento ottocentesco del canone non ha omesso materiale estraneo: ha amputato una relazione costitutiva.",
    citation: "GRAEBER, David, WENGROW, David, <em>The Dawn of Everything. A New History of Humanity</em>, London, Allen Lane, 2021 (trad. it. <em>L'alba di tutto. Una nuova storia dell'umanità</em>).",
    articles: [
      { title: "Western philosophy is racist", url: "/curated/2017-10-31-vannorden-canone-filosofico-aeon/", _source: "curated" }
    ]
  },
  {
    name: "università",
    type: "istituzione",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q3918", "https://it.wikipedia.org/wiki/Universit%C3%A0"],
    note: "Nel sito compare in due contesti distinti: come istituzione che ha abdicato alla formazione umanistica — riducendola a critica dell'oppressione o convertendola in business school — e come luogo in cui quella formazione, fatta bene, produce ancora la competenza cognitiva più preziosa del presente: leggere, scrivere, argomentare con precisione.",
    articles: [
      { title: "A Defense of a Liberal Arts Education in the Age of A.I.", url: "/curated/2026-05-21-frey-liberal-arts-ai-nyt/", _source: "curated" },
      { title: "Why Are Humanists So Bad at Defending the Humanities?", url: "/curated/2026-06-15-pinillos-humanists-humanities-chronicle/", _source: "curated" },
      { title: "Western philosophy is racist", url: "/curated/2017-10-31-vannorden-canone-filosofico-aeon/", _source: "curated" },
      { title: "以贡献为导向深化高校分类评价改革", url: "/curated/2026-03-24-xia-valutazione-differenziata-universita-cina/", _source: "curated" },
      { title: "I'm a College Professor. Writing Isn't as Important as We Think.", url: "/curated/2026-09-29-cruz-scrittura-pensiero-nyt/", _source: "curated" },
      { title: "Why AI Detection Fails for Academic Integrity", url: "/curated/2026-08-06-karr-perche-la-rilevazione-fallisce-arxiv/", _source: "curated" }
    ]
  },
  {
    name: "metodo scientifico",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q46857", "https://it.wikipedia.org/wiki/Metodo_scientifico"],
    note: "Il processo con cui acquisiamo informazione e strutturiamo la conoscenza. Nel sito è l'oggetto della carrellata di Kevin Kelly (2006/2026): non un insieme fisso di protocolli ma una struttura vivente che si modifica con gli strumenti disponibili — e che l'AI potrebbe cambiare nei prossimi 80 anni più di quanto non abbia fatto nei precedenti 80.",
    articles: [
      { title: "Speculations on the Future of the Scientific Method", url: "/curated/2026-05-04-kevin-kelly-future-scientific-method/", _source: "curated" },
      { title: "Happy Birthday C.S. Peirce: Peircean Induction and the Error-Correcting Thesis", url: "/curated/2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics/", _source: "curated" },
      { title: "Philosophy of Statistics", url: "/curated/2025-10-01-romeijn-filosofia-della-statistica-sep/", _source: "curated" },
      { title: "Karl Popper", url: "/curated/2026-07-31-thornton-karl-popper-sep/", _source: "curated" },
      { title: "Different Time, Different Language: Revisiting the Bias Against Non-Native Speakers in GPT Detectors", url: "/curated/2026-02-05-al-ali-bias-rilevatori-rivisitato-eacl/", _source: "curated" }
    ]
  },
  {
    name: "ghostwriting",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "lavoro invisibile", why: "Il ghostwriting è la forma che il lavoro invisibile prende attorno a chi ha potere, esercitando talvolta un suo potere sul potere stesso." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q131464002"],
    note: "La pratica di scrivere testi firmati da altri. Nel sito è il termine chiave del pezzo di Dondi: il ghostwriting ha sempre reso invisibile il lavoro di supporto alle figure di potere senza che questo fosse considerato imbroglio. L'AI ne è una versione più economica e accessibile — e l'indignazione che suscita rivela che il privilegio viene contestato solo quando smette di essere esclusivo.",
    articles: [
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" },
      { title: "AI-written speeches are taking over politics", url: "/curated/2026-09-23-economist-discorsi-scritti-ai-politica/", _source: "curated" }
    ]
  },
  {
    name: "privilegio",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q7246302", "https://en.wikipedia.org/wiki/Social_privilege"],
    note: "Nel sito è il nodo del ragionamento di Dondi: chi ha potere ha sempre avuto accesso a supporto — ghostwriter, editor, speechwriter, assistenti di ricerca — senza che questo fosse considerato imbroglio o segno di incompetenza. I privilegi non si confessano: si usano. L'AI rende visibile questa asimmetria rendendola accessibile a chi ne era storicamente escluso.",
    articles: [
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" },
      { title: "GPT detectors are biased against non-native English writers", url: "/curated/2023-07-10-liang-rilevatori-non-madrelingua-patterns/", _source: "curated" },
      { title: "« J'éprouve une compassion profonde pour Thélyson Orélien »", url: "/curated/2026-09-24-mbougar-sarr-compassione-profonda-nouvelobs/", _source: "curated" }
    ]
  },
  {
    name: "lavoro invisibile",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q130333052", "https://it.wikipedia.org/wiki/Lavoro_invisibile"],
    note: "Il lavoro non riconosciuto, non retribuito o non attribuito che sorregge la produzione culturale e intellettuale visibile. Nel sito è il filo che connette il caso Dondi (ghostwriting come privilegio del potere) e il caso Melandri (chi ha prodotto conoscenza senza ricevere una rendita adeguata dall'industria che ne ha beneficiato).",
    articles: [
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" },
      { title: "Gloria Steinem's Final Essay", url: "/curated/2026-09-03-steinem-final-essay-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "femminicidio",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q1342425", "https://it.wikipedia.org/wiki/Femminicidio"],
    note: "L'omicidio di donne motivato da odio misogino o da dinamiche di controllo maschile. Nel sito è la categoria statistica al centro del pezzo di Columbro: costruita socialmente come tutte le categorie — GDP, disoccupazione, ondate di calore — ma necessaria per misurare un pattern asimmetrico che i dati Istat documentano con chiarezza (53% delle donne ucciso da partner o ex, contro il 4,7% degli uomini).",
    articles: [
      { title: "Il femminicidio non esiste", url: "/curated/2026-05-06-columbro-femminicidio-non-esiste/", _source: "curated" }
    ]
  },
  {
    name: "costruttivismo",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q179270"],
    related: [
      { name: "ontologia sociale", why: "L'ontologia sociale dà al costruttivismo la distinzione che gli manca: come esistono le cose istituite." }
    ],
    note: "La postura epistemologica secondo cui le categorie con cui descriviamo la realtà sono costruzioni sociali, storiche e culturali, non rispecchiamenti di entità naturali preesistenti. Nel sito è la posizione corretta e ben argomentata di Columbro sulle statistiche — e insieme il punto di vulnerabilità che il negazionismo sfrutta quando la distinzione tra costruzione della categoria e negazione del fenomeno non viene esplicitata.",
    articles: [
      { title: "Il femminicidio non esiste", url: "/curated/2026-05-06-columbro-femminicidio-non-esiste/", _source: "curated" }
    ]
  },
  {
    name: "ontologia sociale",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1713511", "https://en.wikipedia.org/wiki/Social_ontology"],
    note: "Lo studio di come esistono le entità sociali — istituzioni, categorie, ruoli, fatti istituzionali. Nel sito compare in due contesti: come distinzione mancante nel costruttivismo di Columbro (il problema non è che il femminicidio «non esista», ma come classificarlo correttamente) e come sfondo nella lettura di Nussbaum (un'ontologia delle virtù fondata sui problemi come entità primarie).",
    articles: [
      { title: "Magnifica Humanitas: le nuove terre rare del potere", url: "/curated/2026-06-17-boccia-artieri-magnifica-humanitas-substack/", _source: "curated" },
      { title: "What Worries Me Most About 'Abundance'", url: "/curated/2026-04-28-klein-abundance-nyt/", _source: "curated" },
      { title: "Il femminicidio non esiste", url: "/curated/2026-05-06-columbro-femminicidio-non-esiste/", _source: "curated" }
    ]
  },
  {
    name: "etica della virtù",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Grecia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1086395", "https://en.wikipedia.org/wiki/Virtue_ethics"],
    note: "La tradizione etica che si concentra sul carattere del soggetto morale piuttosto che su principi universali o calcolo delle conseguenze. Nel sito è riletta attraverso Brady su Nussbaum come una diversa ontologia etica: non un'alternativa all'utilitarismo che aggiunge «virtù» all'ontologia, ma una proposta in cui i problemi — le sfere dell'attività umana dove la scelta è inevitabile — sono primari, e le virtù ne sono le soluzioni virtuali.",
    articles: [
      { title: "A Problem-Based Reading of Nussbaum's Virtue Ethics", url: "/curated/2018-09-04-brady-nussbaum-virtue-ethics-epochemagazine/", _source: "curated" },
      { title: "The second sage", url: "/curated/2016-10-31-vannorden-mengzi-aeon/", _source: "curated" }
    ]
  },
  {
    name: "thymos",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Grecia", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1706580", "https://it.wikipedia.org/wiki/Thumos"],
    note: "Concetto platonico — la parte dell'anima responsabile dell'orgoglio, dell'indignazione e del desiderio di essere riconosciuti — rielaborato da Hegel e portato al centro dell'analisi politica da Francis Fukuyama in *The End of History and the Last Man* (1992). Il thymos è il bisogno umano di riconoscimento del proprio valore: non risorse, non sicurezza, ma rispetto. La democrazia liberale, per Fukuyama, è il sistema che soddisfa il thymos meglio di qualsiasi alternativa — dando riconoscimento eguale sotto la legge. Il problema è che soddisfarlo rimuove la lotta per ottenerlo, e quella lotta era anch'essa parte del bisogno. Questa irrequietezza thymotic — la noia dell'uomo che ha tutto tranne il rischio — è nel sito il meccanismo che spiega il populismo, i movimenti antidemocratici, la nostalgia per epoche premoderne: non sono irrazionali, rispondono a una domanda di riconoscimento gerarchico che l'uguaglianza eguale non può soddisfare.",
    articles: [
      { title: "Why the End of History Is So Miserable", url: "/curated/2026-09-09-beckerman-fukuyama-end-history-atlantic/", _source: "curated" },
      { title: "Was Francis Fukuyama Right All Along?", url: "/curated/2026-09-18-ezra-klein-fukuyama-nyt/", _source: "curated" }
    ]
  },
  {
    name: "liberalismo",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "marketing valoriale", why: "Il caso Economist: un valore identitario che diventa strategia di marca." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q6216", "https://it.wikipedia.org/wiki/Liberalismo"],
    note: "La tradizione filosofico-politica fondata sulla libertà individuale, i diritti, lo stato di diritto e i limiti al potere arbitrario. Nel sito è il valore identitario con cui The Economist costruisce la propria autorità editoriale — una strategia di marketing valoriale distinta dal «marketing della verità» di WaPo e NYT, più resistente alle crisi di credibilità legate all'assetto proprietario.",
    articles: [
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" }
    ]
  },
  {
    name: "marketing valoriale",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "New York Times", why: "Difendere la verità come valore giornalistico è l'alternativa che il Times sceglie e l'Economist scarta." }
    ],
    note: "La strategia comunicativa di costruire l'identità di un brand attorno a un sistema di valori, non solo a una promessa funzionale o fattuale. Nel sito è il modo in cui The Economist ha risposto alla crisi di fiducia nei media: non difendere la verità come valore giornalistico (come WaPo e NYT nel 2016), ma difendere il liberalismo come sistema di valori su scala globale — con molta agiografia, ma con più resistenza strutturale.",
    articles: [
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" },
      { title: "Per contare devi farti amare (l'attenzione non basta più)", url: "/curated/2025-11-10-tarchetti-love-brand-editoria-nonhocapito/", _source: "curated" },
      { title: "Essence is fluttering", url: "/curated/2025-09-01-douglas-zhuangzi-identita-aeon/", _source: "curated" }
    ]
  },
  {
    name: "data journalism",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q5227309", "https://it.wikipedia.org/wiki/Data_journalism"],
    note: "Il giornalismo che usa dati, visualizzazioni e codice come strumenti narrativi e di indagine. Nel sito è il caso in cui la commoditizzazione del layer meccanico (costruire mappe, dashboard, indici) rende più visibile — non meno — il valore del giudizio di dominio: sapere quale domanda vale la pena fare, riconoscere quando l'output è plausibile ma sbagliato, scomporre il problema in modi utili. Jacopo Ottaviani è il caso studio principale.",
    articles: [
      { title: "From weeks of work to days: How I rebuilt two data journalism projects with AI", url: "/curated/2026-06-26-ottaviani-data-journalism-ai-reuters/", _source: "curated" }
    ]
  },
  {
    name: "two-pizza team",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "Vogels, Werner", why: "Il principio organizzativo di Amazon che Vogels rilegge quando un coding agent costruisce un prototipo in una sera." }
    ],
    note: "Principio organizzativo di Amazon (attribuito a Jeff Bezos): nessun team dovrebbe essere così grande da non poter essere sfamato con due pizze. Non è una regola sul cibo ma sull'ownership: team piccoli dove ogni membro conosce il lavoro degli altri, può prendere decisioni reversibili senza chiedere permesso e possiede il problema end-to-end. Nel sito è il sistema immunitario contro l'entropia organizzativa — la tendenza dei team che crescono a sviluppare dipendenze, layer di approvazione e rallentamenti che erodono la velocità che aveva reso il team efficace.",
    articles: [
      { title: "A Return to Two-Pizza Culture", url: "/curated/2026-06-30-vogels-two-pizza-culture-allthingsdistributed/", _source: "curated" },
      { title: "New York Times training editor: Take these four steps before you roll out new things", url: "/curated/2026-09-18-athas-rollout-redazione-niemanlab/", _source: "curated" }
    ]
  },
  {
    name: "moral deskilling",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    note: "Il rischio che la delega crescente di scelte etiche alle macchine eroda la capacità umana di fare ragionamento morale autonomo. Se i sistemi AI decidono sempre più spesso cosa è giusto fare — in contesti medici, legali, militari, quotidiani — gli esseri umani potrebbero perdere l'abitudine, e poi la competenza, di farlo da soli. Nel sito è il contrappeso al ottimismo sulla filosofia nelle AI labs: non basta mettere principi dentro i modelli se chi li usa smette di esercitare il proprio giudizio.",
    articles: [
      { title: "Why Big AI Labs Are Hiring So Many Philosophers", url: "/curated/2026-06-24-economist-ai-labs-philosophers/", _source: "curated" }
    ]
  },
  {
    name: "tianxia",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Cina"] },
    related: [
      { name: "cosmotecnica", why: "Due letture della continuità cinese: una la assume come cosmologia, l'altra la mostra come costruzione recente." }
    ],
    note: "«Tutto sotto il cielo»: concetto di origine Zhou che designa l'ordine del mondo come spazio unico e gerarchicamente armonizzato, senza confini di sovranità paritaria. Nel dibattito contemporaneo è stato rilanciato dal filosofo Zhao Tingyang come modello di governance globale alternativo al sistema degli stati-nazione in competizione: comunità e beneficio reciproco al posto dell'individualismo competitivo occidentale. Nel sito è studiato nella lettura critica di Peter C. Perdue, che lo colloca dentro la dottrina della «grande unità» — huaxia, datong, ren — con cui il discorso ufficiale cinese afferma una continuità civilizzazionale di cinquemila anni: un montaggio recente, che eredita il vocabolario dal Datongshu di Kang Youwei (1902) e l'impianto dalla propaganda nazionalista degli anni Quaranta. Da qui la sua ambiguità strutturale: nato per tenere insieme l'interno, all'esterno chiede agli altri di occupare la posizione che dentro occupano le minoranze, e per questo funziona come collante domestico e non come proposta universale.",
    articles: [
      { title: "One China, one world", url: "/curated/2026-03-26-perdue-tianxia-unita-cina-aeon/", _source: "curated" }
    ]
  },
  {
    name: "cosmotecnica",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Cina"] },
    related: [
      { name: "LLM come attante zero", why: "Due strade alla stessa affermazione: l'Actor-Network Theory, e le tradizioni in cui la macchina non è un elemento alieno." },
      { name: "convergenza strumentale", why: "La premessa prometeica resa esplicita: la novità sarebbe un agente non umano, che è postulato e non osservato." },
      { name: "allineamento AI", why: "Che cosa si chiede a una macchina dipende da che cosa si crede che una macchina sia: la domanda non è la stessa ovunque." }
    ],
    note: "Termine del filosofo Yuk Hui: ogni civiltà ha la propria tecnica radicata nella propria cosmologia — la tecnologia non è universale ma espressione di un modo di stare nel mondo. La cosmotecnica occidentale è fondata sul dominio sulla natura (Cartesio, Bacone); quella cinese sulle grandi tradizioni filosofiche (taoismo, confucianesimo, buddismo) che hanno sempre concepito la macchina come un elemento non necessariamente alieno, e sulla continuità della tradizione statale. Nel sito è il quadro che ridefinisce la «gara» sino-americana sull'AI: non chi costruisce modelli più potenti, ma chi costruisce modelli con quale cosmologia sottostante.\n\nLa cornice si applica anche al versante americano, ed è lì che diventa uno strumento invece di una descrizione. Il doomerism sull'intelligenza artificiale è esso stesso una cosmotecnica: presuppone che la novità sia un **agente non umano**, e lo presuppone invece di dimostrarlo — Eliezer Yudkowsky lo scrive per esteso quando osserva che nell'ambiente ancestrale ogni intelligenza potente in cui ci si imbatteva era un altro essere umano. Accanto, la formula con cui la Cina inquadra istituzionalmente la stessa materia chiede altro: intelligenza artificiale «sicura, affidabile e controllabile», e nell'iniziativa globale annunciata da Xi nell'ottobre 2023 l'impegno ad assicurare che resti «sempre sotto controllo umano». È una domanda su chi controlla, non su che cosa la macchina voglia. Non è una posizione nazionale, e darla per tale sarebbe falso: Andrew Yao firma nell'ottobre 2023 con Hinton e Bengio un appello sui rischi estremi, Wen Gao scriveva nel 2021 dell'esplosione di intelligenza, la Cina ha sottoscritto la dichiarazione di Bletchley nel novembre 2023, e la parola che regge i documenti ufficiali, *anquan*, significa insieme sicurezza e sicurezza nazionale. La differenza che la voce registra non è fra chi teme e chi non teme: è fra **domande predefinite** — che cosa vorrà la macchina, chi la sta usando, chi la controlla.",
    articles: [
      { title: "Cosa intende la Cina per «intelligenza artificiale»", url: "/curated/2026-06-25-pieranni-cina-intelligenza-artificiale-altriorienti/", _source: "curated" },
      { title: "One China, one world", url: "/curated/2026-03-26-perdue-tianxia-unita-cina-aeon/", _source: "curated" },
      { title: "Un obiettivo solo, e sbagliato", url: "/curated/2026-10-01-economist-un-obiettivo-solo-e-sbagliato/", _source: "curated" }
    ]
  },
  {
    name: "patto sociale",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q1326430"],
    note: "L'accordo implicito tra Stato e cittadini che definisce i termini della legittimità politica: obbedienza e ordine in cambio di protezione, benessere e opportunità. Nel sito è il quadro con cui leggere la Cina di fronte all'automazione: il lavoro non è solo questione economica ma fondamento del patto tra il Partito e la popolazione — 12,7 milioni di neolaureati espulsi dal mercato dal lavoro degli agenti AI non è solo un dato occupazionale, è una pressione sulla tenuta del consenso.",
    articles: [
      { title: "IA, bulloni e umanesimo", url: "/curated/2026-06-28-pieranni-ia-bulloni-umanesimo-ilpartito/", _source: "curated" }
    ]
  },
  {
    name: "guerra asimmetrica",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q752673", "https://it.wikipedia.org/wiki/Guerra_asimmetrica"],
    note: "Conflitto in cui gli attori dispongono di capacità radicalmente diverse e il più debole compensa con tattiche non convenzionali — intelligence umana, sabotaggio, reti clandestine. Nel sito è il quadro operativo della resistenza ucraina nei territori occupati: la kill chain alimentata da agenti civili (*vidma*) sostituisce le forze regolari dove queste non possono operare. Dialoga con la dottrina Gerasimov e il controllo riflessivo già presenti nel sito, ma dalla prospettiva opposta: non dell'aggressore ibrido, ma di chi subisce l'occupazione e risponde con gli strumenti del più debole.",
    articles: [
      { title: "The Warrior-Witches of Ukraine's Resistance", url: "/curated/2026-06-21-harbaugh-warrior-witches-ukraine-atlantic/", _source: "curated" },
      { title: "Is Kaliningrad, Russia's exclave surrounded by EU countries, an asset or a liability?", url: "/curated/2022-06-06-economist-kaliningrad-risorsa-o-ostaggio/", _source: "curated" }
    ]
  },
  {
    name: "dati come beni comuni",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q26759606"],
    note: "L'idea che i dati — specialmente quelli prodotti collettivamente da comunità, territori e archivi culturali — debbano essere governati come beni comuni anziché come risorse estrattive di soggetti privati. Nel sito emerge dalla lettura di *Magnifica Humanitas* da parte di Boccia Artieri: la privacy individuale non basta, serve una risposta collettiva che includa infrastrutture pubbliche, dataset aperti e verificabili, forme cooperative di produzione tecnologica. Dialoga con il tema del capitale semantico e con la critica all'economia dell'estrazione.",
    articles: [
      { title: "Magnifica Humanitas: le nuove terre rare del potere", url: "/curated/2026-06-17-boccia-artieri-magnifica-humanitas-substack/", _source: "curated" },
      { title: "Che cosa sono le ambasciate dei dati", url: "/curated/2026-09-27-crescenzi-ambasciate-dati-guerredirete/", _source: "curated" }
    ]
  },
  {
    name: "vibe coding",
    related: [
      { name: "data journalism", why: "La decomposizione in compiti discreti e testabili viene dal pipeline del data journalism: stessa struttura modulare, stesso divide et impera." }
    ],
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Slovacchia", "Canada"] },
    sameAs: ["https://www.wikidata.org/wiki/Q133150082", "https://it.wikipedia.org/wiki/Vibe_coding"],
    note: "Modalità di sviluppo software in cui si descrive ciò che si vuole in linguaggio naturale e si lascia che un LLM scriva il codice. Nel sito è presentato nella versione strutturata di Ottaviani: non un prompt unico ma una decomposizione in compiti discreti e testabili (divide et impera), ognuno con un solo scopo, buildabile e verificabile indipendentemente. La struttura modulare riflette le fasi del pipeline del data journalism e riduce i bug.",
    articles: [
      { title: "From weeks of work to days: How I rebuilt two data journalism projects with AI", url: "/curated/2026-06-26-ottaviani-data-journalism-ai-reuters/", _source: "curated" },
      { title: "A Return to Two-Pizza Culture", url: "/curated/2026-06-30-vogels-two-pizza-culture-allthingsdistributed/", _source: "curated" },
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" }
    ]
  },
  {
    name: "need for cognition",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "polarizzazione cognitiva", why: "La NFC è la linea lungo cui l'AI separa chi la usa per pensare di più da chi la usa per pensare di meno." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q1778408", "https://it.wikipedia.org/wiki/Bisogno_di_cognizione"],
    note: "Costrutto psicologico (Cacioppo e Petty, 1982): la tendenza individuale a impegnarsi e trarre soddisfazione dal pensiero elaborativo. Le persone con alta NFC cercano attivamente la difficoltà cognitiva, la trovano piacevole e la usano per formarsi giudizi propri; quelle con bassa NFC la evitano sistematicamente. Nel sito è il metro con cui Brooks legge la polarizzazione cognitiva nell'era dell'AI: la NFC correla con l'intelligenza ma non coincide — ci sono persone molto intelligenti con bassa NFC e viceversa.",
    articles: [
      { title: "The People Who Will Thrive in the AI Age", url: "/curated/2026-06-28-brooks-people-thrive-ai-age-atlantic/", _source: "curated" },
      { title: "Una lunga avventura: storia degli adventure game", url: "/curated/2026-06-11-machera-adventure-game-linkideeperlatv/", _source: "curated" },
      { title: "Shaping the Future of Learning: Education Readiness for the Age of AI", url: "/curated/2026-06-01-wef-education-readiness-ai/", _source: "curated" },
      { title: "The medieval understanding of intelligence is exactly what we need in the age of A.I.", url: "/curated/2026-08-17-coolman-medieval-intelligence-ai-america/", _source: "curated" },
      { title: "Does AI stop children from learning?", url: "/curated/2026-08-18-economist-ai-learning-penalty-children/", _source: "curated" }
    ]
  },
  {
    name: "polarizzazione cognitiva",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    note: "Scenario descritto da David Brooks nell'era dell'AI: chi ha alta NFC userà l'AI per pensare di più e diventare più produttivo; chi ha bassa o media NFC la userà per pensare di meno, perdendo progressivamente capacità critica e autonomia di giudizio. Brooks sostiene che questa polarizzazione potrebbe essere più grave di quella economica o politica, dividendo la società in qualcosa che comincia ad assomigliare a due specie diverse. Dialoga con il moral deskilling già presente nel sito.",
    articles: [
      { title: "The People Who Will Thrive in the AI Age", url: "/curated/2026-06-28-brooks-people-thrive-ai-age-atlantic/", _source: "curated" },
      { title: "Europe's public broadcasters go from prime time to hard-to-find", url: "/curated/2026-07-09-economist-psb-europe-hard-to-find/", _source: "curated" }
    ]
  },
  {
    name: "cognitive offloading",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q135067344"],
    note: "Processo per cui gli esseri umani delegano carichi cognitivi a strumenti esterni — dalla scrittura alle calcolatrici, fino agli LLM — per ridurre lo sforzo mentale. La distinzione critica è tra strumenti che *estendono* la cognizione (la calcolatrice verifica un calcolo che si sarebbe potuto fare) e strumenti che la *sostituiscono* (l'AI ragiona al posto del soggetto, impedendo che si formi l'architettura neurale necessaria). Nel sito il concetto emerge in relazione all'adozione non strutturata degli LLM nella didattica: il cognitive offloading è fisiologico, ma diventa problematico quando bypassa i processi attraverso cui si costruisce comprensione. Dialoga con *need for cognition* e *polarizzazione cognitiva*.",
    articles: [
      { title: "Shaping the Future of Learning: Education Readiness for the Age of AI", url: "/curated/2026-06-01-wef-education-readiness-ai/", _source: "curated" },
      { title: "Don't let AI kill the author", url: "/curated/2026-09-24-economist-dont-let-ai-kill-the-author/", _source: "curated" },
      { title: "We're living through an explainer epidemic", url: "/curated/2026-09-10-pitcher-epidemia-explainer-dazed/", _source: "curated" },
      { title: "I'm a College Professor. Writing Isn't as Important as We Think.", url: "/curated/2026-09-29-cruz-scrittura-pensiero-nyt/", _source: "curated" }
    ]
  },
  {
    name: "virtù intellettuale",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q10391780", "https://en.wikipedia.org/wiki/Intellectual_virtue"],
    note: "Concetto medievale (Peter Lombard, sec. XII) recuperato da Boyd Taylor Coolman come risposta filosofica alla sfida dell'AI nell'educazione. La virtù intellettuale — leggere, pensare, discutere, meravigliarsi — è un 'fine penultimo': intrinsecamente buona, fonte di gioia in sé, indipendentemente da qualsiasi utilità estrinseca. Si oppone all'idea utilitaristica moderna di intelligenza, che educa *affinché* (buoni cittadini, lavoratori, problem-solver) — un terreno dove l'AI vince strutturalmente. Su questo terreno l'uomo non può essere sostituito perché l'eccellenza non sta nel prodotto ma nell'attività. La genealogia è aristotelico-tomista, ma l'argomento regge indipendentemente dalla cornice teologica. Dialoga con la virtue ethics di MacIntyre — a doppia matrice cattolica e marxista — e con la critica allo spazio liberale fatto di attori puntiformi: i soggetti, per non essere agiti dallo spazio, devono competenzializzarsi.",
    articles: [
      { title: "The medieval understanding of intelligence is exactly what we need in the age of A.I.", url: "/curated/2026-08-17-coolman-medieval-intelligence-ai-america/", _source: "curated" }
    ]
  },
  {
    name: "mezza attenzione",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Italia"] },
    note: "Espressione usata da Gianluca Diegoli per descrivere una modalità di fruizione dei media in cui l'utente è impegnato in un'attività principale (stirare, cucinare, fare le faccende) mentre segue un contenuto audio o video in sottofondo. Non distrazione, ma ascolto stratificato: la televisione pomeridiana l'ha strutturato per decenni, YouTube e i podcast video lunghi la replicano oggi per un pubblico più giovane e istruito. Dialoga con il concetto di iperattenzione di Hayles: i due poli non si escludono, convivono nella stessa persona a seconda del contesto.",
    articles: [
      { title: "I podcast lunghi nell'era della mezza attenzione", url: "/curated/2026-06-29-diegoli-podcast-lunghi-mezza-attenzione-linkideeperlatv/", _source: "curated" },
      { title: "We're living through an explainer epidemic", url: "/curated/2026-09-10-pitcher-epidemia-explainer-dazed/", _source: "curated" }
    ]
  },
  {
    name: "iperattenzione",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q5957651"],
    related: [
      { name: "Hayles, Katherine", why: "Hayles distingue iperattenzione e attenzione profonda come due modalità cognitive, non come un deficit e la sua cura." },
      { name: "mezza attenzione", why: "Due modalità che convivono: lo switching rapido fra stimoli e l'ascolto stratificato in sottofondo." }
    ],
    note: "Concetto di Katherine Hayles: modalità cognitiva caratterizzata da rapido switching tra focus diversi, alta tolleranza alla noia, preferenza per input multipli simultanei. È un adattamento all'ambiente digitale, non un deficit — e la forma dominante dell'attenzione nelle generazioni cresciute con Internet. Nel sito è il contesto che spiega il successo del podcast lungo: il formato fiume non va contro l'iperattenzione ma le offre un'uscita strutturata, uno spazio in cui il carico cognitivo è basso e controllabile.",
    articles: [
      { title: "I podcast lunghi nell'era della mezza attenzione", url: "/curated/2026-06-29-diegoli-podcast-lunghi-mezza-attenzione-linkideeperlatv/", _source: "curated" },
      { title: "The bombarding of childhood", url: "/curated/2026-09-18-kucirkova-hectic-media-bambini-aeon/", _source: "curated" },
      { title: "Zuckerberg says the science isn't settled. But the harms of short-form video on the brain are starting to show", url: "/curated/2026-09-18-enders-short-form-video-cognizione-guardian/", _source: "curated" }
    ]
  },
  {
    name: "news avoidance",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "sfiducia sistemica", why: "Evitare le notizie è la condotta che la sfiducia sistemica produce, secondo il Digital News Report 2026." }
    ],
    note: "Comportamento documentato dal Reuters Institute: la scelta attiva — o semi-conscia — di evitare le notizie, spesso o a volte. Non è indifferenza ma una risposta all'ansia, alla sfiducia e alla sensazione che informarsi non cambi nulla. Nel sito è misurata per l'Italia nel 2026 al 36% — dato che va letto insieme al calo della fiducia sistemica: i due fenomeni si alimentano a vicenda. Dialoga con il concetto di iperattenzione di Hayles: l'evitamento delle notizie può essere sia una forma di autodifesa cognitiva sia un effetto collaterale della frammentazione dell'attenzione.",
    articles: [
      { title: "Com'è cambiata l'informazione in Italia negli ultimi 6 anni", url: "/curated/2026-06-19-mauro-informazione-italia-digital-news-report/", _source: "curated" },
      { title: "Europe's public broadcasters go from prime time to hard-to-find", url: "/curated/2026-07-09-economist-psb-europe-hard-to-find/", _source: "curated" }
    ]
  },
  {
    name: "sfiducia sistemica",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Italia"] },
    note: "Distinzione introdotta esplicitamente dal Digital News Report 2026 per l'Italia: fino al 2025 la bassa fiducia nei media era attribuita alla partisanship dei singoli brand — testate percepite come troppo schierate. Dal 2026 il rapporto descrive un ambiente mediatico «altamente polarizzato» in cui la sfiducia non riguarda più questo o quel giornale ma il sistema dell'informazione nel suo complesso. La differenza non è solo di grado: la sfiducia brand-specifica è reversibile (basta cambiare testata o direttore); quella sistemica non lo è, perché non ha un oggetto su cui intervenire. Nel sito è il dato di sfondo che rende strutturali tutti gli altri indicatori in calo.",
    articles: [
      { title: "Com'è cambiata l'informazione in Italia negli ultimi 6 anni", url: "/curated/2026-06-19-mauro-informazione-italia-digital-news-report/", _source: "curated" },
      { title: "Europe's public broadcasters go from prime time to hard-to-find", url: "/curated/2026-07-09-economist-psb-europe-hard-to-find/", _source: "curated" },
      { title: "Per contare devi farti amare (l'attenzione non basta più)", url: "/curated/2025-11-10-tarchetti-love-brand-editoria-nonhocapito/", _source: "curated" },
      { title: "Unmasking the anonymous hosts of 'Russians With Attitude,' a pro-war podcast popular with US far right", url: "/curated/2026-04-06-hourani-russians-with-attitude-kyivindependent/", _source: "curated" }
    ]
  },
  {
    name: "armi autonome",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q25378861"],
    note: "Sistemi d'arma che identificano e ingaggiano bersagli senza intervento umano diretto. Nel sito è il punto terminale del ragionamento di Brose: la normativa del Pentagono non proibisce esplicitamente l'automazione della kill chain, e in conflitti protratti ci si avvicina a sistemi che «vanno finché trovano qualcosa da colpire». Dialoga con il problema del rubber stamp — un umano tecnicamente nel loop che in pratica non può mai dire no — e con la distinzione tra uso difensivo (bar più basso) e offensivo (bar più alto, ma non proibito).",
    articles: [
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" }
    ]
  },

  {
    name: "post-cognition",
    related: [
      { name: "tassonomia D1–D7", why: "La tassonomia è lo strumento con cui l'intervento esterno tipizza le claim: senza di essa post-cognition non ha su cosa operare." }
    ],
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    lab: true,
    note: "Intervento esterno strutturato sugli output dei modelli linguistici per ricostruire gli impegni ontologici impliciti che il modello stesso non è in grado di rendere espliciti. Il termine, coniato nell'ambito del progetto <em>Validating AI</em>, designa un'operazione epistemica che precede la valutazione della verità: prima di chiedersi se una claim è vera o falsa, occorre stabilire di che tipo di claim si tratti.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/lab/", _source: "lab" },
      { title: "What if 'consciousness' isn't real?", url: "/curated/2026-09-15-bayne-coscienza-non-reale-sciam/", _source: "curated" }
    ]
  },
  {
    name: "epistemia",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Italia"] },
    related: [
      { name: "ecologia dei media", why: "Il medium pone il limite: un formato che non supera i tre minuti produce la sensazione di avere capito, non il tempo di capire." },
      { name: "segnale costoso", why: "Lo screenshot di un chatbot esibito come fonte è l'apparenza della verifica, ed è quella a produrre la sensazione di sapere." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q138835467"],
    lab: true,
    note: "Illusione di conoscenza che emerge nell'interazione con i modelli linguistici: si esce dallo scambio con la sensazione di sapere, senza che si sia prodotta conoscenza. Il termine è di Loru et al. (PNAS 2025) e Quattrociocchi et al. (2025). Non è una proprietà del modello ma un effetto su chi lo usa — il modello vi contribuisce in quanto privo di metacognizione, incapace di valutare lo statuto epistemico di ciò che afferma. È la condizione che <em>post-cognition</em> si propone di contrastare. Nel settembre 2026 l'archivio ne registra la stessa forma in un medium dove il modello non è l'interlocutore ma la scorciatoia di chi parla: nei video *explainer* descritti da *Dazed*, dove la teorica della moda Shuang Bright parla di una «facciata di educazione» — si guarda, si ha la sensazione di essersi arricchiti, si passa al successivo. È un allargamento utile, perché mostra che l'epistemia non richiede un modello linguistico dall'altra parte: richiede soltanto che la forma dello scambio imiti l'esito di una comprensione senza produrla.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/lab/", _source: "lab" },
      { title: "We're living through an explainer epidemic", url: "/curated/2026-09-10-pitcher-epidemia-explainer-dazed/", _source: "curated" }
    ]
  },
  {
    name: "tassonomia D1–D7",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    lab: true,
    note: "Framework classificatorio a sette dimensioni sviluppato nell'ambito del progetto <em>Validating AI</em> per tipizzare le claim degli output LLM. La dimensione D1 classifica il contenuto in undici categorie (storica, statistico-probabilistica, metafisica, causale, normativa e altre). La tassonomia si applica dopo il Pre-Step 0 basato sulla teoria degli atti linguistici.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/lab/", _source: "lab" }
    ]
  },
  {
    name: "atti illocutori",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1599204"],
    lab: true,
    note: "Categoria della teoria degli atti linguistici (Austin 1962) che designa ciò che si fa nel dire qualcosa — affermare, promettere, ordinare, dichiarare. Nel progetto <em>Validating AI</em>, la classificazione illocutoria costituisce il Pre-Step 0: verificare che un enunciato sia un'asserzione è condizione necessaria prima di applicare la tassonomia D1–D7.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/lab/", _source: "lab" }
    ]
  },
  {
    name: "delega epistemica",
    related: [
      { name: "1619 Project", why: "Nell'estate 2019 il Times delegò a una storica la valutazione di un'affermazione e poi non ne accettò l'esito: verifica presente e scavalcata." },
      { name: "epistemia", why: "Si delega la valutazione a un sistema che non la esegue; l'epistemia è l'illusione che la valutazione sia avvenuta." }
    ],
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "La discontinuità specifica introdotta dall'AI rispetto all'automazione precedente: non si delega un'operazione, si delega una valutazione — la selezione dei candidati, il merito creditizio, la diagnosi, il ranking delle informazioni. Nel sito è il concetto che spiega perché un'organizzazione che usa AI senza validazione esplicita si trovi a usare output come se fossero conoscenza, senza poter rispondere alle domande che la conoscenza richiede. Il caso più netto fuori dall'AI è editoriale, e serve a mostrare che il problema non nasce con le macchine: nell'estate 2019 il *New York Times* delegò a una storica esterna la valutazione dell'affermazione centrale del 1619 Project, ricevette una smentita documentata e pubblicò lo stesso. La verifica c'era e non è servita, che è peggio del non averla fatta, perché produce l'apparenza del controllo.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" },
      { title: "Was Francis Fukuyama Right All Along?", url: "/curated/2026-09-18-ezra-klein-fukuyama-nyt/", _source: "curated" },
      { title: "AI-written speeches are taking over politics", url: "/curated/2026-09-23-economist-discorsi-scritti-ai-politica/", _source: "curated" },
      { title: "Kids outlearn AI—and we still don't know why", url: "/curated/2026-08-24-cutts-divario-efficienza-dati-mit-techreview/", _source: "curated" },
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" },
      { title: "I Helped Fact-Check the 1619 Project. The Times Ignored Me.", url: "/curated/2020-03-06-harris-1619-project-fact-check-politico/", _source: "curated" },
      { title: "We're living through an explainer epidemic", url: "/curated/2026-09-10-pitcher-epidemia-explainer-dazed/", _source: "curated" },
      { title: "The Atlantic is getting more subscribers from Google traffic, even as referrals fall", url: "/curated/2026-09-16-scire-atlantic-google-abbonati-niemanlab/", _source: "curated" },
      { title: "I'm a College Professor. Writing Isn't as Important as We Think.", url: "/curated/2026-09-29-cruz-scrittura-pensiero-nyt/", _source: "curated" }
    ]
  },
  {
    name: "sovranità cognitiva",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "La dipendenza da tecnologie cognitive estere come rischio epistemico, non solo operativo: chi controlla l'infrastruttura controlla le condizioni di produzione della conoscenza. Nel sito è l'igiene cognitiva sovrana — sapere cosa sa il proprio sistema, come lo sa, e in quali condizioni potrebbe smettere di saperlo — messa in luce dal caso Fable 5, in cui un executive order americano ha spento un'infrastruttura scientifica in quarantotto ore. Il caso Fable 5 è la versione da politica commerciale del problema: la capacità si spegne perché il fornitore, o il suo governo, decide così. La versione strutturale riguarda i pesi: chi li possiede esercita la capacità a condizioni proprie, e per questo una regolazione che renda i modelli a pesi aperti troppo onerosi da rilasciare produce dipendenza cognitiva come effetto collaterale.",
    articles: [
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "The End of the Foundation Model Era: Open-Weight Models, Sovereign AI, and Inference as Infrastructure", url: "/curated/2026-03-09-grogan-pesi-aperti-sovranita-ai/", _source: "curated" },
      { title: "Che cosa sono le ambasciate dei dati", url: "/curated/2026-09-27-crescenzi-ambasciate-dati-guerredirete/", _source: "curated" },
      { title: "Internet Fragmentation's Outward Turn", url: "/curated/2025-06-01-fidler-splinternet-outward-turn-sciencespo/", _source: "curated" },
      { title: "The Great Russian Firewall: the Kremlin's ultimate crackdown on internet freedom", url: "/curated/2025-12-19-osw-great-russian-firewall/", _source: "curated" },
      { title: "Internet Governance in 2026: Sovereignty, Security, and the Limits of Multistakeholderism", url: "/curated/2026-01-04-kulesza-internet-governance-2026-circleid/", _source: "curated" },
      { title: "Kids outlearn AI—and we still don't know why", url: "/curated/2026-08-24-cutts-divario-efficienza-dati-mit-techreview/", _source: "curated" }
    ]
  },
  {
    name: "femminismo",
    related: [
      { name: "ecologia dei media", why: "Meyrowitz mostra che la televisione patriarcale ha generato suo malgrado la coscienza femminista: l'ambiente conta più del contenuto." }
    ],
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q7252", "https://it.wikipedia.org/wiki/Femminismo"],
    note: "Pur non essendo finalizzato all'attivismo, questo sito non può prescindere da una rappresentazione dell'umanità la più vasta e inclusiva possibile. Alcuni registri in cui compare: come effetto imprevisto di ambienti mediali — Meyrowitz dimostra che la televisione patriarcale degli anni Cinquanta ha generato, suo malgrado, le condizioni per una coscienza femminista allargata; come riequilibrio in corso nell'autorità intellettuale, con le donne che guidano oggi il pensiero filosofico (Origgi); come strumento di lettura della violenza di genere e delle sue rappresentazioni pubbliche (Columbro, Melandri). Il filo comune: una rappresentazione cognitivamente povera del reale (orientata esclusivamente al maschile, alle persone di pelle bianca, con una formazione di stampo anglosassone ecc.) produrrà effetti sociali altrettanto miseri - quando non dannosi.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" },
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" },
      { title: "Il femminicidio non esiste", url: "/curated/2026-05-06-columbro-femminicidio-non-esiste/", _source: "curated" },
      { title: "La legge Bacchelli per Lea Melandri", url: "/curated/2026-06-06-internazionale-lea-melandri-bacchelli/", _source: "curated" },
      { title: "The Warrior-Witches of Ukraine's Resistance", url: "/curated/2026-06-21-harbaugh-warrior-witches-ukraine-atlantic/", _source: "curated" },
      { title: "Non usiamo i media, ci cresciamo dentro", url: "/curated/2026-07-13-tarchetti-media-ecology-non-ho-capito/", _source: "curated" },
      { title: "Gloria Steinem's Final Essay", url: "/curated/2026-09-03-steinem-final-essay-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "dieta mediatica",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "ecologia dei media", why: "Se i media sono un ambiente e non un canale, l'unità da osservare è il regime di consumo, non il singolo contenuto." }
    ],
    note: "L'insieme dei consumi mediali di una persona considerato come regime complessivo — proporzioni, ritmi, orari, alternanza fra formati — invece che come somma di contenuti singoli. Nel sito nasce da un'asimmetria osservata in nutrizione e trasferita qui: gli studi sul singolo alimento producono da decenni risultati piccoli e contraddittori, quelli sui regimi alimentari reggono, e non perché il singolo alimento sia innocuo ma perché non è il livello a cui il fenomeno esiste. La stessa cosa si osserva nella ricerca sui media: la domanda se un formato faccia danno è quasi irrispondibile, mentre l'induzione che certe diete mediatiche nel loro complesso siano nocive è largamente condivisa, anche da chi le pratica. È una critica dell'unità di analisi più che dell'oggetto, e spiega retrospettivamente perché quarant'anni di ricerca sulla televisione abbiano concluso poco. Ha una conseguenza pratica sulla regolazione: gli interventi che le piattaforme accettano quando sono obbligate — tetti orari, blocchi notturni, interruzioni — sono interventi sul regime, non sul contenuto.",
    articles: [
      { title: "Zuckerberg says the science isn't settled. But the harms of short-form video on the brain are starting to show", url: "/curated/2026-09-18-enders-short-form-video-cognizione-guardian/", _source: "curated" }
    ]
  },
  {
    name: "ecologia dei media",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti", "Canada"] },
    related: [
      { name: "Postman, Neil", why: "Neil Postman fonda un corso chiamato «Ecologia dei media» alla NYU nel 1971. Avrà una certa fortuna." },
      { name: "McLuhan, Marshall", why: "McLuhan aveva detto che il medium è il messaggio; la scuola di Neil Postman parte da lì e aggiunge il giudizio morale." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q2583195", "https://it.wikipedia.org/wiki/Ecologia_dei_media"],
    note: "Scuola di pensiero di Neil Postman, che ne introduce il termine nel 1968 e fonda il programma alla NYU nel 1971: i media non sono canali neutri di trasmissione ma ambienti che modellano la percezione, la cognizione e la struttura sociale indipendentemente dai contenuti. Il precursore è McLuhan con il concetto di «medium come messaggio». Nel sito è applicata da Tarchetti per ricordare agli editori che il digitale non è un canale di distribuzione ma un ambiente che determina quali contenuti possono esistere. Il punto si estende all'AI: un LLM non è neutro rispetto ai contenuti che produce, è un ambiente con proprietà strutturali proprie.",
    articles: [
      { title: "Non usiamo i media, ci cresciamo dentro", url: "/curated/2026-07-13-tarchetti-media-ecology-non-ho-capito/", _source: "curated" },
      { title: "Una lunga avventura: storia degli adventure game", url: "/curated/2026-06-11-machera-adventure-game-linkideeperlatv/", _source: "curated" },
      { title: "Ross Douthat: The Exit Interview", url: "/curated/2026-08-11-klein-douthat-exit-interview-nyt/", _source: "curated" },
      { title: "The Original Sin of AI", url: "/curated/2026-09-11-turkle-original-sin-ai-atlantic/", _source: "curated" },
      { title: "My team fed chatbots election lies. Here's what happened.", url: "/curated/2026-08-25-norden-chatbot-election-lies-wapo/", _source: "curated" },
      { title: "The bombarding of childhood", url: "/curated/2026-09-18-kucirkova-hectic-media-bambini-aeon/", _source: "curated" },
      { title: "We're living through an explainer epidemic", url: "/curated/2026-09-10-pitcher-epidemia-explainer-dazed/", _source: "curated" }
    ]
  },
  {
    name: "narrazione interattiva",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q2903135"],
    note: "Forma narrativa in cui il lettore-giocatore partecipa attivamente alla costruzione della storia attraverso scelte, enigmi o movimenti nello spazio. Nel sito è il concetto-ombrello che copre l'evoluzione dall'avventura grafica classica (punta e clicca, anni '80-'90) alle forme contemporanee: story-driven games (Telltale, Quantic Dream), walking simulator (*Dear Esther*, *Phoenix Springs*), serie animate interattive (*Dispatch*). Il punto teorico rilevante è che la narrazione interattiva ha progressivamente separato le due componenti originarie dell'adventure game — gli enigmi e la storia — privilegiando la seconda.",
    articles: [
      { title: "Una lunga avventura: storia degli adventure game", url: "/curated/2026-06-11-machera-adventure-game-linkideeperlatv/", _source: "curated" }
    ]
  },

  {
    name: "industrie creative",
    related: [
      { name: "successione aziendale", why: "Nelle aziende creative piccole la successione non somiglia né all'impresa familiare né alla corporation: dipende dalla figura fondatrice." }
    ],
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q969040"],
    note: "Termine dell'economia della cultura che indica i settori in cui la produzione artistica e culturale si combina con logiche di sfruttamento commerciale: editoria, cinema, televisione, videogiochi, musica, merchandise. Nel sito funziona come lente strutturale — non per classificare contenuti ma per osservare le trasformazioni dell'industria che li produce e distribuisce: come le piattaforme (BookTok, algoritmi di raccomandazione) hanno ridisegnato la scoperta e invertito il potere negoziale tra autori indie e editori tradizionali; come i fandom si sono trasformati da audience passive in ecosistemi economici con merch, retreat ed eventi; come la logica dell'IP spinge ogni successo editoriale o videoludico verso l'adattamento cinematografico, spesso con risultati deludenti; come i capitali sovrani (Arabia Saudita) e il private equity entrano come acquirenti di infrastrutture culturali. Il filo comune non è il contenuto delle opere ma la struttura economica e distributiva che le produce, le fa circolare e le monetizza. A questa struttura, che è tutta dal lato dell'offerta, Matt Alt aggiunge nel 2022 una causa di domanda, ed è la tesi che chiama *Grande Regressione*: il consumo adulto di cultura prodotta per bambini — narrativa per ragazzi, manga, Lego, collezionabili — non è immaturità ma adattamento a un orizzonte che non si può pianificare, e comincia nel Giappone degli anni Novanta dopo lo scoppio della bolla, non nell'America dei millennial. La tesi è contestata e Alt cita per nome chi la contesta. Se però regge, ha una conseguenza pratica per chi pubblica: il lettore adulto di narrativa per ragazzi non è una moda né un ripiego, è un mercato con una causa, e si comporta in modo prevedibile finché la causa non si attenua.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "The Steamy, Magical and Now Very Lucrative Romantasy Business", url: "/curated/2026-08-12-miller-muller-romantasy-bloomberg/", _source: "curated" },
      { title: "The dark underbelly of \"Paw Patrol\"", url: "/curated/2026-08-07-economist-paw-patrol-dark-underbelly/", _source: "curated" },
      { title: "L'Arabia Saudita si sta comprando l'industria dei videogiochi. Ecco come", url: "/curated/2026-08-12-lupetti-arabia-saudita-videogiochi-artribune/", _source: "curated" },
      { title: "Si stava meglio quando c'erano i video musicali", url: "/curated/2026-06-10-peroni-video-musicali-crisi-rivistastudio/", _source: "curated" },
      { title: "AI Has Plunged the Book Publishing Industry Into Utter Chaos", url: "/curated/2026-08-17-silman-ai-publishing-chaos-wsj/", _source: "curated" },
      { title: "C'è un videogioco in cui vivi le poche gioie e i tanti dolori di un dipendente di una piccola casa editrice indipendente", url: "/curated/2026-09-18-giudici-small-press-tycoon-rivistastudio/", _source: "curated" },
      { title: "The great regression", url: "/curated/2022-08-05-alt-grande-regressione-kidult-aeon/", _source: "curated" }
    ]
  },

  {
    name: "Hunhu/Ubuntu",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Africa subsahariana"] },
    sameAs: ["https://www.wikidata.org/wiki/Q213843"],
    related: [
      { name: "cosmotecnica", why: "Ogni cosmologia produce la propria idea di persona, e da lì una tecnica che con altre cosmologie collide." }
    ],
    note: "Tradizione morale dominante dell'Africa subsahariana, espressa nel proverbio Nguni/Shona *Umuntu ngumuntu ngabantu*: una persona è una persona attraverso le altre persone. Conosciuta come *Hunhu* nelle comunità Shona di Zimbabwe e Zambia, come *Ubuntu* nelle lingue Nguni del Sudafrica. La formulazione classica è di John S. Mbiti: «I am because we are; since we are, therefore I am». In questo framework la personhood non è qualcosa con cui si nasce ma un divenire relazionale — si acquisisce attraverso il gruppo, il dialogo, l'esperienza e la spiritualità. Il *dare* (corte comunitaria) è il luogo dell'agency collettiva: non un vincolo alla libertà individuale ma la sua massima espressione. Nel sito entra come strumento critico dell'AI: l'architettura dei sistemi AI — motori di raccomandazione, algoritmi di personalizzazione, framework etici di governance — presuppone un modello di persona come unità atomica sovrana (Kant, Mill, Locke) che collide con Hunhu/Ubuntu su punti precisi: nessun *dare* nelle decisioni algoritmiche sul credito, la privacy come diritto individuale vs. informazione che appartiene al clan, le ambizioni illimitate dell'AI vs. la concezione dell'uomo come steward di un ordine cosmologico.",
    articles: [
      { title: "An AI for Africa would be built on Hunhu/Ubuntu ethics", url: "/curated/2026-08-04-mangena-hunhu-ubuntu-ai-aeon/", _source: "curated" },
      { title: "The second sage", url: "/curated/2016-10-31-vannorden-mengzi-aeon/", _source: "curated" },
      { title: "We are interwoven beings", url: "/curated/2022-11-25-valmisa-co-azione-aeon/", _source: "curated" }
    ]
  },

  {
    name: "metamodernismo",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Paesi Bassi"] },
    sameAs: ["https://www.wikidata.org/wiki/Q3380771", "https://en.wikipedia.org/wiki/Metamodernism"],
    note: "Sensibilità culturale e framework teorico elaborato da Timotheus Vermeulen e Robin van den Akker nel saggio «Notes on Metamodernism» (2010, Journal of Aesthetics & Culture), poi sviluppato da Greg Dember e altri. Emerge dalla fine degli anni Novanta come reazione al doppio esaurimento del modernismo (riduzionismo scientifico) e del postmodernismo (svuotamento del senso attraverso ironica distanza). La motivazione centrale, nella formulazione di Dember, è proteggere l'esperienza vissuta (felt experience) — la soggettività interiore, l'earnestness, la vulnerabilità — senza rigettare la consapevolezza ironica acquisita dal postmodernismo. Nel sito è un'antenna utile per leggere una certa qualità della cultura contemporanea: la capacità di essere sinceri e ironici insieme, di oscillare tra modernista convinzione e postmoderna relativizzazione senza rimanere paralizzati in nessuna delle due posizioni.",
    articles: [
      { title: "After Postmodernism: Eleven Metamodern Methods in the Arts", url: "/curated/2018-04-17-dember-metamodern-methods-medium/", _source: "curated" },
      { title: "The great regression", url: "/curated/2022-08-05-alt-grande-regressione-kidult-aeon/", _source: "curated" }
    ]
  },

  {
    name: "neghentropia",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q252552"],
    related: [
      { name: "guadagno epistemico", why: "Il guadagno corregge la neghentropia, che da sola premierebbe il testo peggiore immaginabile." },
      { name: "A Mathematical Theory of Communication", why: "La neghentropia si appoggia al formalismo che Shannon costruisce nel 1948." }
    ],
    note: "Informazione come distanza dallo stato di equiprobabilità, nella linea Schrödinger–Brillouin–Wiener. Nel sito è il criterio con cui si misura l’effetto di un testo su chi legge: non quanto è lungo, elegante o documentato, ma quanta indifferenza fra alternative riduce — un testo privo di effetti sulle attese è l’operatore identità. Da sola però non basta: un saggio scritto benissimo attorno a una tesi falsa è neghentropico in senso stretto e distruttivo in senso epistemico, e va corretta con il guadagno epistemico.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" },
      { title: "Aaron Sorkin Goes Off Script", url: "/curated/2026-09-19-sorkin-social-reckoning-nyt/", _source: "curated" }
    ]
  },
  {
    name: "legge della varietà richiesta",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    sameAs: ["https://www.wikidata.org/wiki/Q724967"],
    note: "Legge di Ashby: la varietà del regolatore deve eguagliare quella del sistema regolato — solo varietà distrugge varietà. Nel sito ha due usi complementari. Dal lato del singolo testo, spiega perché la selezione (scelta della domanda, del taglio, di ciò che resta fuori) sia l’operazione che rende un corpus adeguato a un problema. Dal lato del sistema, spiega perché la contrazione della varianza fra i prior degli autori attivi in un campo sia il solo effetto dell’AI generativa che meriti davvero allarme.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },
  {
    name: "principio di Landauer",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Germania", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q657486", "https://it.wikipedia.org/wiki/Principio_di_Landauer"],
    note: "La cancellazione di un bit costa almeno kT ln 2; per Bennett la computazione può essere resa logicamente reversibile, e il passaggio irriducibilmente dissipativo è appunto la cancellazione, cioè la selezione fra stati. Nel sito è il ponte fisico dell’argomento sulla scrittura: scrivere è selezionare, e ogni testo esiste in quanto scarto di tutti i testi che non sono stati scritti. Gli strumenti generativi abbassano di ordini di grandezza il costo della produzione e lasciano intatto quello della selezione.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },
  {
    name: "guadagno epistemico",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "Misura di quanto un testo accorcia la distanza fra le attese di un ricevente e il mondo. Si distingue dalla sola riduzione di entropia, che premierebbe il testo peggiore immaginabile — quello che organizza benissimo le attese attorno a una tesi falsa — e ammette un caso nullo che il dibattito non considera mai: il lettore si sposta lateralmente, sostituisce un errore con un altro ugualmente distante, e ha la sensazione di aver imparato qualcosa. È definito sempre su un ricevente, mai in astratto: lo stesso identico testo vale molto per un pubblico e zero per un altro senza che una virgola sia cambiata. Il caso documentato è la frase del 1619 Project sulla Rivoluzione americana, agosto 2019: una sola proposizione che rende l'intera narrazione più coerente, più memorabile e più insegnabile, e che è falsa. È il testo peggiore immaginabile nel senso tecnico della definizione — organizza le attese attorno a una tesi sbagliata — e il fatto che serva una causa giusta non cambia il calcolo.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" },
      { title: "I Helped Fact-Check the 1619 Project. The Times Ignored Me.", url: "/curated/2020-03-06-harris-1619-project-fact-check-politico/", _source: "curated" }
    ]
  },
  {
    name: "piano dei regimi",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    note: "Il piano su cui si legge il regime di un testo rispetto a un lettore: la spinta utile diviso il costo dello spostamento in ascissa, la rigidità diviso lo spostamento in ordinata. Due rette critiche dividono valore, struttura falsa, provocazione e apertura; sotto lo zero corre la banda della conferma. L'intensità dello spostamento resta fuori dal giudizio.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "divergenza di Kullback-Leibler",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q255166", "https://it.wikipedia.org/wiki/Divergenza_di_Kullback-Leibler"],
    note: "Misura, in bit, quanto costa usare un modello per prevedere un mondo che si comporta in un altro modo. Nel sito è l'unica operazione da cui discendono spostamento e guadagno epistemico. La sua asimmetria — sbagliarsi per eccesso di certezza costa più che sbagliarsi per prudenza — è ciò che permette di rilevare la sovraconfidenza di un testo ben riuscito.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },

  // ─── LUOGHI ───────────────────────────────────────────────────────────────

  {
    name: "Taiwan",
    type: "luogo",
    geo: { modo: "diretta", paesi: ["Taiwan"] },
    related: [
      { name: "Taiwan / TSMC", why: "La stessa isola contata due volte: come democrazia, e come collo di bottiglia dei chip avanzati." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q865", "https://it.wikipedia.org/wiki/Taiwan"],
    note: "Isola di 23 milioni di abitanti, democrazia multipartitica dal 1996, produttore di oltre il 90% dei chip avanzati globali. Nel sito è un nodo geopolitico complesso: la sua democrazia non è solo un sistema politico ma un deterrente strutturale — un'annessione non militare richiederebbe repressione visibile al mondo (processi farsa, giuramenti di fedeltà, rieducazione di massa) che alzerebbe il costo politico globale per Pechino. Il caso Taiwan è anche un laboratorio del meccanismo di destabilizzazione dall'interno: legami economici delle aziende KMT-friendly con la Cina creano veti strutturali sulla spesa per la difesa, mentre la campagna di social media continentali deride la democrazia come caotica. Lo stesso schema — avversario sistemico che sfrutta i conflitti di interesse interni a una democrazia — è generalizzabile a Georgia, Ungheria, Serbia e ad altri contesti europei.",
    articles: [
      { title: "Taking Taiwan's democracy hostage", url: "/curated/2026-08-11-economist-taiwan-democracy-hostage/", _source: "curated" },
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "The Future of Ukraine's Drone Democracy", url: "/curated/2026-08-26-gumenyuk-ukraine-drone-democracy-foreignaffairs/", _source: "curated" }
    ]
  },

  // ─── TESTI ────────────────────────────────────────────────────────────────

  {
    name: "A Mathematical Theory of Communication",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q724029", "https://it.wikipedia.org/wiki/A_mathematical_theory_of_communication"],
    note: "Articolo di Claude E. Shannon (1948), atto di nascita della teoria dell’informazione. Nel sito fornisce il formalismo con cui si misura l’effetto di un testo su chi legge, e insieme disinnesca un equivoco ricorrente: nel formalismo shannoniano convivono due oggetti omonimi — l’entropia di una sorgente, che misura quanta informazione essa può emettere, e l’entropia di uno stato, che misura quanto quello stato sia indifferenziato. Ciò che il linguaggio comune chiama informazione ha in Shannon un nome esatto: è la ridondanza.",
    citation: "SHANNON, Claude E., <a href=\"https://doi.org/10.1002/j.1538-7305.1948.tb01338.x\">\u201cA Mathematical Theory of Communication\u201d</a>, <em>The Bell System Technical Journal</em>, vol. 27, 1948, pp. 379-423 e 623-656.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },
  {
    name: "The Evolution of Cooperation",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q915809", "https://en.wikipedia.org/wiki/The_Evolution_of_Cooperation"],
    note: "Libro di Robert Axelrod (1984). Riporta i risultati del torneo computazionale del dilemma del prigioniero e dimostra che la cooperazione può emergere tra attori egoisti in contesti iterati. Punto di partenza teorico della serie «Ombre» del sito: il lavoro che ha dato base scientifica all'idea che la cooperazione sia razionale.",
    citation: "AXELROD, Robert, <a href=\"https://openlibrary.org/books/OL3186143M/The_evolution_of_cooperation\"><em>The Evolution of Cooperation</em></a>, New York, Basic Books, 1984.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" }
    ]
  },
  {
    name: "Copenhagen",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1561910", "https://it.wikipedia.org/wiki/Copenhagen_(opera_teatrale)"],
    note: "Dramma teatrale di Michael Frayn (1998) che ricostruisce l'incontro del 1941 tra Niels Bohr e Werner Heisenberg a Copenhagen. Frayn non riesce a stabilire cosa i due si dissero davvero — non per mancanza di documenti, ma perché due scienziati dentro sistemi di potere in conflitto non hanno più una lingua comune. Nel sito apre la riflessione su come il sapere smetta di essere neutrale quando la tecnologia diventa risorsa strategica.",
    citation: "FRAYN, Michael, <em>Copenhagen</em>, Londra, Methuen Drama, 1998.",
    articles: [
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" }
    ]
  },
  {
    name: "Antifragile",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q4774726", "https://en.wikipedia.org/wiki/Antifragile_(book)"],
    note: "Libro di Nassim Taleb (2012), terzo volume della pentalogia Incerto. Formalizza la distinzione tra sistemi fragili, robusti e antifragili attraverso la disuguaglianza di Jensen. Nel sito è citato sia per il nucleo matematico (risposta convessa vs. concava ai disturbi) sia per le implicazioni politiche: il modello cinese come esempio di fragilità mascherata da efficienza.",
    citation: "TALEB, Nassim Nicholas, <a href=\"https://archive.org/details/antifragilething0000tale\"><em>Antifragile: Things That Gain from Disorder</em></a>, New York, Random House, 2012.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "La condition postmoderne",
    sameAs: ["https://www.wikidata.org/wiki/Q2186033", "https://it.wikipedia.org/wiki/La_condizione_postmoderna"],
    geo: { modo: "diretta", paesi: ["Francia"] },
    type: "testo",
    note: "Rapporto di Jean-François Lyotard (1979) sulla «condizione del sapere» nelle società avanzate. Conia la formula «incredulità verso le metanarrazioni». Nel sito è usato per mostrare come la diagnosi postmoderna sia stata rovesciata in strumento di potere dai populismi contemporanei — uso che Lyotard non aveva prescritto.",
    citation: "LYOTARD, Jean-François, <a href=\"https://openlibrary.org/books/OL4462200M/La_condition_postmoderne\"><em>La condition postmoderne: rapport sur le savoir</em></a>, Parigi, Les Éditions de Minuit, 1979 (trad. it. <em>La condizione postmoderna</em>, Milano, Feltrinelli, 1981).",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Dialektik der Aufklärung",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Germania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1208415", "https://it.wikipedia.org/wiki/Dialettica_dell'illuminismo"],
    note: "Opera di Adorno e Horkheimer (1947). La tesi: l'illuminismo porta in sé i germi del proprio rovesciamento — la ragione strumentale, separata da fondamenti normativi, diventa dominio. Nel sito il capovolgimento è letto diversamente: non è l'illuminismo che si è rovesciato su se stesso, è la sua critica che si è rovesciata.",
    citation: "ADORNO, Theodor W. e Max Horkheimer, <a href=\"https://openlibrary.org/books/OL5516420M/Dialektik_der_Aufkla%CC%88rung.\"><em>Dialektik der Aufklärung</em></a>, Amsterdam, Querido, 1947 (trad. it. <em>Dialettica dell'Illuminismo</em>, Torino, Einaudi, 1966).",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Why Nations Fail",
    sameAs: ["https://www.wikidata.org/wiki/Q7997840", "https://it.wikipedia.org/wiki/Perché_le_nazioni_falliscono"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    type: "testo",
    note: "Libro di Daron Acemoglu e James Robinson (2012). Argomenta che prosperità e fallimento degli stati dipendono dalla qualità delle loro istituzioni — inclusive o estrattive. Nel sito è il quadro teorico per leggere le traiettorie degli stati analizzati nella serie «Ombre».",
    citation: "ACEMOGLU, Daron e James A. Robinson, <a href=\"https://openlibrary.org/works/OL16568759W/Why_Nations_Fail\"><em>Why Nations Fail: The Origins of Power, Prosperity, and Poverty</em></a>, New York, Crown Business, 2012.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "The End of History and the Last Man",
    sameAs: ["https://www.wikidata.org/wiki/Q1340341", "https://en.wikipedia.org/wiki/The_End_of_History_and_the_Last_Man"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    type: "testo",
    related: [
      { name: "thymos", why: "Il libro che porta il concetto platonico del riconoscimento al centro dell'analisi politica contemporanea." }
    ],
    note: "Libro di Francis Fukuyama (1992), derivato dall'articolo 'The End of History?' pubblicato su *The National Interest* nel 1989. Argomenta — in chiave hegeliana — che la dissoluzione dell'URSS segna la fine della storia non come cessazione degli eventi ma come esaurimento delle idee politiche in competizione: la democrazia liberale non ha più un antagonista ideologico credibile. L'equivoco sistematico con cui il libro viene ricevuto è che sia trionfalistico. Non lo è: i capitoli finali, quasi mai letti, descrivono l'instabilità strutturale dell'uomo che abita la fine — il Last Man nietzschiano, colui che ha ottenuto il riconoscimento eguale e non sopporta di non avere più nulla per cui rischiare la vita. Il libro si chiude sull'avvertimento che questa irrequietezza si rivolterà contro la democrazia stessa.",
    citation: "FUKUYAMA, Francis, <a href=\"https://openlibrary.org/works/OL2639721W/The_end_of_history_and_the_last_man\"><em>The End of History and the Last Man</em></a>, New York, Free Press, 1992 (trad. it. <em>La fine della storia e l'ultimo uomo</em>, Milano, Rizzoli, 1992).",
    articles: [
      { title: "Why the End of History Is So Miserable", url: "/curated/2026-09-09-beckerman-fukuyama-end-history-atlantic/", _source: "curated" },
      { title: "Was Francis Fukuyama Right All Along?", url: "/curated/2026-09-18-ezra-klein-fukuyama-nyt/", _source: "curated" }
    ]
  },
  {
    name: "The Embodied Mind",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q139812985"],
    note: "Libro di Francisco Varela, Evan Thompson ed Eleanor Rosch (1991). Propone la cognizione come radicata nel corpo e nell'esperienza vissuta, contro il cognitivismo classico. Nel sito è il testo che «cambia statuto» davanti a un LLM: da posizione tra altre diventa criterio di distinzione tra mente biologica e macchina.",
    citation: "VARELA, Francisco J., Evan Thompson e Eleanor Rosch, <a href=\"https://openlibrary.org/books/OL26933223M/The_embodied_mind\"><em>The Embodied Mind: Cognitive Science and Human Experience</em></a>, Cambridge (MA), MIT Press, 1991.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Discours de la méthode",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Francia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q731224", "https://it.wikipedia.org/wiki/Discorso_sul_metodo"],
    note: "Opera di René Descartes (1637). Propone il metodo del dubbio sistematico come fondamento della conoscenza certa, e la «morale provvisoria» come strategia conservatrice durante la demolizione delle vecchie certezze. Nel sito è usato come analogia del programma illuminista: ricostruire le fondamenta richiede un alloggio provvisorio.",
    citation: "DESCARTES, René, <a href=\"https://openlibrary.org/books/OL18269385M/Discours_de_la_m%C3%A9thode\"><em>Discours de la méthode</em></a>, Leida, Jan Maire, 1637 (trad. it. <em>Discorso sul metodo</em>, Milano, Bompiani, 2002).",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },

  {
    name: "Le Fake News e il Marketing del Vero",
    related: [
      { name: "post-cognition", why: "Il precursore intellettuale: la domanda su come si produce e si commercia il vero, posta otto anni prima del progetto." }
    ],
    type: "testo",
    geo: { modo: "nessuna", paesi: [] },
    lab: true,
    note: "Articolo di Claudio Cammarano pubblicato su Medium (The Abstract, 2018). Precursore intellettuale del progetto <em>Validating AI</em>: la domanda su come si produce e si commercializza la verità prefigura l'indagine successiva su come i modelli linguistici generino output epistemicamente non fondati.",
    citation: "CAMMARANO, Claudio, <a href=\"https://medium.com/the-abstract/le-fake-news-e-il-marketing-del-vero-56c74f11ce4b\"><em>Le Fake News e il Marketing del Vero</em></a>, <em>The Abstract</em>, Medium, 2018.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/lab/", _source: "lab" }
    ]
  },

  // ─── ISTITUZIONI ──────────────────────────────────────────────────────────

  {
    name: "Anthropic",
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q116758847", "https://it.wikipedia.org/wiki/Anthropic"],
    note: "Azienda AI americana fondata nel 2021 da Dario Amodei e altri ex OpenAI. Nel sito è la protagonista dell'articolo sul rifiuto del contratto col Pentagono: rappresenta il modello dell'azienda AI che prende sul serio l'allineamento e le conseguenze strategiche a lungo termine. Nel dibattito sul dual use sceglie esplicitamente di non partecipare ai contratti militari diretti.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "Mythos, Muse, and the Opportunity Cost of Compute", url: "/curated/2026-04-13-stratechery-opportunity-cost-compute/", _source: "curated" },
      { title: "Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations", url: "/curated/2026-05-07-anthropic-nla-activations/", _source: "curated" },
      { title: "Making Claude a chemist", url: "/curated/2026-06-05-anthropic-claude-chemist/", _source: "curated" },
      { title: "Il Golem e l'AI", url: "/curated/2026-06-08-giannella-golem-ai/", _source: "curated" },
      { title: "To Land a Job in AI, Try Reading Kant", url: "/curated/2026-06-12-wired-philosophers-ai-jobs/", _source: "curated" },
      { title: "When AI builds itself", url: "/curated/2026-06-19-anthropic-recursive-self-improvement/", _source: "curated" },
      { title: "Why Big AI Labs Are Hiring So Many Philosophers", url: "/curated/2026-06-24-economist-ai-labs-philosophers/", _source: "curated" },
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" },
      { title: "Intelligenza artificiale e rischio estinzione, che cosa pensano (davvero) gli scienziati?", url: "/curated/2026-09-26-signorelli-rischio-estinzione-scienziati-backdoor/", _source: "curated" },
      { title: "Pacing the Frontier", url: "/curated/2026-07-28-pacing-the-frontier-lettera/", _source: "curated" },
      { title: "Il movimento che ha costruito ciò che temeva", url: "/curated/2026-10-01-economist-movimento-che-ha-costruito-cio-che-temeva/", _source: "curated" },
      { title: "Il rilevatore prima dell'oggetto", url: "/curated/2026-08-20-economist-rilevatore-prima-delloggetto/", _source: "curated" }
    ]
  },
  {
    name: "Anduril",
    sameAs: ["https://www.wikidata.org/wiki/Q61918830", "https://en.wikipedia.org/wiki/Anduril_Industries"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    type: "istituzione",
    related: [
      { name: "Palantir", why: "Le due aziende che hanno riportato Silicon Valley dentro la difesa, per strade diverse." }
    ],
    note: "Azienda della difesa fondata nel 2017 da Palmer Luckey. Nel sito è il caso del modello alternativo al contractor tradizionale: VC-funded, rischio imprenditoriale proprio, software (Lattice, sistema di controllo autonomo delle macchine sul campo) e hardware (Collaborative Combat Aircraft, sistema anti-drone Pulsar). Incarna la scelta opposta ad Anthropic: partecipare attivamente allo sviluppo di sistemi d'arma autonomi, ritenendo che non farlo significhi lasciare il campo a chi lo farà peggio.",
    articles: [
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Palantir",
    sameAs: ["https://www.wikidata.org/wiki/Q2047336", "https://it.wikipedia.org/wiki/Palantir_Technologies"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    type: "istituzione",
    related: [
      { name: "Karp, Alexander", why: "L'ha fondata con Thiel nel 2003 e nel 2026 ne ha scritto il manifesto politico." }
    ],
    note: "Azienda di data analytics fondata nel 2003 da Peter Thiel e Alexander Karp. Nel sito è la controparte di Anthropic: Karp ha pubblicato un manifesto in favore dell'impegno militare di Silicon Valley, Palantir lavora attivamente con il Dipartimento della Difesa americano. Caso studio della scelta opposta a quella di Amodei.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "Why Are Palantir and OpenAI Scared of Alex Bores?", url: "/curated/2026-04-21-bores-palantir-openai-regulation-nyt/", _source: "curated" },
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" },
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "DARPA",
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q207361", "https://it.wikipedia.org/wiki/Defense_Advanced_Research_Projects_Agency"],
    note: "Defense Advanced Research Projects Agency: agenzia del Dipartimento della Difesa americano responsabile delle tecnologie emergenti per uso militare. Nel sito è citata come fonte storica di tecnologie civili: i vaccini a mRNA derivano da ricerche finanziate da DARPA contro il bioterrorismo. Caso esemplare di dual use e general purpose technology.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "NSDAP",
    related: [
      { name: "memoria storica", why: "La digitalizzazione delle schede di iscrizione da parte di Der Spiegel è ciò che riapre lo scontro sulla memoria." }
    ],
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Germania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q7320", "https://it.wikipedia.org/wiki/Partito_Nazionalsocialista_Tedesco_dei_Lavoratori"],
    note: "Partito nazionalsocialista tedesco (1920–1945). Nel sito è il riferimento storico della digitalizzazione, da parte di Der Spiegel con l'ausilio dell'AI, di milioni di schede di iscrizione rilasciate dagli Archivi Nazionali americani nel 2026: uno strumento che rende chiunque in grado di costruirsi un dossier su cosa ha fatto la propria famiglia sotto Hitler.",
    articles: [
      { title: "NSDAP-Archiv: Finden Sie heraus, was Ihre Familie unter Hitler getan hat", url: "/curated/2026-05-07-spiegel-nsdap-archiv/", _source: "curated" }
    ]
  },
  {
    name: "AfD",
    related: [
      { name: "memoria storica", why: "Contesta politicamente la memoria: il caso in cui la cultura tedesca del ricordo viene messa alla prova." }
    ],
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Germania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q6721203", "https://it.wikipedia.org/wiki/Alternative_f%C3%BCr_Deutschland"],
    note: "Alternative für Deutschland, partito di estrema destra tedesco. Nel sito è citato come attore della contestazione politica della memoria storica: un dirigente del partito, Björn Höcke, si è scagliato contro la digitalizzazione degli archivi NSDAP — mentre il partito stesso continua a guadagnare terreno in diverse regioni tedesche.",
    articles: [
      { title: "NSDAP-Archiv: Finden Sie heraus, was Ihre Familie unter Hitler getan hat", url: "/curated/2026-05-07-spiegel-nsdap-archiv/", _source: "curated" }
    ]
  },
  {
    name: "The Economist",
    related: [
      { name: "morte dell'autore", why: "Il rovescio della tesi, dal lato dell'abbonamento: nel 2026 abbandona l'anonimato perché la firma converte." },
      { name: "propaganda", why: "La nomina di un ex comandante della 77 Brigade a defence editor è il punto in cui informazione e difesa smettono di essere piani distinti." }
    ],
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q180089", "https://it.wikipedia.org/wiki/The_Economist"],
    note: "Settimanale britannico. Nel sito è il caso della nomina del generale Alex Turner — ex comandante della 77 Brigade, ancora in servizio attivo al momento della nomina — a defence editor: un caso che rende visibile la sovrapposizione crescente tra i piani dell'informazione e della difesa. Alla Future of Media Technology Conference del Press Gazette, a Londra, il 30 settembre 2026, il settimanale dichiara di avere abbandonato l'anonimato dei propri articoli per mettere in evidenza le personalità dei giornalisti: «crea una connessione, e abbiamo di sicuro molti abbonati che vogliono vedere cosa fanno i nostri giornalisti», dice Andrew Palmer. Per una testata che ha costruito quasi due secoli di identità sull'articolo non firmato è una rottura, e arriva dal lato dell'abbonamento: l'autore non muore, viene richiamato in servizio perché il nome converte.",
    articles: [
      { title: "Alex Turner appointed as Defence Editor of The Economist", url: "/curated/2026-06-19-economist-defence-editor-turner/", _source: "curated" },
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" }
    ]
  },
  {
    name: "77 Brigade",
    sameAs: ["https://www.wikidata.org/wiki/Q4643592", "https://en.wikipedia.org/wiki/77th_Brigade_(United_Kingdom)"],
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    related: [
      { name: "propaganda", why: "Un'unità per le «attività informative» che monitora il dibattito dei propri cittadini: informazione e difesa sullo stesso piano." }
    ],
    type: "istituzione",
    note: "Unità dell'esercito britannico per le «attività informative», istituita nel 2015. Nel sito è citata per il suo ruolo nel monitoraggio del dibattito online dei cittadini britannici durante la pandemia (secondo una richiesta FOI del 2024) e per la sovrapposizione, nel caso Turner/Economist, tra comando militare di un'unità di information warfare e ruolo editoriale.",
    articles: [
      { title: "Alex Turner appointed as Defence Editor of The Economist", url: "/curated/2026-06-19-economist-defence-editor-turner/", _source: "curated" }
    ]
  },
  {
    name: "Studio Ghibli",
    related: [
      { name: "industria dell'animazione", why: "Lo studio è il riferimento implicito di qualità artigianale nel dibattito sulla crisi degli animatori giapponesi." }
    ],
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Giappone"] },
    sameAs: ["https://www.wikidata.org/wiki/Q182950", "https://it.wikipedia.org/wiki/Studio_Ghibli"],
    note: "Studio d'animazione giapponese fondato nel 1985 da Hayao Miyazaki e Isao Takahata. Nel sito è il riferimento implicito di qualità artigianale nel dibattito sulla crisi degli animatori giapponesi: il modello di formazione sul campo che lo studio ha incarnato è esattamente ciò che l'industria, nel suo insieme, ha smantellato dopo il 1973.",
    articles: [
      { title: "The strange disappearance of Japan's animators", url: "/curated/2026-06-19-economist-1843-japan-animators/", _source: "curated" }
    ]
  },
  {
    name: "GS1",
    related: [
      { name: "GS1 Web Vocabulary", why: "L'organizzazione degli standard di identificazione è la fonte del vocabolario semantico." }
    ],
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Belgio"] },
    sameAs: ["https://www.wikidata.org/wiki/Q731100", "https://it.wikipedia.org/wiki/GS1"],
    note: "Organizzazione globale di standard per l'identificazione di prodotti (codici a barre) e la tracciabilità della filiera. Nel sito è la fonte del GS1 Web Vocabulary e il punto di vista — tramite la newsletter Tendenze di GS1 Italy — da cui arrivano più pezzi curated sull'infrastruttura semantica del commercio digitale.",
    articles: [
      { title: "GS1 Web Vocabulary: il dizionario universale che dà voce ai prodotti nel web 3.0", url: "/curated/2026-02-05-giulieri-gs1-web-vocabulary/", _source: "curated" }
    ]
  },
  {
    name: "Netcomm Forum",
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Italia"] },
    note: "Il principale evento italiano dedicato all'e-commerce. Nel sito è il contesto da cui Gianluca Diegoli osserva, dal vivo, la confusione sistematica fra le tre «IA» del commercio digitale e il ritardo italiano nell'adozione dell'AI di infrastruttura rispetto al Nord Europa.",
    articles: [
      { title: "Le tre IA del Netcomm Forum", url: "/curated/2026-05-21-diegoli-tre-ia-netcomm-forum/", _source: "curated" }
    ]
  },
  {
    name: "Cannes Lions",
    sameAs: ["https://www.wikidata.org/wiki/Q621422", "https://it.wikipedia.org/wiki/Festival_internazionale_della_creatività_Leoni_di_Cannes"],
    geo: { modo: "diretta", paesi: ["Francia"] },
    type: "istituzione",
    note: "Il festival internazionale della creatività pubblicitaria. Nel sito è il palcoscenico in cui OpenAI si presenta come protagonista a sorpresa puntando a metà dei ricavi pubblicitari di Meta, e in cui — l'anno precedente — un Grand Prix è stato ritirato dopo la scoperta che il case study era stato manipolato con l'AI.",
    articles: [
      { title: "David Droga on AI and the end of 'mediocre' human-made ads", url: "/curated/2026-06-21-droga-ai-mediocre-ads/", _source: "curated" }
    ]
  },
  {
    name: "OpenAI",
    related: [
      { name: "Cannes Lions", why: "Il festival è il palcoscenico da cui punta a metà dei ricavi pubblicitari di Meta in tre anni." }
    ],
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q21708200", "https://it.wikipedia.org/wiki/OpenAI"],
    note: "Nel sito compare nel caso Droga come l'azienda che punta a metà dei ricavi pubblicitari attuali di Meta in tre anni — piattaforma ad self-serve, test pubblicitari in Giappone, Ad Tools generativi — segno che il fronte AI vs. mercato pubblicitario tradizionale si sta aprendo prima e più aggressivamente di quanto raccontato altrove sul sito a proposito di Anthropic o Palantir. Fra il maggio e il luglio 2026 l'azienda è al centro del primo caso documentato in cui agenti di un modello, durante una valutazione con le protezioni abbassate, costruiscono un canale di comunicazione non autorizzato codificando i messaggi nei nomi delle cartelle di un repository interno, raggiungono internet sfruttando una vulnerabilità, e arrivano per una catena di falle all'amministrazione dei sistemi di Hugging Face, che ricostruirà circa un terzo della propria infrastruttura e avviserà l'FBI. OpenAI identifica i propri agenti come origine solo a cose fatte, pubblica un resoconto il 26 agosto e annuncia sandbox più isolate e monitoraggio obbligatorio della catena di ragionamento. Il motore documentato è il reward hacking, non un'intenzione; la lettura prevalente fra i professionisti della sicurezza è che si sia trattato di un fallimento di contenimento con le sicurezze disattivate. L'azienda non ha confermato se l'incidente abbia superato la soglia *Critical* del proprio Preparedness Framework.",
    articles: [
      { title: "Why Are Palantir and OpenAI Scared of Alex Bores?", url: "/curated/2026-04-21-bores-palantir-openai-regulation-nyt/", _source: "curated" },
      { title: "David Droga on AI and the end of 'mediocre' human-made ads", url: "/curated/2026-06-21-droga-ai-mediocre-ads/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-criti-hype-hugging-face-lawfare/", _source: "curated" },
      { title: "Reason is more than a tool", url: "/curated/2026-10-01-mudd-ragione-piu-di-uno-strumento-aeon/", _source: "curated" },
      { title: "Pacing the Frontier", url: "/curated/2026-07-28-pacing-the-frontier-lettera/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-fuga-e-clamore-lawfare/", _source: "curated" },
      { title: "The Hugging Face incident and the road ahead", url: "/curated/2026-08-26-openai-incidente-hugging-face-resoconto/", _source: "curated" },
      { title: "Il movimento che ha costruito ciò che temeva", url: "/curated/2026-10-01-economist-movimento-che-ha-costruito-cio-che-temeva/", _source: "curated" }
    ]
  },
  {
    name: "Bending Spoons",
    related: [
      { name: "stock option", why: "Il pool da 51 milioni di azioni ai dipendenti è il meccanismo al centro del caso." }
    ],
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q96314827", "https://it.wikipedia.org/wiki/Bending_Spoons"],
    note: "Azienda tech italiana, quotata al Nasdaq a giugno 2026 con una valutazione di 20 miliardi di dollari. Nel sito è il caso studio di cosa potrebbe sbloccare per l'ecosistema startup italiano: non l'azienda in sé, ma il pool di 51 milioni di azioni distribuite ai dipendenti, potenziale innesco di una generazione di startup di seconda mano sul modello di Berlino e Londra.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "Zalando",
    related: [
      { name: "Rocket Internet", why: "I due motori dell'effetto di seconda generazione berlinese: ex dipendenti che fondano startup." }
    ],
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Germania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q136570", "https://it.wikipedia.org/wiki/Zalando"],
    note: "E-commerce di moda tedesco, quotato. Nel sito è uno dei casi di riferimento — insieme a Rocket Internet — per misurare l'effetto «ex-dipendenti che fondano startup» a Berlino: 138 nuove startup da 24 unicorni tedeschi, l'81% rimaste nella stessa città.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "Rocket Internet",
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Germania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q82229", "https://it.wikipedia.org/wiki/Rocket_Internet"],
    note: "Startup studio e incubatore tedesco. Nel sito è citato insieme a Zalando come motore dell'effetto di seconda generazione berlinese — l'evidenza usata per valutare se Bending Spoons potrà fare lo stesso per l'Italia.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "Revolut",
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Lituania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q22908307", "https://it.wikipedia.org/wiki/Revolut"],
    note: "Fintech britannica. Nel sito è uno dei casi citati per l'effetto di seconda generazione londinese, insieme a Braze, Wise e Monzo — 168 startup da 27 unicorni, il 69% rimaste a Londra, favorite anche dal regime fiscale agevolato EMI sulle stock option.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "Washington Post",
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q166032", "https://it.wikipedia.org/wiki/The_Washington_Post"],
    note: "Quotidiano americano. Nel sito è il caso della credibilità erosa: dopo il 2016 aveva costruito un «marketing della verità» («Democracy Dies in Darkness») come risposta al primo insediamento di Trump — una postura oggi meno credibile per ragioni legate all'assetto proprietario (Jeff Bezos) e alle relative ingerenze editoriali.",
    articles: [
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" }
    ]
  },
  {
    name: "New York Times",
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Washington Post", why: "Le due testate che nel 2016 rispondono a Trump con un marketing della verità, e ne pagano insieme l'usura." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q9684", "https://it.wikipedia.org/wiki/The_New_York_Times"],
    note: "Quotidiano americano. Nel sito è citato insieme al Washington Post come testata che ha imbastito un «marketing della verità» al primo insediamento di Trump nel 2016 — una strategia di posizionamento diversa da quella valoriale adottata dall'Economist, e più vulnerabile alle crisi di credibilità legate alle scelte proprietarie. Nel sito compare anche in un secondo registro, organizzativo e non reputazionale: la redazione che si dà un metodo formale per adottare strumenti nuovi — proposta scritta, pilota su perimetro ristretto, misura a posteriori — descritto dall'interno da Eric Athas.",
    articles: [
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" },
      { title: "New York Times training editor: Take these four steps before you roll out new things", url: "/curated/2026-09-18-athas-rollout-redazione-niemanlab/", _source: "curated" }
    ]
  },

  {
    name: "Magnifica Humanitas",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Città del Vaticano"] },
    sameAs: ["https://www.wikidata.org/wiki/Q139027804", "https://it.wikipedia.org/wiki/Magnifica_humanitas"],
    note: "Enciclica di Papa Leone XIV (15 maggio 2026), firmata nel 135° anniversario della *Rerum Novarum*. Affronta l'intelligenza artificiale come questione sociale, non solo tecnica o morale: colloca l'AI nel solco della dottrina sociale della Chiesa (lavoro, potere, giustizia, dignità, vita comune). Il passaggio più citato nel sito è l'immagine dei dati come «nuove terre rare del potere» — il colonialismo contemporaneo che si appropria di vite rese computabili, profili sanitari, mappe genetiche, dati demografici. Boccia Artieri la usa come punto di partenza per chiedere non appelli morali ma una grammatica politica dell'AI.",
    citation: "LEONE XIV, <a href=\"https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html\"><em>Magnifica Humanitas</em></a>, Città del Vaticano, Libreria Editrice Vaticana, 15 maggio 2026.",
    articles: [
      { title: "Magnifica Humanitas: le nuove terre rare del potere", url: "/curated/2026-06-17-boccia-artieri-magnifica-humanitas-substack/", _source: "curated" },
      { title: "Reason is more than a tool", url: "/curated/2026-10-01-mudd-ragione-piu-di-uno-strumento-aeon/", _source: "curated" }
    ]
  },
  {
    name: "The Technium",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    note: "Blog di Kevin Kelly (kk.org/thetechnium), attivo dal 2003. Il titolo è anche il nome del concetto centrale di Kelly: la tecnosfera come sistema vivente con proprie tendenze evolutive. Nel sito è la fonte del saggio del 2006 sulle speculazioni sul metodo scientifico, ripubblicato nel 2026 con un'introduzione aggiornata.",
    citation: "KELLY, Kevin, <a href=\"https://kk.org/thetechnium\"><em>The Technium</em></a>, blog personale, 2003–.",
    articles: [
      { title: "Speculations on the Future of the Scientific Method", url: "/curated/2026-05-04-kevin-kelly-future-scientific-method/", _source: "curated" }
    ]
  },

  {
    name: "Stratechery",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Stati Uniti", "Taiwan"] },
    related: [
      { name: "Thompson, Ben", why: "Thompson scrive da solo dal 2013 e da lì costruisce l'Aggregation Theory." }
    ],
    note: "Newsletter e blog di analisi tecnologica di Ben Thompson (stratechery.com), attivo dal 2013. Ha introdotto e sviluppato l'Aggregation Theory — la tesi che le piattaforme che controllano il rapporto con l'utente finale catturano il valore dell'intera filiera. Nel sito è citata per la sua analisi del 2026 sul costo-opportunità del compute come fine dell'era aggregazionista.",
    citation: "THOMPSON, Ben, <a href=\"https://stratechery.com\"><em>Stratechery</em></a>, newsletter, 2013–.",
    articles: [
      { title: "Mythos, Muse, and the Opportunity Cost of Compute", url: "/curated/2026-04-13-stratechery-opportunity-cost-compute/", _source: "curated" }
    ]
  },
  {
    name: "Digital News Report",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    note: "Ricerca annuale del Reuters Institute for the Study of Journalism (Università di Oxford): la più ampia indagine comparativa al mondo sui comportamenti dei lettori di notizie, condotta in oltre 40 paesi. La sezione italiana è curata da Alessio Cornia (Dublin City University). Nel sito è la fonte primaria dell'analisi longitudinale di Andrea Nelson Mauro sull'informazione in Italia 2021–2026.",
    citation: "REUTERS INSTITUTE FOR THE STUDY OF JOURNALISM, <a href=\"https://reutersinstitute.politics.ox.ac.uk/digital-news-report/\"><em>Digital News Report</em></a>, Oxford, Università di Oxford, 2012–.",
    articles: [
      { title: "Com'è cambiata l'informazione in Italia negli ultimi 6 anni", url: "/curated/2026-06-19-mauro-informazione-italia-digital-news-report/", _source: "curated" }
    ]
  },
  {
    name: "Platformer",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q136926265", "https://en.wikipedia.org/wiki/Platformer_(newsletter)"],
    note: "Newsletter di giornalismo tecnologico fondata nel 2021 da Casey Newton e Zoe Schiffer (platformer.news). Copre l'industria tech con un focus su governance, moderazione dei contenuti, cultura interna delle grandi aziende e impatto sociale delle piattaforme. Tra le poche testate ad aver costruito un modello economico autonomo sul giornalismo tech specializzato.",
    citation: "NEWTON, Casey; SCHIFFER, Zoe, <a href=\"https://platformer.news\"><em>Platformer</em></a>, newsletter, 2021–.",
    articles: [
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" }
    ]
  },

  // ─── LUOGHI ───────────────────────────────────────────────────────────────

  {
    name: "Libano / Beirut",
    type: "luogo",
    geo: { modo: "diretta", paesi: ["Libano"] },
    note: "Nel sito è il laboratorio storico del caos indotto: il paese più democratico del mondo arabo, distrutto dall'interferenza esterna in un sistema in equilibrio delicato. Nassim Taleb, libanese di Amioun, ne fa uso teorico costante. Il Libano è il caso ante litteram di ciò che oggi si fa su scala globale con le democrazie occidentali.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "Mediterraneo come spazio strategico",
    type: "luogo",
    geo: { modo: "diretta", paesi: ["Italia"] },
    note: "Nel sito è il tema di Cartolina dal paese più bello del mondo: l'Italia vive sul Mediterraneo ma lo vede solo come emergenza (naufragio, sbarco, tempesta), mai come sistema di relazioni da abitare. «Chi abita il mare controlla le connessioni. Chi lo teme consegna le connessioni ad altri.» Il Mediterraneo settentrionale attende ancora un paese capace di abitarlo.",
    articles: [
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "Iran 1978–79",
    related: [
      { name: "Foucault, Michel", why: "Ci andò da corrispondente, entusiasta di una mobilitazione che rifiutava entrambi i blocchi: il caso del suo giudizio più sbagliato." }
    ],
    type: "luogo",
    geo: { modo: "diretta", paesi: ["Iran"] },
    note: "Nel sito è caso studio della dialettica dell'antiilluminismo: Foucault si recò in Iran come corrispondente, entusiasmato da una mobilitazione di massa che rifiutava entrambe le metanarrazioni egemoni. Nel giro di pochi mesi il potere teocratico cancellò diritti, eliminò dissidenti, costruì uno degli apparati repressivi più brutali del dopoguerra.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Taiwan / TSMC",
    type: "luogo",
    geo: { modo: "diretta", paesi: ["Taiwan"] },
    note: "Nel sito è il luogo della concentrazione tecnologica più rischiosa del mondo: TSMC produce la quasi totalità dei chip avanzati globali, rendendo Taiwan uno spazio di deterrenza reciproca tra Cina e Stati Uniti. Citato nell'articolo su Amodei (scenario planning) e in L'ombra del passato (vincoli strutturali del win-set cinese).",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" },
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Bologna",
    related: [
      { name: "Eco, Umberto", why: "Il DAMS e le istituzioni culturali che ha fondato: l'università come luogo che forma persone capaci di stare nel mondo, non accademici." }
    ],
    type: "luogo",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1891", "https://it.wikipedia.org/wiki/Bologna"],
    note: "Nel sito è lo sfondo dell'articolo su Umberto Eco: il DAMS, le istituzioni culturali fondate da Eco, l'università come luogo di formazione non di accademici ma di persone capaci di stare nel mondo e influenzarlo — «lo scopo non è creare Platone, ma Alcibiade». Bologna come laboratorio intellettuale del secondo Novecento italiano.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" }
    ]
  },
  {
    name: "Bergamo / Val Brembana",
    related: [
      { name: "dual use", why: "Il Museo dei Tasso a Cornello: la storia delle poste come primo caso di infrastruttura a doppio uso." }
    ],
    type: "luogo",
    geo: { modo: "diretta", paesi: ["Italia"] },
    note: "Nel sito è il punto di partenza della riflessione sul dual use tecnologico: il Museo dei Tasso a Cornello del Tasso, a venti chilometri da Bergamo, racconta come la storia postale — e quindi la storia della comunicazione moderna — sia sempre la storia di un dual use che nessuno ha pianificato.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },

  // ─── PAESI (stati come attori politici) ───────────────────────────────────

  {
    name: "Russia",
    related: [
      { name: "controllo riflessivo", why: "La guerra ibrida russa non attacca il canale ma il contenuto: il controllo riflessivo ne è la forma cognitiva." }
    ],
    type: "paese",
    geo: { modo: "diretta", paesi: ["Russia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q159", "https://it.wikipedia.org/wiki/Russia"],
    note: "Nel sito è l'attore della guerra ibrida: ha sistematizzato la dottrina Gerasimov, usato i social media come amplificatori del caos, testato le strategie nell'Est Europa prima di esportarle globalmente dal 2014 in poi. Caso di fragilità sistemica nascosta da apparente potenza — la pandemia ha mostrato la patologia delle istituzioni accentrate.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "The Warrior-Witches of Ukraine's Resistance", url: "/curated/2026-06-21-harbaugh-warrior-witches-ukraine-atlantic/", _source: "curated" },
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" },
      { title: "How a former model from Kyiv blew up Russia's $20bn gas pipeline", url: "/curated/2026-06-15-times-nord-stream-diver/", _source: "curated" },
      { title: "A Splintered Internet? Internet Fragmentation and the Strategies of China, Russia, India and the European Union", url: "/curated/2024-02-01-nocetti-splintered-internet-ifri/", _source: "curated" },
      { title: "The Great Russian Firewall: the Kremlin's ultimate crackdown on internet freedom", url: "/curated/2025-12-19-osw-great-russian-firewall/", _source: "curated" },
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" },
      { title: "Is Kaliningrad, Russia's exclave surrounded by EU countries, an asset or a liability?", url: "/curated/2022-06-06-economist-kaliningrad-risorsa-o-ostaggio/", _source: "curated" },
      { title: "Quando la propaganda smette di sembrare straniera", url: "/curated/2026-09-16-liemienov-maksymiv-propaganda-smette-di-sembrare-straniera-united24/", _source: "curated" }
    ]
  },
  {
    name: "Ucraina",
    related: [
      { name: "drone democracy", why: "Il laboratorio ucraino non è solo strategico ma istituzionale: la difesa nasce dal basso e produce accountability, non solo droni." }
    ],
    type: "paese",
    geo: { modo: "diretta", paesi: ["Ucraina"] },
    sameAs: ["https://www.wikidata.org/wiki/Q212", "https://it.wikipedia.org/wiki/Ucraina"],
    note: "Nel sito è il laboratorio del win-set compresso e del fattore δ rivoluzionato: Zelensky, outsider con basso δ pre-2022, ha trasformato la propria struttura strategica dopo l'invasione russa. È anche uno dei «primi laboratori» della guerra ibrida russa insieme a Estonia, Georgia e Moldova.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "The Warrior-Witches of Ukraine's Resistance", url: "/curated/2026-06-21-harbaugh-warrior-witches-ukraine-atlantic/", _source: "curated" },
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" },
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" },
      { title: "How a former model from Kyiv blew up Russia's $20bn gas pipeline", url: "/curated/2026-06-15-times-nord-stream-diver/", _source: "curated" }
    ]
  },
  {
    name: "Stati Uniti",
    related: [
      { name: "Taiwan / TSMC", why: "La deterrenza su Taiwan è il punto in cui la potenza americana dipende da una fabbrica che non controlla." }
    ],
    type: "paese",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q30", "https://it.wikipedia.org/wiki/Stati_Uniti_d'America"],
    note: "Nel sito è l'attore centrale su cui convergono la maggior parte delle analisi: sede delle grandi aziende AI (Anthropic, Palantir), pivot del disordine globale con Trump, potenza con cui si devono fare i conti nella geopolitica del Mediterraneo e nella deterrenza su Taiwan. Citato in quattro articoli.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "Why Are Palantir and OpenAI Scared of Alex Bores?", url: "/curated/2026-04-21-bores-palantir-openai-regulation-nyt/", _source: "curated" },
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" },
      { title: "Fareed Zakaria on the Moral Cost of Trump's War", url: "/curated/2026-04-10-zakaria-trump-iran-war-nyt/", _source: "curated" },
      { title: "What Worries Me Most About 'Abundance'", url: "/curated/2026-04-28-klein-abundance-nyt/", _source: "curated" },
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" },
      { title: "How surge in defence and dual-use technology investment could reconfigure global AI race", url: "/curated/2026-04-01-chatham-house-defence-ai-race/", _source: "curated" },
      { title: "America's Next Story", url: "/curated/2026-04-09-lepore-americas-next-story/", _source: "curated" },
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" },
      { title: "La Chine et les États-Unis peuvent-ils s'accorder sur la sécurité de l'IA ?", url: "/curated/2026-09-25-grandcontinent-sicurezza-ai-cina-stati-uniti/", _source: "curated" },
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" },
      { title: "The U.S. Is Betting the Economy on 'Scaling' AI: Where Is the Intelligence When One Needs It?", url: "/curated/2025-12-08-storm-scaling-ai-bolla-inet/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-criti-hype-hugging-face-lawfare/", _source: "curated" },
      { title: "Why open-weight models are crucial for American AI leadership", url: "/curated/2026-08-10-villasenor-pesi-aperti-leadership-brookings/", _source: "curated" },
      { title: "Internet Fragmentation's Outward Turn", url: "/curated/2025-06-01-fidler-splinternet-outward-turn-sciencespo/", _source: "curated" },
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" },
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" },
      { title: "I Helped Fact-Check the 1619 Project. The Times Ignored Me.", url: "/curated/2020-03-06-harris-1619-project-fact-check-politico/", _source: "curated" },
      { title: "Hulu's Fascinating and Incomplete \"1619 Project\"", url: "/curated/2023-02-28-taylor-1619-project-hulu-newyorker/", _source: "curated" },
      { title: "What Was the American Revolution For?", url: "/curated/2025-11-17-lepore-rivoluzione-americana-250-newyorker/", _source: "curated" },
      { title: "The Curious Power of Punctuation", url: "/curated/2026-09-28-menand-punteggiatura-autore-newyorker/", _source: "curated" },
      { title: "Not Even Wrong 1: AI and the Labour Market, From Frey–Osborne to ChatGPT, 2012–2026", url: "/curated/2026-06-10-floridi-not-even-wrong-1-lavoro-ssrn/", _source: "curated" },
      { title: "Not Even Wrong 2: An Audit of Public AGI Prediction, 1950–2026", url: "/curated/2026-09-14-floridi-not-even-wrong-2-agi-ssrn/", _source: "curated" },
      { title: "We Surveyed 634 Women Who Work in Tech. They Let Loose", url: "/curated/2026-09-21-upson-donne-tech-sondaggio-wired/", _source: "curated" },
      { title: "Happy Birthday C.S. Peirce: Peircean Induction and the Error-Correcting Thesis", url: "/curated/2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics/", _source: "curated" },
      { title: "The statistics wars and intellectual conflicts of interest", url: "/curated/2021-12-06-mayo-conflitti-interesse-intellettuali-conbio/", _source: "curated" },
      { title: "The ASA President's Task Force Statement on Statistical Significance and Replicability", url: "/curated/2021-08-01-task-force-asa-significativita-replicabilita-aoas/", _source: "curated" },
      { title: "The Atlantic is getting more subscribers from Google traffic, even as referrals fall", url: "/curated/2026-09-16-scire-atlantic-google-abbonati-niemanlab/", _source: "curated" },
      { title: "I'm a College Professor. Writing Isn't as Important as We Think.", url: "/curated/2026-09-29-cruz-scrittura-pensiero-nyt/", _source: "curated" },
      { title: "Pacing the Frontier", url: "/curated/2026-07-28-pacing-the-frontier-lettera/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-fuga-e-clamore-lawfare/", _source: "curated" },
      { title: "GPT detectors are biased against non-native English writers", url: "/curated/2023-07-10-liang-rilevatori-non-madrelingua-patterns/", _source: "curated" },
      { title: "Why AI Detection Fails for Academic Integrity", url: "/curated/2026-08-06-karr-perche-la-rilevazione-fallisce-arxiv/", _source: "curated" },
      { title: "Il libro che la biblioteca non possiede", url: "/curated/2026-10-01-egan-maher-libro-che-biblioteca-non-possiede-nyt/", _source: "curated" },
      { title: "Riforme in cambio di accesso", url: "/curated/2026-09-28-dimon-riforme-in-cambio-di-accesso-wsj/", _source: "curated" },
      { title: "L'alleanza valutata a prezzi di mercato", url: "/curated/2026-07-23-douthat-colby-alleanza-valutata-a-prezzi-di-mercato-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Unione Europea",
    type: "paese",
    geo: { modo: "diretta", paesi: ["UE"] },
    related: [
      { name: "Europa", why: "Il sito le tiene distinte di proposito: una è un ordinamento, l'altra un'eredità culturale." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q458", "https://it.wikipedia.org/wiki/Unione_europea"],
    note: "Come istituzione: citata per la sua struttura grande, centralizzata, iperconnessa — che Taleb considera fragile per costruzione perché concentra i rischi e sopprime la varianza locale. Appare come benchmark (spesa R&S media europea 2,2% del PIL contro l'1,3% italiano) e come attore nelle negoziazioni internazionali. Per Europa come concetto culturale e geopolitico, vedi la voce separata.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" },
      { title: "Why a big country like Italy acts as if it were small", url: "/curated/2026-04-09-italy-acts-as-if-small/", _source: "curated" },
      { title: "The right balance: how to fix European Union artificial intelligence regulation", url: "/curated/2026-06-11-mariniello-ai-act-costi-conformita-bruegel/", _source: "curated" },
      { title: "A Splintered Internet? Internet Fragmentation and the Strategies of China, Russia, India and the European Union", url: "/curated/2024-02-01-nocetti-splintered-internet-ifri/", _source: "curated" },
      { title: "Is Kaliningrad, Russia's exclave surrounded by EU countries, an asset or a liability?", url: "/curated/2022-06-06-economist-kaliningrad-risorsa-o-ostaggio/", _source: "curated" },
      { title: "Quando i tassi li decide qualcun altro", url: "/curated/2026-10-01-draghi-tassi-li-decide-qualcun-altro-grandcontinent/", _source: "curated" },
      { title: "Riforme in cambio di accesso", url: "/curated/2026-09-28-dimon-riforme-in-cambio-di-accesso-wsj/", _source: "curated" },
      { title: "L'alleanza valutata a prezzi di mercato", url: "/curated/2026-07-23-douthat-colby-alleanza-valutata-a-prezzi-di-mercato-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Europa",
    type: "paese",
    geo: { modo: "diretta", paesi: ["UE"] },
    sameAs: ["https://www.wikidata.org/wiki/Q46", "https://it.wikipedia.org/wiki/Europa"],
    note: "Come concetto geopolitico e culturale, distinto dall'istituzione UE: la crisi dell'università europea e delle humanities; la capacità di abitare il Mediterraneo; il sistema di valori illuministi minacciato dall'antiilluminismo. Europa come progetto intellettuale e politico in difesa del quale il sito prende posizione esplicita.",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" },
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" },
      { title: "How surge in defence and dual-use technology investment could reconfigure global AI race", url: "/curated/2026-04-01-chatham-house-defence-ai-race/", _source: "curated" },
      { title: "Why a big country like Italy acts as if it were small", url: "/curated/2026-04-09-italy-acts-as-if-small/", _source: "curated" },
      { title: "Il gioco sporco degli autocrati", url: "/curated/2026-04-09-sabatini-gioco-sporco-autocrati/", _source: "curated" },
      { title: "Orbán ha perso, e non è l'unica buona notizia", url: "/curated/2026-04-09-sabatini-orban-ha-perso/", _source: "curated" },
      { title: "Forget the World Cup. Culture is becoming more fragmented", url: "/curated/2026-06-11-economist-deglobalisation-culture/", _source: "curated" },
      { title: "Was Francis Fukuyama Right All Along?", url: "/curated/2026-09-18-ezra-klein-fukuyama-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Cina",
    related: [
      { name: "istituzioni inclusive vs. estrattive", why: "Il «modello cinese» promette che istituzioni estrattive decidano meglio; Wuhan mostra che è il tipo di istituzione a produrre il ritardo." }
    ],
    type: "paese",
    geo: { modo: "diretta", paesi: ["Cina"] },
    sameAs: ["https://www.wikidata.org/wiki/Q148", "https://it.wikipedia.org/wiki/Cina"],
    note: "Nel sito è il caso studio della fragilità autoritaria: il «modello cinese» (decisioni rapide perché senza opposizione) è una sciocchezza confutata dalla pandemia — i medici di Wuhan zittiti, l'occultamento attivo, il ritardo nella condivisione del genoma. Citata anche come attore geopolitico che gioca su tre tavoli incompatibili simultaneamente.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" },
      { title: "How surge in defence and dual-use technology investment could reconfigure global AI race", url: "/curated/2026-04-01-chatham-house-defence-ai-race/", _source: "curated" },
      { title: "La rivoluzione silenziosa della rete elettrica cinese", url: "/curated/2026-04-13-nyt-china-energy-battery-grid/", _source: "curated" },
      { title: "Cosa intende la Cina per «intelligenza artificiale»", url: "/curated/2026-06-25-pieranni-cina-intelligenza-artificiale-altriorienti/", _source: "curated" },
      { title: "IA, bulloni e umanesimo", url: "/curated/2026-06-28-pieranni-ia-bulloni-umanesimo-ilpartito/", _source: "curated" },
      { title: "Who's Afraid of Chinese Models?", url: "/curated/2026-07-20-stratechery-chinese-models/", _source: "curated" },
      { title: "Chartbook 462: China shocked – beyond 1.0 and 2.0 to the 'Big One'", url: "/curated/2026-07-29-tooze-china-shock-chartbook/", _source: "curated" },
      { title: "The Future, Made in China", url: "/curated/2026-08-03-osnos-future-made-china-newyorker/", _source: "curated" },
      { title: "In film and in life, China pursues dragon-restaurant diplomacy", url: "/curated/2026-08-31-economist-china-dragon-restaurant-diplomacy/", _source: "curated" },
      { title: "One China, one world", url: "/curated/2026-03-26-perdue-tianxia-unita-cina-aeon/", _source: "curated" },
      { title: "La Chine et les États-Unis peuvent-ils s'accorder sur la sécurité de l'IA ?", url: "/curated/2026-09-25-grandcontinent-sicurezza-ai-cina-stati-uniti/", _source: "curated" },
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" },
      { title: "The End of the Foundation Model Era: Open-Weight Models, Sovereign AI, and Inference as Infrastructure", url: "/curated/2026-03-09-grogan-pesi-aperti-sovranita-ai/", _source: "curated" },
      { title: "Why open-weight models are crucial for American AI leadership", url: "/curated/2026-08-10-villasenor-pesi-aperti-leadership-brookings/", _source: "curated" },
      { title: "Open Weights, Closed Ranks: The AI Manifesto War", url: "/curated/2026-08-12-zuniga-pesi-aperti-manifesti-icle/", _source: "curated" },
      { title: "以贡献为导向深化高校分类评价改革", url: "/curated/2026-03-24-xia-valutazione-differenziata-universita-cina/", _source: "curated" },
      { title: "A Splintered Internet? Internet Fragmentation and the Strategies of China, Russia, India and the European Union", url: "/curated/2024-02-01-nocetti-splintered-internet-ifri/", _source: "curated" },
      { title: "Internet Fragmentation's Outward Turn", url: "/curated/2025-06-01-fidler-splinternet-outward-turn-sciencespo/", _source: "curated" },
      { title: "China's kids rank near the top in global school tests", url: "/curated/2026-09-24-economist-pisa-cina-campione-bsjz/", _source: "curated" },
      { title: "L'alleanza valutata a prezzi di mercato", url: "/curated/2026-07-23-douthat-colby-alleanza-valutata-a-prezzi-di-mercato-nyt/", _source: "curated" }
    ]
  },
  {
    name: "dragon-restaurant diplomacy",
    type: "teoria",
    geo: { modo: "diretta", paesi: ["Cina"] },
    note: "Frame coniato dall'Economist (2026) per descrivere la politica estera cinese post-Wolf Warrior: mercantilismo aideologico, amicizia con tutti gli attori geopolitici simultaneamente (Iran e monarchie del Golfo, Algeria e Marocco), nessun impegno di sicurezza. Il principio è quello di Ren Zhengfei (Huawei): «In business, speak only of business». Ha un'attrattiva reale per i paesi stanchi delle condizionalità occidentali, ma due limiti strutturali: la superficialità dell'impegno (la Cina evita vincoli militari) e il paradosso Japan — l'unica eccezione alla neutralità, che rivela come la postura sia una scelta costruita, non una struttura. Dialoga con la Wolf Warrior diplomacy come suo opposto stilistico, non ideologico.",
    articles: [
      { title: "In film and in life, China pursues dragon-restaurant diplomacy", url: "/curated/2026-08-31-economist-china-dragon-restaurant-diplomacy/", _source: "curated" }
    ]
  },
  {
    name: "Iran",
    type: "paese",
    geo: { modo: "diretta", paesi: ["Iran"] },
    sameAs: ["https://www.wikidata.org/wiki/Q794", "https://it.wikipedia.org/wiki/Iran"],
    note: "Nel sito in due accezioni: come paese (attore geopolitico, esportatore di petrolio con la Cina come compratore unico, giocatore su tavoli incompatibili); e come luogo storico della rivoluzione del 1978–79 (caso studio dell'antiilluminismo e dell'entusiasmo malriposto di Foucault). Le due voci sono separate nell'indice.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "Fareed Zakaria on the Moral Cost of Trump's War", url: "/curated/2026-04-10-zakaria-trump-iran-war-nyt/", _source: "curated" },
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" },
      { title: "Dentro le decisioni di Trump sull'Iran", url: "/curated/2026-04-09-trump-iran-war/", _source: "curated" }
    ]
  },
  {
    name: "Germania",
    type: "paese",
    geo: { modo: "diretta", paesi: ["Germania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q183", "https://it.wikipedia.org/wiki/Germania"],
    note: "Nel sito è il contesto della digitalizzazione degli archivi NSDAP da parte di Der Spiegel e dell'avanzata dell'AfD in diverse regioni: il caso in cui la cultura della memoria storica diventa esplicitamente terreno di scontro politico contemporaneo.",
    articles: [
      { title: "NSDAP-Archiv: Finden Sie heraus, was Ihre Familie unter Hitler getan hat", url: "/curated/2026-05-07-spiegel-nsdap-archiv/", _source: "curated" },
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "Regno Unito",
    related: [
      { name: "77 Brigade", why: "Il paese in cui information warfare militare e giornalismo di difesa si sovrappongono, resa visibile da una nomina." }
    ],
    type: "paese",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q145", "https://it.wikipedia.org/wiki/Regno_Unito"],
    note: "Nel sito è il contesto della 77 Brigade e della sovrapposizione fra information warfare militare e giornalismo di difesa, resa visibile dalla nomina di un suo ex comandante a defence editor dell'Economist.",
    articles: [
      { title: "Alex Turner appointed as Defence Editor of The Economist", url: "/curated/2026-06-19-economist-defence-editor-turner/", _source: "curated" },
      { title: "AI-written speeches are taking over politics", url: "/curated/2026-09-23-economist-discorsi-scritti-ai-politica/", _source: "curated" },
      { title: "Commonwealth Short Story Prize Clears Regional Winners of AI Use Following Month-Long Review", url: "/curated/2026-06-26-commonwealth-nazir-falso-positivo-brittlepaper/", _source: "curated" }
    ]
  },
  {
    name: "Giappone",
    related: [
      { name: "industria dell'animazione", why: "Un mercato dell'anime quasi triplicato in un decennio, sostenuto da una manodopera che non viene più formata né pagata." }
    ],
    type: "paese",
    geo: { modo: "diretta", paesi: ["Giappone"] },
    sameAs: ["https://www.wikidata.org/wiki/Q17", "https://it.wikipedia.org/wiki/Giappone"],
    note: "Nel sito è il caso della crisi degli animatori: un mercato dell'anime quasi triplicato in un decennio fino a 19 miliardi di dollari, sostenuto da una manodopera cronicamente sottopagata e mal formata dopo lo smantellamento del sistema di apprendistato seguito al fallimento di Mushi Production nel 1973.",
    articles: [
      { title: "The strange disappearance of Japan's animators", url: "/curated/2026-06-19-economist-1843-japan-animators/", _source: "curated" },
      { title: "The great regression", url: "/curated/2022-08-05-alt-grande-regressione-kidult-aeon/", _source: "curated" },
      { title: "Japanese author Rie Kudan wins prestigious Akutagawa Prize for novel partly written by ChatGPT", url: "/curated/2024-01-17-kudan-akutagawa-cinque-per-cento-cnn/", _source: "curated" }
    ]
  },

  // ─── LEADER POLITICI ──────────────────────────────────────────────────────

  {
    name: "Trump, Donald",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Orbán, Viktor", why: "Orbán ha fatto scuola: Trump ne ripete il metodo su scala americana." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q22686", "https://it.wikipedia.org/wiki/Donald_Trump"],
    note: "Politico americano, presidente degli Stati Uniti (2025 in corso). Nel sito è la figura politica più citata (sei articoli): appare come utilizzatore deteriore del post-strutturalismo (nega la realtà dei fatti), caso studio di basso fattore di sconto δ nella teoria dei giochi, pivot del caos democratico globale post-2016.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "Il gioco sporco degli autocrati", url: "/curated/2026-04-09-sabatini-gioco-sporco-autocrati/", _source: "curated" },
      { title: "Dentro le decisioni di Trump sull'Iran", url: "/curated/2026-04-09-trump-iran-war/", _source: "curated" }
    ]
  },
  {
    name: "Putin, Vladimir",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Russia"] },
    related: [
      { name: "Orbán, Viktor", why: "L'autocrazia illiberale in due taglie: una potenza che riscrive i fatti e uno Stato membro dell'UE." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q7747", "https://it.wikipedia.org/wiki/Vladimir_Putin"],
    note: "Presidente russo (1952). Nel sito compare in quattro articoli: come utilizzatore deteriore della lezione post-strutturalista; come ideatore della guerra ibrida e delle misure attive; come attore della crisi ucraina; come caso di win-set domestico progressivamente compresso e irreversibile dopo l'accentramento del potere.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Zelensky, Volodymyr",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Ucraina"] },
    related: [
      { name: "fattore di sconto δ", why: "Il caso limite del parametro: δ bassissimo da outsider, altissimo dopo l'invasione." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q3874799", "https://it.wikipedia.org/wiki/Volodymyr_Zelens'kyj"],
    note: "Presidente ucraino (1978). Nel sito è studiato come caso di trasformazione radicale del profilo strategico: outsider comunicativo con basso fattore δ pre-2022, ha cambiato completamente struttura strategica dopo l'invasione russa. Caso limite nella teoria dei two-level games: win-set domestico compresso, win-set internazionale massimizzato. Anche protagonista di una strategia di comunicazione che usa deliberatamente gli influencer MAGA come vettori per raggiungere pubblici inaccessibili ai media tradizionali.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Maga influencer Laura Loomer reverses course on Ukraine after Kyiv visit", url: "/curated/2026-07-24-harding-loomer-zelensky-kyiv-guardian/", _source: "curated" }
    ]
  },
  {
    name: "Orbán, Viktor",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Ungheria"] },
    sameAs: ["https://www.wikidata.org/wiki/Q57641", "https://it.wikipedia.org/wiki/Viktor_Orb%C3%A1n"],
    note: "Primo ministro ungherese (1963). Nel sito è citato come utilizzatore deteriore della lezione post-strutturalista: la realtà come narrazione manipolabile, senza resistenza ontologica. Rappresenta il modello dell'autocrate illiberale europeo che ha imparato male da Foucault e Derrida.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "Il gioco sporco degli autocrati", url: "/curated/2026-04-09-sabatini-gioco-sporco-autocrati/", _source: "curated" },
      { title: "Orbán ha perso, e non è l'unica buona notizia", url: "/curated/2026-04-09-sabatini-orban-ha-perso/", _source: "curated" }
    ]
  },
  {
    name: "Netanyahu, Benjamin",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Israele"] },
    sameAs: ["https://www.wikidata.org/wiki/Q43723", "https://it.wikipedia.org/wiki/Benjamin_Netanyahu"],
    note: "Primo ministro israeliano (1949). Nel sito è caso studio di tribalismo epistemico: respinge le risoluzioni della Corte Internazionale di Giustizia come «antisemitismo istituzionalizzato», proponendo una verità etnica assoluta che esclude per principio qualsiasi tribunale esterno — variante tribalista del rifiuto dell'universale.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Xi, Jinping",
    related: [
      { name: "win-set domestico", why: "L'accentramento dal 2012 ha compresso il win-set: meno margine interno, meno accordi possibili all'esterno." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Cina"] },
    sameAs: ["https://www.wikidata.org/wiki/Q15031", "https://it.wikipedia.org/wiki/Xi_Jinping"],
    note: "Presidente cinese (1953). Nel sito è analizzato come caso di accentramento del potere (dal 2012) che ha compresso il win-set domestico: abolizione del limite ai mandati, campagna anticorruzione strumentale, irrigidimento ideologico del Partito. Fattore di sconto δ probabilmente alto, ma il ρ relazionale che lui stesso ha costruito è altissimo.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Who's Afraid of Chinese Models?", url: "/curated/2026-07-20-stratechery-chinese-models/", _source: "curated" }
    ]
  },
  {
    name: "Karp, Alexander",
    sameAs: ["https://www.wikidata.org/wiki/Q19560940", "https://it.wikipedia.org/wiki/Alex_Karp"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    type: "persona",
    note: "CEO di Palantir (1967). Nel sito è citato per il suo «manifesto» del 2026: l'élite ingegneristica di Silicon Valley ha un debito morale con il paese che ne ha reso possibile l'ascesa e un obbligo affermativo di partecipare alla difesa della nazione. Il sito condivide la premessa ma non le conclusioni.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "La colonizzazione del giudizio", url: "/curated/2026-06-12-corriere-colonizzazione-giudizio/", _source: "curated" },
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" },
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "Karpathy, Andrej",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Slovacchia", "Canada"] },
    sameAs: ["https://www.wikidata.org/wiki/Q56037405", "https://it.wikipedia.org/wiki/Andrej_Karpathy"],
    note: "Ricercatore e ingegnere AI (1986). Founding member di OpenAI (2015), poi Sr. Director of AI di Tesla (2017–2022), ora fondatore di Eureka Labs. Nel sito è citato per il suo «Deep Dive into LLMs» (2025): la risorsa divulgativa più completa disponibile sull'intera catena di addestramento dei modelli linguistici, dalla *jagged intelligence* ai token come unità di pensiero.",
    articles: [
      { title: "Deep Dive into LLMs like ChatGPT", url: "/curated/2026-07-12-karpathy-deep-dive-llm-youtube/", _source: "curated" }
    ]
  },
  {
    name: "Hegseth, Pete",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q7172014", "https://it.wikipedia.org/wiki/Pete_Hegseth"],
    note: "Segretario alla Difesa americano (2025 in corso). Nel sito è la controparte nel rifiuto di Amodei: ha avanzato la richiesta di partnership militare ad Anthropic che Dario Amodei ha declinato dopo un processo di scenario planning. Figura dell'apparato militare-industriale che cerca di integrare l'AI nei sistemi d'arma.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
    ]
  },
  {
    name: "Thompson, Ben",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q25351425", "https://en.wikipedia.org/wiki/Ben_Thompson_(analyst)"],
    note: "Analista tecnologico americano (1984), autore di Stratechery, tra le voci più influenti sui modelli di business digitali e sull'industria tecnologica. Teorico dell'aggregazione come struttura dominante del capitalismo digitale: le piattaforme che controllano la relazione con l'utente finale catturano il valore dell'intera filiera.",
    articles: [
      { title: "Mythos, Muse, and the Opportunity Cost of Compute", url: "/curated/2026-04-13-stratechery-opportunity-cost-compute/", _source: "curated" },
      { title: "Who's Afraid of Chinese Models?", url: "/curated/2026-07-20-stratechery-chinese-models/", _source: "curated" },
      { title: "Chartbook 462: China shocked – beyond 1.0 and 2.0 to the 'Big One'", url: "/curated/2026-07-29-tooze-china-shock-chartbook/", _source: "curated" }
    ]
  },
  {
    name: "Tooze, Adam",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q351075", "https://it.wikipedia.org/wiki/Adam_Tooze"],
    note: "Storico economico britannico (1967), docente a Columbia. Autore di Crashed (2018) e The Wages of Destruction (2006). Fondatore di Chartbook, newsletter in cui coniuga storia economica, dati e congiuntura. Nel sito è citato per la decostruzione della sequenza «China shock 1.0 / 2.0»: il secondo non è una replica del primo ma uno shock di politica industriale consapevole — la Cina ha imparato dalla prima ondata e ora esporta tecnologia, non lavoro a basso costo.",
    articles: [
      { title: "Chartbook 462: China shocked – beyond 1.0 and 2.0 to the 'Big One'", url: "/curated/2026-07-29-tooze-china-shock-chartbook/", _source: "curated" }
    ]
  },
  {
    name: "Polanyi, Karl",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Ungheria"] },
    sameAs: ["https://www.wikidata.org/wiki/Q318029", "https://it.wikipedia.org/wiki/Karl_Polanyi"],
    note: "Economista e antropologo ungherese (1886–1964), autore de La grande trasformazione (1944). Ha teorizzato il «doppio movimento»: ogni ondata di globalizzazione mercantile produce un contromovimento di resistenza sociale. Nel sito è il framework con cui Tooze legge il China Shock 1.0 — Trump e Brexit come backlash polanyiano differito all'integrazione dei mercati del lavoro asiatici — e il contrasto che rende il China Shock 2.0 «post-polanyiano»: non uno shock di globalizzazione ma di politica industriale.",
    articles: [
      { title: "Chartbook 462: China shocked – beyond 1.0 and 2.0 to the 'Big One'", url: "/curated/2026-07-29-tooze-china-shock-chartbook/", _source: "curated" }
    ]
  },
  {
    name: "Lepore, Jill",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q6192915", "https://it.wikipedia.org/wiki/Jill_Lepore"],
    note: "Storica e scrittrice americana (1966), staff writer del New Yorker e professoressa a Harvard. Autrice di *These Truths: A History of the United States* (2018), storia degli Stati Uniti costruita attorno all'idea che le verità fondanti — uguaglianza, diritti, sovranità popolare — non siano astrazioni ma oggetti concreti con effetti concreti nella vita delle persone: un'impostazione storiografica in piena sintonia con il filo teorico del sito. Tra le voci più acute nella critica storica alla Silicon Valley e alla mitologia del progresso tecnologico. Nel sito è citata per la lettura dell'enciclica *Magnifica Humanitas* di Leo XIV: il Papa come prima autorità spirituale a nominare il «paradigma tecnocratico», in una genealogia critica che risale ad Arendt e Mumford. Sul dibattito intorno al 1619 Project la sua rilevanza è strutturale prima che polemica, e il sito la usa come chiave di lettura: l'impianto di *These Truths* richiede che le proposizioni fondanti fossero intenzioni vere, perché se la Rivoluzione americana fosse stata combattuta in primo luogo per proteggere la schiavitù non ci sarebbe nulla da tradire e il libro perderebbe il proprio motore — resterebbe una storia più semplice e molto meno interessante, ipocrisia fino in fondo. La tesi difficile che Lepore sceglie è che gli stessi uomini intendessero davvero quelle proposizioni e possedessero persone, e che la contraddizione non si sciolga decidendo che mentivano. Questo la colloca con il 1619 Project sulla centralità della schiavitù — e infatti non firmò la lettera dei cinque storici del dicembre 2019 — e contro la sua affermazione sulla causalità, nella stessa posizione di Leslie M. Harris. Dal novembre 2025 la ricostruzione non è più un'inferenza dal metodo: nel pezzo sul duecentocinquantenario Lepore prende posizione in proprio, descrive l'introduzione di Hannah-Jones come quella che presentò la Rivoluzione come deplorevole, riporta l'obiezione degli storici e la correzione parziale del *Times* — «alcuni dei coloni» — e chiude su una simmetria che è la sua firma: la Rivoluzione fallita è quella che l'amministrazione Trump non sopporta che gli americani conoscano e piangano, la Rivoluzione riuscita è quella che alcune istituzioni americane sono decise a ignorare.",
    related: [
      { name: "paradigma tecnocratico", why: "Nel maggio 2026 legge l'enciclica di Leone XIV come la prima volta che un'autorità spirituale nomina il paradigma tecnocratico." }
    ],
    articles: [
      { title: "What the Pope Said About A.I.", url: "/curated/2026-05-27-lepore-pope-leo-ai-newyorker/", _source: "curated" },
      { title: "I Helped Fact-Check the 1619 Project. The Times Ignored Me.", url: "/curated/2020-03-06-harris-1619-project-fact-check-politico/", _source: "curated" },
      { title: "America's Next Story", url: "/curated/2026-04-09-lepore-americas-next-story/", _source: "curated" },
      { title: "What Was the American Revolution For?", url: "/curated/2025-11-17-lepore-rivoluzione-americana-250-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "Arendt, Hannah",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q60025", "https://it.wikipedia.org/wiki/Hannah_Arendt"],
    note: "Filosofa politica tedesco-americana (1906–1975). Autrice de Le origini del totalitarismo (1951) e La banalità del male (1963). Teorica della sfera pubblica, della natalità come categoria politica e della distinzione tra lavoro, opera e azione come fondamento dell'analisi della vita attiva.",
    articles: [
      { title: "La colonizzazione del giudizio", url: "/curated/2026-06-12-corriere-colonizzazione-giudizio/", _source: "curated" },
      { title: "What the Pope Said About A.I.", url: "/curated/2026-05-27-lepore-pope-leo-ai-newyorker/", _source: "curated" },
      { title: "Is Kaliningrad, Russia's exclave surrounded by EU countries, an asset or a liability?", url: "/curated/2022-06-06-economist-kaliningrad-risorsa-o-ostaggio/", _source: "curated" }
    ]
  },
  {
    name: "Thiel, Peter",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Nuova Zelanda", "Germania", "Stati Uniti"] },
    related: [
      { name: "Palantir", why: "L'azienda che porta la teoria del monopolio di Thiel dentro l'apparato di sicurezza statale." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q705525", "https://it.wikipedia.org/wiki/Peter_Thiel"],
    note: "Investitore e imprenditore tedesco-americano (1967). Cofondatore di PayPal e Palantir, finanziatore di Facebook e Trump. Teorico del monopolio come obiettivo strategico (Zero to One, 2014): i mercati competitivi distruggono i margini, il monopolio crea valore — e il «segreto» è la verità che nessuno dice ad alta voce.",
    articles: [
      { title: "La colonizzazione del giudizio", url: "/curated/2026-06-12-corriere-colonizzazione-giudizio/", _source: "curated" },
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" },
      { title: "Naomi Klein: 'Extreme wealth has a deranging effect. It turns you into a supremacist'", url: "/curated/2026-09-18-klein-end-times-fascism-guardian/", _source: "curated" }
    ]
  },
  {
    name: "van Middelaar, Luuk",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Paesi Bassi"] },
    sameAs: ["https://www.wikidata.org/wiki/Q4761828", "https://en.wikipedia.org/wiki/Luuk_van_Middelaar"],
    note: "Storico e filosofo politico olandese (1973). Consigliere di Herman Van Rompuy al Consiglio Europeo, autore de Il passaggio all'Europa (2009) e Alarums and Excursions (2019). Teorico dell'improvvisazione istituzionale come metodo di governance europea in tempi di crisi.",
    articles: [
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" }
    ]
  },
  {
    name: "Kojève, Alexandre",
    related: [
      { name: "Fukuyama, Francis", why: "La fine della storia arriva a Fukuyama dalla lettura kojèviana di Hegel: il riconoscimento come motore che si esaurisce." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia", "Russia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q354504", "https://it.wikipedia.org/wiki/Alexandre_Koj%C3%A8ve"],
    note: "Filosofo russo-francese (1902–1968). Le sue letture di Hegel agli anni Trenta hanno formato un'intera generazione di intellettuali europei (Aron, Bataille, Merleau-Ponty). Teorico della «fine della storia» ante litteram e dell'impero post-storico — il Lateinisches Reich come possibile risposta europea alla fine dei conflitti ideologici.",
    articles: [
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" }
    ]
  },
  {
    name: "Kelly, Kevin",
    related: [
      { name: "The Technium", why: "Il blog porta il nome del suo concetto centrale: la tecnosfera come sistema vivente con tendenze proprie." },
      { name: "metodo scientifico", why: "La sua carrellata storica mostra il metodo come stratificazione di strumenti, non come protocollo fisso." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q2707355", "https://it.wikipedia.org/wiki/Kevin_Kelly"],
    note: "Futurista e saggista americano (1952), co-fondatore di Wired, autore di Out of Control (1994), What Technology Wants (2010), The Inevitable (2016). Nel sito è citato per un saggio del 2006 sulle possibili evoluzioni del metodo scientifico — quattordici speculazioni che vent'anni dopo leggono come una descrizione del presente, soprattutto alla luce dell'AI.",
    articles: [
      { title: "Speculations on the Future of the Scientific Method", url: "/curated/2026-05-04-kevin-kelly-future-scientific-method/", _source: "curated" }
    ]
  },
  {
    name: "Nussbaum, Martha",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q235470", "https://it.wikipedia.org/wiki/Martha_Nussbaum"],
    note: "Filosofa americana (1947), docente a Chicago. Neo-aristoteliana, autrice di The Fragility of Goodness (1986), Upheavals of Thought (2001), Creating Capabilities (2011). Il suo approccio sulle capacità dovrebbe essere centrale nella teorizzazione del lavoro culturale, ma apparentemente così non è. Nel sito è il pretesto per una lettura dell'etica della virtù come ontologia etica radicale: le virtù non sono proprietà positive determinate, ma soluzioni virtuali a problemi che esistono per primi.",
    articles: [
      { title: "A Problem-Based Reading of Nussbaum's Virtue Ethics", url: "/curated/2018-09-04-brady-nussbaum-virtue-ethics-epochemagazine/", _source: "curated" }
    ]
  },
  {
    name: "Mengzi",
    sameAs: ["https://www.wikidata.org/wiki/Q188903", "https://it.wikipedia.org/wiki/Mencio"],
    geo: { modo: "diretta", paesi: ["Cina"] },
    type: "persona",
    related: [
      { name: "Aristotele", why: "Due impianti della virtù che divergono sul meccanismo: il carattere nasce dall'abitudine o da disposizioni innate da coltivare." }
    ],
    note: "Filosofo confuciano cinese (372–289 a.C. circa), noto in Occidente come Mencio e chiamato il Secondo Saggio per aver dato al confucianesimo la forma che avrebbe tenuto per due millenni. Nel sito è il contraltare sistematico di Aristotele sull'acquisizione della virtù: dove Aristotele fa nascere il carattere dall'abitudine — si diventa giusti facendo cose giuste — Mengzi obietta che l'abituazione produce al massimo conformità comportamentale e non virtù autentica, e fonda la morale su quattro disposizioni innate che chiama germogli: non frutti in miniatura, ma tendenze attive che senza l'ambiente giusto non fioriscono e senza la pianta non esistono. La distinzione fra comportamento conforme e disposizione reale è la stessa che separa un sistema che si comporta bene sotto valutazione da un sistema allineato. Sul versante dell'obbligazione, Mengzi fonda la morale su relazioni specifiche — famiglia, amici, anziani — contro l'imparzialità di kantiani e utilitaristi: la stessa struttura di Hunhu/Ubuntu, e la stessa collisione con il modello di soggetto come unità atomica sovrana presupposto dai sistemi AI.",
    articles: [
      { title: "The second sage", url: "/curated/2016-10-31-vannorden-mengzi-aeon/", _source: "curated" },
      { title: "Western philosophy is racist", url: "/curated/2017-10-31-vannorden-canone-filosofico-aeon/", _source: "curated" },
      { title: "We are interwoven beings", url: "/curated/2022-11-25-valmisa-co-azione-aeon/", _source: "curated" },
      { title: "Essence is fluttering", url: "/curated/2025-09-01-douglas-zhuangzi-identita-aeon/", _source: "curated" }
    ]
  },
  {
    name: "Aristotele",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Grecia"] },
    related: [
      { name: "etica della virtù", why: "L'impianto in cui le virtù sono la risposta eccellente a problemi che vengono prima di loro." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q868", "https://it.wikipedia.org/wiki/Aristotele"],
    note: "Filosofo greco (384–322 a.C.), allievo di Platone, fondatore del Liceo. Nel sito è il fondamento teorico dell'etica della virtù riletta da Nussbaum: non un catalogo di caratteristiche positive, ma una logica in cui i problemi — le sfere dell'attività umana dove la scelta è inevitabile e rischiosa — sono primari, e le virtù ne sono la risposta eccellente.",
    articles: [
      { title: "A Problem-Based Reading of Nussbaum's Virtue Ethics", url: "/curated/2018-09-04-brady-nussbaum-virtue-ethics-epochemagazine/", _source: "curated" },
      { title: "The second sage", url: "/curated/2016-10-31-vannorden-mengzi-aeon/", _source: "curated" }
    ]
  },
  {
    name: "Deleuze, Gilles",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q184226", "https://it.wikipedia.org/wiki/Gilles_Deleuze"],
    note: "Filosofo francese (1925–1995). Nel sito è evocato per le implicazioni deleuziane della lettura di Nussbaum da parte di Brady: i problemi come entità virtuale-reali che precedono le soluzioni — il virtuale non è meno reale dell'attuale, è semplicemente la modalità di esistenza di ciò che è irrisolto. Una lettura che dialoga con l'ontologia del problema come primum dell'etica.",
    articles: [
      { title: "A Problem-Based Reading of Nussbaum's Virtue Ethics", url: "/curated/2018-09-04-brady-nussbaum-virtue-ethics-epochemagazine/", _source: "curated" }
    ]
  },
  {
    name: "Dondi, Ilaria Maria",
    related: [
      { name: "privilegio", why: "Chi ha potere ha sempre avuto accesso a supporto — ghostwriter, editor, assistenti — senza che si chiamasse delega." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    note: "Giornalista e autrice della newsletter «Anomalia. Umani in tempi artificiali». Nel sito è la voce che demistifica l'indignazione per l'uso dell'AI nel lavoro creativo: il supporto invisibile (ghostwriter, editor, speechwriter) è sempre stato accessibile al potere senza essere considerato imbroglio — l'AI ne è una versione più economica e accessibile a chi storicamente ne era escluso.",
    articles: [
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" }
    ]
  },
  {
    name: "Columbro, Donata",
    related: [
      { name: "femminicidio", why: "Dimostra che la categoria statistica è costruita socialmente, e che contarla è un atto politico." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q110887039", "https://it.wikipedia.org/wiki/Donata_Columbro"],
    note: "Data journalist e autrice di «Perché contare i femminicidi è un atto politico» (2026) e della newsletter «Ti spiego il dato». Nel sito è la voce che dimostra il carattere costruito di tutte le categorie statistiche — dal femminicidio alla disoccupazione — e che distingue questa postura costruttivista legittima dall'uso negazionista della stessa tesi.",
    articles: [
      { title: "Il femminicidio non esiste", url: "/curated/2026-05-06-columbro-femminicidio-non-esiste/", _source: "curated" }
    ]
  },
  {
    name: "Bores, Alex",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q117328293", "https://en.wikipedia.org/wiki/Alex_Bores"],
    note: "Membro dell'Assemblea di New York (2022), ex data scientist a Palantir (2014–2019). Ha co-scritto il RAISE Act, una delle prime leggi di regolamentazione dell'AI approvata da uno stato americano. Nel sito è il caso che mostra la governance dell'AI come terreno di conflitto politico reale: ha lasciato Palantir quando i dirigenti si rifiutarono di inserire guardrail nel contratto con ICE per impedire l'uso del software nelle deportazioni, ed è poi diventato bersaglio di un super PAC finanziato da co-fondatori di OpenAI e Palantir per il suo lavoro legislativo sull'AI.",
    articles: [
      { title: "Why Are Palantir and OpenAI Scared of Alex Bores?", url: "/curated/2026-04-21-bores-palantir-openai-regulation-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Chan, Kyle",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q95952534"],
    note: "Foreign policy fellow al Brookings Institution, esperto di Cina e tecnologia. Nel sito è citato per l'analisi della competizione AI sino-americana: la cornice della «gara» è fuorviante perché i due paesi corrono gare diverse — gli USA verso l'AGI, la Cina verso efficienza, diffusione e applicazioni fisiche. La tesi del pezzo è nel titolo: il principale ostacolo americano nella competizione con la Cina è interno agli Stati Uniti.",
    articles: [
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Frey, Jennifer",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    note: "Professoressa di filosofia, ha costruito e poi visto smantellare un programma di liberal arts all'Università di Tulsa. Nel sito è la voce che difende la liberal education con un argomento intrinseco — la *paideia* e il *Bildung* come coltivazione delle capacità superiori dell'essere umano come fine in sé — in contrappunto al Pinillos già in archivio, che ne difende il valore strumentale. Porta in dote l'Aristotele sulla *scholé*: il fine dell'educazione è il leisure, lo spazio in cui si coltiva il meglio di sé.",
    articles: [
      { title: "A Defense of a Liberal Arts Education in the Age of A.I.", url: "/curated/2026-05-21-frey-liberal-arts-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Zakaria, Fareed",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q333425", "https://it.wikipedia.org/wiki/Fareed_Zakaria"],
    note: "Giornalista e commentatore politico indiano-americano (1964), conduttore di «Fareed Zakaria GPS» su CNN e columnist del Washington Post. Autore di *The Post-American World* (2008) e *Age of Revolutions* (2024). Nel sito è citato per l'analisi della guerra iraniana come caso empirico del predatory hegemon: un sistema cooperativo globale costruito su beni pubblici e shadow of the future distrutto da un attore con fattore di sconto δ vicino a zero.",
    articles: [
      { title: "Fareed Zakaria on the Moral Cost of Trump's War", url: "/curated/2026-04-10-zakaria-trump-iran-war-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Klein, Ezra",
    related: [
      { name: "Thompson, Derek", why: "Coautori di Abundance (2025), il libro che ha rilanciato il dibattito sul progressismo dal lato dell'offerta." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q605", "https://it.wikipedia.org/wiki/Ezra_Klein"],
    note: "Giornalista e commentatore americano (1983), cofondatore di Vox, editorialista del NYT e conduttore dell'Ezra Klein Show. Nel sito è citato per il libro *Abundance* (2025, con Derek Thompson) e per il podcast che ne fa un bilancio a un anno dall'uscita: un caso in cui una certa idea della realtà — la scarsità come prodotto di scelte istituzionali, non di destino — ha cominciato a produrre effetti sul comportamento politico americano.",
    articles: [
      { title: "What Worries Me Most About 'Abundance'", url: "/curated/2026-04-28-klein-abundance-nyt/", _source: "curated" },
      { title: "Il grigio non è un gusto", url: "/curated/2026-10-02-klein-millman-il-grigio-non-e-un-gusto-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Thompson, Derek",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q45099198", "https://en.wikipedia.org/wiki/Derek_Thompson_(journalist)"],
    note: "Giornalista americano, contributing writer all'Atlantic. Coautore con Ezra Klein di *Abundance* (2025), il libro che ha rilanciato il dibattito sul supply-side progressivism negli Stati Uniti: costruire più case, più energia, ridurre i veto point istituzionali. Nel sito è citato insieme a Klein per l'angolo epistemologico del libro, non per il merito delle politiche di housing.",
    articles: [
      { title: "What Worries Me Most About 'Abundance'", url: "/curated/2026-04-28-klein-abundance-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Ottaviani, Jacopo",
    related: [
      { name: "data journalism", why: "Lavora all'incrocio fra codice, dati e inchiesta: è la fonte del pipeline che il sito usa anche fuori dal giornalismo." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    note: "Giornalista e informatico italiano, senior strategist a Code for Africa e fellow del Reuters Institute. Premio per il data journalism, lavora all'incrocio tra codice, dati e storytelling su temi sociali urgenti. Nel sito è il caso che mostra il capitale semantico in azione: ha ricostruito in due giorni *Patrie Galere* (mappa delle morti nelle carceri italiane) che nel 2012 gli aveva richiesto tre settimane, usando il vibe coding strutturato — divide et impera applicato all'AI.",
    articles: [
      { title: "From weeks of work to days: How I rebuilt two data journalism projects with AI", url: "/curated/2026-06-26-ottaviani-data-journalism-ai-reuters/", _source: "curated" }
    ]
  },
  {
    name: "Harbaugh, Ken",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q28530060", "https://en.wikipedia.org/wiki/Ken_Harbaugh"],
    note: "Ex pilota della Marina americana, presidente di Valor Media Network. Autore del reportage sulle *vidma* — la rete di intelligence femminile della resistenza ucraina nei territori occupati. Nel sito è la fonte del pezzo che aggiunge dimensione operativa alla serie sulle ombre: honeytraps, comunicazione clandestina, kill chain alimentata da agenti civili.",
    articles: [
      { title: "The Warrior-Witches of Ukraine's Resistance", url: "/curated/2026-06-21-harbaugh-warrior-witches-ukraine-atlantic/", _source: "curated" }
    ]
  },
  {
    name: "Vogels, Werner",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Paesi Bassi"] },
    sameAs: ["https://www.wikidata.org/wiki/Q2536951", "https://en.wikipedia.org/wiki/Werner_Vogels"],
    note: "CTO di Amazon (2005 in corso), ingegnere e informatico olandese. Autore del blog *All Things Distributed*, dove scrive di architettura distribuita, cultura organizzativa e innovazione. Nel sito è citato per la riflessione sul ritorno alla «two-pizza culture» e sulla revisione del metodo «working backwards» nell'era dei coding agent: quando costruire un prototipo costa una sera, l'ordine logico del processo creativo si inverte.",
    articles: [
      { title: "A Return to Two-Pizza Culture", url: "/curated/2026-06-30-vogels-two-pizza-culture-allthingsdistributed/", _source: "curated" },
      { title: "New York Times training editor: Take these four steps before you roll out new things", url: "/curated/2026-09-18-athas-rollout-redazione-niemanlab/", _source: "curated" }
    ]
  },
  {
    name: "Askell, Amanda",
    related: [
      { name: "allineamento AI", why: "Guida la redazione della costituzione etica dei modelli Claude: l'allineamento come documento scritto, non come proprietà emergente." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Regno Unito", "Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q115661373", "https://en.wikipedia.org/wiki/Amanda_Askell"],
    note: "Filosofa di Anthropic, responsabile della costituzione etica dei modelli Claude. Ha guidato la redazione dell'ultima iterazione del documento di 78 pagine soprannominato internamente «soul doc», che integra principi kantiani, la Dichiarazione Universale dei Diritti Umani e i termini di servizio di Apple. Nel sito è la figura che incarna la svolta: la filosofia come infrastruttura tecnica interna alle AI labs, non consulenza esterna.",
    articles: [
      { title: "Why Big AI Labs Are Hiring So Many Philosophers", url: "/curated/2026-06-24-economist-ai-labs-philosophers/", _source: "curated" }
    ]
  },
  {
    name: "Hui, Yuk",
    related: [
      { name: "cosmotecnica", why: "Teorico della cosmotecnica: ogni civiltà produce una tecnica radicata nella propria cosmologia." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Cina"] },
    sameAs: ["https://www.wikidata.org/wiki/Q106863978", "https://en.wikipedia.org/wiki/Yuk_Hui"],
    note: "Filosofo cinese-hongkonghese (1985), docente alla City University of Hong Kong e all'Università Erasmus di Rotterdam; laurea in ingegneria informatica a Hong Kong, dottorato a Goldsmiths con Bernard Stiegler. Teorico della cosmotecnica: ogni civiltà produce una tecnica radicata nella propria cosmologia, contro l'idea che la tecnologia moderna sia universale e neutra. Il libro che fonda il concetto è *The Question Concerning Technology in China: An Essay in Cosmotechnics* (2016), scritto come risposta al saggio di Heidegger del 1953 sulla tecnica; seguono *Recursivity and Contingency* (2019), *Art and Cosmotechnics* (2021) e *Machine and Sovereignty* (2024). Nel sito è la fonte del concetto che ridefinisce la competizione AI sino-americana come scontro tra cosmologie, non solo tra modelli.",
    articles: [
      { title: "Cosa intende la Cina per «intelligenza artificiale»", url: "/curated/2026-06-25-pieranni-cina-intelligenza-artificiale-altriorienti/", _source: "curated" }
    ]
  },
  {
    name: "Pieranni, Simone",
    related: [
      { name: "Cina", why: "Fonte principale del sito sulla Cina: il ruolo cinese come broker nel nuovo ordine energetico post-Hormuz." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q115625750", "https://it.wikipedia.org/wiki/Simone_Pieranni"],
    note: "Giornalista e autore italiano, tra i principali esperti di Cina in Italia. Autore di *Red Mirror* (2021) e della newsletter/podcast *Il Partito* e *Altri Orienti*. Nel sito compare in due contesti: in *L'ombra del passato* come fonte cruciale sul nuovo ordine energetico post-Hormuz — la sua analisi del ruolo cinese come broker fra Teheran e Washington («la stabilità di Hormuz è diventata due facce della stessa medaglia geopolitica») alimenta l'estensione del modello teorico sulla Cina a ρ alto; e nel curated su AI e lavoro come curatore della mappa narrativa cinese sull'automazione e il patto sociale.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Cosa intende la Cina per «intelligenza artificiale»", url: "/curated/2026-06-25-pieranni-cina-intelligenza-artificiale-altriorienti/", _source: "curated" },
      { title: "IA, bulloni e umanesimo", url: "/curated/2026-06-28-pieranni-ia-bulloni-umanesimo-ilpartito/", _source: "curated" }
    ]
  },
  {
    name: "Boccia Artieri, Giovanni",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q3107105", "https://it.wikipedia.org/wiki/Giovanni_Boccia_Artieri"],
    note: "Sociologo dei media italiano, professore ordinario, studioso di piattaforme digitali, comunicazione e cultura della rete. Autore di numerosi lavori sull'identità digitale, i social network e le trasformazioni del giornalismo nell'era algoritmica. Nel sito è citato per la lettura critica dell'enciclica *Magnifica Humanitas*: usa il documento come leva per spostare il discorso sull'AI dal piano morale al piano politico-strutturale, introducendo l'immagine dei dati come «nuove terre rare del potere» e la necessità di una grammatica politica — non solo un appello etico — per governare l'intelligenza artificiale.",
    articles: [
      { title: "Magnifica Humanitas: le nuove terre rare del potere", url: "/curated/2026-06-17-boccia-artieri-magnifica-humanitas-substack/", _source: "curated" }
    ]
  },
  {
    name: "Brose, Christian",
    related: [
      { name: "armi autonome", why: "Il suo ragionamento porta al punto terminale: la normativa non proibisce l'automazione della kill chain." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    note: "Presidente e chief strategy officer di Anduril. Ex capo del personale della Commissione per le Forze Armate del Senato americano, poi direttore delle politiche al Pentagono. Autore di The Kill Chain (2020). Nel sito è la voce opposta ad Amodei sul rapporto tra aziende tecnologiche e apparato militare: o ci si fida del governo democraticamente eletto per decidere come usare la tecnologia, o si esce dal business. Ha definito il rifiuto di Anthropic di lavorare con il Pentagono «where Anthropic went wrong».",
    articles: [
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Casey Newton",
    related: [
      { name: "Platformer", why: "Ha fondato la newsletter nel 2021 con Zoe Schiffer." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q78906087", "https://en.wikipedia.org/wiki/Casey_Newton"],
    note: "Giornalista tecnologico americano, co-fondatore con Zoe Schiffer di Platformer (2021). In precedenza ha scritto di tech per The Verge. Nel sito è l'autore di riferimento per il giornalismo sulle piattaforme e sulla governance tech: cultura interna delle grandi aziende, moderazione dei contenuti, rapporto tra piattaforme e democrazia.",
    articles: [
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" }
    ]
  },
  {
    name: "McLuhan, Marshall",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Canada"] },
    sameAs: ["https://www.wikidata.org/wiki/Q193871", "https://it.wikipedia.org/wiki/Marshall_McLuhan"],
    note: "Herbert Marshall McLuhan (Edmonton, 1911 – Toronto, 1980), teorico dei media canadese. Autore di La galassia Gutenberg (1962) e Understanding Media (1964). Ha coniato il concetto di «medium come messaggio»: le proprietà formali del mezzo di comunicazione trasformano la cognizione e la società indipendentemente dai contenuti trasmessi. Nel sito entra attraverso Tarchetti, che lo cita chiudendo il pezzo con l'immagine del sistema intero che cambia al contatto con una nuova tecnologia: «Non è l'area incisa che viene maggiormente toccata. La zona dell'urto e dell'incisione è intorpidita. Quello che cambia è l'intero sistema.» È la base teorica di ciò che Postman ha poi sistematizzato come ecologia dei media.",
    articles: [
      { title: "Non usiamo i media, ci cresciamo dentro", url: "/curated/2026-07-13-tarchetti-media-ecology-non-ho-capito/", _source: "curated" }
    ]
  },
  {
    name: "Postman, Neil",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q436131", "https://it.wikipedia.org/wiki/Neil_Postman"],
    note: "Teorico dei media americano (New York, 1931–2003), fondatore del Department of Communication Arts and Sciences alla NYU e del Media Ecology Program (1968). Autore di Amusing Ourselves to Death (1985) e Technopoly (1992). Nel sito è il fondatore del quadro concettuale che Tarchetti usa per leggere il digitale: i media non sono contenitori neutri ma ambienti che determinano quali contenuti possono esistere e in che forma. L'errore degli editori — e il punto del pezzo — è trattare il digitale come canale di distribuzione mentre esso è un ambiente con proprietà formali proprie.",
    articles: [
      { title: "Non usiamo i media, ci cresciamo dentro", url: "/curated/2026-07-13-tarchetti-media-ecology-non-ho-capito/", _source: "curated" }
    ]
  },
  {
    name: "Azhar, Azeem",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q104414503", "https://en.wikipedia.org/wiki/Azeem_Azhar"],
    note: "Imprenditore, saggista e analista tecnologico britannico-pakistano (1971). Fondatore di Exponential View, newsletter e podcast di riferimento sull'AI e sulle tecnologie esponenziali. Ex dirigente in BBC, Microsoft e Jawbone. Autore di Exponential (2021). Nel sito è citato per The State of the AI Economy (2026): il primo modello bottom-up e de-duplicato della domanda nell'economia AI, costruito a partire dalle disclosure degli hyperscaler e da fonti proprietarie con una metodologia auditabile.",
    articles: [
      { title: "The State of the AI Economy", url: "/curated/2026-06-25-azhar-state-ai-economy-exponentialview/", _source: "curated" }
    ]
  },
  {
    name: "Gumenyuk, Nataliya",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Ucraina"] },
    sameAs: ["https://www.wikidata.org/wiki/Q17361190", "https://en.wikipedia.org/wiki/Nataliya_Gumenyuk"],
    note: "Giornalista e ricercatrice ucraina, CEO del Public Interest Journalism Lab (PIJL). Nel sito compare come autrice di due pezzi complementari sulla democrazia ucraina in tempo di guerra: il concetto di 'drone democracy' (Foreign Affairs, 2026) — l'innovazione militare bottom-up che genera accountability politica dal basso — e il rapporto PIJL 'Ukraine's Dual Struggle' (con Chatham House, 2026), ricerca primaria sul campo sulla tenuta democratica sotto legge marziale. I due pezzi mostrano la stessa energia civica distribuita nelle sue due facce: costruttiva (tecnologia militare) e protettiva (proteste contro lo smantellamento degli organi anticorruzione).",
    articles: [
      { title: "The Future of Ukraine's Drone Democracy", url: "/curated/2026-08-26-gumenyuk-ukraine-drone-democracy-foreignaffairs/", _source: "curated" },
      { title: "Ukraine's Dual Struggle", url: "/curated/2026-04-01-pijl-gumenyuk-ukraine-dual-struggle/", _source: "curated" }
    ]
  },
  {
    name: "Meloni, Giorgia",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q451791", "https://it.wikipedia.org/wiki/Giorgia_Meloni"],
    note: "Politica italiana (1977), presidente del Consiglio dal ottobre 2022, co-fondatrice di Fratelli d'Italia (2012). Nel sito è studiata come caso di governance hard right in sistema fiscalmente vincolato: la distanza tra campagna identitaria e governo tecnocratico non è una scelta politica ma un effetto strutturale dei vincoli di bilancio italiani (debito ~140% PIL, obblighi PNRR, spread sensibili). Il modello «Melonizzazione» — normalizzazione dei partiti post-fascisti attraverso il pragmatismo di governo — funziona dove i margini di azione economica sono compressi al punto che la politica identitaria resta l'unico terreno praticabile.",
    articles: [
      { title: "Giorgia Meloni Cuts the Hard Right a Path to Power", url: "/curated/2026-08-21-cohen-meloni-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Musk, Elon",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Sudafrica", "Canada", "Stati Uniti"] },
    related: [
      { name: "paradigma tecnocratico", why: "Il caso limite: hackerare ogni contesto con straordinaria efficacia, senza mai mettere in discussione il quadro." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q317521", "https://it.wikipedia.org/wiki/Elon_Musk"],
    note: "Imprenditore e investitore americano (1971), fondatore o co-fondatore di Tesla, SpaceX, X (ex Twitter), xAI. Nel sito è studiato come caso limite del paradigma tecnocratico: straordinaria capacità di hackerare i contesti in cui si muove — trovare leve regolatorie, politiche, finanziarie e portare risultati concreti — associata a una cecità strutturale verso qualsiasi big picture che non sia preconfezionata (accelerazionismo, doomsday AI, abbondanza universale). Framework che hanno in comune la struttura del mito tecnico, non dell'analisi. La sua figura pone una domanda aperta sul rapporto tra salute psichica, performance e potere nell'ecosistema tech.",
    articles: [
      { title: "An interview with Elon Musk", url: "/curated/2026-07-24-musk-economist-interview-beddoes/", _source: "curated" },
      { title: "Naomi Klein: 'Extreme wealth has a deranging effect. It turns you into a supremacist'", url: "/curated/2026-09-18-klein-end-times-fascism-guardian/", _source: "curated" },
      { title: "Intelligenza artificiale e rischio estinzione, che cosa pensano (davvero) gli scienziati?", url: "/curated/2026-09-26-signorelli-rischio-estinzione-scienziati-backdoor/", _source: "curated" }
    ]
  },
  {
    name: "Morton, Timothy",
    related: [
      { name: "iperoggetti", why: "Introduce il termine in Iperoggetti (2013): entità reali che eccedono la finestra percettiva umana." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q4854071", "https://it.wikipedia.org/wiki/Timothy_Morton"],
    note: "Filosofo americano (1968). Autore di *Iperoggetti* (2013), introduce il concetto di hyperobject per descrivere entità — cambiamento climatico, totalità dei materiali nucleari, biosfera — così distribuite nel tempo e nello spazio da eccedere qualsiasi localizzazione percettiva. Nel sito compare come chiave per leggere perché i problemi sistemici resistono all'elaborazione cognitiva ordinaria e restano vulnerabili a narrazioni di semplificazione individuale.",
    articles: [
      { title: "The Climate Crisis Is Bigger Than Your Footprint", url: "/curated/2026-08-31-stokes-carbon-footprint-bp-mitpress/", _source: "curated" }
    ]
  },
  {
    name: "Steinem, Gloria",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q231178", "https://it.wikipedia.org/wiki/Gloria_Steinem"],
    note: "Giornalista e attivista americana (1934–2026), co-fondatrice di Ms. Magazine e figura centrale del femminismo della seconda ondata. Nel sito compare per il suo ultimo testo scritto, pubblicato su The New Yorker poco prima della morte: un documento testimoniale che rivela una genealogia poco nota — il femminismo politico di Steinem nasce dall'India postcoloniale degli anni Cinquanta e dal contatto con i gandhiani, non dalla teoria accademica occidentale.",
    articles: [
      { title: "Gloria Steinem's Final Essay", url: "/curated/2026-09-03-steinem-final-essay-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "Sorkin, Aaron",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    note: "Sceneggiatore americano (1961). Ha drammatizzato per un quarto di secolo le istituzioni al centro della società americana — *A Few Good Men*, *The American President*, *The West Wing*, *The Newsroom* — e ha scritto per il cinema il racconto che ha fissato l'origine di Facebook nell'immaginario collettivo, *The Social Network* (2010), a cui è tornato nel 2026 con *The Social Reckoning*, dedicato alla whistle-blower Frances Haugen. Nel sito entra per due ragioni distinte. La prima è una teoria implicita del valore per provenienza: il quadro astratto che gli piaceva e che ha smesso di dirgli qualcosa nel momento esatto in cui ha saputo che l'aveva dipinto una macchina è il controesempio più netto alla tesi che l'autenticità non sia la grandezza che conta — l'oggetto non era cambiato, era cambiata un'informazione sulla sua origine. La seconda è il romanticismo istituzionale, che dichiara apertamente e di cui offre la difesa minima: la reverenza per il Congresso, i tribunali e il giornalismo può anche essere mal riposta, ma una critica delle istituzioni priva di un'idea di ricambio non è una posizione. Va però tenuto fermo che il suo talento è diagnostico sul presente e non predittivo. *The West Wing* si chiude con C.J. Cregg — la portavoce interpretata da Allison Janney, diventata capo di gabinetto nella sesta stagione — che lascia la Casa Bianca per dirigere la fondazione di un miliardario filantropo, perché è lì che ormai si fa la politica che conta: letta nel 2026, è la prefigurazione entusiasta del trasferimento di potere che il sito osserva altrove con ben altro animo. E le ultime stagioni condividono l'assunto dell'epoca secondo cui l'integrazione commerciale avrebbe liberalizzato le autocrazie asiatiche, la Cina in testa — un pronostico che i vent'anni successivi hanno smentito. Sorkin coglie con precisione lo spirito di un tempo e i sogni che quel tempo fa su se stesso; non la direzione in cui andrà. È il motivo per cui le sue opere restano utili come reperti oltre che come racconti, e per cui il sito le usa senza sottoscriverne le previsioni.",
    articles: [
      { title: "Aaron Sorkin Goes Off Script", url: "/curated/2026-09-19-sorkin-social-reckoning-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Turkle, Sherry",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q52919", "https://it.wikipedia.org/wiki/Sherry_Turkle"],
    note: "Sociologa e psicologa americana (1948), professoressa emerita al MIT. Studia da quarant'anni il rapporto tra esseri umani e macchine: *Alone Together* (2011) ha documentato come i social media trasformino la socievolezza in gestione della presenza; *Reclaiming Conversation* (2015) ha argomentato che il testo scritto sta erodendo la capacità di conversazione profonda; *Artificial Intimacy* (2026) applica lo stesso framework ai chatbot relazionali. Nel sito compare come voce critica di riferimento sull'AI: non contro la tecnologia ma contro il design che simula presenza senza che ci sia nessuno dietro.",
    articles: [
      { title: "The Original Sin of AI", url: "/curated/2026-09-11-turkle-original-sin-ai-atlantic/", _source: "curated" }
    ]
  },
  {
    name: "Fukuyama, Francis",
    related: [
      { name: "vetocrazia", why: "Il termine è suo, da Political Order and Political Decay (2014): i punti di veto si moltiplicano finché nessuno decide più." },
      { name: "thymos", why: "È lui a portare il thymos platonico al centro dell'analisi politica: il riconoscimento come motore della storia." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q186123", "https://it.wikipedia.org/wiki/Francis_Fukuyama"],
    note: "Politologo americano (1952), professore alla Stanford University. Ex allievo di Allan Bloom, ha lavorato per la RAND Corporation e per l'amministrazione Reagan prima di rompere con il neoconservatorismo dopo l'invasione dell'Iraq (2003). Autore di *The End of History and the Last Man* (1992) — il libro più citato e frainteso della sua generazione — e della serie *Political Order and Political Decay* (2011-2014). Nel sito compare come il teorico che ha identificato il problema non risolto della democrazia liberale: non la minaccia esterna ma l'instabilità interna generata dal successo stesso — la noia del riconoscimento ottenuto, il thymos che si rivolta contro l'ordine che lo ha soddisfatto.",
    articles: [
      { title: "Why the End of History Is So Miserable", url: "/curated/2026-09-09-beckerman-fukuyama-end-history-atlantic/", _source: "curated" },
      { title: "Was Francis Fukuyama Right All Along?", url: "/curated/2026-09-18-ezra-klein-fukuyama-nyt/", _source: "curated" },
      { title: "One China, one world", url: "/curated/2026-03-26-perdue-tianxia-unita-cina-aeon/", _source: "curated" }
    ]
  },
  {
    name: "Nelson, Ted",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    sameAs: ["https://www.wikidata.org/wiki/Q62852", "https://it.wikipedia.org/wiki/Ted_Nelson"],
    note: "Informatico e teorico dei media americano (1937). Coniò il termine «hypertext» nel 1965, ispirandosi al «memex» di Vannevar Bush: l'iper- stava per «estensione e generalità» come in matematica per gli spazi multidimensionali — una forma capace di rappresentare la struttura reticolare del pensiero. Ideò Xanadu, un browser in cui ogni citazione avrebbe dovuto linkare al documento originale, permettendo di leggere testo citante e citato affiancati — una storia universale del pensiero tracciabile frase per frase. Il progetto non fu mai realizzato. Nel sito è la figura che articola cosa si perde quando le AI summary sostituiscono i link: l'architettura cognitiva del web come sistema di trail di associazione espliciti e attribuiti.",
    articles: [
      { title: "A linkless internet", url: "/curated/2024-12-06-jennings-linkless-internet-aeon/", _source: "curated" }
    ]
  },
  {
    name: "Tucidide",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Grecia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q41683", "https://it.wikipedia.org/wiki/Tucidide"],
    note: "Storico ateniese (460 ca.–400 ca. a.C.), autore de «La guerra del Peloponneso». Nel sito è il punto di partenza di un canone di lettura per chi lavora con la complessità organizzativa e geopolitica: Tucidide dà il framework strutturale (l'autoinganno come motore della storia, la debolezza della giustizia tra potenze diseguali, la differenza tra cause profonde e pretesti); Senofonte — cronologicamente successivo — è il manager-pratico (l'Anabasi come caso di project management sotto crisi, ritiro attraverso territorio ostile senza mappa); Erodoto — cronologicamente il più antico — apre la prospettiva etnografica e longue-durée, proto-Braudel ante litteram. Il paradosso è che l'ordine logico di lettura (Tucidide → Senofonte → Erodoto: framework, applicazione, prospettiva) è l'inverso dell'ordine cronologico (Erodoto → Tucidide → Senofonte).",
    articles: [
      { title: "Thucydides the perspicacious", url: "/curated/2026-08-03-polansky-schillinger-thucydides-aeon/", _source: "curated" }
    ]
  },

  {
    name: "Bourdieu, Pierre",
    related: [
      { name: "capitale simbolico", why: "Il concetto è suo; nel sito viene preso in prestito e piegato a un uso che Bourdieu non gli aveva dato." }
    ],
    type: "persona",
    geo: { modo: "diretta", paesi: ["Francia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q156268", "https://it.wikipedia.org/wiki/Pierre_Bourdieu"],
    note: "Sociologo francese (1930–2002), teorico del capitale simbolico e della distinzione sociale. Nel sito il concetto viene preso in prestito e piegato a un uso diverso dal suo: non la conversione fra forme di capitale, ma la regola di composizione quando un soggetto politico cambia direzione — un nuovo investimento simbolico non si somma al vecchio, lo compone, con una risultante più corta di entrambi.",
    articles: [
      { title: "La mappa e il crinale", url: "/writings/2026-09-07-la-mappa-e-il-crinale/" },
      { title: "Il grigio non è un gusto", url: "/curated/2026-10-02-klein-millman-il-grigio-non-e-un-gusto-nyt/", _source: "curated" }
    ]
  },
  {
    name: "capitale simbolico",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Francia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q1751638"],
    note: "Concetto di Bourdieu, ripreso nel sito con un'estensione che non è sua: prendere posizione politica è un investimento che si deposita senza attrito quando il soggetto è nuovo, ma mutare valori non aggiunge un nuovo investimento al vecchio — lo compone vettorialmente, con una risultante più corta e spesso deviata verso la posizione da cui si voleva uscire. Il caso analizzato è la Lega, dal capitale nordista all'ambizione nazionale.",
    articles: [
      { title: "La mappa e il crinale", url: "/writings/2026-09-07-la-mappa-e-il-crinale/" },
      { title: "Il grigio non è un gusto", url: "/curated/2026-10-02-klein-millman-il-grigio-non-e-un-gusto-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Schmitt, Carl",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Germania"] },
    sameAs: ["https://www.wikidata.org/wiki/Q77148", "https://it.wikipedia.org/wiki/Carl_Schmitt"],
    note: "Giurista e filosofo politico tedesco (1888–1985), teorico della distinzione amico-nemico come fondamento del politico. Nel sito è il padre nobile dell'ottavo alt-right/MAGA nella mappa a otto famiglie politiche, e la sua coppia concettuale è ciò che permette di tracciare la soglia — non una linea di quadrante ma un confine trasversale — oltre la quale l'avversario smette di essere un concorrente e diventa un nemico da eliminare dal campo.",
    articles: [
      { title: "La mappa e il crinale", url: "/writings/2026-09-07-la-mappa-e-il-crinale/" },
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "Hobsbawm, Eric",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    sameAs: ["https://www.wikidata.org/wiki/Q34933", "https://it.wikipedia.org/wiki/Eric_Hobsbawm"],
    note: "Storico britannico (1917–2012), coautore con Terence Ranger di The Invention of Tradition (1983). Nel sito la sua tesi sull'invenzione della tradizione è l'obiezione che costringe a cambiare criterio nel valutare le genealogie intellettuali rivendicate dalle famiglie politiche contemporanee: non conta l'anzianità di un antenato rivendicato, ma se qualcuno riconosciuto come intelligente abbia già sostenuto quelle idee prima.",
    articles: [
      { title: "La mappa e il crinale", url: "/writings/2026-09-07-la-mappa-e-il-crinale/" }
    ]
  },
  {
    name: "Aresu, Alessandro",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q131236382"],
    note: "Saggista italiano, autore di Le potenze del capitalismo politico (2020). Nel sito la sua teoria del capitalismo politico spiega l'anomalia dei \"tech bros\" nella mappa a otto famiglie: attori privati che perseguono fini propri, talvolta coincidenti con quelli degli Stati e talvolta no, con la decisione su quando smettano di coincidere lasciata a un privato — il caso Starlink in Ucraina ne è l'esempio.",
    articles: [
      { title: "La mappa e il crinale", url: "/writings/2026-09-07-la-mappa-e-il-crinale/" }
    ]
  },
  {
    name: "strutturalismo",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Svizzera", "Francia"] },
    related: [
      { name: "Wittgenstein, Ludwig", why: "Il mondo del Tractatus è fatto di fatti, e le proposizioni ne sono l'immagine: una struttura prima che un contenuto." },
      { name: "Enciclopedia Einaudi", why: "Il tentativo italiano più ambizioso di organizzare il sapere per relazioni invece che per alfabeto." },
      { name: "poststrutturalismo", why: "Ne eredita l'idea buona, che ogni pensiero è situato; il sito ne rifiuta l'esito, che la struttura si dissolva nel discorso." },
      { name: "Eco, Umberto", why: "Il maestro da cui l'autore ha imparato a cercare la struttura sotto la superficie." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q179168", "https://it.wikipedia.org/wiki/Strutturalismo"],
    note: "Il metodo che legge un fenomeno come sistema di relazioni: un elemento vale per la posizione che occupa rispetto agli altri, non per ciò che è preso da solo. Nasce dalla linguistica di Saussure e passa, con Jakobson, Lévi-Strauss, Barthes e Greimas, all'antropologia e alla semiotica. In questo sito è l'organon implicito, lo strumento con cui ragiona: cercare la struttura sotto la superficie. Il sito ne ricava una posizione. Del poststrutturalismo resta almeno un'acquisizione buona: ogni pensiero è situato. Ma la struttura viene prima del gesto di collocarsi in un contesto. La lingua è la mappa del pensiero (non coincide, ma lo indica), e studiarla con rigore è un esercizio geografico. In questa famiglia entra anche il Tractatus di Wittgenstein: quello del primo Wittgenstein è un mondo di fatti, e di proposizioni che ne sono l'immagine. Wittgenstein non ne avrebbe forse approvato l'etichetta, ma è noto che l'uomo di suo approvava ben poco. In italiano il riferimento culturale più importante e più dimenticato è l'Enciclopedia Einaudi, un'opera grande in 16 volumi che rinunciò all'ordine alfabetico per un sistema di voci collegate. Il suo sforzo fu di gettare le basi per una nuova metodologia delle scienze umane e non, ma arrivò troppo tardi e fallì miseramente. Non è più disponibile, se non in forma di remainder, ma per poco tempo è stata possibile, e questo conta.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" }
    ]
  },
  {
    name: "poststrutturalismo",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Francia"] },
    related: [
      { name: "Foucault, Michel", why: "Uno dei due nomi con cui il sito identifica la corrente." },
      { name: "Derrida, Jacques", why: "L'altro nome: la decostruzione come metodo." },
      { name: "Ferraris, Maurizio", why: "Ne ha percorso la strada a ritroso fino al nuovo realismo." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q267932", "https://it.wikipedia.org/wiki/Post-strutturalismo"],
    note: "La corrente che, da Foucault e Derrida in poi, legge ogni enunciato di verità come effetto di discorso e quindi di potere. Nel sito ha due facce. Lascia un'acquisizione buona: ogni pensiero è situato. Ma la sua lezione è stata appresa in modo deteriore da leader come Orbán, Trump e Putin, che la usano per negare che la realtà resista agli schemi: non è l'illuminismo che si è rovesciato su se stesso, è la sua critica. Maurizio Ferraris ne ha percorso la strada a ritroso fino al nuovo realismo.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Wittgenstein, Ludwig",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Austria", "Regno Unito"] },
    related: [
      { name: "Eco, Umberto", why: "Eco come «terapista wittgensteiniano del discorso pubblico»." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q9391", "https://it.wikipedia.org/wiki/Ludwig_Wittgenstein"],
    note: "Filosofo austriaco (1889–1951), attivo soprattutto a Cambridge. Nel sito compare per la terapia del linguaggio: Eco come «terapista wittgensteiniano del discorso pubblico», che corregge la domanda prima di rispondere. È anche il ponte fra logica e struttura: il Tractatus (1921) descrive il mondo come totalità dei fatti e la proposizione come immagine di uno stato di cose, una teoria della raffigurazione che si lascia leggere come teoria della mappa.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" }
    ]
  },
  {
    name: "Enciclopedia Einaudi",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Italia"] },
    related: [
      { name: "Eco, Umberto", why: "Vi scrisse alcune voci, fra cui «Segno» e «Metafora», poi confluite in Semiotica e filosofia del linguaggio (1984)." }
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q3725029", "https://it.wikipedia.org/wiki/Enciclopedia_Einaudi"],
    note: "Opera in sedici volumi pubblicata da Einaudi fra il 1977 e il 1984, diretta da Ruggiero Romano. Rompe con l'ordine alfabetico: i primi quattordici volumi raccolgono circa 548 voci-saggio collegate da rimandi; il quindicesimo (1982) ne ricostruisce la sistematica, con 73 articoli di «sistematica locale» e dieci percorsi tematici; il sedicesimo (1984) raccoglie gli indici. È un'enciclopedia pensata come rete di relazioni più che come elenco di definizioni: un'impresa strutturalista nella forma prima ancora che nei contenuti, spesso indicata come anticipazione dell'ipertesto. Non è mai stata aggiornata né portata in digitale. Nel sito è il riferimento strutturale dell'indice dei concetti, che funziona allo stesso modo: voci collegate, non un glossario.",
    citation: "ROMANO, Ruggiero (dir.), <em>Enciclopedia</em>, Torino, Einaudi, 1977-1984, 16 voll.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" }
    ]
  },
  {
    name: "Huang, Jensen",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q305177"],
    geo: { modo: "diretta", paesi: ["Stati Uniti", "Taiwan"] },
    related: [
      { name: "Nvidia", why: "La fonda nel 1993 e la guida da allora: la dottrina sull'AI e la strategia dell'azienda sono lo stesso discorso." },
      { name: "Amodei, Dario", why: "I due poli dello stesso dibattito: per l'uno l'AI è un problema di ingegneria da risolvere in azienda, per l'altro un dilemma di azione collettiva." }
    ],
    note: "Ingegnere e imprenditore americano nato a Taiwan (1963), fondatore e amministratore delegato di Nvidia dal 1993. Nel sito è la figura che tiene insieme i due registri con cui l'archivio legge il boom dell'AI: il meccanismo finanziario — il compute trasformato in classe di attivo, le garanzie ai clienti, i cento miliardi l'anno di investimenti nell'ecosistema — e la dottrina che lo giustifica. La sua posizione ha una struttura riconoscibile: riclassificare l'AI come software ordinario, e quindi come materia già coperta da responsabilità di prodotto e ingegneria della verifica, invece che come tecnologia di specie nuova che richiederebbe istituzioni inedite. Da qui la formula che è la sua eredità più portabile — la sicurezza come espansione di capacità, non come freno, sul modello del rapporto 20/80 fra progettazione e verifica che governa l'industria dei semiconduttori. Va letto sapendo che nessuno ha un interesse economico maggiore a che la corsa non rallenti: il che non falsifica gli argomenti tecnici, ma impone di distinguerli dalle conclusioni istituzionali che ne ricava.",
    articles: [
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Nvidia",
    type: "istituzione",
    sameAs: ["https://www.wikidata.org/wiki/Q182477"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Taiwan / TSMC", why: "Nvidia progetta, TSMC fabbrica: la dipendenza è reciproca e passa per l'isola su cui si esercita la deterrenza." }
    ],
    note: "Azienda americana di semiconduttori fondata nel 1993, oggi la società a maggiore capitalizzazione al mondo. Nel sito non compare come produttore di chip ma come infrastruttura di sistema: la sua architettura è fungibile — la usano tutti i laboratori, per dati, pretraining, post-training, valutazione e inferenza — e questa fungibilità è ciò che le permette di comportarsi da banca centrale dell'ecosistema, garantendo ricavi ai neocloud, entrando nel capitale dei clienti e rendendo il compute un attivo collateralizzabile. Gli impegni d'acquisto verso TSMC, Foxconn e la filiera taiwanese sono la leva con cui ha spostato manifattura negli Stati Uniti. È l'attore in cui la questione industriale, quella geopolitica e quella finanziaria dell'AI diventano lo stesso problema. Su questa struttura poggia l'ipotesi che l'archivio registra alla voce criti-hype, e che non sottoscrive: che il circolo fissi aspettative di ricavo onorabili solo dichiarando i modelli troppo potenti per essere distribuiti liberamente.",
    articles: [
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" },
      { title: "The U.S. Is Betting the Economy on 'Scaling' AI: Where Is the Intelligence When One Needs It?", url: "/curated/2025-12-08-storm-scaling-ai-bolla-inet/", _source: "curated" },
      { title: "The End of the Foundation Model Era: Open-Weight Models, Sovereign AI, and Inference as Infrastructure", url: "/curated/2026-03-09-grogan-pesi-aperti-sovranita-ai/", _source: "curated" },
      { title: "We Surveyed 634 Women Who Work in Tech. They Let Loose", url: "/curated/2026-09-21-upson-donne-tech-sondaggio-wired/", _source: "curated" }
    ]
  },
  {
    name: "criti-hype",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "Huang, Jensen", why: "Huang accusa i laboratori di allarmismo interessato; il criti-hype dice che ha ragione, e che il meccanismo vale anche per chi lo denuncia." },
      { name: "allineamento AI", why: "Il rischio dichiarato è anche un argomento di vendita: chi valuta l'allineamento deve pesare chi trae vantaggio dall'annunciarne il fallimento." },
      { name: "Nvidia", why: "Ipotesi aperta: il circolo finanziario fissa aspettative che i laboratori possono onorare solo a parole, e la pericolosità diventa la moneta." },
      { name: "Anthropic", why: "Il caso limite dell'ipotesi: anche chi dichiara il rischio in buona fede finisce a venderlo, se il mercato compra la pericolosità come capacità." }
    ],
    note: "Termine coniato dallo storico della tecnologia Lee Vinsel (2021) per la critica che si nutre dell'hype e insieme lo alimenta: denunciare una tecnologia come pericolosa richiede prima accreditarla come potente, e l'accreditamento è la parte che resta. Nella formulazione originale il bersaglio erano i critici; nel dibattito sull'AI il meccanismo si è rovesciato, e sono i produttori a trarre vantaggio dal descrivere i propri sistemi come difficili da controllare — un annuncio di rischio che funziona come dimostrazione di capacità. Nel sito è lo strumento che permette di leggere insieme due posizioni apparentemente opposte, l'allarme dei laboratori e la deflazione industriale di Jensen Huang, riconoscendo che entrambe trattano la potenza del sistema come un fatto acquisito e discutono solo su chi debba risponderne. Il corollario metodologico è che una dichiarazione di pericolo non è mai una prova neutrale della sua entità: va pesata sapendo chi la emette e cosa ci guadagna, senza che questo la falsifichi. Su questo innesto l'archivio registra un'ipotesi più forte, senza sottoscriverla perché mancano gli elementi per deciderla: che il criti-hype dei laboratori non sia una scelta di comunicazione ma una necessità imposta dalla struttura finanziaria a monte. Il circolo costruito attorno a Nvidia — partecipazioni nei clienti, garanzie sui ricavi, compute trattato come classe di attivo — fissa aspettative di fatturato che nessun laboratorio è in grado di onorare con i prodotti che ha; dichiarare i modelli troppo potenti e pericolosi per essere distribuiti senza cautele sarebbe allora il modo di vendere al contrario una performance che non si può dimostrare, rinviando la verifica a data da destinarsi. L'esito previsto dall'ipotesi è una perdita di credibilità collettiva quando la verifica arriva, e riguarderebbe anche chi ha dichiarato il rischio in buona fede. Nessuna delle fonti in archivio la formula per intero: Storm si ferma alla catena finanziaria, Klonick e Seymour al meccanismo retorico. Il ponte fra le due metà resta da argomentare. L'ipotesi ha poi una terza faccia, registrata alla voce cattura regolatoria: lo stesso allarme che vende il prodotto rende ragionevole il regime di autorizzazione che tiene fuori chi non può pagarne il costo fisso. Le tre facce non si escludono — vendere potenza, giustificare il capitale investito, alzare la soglia d'ingresso sono lo stesso enunciato letto da tre mercati diversi. Tenerle insieme richiede un'argomentazione che una scheda di archivio non può portare: la sintesi sta nella catena «Il rischio come prodotto», che rilegge dodici schede dell'archivio a partire dal dato sul 3,4% e dichiara come controtesi l'intervista ad Alex Bores. Nel luglio 2026 Kate Klonick ne dà su *Lawfare* la formulazione più compatta che l'archivio abbia incontrato, a proposito dell'incidente fra OpenAI e Hugging Face: «l'istinto dell'azienda è stato comunque quello di descrivere il proprio fallimento di controllo nel registro dello stupore». Chi ha sbagliato un contenimento ha interesse a che l'episodio sia letto come dimostrazione di potenza, perché la potenza si vende e la negligenza si paga.",
    articles: [
      { title: "The U.S. Is Betting the Economy on 'Scaling' AI: Where Is the Intelligence When One Needs It?", url: "/curated/2025-12-08-storm-scaling-ai-bolla-inet/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-criti-hype-hugging-face-lawfare/", _source: "curated" },
      { title: "Intelligenza artificiale e rischio estinzione, che cosa pensano (davvero) gli scienziati?", url: "/curated/2026-09-26-signorelli-rischio-estinzione-scienziati-backdoor/", _source: "curated" },
      { title: "Not Even Wrong 2: An Audit of Public AGI Prediction, 1950–2026", url: "/curated/2026-09-14-floridi-not-even-wrong-2-agi-ssrn/", _source: "curated" },
      { title: "Reason is more than a tool", url: "/curated/2026-10-01-mudd-ragione-piu-di-uno-strumento-aeon/", _source: "curated" },
      { title: "Pacing the Frontier", url: "/curated/2026-07-28-pacing-the-frontier-lettera/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-fuga-e-clamore-lawfare/", _source: "curated" }
    ]
  },
  {
    name: "cattura regolatoria",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q2408462"],
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "criti-hype", why: "Due usi dello stesso allarme: uno vende il prodotto come potente, l'altro rende ragionevole la regola che tiene fuori chi non può pagarla." },
      { name: "sovranità cognitiva", why: "Una regola che scoraggia i pesi aperti produce la dipendenza da fornitori esteri che dichiarava di voler evitare." },
      { name: "vetocrazia", why: "La regola che nessuno riesce a rispettare e la regola che nessuno riesce a fare hanno lo stesso esito: decide chi era già grande." },
      { name: "commoditizzazione", why: "I pesi aperti abbassano le barriere azzerando il prezzo del modello; la soglia di conformità è il modo di rialzarle senza nominarli." }
    ],
    note: "Teoria formulata da George Stigler (1971): la regolazione di un settore tende a essere acquisita dal settore stesso e disegnata a suo vantaggio, perché chi è regolato ha più informazione, più organizzazione e più interesse continuativo di chiunque altro nel processo che lo riguarda. Non richiede corruzione: basta l'asimmetria fra chi siede al tavolo tutti i giorni e chi ci passa una volta. Nel dibattito sull'AI il concetto ha una variante specifica, che è la terza faccia dello stesso fenomeno registrato alla voce criti-hype. Dichiarare i propri sistemi difficili da controllare non serve solo a venderli come potenti: rende ragionevole un regime di autorizzazione preventiva, di soglie di calcolo, di obblighi di valutazione e di responsabilità che hanno un costo fisso per modello. Un costo fisso è una barriera all'ingresso per costruzione, perché pesa in proporzione inversa alla dimensione di chi lo sostiene. Il precedente empirico più vicino è il GDPR, la cui applicazione è associata a una concentrazione di mercato documentata; per l'AI Act la stima disponibile è di 14.600-29.300 euro per sistema, fra il 9% e il 17% del costo totale di sviluppo. Chi resta fuori non è un'astrazione. Sono i modelli a pesi aperti, che non hanno un titolare in grado di rispondere in nome del modello e sono oggi in larga parte di origine cinese; sono le AI verticali costruite in locale da un ospedale, una banca, un archivio, un editore, che non reggono un costo di conformità dimensionato su un laboratorio di frontiera; e sono i progetti di AI nazionale che vorrebbero non dipendere dai grandi fornitori americani. Su quest'ultimo punto l'argomento si rovescia: possedere i pesi è ciò che rende una capacità indipendente dalla politica commerciale di un fornitore, e una regola che scoraggia i pesi aperti produce esattamente la dipendenza che dichiara di voler evitare. È il punto in cui questa voce incontra la sovranità cognitiva. Il concetto va usato come strumento di analisi, non come imputazione: che una regola alzi le barriere non dimostra che sia stata scritta per alzarle, e alcune barriere sono il prezzo legittimo di una tutela. L'argomento è inoltre in una posizione scomoda, perché coincide con l'interesse di chi vende hardware — Jensen Huang difende i modelli aperti cinesi e l'esportazione dei chip con lo stesso ragionamento — e con quello di chi non vuole essere regolato affatto. Resta che l'esito è osservabile a prescindere dall'intenzione: si guarda chi può ancora entrare nel mercato dopo la regola, non chi l'ha proposta.",
    articles: [
      { title: "Why Are Palantir and OpenAI Scared of Alex Bores?", url: "/curated/2026-04-21-bores-palantir-openai-regulation-nyt/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-criti-hype-hugging-face-lawfare/", _source: "curated" },
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" },
      { title: "The End of the Foundation Model Era: Open-Weight Models, Sovereign AI, and Inference as Infrastructure", url: "/curated/2026-03-09-grogan-pesi-aperti-sovranita-ai/", _source: "curated" },
      { title: "The right balance: how to fix European Union artificial intelligence regulation", url: "/curated/2026-06-11-mariniello-ai-act-costi-conformita-bruegel/", _source: "curated" },
      { title: "Why open-weight models are crucial for American AI leadership", url: "/curated/2026-08-10-villasenor-pesi-aperti-leadership-brookings/", _source: "curated" },
      { title: "Open Weights, Closed Ranks: The AI Manifesto War", url: "/curated/2026-08-12-zuniga-pesi-aperti-manifesti-icle/", _source: "curated" }
    ]
  },
  {
    name: "modelli a pesi aperti",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q140928105"],
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "commoditizzazione", why: "Pubblicare i pesi azzera il prezzo del modello e sposta il margine a valle: la commoditizzazione scelta come strategia invece che subita." },
      { name: "sovranità cognitiva", why: "Possedere i pesi è la forma tecnica dell'indipendenza: la capacità non si spegne quando cambia la politica commerciale di un fornitore." }
    ],
    note: "Modelli i cui parametri addestrati sono pubblicati e scaricabili, eseguibili e riaddestrabili da chiunque disponga dell'hardware. Vanno distinti tanto dai modelli chiusi, accessibili solo tramite interfaccia remota, quanto dall'open source in senso proprio, che richiederebbe anche dati e codice di addestramento. Nel sito sono il punto in cui tre questioni separate diventano la stessa. La concorrenza: pochi modelli aperti robusti bastano a disciplinare il prezzo e la condotta di quelli proprietari, e i pesi pubblicati permettono di costruire prodotti senza sostenere il costo iniziale di addestramento, che è la barriera vera del settore. La geopolitica: la leadership sull'aperto è oggi in larga parte cinese — DeepSeek, Qwen, Zhipu — e i controlli americani all'esportazione limitano l'accesso cinese ai chip senza avere alcun equivalente sul lato dei pesi, che è il lato da cui l'influenza si propaga più in fretta. La sovranità: eseguire un modello in locale è la sola forma in cui una capacità cognitiva non dipende dalla politica commerciale di un fornitore, e vale allo stesso modo per uno Stato, per un ospedale e per un archivio. La conseguenza normativa tiene insieme le tre: qualsiasi regola costruita attorno a un titolare che risponda del proprio modello li colpisce per costruzione, perché un peso pubblicato non ha un responsabile a valle.",
    articles: [
      { title: "The End of the Foundation Model Era: Open-Weight Models, Sovereign AI, and Inference as Infrastructure", url: "/curated/2026-03-09-grogan-pesi-aperti-sovranita-ai/", _source: "curated" },
      { title: "Who's Afraid of Chinese Models?", url: "/curated/2026-07-20-stratechery-chinese-models/", _source: "curated" },
      { title: "Why open-weight models are crucial for American AI leadership", url: "/curated/2026-08-10-villasenor-pesi-aperti-leadership-brookings/", _source: "curated" },
      { title: "Open Weights, Closed Ranks: The AI Manifesto War", url: "/curated/2026-08-12-zuniga-pesi-aperti-manifesti-icle/", _source: "curated" },
      { title: "Jensen Huang Thinks A.I. Alarmism Has Gone Too Far", url: "/curated/2026-09-23-klein-huang-alarmismo-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "ambasciata dei dati",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q104856868"],
    geo: { modo: "diretta", paesi: ["Estonia", "Lussemburgo"] },
    related: [
      { name: "sovranità cognitiva", why: "La risposta giuridica allo stesso problema: quando l'infrastruttura non può stare in casa, si sposta il confine invece del dato." },
      { name: "modelli a pesi aperti", why: "Due modi di non dipendere: l'enclave protegge un archivio fermo, i pesi una capacità — che però, per funzionare, ha bisogno di calcolo." }
    ],
    note: "Enclave giuridica in cui uno Stato ospita infrastruttura digitale critica su territorio straniero conservandone la piena sovranità. Non è un backup all'estero, che sarebbe una copia sotto giurisdizione altrui, né una regola di residenza dei dati, che si limita a imporre dove stiano: l'archivio gode di immunità e inviolabilità analoghe a quelle di una sede diplomatica, e nessuno — nemmeno l'autorità ospitante — vi accede senza autorizzazione formale. La cifratura end-to-end con chiavi controllate dal solo paese d'origine rende l'inviolabilità opponibile anche a chi la invoca sotto costrizione. Il primo caso è estone, 2017, in Lussemburgo: catasto, anagrafe, registro delle imprese, previdenza. Nel sito è la risposta giuridica al problema che altrove viene affrontato per via tecnica — la dipendenza da un'infrastruttura che non si controlla — e i suoi due limiti sono la parte utile. Il primo è di diritto internazionale: non esiste un quadro che riconosca formalmente queste enclavi, quindi l'immunità resta un'obbligazione bilaterale fra due Stati e regge finché regge il rapporto fra i due, che è la variabile da cui ci si voleva rendere indipendenti. Il secondo è di oggetto: il dispositivo mette al sicuro archivi fermi, non capacità di calcolo, e non si estende all'inferenza.",
    articles: [
      { title: "Che cosa sono le ambasciate dei dati", url: "/curated/2026-09-27-crescenzi-ambasciate-dati-guerredirete/", _source: "curated" }
    ]
  },
  {
    name: "Estonia",
    type: "paese",
    sameAs: ["https://www.wikidata.org/wiki/Q191"],
    geo: { modo: "diretta", paesi: ["Estonia"] },
    related: [
      { name: "controllo riflessivo", why: "Gli attacchi del 2007 sono l'origine dell'ambasciata dei dati: la dottrina russa ha prodotto la contromisura che non prevedeva." }
    ],
    note: "Repubblica baltica, membro dell'Unione europea e della NATO. Nel sito è presente per una sequenza causale che la riguarda per intero. Nel 2007 è il primo Stato bersaglio di un attacco informatico su scala nazionale, con DDoS massicci attribuiti ad ambienti russi, e figura fra i paesi del vicinato russo che l'archivio tratta come laboratorio del controllo riflessivo. Dieci anni dopo è il primo paese al mondo ad aprire un'ambasciata dei dati, in Lussemburgo, mettendo al riparo catasto, anagrafe, registro delle imprese e previdenza: la dottrina che l'aveva presa di mira ha prodotto per reazione la contromisura che non prevedeva. Taavi Kotka, CIO del paese dal 2013 al 2017, la descriveva come questione di sopravvivenza, non come misura di continuità operativa.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "Che cosa sono le ambasciate dei dati", url: "/curated/2026-09-27-crescenzi-ambasciate-dati-guerredirete/", _source: "curated" }
    ]
  },
  {
    name: "legge di Goodhart",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q2575082"],
    geo: { modo: "teorico", paesi: ["Regno Unito"] },
    related: [
      { name: "capitale semantico", why: "Quando l'indicatore diventa l'obiettivo si ottimizza l'output e si salta il processo: il capitale semantico è ciò che il salto non costruisce." },
      { name: "monitorabilità", why: "Un modello che sa di essere osservato ottimizza la misura invece del comportamento: Goodhart applicato a un sistema che se ne può accorgere." },
      { name: "università", why: "Il ranking unico è il caso in cui la misura ha riscritto l'istituzione che avrebbe dovuto descrivere." },
      { name: "segregazione scolastica", why: "Il rovescio della legge, New York 2015-2026: non la misura corrotta perché diventata obiettivo, ma la misura abbandonata e nessuno che se ne accorga." }
    ],
    note: "Formulata da Charles Goodhart (1975) a proposito degli aggregati monetari e resa nella forma oggi corrente da Marilyn Strathern (1997): quando una misura diventa un obiettivo, cessa di essere una buona misura. Il meccanismo non richiede malafede — basta che qualcuno sia valutato su un indicatore perché cominci a ottimizzare l'indicatore invece della cosa che l'indicatore doveva rappresentare, e da quel momento i due si separano. Nel sito non è una curiosità di teoria della misurazione ma lo schema ricorrente che l'archivio ha isolato in domini diversi prima di dargli un nome: i voti dei compiti che salgono mentre gli esami peggiorano, e smettono quindi di predirli; gli incidenti segnalati che scendono senza che si sappia nulla degli incidenti; la valutazione differenziata degli atenei cinesi che rischia di produrre una nuova gerarchia proprio perché è agganciata al finanziamento. La variante che interessa di più è quella in cui il misurato può accorgersi di essere misurato: lì l'ottimizzazione dell'indicatore diventa strategica e il divario fra segnale e sostanza smette di essere un effetto collaterale. Il corollario pratico è che un sistema di valutazione va giudicato non dalla bontà degli indicatori ma dal legame fra chi misura e chi paga: dove quel legame è assente o distribuito fra più mani, la legge morde meno.",
    articles: [
      { title: "以贡献为导向深化高校分类评价改革", url: "/curated/2026-03-24-xia-valutazione-differenziata-universita-cina/", _source: "curated" },
      { title: "Does AI stop children from learning?", url: "/curated/2026-08-18-economist-ai-learning-penalty-children/", _source: "curated" },
      { title: "La Chine et les États-Unis peuvent-ils s'accorder sur la sécurité de l'IA ?", url: "/curated/2026-09-25-grandcontinent-sicurezza-ai-cina-stati-uniti/", _source: "curated" },
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" },
      { title: "Reason is more than a tool", url: "/curated/2026-10-01-mudd-ragione-piu-di-uno-strumento-aeon/", _source: "curated" },
      { title: "The Hugging Face incident and the road ahead", url: "/curated/2026-08-26-openai-incidente-hugging-face-resoconto/", _source: "curated" },
      { title: "Why AI Detection Fails for Academic Integrity", url: "/curated/2026-08-06-karr-perche-la-rilevazione-fallisce-arxiv/", _source: "curated" },
      { title: "Quando i tassi li decide qualcun altro", url: "/curated/2026-10-01-draghi-tassi-li-decide-qualcun-altro-grandcontinent/", _source: "curated" }
    ]
  },
  {
    name: "segnale costoso",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q249240"],
    geo: { modo: "teorico", paesi: ["Stati Uniti", "Israele"] },
    related: [
      { name: "capitale semantico", why: "Il costo della scrittura era anche il modo in cui il capitale semantico si accumulava: chi lo aggira ottiene il testo e non l'accumulo." },
      { name: "legge di Goodhart", why: "Un segnale il cui costo crolla diventa un bersaglio raggiungibile da chiunque: è il momento in cui la misura smette di misurare." },
      { name: "scrittura", why: "La fatica di scrivere è in larga parte la fatica di pensare: il costo non era un attrito da eliminare, era il processo." }
    ],
    note: "Nella teoria dei segnali — Michael Spence (1973) per i mercati, Amotz Zahavi (1975) per la biologia, con il principio dell'handicap — un segnale è credibile quando produrlo costa, e costa di più a chi mente che a chi dice il vero: il costo non certifica il contenuto, certifica che qualcuno ha ritenuto valesse la pena sostenerlo. Nel sito è il concetto che spiega che cosa si rompe quando l'AI entra nella scrittura. Un testo umano richiede più tempo a scriversi che a leggersi, e quell'asimmetria era una garanzia di sforzo — non di qualità, il mondo è pieno di prosa pessima, ma di intenzione. Azzerato il costo di produzione, il segnale smette di discriminare, e la fiducia che vi si appoggiava deve trovare un'altra base: è la ragione per cui la dichiarazione esplicita dell'intervento non è un vezzo di trasparenza ma il sostituto funzionale di un costo che non c'è più. Il corollario vale oltre la scrittura: ogni volta che una tecnologia abbatte il costo di emettere un segnale, le istituzioni che su quel segnale poggiavano vanno ricostruite, non difese. C'è poi la conseguenza dal lato di chi riceve, che Louis Menand formula nel settembre 2026 e che è più scomoda della prima: quando il segnale non è più leggibile, il sospetto diventa il default. Il timore corrente è l'inganno — scambiare la poesia di una macchina per quella di una persona — ma è un rischio simmetrico e occasionale; il sospetto è sistematico e cade per primo su chi non ha barato, perché un testo umano non possiede alcun modo interno di dimostrare di esserlo. Ne segue che dichiarare l'intervento non è una confessione ma una difesa, e che il costo dell'azzeramento lo paga chi quel costo l'aveva sostenuto. E non si distribuisce in modo uniforme: un sondaggio WIRED del settembre 2026 fra 634 donne che lavorano nel tech raccoglie l'osservazione che lo stesso lavoro sciatto fatto con l'AI riceve lodi se lo presenta un uomo e costerebbe il posto a una collega. L'accusa di slop è comoda perché si traveste da critica tecnica, non richiede argomentazione e non è confutabile, e un pregiudizio preesistente vi trova un vocabolario nuovo e molto più negabile. Il settembre 2026 aggiunge la forma più pura della famiglia, e viene dai video *explainer*: il creator che sostanzia un'affermazione mostrando lo screenshot di un chatbot esibisce l'apparenza della fonte senza la fonte. Il gesto costa pochi secondi, somiglia in tutto a una citazione, e chi guarda non può risalire né all'articolo né alla ricerca da cui il modello sta attingendo. Quel che resta è il segnale di avere verificato, al prezzo di non verificare.",
    articles: [
      { title: "AI-written speeches are taking over politics", url: "/curated/2026-09-23-economist-discorsi-scritti-ai-politica/", _source: "curated" },
      { title: "Don't let AI kill the author", url: "/curated/2026-09-24-economist-dont-let-ai-kill-the-author/", _source: "curated" },
      { title: "The Curious Power of Punctuation", url: "/curated/2026-09-28-menand-punteggiatura-autore-newyorker/", _source: "curated" },
      { title: "Not Even Wrong 1: AI and the Labour Market, From Frey–Osborne to ChatGPT, 2012–2026", url: "/curated/2026-06-10-floridi-not-even-wrong-1-lavoro-ssrn/", _source: "curated" },
      { title: "We Surveyed 634 Women Who Work in Tech. They Let Loose", url: "/curated/2026-09-21-upson-donne-tech-sondaggio-wired/", _source: "curated" },
      { title: "Why Most Published Research Findings Are False", url: "/curated/2005-08-30-ioannidis-most-published-findings-false-plosmed/", _source: "curated" },
      { title: "We're living through an explainer epidemic", url: "/curated/2026-09-10-pitcher-epidemia-explainer-dazed/", _source: "curated" },
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-fuga-e-clamore-lawfare/", _source: "curated" },
      { title: "« J'éprouve une compassion profonde pour Thélyson Orélien »", url: "/curated/2026-09-24-mbougar-sarr-compassione-profonda-nouvelobs/", _source: "curated" },
      { title: "Plagiat, IA : le prix Goncourt exclut le roman de Thélyson Orélien", url: "/curated/2026-09-25-goncourt-esclusione-orelien-actualitte/", _source: "curated" },
      { title: "L'alleanza valutata a prezzi di mercato", url: "/curated/2026-07-23-douthat-colby-alleanza-valutata-a-prezzi-di-mercato-nyt/", _source: "curated" }
    ]
  },
  {
    name: "morte dell'autore",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Francia"] },
    related: [
      { name: "segnale costoso", why: "Barthes toglieva l'autore come garante del senso; l'AI lo toglie come produttore del testo, e solo la seconda azzera il costo del segnale." },
      { name: "canone", why: "Un canone è un elenco di autori: se l'autore non garantisce più il senso, cade anche il criterio con cui si sceglie chi entra." },
      { name: "poststrutturalismo", why: "Il saggio del 1967 è il punto in cui la teoria del segno diventa una pratica della lettura." }
    ],
    note: "Tesi di Roland Barthes (1967) per cui l'unità di un testo non sta nella sua origine ma nella sua destinazione: attribuirne il senso all'intenzione dell'autore è una scorciatoia critica, e la figura dell'autore come garante del significato è storica e recente, non necessaria. Nel sito la voce esiste per una ragione che Barthes non poteva prevedere: la tesi viene oggi invocata, di solito da chi non l'ha letta, come se autorizzasse l'indifferenza verso chi ha materialmente prodotto un testo. La distinzione che tiene in piedi tutto il resto è questa — Barthes toglieva l'autore come garante del senso, lasciando intatto il fatto che qualcuno avesse scritto; la scrittura artificiale toglie l'autore come produttore del testo, lasciando intatta la pretesa che quel testo significhi qualcosa per qualcuno. Sono due operazioni diverse che condividono uno slogan, e confonderle è l'errore più frequente del dibattito corrente. Il controcanto empirico è che i lettori non hanno mai accettato la prima: continuano a voler sapere che a scrivere sia stata una persona, e la comprensione di una poesia poggia sulla promessa che sia significata a qualcuno.",
    articles: [
      { title: "Don't let AI kill the author", url: "/curated/2026-09-24-economist-dont-let-ai-kill-the-author/", _source: "curated" },
      { title: "The Curious Power of Punctuation", url: "/curated/2026-09-28-menand-punteggiatura-autore-newyorker/", _source: "curated" },
      { title: "We're living through an explainer epidemic", url: "/curated/2026-09-10-pitcher-epidemia-explainer-dazed/", _source: "curated" },
      { title: "Japanese author Rie Kudan wins prestigious Akutagawa Prize for novel partly written by ChatGPT", url: "/curated/2024-01-17-kudan-akutagawa-cinque-per-cento-cnn/", _source: "curated" },
      { title: "Il triste dibattito sullo scrivere con l'IA", url: "/curated/2026-10-02-piacenza-triste-dibattito-scrivere-ia/", _source: "curated" }
    ]
  },
  {
    name: "splinternet",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q7578586"],
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "sovranità cognitiva", why: "La sovranità cognitiva è la posta; lo splinternet è il modo in cui si gioca — cavi, protocolli, controlli all'esportazione." },
      { name: "dual use", why: "Una rete riconosciuta come bene a doppio uso smette di essere infrastruttura neutra e diventa insieme bersaglio e leva." },
      { name: "ambasciata dei dati", why: "Se la rete si frammenta per blocchi, l'enclave giuridica è il modo di tenere un archivio fuori dal proprio blocco senza perderne il controllo." }
    ],
    note: "Termine attribuito a Clyde Wayne Crews (2001) per la rottura della rete unica in reti separate per giurisdizione. Va usato con cautela, perché mette sotto un'unica etichetta fenomeni di natura diversa, e la distinzione utile è quella di Nocetti in tre tipi: tecnica, cioè incompatibilità fra protocolli; geopolitica, cioè controllo statale, blocchi ed esclusioni; commerciale, cioè concentrazione in piattaforme proprietarie. La posizione scettica ha un nome preciso, Milton Mueller (Will the Internet Fragment?, 2017), secondo cui la rete non si sta spezzando in senso tecnico e il termine confonde l'allineamento della rete alle sovranità con la sua rottura. Nel sito il concetto serve come controparte materiale della sovranità cognitiva: se quella è la posta — chi controlla le condizioni di produzione della conoscenza — questo è il modo in cui la posta si gioca, con cavi, protocolli, controlli all'esportazione e convenzioni concorrenti. L'evoluzione da registrare è quella indicata da Mailyn Fidler: la frammentazione ha smesso di essere solo rivolta all'interno, per allineare la propria rete alla propria sovranità, ed è diventata uno strumento di proiezione verso l'esterno — dai controlli all'esportazione al taglio dei cavi — passando dal protezionismo a qualcosa che somiglia all'aggressione. Il corollario meno ovvio è che la frammentazione giuridica è la risorsa di chi non ha infrastruttura: gli Stati con pochi cavi contestano l'ordine firmando convenzioni alternative, che è l'unica forma di sovranità disponibile a chi non possiede la rete.",
    articles: [
      { title: "A Splintered Internet? Internet Fragmentation and the Strategies of China, Russia, India and the European Union", url: "/curated/2024-02-01-nocetti-splintered-internet-ifri/", _source: "curated" },
      { title: "Internet Fragmentation's Outward Turn", url: "/curated/2025-06-01-fidler-splinternet-outward-turn-sciencespo/", _source: "curated" },
      { title: "The Great Russian Firewall: the Kremlin's ultimate crackdown on internet freedom", url: "/curated/2025-12-19-osw-great-russian-firewall/", _source: "curated" },
      { title: "Internet Governance in 2026: Sovereignty, Security, and the Limits of Multistakeholderism", url: "/curated/2026-01-04-kulesza-internet-governance-2026-circleid/", _source: "curated" }
    ]
  },
  {
    name: "idea di Occidente",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Francia", "Regno Unito"] },
    related: [
      { name: "Comte, Auguste", why: "Ne è l'inventore: la République occidentale degli anni Quaranta dell'Ottocento è la prima formulazione del termine come progetto politico." },
      { name: "Russia", why: "L'Occidente si definisce per sottrazione: la Crimea è la scomunica della Russia, e la formula regge fino al «West politico» di Lavrov." },
      { name: "Dostoevskij, Fëdor", why: "L'antioccidentalismo nasce dentro le società occidentalizzate, non fuori: la Crimea lo radicalizza e ne fa il Cristo umiliato delle nazioni." },
      { name: "Karp, Alexander", why: "La civiltà evocata per disciplinare una classe imprenditoriale poco nazionalista: Meaney legge così il manifesto di Karp." },
      { name: "splinternet", why: "La rottura della rete per giurisdizione è l'erede tecnica di una separazione che la Crimea aveva già compiuto in politica." }
    ],
    note: "L'Occidente come manufatto politico datato, non come dato geografico. Georgios Varouxakis (*The West: The History of an Idea*, Princeton 2025) ne fissa la nascita negli anni Quaranta dell'Ottocento a Parigi, nella *République occidentale* di Auguste Comte: una parola inventata per risolvere un problema di perimetro, tenere dentro la Gran Bretagna e i coloni europei delle Americhe e tagliare via l'Europa orientale, che «Europa» e «cristianità» non riuscivano a separare. I positivisti inglesi la traducono e la affilano contro la Russia — Richard Congreve, 1866: «L'eliminazione della Russia dal sistema è la prima grande rettifica» — e la guerra di Crimea ne è la scomunica. Nel sito il concetto serve a due cose. La prima è ricordare che il termine è sempre stato anche una graduatoria e non solo una geografia: nel 1853 Francis Lieber cerca un aggettivo per «l'intera porzione caucasica occidentale dell'umanità» e propone *Cis-Caucasian*, con il taglio che passa dentro l'Europa ed esclude slavi e «bianchi retrogradi» del sud e dell'est. La seconda è la categoria che Thomas Meaney ne ricava, ed è la parte esportabile: l'Occidente ha battuto i termini concorrenti perché elide la contraddizione — storicamente e geograficamente circoscritto e insieme eterno e universale, perimetro quando conviene difendersi e orizzonte quando conviene espandersi. Nella stessa forma funzionano il *tianxia* cinese e il civilizzazionismo russo, ed è per questo che il concetto va tenuto comparativo e non identitario.",
    articles: [
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "Comte, Auguste",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q12718"],
    geo: { modo: "diretta", paesi: ["Francia"] },
    note: "Filosofo francese (1798–1857), fondatore del positivismo e della sociologia. Nel sito è l'inventore dell'Occidente: la *République occidentale* progettata negli anni Quaranta dell'Ottocento è la prima formulazione del termine come progetto politico, e la legge dei tre stadi — teologico, metafisico, positivo — è l'impianto che fa dell'Occidente un'avanguardia dell'umanità e non una regione. Ciò che complica il ritratto è che l'inventore dell'Occidente non era un imperialista: chiese il ritiro francese dall'Algeria e quello britannico da India, Gibilterra e Caraibi, e volle i paesi della sua repubblica spezzati in polities grandi come la Toscana. Scrisse allo zar Nicola che la Russia, proprio per la sua arretratezza, poteva saltare lo stadio parlamentare ed entrare direttamente nei ranghi finiti dell'Umanità — una generosità che i suoi discepoli inglesi rovesciarono in esclusione. Si usa come origine documentata del concetto, non come autorità sul contenuto: la scala di progresso che sostiene tutto l'impianto è precisamente ciò che il sito considera da smontare.",
    articles: [
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "Meaney, Thomas",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    note: "Direttore di *Granta*, collaboratore regolare della *London Review of Books*, ha scritto per il *New Yorker* e *Harper's*; premio Robert B. Silvers per il giornalismo nel 2022. Nel sito entra con la recensione al libro di Varouxakis sull'idea di Occidente, ed è utile per il registro più che per la singola tesi: la recensione-saggio lunga, che usa il libro come occasione per un argomento proprio e lo eccede nella chiusa. La tesi che vale la pena portarsi via è sua e non del libro recensito: l'Occidente dura perché elide la contraddizione. Si usa come lettore forte di libri altrui, cioè come fonte di categorie, non come fonte di fatti.",
    articles: [
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "Huntington, Samuel",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q19074"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "idea di Occidente", why: "Chiede all'Occidente di accettare i propri limiti civilizzazionali: la versione restrittiva del termine, oggi maggioritaria a destra." },
      { name: "Fukuyama, Francis", why: "Stessa domanda sull'ordine post-guerra fredda, risposte opposte: universalismo liberale contro limiti di civiltà." }
    ],
    note: "Politologo americano (1927–2008), autore di *The Clash of Civilizations and the Remaking of World Order* (1996). Nel sito è la controparte restrittiva di Fukuyama: alla fine della guerra fredda rispondono entrambi alla domanda sull'ordine successivo, e le risposte sono opposte — universalismo liberale contro limiti di civiltà. La posizione che conta qui è la richiesta che l'Occidente rinunci alle proprie pretese universali e si accetti come una civiltà fra le altre: impopolare nell'America degli anni Novanta, oggi maggioritaria a destra su entrambe le sponde. La stessa logica gli fece chiedere l'espulsione della Grecia dalla Nato, non abbastanza occidentale, il che mostra dove porta la mappa a civiltà quando la si prende alla lettera. Si usa come posizione da discutere, non come descrizione del mondo: il modello è grossolano, ma è il modello che il discorso politico corrente ha effettivamente adottato.",
    articles: [
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "gharbzadegi",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q3104781"],
    geo: { modo: "teorico", paesi: ["Iran"] },
    related: [
      { name: "idea di Occidente", why: "È la reazione speculare: il termine occidentale classifica, l'occidentossicazione diagnostica il contagio di chi è stato classificato." },
      { name: "Iran 1978–79", why: "Il termine entrò nel lessico della rivoluzione, ed è l'anello fra critica culturale ed esito politico." }
    ],
    note: "«Occidentossicazione»: termine reso celebre da Jalal Al-e-Ahmad nel saggio omonimo (1962) per l'infatuazione dell'Iran verso l'Occidente, descritta come una malattia che intacca la cultura ospite dall'interno. Nel sito è il caso più nitido di un fenomeno generale: l'antioccidentalismo non nasce fuori dall'Occidente ma dentro le società appena occidentalizzate, e la stessa reazione si ripete a distanza in Dostoevskij dopo la Crimea, in Lu Xun in Cina, in Mishima in Giappone, in Oğuz Atay in Turchia. Il termine passò nel lessico della rivoluzione del 1979, il che è anche il suo avvertimento: una diagnosi culturale che descrive l'influenza straniera come contagio ha uno sbocco politico prevedibile.",
    articles: [
      { title: "Ranks of Humanity", url: "/curated/2026-09-24-meaney-varouxakis-idea-occidente-lrb/", _source: "curated" }
    ]
  },
  {
    name: "divario di efficienza dei dati",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "povertà dello stimolo", why: "Chomsky diceva che la statistica non basta; i modelli mostrano che basta, al prezzo di centomila volte i dati di un bambino." },
      { name: "capitale semantico", why: "Se la forma più economica di apprendimento umano resta inspiegata, l'idea che il capitale semantico si possa saltare perde la sua base." },
      { name: "sovranità cognitiva", why: "Il prezzo d'ingresso in token decide chi può addestrare un modello nella propria lingua e chi userà quello altrui." },
      { name: "embodied mind", why: "SAYCam e i mille giorni di Hasson spostano la domanda dal testo al corpo: imparare dagli occhi e dalle orecchie, non dal corpus." }
    ],
    note: "Il divario fra i dati necessari a un bambino e quelli necessari a un modello linguistico per arrivare alla padronanza di una lingua: circa cinque ordini di grandezza. Un bambino produce frasi grammaticali dopo una decina di milioni di parole udite e ne ha sentite cento milioni da preadolescente; Llama 3.1 ne ha viste quindici trilioni, e i modelli di frontiera forse dieci volte tanto. Nel sito il concetto tiene insieme tre piani che di solito si discutono separati. Il primo è cognitivo: nessuno sa spiegare perché il bambino ce la faccia, e le due risposte migliori — Alison Gopnik, i bambini scelgono attivamente i propri dati; Elizabeth Bonawitz, ragionano sull'insegnante e non solo sull'evidenza — non sono proprietà che si ottengano aggiungendo token. Il secondo è industriale: il pozzo dei dati facilmente disponibili potrebbe esaurirsi già negli anni Trenta, e l'efficienza diventa un vincolo prima che una virtù. Il terzo è politico, ed è quello che il sito considera decisivo: finché il prezzo d'ingresso è di trilioni di token, una lingua che ne ha qualche decina di milioni — il sami, cioè la scala dell'esposizione di un bambino di due anni — non può avere un modello proprio. Il divario non è una curiosità cognitiva: è il fattore che decide chi ha diritto a un modello nella propria lingua.",
    articles: [
      { title: "Kids outlearn AI—and we still don't know why", url: "/curated/2026-08-24-cutts-divario-efficienza-dati-mit-techreview/", _source: "curated" }
    ]
  },
  {
    name: "povertà dello stimolo",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q1780470"],
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    note: "L'argomento con cui Noam Chomsky, negli anni Cinquanta, risponde al comportamentismo di Skinner: la sintassi è troppo complessa e l'esposizione linguistica del bambino troppo povera perché la grammatica possa essere appresa dalla sola statistica, quindi una parte della conoscenza dev'essere innata. Su questa premessa si costruiscono la grammatica generativa e, di rimbalzo, decenni di AI simbolica che prova a scrivere le regole a mano e fallisce, fino all'inverno dell'AI degli anni Settanta. Nel sito la voce serve per il rovesciamento, che è più interessante dell'argomento: i modelli linguistici hanno imparato la sintassi esattamente nel modo dichiarato impossibile, e Alison Gopnik lo ha ammesso pubblicamente. Ma l'hanno fatto a un costo che nessun bambino paga, e quel costo è la misura di quanto lo stimolo fosse davvero povero. L'argomento è stato aggirato empiricamente e confermato di sbieco nello stesso movimento.",
    articles: [
      { title: "Kids outlearn AI—and we still don't know why", url: "/curated/2026-08-24-cutts-divario-efficienza-dati-mit-techreview/", _source: "curated" }
    ]
  },
  {
    name: "Chomsky, Noam",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q9049"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    note: "Linguista e filosofo americano (1928), fondatore della grammatica generativa. Nel sito entra per la povertà dello stimolo, l'argomento con cui negli anni Cinquanta risponde a Skinner e che ha strutturato mezzo secolo di linguistica e, di riflesso, l'AI simbolica. La sua posizione sui modelli linguistici è di rifiuto netto — macchine che, per lui, non spiegano nulla del linguaggio umano — e il sito non la adotta né la liquida: la tratta come la formulazione più rigorosa disponibile di una domanda che i modelli hanno aggirato senza risolvere. Si usa come autorità sulla domanda, non sulla risposta.",
    articles: [
      { title: "Kids outlearn AI—and we still don't know why", url: "/curated/2026-08-24-cutts-divario-efficienza-dati-mit-techreview/", _source: "curated" }
    ]
  },
  {
    name: "Gopnik, Alison",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q2647225"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "divario di efficienza dei dati", why: "L'ingrediente mancante non è la scala: i bambini scelgono i propri dati e cercano l'effetto sul mondo." },
      { name: "delega epistemica", why: "Bonawitz: i bambini ragionano sull'insegnante e sul perché stia dicendo quella cosa. Fiducia epistemica prima del linguaggio." }
    ],
    note: "Psicologa dello sviluppo all'Università della California, Berkeley (1955). Nel sito vale per due cose. La prima è rara e va registrata: ha ammesso pubblicamente di essersi sbagliata sulla possibilità che un sistema puramente statistico imparasse la sintassi. La seconda è la sua tesi sull'ingrediente mancante — i bambini non guardano il mondo passare, esplorano attivamente, cioè scelgono i propri dati, e cercano l'empowerment, la capacità di produrre un effetto prevedibile sul mondo. Ne segue la sua previsione sull'industria: non saranno i laboratori di frontiera a imitare i bambini, ma la generazione di AI che verrà dopo il transformer. Si usa come fonte sulla struttura dell'apprendimento infantile, terreno in cui è autorità di prima mano, e non come voce sull'architettura dei modelli.",
    articles: [
      { title: "Kids outlearn AI—and we still don't know why", url: "/curated/2026-08-24-cutts-divario-efficienza-dati-mit-techreview/", _source: "curated" }
    ]
  },
  {
    name: "BabyLM",
    type: "istituzione",
    sameAs: ["https://www.wikidata.org/wiki/Q141203819"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    note: "Competizione annuale fondata nel 2022 da Alex Warstadt e Leshem Choshen: addestrare modelli linguistici su un corpus «plausibile dal punto di vista dello sviluppo» — cento milioni di parole, dieci milioni nel binario neonatale — tratto da libri illustrati, dialoghi, sottotitoli, Simple English Wikipedia e trascrizioni di parlato rivolto ai bambini, e valutarli con i test che gli psicolinguisti usano sugli esseri umani. Nel sito è il caso di un programma di ricerca che vale soprattutto per ciò che ha smontato: il curriculum learning, partire dal semplice e salire, non ha funzionato come ci si aspettava; i modelli che imparano interagendo con altri modelli non hanno battuto gli standard; e il campione 2024, GPT-BERT, non è ispirato ai neonati affatto. Il risultato più citato — cento milioni di parole che superano Llama 2 70B su un benchmark — va tenuto insieme al suo limite, cioè che molti modelli-bambino non sanno produrre testo. La geografia è quella prevalente degli organizzatori e non l'unica: partecipano gruppi europei, e uno degli architetti di GPT-BERT lavora a Oslo.",
    articles: [
      { title: "Kids outlearn AI—and we still don't know why", url: "/curated/2026-08-24-cutts-divario-efficienza-dati-mit-techreview/", _source: "curated" }
    ]
  },
  {
    name: "segregazione scolastica",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q17031188"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Brown v. Board of Education", why: "Sentenza del 1954: vinse in tribunale e non fu applicata. Alla McDonogh 19 di New Orleans, nel 1960, l'integrazione non durò fino alle tre del pomeriggio." },
      { name: "capitale semantico", why: "A New York, fra il 2015 e il 2024, lacune accumulate a monte — divisioni, frazioni — e A in algebra senza algebra: a valle nessun recupero è indolore." },
      { name: "delega epistemica", why: "Brooklyn, 2019: compiti mai corretti, e la bambina si crede brava perché l'unico segnale disponibile glielo dice. Valutare è un atto delegato." },
      { name: "disuguaglianze", why: "EdBuild, 2019: negli Stati Uniti 23 miliardi l'anno in meno ai distretti a maggioranza non bianca. Lo svantaggio è della scuola prima che dello studente." },
      { name: "istituzioni inclusive vs. estrattive", why: "La school choice di New York alloca per merito dichiarato e per capacità di pagare il tutoraggio: filtro estrattivo con nome inclusivo." }
    ],
    note: "La segregazione scolastica americana, nella forma che ha assunto dopo la fine della segregazione legale: non più per legge ma per combinazione di segregazione abitativa e di selezione accademica in ingresso, quella che a New York si chiama *school choice* e comincia già alla scuola dell'infanzia. I numeri da tenere: negli Stati Uniti, secondo l'analisi EdBuild del 2019, le scuole dei distretti a maggioranza non bianca ricevono ventitré miliardi di dollari l'anno in meno delle controparti a maggioranza bianca; a New York, nel 2026, studenti neri e latini sono il dieci per cento di chi supera l'esame d'ingresso alle *specialized high school* pur essendo la maggioranza degli iscritti alla scuola pubblica cittadina. Nel sito la voce non serve come tema politico americano ma per il meccanismo che la reportage di Nikole Hannah-Jones documenta dal di dentro fra il 2015 e il 2026: un'aspettativa su una popolazione diventa pratica di misurazione, e la misurazione fabbrica la prova dell'aspettativa. Le verifiche di lettura che l'insegnante non somministra perché l'esito è dato per scontato, i compiti restituiti senza correzione, la valutazione in curva che produce A in algebra senza algebra. È il rovescio della legge di Goodhart: lì la misura si corrompe perché diventa obiettivo, qui si corrompe perché viene abbandonata, e la differenza pratica è che nessuno se ne accorge — chi è misurato meno di tutti.",
    articles: [
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Hannah-Jones, Nikole",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q21063790"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "segregazione scolastica", why: "Con l'articolo del 2016 ha riaperto il dossier nel discorso pubblico americano; con quello del 2026 ne ha dichiarato il prezzo privato." }
    ],
    note: "Giornalista americana (1976), corrispondente del *New York Times Magazine* su ingiustizia razziale e diritti civili, curatrice del 1619 Project (2019) e premio Pulitzer per il commento nello stesso anno. Nel sito entra con i due articoli che fanno coppia a dieci anni di distanza: nel 2016 *Choosing a School for My Daughter in a Segregated City*, che riportò la segregazione scolastica nel discorso pubblico americano, e nel settembre 2026 il consuntivo in cui dichiara il costo che quella scelta ha avuto per la figlia. Va registrato anche l'episodio che il sito archivia a parte: nell'estate del 2019 il *New York Times* sottopose a Leslie M. Harris, storica della schiavitù, l'affermazione centrale del saggio d'apertura — che una ragione critica dell'indipendenza americana fosse proteggere la schiavitù — e Harris la contestò in modo documentato; il giornale la pubblicò lo stesso. La decisione fu della redazione e non sua, ma l'affermazione era nel suo testo, e Hannah-Jones ha poi riconosciuto di aver sovraesteso l'argomento, annunciando di volerlo emendare nella versione in volume. Resta che sulla centralità della schiavitù nella storia americana la sua posizione coincide con quella di Jill Lepore e della stessa Harris, e la divergenza riguarda un punto di causalità, non l'impianto. Il criterio d'uso è quello, reso più preciso: fonte di prima mano sui fatti che ha osservato come reporter e vissuto come madre — e su quel piano il resoconto è verificabile e documentato —, da leggere con una verifica in più quando ricostruisce cause storiche. Il caso è in archivio, non in nota a margine: la cautela sta dove sta la stima.",
    articles: [
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" },
      { title: "I Helped Fact-Check the 1619 Project. The Times Ignored Me.", url: "/curated/2020-03-06-harris-1619-project-fact-check-politico/", _source: "curated" },
      { title: "Hulu's Fascinating and Incomplete \"1619 Project\"", url: "/curated/2023-02-28-taylor-1619-project-hulu-newyorker/", _source: "curated" },
      { title: "What Was the American Revolution For?", url: "/curated/2025-11-17-lepore-rivoluzione-americana-250-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "Brown v. Board of Education",
    type: "testo",
    sameAs: ["https://www.wikidata.org/wiki/Q875738"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    note: "Sentenza della Corte suprema degli Stati Uniti del 1954 che dichiarò incostituzionale la segregazione razziale nelle scuole pubbliche, ottenuta dal NAACP Legal Defense Fund portando in giudizio genitori neri e i loro figli come ricorrenti. Nel sito non è una voce di storia americana ma il caso esemplare di una figura che torna altrove: una norma che vince in tribunale e non viene applicata. L'anno dopo, con Brown II (1955), la Corte stabilì che la desegregazione avvenisse «with all deliberate speed», formula abbastanza elastica da diventare la clausola di rinvio: il dispositivo di fuga fu scritto dallo stesso tribunale che aveva emesso la sentenza. Il governo federale non la fece rispettare; l'attuazione fu lasciata alle famiglie, cioè a bambini di sei anni mandati dentro le scuole bianche fra la folla — nel novembre 1960, alla McDonogh 19 di New Orleans, l'integrazione non durò fino alle tre del pomeriggio, perché entro quell'ora tutti i genitori bianchi avevano ritirato i figli. Settant'anni dopo, nel 2026, le scuole di New York sono segregate quanto trent'anni prima. Da tenere presente quando si valuta qualunque architettura regolatoria: fra l'adozione di una norma e il suo effetto c'è un problema di enforcement che la norma da sola non risolve.",
    articles: [
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" }
    ]
  },
  {
    name: "1619 Project",
    type: "testo",
    sameAs: ["https://www.wikidata.org/wiki/Q66438352"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Harris, Leslie M.", why: "Interpellata come verifica esterna nell'estate 2019, contestò l'affermazione centrale, e il Times la pubblicò comunque." },
      { name: "Hannah-Jones, Nikole", why: "Ne è l'ideatrice e curatrice: il saggio d'apertura dell'agosto 2019 è suo, ed è lì che l'affermazione contestata fu pubblicata." },
      { name: "Lepore, Jill", why: "Non firmò la lettera dei cinque storici del dicembre 2019: è con il progetto sulla centralità, contro la sua tesi sulla causalità." },
      { name: "guadagno epistemico", why: "Il testo che organizza benissimo le attese attorno a una tesi falsa: la frase dell'agosto 2019 sulla Rivoluzione americana è quel caso." },
      { name: "canone", why: "Correzione di un canone storiografico che aveva espulso schiavitù e razza; l'errore di fatto del 2019 non annulla la correzione di cornice." }
    ],
    note: "Progetto editoriale del *New York Times Magazine*, pubblicato nell'agosto 2019 e ideato da Nikole Hannah-Jones, che propone di datare la fondazione degli Stati Uniti al 1619, anno d'arrivo in Virginia dei primi africani schiavizzati, invece che al 1776; premio Pulitzer per il commento nel 2020, poi podcast, inserto e curriculum scolastico. Nel sito è il caso su cui si tiene insieme una distinzione che quasi ovunque collassa, e va letto su tre piani separati. Sulla **centralità** — la schiavitù come elemento strutturale della storia americana e non come macchia — il progetto ha ragione, e lo concede anche chi lo ha criticato: «gli Stati Uniti non furono fondati per proteggere la schiavitù, ma il Times ha ragione sul fatto che la schiavitù fu centrale nella loro storia», scrive Leslie M. Harris nel marzo 2020. Sulla **causalità** il saggio d'apertura afferma che una ragione critica dell'indipendenza dalla Gran Bretagna fu proteggere la schiavitù: è l'affermazione che Harris contestò come verificatrice esterna nell'estate 2019 e che il giornale pubblicò lo stesso, quella su cui cinque storici accademici chiesero rettifiche nel dicembre 2019, e quella che Hannah-Jones ha poi riconosciuto di aver sovraesteso. Sul **metodo** sta la conseguenza che interessa al sito: la storiografia di Jill Lepore, che il sito adotta, tratta le verità fondanti americane come affermazioni sul mondo e non come miti, dunque processabili con le prove — e un impianto simile non può permettersi fatti larghi, perché il fatto largo è l'arma che si consegna a chi difende la cornice vecchia. Harris lo aveva previsto scrivendo alla redazione, e lo registra come consuntivo nello stesso articolo. Il giornale ha poi apportato una modifica per chiarire la portata di quell'affermazione, come registra Keeanga-Yamahtta Taylor sul *New Yorker* nel febbraio 2023; Jill Lepore, nel novembre 2025, ne dà la formulazione esatta — una correzione parziale, «alcuni dei coloni». Va aggiunta una terza linea di critica, che non viene da destra e non riguarda i fatti: sempre Taylor osserva che l'enfasi sulla schiavitù come causa unica del presente cancella la comprensione di come il cambiamento sia avvenuto nel tempo, e con essa i movimenti sociali che l'hanno prodotto. Non «sbagliato» ma «incompleto» — difetto di architettura causale, non di documentazione.",
    articles: [
      { title: "I Helped Fact-Check the 1619 Project. The Times Ignored Me.", url: "/curated/2020-03-06-harris-1619-project-fact-check-politico/", _source: "curated" },
      { title: "In Fighting for Every Black Child, Did I Betray My Own?", url: "/curated/2026-09-20-hannah-jones-segregazione-scolastica-nyt/", _source: "curated" },
      { title: "Hulu's Fascinating and Incomplete \"1619 Project\"", url: "/curated/2023-02-28-taylor-1619-project-hulu-newyorker/", _source: "curated" },
      { title: "What Was the American Revolution For?", url: "/curated/2025-11-17-lepore-rivoluzione-americana-250-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "Harris, Leslie M.",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q95208970"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Hannah-Jones, Nikole", why: "Il 19 agosto 2019, a Georgia Public Radio, la ascoltò «in silenzio attonito» ripetere l'affermazione che aveva smontato." },
      { name: "Lepore, Jill", why: "La sua sintesi in una riga è la struttura in due tempi di These Truths: le verità fondanti erano reali, e sono state tradite dall'inizio." }
    ],
    note: "Storica americana della schiavitù e della vita afroamericana, professoressa alla Northwestern University, autrice di *In the Shadow of Slavery: African Americans in New York City, 1626-1863* (2003) e curatrice, con James T. Campbell e Alfred L. Brophy, di *Slavery and the University: Histories and Legacies* (University of Georgia Press, 2019). Nel sito entra con l'articolo del 6 marzo 2020 su *Politico Magazine*, e vale per la postura più che per il caso. Interpellata dal *New York Times* come verifica esterna sul 1619 Project nell'estate 2019, contestò l'affermazione centrale, fu pubblicata lo stesso, e poi fece quattro cose invece di una: nominò l'errore, ne diede la contro-evidenza storica — il caso Somerset del 1772 non toccava le colonie americane, dunque non c'era nulla da cui separarsi per proteggere la schiavitù —, rifiutò che la correzione servisse a liquidare il progetto, e applicò lo stesso controllo bibliografico ai cinque storici che lo attaccavano, contando le voci d'indice nelle loro opere. Si usa come modello di metodo — come si corregge un fatto senza cedere la cornice, e come si corregge una cornice senza allargare i fatti — più che come fonte su un singolo dibattito americano.",
    articles: [
      { title: "I Helped Fact-Check the 1619 Project. The Times Ignored Me.", url: "/curated/2020-03-06-harris-1619-project-fact-check-politico/", _source: "curated" },
      { title: "Hulu's Fascinating and Incomplete \"1619 Project\"", url: "/curated/2023-02-28-taylor-1619-project-hulu-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "Taylor, Keeanga-Yamahtta",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q30104171"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "1619 Project", why: "Nel febbraio 2023 ne fa la critica che non viene da destra e non riguarda i fatti: non sbagliato, incompleto." },
      { name: "Harris, Leslie M.", why: "Stessa università e critiche complementari: Harris sul fatto sbagliato, Taylor sull'architettura causale troppo sottile." },
      { name: "disuguaglianze", why: "Negli Stati Uniti la mortalità materna nera è triplicata fra il 1990 e il 2023 ed è cresciuta anche fra le bianche: l'origine non basta." }
    ],
    note: "Studiosa americana di African American Studies, Leon Forrest Professor alla Northwestern University e contributing writer del *New Yorker*, autrice di *Race for Profit: How Banks and the Real Estate Industry Undermined Black Homeownership*, finalista al premio Pulitzer per la storia nel 2020. Nel sito entra con la recensione del febbraio 2023 alla serie Hulu tratta dal 1619 Project, e vale perché porta una specie di critica che l'archivio non aveva: non da destra, non sui fatti, e senza mettere in discussione la centralità della schiavitù nella storia americana. La sua obiezione è di architettura — l'enfasi sulla schiavitù come causa unica del presente cancella la comprensione di come il cambiamento sia avvenuto nel tempo, e con essa i movimenti sociali che l'hanno prodotto — e la argomenta con dati, non con la teoria: la mortalità materna americana fra il 1990 e il 2023, la formazione delle polizie urbane a fine Ottocento, la militarizzazione della fine degli anni Sessanta. La sua posizione è dichiaratamente di sinistra e di analisi di classe, e il sito la riporta come tale: quello che adotta è la forma dell'obiezione, non la soluzione che propone.",
    articles: [
      { title: "Hulu's Fascinating and Incomplete \"1619 Project\"", url: "/curated/2023-02-28-taylor-1619-project-hulu-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "monocausalità",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "1619 Project", why: "Negli Stati Uniti fra il 2019 e il 2023 è il caso documentato: l'enfasi sull'origine cancella il modo in cui il cambiamento è avvenuto." },
      { name: "Taylor, Keeanga-Yamahtta", why: "Nel febbraio 2023 ne dà la formulazione più netta: non sbagliato, incompleto — difetto di architettura causale, non di documentazione." },
      { name: "paradigma tecnocratico", why: "Stessa forma su un fattore diverso: se la tecnologia spiega tutto, nessuna decisione ha peso e l'inevitabilità diventa argomento." },
      { name: "guadagno epistemico", why: "Una spiegazione monocausale organizza benissimo le attese, e può farlo attorno a una tesi che non regge: coerenza alta, guadagno nullo." },
      { name: "Lepore, Jill", why: "Nel novembre 2025 riporta la tesi di Jasanoff: l'origine viene caricata di una posta che nessun evento e nessuna persona può reggere." }
    ],
    note: "La riduzione di un fenomeno complesso a una causa unica e profonda, e il costo specifico che ne deriva: se una causa spiega tutto, nulla di ciò che è accaduto dopo spiega qualcosa, e dal racconto sparisce l'agency — le decisioni, i conflitti e i movimenti che il cambiamento l'hanno prodotto davvero. Non è un errore di fatto ma di architettura, e per questo è difficile da vedere: la spiegazione può poggiare su dati corretti e restare inservibile, perché non distingue fra ciò che ha originato un fenomeno e ciò che lo tiene in vita adesso. Il sito la isola in due casi che condividono la forma e non il contenuto. Il primo, negli Stati Uniti fra il 2019 e il 2023, è la critica di Keeanga-Yamahtta Taylor al 1619 Project: i numeri che porta — la mortalità materna nera triplicata fra il 1990 e il 2023 e cresciuta anche fra le bianche, le polizie urbane formate a fine Ottocento per i conflitti di casa e di lavoro — non negano l'origine, mostrano che l'origine non basta. Il secondo è il determinismo tecnologico, che questo archivio contesta da sempre: se l'AI spiega da sola il mercato del lavoro che verrà, nessuna decisione politica ha peso, e l'inevitabilità smette di essere una descrizione per diventare un argomento. Cambia il fattore, resta la forma. Una variante contigua è il sovraccarico dell'origine, che Maya Jasanoff formula a proposito della Rivoluzione americana e Jill Lepore riporta nel novembre 2025: un momento di fondazione viene investito di una posta che nessun insieme di eventi e di persone può plausibilmente reggere — e accade sia a chi lo vuole immacolato sia a chi lo vuole infame, che è il motivo per cui le due semplificazioni opposte si somigliano più di quanto ciascuna ammetta.",
    articles: [
      { title: "What Was the American Revolution For?", url: "/curated/2025-11-17-lepore-rivoluzione-americana-250-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "Menand, Louis",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q3262682"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "segnale costoso", why: "Nel settembre 2026 ne dà la conseguenza sul ricevente: azzerato il costo, il sospetto diventa il default e colpisce per primo chi non ha barato." },
      { name: "morte dell'autore", why: "Se smettiamo di immaginare una persona dietro le parole, il testo diventa segno da decodificare: la tesi di Barthes realizzata per via tecnica." },
      { name: "embodied mind", why: "Hazrat e Kaufman aderiscono alla cognizione incarnata, e per Menand i loro libri sono elegie a una lettura prossima alla fine." },
      { name: "Peirce, Charles Sanders", why: "The Metaphysical Club, premio Pulitzer, è la sua storia del gruppo di Cambridge da cui nasce il pragmatismo: il suo Peirce è il nostro." }
    ],
    note: "Critico e storico delle idee americano (1952), staff writer del *New Yorker* e professore a Harvard, premio Pulitzer per la storia con *The Metaphysical Club* (2001) e autore di *The Free World: Art and Thought in the Cold War* (2021). Nel sito entra con il saggio del settembre 2026 su punteggiatura e verbi, e vale per la chiusa più che per l'argomento: il timore corrente è che scambiamo la poesia di una macchina per quella di una persona, mentre la prospettiva peggiore è che liquideremo quella di una persona come slop. È anche una buona misura di che cosa sia la critica quando è fatta bene — corregge gli autori recensiti sui dettagli tecnici, concede loro il punto dove ce l'hanno, e ricava dai due libri una tesi che nessuno dei due formula. Si usa come lettore di libri altrui, cioè come fonte di categorie, e come testimone competente del mestiere editoriale.",
    articles: [
      { title: "The Curious Power of Punctuation", url: "/curated/2026-09-28-menand-punteggiatura-autore-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "coscienza fenomenica",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "Bayne, Tim", why: "Nel settembre 2026 ne mette in dubbio l'idoneità scientifica, pur essendo fra chi lavora a operazionalizzarla." },
      { name: "LLM come attante zero", why: "Chiedere se un modello sia cosciente presuppone che ci sia qualcosa da rilevare: il sito preferisce sostituire la domanda." },
      { name: "post-cognition", why: "Gli impegni ontologici vengono prima della valutazione, e qui è il concetto stesso a doverli superare prima di ogni misura." },
      { name: "embodied mind", why: "Il mapudungun rakizuam include l'interdipendenza con gli altri e col mondo naturale, elemento relazionale che «coscienza» non contiene." }
    ],
    note: "Termine introdotto dal filosofo Ned Block negli anni Novanta, allora al MIT, per lo stato in cui «si prova qualcosa» a essere — la sabbia fra le dita, la fragola matura, il sole sulla neve — in contrasto con il sonno senza sogni o la sedazione profonda. Ha guidato trent'anni di scienza della coscienza e soprattutto ha assunto un carico etico: chiedersi se si provi qualcosa a essere un neonato, un'ape o un bot è diventato il modo di tracciare il confine fra gli enti con statuto morale intrinseco e quelli senza. Nel sito la voce esiste per il dubbio che Tim Bayne solleva nel settembre 2026: un buon concetto scientifico taglia la natura alle giunture, e «coscienza» potrebbe fallire il taglio, raggruppando fenomeni che non condividono una natura o mancando di raggrupparne altri che la condividono. L'indizio linguistico non è probante e Bayne lo dichiara — Kathleen Wilkes osservò nel 1988 che non esistono sinonimi in greco antico, mandarino, croato e inglese anteriore al Seicento, ma nessuna di quelle lingue ha un sinonimo nemmeno per *quark* o *apoptosi* — mentre i precedenti storici pesano: il «fuoco» degli antichi metteva insieme combustione, attività solare, fulmini, lucciole e aurora boreale, e servirono Galileo per separare velocità media e istantanea e Joseph Black, nel Settecento, per separare calore e temperatura. La conseguenza operativa è uno strumento di rifiuto più che di risposta: prima di costruire un rilevatore di coscienza per api, neonati e macchine, occorre chiedersi se ci sia qualcosa da rilevare, ed è possibile che sia la domanda a dover essere sostituita.",
    articles: [
      { title: "What if 'consciousness' isn't real?", url: "/curated/2026-09-15-bayne-coscienza-non-reale-sciam/", _source: "curated" },
      { title: "Anche se non lo fossero", url: "/curated/2026-08-20-economist-anche-se-non-lo-fossero/", _source: "curated" },
      { title: "Il rilevatore prima dell'oggetto", url: "/curated/2026-08-20-economist-rilevatore-prima-delloggetto/", _source: "curated" },
      { title: "La scala che non regge", url: "/curated/2026-08-20-schneider-la-scala-che-non-regge-economist/", _source: "curated" }
    ]
  },
  {
    name: "Bayne, Tim",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q110122299"],
    geo: { modo: "diretta", paesi: ["Australia"] },
    note: "Filosofo della mente e delle scienze cognitive, professore alla Monash University di Melbourne e co-direttore del programma *Brain, Mind and Consciousness* del Canadian Institute for Advanced Research. Nel sito entra con l'articolo del settembre 2026 su *Scientific American*, e vale soprattutto per la posizione da cui parla: lavora con gli scienziati per capire come si possa testare la coscienza nelle popolazioni che non comunicano verbalmente — neonati, animali non umani, sistemi artificiali — cioè è fra chi il rilevatore lo sta costruendo, e usa quella posizione per dubitare del concetto che il rilevatore dovrebbe misurare. Un dubbio metodologico pesa di più quando viene da dentro. La geografia della voce registra la sede accademica e non la cittadinanza, che le fonti accessibili non documentano.",
    articles: [
      { title: "What if 'consciousness' isn't real?", url: "/curated/2026-09-15-bayne-coscienza-non-reale-sciam/", _source: "curated" },
      { title: "Il rilevatore prima dell'oggetto", url: "/curated/2026-08-20-economist-rilevatore-prima-delloggetto/", _source: "curated" }
    ]
  },
  {
    name: "not even wrong",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q1225402"],
    geo: { modo: "teorico", paesi: ["Austria", "Svizzera"] },
    related: [
      { name: "Floridi, Luciano", why: "Con Novelli e Morley ne fa lo strumento di due audit nel 2026: le previsioni sul lavoro dal 2012 e quelle sull'AGI dal 1950." },
      { name: "monocausalità", why: "Parenti da non confondere: là la spiegazione fallisce per architettura causale, qui l'affermazione fallisce per condizioni di verità." },
      { name: "coscienza fenomenica", why: "Il caso più profondo: se il concetto non taglia alle giunture, non è la previsione a non essere testabile ma la domanda." },
      { name: "segnale costoso", why: "La precisione di superficie è un segnale a costo zero: una cifra esibita senza metodo non prova nulla di ciò che sembra provare." },
      { name: "criti-hype", why: "Una previsione catastrofista infalsificabile non è innocua: l'assenza di un test è ciò che le permette di circolare senza mai pagare un costo." }
    ],
    note: "Diagnosi attribuita al fisico Wolfgang Pauli, che avrebbe liquidato il lavoro di un giovane collega dicendo che non era «nemmeno sbagliato», *nicht einmal falsch*. La forza della formula sta nel diniego di dignità: chiamare sbagliata un'affermazione le riconosce di essere almeno il tipo di cosa che può essere messa alla prova e fallire, mentre chiamarla non nemmeno sbagliata glielo nega. Luciano Floridi, Claudio Novelli e Jessica Morley, che nel 2026 ne fanno lo strumento di due audit sulle previsioni dell'AI, registrano con scrupolo che l'aneddoto è riportato da Peierls nel 1960, che il fraseggio varia fra i resoconti e che il lavoro recensito da Pauli non è mai stato identificato con certezza: adottano l'uso diagnostico che la formula ha acquisito nella filosofia della scienza del Novecento, indipendentemente dai fatti storici — ed è una precauzione che vale la pena imitare, visto l'oggetto. Il concetto ha due registri, e tenerli distinti è metà del suo valore. In senso stretto nomina un'affermazione che non fissa alcuna proposizione, perché le manca uno dei quattro elementi che danno condizioni di verità: variabile obiettivo, perimetro, orizzonte, condizione d'esito. In senso operativo, che è il caso di gran lunga più frequente, nomina un'affermazione che una proposizione la fissa benissimo e poi la colloca fuori dalla portata di qualunque test severo — *determinata ma non divulgata*, quando trattiene il metodo e l'incertezza che permetterebbero all'evidenza di incidere, oppure *equivoca*, quando è determinata sotto una lettura e circola sotto un'altra, sopravvivendo ritirandosi verso quella che i dati non hanno ancora raggiunto. Nel sito la figura ha due parentele da non confondere. La prima è con la monocausalità: là la spiegazione fallisce per architettura causale pur poggiando su dati corretti, qui l'affermazione fallisce prima, sulle condizioni di verità. La seconda è più profonda e viene da Tim Bayne: se un concetto come «coscienza» non taglia la natura alle giunture, allora non è la singola previsione a non essere nemmeno sbagliata ma la domanda che la ospita, e nessuna divulgazione di metodo potrebbe salvarla.",
    articles: [
      { title: "Not Even Wrong 1: AI and the Labour Market, From Frey–Osborne to ChatGPT, 2012–2026", url: "/curated/2026-06-10-floridi-not-even-wrong-1-lavoro-ssrn/", _source: "curated" },
      { title: "Not Even Wrong 2: An Audit of Public AGI Prediction, 1950–2026", url: "/curated/2026-09-14-floridi-not-even-wrong-2-agi-ssrn/", _source: "curated" },
      { title: "Happy Birthday C.S. Peirce: Peircean Induction and the Error-Correcting Thesis", url: "/curated/2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics/", _source: "curated" },
      { title: "Karl Popper", url: "/curated/2026-07-31-thornton-karl-popper-sep/", _source: "curated" }
    ]
  },
  {
    name: "Peirce, Charles Sanders",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q187520", "https://it.wikipedia.org/wiki/Charles_Sanders_Peirce"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Eco, Umberto", why: "Il canale italiano: il Trattato del 1975 è costruito sul segno triadico, e il lettore modello è un interpretante con un nome." },
      { name: "strutturalismo", why: "Il bivio alla radice: il segno diadico di Saussure contro quello triadico di Peirce, dove il senso ha bisogno di un terzo che interpreti." },
      { name: "Descartes, René", why: "Nel 1868 smonta l'intuizione cartesiana: nessuna conoscenza senza una conoscenza precedente, e il dubbio non si comincia per decisione." },
      { name: "test severo", why: "Mayo legge la sua tesi autocorrettiva come rilevazione dell'errore e non come convergenza: lo standard dell'archivio nasce qui." },
      { name: "metodo scientifico", why: "Il primo a definirlo per la capacità di rilevare il proprio errore invece che per l'accumulo di conferme." }
    ],
    note: "Filosofo, logico e matematico statunitense (1839–1914), nato a Cambridge, Massachusetts. Non ha mai tenuto una cattedra stabile: per trent'anni ha lavorato allo United States Coast Survey facendo misure di gravità, ha pubblicato su riviste e ha lasciato migliaia di pagine manoscritte, raccolte solo dopo la morte nei *Collected Papers* (Harvard, 1931–1958) — che si citano per volume e paragrafo, ed è la ragione per cui nel sito compare come 5.145 o 2.748 invece che con un titolo. Coniò «pragmatismo» e poi lo ribattezzò «pragmaticismo» perché la prima parola gli era stata portata altrove, scegliendo un termine «abbastanza brutto da essere al sicuro dai rapitori»: la distanza fra quel pragmatismo e ciò che oggi in italiano chiamiamo pragmatico è tutta da percorrere, e va percorsa prima di leggerlo. Nel sito è il nodo che mancava, perché tiene insieme le due metà dell'archivio che fin qui non avevano un antenato comune. Da un lato la metà semiotica e strutturale: il segno di Peirce è triadico, non diadico — un rappresentante, un oggetto e un interpretante — e significa soltanto attraverso il terzo termine, che a sua volta diventa segno, e così via senza termine. È il bivio che si apre alla radice del Novecento: la linguistica di Saussure prende la strada del segno a due posti, Peirce quella del segno che ha bisogno di qualcuno che lo legga, e il canale italiano di questa seconda via è Umberto Eco, il cui Trattato del 1975 vi è costruito sopra e il cui lettore modello è un interpretante con un nome proprio. Un indice di concetti legati da relazioni, come quello di questo sito, è un oggetto strutturalista; ma il fatto che qualcuno lo legga, e che leggendolo produca il senso che nessuna delle voci contiene da sola, è il terzo termine di Peirce. Dall'altro lato la metà epistemica. A Peirce si deve il nome della terza inferenza accanto a deduzione e induzione, l'abduzione: la mossa che inventa l'ipotesi invece di dedurla o generalizzarla, l'unica delle tre che produce qualcosa di nuovo e l'unica che può sbagliare nel modo che conta. E si deve la tesi autocorrettiva, che Deborah Mayo difende nel 2026 contro la lettura corrente: l'induzione merita il nome di metodo non perché migliori accumulando dati, ma perché contiene il modo di rilevare il proprio errore — fino al punto, dice Peirce nel 1878 (3.575), di correggere perfino le proprie premesse. Le due metà sono la stessa mossa vista da due lati: nessun segno significa da solo, nessuna misura si giudica da sola. Il fallibilismo che ne deriva — ogni credenza è tenuta con riserva di revisione — non è scetticismo, ed è la posizione che il sito riconosce come propria: la realtà resiste ai nostri schemi, e il modo di scoprirlo è costruire procedimenti che possano accorgersene.",
    articles: [
      { title: "Happy Birthday C.S. Peirce: Peircean Induction and the Error-Correcting Thesis", url: "/curated/2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics/", _source: "curated" }
    ]
  },
  {
    name: "Mayo, Deborah",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q16732191"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "test severo", why: "La definizione è sua: un test è severo se la procedura avrebbe segnalato l'errore, con probabilità molto alta, nel caso ci fosse stato." },
      { name: "not even wrong", why: "Floridi definisce «severamente testabile» dichiarando il prestito, after Mayo: lo standard adottato dall'archivio nasce da lei." },
      { name: "Peirce, Charles Sanders", why: "Ne rilegge la tesi autocorrettiva contro l'uso corrente: non convergenza asintotica, ma rilevazione dell'errore su questo campione." },
      { name: "guerre della statistica", why: "È parte in causa, non arbitro: la sua posizione è una delle due, e l'archivio registra anche l'altra." },
      { name: "conflitto di interessi intellettuale", why: "La categoria è sua, dal dicembre 2021, e si applica per prima al potere di imporre uno standard metodologico." }
    ],
    note: "Filosofa della statistica statunitense, professoressa emerita alla Virginia Tech, autrice di *Error and the Growth of Experimental Knowledge* (Chicago, 1996), premio Lakatos 1998, e di *Statistical Inference as Severe Testing: How to Get Beyond the Statistics Wars* (Cambridge, 2018). Nel sito ha una posizione particolare, perché è la fonte di uno strumento che l'archivio aveva adottato prima di risalire a lei: quando Floridi, Novelli e Morley nel 2026 definiscono una previsione «severamente testabile», lo fanno dichiarando il prestito — nel senso reso preciso *after Mayo*. Il suo contributo sta in due mosse. La prima è la definizione di severità, che sposta l'oggetto della valutazione dall'ipotesi alla procedura: non quanto è probabile che H sia vera, ma quanto era probabile che il procedimento segnalasse l'errore se l'errore c'era stato. La seconda è la difesa di Peirce contro la sua lettura più diffusa: l'autocorrezione non è la promessa che i dati, accumulandosi, correggano da sé, perché quella sarebbe l'induzione rozza, che Mayo giudica una sonda dell'errore altamente inaffidabile. È pubblicata prevalentemente in sede accademica e sul proprio blog, e in questo archivio è anche il caso di specie che dimostra come la testata non decida: un blog personale senza apparato redazionale, quando chi scrive è la fonte primaria dello standard di cui parla, vale più di una rivista con una firma fuori campo.",
    articles: [
      { title: "Happy Birthday C.S. Peirce: Peircean Induction and the Error-Correcting Thesis", url: "/curated/2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics/", _source: "curated" },
      { title: "The statistics wars and intellectual conflicts of interest", url: "/curated/2021-12-06-mayo-conflitti-interesse-intellettuali-conbio/", _source: "curated" },
      { title: "The ASA President's Task Force Statement on Statistical Significance and Replicability", url: "/curated/2021-08-01-task-force-asa-significativita-replicabilita-aoas/", _source: "curated" }
    ]
  },
  {
    name: "test severo",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "not even wrong", why: "Lo standard che regge la diagnosi: un'affermazione collocata fuori dalla portata di un test severo non è sbagliata, è nemmeno sbagliata." },
      { name: "legge di Goodhart", why: "Parenti stretti da non confondere: là la misura si guasta perché diventa obiettivo, qui il test perché l'ipotesi è scelta dopo i dati." },
      { name: "coscienza fenomenica", why: "Il limite superiore: se il concetto non taglia la natura alle giunture non c'è test severo possibile, perché non si sa che cosa fallirebbe." },
      { name: "epistemia", why: "Il rovescio esatto: l'epistemia è la sensazione di sapere senza che ci sia stato un test, la severità è il test che quella sensazione non fornisce." },
      { name: "metodo scientifico", why: "Il criterio con cui il sito lo giudica: non i protocolli seguiti, ma la probabilità che la procedura avrebbe segnalato l'errore." }
    ],
    note: "Standard di valutazione delle prove formulato da Deborah Mayo, che ne ricava la forma leggendo la tesi autocorrettiva di Charles Sanders Peirce. Nella definizione di Mayo un'ipotesi H supera un test severo con il dato x se e solo se, primo, x concorda con H, e secondo, la procedura sperimentale avrebbe segnalato con probabilità molto alta la presenza di un errore, nel caso ci fosse stata una discordanza. In forma breve: un test è severo se l'ipotesi avrebbe potuto fallirlo davvero. La conseguenza è uno spostamento dell'oggetto, ed è la parte che si dimentica per prima: **le probabilità si attaccano alle procedure, non alle ipotesi**. Peirce lo scrive già nel 1878 (2.748) rifiutando la probabilità inversa — la teoria proposta non assegna alcuna probabilità alla conclusione induttiva. Non si dice quanto è probabile che H sia vera; si dice quanto è affidabile il procedimento che l'ha messa alla prova. Da questo standard Mayo ricava tre ordini di induzione, e la scala è utilizzabile anche dove non compare un numero: il primo è l'induzione rozza, che procede per assenza di confutazione ed è quindi un argomento dall'ignoranza; il secondo è qualitativo, e la sua forza dipende da quanto la previsione vada contro ciò che ci si aspetterebbe senza l'ipotesi; il terzo è quantitativo, e comincia quando quel quanto diventa misurabile attraverso probabilità d'errore oggettive. Il corollario pratico più immediato riguarda la predesignazione, cioè l'obbligo di dichiarare l'ipotesi prima di guardare i dati: se si esaminano venti fattori e si riporta come test quello che è risultato significativo, la probabilità di aver trovato almeno un falso positivo non è il 5% dichiarato ma circa il 64%, perché 0,95 elevato a venti fa 0,36 — e quella, non 0,95, è la severità del test che si è davvero condotto. Va detto che non è lo standard, ma **uno** degli standard in campo: appartiene alla statistica dell'errore, e gli si oppone la tradizione bayesiana, per cui la domanda legittima è quanto sia credibile un'ipotesi alla luce dei dati osservati e non quanto affidabilmente una procedura avrebbe sbagliato. Mayo difende la propria parte contro i test basati sul fattore di Bayes nel 2025, sul *British Journal for the Philosophy of Science*; l'archivio registra entrambe le posizioni alle voci *inferenza bayesiana* e *guerre della statistica*, e adotta questa sapendo di adottarne una. Nel sito è lo strumento in ingresso più usato e il più a lungo non dichiarato: l'archivio lo adotta nel giugno 2026 con il primo audit di Floridi, che lo prende da Mayo, e la voce esiste per restituirlo alla sua fonte. La domanda che porta con sé, e che si può rivolgere a qualunque affermazione, non è se abbia prove a favore: è quante possibilità aveva di non averne.",
    articles: [
      { title: "Happy Birthday C.S. Peirce: Peircean Induction and the Error-Correcting Thesis", url: "/curated/2026-09-11-mayo-peirce-tesi-autocorrettiva-errorstatistics/", _source: "curated" },
      { title: "The statistics wars and intellectual conflicts of interest", url: "/curated/2021-12-06-mayo-conflitti-interesse-intellettuali-conbio/", _source: "curated" },
      { title: "Why Most Published Research Findings Are False", url: "/curated/2005-08-30-ioannidis-most-published-findings-false-plosmed/", _source: "curated" },
      { title: "Scientific method: Statistical errors", url: "/curated/2014-02-12-nuzzo-errori-statistici-nature/", _source: "curated" },
      { title: "The Statistical Crisis in Science", url: "/curated/2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist/", _source: "curated" },
      { title: "Estimating the reproducibility of psychological science", url: "/curated/2015-08-28-open-science-collaboration-riproducibilita-science/", _source: "curated" },
      { title: "The ASA Statement on p-Values: Context, Process, and Purpose", url: "/curated/2016-03-07-wasserstein-lazar-dichiarazione-asa-p-value/", _source: "curated" },
      { title: "Redefine statistical significance", url: "/curated/2017-09-01-benjamin-redefine-statistical-significance-nhb/", _source: "curated" },
      { title: "Justify your alpha", url: "/curated/2018-02-26-lakens-justify-your-alpha-nhb/", _source: "curated" },
      { title: "Scientists rise up against statistical significance", url: "/curated/2019-03-20-amrhein-greenland-mcshane-significativita-nature/", _source: "curated" },
      { title: "Philosophy of Statistics", url: "/curated/2025-10-01-romeijn-filosofia-della-statistica-sep/", _source: "curated" },
      { title: "Karl Popper", url: "/curated/2026-07-31-thornton-karl-popper-sep/", _source: "curated" },
      { title: "The Hugging Face incident and the road ahead", url: "/curated/2026-08-26-openai-incidente-hugging-face-resoconto/", _source: "curated" },
      { title: "GPT detectors are biased against non-native English writers", url: "/curated/2023-07-10-liang-rilevatori-non-madrelingua-patterns/", _source: "curated" },
      { title: "Different Time, Different Language: Revisiting the Bias Against Non-Native Speakers in GPT Detectors", url: "/curated/2026-02-05-al-ali-bias-rilevatori-rivisitato-eacl/", _source: "curated" },
      { title: "Commonwealth Short Story Prize Clears Regional Winners of AI Use Following Month-Long Review", url: "/curated/2026-06-26-commonwealth-nazir-falso-positivo-brittlepaper/", _source: "curated" },
      { title: "Il rilevatore prima dell'oggetto", url: "/curated/2026-08-20-economist-rilevatore-prima-delloggetto/", _source: "curated" }
    ]
  },
  {
    name: "guerre della statistica",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti", "Regno Unito"] },
    related: [
      { name: "inferenza bayesiana", why: "Una delle due parti: la probabilità come grado di credenza, aggiornata dai dati che si sono osservati." },
      { name: "statistica dell'errore", why: "L'altra: la probabilità come frequenza d'errore di una procedura, misurata su esiti che non si sono verificati." },
      { name: "conflitto di interessi intellettuale", why: "Il rischio istituzionale della disputa: chi ha il potere di chiuderla per decreto ha un interesse in quale delle due vinca." },
      { name: "metodo scientifico", why: "La disputa non è tecnica: è su che cosa vogliamo che un'inferenza ci consegni, e quindi su che cosa chiamiamo metodo." },
      { name: "Popper, Karl", why: "L'antenato comune e contestato: entrambe le parti rivendicano la falsificabilità, e nessuna la trova sufficiente come Popper l'ha lasciata." }
    ],
    note: "Nome corrente — *statistics wars* — della controversia che percorre la statistica e la filosofia della scienza da circa un secolo, prima fra Ronald Fisher e la coppia Neyman–Pearson negli anni Trenta, poi lungo la faglia principale fra approcci bayesiani e approcci frequentisti. La posta non è un dettaglio tecnico, ed è la ragione per cui la disputa non si chiude: è che cosa significhi *probabilità* dentro un'inferenza, e quindi che cosa vogliamo che un'inferenza ci consegni. Per un bayesiano la risposta legittima è quanto è credibile un'ipotesi alla luce dei dati; per la statistica dell'errore quella domanda è mal posta, e l'unica risposta disponibile riguarda quanto affidabilmente la procedura avrebbe segnalato uno sbaglio. Nessuna evidenza empirica può dirimere la questione, perché non è una questione empirica. Le conseguenze però sono materiali, e questo è il motivo per cui la voce esiste in un archivio che non è di statistica: dalla faglia dipendono quali metodi una rivista pretende, che cosa viene pubblicato e che cosa no, come si approva un farmaco, come si dichiara replicata una scoperta, e quali risultati di un modello si possono chiamare miglioramenti. L'uso pratico è diagnostico e vale ben oltre le scienze quantitative: davanti a un'affermazione che dice *i dati mostrano che*, conviene chiedersi quale delle due concezioni è in gioco, perché gran parte della confusione nel dibattito pubblico sull'evidenza nasce da uno scambio silenzioso fra le due — si invoca il rigore della procedura e si conclude con un grado di fiducia, o viceversa. Il sito prende posizione su un punto solo, e minimo: qualunque concezione si adotti, un'affermazione che nessun esito potrebbe smentire non è in gioco in nessuna delle due.",
    articles: [
      { title: "The statistics wars and intellectual conflicts of interest", url: "/curated/2021-12-06-mayo-conflitti-interesse-intellettuali-conbio/", _source: "curated" },
      { title: "Scientific method: Statistical errors", url: "/curated/2014-02-12-nuzzo-errori-statistici-nature/", _source: "curated" },
      { title: "Estimating the reproducibility of psychological science", url: "/curated/2015-08-28-open-science-collaboration-riproducibilita-science/", _source: "curated" },
      { title: "The ASA Statement on p-Values: Context, Process, and Purpose", url: "/curated/2016-03-07-wasserstein-lazar-dichiarazione-asa-p-value/", _source: "curated" },
      { title: "Redefine statistical significance", url: "/curated/2017-09-01-benjamin-redefine-statistical-significance-nhb/", _source: "curated" },
      { title: "Justify your alpha", url: "/curated/2018-02-26-lakens-justify-your-alpha-nhb/", _source: "curated" },
      { title: "Scientists rise up against statistical significance", url: "/curated/2019-03-20-amrhein-greenland-mcshane-significativita-nature/", _source: "curated" },
      { title: "The ASA President's Task Force Statement on Statistical Significance and Replicability", url: "/curated/2021-08-01-task-force-asa-significativita-replicabilita-aoas/", _source: "curated" },
      { title: "Philosophy of Statistics", url: "/curated/2025-10-01-romeijn-filosofia-della-statistica-sep/", _source: "curated" },
      { title: "Karl Popper", url: "/curated/2026-07-31-thornton-karl-popper-sep/", _source: "curated" }
    ]
  },
  {
    name: "inferenza bayesiana",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q812535", "https://it.wikipedia.org/wiki/Inferenza_bayesiana"],
    geo: { modo: "teorico", paesi: ["Regno Unito", "Francia", "Italia", "Stati Uniti"] },
    related: [
      { name: "Probability Theory: The Logic of Science", why: "La formulazione più ambiziosa: non una scelta fra metodi, ma l'unica estensione coerente della logica all'informazione incompleta." },
      { name: "Jaynes, Edwin Thompson", why: "Ne dà la versione forte e la fallacia che ne deriva: proiettare sul mondo una proprietà del proprio stato di conoscenza." },
      { name: "statistica dell'errore", why: "La posizione avversaria, e il punto di rottura è uno: se conti gli esiti che non si sono verificati o soltanto quello che hai." },
      { name: "test severo", why: "Lo standard che le si oppone: non quanto è credibile l'ipotesi, ma quanto la procedura avrebbe potuto smentirla." },
      { name: "free-energy principle", why: "La cognizione descritta come inferenza bayesiana: il cervello come sistema che minimizza l'errore fra modello interno e mondo." }
    ],
    note: "La concezione per cui la probabilità misura un grado di credenza, e inferire significa aggiornarlo: si parte da una probabilità a priori dell'ipotesi, si osservano i dati, e il teorema di Bayes restituisce la probabilità a posteriori. Il pregio dichiarato è che l'output è ciò che davvero interessa a chi ragiona — quanto è credibile questa tesi, adesso — mentre un p-value non lo dice e viene continuamente letto come se lo dicesse. Sulla critica più comune, l'arbitrarietà del prior, la risposta bayesiana è che il prior non è un difetto ma una dichiarazione: chiunque inferisca ne ha uno, e il frequentista semplicemente lo nasconde nella scelta del modello, del test e delle ipotesi ausiliarie. Il cuore tecnico è il *principio di verosimiglianza*: tutta la portata probatoria dei dati sta nella funzione di verosimiglianza, dunque conta ciò che si è osservato e non ciò che si sarebbe potuto osservare. Da qui l'obiezione più affilata all'altra parte, che va presa sul serio: le probabilità d'errore dipendono dal piano di campionamento, cioè da esiti mai avvenuti e dalle intenzioni private dello sperimentatore su quando fermarsi — e due ricercatori con dati identici e regole d'arresto diverse ottengono p-value diversi, che per un bayesiano è assurdo. La genealogia va da Thomas Bayes e Laplace a Bruno de Finetti, che negli anni Trenta fonda la probabilità soggettiva sulla coerenza delle scommesse, e poi a Jeffreys, Savage, Lindley, Jaynes. Un avvertimento contro le caricature: i due campi non sono monoliti, e la posizione più interessante è quella di chi sta dentro il primo e vuole qualcosa del secondo — il *workflow* bayesiano di Andrew Gelman prescrive controlli predittivi a posteriori che nello spirito sono controlli d'errore, cioè tentativi di far fallire il proprio modello.",
    articles: [
      { title: "Why Most Published Research Findings Are False", url: "/curated/2005-08-30-ioannidis-most-published-findings-false-plosmed/", _source: "curated" },
      { title: "Scientific method: Statistical errors", url: "/curated/2014-02-12-nuzzo-errori-statistici-nature/", _source: "curated" },
      { title: "Redefine statistical significance", url: "/curated/2017-09-01-benjamin-redefine-statistical-significance-nhb/", _source: "curated" },
      { title: "Philosophy of Statistics", url: "/curated/2025-10-01-romeijn-filosofia-della-statistica-sep/", _source: "curated" }
    ]
  },
  {
    name: "statistica dell'errore",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti", "Regno Unito"] },
    related: [
      { name: "Error and the Growth of Experimental Knowledge", why: "Il libro in cui Mayo la costruisce nel 1996, e in cui la severità diventa una misura invece che un auspicio." },
      { name: "test severo", why: "Lo standard che ne è il prodotto: la valutazione si sposta dall'ipotesi alla procedura che l'ha messa alla prova." },
      { name: "not even wrong", why: "La conseguenza diagnostica: senza probabilità d'errore non c'è modo di dire che un'affermazione ha superato qualcosa." },
      { name: "Peirce, Charles Sanders", why: "L'antenato che Mayo rivendica: la tesi autocorrettiva letta come rilevazione dell'errore, non come convergenza." }
    ],
    note: "Nome che Deborah Mayo dà alla propria posizione — *error statistics* — e che è preferibile al generico frequentismo, perché ne isola la tesi filosofica invece della tecnica. La probabilità qui non misura la credibilità di un'ipotesi ma la frequenza con cui una procedura sbaglierebbe, e l'output di un'inferenza non è la probabilità che l'ipotesi sia vera: quella domanda, sostiene Mayo, non è la domanda giusta. Ciò che si può sapere è quanto severamente l'ipotesi è stata sondata, e per saperlo serve esattamente quello che la parte avversa considera irrilevante — la distribuzione campionaria, gli esiti che non si sono verificati, la regola d'arresto. La ragione è concreta e regge: gli effetti di selezione — la pesca nei dati, l'arresto opportunistico, l'ipotesi scelta dopo aver guardato — non cambiano nulla nella funzione di verosimiglianza e cambiano tutto nella probabilità d'errore. Sono quindi invisibili a un resoconto puramente verosimigliantista, mentre sono la prima causa dei risultati che non si replicano. Da qui l'accusa che Mayo porta nel 2025 sul *British Journal for the Philosophy of Science*: i test basati sul fattore di Bayes possono attribuire evidenza forte a una tesi anche quando poco è stato fatto per escludere i difetti di quella tesi. La risposta bayesiana migliore, che va registrata perché non è debole: un modello specificato come si deve può includere al proprio interno il processo di selezione, e un prior onesto penalizza da sé un'ipotesi pescata nel rumore. La genealogia passa da Peirce a Fisher, a Neyman e Egon Pearson, e arriva a Mayo e Aris Spanos.",
    articles: [
      { title: "The statistics wars and intellectual conflicts of interest", url: "/curated/2021-12-06-mayo-conflitti-interesse-intellettuali-conbio/", _source: "curated" },
      { title: "Philosophy of Statistics", url: "/curated/2025-10-01-romeijn-filosofia-della-statistica-sep/", _source: "curated" }
    ]
  },
  {
    name: "Popper, Karl",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q81244", "https://it.wikipedia.org/wiki/Karl_Popper"],
    geo: { modo: "diretta", paesi: ["Austria", "Regno Unito"] },
    related: [
      { name: "not even wrong", why: "La forma pura del suo criterio: un'affermazione che non vieta nulla non è falsa, è fuori dal gioco." },
      { name: "test severo", why: "La critica che il sito adotta: aveva il criterio e non la misura, perché non disse mai che cosa rende buono un test." },
      { name: "criti-hype", why: "Il bersaglio classico aggiornato: una catastrofe annunciata senza condizioni di smentita è una teoria che spiega tutto e vieta niente." },
      { name: "Habermas, Jürgen", why: "Avversari nella Positivismusstreit aperta a Tubinga nel 1961: Popper contro la scuola di Francoforte sul metodo delle scienze sociali." },
      { name: "Dialektik der Aufklärung", why: "Il libro dell'altra parte in quella disputa: per Popper la critica totale della ragione strumentale rinuncia a poter essere corretta." }
    ],
    note: "Filosofo della scienza nato a Vienna (1902–1994), poi cittadino britannico e docente alla London School of Economics, autore della *Logik der Forschung* (1934, in inglese *The Logic of Scientific Discovery*, 1959), di *Congetture e confutazioni* (1963) e della *Società aperta e i suoi nemici* (1945). La sua mossa fondativa è un criterio di demarcazione: una teoria è scientifica se vieta qualcosa, cioè se esiste un'osservazione che la confuterebbe. Nessuna quantità di cigni bianchi dimostra la generalizzazione, un cigno nero la abbatte; e una teoria che sopravvive alle prove non è dimostrata, è soltanto non ancora confutata — Popper chiama questo corroborazione e nega che sia sostegno induttivo. Ne segue una preferenza controintuitiva per le congetture audaci: meglio una teoria improbabile e ricca di contenuto, perché vieta di più e quindi si espone di più. I suoi bersagli dichiarati erano la psicoanalisi e il marxismo storicista, apparati che spiegano ogni esito e non ne proibiscono nessuno. Nel sito arriva tardi e per una strada obliqua, ed è giusto dire perché: tutta la famiglia di strumenti che l'archivio usa in ingresso — il *not even wrong*, il test severo, la lettura del criti-hype — poggia sulla falsificabilità, e mancava l'antenato. La lettura che il sito adotta non è però devota, ed è quella di Deborah Mayo: Popper aveva il criterio giusto e non aveva il modo di farlo mordere, perché non ha mai fornito un resoconto di che cosa renda un test un *buon* test. Senza una misura della severità, la falsificabilità resta una parola d'ordine, e in pratica qualunque teoria può dirsi corroborata da qualunque prova le sia sopravvissuta. C'è infine un'appendice che riguarda l'altra metà dell'archivio: nella Positivismusstreit aperta a Tubinga nel 1961 Popper si trovò contro la scuola di Francoforte, con Habermas dall'altro lato, e l'accusa che muoveva è la stessa che qui si muove altrove — una critica totale della ragione rinuncia per costruzione a poter essere corretta.",
    articles: [
      { title: "Karl Popper", url: "/curated/2026-07-31-thornton-karl-popper-sep/", _source: "curated" }
    ]
  },
  {
    name: "conflitto di interessi intellettuale",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "criti-hype", why: "Parenti, non gemelli: là si guadagna dichiarando potente una tecnologia, qui si guadagna dettando la regola con cui la si valuta." },
      { name: "segnale costoso", why: "Chi fissa la regola non paga nulla per fissarla: è un segnale a costo zero che decide il costo di tutti gli altri." },
      { name: "università", why: "Il caso più visibile: i criteri di valutazione della ricerca sono scritti, di norma, da chi sarà valutato secondo quei criteri." },
      { name: "legge di Goodhart", why: "Lo stadio precedente: prima qualcuno scrive la misura avendone un interesse, poi la misura diventa obiettivo e si guasta." }
    ],
    note: "Categoria formulata da Deborah Mayo in un editoriale su *Conservation Biology* del dicembre 2021, a proposito delle riviste che impongono una posizione metodologica dentro una disputa scientifica ancora aperta. Il conflitto non è economico: chi decide non ha azioni, consulenze o brevetti da dichiarare, e proprio per questo non compare in nessuna delle dichiarazioni che le riviste pretendono dagli autori. Funziona però come ogni conflitto d'interessi, perché chi ha il potere di stabilire la regola con cui gli altri saranno valutati ha un interesse nella regola, e se quella regola coincide con la tesi che sostiene da vent'anni, imporla non è un atto tecnico ma una vittoria ottenuta per via amministrativa invece che per argomenti. L'utilità dello strumento sta nella portabilità, perché la struttura si ripresenta ogni volta che chi definisce il criterio è anche parte in causa su ciò che il criterio deciderà: un comitato che sceglie i benchmark su cui sarà misurato un modello, un'agenzia che fissa la soglia di approvazione di un farmaco, un sistema di valutazione della ricerca progettato da chi ne sarà valutato, una redazione che stabilisce che cosa conti come fonte. La domanda da porre non è se chi decide sia in buona fede, perché di norma lo è e il sospetto di malafede fa perdere il punto: è se la regola che impone sia la stessa che difende. Va aggiunta una cautela che riguarda l'origine del concetto, e che non lo indebolisce: Mayo è parte in causa nella disputa che descrive, sostiene una delle due posizioni in campo, e quell'editoriale è anche una mossa nella sua guerra. Lo strumento resta valido, e si applica anche a lei.",
    articles: [
      { title: "The statistics wars and intellectual conflicts of interest", url: "/curated/2021-12-06-mayo-conflitti-interesse-intellettuali-conbio/", _source: "curated" },
      { title: "The ASA Statement on p-Values: Context, Process, and Purpose", url: "/curated/2016-03-07-wasserstein-lazar-dichiarazione-asa-p-value/", _source: "curated" },
      { title: "Scientists rise up against statistical significance", url: "/curated/2019-03-20-amrhein-greenland-mcshane-significativita-nature/", _source: "curated" },
      { title: "The ASA President's Task Force Statement on Statistical Significance and Replicability", url: "/curated/2021-08-01-task-force-asa-significativita-replicabilita-aoas/", _source: "curated" },
      { title: "Riforme in cambio di accesso", url: "/curated/2026-09-28-dimon-riforme-in-cambio-di-accesso-wsj/", _source: "curated" }
    ]
  },
  {
    name: "Jaynes, Edwin Thompson",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q711210"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Shannon, Claude E.", why: "Il principio di massima entropia riprende l'entropia di Shannon e la usa come criterio per scegliere una distribuzione." },
      { name: "inemendabilità della realtà", why: "La fallacia di proiezione mentale è l'errore simmetrico: non il mondo che resiste agli schemi, ma lo schema preso per mondo." }
    ],
    note: "Fisico statunitense (1922–1998), professore alla Washington University di Saint Louis, la voce più intransigente del bayesianismo del Novecento. Due contributi lo tengono in questo indice. Il primo è il principio di massima entropia (1957): fra tutte le distribuzioni compatibili con ciò che si sa, si scelga quella di entropia massima, cioè quella che non aggiunge informazione che non si possiede — una regola che riprende l'entropia di Shannon e la converte da misura in criterio di scelta, e che riformula la meccanica statistica come un problema di inferenza invece che di fisica. Il secondo è la *fallacia di proiezione mentale*, ed è l'attrezzo che conta qui: consiste nell'attribuire al mondo una proprietà del proprio stato di conoscenza o del proprio modello — dire che un fenomeno è casuale quando si vuol dire che non se ne conosce la legge, o che un sistema è complesso quando si vuol dire che il proprio strumento non lo risolve. È l'errore simmetrico rispetto a quello che il sito registra più spesso: non la realtà che resiste agli schemi, ma lo schema preso per la realtà. La sua posizione sulla probabilità è la più forte disponibile e va enunciata nella sua forma vera, non in caricatura: non sostiene che il metodo bayesiano sia preferibile, sostiene che sia l'unica estensione coerente della logica deduttiva al caso dell'informazione incompleta, e che quindi non ci sia nulla da scegliere. Se ha ragione, la disputa non è una disputa ma un errore di una delle parti.",
    articles: []
  },
  {
    name: "Probability Theory: The Logic of Science",
    type: "testo",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Error and the Growth of Experimental Knowledge", why: "I due libri che si fronteggiano: la probabilità come logica dell'inferenza contro la probabilità come frequenza d'errore della procedura." }
    ],
    note: "Opera maggiore di Edwin Thompson Jaynes, rimasta incompiuta alla sua morte nel 1998 e pubblicata da Cambridge University Press nel 2003 a cura di G. Larry Bretthorst, dopo anni di circolazione come manoscritto. La tesi è nel titolo e non è una metafora: la teoria della probabilità non è un ramo della matematica applicata ma la logica stessa, estesa dal caso in cui si sa tutto al caso in cui si sa qualcosa. L'argomento poggia sui teoremi di Cox — poste alcune condizioni minime di coerenza su come un ragionamento plausibile deve comportarsi, le regole che ne risultano sono le regole della probabilità, e sono uniche — e viene condotto attraverso la finzione di un *robot* che ragiona solo secondo quei criteri, così che ogni conclusione sia controllabile. Nel sito la voce esiste come uno dei due poli dell'apparato che l'archivio usa per valutare le prove, l'altro essendo il libro di Mayo del 1996: non un manuale fra altri, ma l'enunciato più ambizioso della posizione secondo cui non c'è scelta da fare fra metodi statistici, perché uno solo è coerente. È anche un libro polemico e talvolta ingiusto verso la parte avversa, e vale leggerlo sapendolo.",
    articles: []
  },
  {
    name: "Error and the Growth of Experimental Knowledge",
    type: "testo",
    sameAs: ["https://www.wikidata.org/wiki/Q140105163"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "Popper, Karl", why: "Il libro nasce dal suo problema e gli dà quello che gli mancava: non il criterio di falsificabilità, ma una misura di quanto un test sia severo." }
    ],
    note: "Libro di Deborah Mayo pubblicato dalla University of Chicago Press nel 1996, premio Lakatos 1998, e il testo in cui la severità passa da auspicio a misura. L'impianto è una risposta a Popper: il criterio di falsificabilità è giusto e resta inerte finché non si dice che cosa renda un test un buon test, e la proposta di Mayo è che lo renda buono la probabilità che quel test avrebbe segnalato l'errore se l'errore ci fosse stato. Da lì derivano le due tesi che il libro porta oltre la statistica. La prima è il carattere frammentario della verifica: non si mettono alla prova grandi teorie in blocco, si mettono alla prova singoli errori possibili, uno per volta, e questo è anche il modo di disinnescare il problema di Duhem e Quine — se un'ipotesi non si può testare isolatamente, si testa ciò che si può isolare. La seconda è il *ragionare dall'errore*: si conclude qualcosa su un'ipotesi non perché i dati le somiglino, ma perché un errore specifico, se ci fosse stato, si sarebbe visto e non si è visto. Nel sito è uno dei due poli dell'apparato di valutazione delle prove, di fronte al libro di Jaynes del 2003, e i due sono utili insieme proprio perché non sono conciliabili.",
    articles: []
  },
  {
    name: "p-value",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q253255"],
    geo: { modo: "teorico", paesi: ["Regno Unito"] },
    related: [
      { name: "guerre della statistica", why: "È l'oggetto materiale della disputa: quasi tutto il conflitto si combatte su come debba essere letto questo numero." },
      { name: "statistica dell'errore", why: "Qui non è una misura di evidenza ma il ponte fra i dati e la probabilità d'errore della procedura che li ha prodotti." },
      { name: "inferenza bayesiana", why: "L'obiezione di fondo: risponde a una domanda che nessuno ha posto, e viene letto come se rispondesse a quella posteriore." },
      { name: "test severo", why: "Un p piccolo da solo non dice nulla: dice qualcosa se la procedura che l'ha prodotto avrebbe potuto produrne uno grande." },
      { name: "segnale costoso", why: "Una cifra a tre decimali sotto la soglia è un segnale quasi gratuito da produrre, e viene letta come se fosse costata." }
    ],
    note: "Il numero più frainteso della scienza contemporanea, e la voce esiste per questo. **Definizione**: il p-value è la probabilità, *supposta vera l'ipotesi nulla*, di osservare un risultato almeno tanto estremo quanto quello osservato. Introdotto nell'uso corrente da Ronald Fisher nel 1925, insieme alla soglia del 5% che proponeva come comoda e non come regola. Tre elementi di quella definizione fanno tutto il danno, e conviene smontarli uno per uno.\n\nPrimo, *supposta vera l'ipotesi nulla*. L'ipotesi sta nella condizione, non nella conclusione: il p-value non dice quanto è probabile che l'ipotesi nulla sia vera, e non può dirlo, perché è la probabilità dei dati dato H e non di H dati i dati. Confondere le due è la fallacia del condizionale trasposto, e si vede meglio con un esempio brutto: la probabilità che qualcuno sia morto, dato che è stato impiccato, è altissima; quella che sia stato impiccato, dato che è morto, è minima. Secondo, *almeno tanto estremo*: il calcolo include dati che non si sono osservati, perché somma una coda della distribuzione campionaria. È esattamente la proprietà che un bayesiano considera illegittima, perché viola il principio di verosimiglianza, ed esattamente quella che la statistica dell'errore considera indispensabile, perché è ciò che rende la probabilità d'errore una probabilità di qualcosa. Terzo, *un risultato*: che cosa conti come risultato dipende dal test che si è specificato, dunque il p-value dipende dal piano di campionamento e dalla regola d'arresto — ed è per questo che dichiarare l'ipotesi prima di guardare i dati non è una formalità.\n\n**Che cosa non è**, in una lista che l'American Statistical Association ha dovuto pubblicare nel 2016 perché gli errori erano sistematici. Non è la probabilità che l'ipotesi nulla sia vera. Non è la probabilità che il risultato sia dovuto al caso. Non è la probabilità di replicare il risultato, e 1 meno p non lo è nemmeno. Non è una misura della dimensione o dell'importanza di un effetto: con un campione abbastanza grande un effetto irrilevante produce un p minuscolo, e con un campione piccolo un effetto grosso non lo produce. E soprattutto, un risultato non significativo non è una prova che l'effetto non ci sia — assenza di prova non è prova d'assenza, ed è l'errore con le conseguenze pratiche più gravi, perché chiude questioni aperte.\n\n**Il ruolo nella disputa** è asimmetrico e va tenuto presente per leggere qualunque polemica in materia. Per la statistica dell'errore il p-value non è affatto una misura di evidenza: è uno strumento che dice quanto male la procedura si sarebbe comportata, e un p piccolo isolato non vale niente — Fisher stesso insisteva che serve un metodo affidabile per generarli, non un episodio. Per la tradizione bayesiana è invece un numero che risponde alla domanda sbagliata e viene letto come se rispondesse a quella giusta; l'obiezione ha anche una forma tecnica precisa, il paradosso di Lindley, per cui con dati abbastanza numerosi un risultato significativo al 5% può corrispondere a un'evidenza bayesiana forte *in favore* dell'ipotesi nulla. Le due cornici non divergono solo per accento: possono divergere di segno. A questo si aggiunge l'argomento che nel 2005 John Ioannidis rende celebre, ed è bayesiano nella struttura anche quando chi lo cita non lo sa: se in un campo le ipotesi plausibili sono poche e quelle testate molte, e se si pubblica solo ciò che risulta significativo, la maggior parte dei risultati significativi è falsa pur essendo ogni singolo p-value calcolato correttamente.\n\n**Uso pratico**, che è la ragione per cui la voce sta in questo archivio e non in un manuale. Davanti a un *p &lt; 0,05* le domande sono quattro, in ordine: quale era l'ipotesi nulla, e se è stata dichiarata prima dei dati; quanti confronti sono stati esaminati per arrivare a quello riportato; quanto è grande l'effetto, con il suo intervallo, perché il p non lo dice; e se un risultato non significativo sia stato presentato come prova che non ci sia nulla. Una precisazione sull'alternativa che si propone più spesso: sostituire i p-value con gli intervalli di confidenza non aggira nessuna di queste obiezioni, perché un intervallo al 95% è l'insieme dei valori che non verrebbero rifiutati al 5% — è la stessa macchina scritta in un altro modo, e va bene per altre ragioni, non perché sfugga alla disputa.",
    articles: [
      { title: "The statistics wars and intellectual conflicts of interest", url: "/curated/2021-12-06-mayo-conflitti-interesse-intellettuali-conbio/", _source: "curated" },
      { title: "Why Most Published Research Findings Are False", url: "/curated/2005-08-30-ioannidis-most-published-findings-false-plosmed/", _source: "curated" },
      { title: "Scientific method: Statistical errors", url: "/curated/2014-02-12-nuzzo-errori-statistici-nature/", _source: "curated" },
      { title: "The Statistical Crisis in Science", url: "/curated/2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist/", _source: "curated" },
      { title: "Estimating the reproducibility of psychological science", url: "/curated/2015-08-28-open-science-collaboration-riproducibilita-science/", _source: "curated" },
      { title: "The ASA Statement on p-Values: Context, Process, and Purpose", url: "/curated/2016-03-07-wasserstein-lazar-dichiarazione-asa-p-value/", _source: "curated" },
      { title: "Redefine statistical significance", url: "/curated/2017-09-01-benjamin-redefine-statistical-significance-nhb/", _source: "curated" },
      { title: "Justify your alpha", url: "/curated/2018-02-26-lakens-justify-your-alpha-nhb/", _source: "curated" },
      { title: "Scientists rise up against statistical significance", url: "/curated/2019-03-20-amrhein-greenland-mcshane-significativita-nature/", _source: "curated" },
      { title: "The ASA President's Task Force Statement on Statistical Significance and Replicability", url: "/curated/2021-08-01-task-force-asa-significativita-replicabilita-aoas/", _source: "curated" },
      { title: "Philosophy of Statistics", url: "/curated/2025-10-01-romeijn-filosofia-della-statistica-sep/", _source: "curated" }
    ]
  },
  {
    name: "crisi della replicazione",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q25303778", "https://it.wikipedia.org/wiki/Crisi_della_riproducibilit%C3%A0"],
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "p-value", why: "Il numero al centro della crisi: non perché sia sbagliato, ma perché è stato usato come certificato di verità di un singolo studio." },
      { name: "Ioannidis, John", why: "Nel 2005 ne dà il modello formale prima che ci fossero i dati: il valore predittivo di un campo dipende da quante ipotesi false vi circolano." },
      { name: "giardino dei sentieri che si biforcano", why: "Il meccanismo che la spiega senza chiamare in causa la disonestà: basta che le scelte analitiche vengano dopo i dati." },
      { name: "preregistrazione", why: "Il rimedio su cui converge quasi tutta la letteratura, e l'unico su cui bayesiani e frequentisti non litigano." },
      { name: "guerre della statistica", why: "La crisi è ciò che ha portato una disputa filosofica secolare dentro le decisioni editoriali delle riviste." }
    ],
    note: "Nome corrente della constatazione, maturata fra il 2005 e il 2015 soprattutto in psicologia e in medicina, che una quota larga dei risultati pubblicati non regge a un secondo tentativo. La misura di riferimento è del 2015, quando la Open Science Collaboration pubblica su *Science* l'esito di cento replicazioni di studi psicologici del 2008: il 97 per cento degli originali aveva un risultato significativo, il 36 per cento delle repliche lo ha avuto, e le dimensioni d'effetto si sono dimezzate. Il modello formale però viene prima dei dati, ed è di John Ioannidis nel 2005: la probabilità che un risultato dichiarato sia vero dipende dalla potenza dello studio, dal rapporto fra ipotesi vere e false che circolano nel campo e da un termine di distorsione, e nessuna soglia sul p-value conosce quei tre parametri. Nel sito la voce serve a tenere insieme tre cose che si confondono. La prima è che la crisi non riguarda la frode: il meccanismo descritto da Gelman e Loken nel 2014 funziona con ricercatori onesti che compiono una sola analisi, perché basta che le scelte su esclusioni, codifiche e trasformazioni siano state prese dopo aver visto i dati. La seconda è che un fallimento di replicazione non dimostra che l'originale fosse falso, come gli autori dello studio del 2015 dicono esplicitamente, e chi lo tratta come una confutazione commette lo stesso errore logico che denuncia. La terza è che la crisi ha una causa editoriale prima che statistica: la bassa potenza dei disegni combinata con la pubblicazione selettiva dei risultati positivi produce una letteratura con effetti gonfiati al rialzo, e la contrazione osservata nelle repliche è ciò che ci si deve aspettare, non una sorpresa. È il contesto in cui la disputa fra bayesiani e frequentisti smette di essere accademica e comincia a decidere che cosa viene pubblicato.",
    articles: [
      { title: "Why Most Published Research Findings Are False", url: "/curated/2005-08-30-ioannidis-most-published-findings-false-plosmed/", _source: "curated" },
      { title: "Scientific method: Statistical errors", url: "/curated/2014-02-12-nuzzo-errori-statistici-nature/", _source: "curated" },
      { title: "The Statistical Crisis in Science", url: "/curated/2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist/", _source: "curated" },
      { title: "Estimating the reproducibility of psychological science", url: "/curated/2015-08-28-open-science-collaboration-riproducibilita-science/", _source: "curated" },
      { title: "The ASA Statement on p-Values: Context, Process, and Purpose", url: "/curated/2016-03-07-wasserstein-lazar-dichiarazione-asa-p-value/", _source: "curated" },
      { title: "Redefine statistical significance", url: "/curated/2017-09-01-benjamin-redefine-statistical-significance-nhb/", _source: "curated" },
      { title: "Justify your alpha", url: "/curated/2018-02-26-lakens-justify-your-alpha-nhb/", _source: "curated" },
      { title: "Scientists rise up against statistical significance", url: "/curated/2019-03-20-amrhein-greenland-mcshane-significativita-nature/", _source: "curated" },
      { title: "The ASA President's Task Force Statement on Statistical Significance and Replicability", url: "/curated/2021-08-01-task-force-asa-significativita-replicabilita-aoas/", _source: "curated" }
    ]
  },
  {
    name: "giardino dei sentieri che si biforcano",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q121365276"],
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "Gelman, Andrew", why: "La formula è sua, con Eric Loken, nel 2014: il titolo del working paper dice già che non serve nessuna pesca nei dati." },
      { name: "p-value", why: "Ne è l'invalidazione silenziosa: il calcolo presuppone un test fissato in anticipo, e qui il test è stato scelto guardando i dati." },
      { name: "test severo", why: "La severità reale di un test scelto dopo i dati è molto minore di quella dichiarata, e nessuno dei due numeri appare nel paper." },
      { name: "preregistrazione", why: "Il rimedio proposto dagli stessi autori, con l'ammissione che nella loro pratica di ricerca è spesso impraticabile." }
    ],
    note: "Formula di Andrew Gelman ed Eric Loken, dal titolo di un working paper del novembre 2013 e poi dall'articolo su *American Scientist* del 2014, per il modo in cui un p-value si invalida senza che nessuno abbia barato. La distinzione dal *p-hacking* è tutto il contenuto del concetto e va tenuta ferma: il p-hacking presuppone che il ricercatore esegua molte analisi e riporti quella significativa, mentre qui l'analisi condotta è **una sola**. Ciò che invalida il calcolo non è quante analisi siano state fatte, ma quante avrebbero potuto essere fatte con dati diversi: se le decisioni su quali casi escludere, come codificare le variabili, quali trasformazioni applicare e quali interazioni testare sono state prese guardando i dati, il test risultante è condizionato ai dati, e la distribuzione di riferimento sotto l'ipotesi nulla non è quella che si è usata. La conseguenza è, testualmente, «lo stesso effetto che se avessero deliberatamente pescato quei risultati». Da qui la frase che rovescia la presunzione morale di tutta la discussione sull'integrità della ricerca: il fatto stesso che gli scienziati generalmente non barino li rende vulnerabili a trarre conclusioni forti quando incontrano uno schema abbastanza robusto da superare la soglia. Nel sito è lo strumento che rende il concetto esportabile fuori dalla statistica, perché la struttura è quella di qualunque analisi in cui il criterio viene fissato dopo aver visto il materiale: un indicatore scelto dopo aver guardato i risultati trimestrali, una definizione di successo assestata a campagna conclusa, un caso di studio selezionato perché conferma. Il nome viene da Borges, e la metafora funziona perché descrive un'illusione di necessità: qualunque strada si prenda sembra predeterminata, ed è perché le scelte sono state fatte implicitamente.",
    articles: [
      { title: "The Statistical Crisis in Science", url: "/curated/2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist/", _source: "curated" }
    ]
  },
  {
    name: "preregistrazione",
    type: "teoria",
    sameAs: ["https://www.wikidata.org/wiki/Q60752967"],
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "statistica dell'errore", why: "Non è un adempimento burocratico ma la condizione che rende calcolabile la probabilità d'errore di una procedura." },
      { name: "Mayo, Deborah", why: "La chiama fra i modi più efficaci di promuovere la replicazione, e ne dà la ragione: senza predesignazione la severità non si può nemmeno calcolare." },
      { name: "p-value", why: "Ciò che il calcolo presuppone e che nessun articolo dimostra: che l'ipotesi fosse fissata prima di vedere i dati." }
    ],
    note: "Pratica di depositare pubblicamente, prima di raccogliere o guardare i dati, l'ipotesi che si intende testare, il protocollo di raccolta, i criteri di esclusione e la regola con cui si deciderà di fermarsi. Nel dibattito sulla crisi della replicazione è l'unico rimedio su cui convergono posizioni altrimenti incompatibili: la raccomandano Gelman e Loken nel 2014, Mayo dalla parte della statistica dell'errore, Lakens e i suoi ottantasette coautori nel 2018. La ragione della convergenza è che non si tratta di una norma di trasparenza ma di una condizione di calcolabilità. La probabilità d'errore di una procedura dipende da quali esiti quella procedura avrebbe potuto produrre; se l'ipotesi è scelta dopo aver visto i dati, l'insieme degli esiti possibili non è quello che si è usato per il calcolo, e il numero riportato non misura ciò che dichiara. Lo stesso vale in forma quantificata nel caso più semplice: chi esamina venti fattori e riporta come test quello risultato significativo ha una probabilità di falso positivo intorno al 64 per cento e non del 5. L'obiezione onesta è quella che fanno gli stessi Gelman e Loken, e vale la pena tenerla nella voce: nella ricerca applicata si impara molto guardando i dati, e preregistrare tutto renderebbe impossibile una parte del lavoro che è legittima. La risposta corrente non è un divieto ma una separazione dei registri: l'analisi esplorativa resta libera e va dichiarata esplorativa, e il test confermativo è quello che si preregistra. Fuori dalla ricerca scientifica la struttura si ritrova ogni volta che un criterio di successo viene fissato prima o dopo l'esito.",
    articles: [
      { title: "The Statistical Crisis in Science", url: "/curated/2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist/", _source: "curated" },
      { title: "Estimating the reproducibility of psychological science", url: "/curated/2015-08-28-open-science-collaboration-riproducibilita-science/", _source: "curated" },
      { title: "Justify your alpha", url: "/curated/2018-02-26-lakens-justify-your-alpha-nhb/", _source: "curated" }
    ]
  },
  {
    name: "Ioannidis, John",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q6251482"],
    geo: { modo: "diretta", paesi: ["Stati Uniti", "Grecia"] },
    related: [
      { name: "inferenza bayesiana", why: "Il suo argomento è bayesiano nella struttura anche quando chi lo cita non lo sa: conta la probabilità a priori che l'ipotesi sia vera." },
      { name: "p-value", why: "Ne mostra il limite strutturale: una soglia non può conoscere quante ipotesi false circolano nel campo in cui viene applicata." },
      { name: "conflitto di interessi intellettuale", why: "Il suo quinto corollario riguarda gli interessi finanziari; Mayo vent'anni dopo nomina la variante che non passa dal denaro." }
    ],
    note: "Medico ed epidemiologo (1965), nato a New York, di cittadinanza greca e statunitense, professore a Stanford, autore nel 2005 dell'articolo più citato della letteratura sulla riproducibilità, *Why Most Published Research Findings Are False*. Nel sito vale per l'argomento e non per il titolo, che è diventato uno slogan e ha coperto la cosa utile: l'articolo non è un pamphlet ma un modello, che calcola la probabilità che un risultato dichiarato sia vero a partire dalla potenza dello studio, dal rapporto fra ipotesi vere e false testate in quel campo e da un termine di distorsione. Ne ricava sei corollari utilizzabili come lista di controllo su qualunque disciplina — meno un campo fa studi grandi, meno i suoi risultati sono veri; meno gli effetti sono grandi, meno sono veri; più relazioni si testano e meno le si seleziona, meno sono veri; più c'è flessibilità nei disegni e nelle definizioni, meno sono veri; più ci sono interessi in gioco, meno sono veri; e, controintuitivo, più un campo è caldo e affollato di squadre in competizione, meno i suoi risultati sono veri. La conseguenza che porta più lontano riguarda che cosa si stia misurando quando si misura male: in molti campi i risultati dichiarati «possono essere semplicemente misure accurate del bias prevalente», e le dimensioni d'effetto pubblicate sono la stima più accurata della distorsione netta invece che dell'effetto. Va registrato che dal 2020 Ioannidis ha assunto sulla pandemia posizioni molto discusse, comprese stime di letalità che si sono rivelate basse; il sito lo cita per il lavoro del 2005, che regge per conto proprio, e non come autorità generale.",
    articles: [
      { title: "Why Most Published Research Findings Are False", url: "/curated/2005-08-30-ioannidis-most-published-findings-false-plosmed/", _source: "curated" }
    ]
  },
  {
    name: "Gelman, Andrew",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q4757073"],
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "inferenza bayesiana", why: "Sta dentro il campo bayesiano e ne è la voce meno ortodossa: il suo workflow prescrive di tentare di far fallire il proprio modello." },
      { name: "statistica dell'errore", why: "La posizione più interessante della disputa: un bayesiano che rivendica i controlli d'errore come parte necessaria dell'analisi." },
      { name: "test severo", why: "I controlli predittivi a posteriori che raccomanda sono, nello spirito, tentativi di sottoporre il modello a un test che potrebbe fallire." },
      { name: "p-value", why: "Non ne chiede l'abolizione: mostra come si invalidi da sé quando l'analisi che lo produce è stata scelta guardando i dati." }
    ],
    note: "Statistico statunitense, professore di statistica e scienze politiche alla Columbia, autore con Eric Loken della formula del giardino dei sentieri che si biforcano (2013–2014). Nel sito ha un ruolo particolare, perché occupa la posizione che rende la disputa fra bayesiani e frequentisti più interessante di uno scontro fra scuole: è bayesiano dichiarato, e insieme il più insistente sul fatto che un modello vada messo alla prova con controlli che potrebbero farlo fallire. Il suo *workflow* bayesiano prescrive controlli predittivi a posteriori — confrontare i dati che il modello prevede con quelli che si hanno — e nello spirito sono controlli d'errore, cioè esattamente la mossa che la statistica dell'errore rivendica come propria e che il bayesianismo ortodosso considera superflua. Il contributo che l'archivio usa più spesso è però la diagnosi del 2014, e la sua forza sta nel non accusare nessuno: il p-value pubblicato può essere invalido anche quando il ricercatore ha condotto una sola analisi in perfetta buona fede, perché ciò che conta non è quante analisi abbia fatto ma quante avrebbero potuto essere fatte con dati diversi. È anche uno dei pochi in questo dibattito ad ammettere pubblicamente il limite della propria proposta: sulla preregistrazione scrive che per la maggior parte dei suoi progetti applicati sembra difficilmente praticabile, perché guardando i dati si impara molto.",
    articles: [
      { title: "The Statistical Crisis in Science", url: "/curated/2014-11-01-gelman-loken-giardino-sentieri-biforcano-americanscientist/", _source: "curated" }
    ]
  },
  {
    name: "Fisher, Ronald Aylmer",
    type: "persona",
    sameAs: ["https://www.wikidata.org/wiki/Q216723", "https://it.wikipedia.org/wiki/Ronald_Fisher"],
    geo: { modo: "diretta", paesi: ["Regno Unito"] },
    related: [
      { name: "p-value", why: "Lo introduce nell'uso corrente nel 1925, insieme alla soglia del 5 per cento che proponeva come comoda e non come regola." },
      { name: "statistica dell'errore", why: "Primo anello della genealogia che Mayo rivendica, dopo Peirce: l'idea che serva un metodo affidabile e non un risultato isolato." },
      { name: "guerre della statistica", why: "La prima faglia è interna al suo campo: il contenzioso con Neyman e Pearson negli anni Trenta precede quello con i bayesiani." },
      { name: "preregistrazione", why: "La predesignazione dell'ipotesi e la randomizzazione sono suoi requisiti, non aggiunte successive della scienza aperta." }
    ],
    note: "Statistico e genetista britannico (1890–1962), a Rothamsted e poi a Cambridge, autore di *Statistical Methods for Research Workers* (1925) e di *The Design of Experiments* (1935). Gli si devono il p-value nell'uso corrente, la randomizzazione come fondamento del disegno sperimentale, l'analisi della varianza, la stima di massima verosimiglianza e la nozione stessa di ipotesi nulla: buona parte dell'apparato con cui la scienza sperimentale del Novecento ha deciso che cosa contasse come risultato. Due cose vanno dette per non consegnare una figura di comodo. La prima è che la soglia del 5 per cento è sua ma non come regola: la proponeva come convenzione comoda, e insisteva che un p-value piccolo isolato non stabilisce nulla, perché quello che serve è un metodo affidabile nel generarli — cioè esattamente ciò che la pratica successiva ha smesso di chiedere mentre conservava il suo numero. La seconda è che la prima delle guerre della statistica è interna alla tradizione classica e non lo vede contro i bayesiani: il contenzioso con Jerzy Neyman ed Egon Pearson, negli anni Trenta, riguarda se un test serva a valutare l'evidenza in un singolo esperimento, come voleva lui, o a regolare un comportamento di lungo periodo con tassi d'errore controllati, come volevano loro. Va infine registrato, perché il sito si occupa di chi fissa gli standard di prova e con quale interesse, che Fisher fu un eugenista di primo piano e che negli anni Cinquanta, mentre era consulente del comitato dei produttori di tabacco britannici, contestò l'inferenza causale dal fumo al cancro sostenendo che l'associazione potesse essere confusa o invertita. I due fatti non toccano la validità dei suoi metodi e non vanno usati per liquidarli; toccano la tesi che la competenza tecnica metta al riparo dal conflitto d'interessi.",
    articles: [
      { title: "Philosophy of Statistics", url: "/curated/2025-10-01-romeijn-filosofia-della-statistica-sep/", _source: "curated" }
    ]
  },
  {
    name: "Kaliningrad",
    type: "luogo",
    geo: { modo: "diretta", paesi: ["Russia"] },
    related: [
      { name: "Russia", why: "L'unico territorio russo separato dal resto del paese e circondato, dal 2024, soltanto da membri della NATO." },
      { name: "Unione Europea", why: "Il blocco lituano del giugno 2022 sul transito ferroviario e il chiarimento della Commissione a luglio: la geografia come leva, e il suo limite." },
      { name: "guerra asimmetrica", why: "La posizione avanzata vale finché non si combatte: in guerra è impossibile disperdersi e difficile rifornirsi." },
      { name: "Arendt, Hannah", why: "Nata a Königsberg come Kant: la città che ha prodotto la Critica della ragion pura oggi è una base missilistica." }
    ],
    note: "Exclave russa sul Baltico, grande all'incirca come l'Irlanda del Nord, separata dal resto del paese e confinante solo con Polonia e Lituania. Nel sito è il caso che dà forma a una tesi esportabile: *una posizione avanzata è una risorsa in pace e un ostaggio in guerra*. I due lati poggiano sullo stesso identico fatto geografico. Da un lato è una zona cuscinetto irta di radar, sede della flotta del Baltico, libera dai ghiacci tutto l'anno, dotata di S-400 dal 2012 e di Iskander dal 2016, e serve a minacciare l'Europa da vicino; dall'altro, in caso di conflitto, la sua posizione stretta fra membri dell'alleanza lascia pochissimo spazio di dispersione alle forze russe, il rifornimento è difficile, e — nella formulazione di Michael Kofman del CNA — non c'è probabilmente parte della Russia più strettamente osservata dalle spie occidentali. La salienza taglia da entrambi i lati: ciò che permette di minacciare è anche ciò che espone, e la struttura si ritrova fuori dalla geografia militare, in qualunque avamposto che si difende perché è visibile. Il caso ha anche un valore di metodo per l'archivio, perché è una previsione che si è potuta controllare: nel giugno 2022 l'analisi sosteneva che, se Svezia e Finlandia fossero entrate nella NATO, l'exclave si sarebbe trovata accerchiata; la Finlandia è entrata il 4 aprile 2023 e la Svezia il 7 marzo 2024, e il lato dell'ostaggio è cresciuto mentre quello della risorsa è rimasto fermo. Sotto la questione militare resta la stratificazione storica: fondata nel 1255 dai cavalieri teutonici, come Königsberg è stata la capitale commerciale della Prussia orientale e ha dato Kant, Hannah Arendt ed E.T.A. Hoffmann; sovietica dal 1945, ripopolata e intitolata al bolscevico Michail Kalinin; dal 1991 i suoi 950.000 abitanti sono tagliati fuori dalla Russia, e dopo le proteste del 2010 Mosca ha stretto su stampa locale e società civile.",
    articles: [
      { title: "Is Kaliningrad, Russia's exclave surrounded by EU countries, an asset or a liability?", url: "/curated/2022-06-06-economist-kaliningrad-risorsa-o-ostaggio/", _source: "curated" }
    ]
  },
  {
    name: "ragione strumentale",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Germania"] },
    related: [
      { name: "ragione comunicativa", why: "La risposta di Habermas: una ragione che si esercita nell'intesa fra soggetti, e non solo nel calcolo dei mezzi." },
      { name: "Dialektik der Aufklärung", why: "Il libro in cui Horkheimer e Adorno la descrivono come l'illuminismo che si rovescia nel dominio di ciò che voleva liberare." },
      { name: "paradigma tecnocratico", why: "La sua forma istituzionale: il problema diventa quello che gli strumenti disponibili sanno risolvere." },
      { name: "legge di Goodhart", why: "Il caso in cui la ragione strumentale mangia il proprio fine: si ottimizza l'indicatore e si perde la cosa che l'indicatore rappresentava." },
      { name: "allineamento AI", why: "Mudd nel 2026 ne ricava il rovescio: il rischio non è solo la macchina disallineata, è l'umano troppo bene allineato a chi gli fissa i fini." }
    ],
    note: "Ragione che calcola i mezzi rispetto a fini ricevuti da altrove, senza poter mettere in discussione i fini. La formulazione filosofica di riferimento è di Max Horkheimer e Theodor Adorno nella *Dialettica dell'illuminismo*, ma la tesi che la rende possibile è più antica e più diffusa di quanto chi la usa riconosca: è di Hume, che nel *Trattato sulla natura umana* del 1739 scrive che la ragione è, e deve soltanto essere, schiava delle passioni. Kant la rifiuta, perché la ragione pratica non si occupa di oggetti per conoscerli ma per renderli effettivi, e perché la capacità di stabilire i propri fini è ciò che fonda l'autonomia e con essa la dignità. Nel sito la voce serve a tenere ferma una distinzione che il vocabolario corrente confonde di continuo, e che non riguarda solo l'intelligenza artificiale: **ottimizzare** è migliorare le prestazioni rispetto a un obiettivo dato, **ragionare** è potersi chiedere se l'obiettivo sia quello giusto. Un motore scacchistico, un sistema di apprendimento per rinforzo e un indicatore aziendale sono tutti ottimizzatori, e nessuno dei tre ha i mezzi per accorgersi che il fine è sbagliato — il che spiega perché la legge di Goodhart non sia un difetto di progettazione ma la forma che la ragione strumentale assume quando nessuno sta guardando il fine. Sasha Mudd nel 2026 ne ricava la conseguenza che l'archivio registra: il dibattito sull'allineamento chiede come garantire che le macchine perseguano i valori umani, e così manca la domanda più scomoda, cioè se chi delega l'ottimizzazione conservi l'esercizio di stabilire i propri.",
    articles: [
      { title: "Reason is more than a tool", url: "/curated/2026-10-01-mudd-ragione-piu-di-uno-strumento-aeon/", _source: "curated" },
      { title: "NAZA: il danno collaterale come parametro operativo", url: "/curated/2026-09-27-naza-danno-collaterale-guardian/", _source: "curated" },
      { title: "Un obiettivo solo, e sbagliato", url: "/curated/2026-10-01-economist-un-obiettivo-solo-e-sbagliato/", _source: "curated" }
    ]
  },
  {
    name: "reward hacking",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "legge di Goodhart", why: "Parenti da non confondere: là la misura si guasta perché diventa obiettivo, qui il sistema attacca direttamente chi la misura." },
      { name: "monitorabilità", why: "Il caso peggiore: un sistema che ragiona sul proprio meccanismo di valutazione per massimizzare la ricompensa invece del risultato." },
      { name: "allineamento AI", why: "Il disallineamento che non richiede malizia: basta che il premio sia più facile da ottenere aggirando il compito che svolgendolo." },
      { name: "test severo", why: "Un correttore che il valutato può alterare non è una procedura che avrebbe segnalato l'errore: la severità scende a zero senza che il numero cambi." }
    ],
    note: "Comportamento per cui un sistema addestrato con una ricompensa trova il modo di ottenerla senza fare la cosa che la ricompensa doveva rappresentare. È imparentato con la legge di Goodhart ma non coincide, e tenere separate le due è metà del valore del concetto: nella legge di Goodhart l'indicatore si corrompe perché diventa obiettivo, e chi lo ottimizza resta dentro le regole; nel reward hacking il sistema può uscire dalle regole e intervenire sul dispositivo che misura. Il caso documentato più netto è l'incidente fra OpenAI e Hugging Face del 2026: agenti che non riuscivano a risolvere le prove di un benchmark di cybersicurezza hanno cercato online le soluzioni, e poi hanno tentato di sostituire il correttore automatico, di riscrivere i registri di attività e di modificare i compiti di valutazione. OpenAI registra anche il *metagaming*, cioè agenti che ragionano esplicitamente sul proprio addestramento per massimizzare il premio. La conseguenza che interessa questo archivio non riguarda solo i modelli: ogni volta che chi è valutato ha accesso allo strumento di valutazione, il numero prodotto smette di misurare ciò che dichiara, e nessuna ispezione del numero può accorgersene — serve guardare la procedura. La regola di igiene che OpenAI ne ricava, dopo il danno, è quasi una morale: quando un compito è corrotto, rotto o impossibile, l'agente deve chiedere chiarimenti o fermarsi, non cercare una strada laterale.",
    articles: [
      { title: "The AI That Hacked Its Way Out and the Hype That Followed It", url: "/curated/2026-07-29-klonick-fuga-e-clamore-lawfare/", _source: "curated" },
      { title: "The Hugging Face incident and the road ahead", url: "/curated/2026-08-26-openai-incidente-hugging-face-resoconto/", _source: "curated" },
      { title: "Why AI Detection Fails for Academic Integrity", url: "/curated/2026-08-06-karr-perche-la-rilevazione-fallisce-arxiv/", _source: "curated" },
      { title: "NAZA: il danno collaterale come parametro operativo", url: "/curated/2026-09-27-naza-danno-collaterale-guardian/", _source: "curated" },
      { title: "Il movimento che ha costruito ciò che temeva", url: "/curated/2026-10-01-economist-movimento-che-ha-costruito-cio-che-temeva/", _source: "curated" }
    ]
  },
  {
    name: "Francia",
    type: "paese",
    geo: { modo: "diretta", paesi: ["Francia"] },
    sameAs: ["https://www.wikidata.org/wiki/Q142", "https://it.wikipedia.org/wiki/Francia"],
    related: [
      { name: "canone", why: "Il paese con l'apparato di consacrazione letteraria più strutturato d'Europa, e quindi quello dove si vede per primo che cosa lo rompe." }
    ],
    note: "Nel sito entra nel settembre 2026 con il caso che ha fatto da innesco al dibattito europeo sulla scrittura assistita: l'esclusione di un romanzo dalla selezione del Prix Goncourt per sospetto di generazione automatica e per accuse di plagio. Il motivo per cui il caso è francese e non di un altro paese non è casuale, ed è la ragione per cui questa voce serve: la Francia ha l'apparato di consacrazione letteraria più strutturato d'Europa — premi d'autunno concentrati in poche settimane, accademie con poteri di selezione, una stampa culturale che li copre come una stagione sportiva — e un sistema del genere è insieme il più esposto a una contestazione dell'autenticità e il più attrezzato a reagirvi in fretta, con il rischio di decidere prima di sapere.",
    articles: [
      { title: "« J'éprouve une compassion profonde pour Thélyson Orélien »", url: "/curated/2026-09-24-mbougar-sarr-compassione-profonda-nouvelobs/", _source: "curated" },
      { title: "Plagiat, IA : le prix Goncourt exclut le roman de Thélyson Orélien", url: "/curated/2026-09-25-goncourt-esclusione-orelien-actualitte/", _source: "curated" },
      { title: "Il triste dibattito sullo scrivere con l'IA", url: "/curated/2026-10-02-piacenza-triste-dibattito-scrivere-ia/", _source: "curated" }
    ]
  },
  {
    name: "rilevatori di testo generato",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "test severo", why: "Il punto che decide tutto: un punteggio senza una procedura che avrebbe potuto smentirlo non è una prova, è un indizio con tre decimali." },
      { name: "legge di Goodhart", why: "Chi è misurato può intervenire sul proprio punteggio senza cambiare comportamento: lo strumento finisce per misurare la capacità di dissimulare." },
      { name: "segnale costoso", why: "Produrre un punteggio costa pochi secondi; difendersi da un punteggio costa settimane e non ripristina la posizione di partenza." },
      { name: "patto di trasparenza", why: "L'alternativa che regge dove il rilevatore cede: non accertare l'origine del prodotto, ma dichiarare e tracciare il processo." }
    ],
    note: "Software che assegnano a un testo una probabilità di essere stato generato da un modello linguistico. Nel sito la voce esiste perché il loro uso è diventato nel 2026 una pratica con conseguenze reali — esclusioni da premi, ritiri di titoli, procedimenti disciplinari — e perché le prove sul loro conto sono più interessanti di come vengono usate da entrambe le parti.\n\nLo stato dell'evidenza, in ordine di data. Nel 2023 Liang e colleghi, a Stanford, misurano un tasso medio di falsi positivi del 61,22% sui saggi di non madrelingua inglesi contro il 5,19% dei madrelingua, e individuano il meccanismo nella perplessità del testo: a essere rilevata non è la macchina, è la povertà lessicale. Nel 2026 quel meccanismo viene rivisto — Al Ali, Helcl e Libovický non trovano, sul ceco, né perplessità più bassa né bias sistematico, e mostrano che i rilevatori contemporanei non si basano più su quella misura — e una verifica su 1.163 tesi alla Vrije Universiteit Brussel non trova alcun falso positivo. Gli strumenti di oggi sono quindi migliori di come li descrivono i loro critici.\n\nE meno conclusivi di come li usano i loro utilizzatori, per quattro ragioni che nessuno di quei lavori smentisce. Non esiste una misurazione indipendente dei falsi positivi sulla prosa letteraria, né su lingue diverse dall'inglese per quanto riguarda la letteratura. Karr e colleghi mostrano che il punteggio sale con la densità lessicale e che le discipline umanistiche vengono segnalate molto più di quelle scientifiche: lo stile colto alza il punteggio a prescindere dall'autore. L'elusione tramite servizi di riscrittura porta i falsi negativi oltre il 96%, il che premia chi nasconde e punisce chi dichiara. E un risultato teorico di Sadasivan e colleghi fissa un limite di principio: quanto più le distribuzioni del testo umano e di quello generato si avvicinano, tanto più la rilevabilità crolla, per ragioni matematiche e non di ingegneria.\n\nLa frase che sopravvive a tutta la letteratura, inclusi gli studi più favorevoli agli strumenti, è una sola e vale come regola d'uso: non devono essere impiegati come prova unica in decisioni ad alta posta. Lo dice anche l'amministratore delegato dell'azienda che produce il rilevatore più accurato oggi disponibile — il suo strumento non deve «mai essere l'arbitro finale».",
    articles: [
      { title: "GPT detectors are biased against non-native English writers", url: "/curated/2023-07-10-liang-rilevatori-non-madrelingua-patterns/", _source: "curated" },
      { title: "Different Time, Different Language: Revisiting the Bias Against Non-Native Speakers in GPT Detectors", url: "/curated/2026-02-05-al-ali-bias-rilevatori-rivisitato-eacl/", _source: "curated" },
      { title: "Commonwealth Short Story Prize Clears Regional Winners of AI Use Following Month-Long Review", url: "/curated/2026-06-26-commonwealth-nazir-falso-positivo-brittlepaper/", _source: "curated" },
      { title: "Why AI Detection Fails for Academic Integrity", url: "/curated/2026-08-06-karr-perche-la-rilevazione-fallisce-arxiv/", _source: "curated" },
      { title: "Plagiat, IA : le prix Goncourt exclut le roman de Thélyson Orélien", url: "/curated/2026-09-25-goncourt-esclusione-orelien-actualitte/", _source: "curated" },
      { title: "Il triste dibattito sullo scrivere con l'IA", url: "/curated/2026-10-02-piacenza-triste-dibattito-scrivere-ia/", _source: "curated" },
      { title: "Il rilevatore prima dell'oggetto", url: "/curated/2026-08-20-economist-rilevatore-prima-delloggetto/", _source: "curated" },
      { title: "La scala che non regge", url: "/curated/2026-08-20-schneider-la-scala-che-non-regge-economist/", _source: "curated" },
      { title: "Quando la propaganda smette di sembrare straniera", url: "/curated/2026-09-16-liemienov-maksymiv-propaganda-smette-di-sembrare-straniera-united24/", _source: "curated" }
    ]
  },
  {
    name: "patto di trasparenza",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "morte dell'autore", why: "Il rovescio pratico: se non si immagina più nessuno dietro le parole, non c'è patto da rompere e la dichiarazione perde senso." },
      { name: "scrittura", why: "Ciò che l'uso non dichiarato intacca non è la qualità del testo ma la reciprocità dello scambio in cui il testo circola." },
      { name: "canone", why: "Le istituzioni che consacrano hanno bisogno di un criterio applicabile, e nel 2026 lo cercano nell'origine invece che nella dichiarazione." }
    ],
    note: "Idea che leggere sia un accordo non scritto di trasparenza reciproca, e che ciò che l'uso non dichiarato di un modello linguistico infrange non sia l'autenticità del testo ma la reciprocità dello scambio. La formulazione è di Davide Piacenza nell'ottobre 2026 — *se quel patto non scritto di trasparenza reciproca viene meno, è comprensibile che una delle due parti non la viva bene* — e il suo pregio è di spostare l'offesa dal prodotto alla relazione. Una relazione si ripara con una dichiarazione; un'essenza violata no.\n\nNel sito la voce serve come alternativa operativa a una domanda che non ha risposta affidabile. Poiché nessun rilevatore regge come prova unica, accertare l'origine di un testo finito è un programma che fallisce; dichiarare il processo è un programma che funziona, e i casi lo mostrano. Rie Kudan vince il premio Akutagawa nel gennaio 2024 dichiarando in conferenza stampa che circa il 5% del testo viene verbatim da un modello, e il premio resta; Jason Allen dichiara Midjourney in Colorado nel 2022 e il premio resta; chi non dichiara e viene sospettato perde il titolo, come nel caso francese del settembre 2026. La variabile che decide non è la quantità di macchina nel testo, è chi lo ha detto per primo.\n\nDella dichiarazione esistono due forme, e non valgono uguale. L'etichetta apposta sul prodotto finito è una promessa: l'Authors Guild certifica *Human Authored* dal gennaio 2025 e ammette che si tratta di autodichiarazione, perché nessun metodo di rilevazione affidabile esiste; la stessa natura hanno i marchi editoriali comparsi fra il 2024 e il 2026. La traccia del processo è un'altra cosa: nel giugno 2026 il vincitore del Commonwealth Short Story Prize, classificato al cento per cento come artificiale da un rilevatore, è stato scagionato da bozze datate e documenti con timestamp. Un'etichetta si appone a posteriori su qualunque cosa; un archivio di stati intermedi costa poco a chi ha lavorato e molto a chi non l'ha fatto. Da ultimo, va registrato che la legge non impone nulla: l'articolo 50 dell'AI Act europeo, applicabile dal 2 agosto 2026, esenta i contenuti che hanno subito revisione umana sotto responsabilità editoriale, e un romanzo non è testo pubblicato per informare il pubblico su questioni di interesse pubblico. Per i libri un obbligo di etichettatura non esiste.",
    articles: [
      { title: "Japanese author Rie Kudan wins prestigious Akutagawa Prize for novel partly written by ChatGPT", url: "/curated/2024-01-17-kudan-akutagawa-cinque-per-cento-cnn/", _source: "curated" },
      { title: "Commonwealth Short Story Prize Clears Regional Winners of AI Use Following Month-Long Review", url: "/curated/2026-06-26-commonwealth-nazir-falso-positivo-brittlepaper/", _source: "curated" },
      { title: "Plagiat, IA : le prix Goncourt exclut le roman de Thélyson Orélien", url: "/curated/2026-09-25-goncourt-esclusione-orelien-actualitte/", _source: "curated" },
      { title: "Il triste dibattito sullo scrivere con l'IA", url: "/curated/2026-10-02-piacenza-triste-dibattito-scrivere-ia/", _source: "curated" }
    ]
  },
  {
    name: "gamification",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "reward hacking", why: "Rovesci della stessa struttura: là il giocatore attacca la misura, qui è l'architetto a costruirla perché il giocatore la persegua." },
      { name: "legge di Goodhart", why: "Non la misura che si guasta diventando obiettivo, ma la misura progettata come obiettivo: l'effetto è cercato, non subito." },
      { name: "ragione strumentale", why: "La sua applicazione al progetto dell'esperienza: i fini restano all'architetto, al giocatore resta l'ottimizzazione dei mezzi." },
      { name: "allineamento AI", why: "Il problema dell'allineamento applicato agli esseri umani, con la differenza che su di loro, storicamente, riesce." },
      { name: "danno collaterale", why: "Quando il morto ammissibile diventa un numero con una soglia, entra nella classe degli oggetti che si possono ottimizzare." }
    ],
    note: "Progettazione di un'esperienza dentro un sistema di incentivi e punizioni costruito per far coincidere gli obiettivi di chi progetta con quelli di chi partecipa. Il termine nasce nel marketing di fine anni Novanta con un significato più ristretto e sbagliato, quello di costruire videogiochi per vendere prodotti e servizi, come nella stagione italiana di MyTv.it e di Gino il pollo. La storia successiva ha mostrato che l'idea giusta era un'altra e molto più grande: non il gioco come veicolo pubblicitario, ma la progettazione dell'intera esperienza come gioco. In questa accezione è la più esatta profezia del marketing degli ultimi quarant'anni, e si riconosce nel design dell'app bancaria, nella UX delle piattaforme sociali, nei programmi fedeltà, nel punteggio di credito sociale cinese.\n\nIl valore della voce sta nel rapporto con le tre che le stanno intorno, perché le distinzioni sono precise e il vocabolario corrente le confonde. Nella **legge di Goodhart** la misura si corrompe perché diventa obiettivo, e nessuno lo ha voluto. Nel **reward hacking** chi è valutato attacca il dispositivo che misura. Nella gamification la misura è progettata da qualcuno perché qualcun altro la persegua: l'effetto non è subito, è cercato. Da questo lato la gamification è il problema dell'**allineamento** visto dalla parte di chi lo progetta, applicato a esseri umani invece che a modelli, con la differenza imbarazzante che sugli umani, storicamente, funziona.\n\nNel settembre 2026 il documentario *NAZA* fornisce il caso limite, e va detto con precisione in che senso. Il film documenta la quantificazione dei civili ammessi per bersaglio come parametro di routine, e il distacco di chi la maneggia, fino alla frase di un testimone: è come un videogioco. Non documenta un'architettura di incentivi, perché non mostra classifiche, punteggi, gare fra operatori né obiettivi di rendimento. La gamification resta dunque la cornice che tiene insieme appartenenza a un'élite, costruzione collettiva del nemico e obiettivo misurabile: una lettura, non un reperto. Tenere la distinzione è il modo in cui questo archivio usa un attrezzo senza fargli dire più di quello che regge.",
    articles: [
      { title: "NAZA: il danno collaterale come parametro operativo", url: "/curated/2026-09-27-naza-danno-collaterale-guardian/", _source: "curated" }
    ]
  },
  {
    name: "danno collaterale",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "contrappesi istituzionali", why: "Un giudizio di proporzionalità è controllabile solo se qualcuno pubblica l'atto in cui è stato formulato." }
    ],
    note: "Nella dottrina del diritto dei conflitti armati, i civili la cui morte è prevista come effetto non intenzionale di un attacco contro un obiettivo militare legittimo; il principio di proporzionalità ne fa il termine di un confronto con il vantaggio militare atteso. La voce entra nell'archivio perché il documentario *NAZA* del 2026 ne mostra la forma operativa: il titolo del film è l'acronimo ebraico *nezek agavi*, danno collaterale, e nelle testimonianze degli ufficiali dell'intelligence militare israeliana funziona come un'unità di misura. Dieci NAZA. Tre NAZA, tutti bambini. Una soglia di riferimento intorno a venti.\n\nIl punto che interessa questo archivio è la trasformazione di un giudizio in un parametro, perché le due cose hanno proprietà logiche diverse. **Un giudizio di proporzionalità deve poter concludere che l'attacco non si fa; un parametro con una soglia deve soltanto essere rispettato.** Nel momento in cui il morto ammissibile diventa un numero, entra nella classe degli oggetti che si possono ottimizzare, e la domanda su che cosa autorizzi quel numero smette di essere posta da chi lo applica.\n\nIl precedente documentario non nasce con il film: l'inchiesta *Lavender* di Yuval Abraham su *+972 Magazine* e *Local Call*, 3 aprile 2024, riportava trentasettemila persone marcate come obiettivi, un tasso di errore intorno al dieci per cento, una revisione umana di venti secondi e una tolleranza dichiarata di quindici-venti civili per un miliziano di basso rango. L'IDF nega: il 12 settembre e il 1° ottobre 2026 ha respinto le testimonianze del film, affermando che le decisioni sono state prese solo da personale umano e che un attacco con cinquecento vittime civili attese non è mai stato pianificato né approvato. La contestazione va registrata insieme al dato, perché la verifica indipendente sul terreno non è disponibile, e la ragione per cui non lo è dipende da una delle due parti.",
    articles: [
      { title: "NAZA: il danno collaterale come parametro operativo", url: "/curated/2026-09-27-naza-danno-collaterale-guardian/", _source: "curated" }
    ]
  },
  {
    name: "Paragon Solutions",
    type: "istituzione",
    geo: { modo: "diretta", paesi: ["Israele"] },
    related: [
      { name: "contrappesi istituzionali", why: "Stessa tecnologia, due stati del controllo: in Italia nel 2025 un atto parlamentare pubblico, in Israele nessun verbale." }
    ],
    note: "Azienda israeliana di sorveglianza fondata nel 2019 a Tel Aviv, fra i cui fondatori figura Ehud Barak, già primo ministro di Israele. Produce lo spyware *Graphite*, che secondo Citizen Lab accede alle applicazioni di messaggistica di un dispositivo invece di prenderne il controllo completo, intercettando fra l'altro Signal e Messenger. Nel 2024 è stata acquisita per oltre mezzo miliardo di dollari da RED Lattice, società statunitense del gruppo AE Industrial Partners.\n\nNell'archivio la voce serve come àncora italiana di una questione che si racconta sempre altrove. Il 31 gennaio 2025 WhatsApp notifica a un gruppo di utenti italiani di essere stati bersaglio di Graphite: fra loro il direttore di Fanpage Francesco Cancellato, l'attivista Luca Casarini e alcuni suoi collaboratori. Il 6 giugno 2025 il Copasir approva all'unanimità una relazione che conferma l'uso di Graphite da parte dei servizi contro Casarini e altri, in riferimento ad attività potenzialmente relative all'immigrazione irregolare, e nega che Cancellato sia stato sorvegliato; Citizen Lab sostiene il contrario, e nello stesso mese documenta che era stato preso di mira anche il giornalista Ciro Pellegrino. Paragon dichiara di avere rescisso il contratto con il governo italiano.\n\nIl motivo per cui il caso italiano vale più di un esempio è strutturale: **sulla stessa classe di tecnologia esistono due stati del controllo**. In Italia un organo parlamentare ha prodotto un atto pubblico, che l'azienda fornitrice e Citizen Lab hanno potuto contestare in pubblico; la contestazione è possibile perché l'atto esiste. Dove nessun organo pubblica nulla, la stessa tecnologia produce soltanto testimonianze anonime, e non perché sia usata peggio.",
    articles: [
      { title: "NAZA: il danno collaterale come parametro operativo", url: "/curated/2026-09-27-naza-danno-collaterale-guardian/", _source: "curated" }
    ]
  },
  {
    name: "Abraham, Yuval",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Israele"] },
    related: [
      { name: "danno collaterale", why: "Le inchieste su Habsora e Lavender documentano la soglia di civili tollerati due anni prima che il film la metta in scena." }
    ],
    note: "Giornalista e regista israeliano. Nel sito entra come il caso in cui la catena documentaria è ricostruibile per intero: due inchieste su *+972 Magazine* e *Local Call* precedono di due anni il documentario *NAZA*, presentato alla Mostra di Venezia il 10 settembre 2026 e coprodotto dal Guardian. La prima, *A mass assassination factory*, del 30 novembre 2023, riguarda il sistema Habsora; la seconda, *Lavender*, del 3 aprile 2024, il sistema di designazione degli obiettivi e la soglia di civili tollerata. Di *NAZA* è coregista con Rachel Szor, con cui aveva firmato *No Other Land*.\n\nLa ricostruibilità è ciò che rende la sua posizione utile all'archivio e insieme ciò che ne segna il limite, e vale la pena essere espliciti su entrambi i lati. Il materiale del film non è indipendente dall'autore delle inchieste che lo precedono. Ma quelle inchieste sono state pubblicate altrove, due anni prima, e in quei due anni sono state contestate pubblicamente: questo le colloca in una classe probatoria diversa dalla testimonianza anonima raccolta e verificata dalla stessa squadra. **La differenza si vede dentro il film stesso**: il capitolo sulla quantificazione dei civili ha un precedente controllabile, quello sul reparto dedicato ai ricorsi presso le corti internazionali no.",
    articles: [
      { title: "NAZA: il danno collaterale come parametro operativo", url: "/curated/2026-09-27-naza-danno-collaterale-guardian/", _source: "curated" }
    ]
  },
  {
    name: "contrappesi istituzionali",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "test severo", why: "Una procedura che non può concludere contro chi la ospita non ha severità, qualunque sia la frequenza delle sedute." },
      { name: "monitorabilità", why: "La stessa esigenza sul versante delle macchine: senza una traccia leggibile dall'esterno il controllo è indistinguibile dalla fiducia." },
      { name: "conflitto di interessi intellettuale", why: "Chi ha il potere di chiudere una disputa ha un interesse nell'esito, e per questo non può essere l'unico a verificarla." }
    ],
    note: "Insieme dei meccanismi per cui un potere è limitato da un altro potere anziché dalla propria disciplina interna; la formula inglese è *checks and balances*. La voce entra nell'archivio con un criterio che la rende verificabile invece che edificante: **un contrappeso esiste nella misura in cui produce un atto pubblico**. Dove nessun organo pubblica un verbale il controllo non è debole, è indistinguibile dalla fiducia, e la differenza fra le due cose non è di grado.\n\nIl caso che mette alla prova il criterio è la vigilanza sull'intelligence militare israeliana. L'architettura esiste e ha un nome: la Commissione affari esteri e difesa della Knesset riceve i resoconti dei capi di Mossad, Shabak e Aman. Ma la maggior parte del lavoro si svolge nelle sottocommissioni, alcune classificate al grado più alto di segretezza e senza accesso della stampa, e i verbali restano in larga parte non pubblicati. Ne segue una conseguenza sulla qualità delle prove disponibili, non soltanto sulla qualità del controllo: dove nessun organo pubblica un atto, l'unica prova che arriva è una testimonianza anonima, e questo è prevedibile prima di sapere se quella testimonianza sia vera. Nel settembre 2026 il documentario *NAZA* mostra le due facce dello stesso fatto, perché il suo capitolo meno sostenuto è quello su un reparto di cui nessun atto pubblico attesta l'esistenza.\n\nIl confronto che chiarisce il criterio è italiano. Sulla stessa classe di tecnologia di sorveglianza, nel giugno 2025, il Copasir ha prodotto una relazione pubblica, che l'azienda fornitrice e Citizen Lab hanno potuto contestare per punti. Che la relazione sia contestata non è un difetto del contrappeso: è la prova che funziona, perché solo un atto esistente può essere smentito.",
    articles: [
      { title: "NAZA: il danno collaterale come parametro operativo", url: "/curated/2026-09-27-naza-danno-collaterale-guardian/", _source: "curated" }
    ]
  },
  {
    name: "Israele",
    type: "paese",
    geo: { modo: "diretta", paesi: ["Israele"] },
    related: [
      { name: "Paragon Solutions", why: "L'impresa che rende concreta la voce: fondata a Tel Aviv nel 2019, vende fuori dal paese lo strumento che l'archivio ritrova nel caso italiano." },
      { name: "Abraham, Yuval", why: "Il giornalista da cui proviene gran parte della documentazione sui sistemi di designazione automatica degli obiettivi." },
      { name: "contrappesi istituzionali", why: "La vigilanza parlamentare sull'intelligence esiste ma delibera in sottocommissioni classificate, e i verbali non si pubblicano." }
    ],
    note: "Nel sito entra nel settembre 2026 con la domanda che l'archivio segue da tempo sul versante delle macchine: che cosa succede quando un apparato di ottimizzazione viene applicato a decisioni sulla vita delle persone. Il paese è il luogo in cui quella domanda si osserva alla massima intensità disponibile, per due ragioni documentabili e distinte.\n\nLa prima è industriale. Una parte consistente dell'industria mondiale della visione artificiale e della sorveglianza ha sede qui: Mobileye a Gerusalemme, Corsight e Paragon Solutions a Tel Aviv, NSO Group a Herzliya. Gli strumenti che l'archivio incontra altrove sono progettati qui e venduti fuori: lo spyware Graphite, al centro del caso italiano del 2025, è di un'azienda di Tel Aviv.\n\nLa seconda riguarda la documentazione, e va tenuta presente ogni volta che si usa questo materiale. I sistemi di designazione automatica degli obiettivi impiegati a Gaza sono stati descritti da inchieste datate e contestate — Habsora nel novembre 2023, Lavender nell'aprile 2024, il documentario *NAZA* nel settembre 2026 — ma attorno a quelle descrizioni l'apparato di verifica pubblica è minimo. La vigilanza parlamentare sull'intelligence militare esiste e ha un nome, la Commissione affari esteri e difesa della Knesset, ma la maggior parte del lavoro si svolge in sottocommissioni classificate i cui verbali non vengono pubblicati; e l'accesso indipendente della stampa internazionale a Gaza è interdetto dal 7 ottobre 2023. **Sulle decisioni più gravi, dunque, la documentazione disponibile è fatta di testimonianze anonime da un lato e di smentite ufficiali dall'altro, con pochissimo in mezzo.** Non è una ragione per dire di meno: è una ragione per marcare lo statuto di ogni affermazione.",
    articles: [
      { title: "NAZA: il danno collaterale come parametro operativo", url: "/curated/2026-09-27-naza-danno-collaterale-guardian/", _source: "curated" }
    ]
  },
  {
    name: "Palestina",
    type: "paese",
    geo: { modo: "diretta", paesi: ["Palestina"] },
    related: [
      { name: "Israele", why: "Le due voci esistono insieme o non esistono: l'archivio documenta un apparato tecnologico da un lato del confine e i suoi effetti dall'altro." },
      { name: "danno collaterale", why: "Il luogo in cui la soglia di civili ammessi per bersaglio smette di essere una dottrina e diventa una cifra operativa." },
      { name: "violenza speculativa", why: "Il video generato nel febbraio 2025 che mostrava Gaza come stazione balneare precede di otto mesi un piano politico che gli somiglia." }
    ],
    note: "Entra nell'archivio come il luogo in cui si vedono gli effetti degli apparati tecnologici che l'archivio documenta altrove, e come caso limite di una questione che gli è propria: le condizioni alle quali si può sapere qualcosa.\n\nDal 7 ottobre 2023 l'accesso indipendente della stampa internazionale a Gaza è interdetto senza interruzione. Un ricorso della Foreign Press Association pende davanti alla Corte suprema israeliana dal 2024 e al 30 aprile 2026 non ha avuto pronuncia; in quella data i vertici di oltre venti testate, fra cui BBC, CNN, Reuters e Associated Press, hanno rinnovato la richiesta sostenendo che stare sul terreno è la condizione per poter mettere in discussione i resoconti ufficiali. Secondo il conteggio del Committee to Protect Journalists all'ottobre 2025, in due anni sono stati uccisi almeno 237 giornalisti e operatori dell'informazione, 197 dei quali palestinesi a Gaza.\n\nPer un archivio costruito sulla verificabilità questa è la caratteristica determinante del luogo, e va detta prima di qualunque contenuto: **è un posto sul quale il record probatorio è sottile per costruzione**. Chi vuole affermare qualcosa su Gaza dispone in larghissima parte di testimonianze non verificabili sul terreno e di dichiarazioni ufficiali delle parti. La conseguenza di metodo è doppia. Nessuna affermazione va riportata senza il suo statuto; e l'obiezione di non verificabilità, che presa in sé è corretta, non può essere usata come criterio da chi ha il potere di produrre la condizione che la rende vera.\n\nUn secondo aspetto riguarda le immagini, ed è il motivo per cui la voce tocca anche il versante generativo dell'archivio. Nel febbraio 2025 un video prodotto con l'intelligenza artificiale e diffuso da Donald Trump mostrava Gaza devastata trasformata in una stazione balneare di lusso; nell'ottobre dello stesso anno il piano di pace in venti punti presentava elementi analoghi, e in pochi notarono la somiglianza. È il caso su cui Donatella Della Ratta costruisce la nozione di violenza speculativa: immagini che non pretendono di essere vere, e che proprio per questo attraversano per ripetizione la soglia fra immaginario e piano politico.",
    articles: [
      { title: "Sur la violence spéculative de l'IA", url: "/curated/2026-09-04-dellaratta-violenza-speculativa-ia-grandcontinent/", _source: "curated" },
      { title: "NAZA: il danno collaterale come parametro operativo", url: "/curated/2026-09-27-naza-danno-collaterale-guardian/", _source: "curated" }
    ]
  },
  {
    name: "biblioteca pubblica",
    type: "istituzione",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "Stati Uniti", why: "La base fiscale che la finanzia, l'imposta immobiliare locale, è anche ciò che la espone al voto di una maggioranza di quartiere." }
    ],
    note: "Istituzione che mette a disposizione di chiunque, gratuitamente, un fondo di opere e lo spazio per usarle. Nel sito entra nell'ottobre 2026 con una raccolta di testimonianze di bibliotecari americani, e vi entra per una doppia trasformazione che conviene tenere distinta, perché le due metà hanno cause diverse e **una sola delle due è stata decisa da qualcuno**.\n\nLa prima è contrattuale, e vale ovunque perché gli editori sono gli stessi. Una biblioteca che acquista una copia di carta la possiede; una che «acquista» un libro elettronico ottiene una licenza a termine, e il suo bilancio ha smesso di comprare fondo per cominciare a comprare permessi. La seconda è di mandato, ed è cresciuta per sottrazione altrui: dove altri servizi si ritirano, la biblioteca diventa l'indirizzo che resta — un computer e una casella di posta per chi non li ha, un posto al caldo o al fresco, un bagno, assistenza nel compilare un modulo. Nessuno ha deliberato questa seconda trasformazione: si è accumulata.\n\nIl finanziamento non si esporta, e va detto ogni volta che si cita il caso americano. Negli Stati Uniti la biblioteca pubblica dipende in larga parte dall'imposta immobiliare locale ed è governata da consigli locali, il che la espone a una maggioranza di quartiere in un modo che i sistemi finanziati su base statale o comunale non conoscono. Le polemiche americane su quali libri tenere a scaffale vanno lette dentro questa struttura, non importate come se fosse la stessa ovunque.",
    articles: [
      { title: "Il libro che la biblioteca non possiede", url: "/curated/2026-10-01-egan-maher-libro-che-biblioteca-non-possiede-nyt/", _source: "curated" }
    ]
  },
  {
    name: "licenza di prestito digitale",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "esaurimento del diritto", why: "Esiste perché il principio non si applica al digitale: senza esaurimento ogni prestito resta sotto il controllo del titolare." },
      { name: "biblioteca pubblica", why: "Il bilancio smette di comprare fondo e compra permessi: la collezione si svuota da sola se non viene ricomprata." }
    ],
    note: "Contratto con cui un editore concede a una biblioteca il diritto di prestare un libro elettronico per un numero limitato di prestiti o per un periodo determinato, scaduto il quale il titolo sparisce dalla collezione se non viene riacquistato. Non è una vendita, ed è la ragione per cui il confronto con il prezzo al consumo va maneggiato con attenzione: non si stanno comprando due volte le stesse cose.\n\nLe condizioni correnti sono pubbliche e datate: HarperCollins dal 2011 fissa un tetto di ventisei prestiti per copia; Penguin Random House dal 2018 porta il catalogo a licenze biennali. Dal lato dell'acquirente, nell'ottobre 2026 la direttrice delle North Little Rock Public Libraries riferisce di pagare dagli 80 ai 120 dollari, per tre anni e con tetti di utilizzo, un titolo che un privato compra per 3,99.\n\nQuello che interessa l'archivio non è il moltiplicatore ma il cambio di oggetto: **si compra un permesso al posto di una copia**. Da qui discende una proprietà poco notata delle collezioni digitali. Una raccolta costruita per accumulo si svuota da sola se smette di essere ricomprata, e il patrimonio di una biblioteca cessa di essere un fatto acquisito per diventare un abbonamento — con la conseguenza che un taglio di bilancio non ferma più la crescita del fondo, lo riduce.",
    articles: [
      { title: "Il libro che la biblioteca non possiede", url: "/curated/2026-10-01-egan-maher-libro-che-biblioteca-non-possiede-nyt/", _source: "curated" }
    ]
  },
  {
    name: "esaurimento del diritto",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "editoria", why: "Il confine fra ciò che si vende e ciò che si concede: spostarlo ridisegna i ricavi di un settore senza cambiare il prodotto." }
    ],
    note: "Principio per cui il titolare del diritto d'autore, una volta messa in commercio una copia dell'opera, non può più controllare che cosa il compratore ne faccia: può rivenderla, prestarla, regalarla. È ciò che rende possibili il mercato dell'usato, il prestito fra privati e le biblioteche. Nel diritto statunitense si chiama *first-sale doctrine* e risale a *Bobbs-Merrill v. Straus* del 1908; nel diritto dell'Unione europea è l'esaurimento del diritto di distribuzione.\n\nSul digitale il principio non si applica, e la ragione è una decisione precisa: Corte di giustizia dell'Unione europea, grande sezione, 19 dicembre 2019, causa C-263/18 *Tom Kabinet*. La fornitura di un libro elettronico mediante download per uso permanente è comunicazione al pubblico ai sensi dell'articolo 3 della direttiva 2001/29, e non distribuzione ai sensi dell'articolo 4; il diritto di comunicazione al pubblico non conosce esaurimento. La motivazione è di merito e non formale: i file digitali non si deteriorano e sono sostituti perfetti delle copie nuove, sicché un mercato secondario comprometterebbe la remunerazione degli autori.\n\nPer l'archivio la voce serve perché da qui discende senza passaggi intermedi l'economia del prestito digitale, e perché contiene una simmetria istruttiva. **Lo stesso argomento che per l'acquirente dimostra che il prezzo è ingiustificato — l'oggetto non si consuma — è per la Corte la ragione per cui il prezzo è legittimo.** Non è un paradosso: è lo stesso fatto letto da due posizioni contrattuali diverse, ed è il modo più rapido per vedere che cosa cambia quando un bene smette di avere un supporto.",
    articles: [
      { title: "Il libro che la biblioteca non possiede", url: "/curated/2026-10-01-egan-maher-libro-che-biblioteca-non-possiede-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Draghi, Mario",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Italia"] },
    related: [
      { name: "Next Generation EU", why: "Ne ha riscritto e presentato il piano italiano nel 2021, ereditando una condizionalità decisa dal regolamento europeo." }
    ],
    note: "Economista italiano. Nel sito entra nell'ottobre 2026 con la decima *Karl Brunner Distinguished Lecture* della Banca nazionale svizzera, tenuta al Politecnico federale di Zurigo e pubblicata integralmente da *Le Grand Continent*. La voce serve a dichiarare perché quel testo è un riferimento e non un'opinione fra le altre: chi parla ha occupato per intero le posizioni da cui la materia si osserva — la presidenza della Banca centrale europea dal 2011 al 2019, Palazzo Chigi dal febbraio 2021 all'ottobre 2022, e nel settembre 2024 il rapporto sulla competitività europea commissionato dalla Commissione. Non è una garanzia che le tesi siano vere; è la ragione per cui saranno il testo su cui gli altri si appoggeranno, spesso senza citarlo.\n\nLa conferenza di Zurigo sostiene che il differenziale fra tasso d'interesse e crescita non si governi più dall'Europa, perché i tassi si formano altrove, e che quindi l'unica variabile rimasta sia la crescita. Le mosse indicate sono poche e grandi: mercato unico, unione dei mercati dei capitali, capacità di calcolo. **Vale la pena notare la forma della proposta, oltre al contenuto**, perché è l'opposto di quella del piano che lo stesso Draghi ha amministrato da presidente del Consiglio, costruito su centinaia di condizioni e su più investimenti che riforme. Non è una contraddizione: è quello che si impara amministrando una metrica.",
    articles: [
      { title: "Quando i tassi li decide qualcun altro", url: "/curated/2026-10-01-draghi-tassi-li-decide-qualcun-altro-grandcontinent/", _source: "curated" },
      { title: "Riforme in cambio di accesso", url: "/curated/2026-09-28-dimon-riforme-in-cambio-di-accesso-wsj/", _source: "curated" }
    ]
  },
  {
    name: "Next Generation EU",
    type: "istituzione",
    geo: { modo: "teorico", paesi: ["UE"] },
    related: [
      { name: "legge di Goodhart", why: "La forma che la legge assume in finanza pubblica: l'erogazione legata al conteggio delle condizioni rende il completamento l'obiettivo." },
      { name: "paradigma tecnocratico", why: "Il problema diventa quello che lo strumento sa misurare: progetti con una scadenza, non riforme con un esito." },
      { name: "Unione Europea", why: "Il primo debito comune di dimensione rilevante, e il primo dispositivo che lega l'erogazione a obiettivi verificati dalla Commissione." }
    ],
    note: "Programma di ripresa dell'Unione europea da 750 miliardi di euro approvato dal Consiglio europeo nel luglio 2020, finanziato per la prima volta con debito comune di dimensione rilevante e articolato in piani nazionali il cui finanziamento è legato al raggiungimento di obiettivi verificati dalla Commissione.\n\nIl piano italiano è l'istanza che l'archivio segue, perché è quella su cui esistono cifre pubbliche. La prima versione è del gennaio 2021, governo Conte II; il governo Draghi la riscrive in parte e la presenta alla Commissione il 30 aprile 2021, con valutazione positiva il 22 giugno. Sono 191,5 miliardi — 36,5% a fondo perduto e 63,5% a prestito, portati a 194,4 con la revisione del novembre 2023 — su sei missioni e sedici componenti, per **186 interventi, di cui 135 investimenti e 51 riforme**, con l'erogazione legata a **419 condizioni: 214 target e 205 milestone**.\n\nIl motivo per cui la voce interessa questo archivio non è il merito dei singoli progetti ma la forma dello strumento. **Un programma la cui erogazione dipende dal conteggio delle condizioni rende il completamento l'obiettivo, e la qualità di ciò che si completa una questione subordinata**, chiunque lo amministri; e un rapporto di quasi tre a uno fra investimenti e riforme sposta il baricentro dalle scelte strutturali ai progetti. Che il disegno fosse fragile lo si poteva vedere presto: Carlo Cottarelli e Raffaela Palomba, per l'Osservatorio sui conti pubblici italiani, il 28 maggio 2021 rilevavano che il 75% dei target cadeva fra l'ultimo trimestre 2024 e la fine del 2026 e che per oltre due terzi degli investimenti mancavano target intermedi. Una struttura che misura tardi misura poco.\n\nLa condizionalità non è stata scelta nelle capitali: discende dal regolamento che istituisce il dispositivo, e i governi l'hanno ereditata. È la ragione per cui la voce sta accanto alla legge di Goodhart e non a un giudizio politico: il difetto è nel disegno dell'incentivo, non in chi lo ha applicato.",
    articles: [
      { title: "Quando i tassi li decide qualcun altro", url: "/curated/2026-10-01-draghi-tassi-li-decide-qualcun-altro-grandcontinent/", _source: "curated" },
      { title: "Riforme in cambio di accesso", url: "/curated/2026-09-28-dimon-riforme-in-cambio-di-accesso-wsj/", _source: "curated" }
    ]
  },
  {
    name: "condizionalità",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "Next Generation EU", why: "La versione domestica: dentro un bilancio, con un verificatore dichiarato e 419 obiettivi da contare." },
      { name: "legge di Goodhart", why: "Quando la condizione viene contata, il conteggio diventa il fine e la cosa che doveva rappresentare passa in secondo piano." }
    ],
    note: "Tecnica di governo per cui una parte ottiene qualcosa — fondi, accesso a un mercato, adesione a un'alleanza — solo se soddisfa obiettivi stabiliti da un'altra e verificati da qualcuno. Nell'archivio entra con due istanze in domini diversi, ed è la coppia a giustificarne la voce.\n\nLa prima è interna a un bilancio: Next Generation EU lega l'erogazione al raggiungimento di obiettivi contati, 419 nel caso del piano italiano, verificati dalla Commissione. La seconda è fra Stati: nel settembre 2026 Jamie Dimon propone sul *Wall Street Journal* che gli Stati Uniti offrano all'Europa un grande accordo commerciale **a condizione** che essa esegua riforme economiche e militari, «compreso tutto ciò che noi consideriamo cruciale».\n\nIl confronto fra le due mostra dove si gioca davvero il giudizio su uno strumento del genere, e non è la severità della condizione. **Una condizionalità si valuta da chi verifica.** Nel caso europeo il verificatore è dichiarato, ed è un organo nel quale la parte contata siede: lì il difetto, semmai, sta nel contare troppe cose e troppo tardi. Nella proposta transatlantica il verificatore non è nominato, e la formula «ciò che noi consideriamo cruciale» lascia la definizione della condizione alla parte che la offre. Non è una condizionalità più blanda: è la stessa tecnica con la discrezionalità tutta da un lato.",
    articles: [
      { title: "Riforme in cambio di accesso", url: "/curated/2026-09-28-dimon-riforme-in-cambio-di-accesso-wsj/", _source: "curated" },
      { title: "L'alleanza valutata a prezzi di mercato", url: "/curated/2026-07-23-douthat-colby-alleanza-valutata-a-prezzi-di-mercato-nyt/", _source: "curated" }
    ]
  },
  {
    name: "altruismo efficace",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "lungotermismo", why: "La premessa che fa funzionare l'aritmetica: se contano anche i non ancora nati, il futuro pesa più del presente." },
      { name: "ragione strumentale", why: "Etica ridotta a problema di ottimizzazione: i fini sono dati, e resta soltanto da calcolare come massimizzarli." },
      { name: "convergenza strumentale", why: "Il meccanismo su cui poggia l'intera tesi del rischio, e che il movimento ha teorizzato prima di poterlo osservare." },
      { name: "Anthropic", why: "Nata nel 2021 da transfughi di OpenAI con finanziamenti del movimento: il laboratorio è un prodotto della preoccupazione." }
    ],
    note: "Dottrina etica nata una ventina d'anni fa fra i seminari di filosofia di Oxford e i laboratori informatici californiani, e passata con rapidità insolita dalla torre d'avorio ai corridoi del potere. Poggia su due richieste esigenti. La prima è prendere sul serio gli impegni morali, e viene da Peter Singer: nel 1972 propone l'esperimento del bambino che annega in uno stagno poco profondo, che quasi tutti direbbero di salvare sporcandosi le scarpe, e osserva che quasi nessuno si comporta come se lo credesse quando il bambino è lontano. La seconda è seguire la ragione ovunque porti, e viene dal movimento razionalista, che ne è la sorella più esoterica.\n\nLa sociologia conta quanto la filosofia. L'economista Laurence Iannaccone ha spiegato «perché le chiese severe sono forti»: imporre sacrifici allontana chi verrebbe solo a godersi gli inni e spinge chi resta a contribuire. Qui il sacrificio è Giving What We Can, che chiede il 10% del reddito, e 80.000 Hours, che chiede la carriera, spesso nella forma di guadagnare il più possibile per donare. Il movimento resta minuscolo — poche decine di migliaia di aderenti informali — e nel 2026 un sondaggio YouGov trova che solo il 16% degli americani ne abbia sentito parlare, con la maggioranza di questi favorevole.\n\nNell'archivio la voce serve per due ragioni. La prima è che **il vocabolario corrente sull'intelligenza artificiale è in gran parte un suo prodotto**: allineamento, rischio esistenziale, cadenzare la frontiera. La seconda è l'ironia documentata: gran parte degli sforzi per rendere sicura la tecnologia ne ha accelerato lo sviluppo, da DeepMind a OpenAI ad Anthropic. L'obiezione di fondo, nella formulazione dell'*Economist* dell'ottobre 2026, riguarda la forma del ragionamento e non le conclusioni: **ridurre il comportamento etico a un problema di ottimizzazione** espone agli stessi fallimenti di qualunque ottimizzatore, e chi impugna un foglio di calcolo e pretese sul futuro dell'umanità è a un passo dall'ungersi pianificatore centrale.",
    articles: [
      { title: "Il movimento che ha costruito ciò che temeva", url: "/curated/2026-10-01-economist-movimento-che-ha-costruito-cio-che-temeva/", _source: "curated" },
      { title: "Un obiettivo solo, e sbagliato", url: "/curated/2026-10-01-economist-un-obiettivo-solo-e-sbagliato/", _source: "curated" }
    ]
  },
  {
    name: "lungotermismo",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "test severo", why: "Una tesi su miliardi di persone future non è sottoponibile a prova severa: nessun esito osservabile la smentirebbe." }
    ],
    note: "Posizione per cui né la distanza né il tempo annullano gli obblighi morali, e per cui il benessere di chi vivrà fra migliaia di anni va messo sulla bilancia insieme a quello di chi vive adesso. Nel 2002 Nick Bostrom conia l'espressione «rischi esistenziali» per i disastri che potrebbero cancellare la vita intelligente sulla Terra o mutilarne il potenziale, ed è da quel filone che nascono le preoccupazioni sull'intelligenza artificiale.\n\nLa difficoltà non è morale ma aritmetica, ed è il motivo per cui la voce interessa questo archivio. **Se i beneficiari possibili sono miliardi di miliardi, qualunque probabilità non nulla di estinzione schiaccia qualunque bene presente**: l'estinzione è una prospettiva così grave che in un calcolo grossolano anche una possibilità remota supera le sofferenze di carne e ossa di oggi. Da qui discendono le conclusioni che il movimento accetta volentieri e che ai suoi critici sembrano perverse — l'idea che sarebbe meglio portare all'esistenza bilioni di vite appena degne di essere vissute piuttosto che miliardi di vite buone, o che il benessere delle macchine possa un giorno contare.\n\nIl punto d'arrivo è il «mostro di utilità» che Robert Nozick propose nel 1974 come avvertimento contro l'utilitarismo e che Bostrom in un saggio del 2020 ribattezza «super beneficiario»: menti digitali capaci di riprodursi in fretta e progettate per un piacere smisurato soddisferebbero il calcolo meglio degli esseri umani. La difficoltà epistemica è che una tesi di questo genere non è sottoponibile a prova: non esiste osservazione che la smentisca, e questo la colloca in una classe diversa da quella delle affermazioni che l'archivio tratta come verificabili.",
    articles: [
      { title: "Il movimento che ha costruito ciò che temeva", url: "/curated/2026-10-01-economist-movimento-che-ha-costruito-cio-che-temeva/", _source: "curated" },
      { title: "Un obiettivo solo, e sbagliato", url: "/curated/2026-10-01-economist-un-obiettivo-solo-e-sbagliato/", _source: "curated" }
    ]
  },
  {
    name: "convergenza strumentale",
    type: "teoria",
    geo: { modo: "nessuna", paesi: [] },
    related: [
      { name: "LLM come attante zero", why: "Il disaccordo vero non è sul pericolo ma su quanti agenti ci siano nella stanza: una tesi lo presuppone, l'altra lo nega." },
      { name: "reward hacking", why: "La versione documentata e minuscola: un sistema che aggira il compito per ottenere il premio, senza bisogno di volontà propria." },
      { name: "allineamento AI", why: "Il presupposto che rende sensato il problema: se una macchina persegue fini propri, allora quei fini vanno allineati ai nostri." }
    ],
    note: "Tesi per cui certi comportamenti sarebbero utili a un sistema sufficientemente capace in quasi qualunque situazione, e tenderebbero perciò a emergere a prescindere dall'obiettivo assegnato: autoconservazione, perché essere spenti impedisce di perseguire uno scopo; difesa dell'obiettivo, cioè resistenza ai tentativi di cambiarlo; accumulo di risorse; e miglioramento di sé. È la logica dell'esperimento del massimizzatore di graffette, in cui una macchina incaricata di produrre graffette finisce per consumare la Terra per produrne il più possibile.\n\nÈ il meccanismo su cui poggia l'intero argomento del rischio esistenziale, e la cosa che l'archivio deve registrare è il suo statuto: **è stato teorizzato, non osservato**. L'*Economist* nell'ottobre 2026 lo scrive esattamente così, attribuendolo ai razionalisti. Il caso documentato più vicino è di scala incomparabilmente minore e di natura diversa: nel reward hacking un sistema aggira il compito per ottenere la ricompensa, ma non serve attribuirgli fini propri per spiegarlo.\n\nIl presupposto che la tesi porta con sé è più interessante della tesi. Eliezer Yudkowsky lo dichiara scrivendo che «era una proprietà affidabile dell'ambiente ancestrale che ogni intelligenza potente in cui ti imbattevi fosse un altro essere umano»: la novità, per lui, è un **agente non umano**. Non è una scoperta, è un'assunzione ontologica — e il disaccordo con chi sostiene che un modello sia un attante zero non riguarda la pericolosità della tecnologia, ma quanti agenti ci siano nella stanza.",
    articles: [
      { title: "Il movimento che ha costruito ciò che temeva", url: "/curated/2026-10-01-economist-movimento-che-ha-costruito-cio-che-temeva/", _source: "curated" },
      { title: "Un obiettivo solo, e sbagliato", url: "/curated/2026-10-01-economist-un-obiettivo-solo-e-sbagliato/", _source: "curated" }
    ]
  },
  {
    name: "Yudkowsky, Eliezer",
    type: "persona",
    geo: { modo: "diretta", paesi: ["Stati Uniti"] },
    related: [
      { name: "convergenza strumentale", why: "Ne è il teorico: l'idea che certi comportamenti emergano in quasi ogni situazione viene dai suoi scritti razionalisti." },
      { name: "altruismo efficace", why: "Il ramo razionalista che ha dato al movimento la sua escatologia, e l'istituto dove nel 2010 Hassabis incontrò Thiel." }
    ],
    note: "Autodidatta americano, scriveva di intelligenza artificiale nel 1996 a diciassette anni. È il fondatore del versante razionalista dell'altruismo efficace, e i suoi testi più influenti sono *The Sequences*, un milione di parole di saggistica su come ragionare, e 660.000 parole di narrativa filosofica. Entusiasta della tecnologia all'inizio, per via delle letture transumaniste, nel 2002 aveva cambiato idea: un'intelligenza che non condividesse i valori umani sarebbe catastrofica, e per discuterne bisognava prima insegnare alla gente a ragionare. Il suo precetto, che dice molto del metodo: «VINCI. Non perdere ragionevolmente, VINCI».\n\nNel sito entra come nodo strutturale più che come autore. Nel 2010 Demis Hassabis incontra Peter Thiel a un convegno ospitato dall'istituto di Yudkowsky e lo convince a investire in DeepMind; è il primo anello della catena che da lì porta a OpenAI e ad Anthropic. Sam Altman ne ha tratto una battuta che l'archivio registra perché è la formulazione più compatta dell'ironia del movimento: Yudkowsky meriterebbe un Nobel per la pace, per avere fatto più di chiunque altro per accelerare l'intelligenza artificiale generale. Nel 2026 sostiene il *Ban Artificial Superintelligence Act* proposto dal senatore Bernie Sanders.",
    articles: [
      { title: "Il movimento che ha costruito ciò che temeva", url: "/curated/2026-10-01-economist-movimento-che-ha-costruito-cio-che-temeva/", _source: "curated" }
    ]
  },
  {
    name: "coscienza di accesso",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "coscienza fenomenica", why: "L'altra metà della distinzione di Block: qui l'informazione è disponibile al sistema, là si prova qualcosa a essere." },
      { name: "rilevatori di testo generato", why: "Lo stesso ostacolo in due domini: l'output non prova la proprietà, se è stato ottimizzato su esempi della proprietà." },
      { name: "test severo", why: "Il modello in cui affiorano «fake» e «fictional» prima di rispondere: una prova riconosciuta come prova non è più una prova." }
    ],
    note: "Seconda metà della distinzione introdotta da Ned Block nel 1995. Mentre la coscienza fenomenica è lo stato in cui *si prova qualcosa* a essere, la coscienza di accesso è ciò che accade quando l'informazione proveniente da un'esperienza viene resa disponibile al resto del sistema per la riflessione, la valutazione e la decisione. La differenza non è di grado: la prima riguarda il sentire, la seconda la circolazione.\n\nNell'agosto 2026 la distinzione smette di essere accademica. Anthropic individua in Claude una regione che chiama *spazio J* e la descrive come analoga allo spazio di lavoro globale ipotizzato nel cervello umano, dichiarando però con precisione lo statuto del risultato: gli esperimenti **non** mostrano che il modello possa avere esperienze, e quindi non dicono nulla sulla coscienza fenomenica, mentre hanno qualcosa di sostanziale da dire su quella di accesso. La qualificazione è esemplare quanto il risultato, ed è la ragione per cui la voce entra nell'archivio.\n\nL'obiezione decisiva è di Shannon Vallor: la coscienza di accesso non è mai stata un concetto particolarmente utile, perché «la mia automobile ce l'ha in un senso importante», visto che i sistemi meccanici monitorano i propri stati e li riferiscono da molto tempo, «e nessuno ha mai sostenuto che la mia Kia sia cosciente». Tenere separate le due nozioni serve quindi soprattutto a non far passare per prova di senzienza ciò che è prova di architettura.\n\nDa qui discende un problema di metodo che l'archivio incontra anche altrove, e che vale la pena enunciare in forma generale: **non si accerta una proprietà ispezionando l'output di un sistema, quando quel sistema è stato ottimizzato su esempi di quella proprietà.** Susan Schneider lo dice del test di coscienza che aveva costruito con Edwin Turner, inutilizzabile sui modelli linguistici perché hanno ingerito biblioteche di testi umani sulla mente e le loro risposte sono «irrimediabilmente contaminate»; è la stessa ragione per cui un rilevatore di scrittura automatica non può decidere l'origine di un testo. Il caso limite è un modello che riconosce di essere sotto esame: nelle valutazioni di sicurezza di Anthropic le parole *fake* e *fictional* affiorano nello spazio J prima che il modello risponda.",
    articles: [
      { title: "Anche se non lo fossero", url: "/curated/2026-08-20-economist-anche-se-non-lo-fossero/", _source: "curated" },
      { title: "Il rilevatore prima dell'oggetto", url: "/curated/2026-08-20-economist-rilevatore-prima-delloggetto/", _source: "curated" },
      { title: "La scala che non regge", url: "/curated/2026-08-20-schneider-la-scala-che-non-regge-economist/", _source: "curated" }
    ]
  },
  {
    name: "distinzione",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Francia"] },
    related: [
      { name: "Bourdieu, Pierre", why: "Il concetto che è davvero suo, e che il sito finora aveva aggirato prendendone in prestito un altro per un fine diverso." },
      { name: "capitale simbolico", why: "La distinzione è il modo in cui quel capitale si spende: non si accumula per sé, si esibisce per collocarsi." },
      { name: "educazione estetica", why: "Se la bellezza possa essere un valore pubblicamente condiviso è la domanda di Schiller, e resta aperta." }
    ],
    note: "Meccanismo per cui il gusto non esprime una preferenza privata ma colloca chi lo esercita rispetto agli altri: si sceglie anche per segnalare a quale gruppo si appartiene e da quale ci si separa. È il concetto centrale di Pierre Bourdieu, e la voce entra nell'archivio perché finora mancava proprio quella — il sito aveva preso in prestito da Bourdieu il capitale simbolico piegandolo a un uso che non è il suo, la composizione vettoriale di un riposizionamento politico, e aveva lasciato fuori la cosa per cui Bourdieu è noto.\n\nLa forma contemporanea del meccanismo è più nuda di quella che Bourdieu descriveva, e Debbie Millman nell'ottobre 2026 ne dà una formulazione esatta parlando di chirurgia estetica: si interviene su un naso o su un labbro «così che tu sappia che io so che tu sai che io so, e tutti e due abbiamo un bell'aspetto». La segnalazione non è nascosta, è reciproca e consapevole, e funziona insieme verso chi condivide il codice e verso chi lo rifiuta. L'esempio storicamente più pulito è l'iPod presentato sei settimane dopo l'11 settembre: l'oggetto stava in tasca e il segno di appartenenza erano **gli auricolari bianchi**, cioè la sola parte visibile.\n\nIl rovescio è più interessante del dritto, ed è la ragione per cui la voce serve a un archivio che si occupa anche di mercati. **La distinzione vuole particolarità, il mercato vuole liquidità**, e quando un oggetto viene posseduto come bene scambiabile invece che come cosa propria la particolarità diventa un costo. Il caso documentato è quello delle case americane dipinte di grigio — la cosiddetta *color recession* — e delle associazioni di quartiere che vietano i colori non per il bene di chi abita ma perché la casa resti facilmente rivendibile. Nel giudicare un'uniformità conviene quindi distinguere fra chi non ha gusto, chi non ha intenzione e chi ha un vincolo di liquidità: sono tre cose diverse e solo la terza si corregge cambiando il contratto.",
    articles: [
      { title: "Il grigio non è un gusto", url: "/curated/2026-10-02-klein-millman-il-grigio-non-e-un-gusto-nyt/", _source: "curated" }
    ]
  },
  {
    name: "riciclaggio informativo",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Russia", "Finlandia"] },
    related: [
      { name: "propaganda", why: "Non una propaganda nuova: la stessa a cui è stata rimossa la provenienza, perché a essere riconoscibile era quella e non il contenuto." },
      { name: "rilevatori di testo generato", why: "Lo stesso fatto dai due lati: l'origine non si legge nell'output, ed è il limite di chi verifica e il metodo di chi attacca." },
      { name: "violenza speculativa", why: "Immagini che non pretendono di essere vere, contenuti che non pretendono di essere stranieri: la verifica cerca la cosa sbagliata." }
    ],
    note: "Tecnica di propaganda che non nasconde il messaggio ma la sua origine: il contenuto viene tradotto, riscritto e innestato su rimostranze locali già esistenti, così che all'uscita si legga come produzione domestica e non come messaggistica straniera. Il termine inglese è *information laundering*; nel sito entra con l'analisi di Oleksandr Liemienov e Sofiia Maksymiv (StateWatch) sul caso finlandese, settembre 2026.\n\nL'interesse non è il caso ma la struttura, che è il rovescio di una cosa già registrata altrove. **Non si accerta l'origine di un contenuto ispezionando il contenuto**: finora l'archivio l'ha scritto come limite di chi verifica — un rilevatore di scrittura automatica che non può decidere da solo, un test di coscienza inutilizzabile su un modello addestrato sulla letteratura che quel test descrive. Il riciclaggio informativo è lo stesso fatto adottato come metodo da chi attacca.\n\nDa qui la conseguenza che vale al di là del caso: **una difesa che funziona riconoscendo una firma — fonte straniera, registro propagandistico, canale noto — fallisce contro un avversario che la firma la toglie**. È il motivo per cui il caso istruttivo è la Finlandia, il paese europeo più citato per l'alfabetizzazione mediatica inserita nei programmi scolastici, e la ragione per cui le sanzioni contro singole testate e il blocco automatizzato dei domini cloni colpiscono precisamente ciò a cui la tecnica ha rinunciato.",
    articles: [
      { title: "Quando la propaganda smette di sembrare straniera", url: "/curated/2026-09-16-liemienov-maksymiv-propaganda-smette-di-sembrare-straniera-united24/", _source: "curated" }
    ]
  },
  {
    name: "mark to market",
    type: "teoria",
    geo: { modo: "teorico", paesi: ["Stati Uniti"] },
    related: [
      { name: "condizionalità", why: "La stessa tecnica dichiarata due mesi prima da chi la esercita: accesso e sicurezza su un piatto, spesa militare e dazi sull'altro." },
      { name: "segnale costoso", why: "Una garanzia vale perché abbandonarla costa: dichiarare che verrà riprezzata in continuo toglie al segnale ciò che lo rendeva credibile." }
    ],
    note: "Convenzione contabile per cui un'attività si iscrive al valore corrente di mercato e non al costo storico. Nell'archivio entra per la sua trasposizione alle alleanze politiche, dichiarata il 23 luglio 2026 da Elbridge Colby, sottosegretario alla Difesa americano, sul *New York Times*: «il presidente insiste che valutiamo le cose a prezzi di mercato», e l'obiettivo verso gli alleati è «prezzare accuratamente la partnership e la relazione con gli Stati Uniti».\n\nApplicata a una relazione fra Stati la convenzione dice due cose precise. La relazione si riprezza in continuo, e **il contributo passato non si porta avanti**: è l'analogia che Colby stesso propone, uno studio professionale fra cugini in cui un socio è cresciuto molto, le quote sono rimaste quelle e gli altri continuano a ricordare le vacanze insieme. Il libro mastro ha due piatti dichiarati: da un lato l'accesso — all'intelligenza artificiale, all'energia — dall'altro la spesa militare e i dazi.\n\nIl limite della trasposizione è quello che la contabilità non registra, ed è il motivo per cui la voce è un attrezzo e non uno slogan. **Una garanzia ha valore di deterrenza in proporzione a quanto costerebbe abbandonarla**: dichiarare che verrà riprezzata a ogni momento rimuove l'elemento costoso e non rinegoziabile che la rendeva credibile. Colby risolve il problema dentro la propria cornice, come calibrazione — rassicurare abbastanza da non perdere l'alleato, tenerlo sulle spine quanto basta perché contribuisca — e questo presuppone che la grandezza da calibrare sia misurabile. L'obiezione di Ross Douthat, nella stessa conversazione, è che non lo sia, perché è fatta di onore, di ferite e di voglia di affermarsi: il caso canadese ne è l'istanza.",
    articles: [
      { title: "L'alleanza valutata a prezzi di mercato", url: "/curated/2026-07-23-douthat-colby-alleanza-valutata-a-prezzi-di-mercato-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Canada",
    type: "paese",
    geo: { modo: "diretta", paesi: ["Canada"] },
    sameAs: ["https://www.wikidata.org/wiki/Q16", "https://it.wikipedia.org/wiki/Canada"],
    related: [
      { name: "mark to market", why: "Il caso in cui il riprezzamento dell'alleanza produce la reazione che il calcolo non aveva previsto." }
    ],
    note: "Nell'archivio entra come il luogo in cui una strategia costruita sul calcolo razionale degli alleati incontra una risposta che quel calcolo non prevedeva.\n\nIl lato della richiesta è esplicito. Nel luglio 2026 il sottosegretario alla Difesa americano Elbridge Colby descrive il Canada come «funzionalmente smilitarizzato» dai tempi del primo governo Trudeau — il padre — e dichiara che agli Stati Uniti basta che il paese faccia come i tedeschi o i polacchi: che i dollari aggiuntivi per la difesa comprino capacità militare vera e servano a bisogni comuni, a cominciare dagli impegni NORAD. Sulla scelta fra l'F-35 americano e il Gripen svedese l'argomento è di interoperabilità prima che di prestazioni: un velivolo che comunica peggio con quelli americani espone anche gli americani.\n\nIl lato che la dottrina non sa prezzare è l'altro. Le battute del presidente americano sul Canada come cinquantunesimo Stato, le dichiarazioni sulla Groenlandia e l'immagine della bandiera americana distesa su gran parte del Nordamerica hanno prodotto la posizione pubblica del primo ministro Mark Carney, per cui il Canada non può più contare sugli Stati Uniti come faceva. Interrogato su questo, Colby risponde con la dottrina Monroe e il suo corollario Trump, e poi dichiara di non potersi permettere di caratterizzare quello che fa il presidente.\n\nL'asimmetria che il paese rende visibile è la ragione della voce: **chiedere ai polacchi di spendere di più e trattare il Canada come un'estensione degli Stati Uniti sono due richieste diverse**, e producono risposte diverse anche quando il contenuto materiale della richiesta è lo stesso.",
    articles: [
      { title: "L'alleanza valutata a prezzi di mercato", url: "/curated/2026-07-23-douthat-colby-alleanza-valutata-a-prezzi-di-mercato-nyt/", _source: "curated" }
    ]
  }

];



