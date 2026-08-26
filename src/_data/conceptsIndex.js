/**
 * Indice concettuale del sito.
 *
 * Tipi:
 *   persona     — persona fisica, autore, pensatore, figura storica
 *   teoria      — teoria, modello, concetto tecnico con peso argomentativo
 *   testo       — opera, libro, articolo citato con ruolo strutturale
 *   istituzione — organizzazione, ente, agenzia con ruolo argomentativo
 *   luogo       — luogo geografico con ruolo argomentativo (non tag tematico)
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
    note: "Filosofo e matematico francese (1596–1650), fondatore del dualismo mente/corpo (res cogitans / res extensa). Nel sito compare come punto di partenza per la critica embodied — senza corpo non c'è mente nel senso pieno — e come autore del Discours de la méthode, modello del pensatore che demolisce le fondamenta del sapere adottando una «morale provvisoria» conservatrice nel frattempo.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Foucault, Michel",
    type: "persona",
    note: "Filosofo francese (1926–1984). Nel sito appare come autore il cui post-strutturalismo è stato «appreso in modo deteriore» da Orbán, Trump e Putin: la tesi che tutto sia effetto di discorso viene usata dai populisti per negare la resistenza della realtà agli schemi mentali. Il sito ricorda anche il suo entusiasmo per la rivoluzione iraniana del 1978 — caso esemplare dei rischi dell'antiilluminismo.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Derrida, Jacques",
    type: "persona",
    note: "Filosofo algerino-francese (1930–2004), fondatore della decostruzione. Nel sito è citato insieme a Foucault come fonte del post-strutturalismo deviato: la decostruzione come strumento critico si rovescia in cinismo politico quando viene adottata da chi vuole dissolvere ogni fondamento normativo. Teorico della differenza e della traccia.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Averroè",
    type: "persona",
    note: "Filosofo e medico andaluso (1126–1198), commentatore principale di Aristotele nel mondo islamico medievale. Nel sito è usato per avvicinare la struttura dei LLM: il suo intelletto unico separato che «pensa attraverso gli individui» anticipa metaforicamente un grande modello linguistico come bacino di sapere collettivo a cui ci si connette temporaneamente.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Kahneman, Daniel",
    type: "persona",
    note: "Psicologo e Premio Nobel israeliano-americano (1934–2024). Nel sito compare in due contesti: in L'ombra del futuro per la distinzione Sistema 1 / Sistema 2 applicata alla cooperazione; in La dialettica dell'antilluminismo per mostrare che il pensiero lento è energeticamente costoso, e l'incertezza prolungata produce pressione verso la risoluzione anche a costo di sbagliare la risposta.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Taleb, Nassim Nicholas",
    type: "persona",
    note: "Matematico e saggista libanese-americano (1960). Nel sito è presentato come uno dei pochi pensatori veramente nuovi degli ultimi venticinque anni: ex trader, ha costruito un'epistemologia del rischio basata su cigni neri, antifragilità e skin in the game. Libanese di Amioun, fa del Libano un uso teorico costante come laboratorio della complessità caotica.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "Axelrod, Robert",
    type: "persona",
    note: "Politologo americano (1943). Nel sito è il protagonista del torneo computazionale del dilemma del prigioniero: ha dimostrato che Tit-for-Tat vince in ambienti iterati. Il suo The Evolution of Cooperation (1984) è il punto di partenza teorico della serie «Ombre»: il lavoro che ha dato base scientifica all'idea che la cooperazione sia razionale.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" }
    ]
  },
  {
    name: "Putnam, Robert",
    type: "persona",
    note: "Politologo americano (1941–2024). Nel sito è citato per la teoria dei two-level games (1988): ogni leader negozia simultaneamente su un tavolo internazionale e uno domestico, e l'accordo è raggiungibile solo se i win-set si intersecano. Noto anche per Bowling Alone (2000) sul declino del capitale sociale americano.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Lyotard, Jean-François",
    type: "persona",
    note: "Filosofo francese (1924–1998). Nel sito è l'autore della diagnosi dell'incredulità verso le metanarrazioni (La condition postmoderne, 1979): la perdita di legittimità dei grandi sistemi di giustificazione illuministi. Il sito sottolinea che Lyotard descriveva un fatto, non prescriveva una norma — a differenza dei suoi epigoni.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Habermas, Jürgen",
    type: "persona",
    note: "Filosofo tedesco (1929). Nel sito è l'ancoraggio dell'universalismo minimo: ogni volta che argomentiamo presupponiamo già norme condivise — la struttura pragmatica dell'argomentazione richiede che la migliore argomentazione possa prevalere sulla forza. Questo è l'universale che il relativismo non può abolire senza autocontraddirsi.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Ferraris, Maurizio",
    type: "persona",
    note: "Filosofo italiano (1956), ha percorso a ritroso la strada dal poststrutturalismo al nuovo realismo. Nel sito è citato per il concetto di inemendabilità della realtà: senza sapere condiviso non rimane libertà di interpretare, ma solo il potere di chi ha forza sufficiente per far valere la propria narrazione.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Eco, Umberto",
    type: "persona",
    note: "Semiologo, scrittore e intellettuale pubblico italiano (1932–2016). Nel sito è figura centrale: mente combinatoria capace di fondare istituzioni (DAMS, Comunicazione, Master in Editoria), «terapista wittgensteiniano del discorso pubblico». La sua lezione: la realtà resiste ai nostri schemi mentali, non è tutto soltanto un effetto di discorso.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Yarros, Rebecca",
    type: "persona",
    note: "Scrittrice statunitense (1981). Nel sito «Fourth Wing» è il caso della banda della conferma: consegna al lettore le attese di genere con cui è entrato, e ciò che fa davvero non sta sul piano dei regimi. Contrae la varianza fra i produttori e insieme allarga la popolazione dei riceventi, due effetti di segno opposto tenuti sotto un solo coefficiente.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Hesse, Hermann",
    type: "persona",
    note: "Scrittore tedesco (1877–1962). Nel sito dà il nome alla «sindrome di Siddharta», il caso in cui un testo sposta molto il lettore senza avvicinarlo al mondo. Il nome tradisce in parte il romanzo, dove i movimenti laterali sono le tappe necessarie di un percorso che converge: la discrepanza isola la distinzione fra guadagno per testo e guadagno per traiettoria.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Joyce, James",
    type: "persona",
    note: "Scrittore irlandese (1882–1941). Nel sito «Finnegans Wake» è il caso che dimostra un errore formale nell'equazione del valore: l'efficienza con cui un testo arriva a destinazione non è una proprietà del testo, ma dipende dal ricevente. Lo stesso libro sta nella singolarità dell'origine per il lettore ordinario e in alto a destra per lo specialista.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Dostoevskij, Fëdor",
    type: "persona",
    note: "Scrittore russo (1821–1881). Nel sito è l'emblema del regime dell'apertura: la struttura polifonica dei «Fratelli Karamazov» lascia il lettore con più voci in gioco di quante ne avesse entrando, e questo ha valore perché il mondo contiene un conflitto morale irriducibile. Il caso che obbliga a togliere alla struttura lo statuto di co-requisito del valore.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Tolstoj, Lev",
    type: "persona",
    note: "Scrittore russo (1828–1910). Nel sito compare come caso di osservazione genuina: «Guerra e pace» è costruito su archivi, reduci interrogati e ricognizioni sui campi di battaglia, e i suoi capitoli saggistici sono la traccia visibile di un autore che sposta il proprio prior mentre scrive. «Resurrezione» è invece il caso in cui il giudizio su un testo dipende interamente da chi fornisce la distribuzione di riferimento.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Wack, Pierre",
    type: "persona",
    note: "Manager e pensatore strategico francese (1922–1997). Nel sito è citato come padre dello scenario planning: lavorando in Shell negli anni Settanta, ha sviluppato la tecnica di costruire scenari alternativi per rompere i modelli mentali del management e preparare l'organizzazione all'imprevedibile. Il suo metodo è il quadro teorico del rifiuto di Amodei al Pentagono.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
    ]
  },
  {
    name: "Amodei, Dario",
    type: "persona",
    note: "CEO e cofondatore di Anthropic (1983). Nel sito è la figura centrale dell'articolo sul rifiuto di un contratto con il Pentagono: ha usato lo scenario planning per valutare i rischi a lungo termine dell'AI militarizzata, scegliendo di dire no a Pete Hegseth. Incarna la tensione tra sviluppo AI e responsabilità strategica.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "When AI builds itself", url: "/curated/2026-06-19-anthropic-recursive-self-improvement/", _source: "curated" }
    ]
  },
  {
    name: "Gerasimov, Valery",
    type: "persona",
    note: "Generale russo, capo di Stato Maggiore (1955). Nel sito è citato per la dottrina della guerra ibrida che porta il suo nome (impropriamente): sistematizzazione delle «misure attive» sovietiche — disinformazione, amplificazione dei conflitti interni, finanziamento di fazioni opposte. La trappola che costruisce è letale: o la democrazia tollera il rumore e si dissolve, o lo sopprime e si nega.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Acemoglu, Daron",
    type: "persona",
    note: "Economista turco-americano, Premio Nobel 2024 (1967). Nel sito è citato per Why Nations Fail (con Robinson): la distinzione tra istituzioni inclusive (che distribuiscono potere) e estrattive (che lo concentrano) come chiave per spiegare le traiettorie degli stati. Anche per la struttura del win-set domestico nelle negoziazioni internazionali.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Platone",
    type: "persona",
    note: "Filosofo ateniese (427–347 a.C.). Nel sito compare in due contesti: nell'insegnamento di Eco come contrasto alla figura di Alcibiade (la formazione non produce filosofi ma persone capaci di stare nel mondo); e nel Fedro come autore dell'immagine dello slancio verticale dello spirito, usata per discutere la natura del desiderio nell'intelligenza artificiale.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" },
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" }
    ]
  },
  {
    name: "Spinoza, Baruch",
    type: "persona",
    note: "Filosofo olandese (1632–1677). Nel sito è citato per il parallelismo: res cogitans e res extensa non sono due sostanze separate (come in Cartesio) ma due attributi della stessa sostanza. Questa posizione è considerata antesignana dell'embodied mind: senza corpo non si dà cogito. Avrebbe sottoscritto la tesi dell'embodiment senza esitare.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Clark, Andy",
    type: "persona",
    note: "Filosofo della mente britannico (1957). Nel sito è co-autore della tesi della extended mind (con Chalmers, 1998): non esiste un confine netto tra mente e strumenti — il taccuino di Otto fa parte della sua memoria tanto quanto il suo ippocampo. Ha anche contribuito al paradigma del cervello come macchina predittiva.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Varela, Francisco",
    type: "persona",
    note: "Biologo e neuroscienziato cileno (1946–2001). Nel sito è co-autore con Thompson di The Embodied Mind (1991): la cognizione è radicata nella struttura corporea del soggetto. Davanti a un LLM disincarnato, questa posizione cambia statuto: da posizione tra altre diventa criterio di distinzione tra mente biologica e macchina.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Floridi, Luciano",
    type: "persona",
    note: "Filosofo dell'informazione italiano (1964), fondatore dell'etica dell'informazione. Nel sito è citato per la formula: «l'AI aiuta chi le cose le sa già fare». Senza capitale semantico — tutto ciò che si è letto, vissuto, capito, sbagliato e corretto — non si sa cosa si sta guardando quando lo strumento ti alza dal suolo.",
    articles: [
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" },
      { title: "Why Big AI Labs Are Hiring So Many Philosophers", url: "/curated/2026-06-24-economist-ai-labs-philosophers/", _source: "curated" }
    ]
  },
  {
    name: "Braudel, Fernand",
    type: "persona",
    note: "Storico francese (1902–1985), fondatore della scuola delle Annales, autore di La Méditerranée (1949). Nel sito è citato come modello del pensatore capace di studiare il Mediterraneo «come nessuno», con competenza analitica rara. Rappresenta l'approccio strategico al bacino marino che l'Italia non ha saputo applicare.",
    articles: [
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "Vico, Giambattista",
    type: "persona",
    note: "Filosofo napoletano (1668–1744). Nel sito è la fonte del principio verum ipsum factum (1725): conosciamo veramente solo ciò che abbiamo fatto. Le humanities studiano istituzioni umane conoscibili dall'interno perché le abbiamo costruite noi — fondamento epistemologico della loro rilevanza irriducibile.",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" }
    ]
  },
  {
    name: "Friston, Karl",
    type: "persona",
    note: "Neuroscienziato britannico (1959). Nel sito è citato come autore del free-energy principle: il cervello è un sistema di previsione bayesiana che minimizza l'errore tra modello interno e mondo esterno. Citato per mostrare che anche le teorie più potenti della cognizione biologica sono modelli, non prove di coscienza.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Melandri, Lea",
    type: "persona",
    note: "Saggista, insegnante e attivista femminista italiana (1941). Fondatrice con Elvio Fachinelli della rivista «L'erba voglio» negli anni Settanta, poi di «Lapis»; autrice di testi come L'infamia originaria, pietre miliari della teoria femminista italiana. Nel sito, in un pezzo di Annalisa Camilli su «Internazionale», è il caso che mette a fuoco la tensione tra impatto culturale indiscutibile e assenza di un modello di business che ne garantisca il sostentamento. Cosa imputabile naturalmente non a Melandri stessa, quanto a un vero e proprio fallimento del mercato.",
    articles: [
      { title: "La legge Bacchelli per Lea Melandri", url: "/curated/2026-06-06-internazionale-lea-melandri-bacchelli/", _source: "curated" }
    ]
  },
  {
    name: "Miyazaki, Hayao",
    type: "persona",
    note: "Regista e animatore giapponese (1941), cofondatore dello Studio Ghibli. Nel sito è citato come riferimento implicito del dibattito sulla crisi degli animatori giapponesi: il modello artigianale e il mentoring che hanno formato la sua generazione sono esattamente ciò che l'industria ha smantellato dopo il 1973.",
    articles: [
      { title: "The strange disappearance of Japan's animators", url: "/curated/2026-06-19-economist-1843-japan-animators/", _source: "curated" }
    ]
  },
  {
    name: "Ypi, Lea",
    type: "persona",
    note: "Filosofa e scrittrice albanese, docente alla LSE. Nel sito è citata due volte: come una delle quattro filosofe che secondo Gloria Origgi hanno rifondato la filosofia politica da Parigi — ripensando il marxismo come teoria dell'emancipazione contro un liberalismo che confonde libertà formale e libertà reale — e come una delle voci che hanno suggerito il pezzo di Jonathan White sulla colonizzazione tecnologica del pensiero sul futuro.",
    articles: [
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" },
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" },
      { title: "The Meaning of Commitment", url: "/curated/2026-07-29-ypi-meaning-of-commitment-tribune/", _source: "curated" }
    ]
  },
  {
    name: "Cordelli, Chiara",
    type: "persona",
    note: "Filosofa politica, docente a Chicago. Nel sito è citata per la sua analisi dell'esternalizzazione progressiva dello Stato a soggetti privati — dalle carceri al controllo delle frontiere in «Privatocrazia» — e, in «Ruled by None», per la tesi che il flusso di capitale di venture capital orienti oggi l'idea di futuro più di qualunque pianificazione pubblica.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" }
    ]
  },
  {
    name: "Landemore, Hélène",
    type: "persona",
    note: "Politologa, docente a Yale. Nel sito è citata per la sua proposta di assemblee cittadine selezionate per sorteggio come alternativa a una rappresentanza corrotta da media e interessi privati — metodo su cui ha lavorato concretamente alla costituzione islandese e alle Conventions Citoyennes francesi sul clima.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" }
    ]
  },
  {
    name: "Fricker, Miranda",
    type: "persona",
    note: "Filosofa, docente alla NYU. Nel sito è citata per il suo lavoro sull'ingiustizia epistemica: chi viene ascoltato e chi no, e come questa asimmetria sia essa stessa una forma di potere che la filosofia politica tradizionale ha per lo più ignorato.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" }
    ]
  },
  {
    name: "Origgi, Gloria",
    type: "persona",
    note: "Filosofa, ricercatrice CNRS a Parigi. Nel sito è l'autrice del pezzo che presenta quattro filosofe — Ypi, Cordelli, Landemore, Fricker — come prova che la filosofia politica, dopo decenni di egemonia maschile fatta più di sfoggio retorico che di proposte concrete, è tornata a essere una disciplina seria e politicamente rilevante.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" }
    ]
  },
  {
    name: "Diegoli, Gianluca",
    type: "persona",
    note: "Consulente di marketing ed e-commerce, autore della newsletter, blogger della prima ora, grande sperimentatore, figura pubblica, autore di libri rilevanti che vanno al di là del marketing. Nel sito è citato per la sua distinzione fra tre «IA» del commercio digitale — discovery lato consumatore, infrastruttura di back-office, agentica — sistematicamente confuse nel dibattito pubblico nonostante abbiano urgenza, maturità e grado di hype completamente diversi.",
    articles: [
      { title: "Le tre IA del Netcomm Forum", url: "/curated/2026-05-21-diegoli-tre-ia-netcomm-forum/", _source: "curated" },
      { title: "I podcast lunghi nell'era della mezza attenzione", url: "/curated/2026-06-29-diegoli-podcast-lunghi-mezza-attenzione-linkideeperlatv/", _source: "curated" }
    ]
  },
  {
    name: "Brooks, David",
    type: "persona",
    note: "Giornalista e saggista americano (1961), columnist del New York Times e staff writer del The Atlantic. Nel sito è citato per la tesi che nell'era dell'AI la discriminante non sia l'intelligenza ma il *need for cognition* — l'attitudine psicologica allo sforzo mentale. La sua tassonomia in tre gruppi (Productive Passengers, Reluctant Optimizers, Mental Marathoners) è uno strumento utile per leggere come le persone si rapporteranno all'AI nel lungo periodo.",
    articles: [
      { title: "The People Who Will Thrive in the AI Age", url: "/curated/2026-06-28-brooks-people-thrive-ai-age-atlantic/", _source: "curated" }
    ]
  },
  {
    name: "Hayles, Katherine",
    type: "persona",
    note: "Critica letteraria e teorica dei media americana (1943), docente a Duke. Nel sito è citata per la distinzione tra *iperattenzione* e *attenzione profonda* come due modalità cognitive: l'iperattenzione — la mente che passa rapidamente da stimolo a stimolo, multiprocesso e alta tolleranza alla noia — è un adattamento all'ambiente digitale contemporaneo, non un deficit. È il contesto culturale che rende il podcast lungo un antidoto strutturale, non un capriccio di formato.",
    articles: [
      { title: "I podcast lunghi nell'era della mezza attenzione", url: "/curated/2026-06-29-diegoli-podcast-lunghi-mezza-attenzione-linkideeperlatv/", _source: "curated" }
    ]
  },
  {
    name: "Droga, David",
    type: "persona",
    note: "Fondatore dell'agenzia Droga5, ex CEO di Accenture Song. Nel sito è citato per la sua tesi provocatoria: l'AI sta per spazzare via il mercato della creatività mediocre, non quella di qualità — un argomento che distingue nettamente fra lavoro «formulaico e medio» (automatizzabile) e originalità di gusto, contesto e strategia (non automatizzabile, secondo lui).",
    articles: [
      { title: "David Droga on AI and the end of 'mediocre' human-made ads", url: "/curated/2026-06-21-droga-ai-mediocre-ads/", _source: "curated" }
    ]
  },

  {
    name: "Austin, John L.",
    type: "persona",
    lab: true,
    note: "John Langshaw Austin (Lancaster, 1911 – Oxford, 1960), filosofo del linguaggio ordinario, professore a Oxford. In <em>How to Do Things with Words</em> (1962, postumo) ha articolato la distinzione tra atti linguistici locutori, illocutori e perlocutori, ridisegnando la filosofia del linguaggio del Novecento. Riferimento fondativo del Pre-Step 0 del progetto <em>Validating AI</em>.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/episteme-advisory/lab/", _source: "lab" }
    ]
  },
  {
    name: "Frayn, Michael",
    type: "persona",
    note: "Storico e drammaturgo inglese (1933). Nel sito è citato per *Copenhagen* (1998), la sua ricostruzione teatrale dell'incontro del 1941 tra Niels Bohr e Werner Heisenberg: un caso studio di come due scienziati dentro sistemi di potere in conflitto perdano una lingua comune. L'impossibilità di stabilire cosa i due si dissero davvero è, nel testo, la cifra della fine della scienza come conversazione neutrale.",
    articles: [
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" }
    ]
  },

  {
    name: "Shannon, Claude E.",
    type: "persona",
    note: "Matematico e ingegnere statunitense (1916–2001), fondatore della teoria dell’informazione. Nel sito è il fondamento formale della teoria del valore dei testi: l’entropia di uno stato come misura di indifferenza fra alternative, la ridondanza come nome esatto di ciò che il linguaggio comune chiama informazione, e la coincidenza di forma con l’entropia di Gibbs — notata da von Neumann, sfruttata da Brillouin — che autorizza a usare il lessico termodinamico parlando di scrittura.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "Ashby, W. Ross",
    type: "persona",
    note: "Psichiatra e cibernetico britannico (1903–1972), autore di <em>An Introduction to Cybernetics</em> (1956). Nel sito è il riferimento della legge della varietà richiesta, usata su due fronti: selezionare è l’operazione che rende un corpus adeguato a un problema, e un campo in cui i prior degli autori convergono diventa internamente muto pur continuando a pubblicare.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },
  {
    name: "Landauer, Rolf",
    type: "persona",
    note: "Fisico di IBM (1927–1999). Il suo principio — cancellare un bit ha un costo fisico minimo non nullo — è nel sito l’ancoraggio termodinamico dell’argomento sull’AI generativa: il costo di un testo è sempre stato nella cancellazione delle alternative, cioè nella selezione, mai nella produzione della stringa. Chi conclude che scrivere sia diventato gratuito ha misurato il termine sbagliato.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },

  // ─── TEORIE ───────────────────────────────────────────────────────────────

  {
    name: "shadow of the future",
    type: "teoria",
    note: "Il «peso del futuro» nella teoria dei giochi iterata: la cooperazione è sostenibile quando i giocatori si aspettano di incontrarsi ancora e il fattore di sconto δ è sufficientemente alto. Nel sito è il concetto centrale della serie «Ombre»: senza ombra del futuro la diserzione diventa razionale e il sistema cooperativo collassa.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "Fareed Zakaria on the Moral Cost of Trump's War", url: "/curated/2026-04-10-zakaria-trump-iran-war-nyt/", _source: "curated" },
      { title: "The Future, Made in China", url: "/curated/2026-08-03-osnos-future-made-china-newyorker/", _source: "curated" },
      { title: "Why people over the age of 55 are the new problem generation", url: "/curated/2025-01-02-economist-boomers-problem-generation/", _source: "curated" },
      { title: "Thucydides the perspicacious", url: "/curated/2026-08-03-polansky-schillinger-thucydides-aeon/", _source: "curated" },
      { title: "Taking Taiwan's democracy hostage", url: "/curated/2026-08-11-economist-taiwan-democracy-hostage/", _source: "curated" }
    ]
  },
  {
    name: "Tit-for-Tat",
    type: "teoria",
    note: "Strategia nel dilemma del prigioniero iterato: coopera alla prima mossa, poi copia esattamente l'azione dell'avversario. Nel torneo di Axelrod risulta la strategia vincente: semplice, chiara, non rancorosa. Nel sito è il metro per leggere le relazioni internazionali contemporanee, dove il meccanismo di reciprocità si è inceppato.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "dilemma del prigioniero iterato",
    type: "teoria",
    note: "Versione ripetuta del classico gioco in cui due attori ottengono risultati migliori cooperando, ma ognuno ha incentivo individuale a disertare. Quando il gioco è iterato e i giocatori si riconoscono, la cooperazione è un equilibrio stabile — ma richiede che il futuro pesi abbastanza. Nel sito è il modello teorico delle relazioni internazionali.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "The 'Manosphere' Isn't a Movement. It's a Multibillion-Dollar Grievance Industry", url: "/curated/2026-08-07-klee-manosphere-grift-economy-wired/", _source: "curated" }
    ]
  },
  {
    name: "win-set domestico",
    type: "teoria",
    note: "Nella teoria dei two-level games di Putnam: l'insieme degli accordi che la base domestica di un leader è disposta ad accettare. Un accordo internazionale è raggiungibile solo se i win-set dei due leader si intersecano. Nel sito spiega i fallimenti diplomatici in cui i vincoli interni rendono impossibile qualsiasi accordo razionale.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "two-level games",
    type: "teoria",
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
    note: "Concetto di Taleb: i sistemi antifragili traggono beneficio dallo stress e diventano più forti (oltre la dicotomia fragile/robusto). Richiede architettura distribuita: tante unità semi-indipendenti, fallimento localizzato, skin in the game. Nel sito è il metro per misurare la vulnerabilità delle democrazie: il caos indotto satura tutti i livelli simultaneamente e impedisce l'antifragilità.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "cigni neri",
    type: "teoria",
    note: "Concetto di Taleb: eventi rari, imprevedibili e di grande impatto che le statistiche tradizionali basate su distribuzioni gaussiane sistematicamente sottostimano. I fenomeni sociali ed economici hanno «code spesse». Nel sito è il presupposto epistemico per cui l'architettura antifragile è necessaria: il caos non è anomalia, è struttura.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "dottrina Gerasimov",
    type: "teoria",
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
    type: "teoria",
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
      { title: "What the Pope Said About A.I.", url: "/curated/2026-05-27-lepore-pope-leo-ai-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "paradigma tecnocratico",
    type: "teoria",
    note: "Termine introdotto da Papa Francesco in *Laudato Si'* (2015) e ripreso da Leo XIV in *Magnifica Humanitas* (2026): la tendenza a lasciare che logica di efficienza, controllo e profitto orientino da soli le decisioni personali, sociali ed economiche, svuotando ogni considerazione etica o antropologica. Nel sito è il bersaglio principale dell'enciclica sull'AI: non la tecnologia in sé ma il sistema di valori che la sviluppa e la governa.",
    articles: [
      { title: "What the Pope Said About A.I.", url: "/curated/2026-05-27-lepore-pope-leo-ai-newyorker/", _source: "curated" },
      { title: "The Future, Made in China", url: "/curated/2026-08-03-osnos-future-made-china-newyorker/", _source: "curated" },
      { title: "The Voice of Google", url: "/curated/2026-07-18-stapleton-voice-of-google-newyorker/", _source: "curated" },
      { title: "AI isn't the Manhattan Project — it's Jurassic Park", url: "/curated/2026-08-11-graff-jurassic-park-ai-doomsdayscenario/", _source: "curated" },
      { title: "An AI for Africa would be built on Hunhu/Ubuntu ethics", url: "/curated/2026-08-04-mangena-hunhu-ubuntu-ai-aeon/", _source: "curated" }
    ]
  },
  {
    name: "dual use",
    type: "teoria",
    note: "La proprietà di tecnologie e conoscenze di essere utilizzabili sia per scopi civili che militari. Nel sito è presentato come struttura normale dello sviluppo tecnologico, non come caso speciale: con le general purpose technologies, la distinzione origine/destinazione è inapplicabile per costruzione. Il termine funziona sempre troppo tardi, fino a risultare quasi inutile.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" },
      { title: "Meta Glasses, ICE e il futuro della sorveglianza indossabile", url: "/curated/2026-03-01-meta-glasses-privacy/", _source: "curated" },
      { title: "How surge in defence and dual-use technology investment could reconfigure global AI race", url: "/curated/2026-04-01-chatham-house-defence-ai-race/", _source: "curated" },
      { title: "Making Claude a chemist", url: "/curated/2026-06-05-anthropic-claude-chemist/", _source: "curated" }
    ]
  },
  {
    name: "dilemma di Collingridge",
    type: "teoria",
    note: "Paradosso sulla governance tecnologica: una tecnologia è controllabile quando non la capiamo ancora abbastanza da sapere cosa farne; quando la comprendiamo è già così radicata che il controllo è praticabile solo in forma di esenzione parziale. Nel sito spiega strutturalmente perché la classificazione dual use è sempre obsoleta quando diventa applicabile.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "What If We Can Never Trust A.I.?", url: "/curated/2026-08-01-rothman-trust-ai-newyorker/", _source: "curated" },
      { title: "AI isn't the Manhattan Project — it's Jurassic Park", url: "/curated/2026-08-11-graff-jurassic-park-ai-doomsdayscenario/", _source: "curated" }
    ]
  },
  {
    name: "general purpose technologies",
    type: "teoria",
    note: "Tecnologie (Bresnahan & Trajtenberg, 1995) che migliorano nel tempo, si applicano pervasivamente a tutti i settori e generano innovazioni complementari su scala sistemica: stampa, vapore, elettricità, Internet, AI. Nel sito è la categoria che rende inapplicabile la distinzione civile/militare: una GPT abita entrambi i domini per costruzione.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" },
      { title: "2025 AI and Semiconductor Outlook", url: "/curated/2025-01-01-fabricated-knowledge-ai-semiconductor-outlook/", _source: "curated" },
      { title: "The death of strategy (and what comes next)", url: "/curated/2026-05-20-smith-death-of-strategy/", _source: "curated" },
      { title: "IA, bulloni e umanesimo", url: "/curated/2026-06-28-pieranni-ia-bulloni-umanesimo-ilpartito/", _source: "curated" },
      { title: "The State of the AI Economy", url: "/curated/2026-06-25-azhar-state-ai-economy-exponentialview/", _source: "curated" },
      { title: "The Future, Made in China", url: "/curated/2026-08-03-osnos-future-made-china-newyorker/", _source: "curated" },
      { title: "What Are Companies Getting for All That A.I. Spending?", url: "/curated/2026-08-03-depillis-tokenomics-nyt/", _source: "curated" }
    ]
  },
  {
    name: "riserva cognitiva",
    type: "teoria",
    note: "Concetto delle neuroscienze: la salute cognitiva non è un dato biologico fisso ma una risorsa accumulata nel corso della vita attraverso istruzione, stimolazione mentale, attività fisica e reti sociali. Determina quanto a lungo il cervello riesce a compensare il danno neurodegenerativo prima che la demenza si manifesti. Nel sito è la chiave per leggere le disuguaglianze cognitive come disuguaglianze strutturali: chi non ha potuto accumulare riserva non è «meno fortunato», è stato sistematicamente escluso dalle condizioni che la rendono possibile.",
    articles: [
      { title: "How dementia is being defeated", url: "/curated/2026-07-09-economist-dementia-defeated/", _source: "curated" }
    ]
  },
  {
    name: "WEIRD",
    type: "teoria",
    note: "Acronimo (Western, Educated, Industrialized, Rich, Democratic) coniato dagli psicologi Henrich, Heine e Norenzayan (2010) per descrivere il campione implicito della ricerca scientifica e del design tecnologico. La stragrande maggioranza degli studi psicologici, cognitivi e medici — e degli strumenti digitali — è progettata per e testata su popolazioni WEIRD, che rappresentano meno del 15% dell'umanità. Nel sito è il concetto che mette in questione il presupposto implicito dell'infrastruttura cognitiva: chi è l'utente che immaginiamo?",
    articles: [
      { title: "How dementia is being defeated", url: "/curated/2026-07-09-economist-dementia-defeated/", _source: "curated" },
      { title: "An AI for Africa would be built on Hunhu/Ubuntu ethics", url: "/curated/2026-08-04-mangena-hunhu-ubuntu-ai-aeon/", _source: "curated" }
    ]
  },
  {
    name: "disuguaglianze",
    type: "teoria",
    note: "Le disuguaglianze strutturali — di reddito, istruzione, accesso alle cure, geografia — come variabile esplicativa trasversale. Nel sito entrano come correttivo al paradigma tecnologico dominante: gli strumenti cognitivi (AI inclusa) sono progettati per chi è già avvantaggiato, e rischiano di ampliare i divari invece di ridurli. La salute cognitiva in vecchiaia è un caso emblematico: il declino della demenza nei paesi ricchi convive con proiezioni invariate di triplicazione dei casi nel resto del mondo.",
    articles: [
      { title: "How dementia is being defeated", url: "/curated/2026-07-09-economist-dementia-defeated/", _source: "curated" }
    ]
  },
  {
    name: "extended mind",
    type: "teoria",
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
    note: "Paradigma cognitivo e filosofico secondo cui la cognizione è radicata nella struttura corporea del soggetto e nella sua interazione con l'ambiente, contro il cognitivismo classico (mente come software su hardware). Nel sito è il criterio per distinguere la mente biologica dal LLM: senza corpo non si dà cogito nel senso pieno.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "The mind does not exist", url: "/curated/2021-08-30-gough-no-mind-aeon/", _source: "curated" }
    ]
  },
  {
    name: "scrittura",
    type: "teoria",
    note: "La scrittura come atto cognitivo, non solo comunicativo, è uno dei fili tematici più sottili e costanti del sito. Il dibattito sull'AI vi entra da angolazioni diverse: come rivelatore — il tratto stilistico è segnale di origine, e l'em dash è il caso emblematico; come strumento — chi usa Claude Code non smette di scrivere, cambia il rapporto con la struttura del testo; come rischio — Stephens sostiene che delegare la scrittura all'AI significhi delegare l'articolazione del pensiero. Il fondamento teorico comune è il capitale semantico: la pratica della scrittura ordinaria è la stessa riserva cognitiva che si attiva nella scrittura che conta.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" },
      { title: "Humans vs. Bots — Who Does the Em Dash Better?", url: "/curated/2026-06-10-nyt-em-dash-ai/", _source: "curated" },
      { title: "How to spot AI writing", url: "/curated/2026-07-30-economist-ai-writing-detection/", _source: "curated" },
      { title: "I'm Begging You: Never Write With A.I.", url: "/curated/2026-08-04-stephens-never-write-ai-nyt/", _source: "curated" },
      { title: "If You're Over 40, You're Ready to Use A.I.", url: "/curated/2026-07-27-millman-kabbalah-ai-nyt/", _source: "curated" },
      { title: "AI Has Plunged the Book Publishing Industry Into Utter Chaos", url: "/curated/2026-08-17-silman-ai-publishing-chaos-wsj/", _source: "curated" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "free-energy principle",
    type: "teoria",
    note: "Teoria di Karl Friston: il cervello è un sistema di previsione bayesiana che minimizza continuamente l'errore tra il modello interno del mondo e gli input sensoriali in arrivo. Nel sito è citato per mostrare che anche le teorie più potenti della cognizione biologica sono modelli, non prove di coscienza — e non colmano il divario con i LLM.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "LLM come attante zero",
    type: "teoria",
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
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "capitale semantico",
    type: "teoria",
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
      { title: "If You're Over 40, You're Ready to Use A.I.", url: "/curated/2026-07-27-millman-kabbalah-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "scenario planning",
    type: "teoria",
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
    note: "Principio epistemologico di Vico (1725): conosciamo veramente solo ciò che abbiamo fatto. Le scienze naturali studiano un mondo non prodotto da noi; le humanities studiano istituzioni umane conoscibili dall'interno perché le abbiamo costruite. Nel sito è la base per difendere la rilevanza epistemologica irriducibile delle discipline umanistiche.",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" }
    ]
  },
  {
    name: "ermeneutica del sospetto",
    type: "teoria",
    note: "Espressione di Paul Ricœur per descrivere l'approccio di Marx, Nietzsche e Freud: smascherare le ideologie dietro il testo. Nel sito è citata come il metodo dell'ala accademica progressista che ha ridotto la tradizione umanistica a documento dell'oppressione, fornendo involontariamente copertura a chi voleva trasformare l'università in business school.",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" },
      { title: "Why Are Humanists So Bad at Defending the Humanities?", url: "/curated/2026-06-15-pinillos-humanists-humanities-chronicle/", _source: "curated" }
    ]
  },
  {
    name: "incredulità verso le metanarrazioni",
    type: "teoria",
    note: "Definizione lyotardiana della condizione postmoderna (1979): la perdita di legittimità dei grandi sistemi di giustificazione (Ragione, Storia, Progresso). Nel sito è presentata come diagnosi, non come prescrizione — Lyotard descriveva un fatto, non lo celebrava. Il problema è nei suoi epigoni, che ne hanno fatto uno strumento di relativismo attivo.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "The Meaning of Commitment", url: "/curated/2026-07-29-ypi-meaning-of-commitment-tribune/", _source: "curated" }
    ]
  },
  {
    name: "inemendabilità della realtà",
    type: "teoria",
    note: "Concetto del nuovo realismo di Ferraris: la realtà resiste agli schemi concettuali che le applichiamo. Non possiamo interpretarla arbitrariamente perché essa oppone resistenza. Nel sito è il limite esterno del processo interpretativo: senza questo vincolo non rimane libertà di interpretare, ma solo il potere di imporre la propria narrazione.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "The Meaning of Commitment", url: "/curated/2026-07-29-ypi-meaning-of-commitment-tribune/", _source: "curated" }
    ]
  },
  {
    name: "educazione estetica",
    type: "teoria",
    note: "Concetto di Friedrich Schiller (Lettere sull'educazione estetica dell'uomo, 1795): l'arte come processo collettivo di ricerca della verità, capace di orientare l'essere umano da una vita puramente sensibile verso una moralità più coltivata — non come precettistica rigida ma come capacità di abitare prospettive diverse e costruire relazioni con altri. Nel sito è il framework con cui Ypi legge la letteratura impegnata: la scrittura come mezzo per rompere il rapporto con le predazioni del presente e immaginare alternative.",
    articles: [
      { title: "The Meaning of Commitment", url: "/curated/2026-07-29-ypi-meaning-of-commitment-tribune/", _source: "curated" }
    ]
  },
  {
    name: "ragione comunicativa",
    type: "teoria",
    note: "Concetto di Habermas: ogni volta che argomentiamo presupponiamo già norme condivise — la struttura pragmatica dell'argomentazione richiede che la migliore argomentazione possa prevalere sulla forza. Nel sito è l'universale minimo che il relativismo non può abolire senza autocontraddirsi: argomentare contro l'argomentazione è già argomentare.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "La colonizzazione del giudizio", url: "/curated/2026-06-12-corriere-colonizzazione-giudizio/", _source: "curated" }
    ]
  },
  {
    name: "istituzioni inclusive vs. estrattive",
    type: "teoria",
    note: "Distinzione di Acemoglu e Robinson (Why Nations Fail, 2012): le istituzioni inclusive distribuiscono potere politico ed economico e generano prosperità; quelle estrattive lo concentrano nelle mani di pochi e generano stagnazione. Nel sito è il quadro per leggere le traiettorie di lungo periodo dei paesi analizzati nella serie «Ombre».",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "disputa sugli universali",
    type: "teoria",
    note: "Controversia filosofica medievale (XI–XIV sec.) su se i concetti generali abbiano esistenza reale (realismo), siano solo nomi (nominalismo) o esistano nella mente (concettualismo). Nel sito è usata per discutere lo statuto ontologico dei contenuti dei LLM: per il platonico stanno in un altrove separato; per il nominalista non stanno affatto.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" },
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" }
    ]
  },
  {
    name: "Mavi Vatan",
    type: "teoria",
    note: "«Patria Blu»: dottrina geopolitica turca che rivendica la sovranità sul Mediterraneo orientale, il Mar Nero e il Mar Egeo come spazio di sicurezza nazionale. Nel sito è il contrasto implicito con l'incapacità italiana di pensare strategicamente il mare: la Turchia ha costruito un'identità politica fondata sul bacino marino, l'Italia lo vede solo come emergenza.",
    articles: [
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "fattore di sconto δ",
    type: "teoria",
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
    type: "teoria",
    note: "Il complesso di politiche, programmi e architetture istituzionali con cui paesi e organizzazioni internazionali trasferiscono risorse ai paesi a basso reddito. Nel sito è il bersaglio implicito del dibattito sui trasferimenti monetari diretti: l'evidenza che la semplicità batta la sofisticazione costringe a riconsiderare l'intero impianto tradizionale.",
    articles: [
      { title: "One neat trick to end extreme poverty", url: "/curated/2026-04-09-end-extreme-poverty/", _source: "curated" }
    ]
  },
  {
    name: "successione aziendale",
    type: "teoria",
    note: "Il processo di trasmissione della leadership e della proprietà di un'impresa da una generazione o gestione alla successiva. Nel sito è il tema di un caso studio sulle aziende creative di piccole dimensioni: la trasmissione della leadership in questi contesti non assomiglia né a quella delle imprese familiari tradizionali né a quella delle corporation.",
    articles: [
      { title: "Podcast: la successione nelle aziende creative", url: "/curated/2026-04-09-podcast-successione-aziende-creative/", _source: "curated" }
    ]
  },
  {
    name: "piccola impresa",
    type: "teoria",
    note: "Nel sito è il contesto dimensionale in cui si gioca il problema della successione aziendale nelle industrie creative: scale ridotte, dipendenza dalla figura fondatrice, assenza delle strutture di governance che attutiscono il passaggio generazionale nelle organizzazioni più grandi.",
    articles: [
      { title: "Podcast: la successione nelle aziende creative", url: "/curated/2026-04-09-podcast-successione-aziende-creative/", _source: "curated" }
    ]
  },
  {
    name: "editoria",
    type: "teoria",
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
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "memoria storica",
    type: "teoria",
    note: "Nel sito è il terreno di scontro politico attivato dalla digitalizzazione delle schede di iscrizione al NSDAP da parte di Der Spiegel: la domanda aperta è se la sensibilizzazione di massa su un passato totalitario non avrebbe più valore se resa universale invece che dietro paywall, soprattutto mentre forze come l'AfD ne contestano la rilevanza.",
    articles: [
      { title: "NSDAP-Archiv: Finden Sie heraus, was Ihre Familie unter Hitler getan hat", url: "/curated/2026-05-07-spiegel-nsdap-archiv/", _source: "curated" }
    ]
  },
  {
    name: "legge Bacchelli",
    type: "teoria",
    note: "Legge italiana dell'8 agosto 1985, n. 440, che consente al Presidente del Consiglio di concedere un vitalizio a cittadini illustri in stato di necessità, con merito comprovato in campo scientifico, culturale, sportivo o sociale. Nel sito è il caso Lea Melandri: un punto dolente per chi sostiene che la produzione di conoscenza debba reggersi su un modello di business solido, non sulla sola buona volontà o sul sussidio pubblico ad hoc.",
    articles: [
      { title: "La legge Bacchelli per Lea Melandri", url: "/curated/2026-06-06-internazionale-lea-melandri-bacchelli/", _source: "curated" }
    ]
  },
  {
    name: "propaganda",
    type: "teoria",
    note: "Nel sito è collegata alla sovrapposizione crescente tra i piani dell'informazione e della difesa: la nomina di un generale britannico, ex comandante della 77 Brigade, come defence editor dell'Economist è il caso che rende visibile quanto i contenuti che ne escono sembrino sempre meno innocui — un tema che dialoga con la dottrina Gerasimov e il controllo riflessivo già trattati altrove sul sito.",
    articles: [
      { title: "Alex Turner appointed as Defence Editor of The Economist", url: "/curated/2026-06-19-economist-defence-editor-turner/", _source: "curated" },
      { title: "Unmasking the anonymous hosts of 'Russians With Attitude,' a pro-war podcast popular with US far right", url: "/curated/2026-04-06-hourani-russians-with-attitude-kyivindependent/", _source: "curated" }
    ]
  },
  {
    name: "industria dell'animazione",
    type: "teoria",
    note: "Nel sito è il caso degli animatori giapponesi: un mercato quasi triplicato in un decennio (fino a 19 miliardi di dollari) che resta cronicamente incapace di formare e remunerare chi produce materialmente il valore — solo uno su cinque riceve oggi formazione sul campo, contro sette su dieci una generazione fa. Un caso da manuale per chi si occupa di editoria e publishing più in generale.",
    articles: [
      { title: "The strange disappearance of Japan's animators", url: "/curated/2026-06-19-economist-1843-japan-animators/", _source: "curated" }
    ]
  },
  {
    name: "economia",
    type: "teoria",
    note: "Filo tematico ricorrente nei curated del sito, in due varianti distinte: come dibattito sugli strumenti di riduzione della povertà estrema (i trasferimenti monetari diretti contro l'architettura assistenziale tradizionale) e come lente con cui leggere la sostenibilità di filiere produttive — dalla cultura all'animazione — che crescono senza remunerare chi ci lavora.",
    articles: [
      { title: "One neat trick to end extreme poverty", url: "/curated/2026-04-09-end-extreme-poverty/", _source: "curated" }
    ]
  },
  {
    name: "macroeconomia",
    type: "teoria",
    note: "Nel sito è il quadro teorico evocato dal dibattito sui trasferimenti monetari diretti: l'evidenza che la semplicità batta la sofisticazione nella riduzione della povertà estrema costringe a riconsiderare assunzioni macroeconomiche più ampie sull'efficacia delle architetture assistenziali tradizionali.",
    articles: [
      { title: "One neat trick to end extreme poverty", url: "/curated/2026-04-09-end-extreme-poverty/", _source: "curated" }
    ]
  },
  {
    name: "commoditizzazione",
    type: "teoria",
    note: "La dinamica per cui un bene o servizio che era differenziato diventa fungibile e il vantaggio competitivo si sposta sul costo marginale di produzione. Nel sito è la lente con cui Thompson legge la competizione sui modelli AI: il token non è la merce giusta, lo è l'intelligenza (output corretto per unità di costo). Chi ha il costo marginale più basso vince; chi non riesce a coprire i costi fissi esce. La strategia cinese di pubblicare i pesi è letta come 'commoditize your complements': aprire l'AI riduce il vantaggio americano nel software e accelera il vantaggio cinese nel mondo fisico.",
    articles: [
      { title: "Who's Afraid of Chinese Models?", url: "/curated/2026-07-20-stratechery-chinese-models/", _source: "curated" }
    ]
  },
  {
    name: "marketing",
    type: "teoria",
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
    type: "teoria",
    note: "Standard che estende Schema.org con termini specifici per il largo consumo — categoria merceologica, allergeni, dettagli logistici — per dare «voce» ai codici a barre sul web. Nel sito è il caso esemplare di infrastruttura semantica mancante: un barcode tradizionale è muto per i motori di ricerca, generativi compresi.",
    articles: [
      { title: "GS1 Web Vocabulary: il dizionario universale che dà voce ai prodotti nel web 3.0", url: "/curated/2026-02-05-giulieri-gs1-web-vocabulary/", _source: "curated" }
    ]
  },
  {
    name: "Schema.org",
    type: "teoria",
    note: "Vocabolario condiviso da Google, Microsoft e altri motori di ricerca per marcare semanticamente i contenuti web. Nel sito è la base su cui si costruisce il GS1 Web Vocabulary, e più in generale il riferimento per qualsiasi discussione su come rendere i contenuti leggibili dalle macchine, motori AI compresi.",
    articles: [
      { title: "GS1 Web Vocabulary: il dizionario universale che dà voce ai prodotti nel web 3.0", url: "/curated/2026-02-05-giulieri-gs1-web-vocabulary/", _source: "curated" }
    ]
  },
  {
    name: "web semantico",
    type: "teoria",
    note: "L'idea — di cui il GS1 Web Vocabulary è un'implementazione concreta — che i contenuti del web debbano essere strutturati in modo leggibile dalle macchine, non solo dagli umani. Nel sito è il prerequisito infrastrutturale, spesso assente nei cataloghi italiani, perché i prodotti siano «letti» e citati dai motori di ricerca generativi.",
    articles: [
      { title: "GS1 Web Vocabulary: il dizionario universale che dà voce ai prodotti nel web 3.0", url: "/curated/2026-02-05-giulieri-gs1-web-vocabulary/", _source: "curated" }
    ]
  },
  {
    name: "e-commerce",
    type: "teoria",
    note: "Nel sito è il settore attraversato da due pezzi complementari: la domanda se i prodotti italiani siano leggibili dai motori di ricerca generativi (infrastruttura semantica), e la distinzione fra le tre «IA» del commercio digitale che il settore confonde sistematicamente — discovery, infrastruttura, agentica.",
    articles: [
      { title: "Le tre IA del Netcomm Forum", url: "/curated/2026-05-21-diegoli-tre-ia-netcomm-forum/", _source: "curated" }
    ]
  },
  {
    name: "GEO",
    type: "teoria",
    note: "Generative Engine Optimization: l'equivalente della SEO per i motori di ricerca generativi. Nel sito è il problema pratico di chi si lamenta di non comparire nelle risposte AI senza sapere che, spesso, il blocco bot di Cloudflare attivo di default restituisce 403 proprio ai crawler che vorrebbe accogliere.",
    articles: [
      { title: "Le tre IA del Netcomm Forum", url: "/curated/2026-05-21-diegoli-tre-ia-netcomm-forum/", _source: "curated" }
    ]
  },
  {
    name: "pubblicità",
    type: "teoria",
    note: "Nel sito è il settore su cui David Droga distingue lavoro creativo «formulaico e medio» (che l'AI sostituirà) da originalità di gusto e strategia (che no) — mentre OpenAI punta a metà dei ricavi pubblicitari di Meta in tre anni e i riassunti AI erodono il traffico su cui si basa l'intero ecosistema.",
    articles: [
      { title: "David Droga on AI and the end of 'mediocre' human-made ads", url: "/curated/2026-06-21-droga-ai-mediocre-ads/", _source: "curated" }
    ]
  },
  {
    name: "stock option",
    type: "teoria",
    note: "Nel sito è il meccanismo al centro del caso Bending Spoons: un pool di 51 milioni di azioni distribuite ai dipendenti, e il regime fiscale agevolato britannico (EMI) che spiega parte del vantaggio di Londra su Roma e Milano nel generare startup di seconda generazione dagli ex-dipendenti di aziende quotate.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "paideia",
    type: "teoria",
    note: "Il concetto greco di formazione integrale della persona — non istruzione tecnica ma coltivazione del carattere, del giudizio e della capacità di partecipare alla vita civica. Nel sito è il termine che gli umanisti invocano per difendere le proprie discipline, e che Pinillos identifica come parte del problema: un argomento circolare che funziona solo su chi è già convinto del valore della formazione umanistica.",
    articles: [
      { title: "A Defense of a Liberal Arts Education in the Age of A.I.", url: "/curated/2026-05-21-frey-liberal-arts-ai-nyt/", _source: "curated" },
      { title: "Why Are Humanists So Bad at Defending the Humanities?", url: "/curated/2026-06-15-pinillos-humanists-humanities-chronicle/", _source: "curated" }
    ]
  },
  {
    name: "università",
    type: "istituzione",
    note: "Nel sito compare in due contesti distinti: come istituzione che ha abdicato alla formazione umanistica — riducendola a critica dell'oppressione o convertendola in business school — e come luogo in cui quella formazione, fatta bene, produce ancora la competenza cognitiva più preziosa del presente: leggere, scrivere, argomentare con precisione.",
    articles: [
      { title: "A Defense of a Liberal Arts Education in the Age of A.I.", url: "/curated/2026-05-21-frey-liberal-arts-ai-nyt/", _source: "curated" },
      { title: "Why Are Humanists So Bad at Defending the Humanities?", url: "/curated/2026-06-15-pinillos-humanists-humanities-chronicle/", _source: "curated" }
    ]
  },
  {
    name: "metodo scientifico",
    type: "teoria",
    note: "Il processo con cui acquisiamo informazione e strutturiamo la conoscenza. Nel sito è l'oggetto della carrellata di Kevin Kelly (2006/2026): non un insieme fisso di protocolli ma una struttura vivente che si modifica con gli strumenti disponibili — e che l'AI potrebbe cambiare nei prossimi 80 anni più di quanto non abbia fatto nei precedenti 80.",
    articles: [
      { title: "Speculations on the Future of the Scientific Method", url: "/curated/2026-05-04-kevin-kelly-future-scientific-method/", _source: "curated" }
    ]
  },
  {
    name: "ghostwriting",
    type: "teoria",
    note: "La pratica di scrivere testi firmati da altri. Nel sito è il termine chiave del pezzo di Dondi: il ghostwriting ha sempre reso invisibile il lavoro di supporto alle figure di potere senza che questo fosse considerato imbroglio. L'AI ne è una versione più economica e accessibile — e l'indignazione che suscita rivela che il privilegio viene contestato solo quando smette di essere esclusivo.",
    articles: [
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" }
    ]
  },
  {
    name: "privilegio",
    type: "teoria",
    note: "Nel sito è il nodo del ragionamento di Dondi: chi ha potere ha sempre avuto accesso a supporto — ghostwriter, editor, speechwriter, assistenti di ricerca — senza che questo fosse considerato imbroglio o segno di incompetenza. I privilegi non si confessano: si usano. L'AI rende visibile questa asimmetria rendendola accessibile a chi ne era storicamente escluso.",
    articles: [
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" }
    ]
  },
  {
    name: "lavoro invisibile",
    type: "teoria",
    note: "Il lavoro non riconosciuto, non retribuito o non attribuito che sorregge la produzione culturale e intellettuale visibile. Nel sito è il filo che connette il caso Dondi (ghostwriting come privilegio del potere) e il caso Melandri (chi ha prodotto conoscenza senza ricevere una rendita adeguata dall'industria che ne ha beneficiato).",
    articles: [
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" }
    ]
  },
  {
    name: "femminicidio",
    type: "teoria",
    note: "L'omicidio di donne motivato da odio misogino o da dinamiche di controllo maschile. Nel sito è la categoria statistica al centro del pezzo di Columbro: costruita socialmente come tutte le categorie — GDP, disoccupazione, ondate di calore — ma necessaria per misurare un pattern asimmetrico che i dati Istat documentano con chiarezza (53% delle donne ucciso da partner o ex, contro il 4,7% degli uomini).",
    articles: [
      { title: "Il femminicidio non esiste", url: "/curated/2026-05-06-columbro-femminicidio-non-esiste/", _source: "curated" }
    ]
  },
  {
    name: "costruttivismo",
    type: "teoria",
    note: "La postura epistemologica secondo cui le categorie con cui descriviamo la realtà sono costruzioni sociali, storiche e culturali, non rispecchiamenti di entità naturali preesistenti. Nel sito è la posizione corretta e ben argomentata di Columbro sulle statistiche — e insieme il punto di vulnerabilità che il negazionismo sfrutta quando la distinzione tra costruzione della categoria e negazione del fenomeno non viene esplicitata.",
    articles: [
      { title: "Il femminicidio non esiste", url: "/curated/2026-05-06-columbro-femminicidio-non-esiste/", _source: "curated" }
    ]
  },
  {
    name: "ontologia sociale",
    type: "teoria",
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
    note: "La tradizione etica che si concentra sul carattere del soggetto morale piuttosto che su principi universali o calcolo delle conseguenze. Nel sito è riletta attraverso Brady su Nussbaum come una diversa ontologia etica: non un'alternativa all'utilitarismo che aggiunge «virtù» all'ontologia, ma una proposta in cui i problemi — le sfere dell'attività umana dove la scelta è inevitabile — sono primari, e le virtù ne sono le soluzioni virtuali.",
    articles: [
      { title: "A Problem-Based Reading of Nussbaum's Virtue Ethics", url: "/curated/2018-09-04-brady-nussbaum-virtue-ethics-epochemagazine/", _source: "curated" }
    ]
  },
  {
    name: "liberalismo",
    type: "teoria",
    note: "La tradizione filosofico-politica fondata sulla libertà individuale, i diritti, lo stato di diritto e i limiti al potere arbitrario. Nel sito è il valore identitario con cui The Economist costruisce la propria autorità editoriale — una strategia di marketing valoriale distinta dal «marketing della verità» di WaPo e NYT, più resistente alle crisi di credibilità legate all'assetto proprietario.",
    articles: [
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" }
    ]
  },
  {
    name: "marketing valoriale",
    type: "teoria",
    note: "La strategia comunicativa di costruire l'identità di un brand attorno a un sistema di valori, non solo a una promessa funzionale o fattuale. Nel sito è il modo in cui The Economist ha risposto alla crisi di fiducia nei media: non difendere la verità come valore giornalistico (come WaPo e NYT nel 2016), ma difendere il liberalismo come sistema di valori su scala globale — con molta agiografia, ma con più resistenza strutturale.",
    articles: [
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" },
      { title: "Per contare devi farti amare (l'attenzione non basta più)", url: "/curated/2025-11-10-tarchetti-love-brand-editoria-nonhocapito/", _source: "curated" }
    ]
  },
  {
    name: "data journalism",
    type: "teoria",
    note: "Il giornalismo che usa dati, visualizzazioni e codice come strumenti narrativi e di indagine. Nel sito è il caso in cui la commoditizzazione del layer meccanico (costruire mappe, dashboard, indici) rende più visibile — non meno — il valore del giudizio di dominio: sapere quale domanda vale la pena fare, riconoscere quando l'output è plausibile ma sbagliato, scomporre il problema in modi utili. Jacopo Ottaviani è il caso studio principale.",
    articles: [
      { title: "From weeks of work to days: How I rebuilt two data journalism projects with AI", url: "/curated/2026-06-26-ottaviani-data-journalism-ai-reuters/", _source: "curated" }
    ]
  },
  {
    name: "two-pizza team",
    type: "teoria",
    note: "Principio organizzativo di Amazon (attribuito a Jeff Bezos): nessun team dovrebbe essere così grande da non poter essere sfamato con due pizze. Non è una regola sul cibo ma sull'ownership: team piccoli dove ogni membro conosce il lavoro degli altri, può prendere decisioni reversibili senza chiedere permesso e possiede il problema end-to-end. Nel sito è il sistema immunitario contro l'entropia organizzativa — la tendenza dei team che crescono a sviluppare dipendenze, layer di approvazione e rallentamenti che erodono la velocità che aveva reso il team efficace.",
    articles: [
      { title: "A Return to Two-Pizza Culture", url: "/curated/2026-06-30-vogels-two-pizza-culture-allthingsdistributed/", _source: "curated" }
    ]
  },
  {
    name: "moral deskilling",
    type: "teoria",
    note: "Il rischio che la delega crescente di scelte etiche alle macchine eroda la capacità umana di fare ragionamento morale autonomo. Se i sistemi AI decidono sempre più spesso cosa è giusto fare — in contesti medici, legali, militari, quotidiani — gli esseri umani potrebbero perdere l'abitudine, e poi la competenza, di farlo da soli. Nel sito è il contrappeso al ottimismo sulla filosofia nelle AI labs: non basta mettere principi dentro i modelli se chi li usa smette di esercitare il proprio giudizio.",
    articles: [
      { title: "Why Big AI Labs Are Hiring So Many Philosophers", url: "/curated/2026-06-24-economist-ai-labs-philosophers/", _source: "curated" }
    ]
  },
  {
    name: "cosmotecnica",
    type: "teoria",
    note: "Termine del filosofo Yuk Hui: ogni civiltà ha la propria tecnica radicata nella propria cosmologia — la tecnologia non è universale ma espressione di un modo di stare nel mondo. La cosmotecnica occidentale è fondata sul dominio sulla natura (Cartesio, Bacone); quella cinese sulle grandi tradizioni filosofiche (taoismo, confucianesimo, buddismo) che hanno sempre concepito la macchina come un elemento non necessariamente alieno, e sulla continuità della tradizione statale. Nel sito è il quadro che ridefinisce la «gara» sino-americana sull'AI: non chi costruisce modelli più potenti, ma chi costruisce modelli con quale cosmologia sottostante.",
    articles: [
      { title: "Cosa intende la Cina per «intelligenza artificiale»", url: "/curated/2026-06-25-pieranni-cina-intelligenza-artificiale-altriorienti/", _source: "curated" }
    ]
  },
  {
    name: "patto sociale",
    type: "teoria",
    note: "L'accordo implicito tra Stato e cittadini che definisce i termini della legittimità politica: obbedienza e ordine in cambio di protezione, benessere e opportunità. Nel sito è il quadro con cui leggere la Cina di fronte all'automazione: il lavoro non è solo questione economica ma fondamento del patto tra il Partito e la popolazione — 12,7 milioni di neolaureati espulsi dal mercato dal lavoro degli agenti AI non è solo un dato occupazionale, è una pressione sulla tenuta del consenso.",
    articles: [
      { title: "IA, bulloni e umanesimo", url: "/curated/2026-06-28-pieranni-ia-bulloni-umanesimo-ilpartito/", _source: "curated" }
    ]
  },
  {
    name: "guerra asimmetrica",
    type: "teoria",
    note: "Conflitto in cui gli attori dispongono di capacità radicalmente diverse e il più debole compensa con tattiche non convenzionali — intelligence umana, sabotaggio, reti clandestine. Nel sito è il quadro operativo della resistenza ucraina nei territori occupati: la kill chain alimentata da agenti civili (*vidma*) sostituisce le forze regolari dove queste non possono operare. Dialoga con la dottrina Gerasimov e il controllo riflessivo già presenti nel sito, ma dalla prospettiva opposta: non dell'aggressore ibrido, ma di chi subisce l'occupazione e risponde con gli strumenti del più debole.",
    articles: [
      { title: "The Warrior-Witches of Ukraine's Resistance", url: "/curated/2026-06-21-harbaugh-warrior-witches-ukraine-atlantic/", _source: "curated" }
    ]
  },
  {
    name: "dati come beni comuni",
    type: "teoria",
    note: "L'idea che i dati — specialmente quelli prodotti collettivamente da comunità, territori e archivi culturali — debbano essere governati come beni comuni anziché come risorse estrattive di soggetti privati. Nel sito emerge dalla lettura di *Magnifica Humanitas* da parte di Boccia Artieri: la privacy individuale non basta, serve una risposta collettiva che includa infrastrutture pubbliche, dataset aperti e verificabili, forme cooperative di produzione tecnologica. Dialoga con il tema del capitale semantico e con la critica all'economia dell'estrazione.",
    articles: [
      { title: "Magnifica Humanitas: le nuove terre rare del potere", url: "/curated/2026-06-17-boccia-artieri-magnifica-humanitas-substack/", _source: "curated" }
    ]
  },
  {
    name: "vibe coding",
    type: "teoria",
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
    note: "Costrutto psicologico (Cacioppo e Petty, 1982): la tendenza individuale a impegnarsi e trarre soddisfazione dal pensiero elaborativo. Le persone con alta NFC cercano attivamente la difficoltà cognitiva, la trovano piacevole e la usano per formarsi giudizi propri; quelle con bassa NFC la evitano sistematicamente. Nel sito è il metro con cui Brooks legge la polarizzazione cognitiva nell'era dell'AI: la NFC correla con l'intelligenza ma non coincide — ci sono persone molto intelligenti con bassa NFC e viceversa.",
    articles: [
      { title: "The People Who Will Thrive in the AI Age", url: "/curated/2026-06-28-brooks-people-thrive-ai-age-atlantic/", _source: "curated" },
      { title: "Una lunga avventura: storia degli adventure game", url: "/curated/2026-06-11-machera-adventure-game-linkideeperlatv/", _source: "curated" }
    ]
  },
  {
    name: "polarizzazione cognitiva",
    type: "teoria",
    note: "Scenario descritto da David Brooks nell'era dell'AI: chi ha alta NFC userà l'AI per pensare di più e diventare più produttivo; chi ha bassa o media NFC la userà per pensare di meno, perdendo progressivamente capacità critica e autonomia di giudizio. Brooks sostiene che questa polarizzazione potrebbe essere più grave di quella economica o politica, dividendo la società in qualcosa che comincia ad assomigliare a due specie diverse. Dialoga con il moral deskilling già presente nel sito.",
    articles: [
      { title: "The People Who Will Thrive in the AI Age", url: "/curated/2026-06-28-brooks-people-thrive-ai-age-atlantic/", _source: "curated" },
      { title: "Europe's public broadcasters go from prime time to hard-to-find", url: "/curated/2026-07-09-economist-psb-europe-hard-to-find/", _source: "curated" }
    ]
  },
  {
    name: "mezza attenzione",
    type: "teoria",
    note: "Espressione usata da Gianluca Diegoli per descrivere una modalità di fruizione dei media in cui l'utente è impegnato in un'attività principale (stirare, cucinare, fare le faccende) mentre segue un contenuto audio o video in sottofondo. Non distrazione, ma ascolto stratificato: la televisione pomeridiana l'ha strutturato per decenni, YouTube e i podcast video lunghi la replicano oggi per un pubblico più giovane e istruito. Dialoga con il concetto di iperattenzione di Hayles: i due poli non si escludono, convivono nella stessa persona a seconda del contesto.",
    articles: [
      { title: "I podcast lunghi nell'era della mezza attenzione", url: "/curated/2026-06-29-diegoli-podcast-lunghi-mezza-attenzione-linkideeperlatv/", _source: "curated" }
    ]
  },
  {
    name: "iperattenzione",
    type: "teoria",
    note: "Concetto di Katherine Hayles: modalità cognitiva caratterizzata da rapido switching tra focus diversi, alta tolleranza alla noia, preferenza per input multipli simultanei. È un adattamento all'ambiente digitale, non un deficit — e la forma dominante dell'attenzione nelle generazioni cresciute con Internet. Nel sito è il contesto che spiega il successo del podcast lungo: il formato fiume non va contro l'iperattenzione ma le offre un'uscita strutturata, uno spazio in cui il carico cognitivo è basso e controllabile.",
    articles: [
      { title: "I podcast lunghi nell'era della mezza attenzione", url: "/curated/2026-06-29-diegoli-podcast-lunghi-mezza-attenzione-linkideeperlatv/", _source: "curated" }
    ]
  },
  {
    name: "news avoidance",
    type: "teoria",
    note: "Comportamento documentato dal Reuters Institute: la scelta attiva — o semi-conscia — di evitare le notizie, spesso o a volte. Non è indifferenza ma una risposta all'ansia, alla sfiducia e alla sensazione che informarsi non cambi nulla. Nel sito è misurata per l'Italia nel 2026 al 36% — dato che va letto insieme al calo della fiducia sistemica: i due fenomeni si alimentano a vicenda. Dialoga con il concetto di iperattenzione di Hayles: l'evitamento delle notizie può essere sia una forma di autodifesa cognitiva sia un effetto collaterale della frammentazione dell'attenzione.",
    articles: [
      { title: "Com'è cambiata l'informazione in Italia negli ultimi 6 anni", url: "/curated/2026-06-19-mauro-informazione-italia-digital-news-report/", _source: "curated" },
      { title: "Europe's public broadcasters go from prime time to hard-to-find", url: "/curated/2026-07-09-economist-psb-europe-hard-to-find/", _source: "curated" }
    ]
  },
  {
    name: "sfiducia sistemica",
    type: "teoria",
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
    note: "Sistemi d'arma che identificano e ingaggiano bersagli senza intervento umano diretto. Nel sito è il punto terminale del ragionamento di Brose: la normativa del Pentagono non proibisce esplicitamente l'automazione della kill chain, e in conflitti protratti ci si avvicina a sistemi che «vanno finché trovano qualcosa da colpire». Dialoga con il problema del rubber stamp — un umano tecnicamente nel loop che in pratica non può mai dire no — e con la distinzione tra uso difensivo (bar più basso) e offensivo (bar più alto, ma non proibito).",
    articles: [
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" }
    ]
  },

  {
    name: "post-cognition",
    type: "teoria",
    lab: true,
    note: "Intervento esterno strutturato sugli output dei modelli linguistici per ricostruire gli impegni ontologici impliciti che il modello stesso non è in grado di rendere espliciti. Il termine, coniato nell'ambito del progetto <em>Validating AI</em>, designa un'operazione epistemica che precede la valutazione della verità: prima di chiedersi se una claim è vera o falsa, occorre stabilire di che tipo di claim si tratti.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/episteme-advisory/lab/", _source: "lab" }
    ]
  },
  {
    name: "epistemia",
    type: "teoria",
    lab: true,
    note: "Condizione dei modelli linguistici di generare output privi di metacognizione: il modello non può valutare lo statuto epistemico delle proprie affermazioni. Il termine è mutuato da Loru et al. (PNAS 2025) e Quattrociocchi et al. (2025). L'assenza di epistemia è la premessa che motiva il progetto <em>post-cognition</em>.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/episteme-advisory/lab/", _source: "lab" }
    ]
  },
  {
    name: "tassonomia D1–D7",
    type: "teoria",
    lab: true,
    note: "Framework classificatorio a sette dimensioni sviluppato nell'ambito del progetto <em>Validating AI</em> per tipizzare le claim degli output LLM. La dimensione D1 classifica il contenuto in undici categorie (storica, statistico-probabilistica, metafisica, causale, normativa e altre). La tassonomia si applica dopo il Pre-Step 0 basato sulla teoria degli atti linguistici.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/episteme-advisory/lab/", _source: "lab" }
    ]
  },
  {
    name: "atti illocutori",
    type: "teoria",
    lab: true,
    note: "Categoria della teoria degli atti linguistici (Austin 1962) che designa ciò che si fa nel dire qualcosa — affermare, promettere, ordinare, dichiarare. Nel progetto <em>Validating AI</em>, la classificazione illocutoria costituisce il Pre-Step 0: verificare che un enunciato sia un'asserzione è condizione necessaria prima di applicare la tassonomia D1–D7.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/episteme-advisory/lab/", _source: "lab" }
    ]
  },
  {
    name: "delega epistemica",
    type: "teoria",
    note: "La discontinuità specifica introdotta dall'AI rispetto all'automazione precedente: non si delega un'operazione, si delega una valutazione — la selezione dei candidati, il merito creditizio, la diagnosi, il ranking delle informazioni. Nel sito è il concetto che spiega perché un'organizzazione che usa AI senza validazione esplicita si trovi a usare output come se fossero conoscenza, senza poter rispondere alle domande che la conoscenza richiede.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "sovranità cognitiva",
    type: "teoria",
    note: "La dipendenza da tecnologie cognitive estere come rischio epistemico, non solo operativo: chi controlla l'infrastruttura controlla le condizioni di produzione della conoscenza. Nel sito è l'igiene cognitiva sovrana — sapere cosa sa il proprio sistema, come lo sa, e in quali condizioni potrebbe smettere di saperlo — messa in luce dal caso Fable 5, in cui un executive order americano ha spento un'infrastruttura scientifica in quarantotto ore.",
    articles: [
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" }
    ]
  },
  {
    name: "femminismo",
    type: "teoria",
    note: "Pur non essendo finalizzato all'attivismo, questo sito non può prescindere da una rappresentazione dell'umanità la più vasta e inclusiva possibile. Alcuni registri in cui compare: come effetto imprevisto di ambienti mediali — Meyrowitz dimostra che la televisione patriarcale degli anni Cinquanta ha generato, suo malgrado, le condizioni per una coscienza femminista allargata; come riequilibrio in corso nell'autorità intellettuale, con le donne che guidano oggi il pensiero filosofico (Origgi); come strumento di lettura della violenza di genere e delle sue rappresentazioni pubbliche (Columbro, Melandri). Il filo comune: una rappresentazione cognitivamente povera del reale (orientata esclusivamente al maschile, alle persone di pelle bianca, con una formazione di stampo anglosassone ecc.) produrrà effetti sociali altrettanto miseri - quando non dannosi.",
    articles: [
      { title: "Non più un affare da uomini. Ora il pensiero che guida è donna", url: "/curated/2026-06-21-origgi-filosofia-donne-parigi/", _source: "curated" },
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" },
      { title: "Il femminicidio non esiste", url: "/curated/2026-05-06-columbro-femminicidio-non-esiste/", _source: "curated" },
      { title: "La legge Bacchelli per Lea Melandri", url: "/curated/2026-06-06-internazionale-lea-melandri-bacchelli/", _source: "curated" },
      { title: "The Warrior-Witches of Ukraine's Resistance", url: "/curated/2026-06-21-harbaugh-warrior-witches-ukraine-atlantic/", _source: "curated" },
      { title: "Non usiamo i media, ci cresciamo dentro", url: "/curated/2026-07-13-tarchetti-media-ecology-non-ho-capito/", _source: "curated" }
    ]
  },
  {
    name: "ecologia dei media",
    type: "teoria",
    note: "Scuola di pensiero fondata da Neil Postman nel 1968 (NYU Media Ecology Program): i media non sono canali neutri di trasmissione ma ambienti che modellano la percezione, la cognizione e la struttura sociale indipendentemente dai contenuti. Il precursore è McLuhan con il concetto di «medium come messaggio». Nel sito è applicata da Tarchetti per ricordare agli editori che il digitale non è un canale di distribuzione ma un ambiente che determina quali contenuti possono esistere. Il punto si estende all'AI: un LLM non è neutro rispetto ai contenuti che produce, è un ambiente con proprietà strutturali proprie.",
    articles: [
      { title: "Non usiamo i media, ci cresciamo dentro", url: "/curated/2026-07-13-tarchetti-media-ecology-non-ho-capito/", _source: "curated" },
      { title: "Una lunga avventura: storia degli adventure game", url: "/curated/2026-06-11-machera-adventure-game-linkideeperlatv/", _source: "curated" }
    ]
  },
  {
    name: "narrazione interattiva",
    type: "teoria",
    note: "Forma narrativa in cui il lettore-giocatore partecipa attivamente alla costruzione della storia attraverso scelte, enigmi o movimenti nello spazio. Nel sito è il concetto-ombrello che copre l'evoluzione dall'avventura grafica classica (punta e clicca, anni '80-'90) alle forme contemporanee: story-driven games (Telltale, Quantic Dream), walking simulator (*Dear Esther*, *Phoenix Springs*), serie animate interattive (*Dispatch*). Il punto teorico rilevante è che la narrazione interattiva ha progressivamente separato le due componenti originarie dell'adventure game — gli enigmi e la storia — privilegiando la seconda.",
    articles: [
      { title: "Una lunga avventura: storia degli adventure game", url: "/curated/2026-06-11-machera-adventure-game-linkideeperlatv/", _source: "curated" }
    ]
  },

  {
    name: "industrie creative",
    type: "teoria",
    note: "Termine dell'economia della cultura che indica i settori in cui la produzione artistica e culturale si combina con logiche di sfruttamento commerciale: editoria, cinema, televisione, videogiochi, musica, merchandise. Nel sito funziona come lente strutturale — non per classificare contenuti ma per osservare le trasformazioni dell'industria che li produce e distribuisce: come le piattaforme (BookTok, algoritmi di raccomandazione) hanno ridisegnato la scoperta e invertito il potere negoziale tra autori indie e editori tradizionali; come i fandom si sono trasformati da audience passive in ecosistemi economici con merch, retreat ed eventi; come la logica dell'IP spinge ogni successo editoriale o videoludico verso l'adattamento cinematografico, spesso con risultati deludenti; come i capitali sovrani (Arabia Saudita) e il private equity entrano come acquirenti di infrastrutture culturali. Il filo comune non è il contenuto delle opere ma la struttura economica e distributiva che le produce, le fa circolare e le monetizza.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "The Steamy, Magical and Now Very Lucrative Romantasy Business", url: "/curated/2026-08-12-miller-muller-romantasy-bloomberg/", _source: "curated" },
      { title: "The dark underbelly of \"Paw Patrol\"", url: "/curated/2026-08-07-economist-paw-patrol-dark-underbelly/", _source: "curated" },
      { title: "L'Arabia Saudita si sta comprando l'industria dei videogiochi. Ecco come", url: "/curated/2026-08-12-lupetti-arabia-saudita-videogiochi-artribune/", _source: "curated" },
      { title: "Si stava meglio quando c'erano i video musicali", url: "/curated/2026-06-10-peroni-video-musicali-crisi-rivistastudio/", _source: "curated" },
      { title: "AI Has Plunged the Book Publishing Industry Into Utter Chaos", url: "/curated/2026-08-17-silman-ai-publishing-chaos-wsj/", _source: "curated" }
    ]
  },

  {
    name: "Hunhu/Ubuntu",
    type: "teoria",
    note: "Tradizione morale dominante dell'Africa subsahariana, espressa nel proverbio Nguni/Shona *Umuntu ngumuntu ngabantu*: una persona è una persona attraverso le altre persone. Conosciuta come *Hunhu* nelle comunità Shona di Zimbabwe e Zambia, come *Ubuntu* nelle lingue Nguni del Sudafrica. La formulazione classica è di John S. Mbiti: «I am because we are; since we are, therefore I am». In questo framework la personhood non è qualcosa con cui si nasce ma un divenire relazionale — si acquisisce attraverso il gruppo, il dialogo, l'esperienza e la spiritualità. Il *dare* (corte comunitaria) è il luogo dell'agency collettiva: non un vincolo alla libertà individuale ma la sua massima espressione. Nel sito entra come strumento critico dell'AI: l'architettura dei sistemi AI — motori di raccomandazione, algoritmi di personalizzazione, framework etici di governance — presuppone un modello di persona come unità atomica sovrana (Kant, Mill, Locke) che collide con Hunhu/Ubuntu su punti precisi: nessun *dare* nelle decisioni algoritmiche sul credito, la privacy come diritto individuale vs. informazione che appartiene al clan, le ambizioni illimitate dell'AI vs. la concezione dell'uomo come steward di un ordine cosmologico.",
    articles: [
      { title: "An AI for Africa would be built on Hunhu/Ubuntu ethics", url: "/curated/2026-08-04-mangena-hunhu-ubuntu-ai-aeon/", _source: "curated" }
    ]
  },

  {
    name: "metamodernismo",
    type: "teoria",
    note: "Sensibilità culturale e framework teorico elaborato da Timotheus Vermeulen e Robin van den Akker nel saggio «Notes on Metamodernism» (2010, Journal of Aesthetics & Culture), poi sviluppato da Greg Dember e altri. Emerge dalla fine degli anni Novanta come reazione al doppio esaurimento del modernismo (riduzionismo scientifico) e del postmodernismo (svuotamento del senso attraverso ironica distanza). La motivazione centrale, nella formulazione di Dember, è proteggere l'esperienza vissuta (felt experience) — la soggettività interiore, l'earnestness, la vulnerabilità — senza rigettare la consapevolezza ironica acquisita dal postmodernismo. Nel sito è un'antenna utile per leggere una certa qualità della cultura contemporanea: la capacità di essere sinceri e ironici insieme, di oscillare tra modernista convinzione e postmoderna relativizzazione senza rimanere paralizzati in nessuna delle due posizioni.",
    articles: [
      { title: "After Postmodernism: Eleven Metamodern Methods in the Arts", url: "/curated/2018-04-17-dember-metamodern-methods-medium/", _source: "curated" }
    ]
  },

  {
    name: "neghentropia",
    type: "teoria",
    note: "Informazione come distanza dallo stato di equiprobabilità, nella linea Schrödinger–Brillouin–Wiener. Nel sito è il criterio con cui si misura l’effetto di un testo su chi legge: non quanto è lungo, elegante o documentato, ma quanta indifferenza fra alternative riduce — un testo privo di effetti sulle attese è l’operatore identità. Da sola però non basta: un saggio scritto benissimo attorno a una tesi falsa è neghentropico in senso stretto e distruttivo in senso epistemico, e va corretta con il guadagno epistemico.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "legge della varietà richiesta",
    type: "teoria",
    note: "Legge di Ashby: la varietà del regolatore deve eguagliare quella del sistema regolato — solo varietà distrugge varietà. Nel sito ha due usi complementari. Dal lato del singolo testo, spiega perché la selezione (scelta della domanda, del taglio, di ciò che resta fuori) sia l’operazione che rende un corpus adeguato a un problema. Dal lato del sistema, spiega perché la contrazione della varianza fra i prior degli autori attivi in un campo sia il solo effetto dell’AI generativa che meriti davvero allarme.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },
  {
    name: "principio di Landauer",
    type: "teoria",
    note: "La cancellazione di un bit costa almeno kT ln 2; per Bennett la computazione può essere resa logicamente reversibile, e il passaggio irriducibilmente dissipativo è appunto la cancellazione, cioè la selezione fra stati. Nel sito è il ponte fisico dell’argomento sulla scrittura: scrivere è selezionare, e ogni testo esiste in quanto scarto di tutti i testi che non sono stati scritti. Gli strumenti generativi abbassano di ordini di grandezza il costo della produzione e lasciano intatto quello della selezione.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },
  {
    name: "guadagno epistemico",
    type: "teoria",
    note: "Misura di quanto un testo accorcia la distanza fra le attese di un ricevente e il mondo. Si distingue dalla sola riduzione di entropia, che premierebbe il testo peggiore immaginabile — quello che organizza benissimo le attese attorno a una tesi falsa — e ammette un caso nullo che il dibattito non considera mai: il lettore si sposta lateralmente, sostituisce un errore con un altro ugualmente distante, e ha la sensazione di aver imparato qualcosa. È definito sempre su un ricevente, mai in astratto: lo stesso identico testo vale molto per un pubblico e zero per un altro senza che una virgola sia cambiata.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" },
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "piano dei regimi",
    type: "teoria",
    note: "Il piano su cui si legge il regime di un testo rispetto a un lettore: la spinta utile diviso il costo dello spostamento in ascissa, la rigidità diviso lo spostamento in ordinata. Due rette critiche dividono valore, struttura falsa, provocazione e apertura; sotto lo zero corre la banda della conferma. L'intensità dello spostamento resta fuori dal giudizio.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },
  {
    name: "divergenza di Kullback-Leibler",
    type: "teoria",
    note: "Misura, in bit, quanto costa usare un modello per prevedere un mondo che si comporta in un altro modo. Nel sito è l'unica operazione da cui discendono spostamento e guadagno epistemico. La sua asimmetria — sbagliarsi per eccesso di certezza costa più che sbagliarsi per prudenza — è ciò che permette di rilevare la sovraconfidenza di un testo ben riuscito.",
    articles: [
      { title: "La forza della scrittura", url: "/writings/2026-08-26-la-forza-della-scrittura/" }
    ]
  },

  // ─── LUOGHI ───────────────────────────────────────────────────────────────

  {
    name: "Taiwan",
    type: "luogo",
    note: "Isola di 23 milioni di abitanti, democrazia multipartitica dal 1996, produttore di oltre il 90% dei chip avanzati globali. Nel sito è un nodo geopolitico complesso: la sua democrazia non è solo un sistema politico ma un deterrente strutturale — un'annessione non militare richiederebbe repressione visibile al mondo (processi farsa, giuramenti di fedeltà, rieducazione di massa) che alzerebbe il costo politico globale per Pechino. Il caso Taiwan è anche un laboratorio del meccanismo di destabilizzazione dall'interno: legami economici delle aziende KMT-friendly con la Cina creano veti strutturali sulla spesa per la difesa, mentre la campagna di social media continentali deride la democrazia come caotica. Lo stesso schema — avversario sistemico che sfrutta i conflitti di interesse interni a una democrazia — è generalizzabile a Georgia, Ungheria, Serbia e ad altri contesti europei.",
    articles: [
      { title: "Taking Taiwan's democracy hostage", url: "/curated/2026-08-11-economist-taiwan-democracy-hostage/", _source: "curated" },
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },

  // ─── TESTI ────────────────────────────────────────────────────────────────

  {
    name: "A Mathematical Theory of Communication",
    type: "testo",
    note: "Articolo di Claude E. Shannon (1948), atto di nascita della teoria dell’informazione. Nel sito fornisce il formalismo con cui si misura l’effetto di un testo su chi legge, e insieme disinnesca un equivoco ricorrente: nel formalismo shannoniano convivono due oggetti omonimi — l’entropia di una sorgente, che misura quanta informazione essa può emettere, e l’entropia di uno stato, che misura quanto quello stato sia indifferenziato. Ciò che il linguaggio comune chiama informazione ha in Shannon un nome esatto: è la ridondanza.",
    citation: "SHANNON, Claude E., <a href=\"https://doi.org/10.1002/j.1538-7305.1948.tb01338.x\">\u201cA Mathematical Theory of Communication\u201d</a>, <em>The Bell System Technical Journal</em>, vol. 27, 1948, pp. 379-423 e 623-656.",
    articles: [
      { title: "La formula dell’autenticità", url: "/writings/2026-08-23-la-formula-dellautenticita/" }
    ]
  },
  {
    name: "The Evolution of Cooperation",
    type: "testo",
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
    note: "Dramma teatrale di Michael Frayn (1998) che ricostruisce l'incontro del 1941 tra Niels Bohr e Werner Heisenberg a Copenhagen. Frayn non riesce a stabilire cosa i due si dissero davvero — non per mancanza di documenti, ma perché due scienziati dentro sistemi di potere in conflitto non hanno più una lingua comune. Nel sito apre la riflessione su come il sapere smetta di essere neutrale quando la tecnologia diventa risorsa strategica.",
    citation: "FRAYN, Michael, <em>Copenhagen</em>, Londra, Methuen Drama, 1998.",
    articles: [
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" }
    ]
  },
  {
    name: "Antifragile",
    type: "testo",
    note: "Libro di Nassim Taleb (2012), terzo volume della pentalogia Incerto. Formalizza la distinzione tra sistemi fragili, robusti e antifragili attraverso la disuguaglianza di Jensen. Nel sito è citato sia per il nucleo matematico (risposta convessa vs. concava ai disturbi) sia per le implicazioni politiche: il modello cinese come esempio di fragilità mascherata da efficienza.",
    citation: "TALEB, Nassim Nicholas, <a href=\"https://archive.org/details/antifragilething0000tale\"><em>Antifragile: Things That Gain from Disorder</em></a>, New York, Random House, 2012.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "La condition postmoderne",
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
    note: "Opera di Adorno e Horkheimer (1947). La tesi: l'illuminismo porta in sé i germi del proprio rovesciamento — la ragione strumentale, separata da fondamenti normativi, diventa dominio. Nel sito il capovolgimento è letto diversamente: non è l'illuminismo che si è rovesciato su se stesso, è la sua critica che si è rovesciata.",
    citation: "ADORNO, Theodor W. e Max Horkheimer, <a href=\"https://openlibrary.org/books/OL5516420M/Dialektik_der_Aufkla%CC%88rung.\"><em>Dialektik der Aufklärung</em></a>, Amsterdam, Querido, 1947 (trad. it. <em>Dialettica dell'Illuminismo</em>, Torino, Einaudi, 1966).",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Why Nations Fail",
    type: "testo",
    note: "Libro di Daron Acemoglu e James Robinson (2012). Argomenta che prosperità e fallimento degli stati dipendono dalla qualità delle loro istituzioni — inclusive o estrattive. Nel sito è il quadro teorico per leggere le traiettorie degli stati analizzati nella serie «Ombre».",
    citation: "ACEMOGLU, Daron e James A. Robinson, <a href=\"https://openlibrary.org/works/OL16568759W/Why_Nations_Fail\"><em>Why Nations Fail: The Origins of Power, Prosperity, and Poverty</em></a>, New York, Crown Business, 2012.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "The Embodied Mind",
    type: "testo",
    note: "Libro di Francisco Varela, Evan Thompson ed Eleanor Rosch (1991). Propone la cognizione come radicata nel corpo e nell'esperienza vissuta, contro il cognitivismo classico. Nel sito è il testo che «cambia statuto» davanti a un LLM: da posizione tra altre diventa criterio di distinzione tra mente biologica e macchina.",
    citation: "VARELA, Francisco J., Evan Thompson e Eleanor Rosch, <a href=\"https://openlibrary.org/books/OL26933223M/The_embodied_mind\"><em>The Embodied Mind: Cognitive Science and Human Experience</em></a>, Cambridge (MA), MIT Press, 1991.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Discours de la méthode",
    type: "testo",
    note: "Opera di René Descartes (1637). Propone il metodo del dubbio sistematico come fondamento della conoscenza certa, e la «morale provvisoria» come strategia conservatrice durante la demolizione delle vecchie certezze. Nel sito è usato come analogia del programma illuminista: ricostruire le fondamenta richiede un alloggio provvisorio.",
    citation: "DESCARTES, René, <a href=\"https://openlibrary.org/books/OL18269385M/Discours_de_la_m%C3%A9thode\"><em>Discours de la méthode</em></a>, Leida, Jan Maire, 1637 (trad. it. <em>Discorso sul metodo</em>, Milano, Bompiani, 2002).",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },

  {
    name: "Le Fake News e il Marketing del Vero",
    type: "testo",
    lab: true,
    note: "Articolo di Claudio Cammarano pubblicato su Medium (The Abstract, 2018). Precursore intellettuale del progetto <em>Validating AI</em>: la domanda su come si produce e si commercializza la verità prefigura l'indagine successiva su come i modelli linguistici generino output epistemicamente non fondati.",
    citation: "CAMMARANO, Claudio, <a href=\"https://medium.com/the-abstract/le-fake-news-e-il-marketing-del-vero-56c74f11ce4b\"><em>Le Fake News e il Marketing del Vero</em></a>, <em>The Abstract</em>, Medium, 2018.",
    articles: [
      { title: "Validating AI — note di ricerca", url: "/episteme-advisory/lab/", _source: "lab" }
    ]
  },

  // ─── ISTITUZIONI ──────────────────────────────────────────────────────────

  {
    name: "Anthropic",
    type: "istituzione",
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
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" }
    ]
  },
  {
    name: "Anduril",
    type: "istituzione",
    note: "Azienda della difesa fondata nel 2017 da Palmer Luckey. Nel sito è il caso del modello alternativo al contractor tradizionale: VC-funded, rischio imprenditoriale proprio, software (Lattice, sistema di controllo autonomo delle macchine sul campo) e hardware (Collaborative Combat Aircraft, sistema anti-drone Pulsar). Incarna la scelta opposta ad Anthropic: partecipare attivamente allo sviluppo di sistemi d'arma autonomi, ritenendo che non farlo significhi lasciare il campo a chi lo farà peggio.",
    articles: [
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Palantir",
    type: "istituzione",
    note: "Azienda di data analytics fondata nel 2003 da Peter Thiel e Alexander Karp. Nel sito è la controparte di Anthropic: Karp ha pubblicato un manifesto in favore dell'impegno militare di Silicon Valley, Palantir lavora attivamente con il Dipartimento della Difesa americano. Caso studio della scelta opposta a quella di Amodei.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "Why Are Palantir and OpenAI Scared of Alex Bores?", url: "/curated/2026-04-21-bores-palantir-openai-regulation-nyt/", _source: "curated" },
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" }
    ]
  },
  {
    name: "DARPA",
    type: "istituzione",
    note: "Defense Advanced Research Projects Agency: agenzia del Dipartimento della Difesa americano responsabile delle tecnologie emergenti per uso militare. Nel sito è citata come fonte storica di tecnologie civili: i vaccini a mRNA derivano da ricerche finanziate da DARPA contro il bioterrorismo. Caso esemplare di dual use e general purpose technology.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "NSDAP",
    type: "istituzione",
    note: "Partito nazionalsocialista tedesco (1920–1945). Nel sito è il riferimento storico della digitalizzazione, da parte di Der Spiegel con l'ausilio dell'AI, di milioni di schede di iscrizione rilasciate dagli Archivi Nazionali americani nel 2026: uno strumento che rende chiunque in grado di costruirsi un dossier su cosa ha fatto la propria famiglia sotto Hitler.",
    articles: [
      { title: "NSDAP-Archiv: Finden Sie heraus, was Ihre Familie unter Hitler getan hat", url: "/curated/2026-05-07-spiegel-nsdap-archiv/", _source: "curated" }
    ]
  },
  {
    name: "AfD",
    type: "istituzione",
    note: "Alternative für Deutschland, partito di estrema destra tedesco. Nel sito è citato come attore della contestazione politica della memoria storica: un dirigente del partito, Björn Höcke, si è scagliato contro la digitalizzazione degli archivi NSDAP — mentre il partito stesso continua a guadagnare terreno in diverse regioni tedesche.",
    articles: [
      { title: "NSDAP-Archiv: Finden Sie heraus, was Ihre Familie unter Hitler getan hat", url: "/curated/2026-05-07-spiegel-nsdap-archiv/", _source: "curated" }
    ]
  },
  {
    name: "The Economist",
    type: "istituzione",
    note: "Settimanale britannico. Nel sito è il caso della nomina del generale Alex Turner — ex comandante della 77 Brigade, ancora in servizio attivo al momento della nomina — a defence editor: un caso che rende visibile la sovrapposizione crescente tra i piani dell'informazione e della difesa.",
    articles: [
      { title: "Alex Turner appointed as Defence Editor of The Economist", url: "/curated/2026-06-19-economist-defence-editor-turner/", _source: "curated" },
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" }
    ]
  },
  {
    name: "77 Brigade",
    type: "istituzione",
    note: "Unità dell'esercito britannico per le «attività informative», istituita nel 2015. Nel sito è citata per il suo ruolo nel monitoraggio del dibattito online dei cittadini britannici durante la pandemia (secondo una richiesta FOI del 2024) e per la sovrapposizione, nel caso Turner/Economist, tra comando militare di un'unità di information warfare e ruolo editoriale.",
    articles: [
      { title: "Alex Turner appointed as Defence Editor of The Economist", url: "/curated/2026-06-19-economist-defence-editor-turner/", _source: "curated" }
    ]
  },
  {
    name: "Studio Ghibli",
    type: "istituzione",
    note: "Studio d'animazione giapponese fondato nel 1985 da Hayao Miyazaki e Isao Takahata. Nel sito è il riferimento implicito di qualità artigianale nel dibattito sulla crisi degli animatori giapponesi: il modello di formazione sul campo che lo studio ha incarnato è esattamente ciò che l'industria, nel suo insieme, ha smantellato dopo il 1973.",
    articles: [
      { title: "The strange disappearance of Japan's animators", url: "/curated/2026-06-19-economist-1843-japan-animators/", _source: "curated" }
    ]
  },
  {
    name: "GS1",
    type: "istituzione",
    note: "Organizzazione globale di standard per l'identificazione di prodotti (codici a barre) e la tracciabilità della filiera. Nel sito è la fonte del GS1 Web Vocabulary e il punto di vista — tramite la newsletter Tendenze di GS1 Italy — da cui arrivano più pezzi curated sull'infrastruttura semantica del commercio digitale.",
    articles: [
      { title: "GS1 Web Vocabulary: il dizionario universale che dà voce ai prodotti nel web 3.0", url: "/curated/2026-02-05-giulieri-gs1-web-vocabulary/", _source: "curated" }
    ]
  },
  {
    name: "Netcomm Forum",
    type: "istituzione",
    note: "Il principale evento italiano dedicato all'e-commerce. Nel sito è il contesto da cui Gianluca Diegoli osserva, dal vivo, la confusione sistematica fra le tre «IA» del commercio digitale e il ritardo italiano nell'adozione dell'AI di infrastruttura rispetto al Nord Europa.",
    articles: [
      { title: "Le tre IA del Netcomm Forum", url: "/curated/2026-05-21-diegoli-tre-ia-netcomm-forum/", _source: "curated" }
    ]
  },
  {
    name: "Cannes Lions",
    type: "istituzione",
    note: "Il festival internazionale della creatività pubblicitaria. Nel sito è il palcoscenico in cui OpenAI si presenta come protagonista a sorpresa puntando a metà dei ricavi pubblicitari di Meta, e in cui — l'anno precedente — un Grand Prix è stato ritirato dopo la scoperta che il case study era stato manipolato con l'AI.",
    articles: [
      { title: "David Droga on AI and the end of 'mediocre' human-made ads", url: "/curated/2026-06-21-droga-ai-mediocre-ads/", _source: "curated" }
    ]
  },
  {
    name: "OpenAI",
    type: "istituzione",
    note: "Nel sito compare nel caso Droga come l'azienda che punta a metà dei ricavi pubblicitari attuali di Meta in tre anni — piattaforma ad self-serve, test pubblicitari in Giappone, Ad Tools generativi — segno che il fronte AI vs. mercato pubblicitario tradizionale si sta aprendo prima e più aggressivamente di quanto raccontato altrove sul sito a proposito di Anthropic o Palantir.",
    articles: [
      { title: "Why Are Palantir and OpenAI Scared of Alex Bores?", url: "/curated/2026-04-21-bores-palantir-openai-regulation-nyt/", _source: "curated" },
      { title: "David Droga on AI and the end of 'mediocre' human-made ads", url: "/curated/2026-06-21-droga-ai-mediocre-ads/", _source: "curated" }
    ]
  },
  {
    name: "Bending Spoons",
    type: "istituzione",
    note: "Azienda tech italiana, quotata al Nasdaq a giugno 2026 con una valutazione di 20 miliardi di dollari. Nel sito è il caso studio di cosa potrebbe sbloccare per l'ecosistema startup italiano: non l'azienda in sé, ma il pool di 51 milioni di azioni distribuite ai dipendenti, potenziale innesco di una generazione di startup di seconda mano sul modello di Berlino e Londra.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "Zalando",
    type: "istituzione",
    note: "E-commerce di moda tedesco, quotato. Nel sito è uno dei casi di riferimento — insieme a Rocket Internet — per misurare l'effetto «ex-dipendenti che fondano startup» a Berlino: 138 nuove startup da 24 unicorni tedeschi, l'81% rimaste nella stessa città.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "Rocket Internet",
    type: "istituzione",
    note: "Startup studio e incubatore tedesco. Nel sito è citato insieme a Zalando come motore dell'effetto di seconda generazione berlinese — l'evidenza usata per valutare se Bending Spoons potrà fare lo stesso per l'Italia.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "Revolut",
    type: "istituzione",
    note: "Fintech britannica. Nel sito è uno dei casi citati per l'effetto di seconda generazione londinese, insieme a Braze, Wise e Monzo — 168 startup da 27 unicorni, il 69% rimaste a Londra, favorite anche dal regime fiscale agevolato EMI sulle stock option.",
    articles: [
      { title: "Cosa sblocca l'IPO di Bending Spoons?", url: "/curated/2026-06-21-camera-bending-spoons-ipo/", _source: "curated" }
    ]
  },
  {
    name: "Washington Post",
    type: "istituzione",
    note: "Quotidiano americano. Nel sito è il caso della credibilità erosa: dopo il 2016 aveva costruito un «marketing della verità» («Democracy Dies in Darkness») come risposta al primo insediamento di Trump — una postura oggi meno credibile per ragioni legate all'assetto proprietario (Jeff Bezos) e alle relative ingerenze editoriali.",
    articles: [
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" }
    ]
  },
  {
    name: "New York Times",
    type: "istituzione",
    note: "Quotidiano americano. Nel sito è citato insieme al Washington Post come testata che ha imbastito un «marketing della verità» al primo insediamento di Trump nel 2016 — una strategia di posizionamento diversa da quella valoriale adottata dall'Economist, e più vulnerabile alle crisi di credibilità legate alle scelte proprietarie.",
    articles: [
      { title: "The history of liberalism: a timeline", url: "/curated/2026-06-25-economist-liberalism-timeline/", _source: "curated" }
    ]
  },

  {
    name: "Magnifica Humanitas",
    type: "testo",
    note: "Enciclica di Papa Leone XIV (15 maggio 2026), firmata nel 135° anniversario della *Rerum Novarum*. Affronta l'intelligenza artificiale come questione sociale, non solo tecnica o morale: colloca l'AI nel solco della dottrina sociale della Chiesa (lavoro, potere, giustizia, dignità, vita comune). Il passaggio più citato nel sito è l'immagine dei dati come «nuove terre rare del potere» — il colonialismo contemporaneo che si appropria di vite rese computabili, profili sanitari, mappe genetiche, dati demografici. Boccia Artieri la usa come punto di partenza per chiedere non appelli morali ma una grammatica politica dell'AI.",
    citation: "LEONE XIV, <a href=\"https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html\"><em>Magnifica Humanitas</em></a>, Città del Vaticano, Libreria Editrice Vaticana, 15 maggio 2026.",
    articles: [
      { title: "Magnifica Humanitas: le nuove terre rare del potere", url: "/curated/2026-06-17-boccia-artieri-magnifica-humanitas-substack/", _source: "curated" }
    ]
  },
  {
    name: "The Technium",
    type: "testo",
    note: "Blog di Kevin Kelly (kk.org/thetechnium), attivo dal 2003. Il titolo è anche il nome del concetto centrale di Kelly: la tecnosfera come sistema vivente con proprie tendenze evolutive. Nel sito è la fonte del saggio del 2006 sulle speculazioni sul metodo scientifico, ripubblicato nel 2026 con un'introduzione aggiornata.",
    citation: "KELLY, Kevin, <a href=\"https://kk.org/thetechnium\"><em>The Technium</em></a>, blog personale, 2003–.",
    articles: [
      { title: "Speculations on the Future of the Scientific Method", url: "/curated/2026-05-04-kevin-kelly-future-scientific-method/", _source: "curated" }
    ]
  },

  {
    name: "Stratechery",
    type: "testo",
    note: "Newsletter e blog di analisi tecnologica di Ben Thompson (stratechery.com), attivo dal 2013. Ha introdotto e sviluppato l'Aggregation Theory — la tesi che le piattaforme che controllano il rapporto con l'utente finale catturano il valore dell'intera filiera. Nel sito è citata per la sua analisi del 2026 sul costo-opportunità del compute come fine dell'era aggregazionista.",
    citation: "THOMPSON, Ben, <a href=\"https://stratechery.com\"><em>Stratechery</em></a>, newsletter, 2013–.",
    articles: [
      { title: "Mythos, Muse, and the Opportunity Cost of Compute", url: "/curated/2026-04-13-stratechery-opportunity-cost-compute/", _source: "curated" }
    ]
  },
  {
    name: "Digital News Report",
    type: "testo",
    note: "Ricerca annuale del Reuters Institute for the Study of Journalism (Università di Oxford): la più ampia indagine comparativa al mondo sui comportamenti dei lettori di notizie, condotta in oltre 40 paesi. La sezione italiana è curata da Alessio Cornia (Dublin City University). Nel sito è la fonte primaria dell'analisi longitudinale di Andrea Nelson Mauro sull'informazione in Italia 2021–2026.",
    citation: "REUTERS INSTITUTE FOR THE STUDY OF JOURNALISM, <a href=\"https://reutersinstitute.politics.ox.ac.uk/digital-news-report/\"><em>Digital News Report</em></a>, Oxford, Università di Oxford, 2012–.",
    articles: [
      { title: "Com'è cambiata l'informazione in Italia negli ultimi 6 anni", url: "/curated/2026-06-19-mauro-informazione-italia-digital-news-report/", _source: "curated" }
    ]
  },
  {
    name: "Platformer",
    type: "testo",
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
    note: "Nel sito è il laboratorio storico del caos indotto: il paese più democratico del mondo arabo, distrutto dall'interferenza esterna in un sistema in equilibrio delicato. Nassim Taleb, libanese di Amioun, ne fa uso teorico costante. Il Libano è il caso ante litteram di ciò che oggi si fa su scala globale con le democrazie occidentali.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "Mediterraneo come spazio strategico",
    type: "luogo",
    note: "Nel sito è il tema di Cartolina dal paese più bello del mondo: l'Italia vive sul Mediterraneo ma lo vede solo come emergenza (naufragio, sbarco, tempesta), mai come sistema di relazioni da abitare. «Chi abita il mare controlla le connessioni. Chi lo teme consegna le connessioni ad altri.» Il Mediterraneo settentrionale attende ancora un paese capace di abitarlo.",
    articles: [
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "Iran 1978–79",
    type: "luogo",
    note: "Nel sito è caso studio della dialettica dell'antiilluminismo: Foucault si recò in Iran come corrispondente, entusiasmato da una mobilitazione di massa che rifiutava entrambe le metanarrazioni egemoni. Nel giro di pochi mesi il potere teocratico cancellò diritti, eliminò dissidenti, costruì uno degli apparati repressivi più brutali del dopoguerra.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Taiwan / TSMC",
    type: "luogo",
    note: "Nel sito è il luogo della concentrazione tecnologica più rischiosa del mondo: TSMC produce la quasi totalità dei chip avanzati globali, rendendo Taiwan uno spazio di deterrenza reciproca tra Cina e Stati Uniti. Citato nell'articolo su Amodei (scenario planning) e in L'ombra del passato (vincoli strutturali del win-set cinese).",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Bologna",
    type: "luogo",
    note: "Nel sito è lo sfondo dell'articolo su Umberto Eco: il DAMS, le istituzioni culturali fondate da Eco, l'università come luogo di formazione non di accademici ma di persone capaci di stare nel mondo e influenzarlo — «lo scopo non è creare Platone, ma Alcibiade». Bologna come laboratorio intellettuale del secondo Novecento italiano.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-04-04-dieci-anni-senza-umberto-eco/" }
    ]
  },
  {
    name: "Bergamo / Val Brembana",
    type: "luogo",
    note: "Nel sito è il punto di partenza della riflessione sul dual use tecnologico: il Museo dei Tasso a Cornello del Tasso, a venti chilometri da Bergamo, racconta come la storia postale — e quindi la storia della comunicazione moderna — sia sempre la storia di un dual use che nessuno ha pianificato.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },

  // ─── PAESI (stati come attori politici) ───────────────────────────────────

  {
    name: "Russia",
    type: "paese",
    note: "Nel sito è l'attore della guerra ibrida: ha sistematizzato la dottrina Gerasimov, usato i social media come amplificatori del caos, testato le strategie nell'Est Europa prima di esportarle globalmente dal 2014 in poi. Caso di fragilità sistemica nascosta da apparente potenza — la pandemia ha mostrato la patologia delle istituzioni accentrate.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "The Warrior-Witches of Ukraine's Resistance", url: "/curated/2026-06-21-harbaugh-warrior-witches-ukraine-atlantic/", _source: "curated" },
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" },
      { title: "How a former model from Kyiv blew up Russia's $20bn gas pipeline", url: "/curated/2026-06-15-times-nord-stream-diver/", _source: "curated" }
    ]
  },
  {
    name: "Ucraina",
    type: "paese",
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
    type: "paese",
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
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" }
    ]
  },
  {
    name: "Unione Europea",
    type: "paese",
    note: "Come istituzione: citata per la sua struttura grande, centralizzata, iperconnessa — che Taleb considera fragile per costruzione perché concentra i rischi e sopprime la varianza locale. Appare come benchmark (spesa R&S media europea 2,2% del PIL contro l'1,3% italiano) e come attore nelle negoziazioni internazionali. Per Europa come concetto culturale e geopolitico, vedi la voce separata.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" },
      { title: "L'infrastruttura del sapere", url: "/writings/2026-07-07-linfrastruttura-del-sapere/" },
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" },
      { title: "Why a big country like Italy acts as if it were small", url: "/curated/2026-04-09-italy-acts-as-if-small/", _source: "curated" }
    ]
  },
  {
    name: "Europa",
    type: "paese",
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
      { title: "Forget the World Cup. Culture is becoming more fragmented", url: "/curated/2026-06-11-economist-deglobalisation-culture/", _source: "curated" }
    ]
  },
  {
    name: "Cina",
    type: "paese",
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
      { title: "The Future, Made in China", url: "/curated/2026-08-03-osnos-future-made-china-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "Iran",
    type: "paese",
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
    note: "Nel sito è il contesto della digitalizzazione degli archivi NSDAP da parte di Der Spiegel e dell'avanzata dell'AfD in diverse regioni: il caso in cui la cultura della memoria storica diventa esplicitamente terreno di scontro politico contemporaneo.",
    articles: [
      { title: "NSDAP-Archiv: Finden Sie heraus, was Ihre Familie unter Hitler getan hat", url: "/curated/2026-05-07-spiegel-nsdap-archiv/", _source: "curated" }
    ]
  },
  {
    name: "Regno Unito",
    type: "paese",
    note: "Nel sito è il contesto della 77 Brigade e della sovrapposizione fra information warfare militare e giornalismo di difesa, resa visibile dalla nomina di un suo ex comandante a defence editor dell'Economist.",
    articles: [
      { title: "Alex Turner appointed as Defence Editor of The Economist", url: "/curated/2026-06-19-economist-defence-editor-turner/", _source: "curated" }
    ]
  },
  {
    name: "Giappone",
    type: "paese",
    note: "Nel sito è il caso della crisi degli animatori: un mercato dell'anime quasi triplicato in un decennio fino a 19 miliardi di dollari, sostenuto da una manodopera cronicamente sottopagata e mal formata dopo lo smantellamento del sistema di apprendistato seguito al fallimento di Mushi Production nel 1973.",
    articles: [
      { title: "The strange disappearance of Japan's animators", url: "/curated/2026-06-19-economist-1843-japan-animators/", _source: "curated" }
    ]
  },

  // ─── LEADER POLITICI ──────────────────────────────────────────────────────

  {
    name: "Trump, Donald",
    type: "persona",
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
    note: "Presidente ucraino (1978). Nel sito è studiato come caso di trasformazione radicale del profilo strategico: outsider comunicativo con basso fattore δ pre-2022, ha cambiato completamente struttura strategica dopo l'invasione russa. Caso limite nella teoria dei two-level games: win-set domestico compresso, win-set internazionale massimizzato. Anche protagonista di una strategia di comunicazione che usa deliberatamente gli influencer MAGA come vettori per raggiungere pubblici inaccessibili ai media tradizionali.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Maga influencer Laura Loomer reverses course on Ukraine after Kyiv visit", url: "/curated/2026-07-24-harding-loomer-zelensky-kyiv-guardian/", _source: "curated" }
    ]
  },
  {
    name: "Orbán, Viktor",
    type: "persona",
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
    note: "Primo ministro israeliano (1949). Nel sito è caso studio di tribalismo epistemico: respinge le risoluzioni della Corte Internazionale di Giustizia come «antisemitismo istituzionalizzato», proponendo una verità etnica assoluta che esclude per principio qualsiasi tribunale esterno — variante tribalista del rifiuto dell'universale.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Xi, Jinping",
    type: "persona",
    note: "Presidente cinese (1953). Nel sito è analizzato come caso di accentramento del potere (dal 2012) che ha compresso il win-set domestico: abolizione del limite ai mandati, campagna anticorruzione strumentale, irrigidimento ideologico del Partito. Fattore di sconto δ probabilmente alto, ma il ρ relazionale che lui stesso ha costruito è altissimo.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Who's Afraid of Chinese Models?", url: "/curated/2026-07-20-stratechery-chinese-models/", _source: "curated" }
    ]
  },
  {
    name: "Karp, Alexander",
    type: "persona",
    note: "CEO di Palantir (1967). Nel sito è citato per il suo «manifesto» del 2026: l'élite ingegneristica di Silicon Valley ha un debito morale con il paese che ne ha reso possibile l'ascesa e un obbligo affermativo di partecipare alla difesa della nazione. Il sito condivide la premessa ma non le conclusioni.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "La colonizzazione del giudizio", url: "/curated/2026-06-12-corriere-colonizzazione-giudizio/", _source: "curated" },
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" }
    ]
  },
  {
    name: "Karpathy, Andrej",
    type: "persona",
    note: "Ricercatore e ingegnere AI (1986). Founding member di OpenAI (2015), poi Sr. Director of AI di Tesla (2017–2022), ora fondatore di Eureka Labs. Nel sito è citato per il suo «Deep Dive into LLMs» (2025): la risorsa divulgativa più completa disponibile sull'intera catena di addestramento dei modelli linguistici, dalla *jagged intelligence* ai token come unità di pensiero.",
    articles: [
      { title: "Deep Dive into LLMs like ChatGPT", url: "/curated/2026-07-12-karpathy-deep-dive-llm-youtube/", _source: "curated" }
    ]
  },
  {
    name: "Hegseth, Pete",
    type: "persona",
    note: "Segretario alla Difesa americano (2025 in corso). Nel sito è la controparte nel rifiuto di Amodei: ha avanzato la richiesta di partnership militare ad Anthropic che Dario Amodei ha declinato dopo un processo di scenario planning. Figura dell'apparato militare-industriale che cerca di integrare l'AI nei sistemi d'arma.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
    ]
  },
  {
    name: "Thompson, Ben",
    type: "persona",
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
    note: "Storico economico britannico (1967), docente a Columbia. Autore di Crashed (2018) e The Wages of Destruction (2006). Fondatore di Chartbook, newsletter in cui coniuga storia economica, dati e congiuntura. Nel sito è citato per la decostruzione della sequenza «China shock 1.0 / 2.0»: il secondo non è una replica del primo ma uno shock di politica industriale consapevole — la Cina ha imparato dalla prima ondata e ora esporta tecnologia, non lavoro a basso costo.",
    articles: [
      { title: "Chartbook 462: China shocked – beyond 1.0 and 2.0 to the 'Big One'", url: "/curated/2026-07-29-tooze-china-shock-chartbook/", _source: "curated" }
    ]
  },
  {
    name: "Polanyi, Karl",
    type: "persona",
    note: "Economista e antropologo ungherese (1886–1964), autore de La grande trasformazione (1944). Ha teorizzato il «doppio movimento»: ogni ondata di globalizzazione mercantile produce un contromovimento di resistenza sociale. Nel sito è il framework con cui Tooze legge il China Shock 1.0 — Trump e Brexit come backlash polanyiano differito all'integrazione dei mercati del lavoro asiatici — e il contrasto che rende il China Shock 2.0 «post-polanyiano»: non uno shock di globalizzazione ma di politica industriale.",
    articles: [
      { title: "Chartbook 462: China shocked – beyond 1.0 and 2.0 to the 'Big One'", url: "/curated/2026-07-29-tooze-china-shock-chartbook/", _source: "curated" }
    ]
  },
  {
    name: "Lepore, Jill",
    type: "persona",
    note: "Storica e scrittrice americana (1966), staff writer del New Yorker e professoressa a Harvard. Autrice di *These Truths: A History of the United States* (2018), storia degli Stati Uniti costruita attorno all'idea che le verità fondanti — uguaglianza, diritti, sovranità popolare — non siano astrazioni ma oggetti concreti con effetti concreti nella vita delle persone: un'impostazione storiografica in piena sintonia con il filo teorico del sito. Tra le voci più acute nella critica storica alla Silicon Valley e alla mitologia del progresso tecnologico. Nel sito è citata per la lettura dell'enciclica *Magnifica Humanitas* di Leo XIV: il Papa come prima autorità spirituale a nominare il «paradigma tecnocratico», in una genealogia critica che risale ad Arendt e Mumford.",
    articles: [
      { title: "What the Pope Said About A.I.", url: "/curated/2026-05-27-lepore-pope-leo-ai-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "Arendt, Hannah",
    type: "persona",
    note: "Filosofa politica tedesco-americana (1906–1975). Autrice de Le origini del totalitarismo (1951) e La banalità del male (1963). Teorica della sfera pubblica, della natalità come categoria politica e della distinzione tra lavoro, opera e azione come fondamento dell'analisi della vita attiva.",
    articles: [
      { title: "La colonizzazione del giudizio", url: "/curated/2026-06-12-corriere-colonizzazione-giudizio/", _source: "curated" },
      { title: "What the Pope Said About A.I.", url: "/curated/2026-05-27-lepore-pope-leo-ai-newyorker/", _source: "curated" }
    ]
  },
  {
    name: "Thiel, Peter",
    type: "persona",
    note: "Investitore e imprenditore tedesco-americano (1967). Cofondatore di PayPal e Palantir, finanziatore di Facebook e Trump. Teorico del monopolio come obiettivo strategico (Zero to One, 2014): i mercati competitivi distruggono i margini, il monopolio crea valore — e il «segreto» è la verità che nessuno dice ad alta voce.",
    articles: [
      { title: "La colonizzazione del giudizio", url: "/curated/2026-06-12-corriere-colonizzazione-giudizio/", _source: "curated" },
      { title: "The End of the Future", url: "/curated/2026-06-15-fp-end-of-the-future/", _source: "curated" }
    ]
  },
  {
    name: "van Middelaar, Luuk",
    type: "persona",
    note: "Storico e filosofo politico olandese (1973). Consigliere di Herman Van Rompuy al Consiglio Europeo, autore de Il passaggio all'Europa (2009) e Alarums and Excursions (2019). Teorico dell'improvvisazione istituzionale come metodo di governance europea in tempi di crisi.",
    articles: [
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" }
    ]
  },
  {
    name: "Kojève, Alexandre",
    type: "persona",
    note: "Filosofo russo-francese (1902–1968). Le sue letture di Hegel agli anni Trenta hanno formato un'intera generazione di intellettuali europei (Aron, Bataille, Merleau-Ponty). Teorico della «fine della storia» ante litteram e dell'impero post-storico — il Lateinisches Reich come possibile risposta europea alla fine dei conflitti ideologici.",
    articles: [
      { title: "Europe Needs to Come Together. This Man Has Some Ideas.", url: "/curated/2026-06-09-nyt-europe-defense-van-middelaar/", _source: "curated" }
    ]
  },
  {
    name: "Kelly, Kevin",
    type: "persona",
    note: "Futurista e saggista americano (1952), co-fondatore di Wired, autore di Out of Control (1994), What Technology Wants (2010), The Inevitable (2016). Nel sito è citato per un saggio del 2006 sulle possibili evoluzioni del metodo scientifico — quattordici speculazioni che vent'anni dopo leggono come una descrizione del presente, soprattutto alla luce dell'AI.",
    articles: [
      { title: "Speculations on the Future of the Scientific Method", url: "/curated/2026-05-04-kevin-kelly-future-scientific-method/", _source: "curated" }
    ]
  },
  {
    name: "Nussbaum, Martha",
    type: "persona",
    note: "Filosofa americana (1947), docente a Chicago. Neo-aristoteliana, autrice di The Fragility of Goodness (1986), Upheavals of Thought (2001), Creating Capabilities (2011). Il suo approccio sulle capacità dovrebbe essere centrale nella teorizzazione del lavoro culturale, ma apparentemente così non è. Nel sito è il pretesto per una lettura dell'etica della virtù come ontologia etica radicale: le virtù non sono proprietà positive determinate, ma soluzioni virtuali a problemi che esistono per primi.",
    articles: [
      { title: "A Problem-Based Reading of Nussbaum's Virtue Ethics", url: "/curated/2018-09-04-brady-nussbaum-virtue-ethics-epochemagazine/", _source: "curated" }
    ]
  },
  {
    name: "Aristotele",
    type: "persona",
    note: "Filosofo greco (384–322 a.C.), allievo di Platone, fondatore del Liceo. Nel sito è il fondamento teorico dell'etica della virtù riletta da Nussbaum: non un catalogo di caratteristiche positive, ma una logica in cui i problemi — le sfere dell'attività umana dove la scelta è inevitabile e rischiosa — sono primari, e le virtù ne sono la risposta eccellente.",
    articles: [
      { title: "A Problem-Based Reading of Nussbaum's Virtue Ethics", url: "/curated/2018-09-04-brady-nussbaum-virtue-ethics-epochemagazine/", _source: "curated" }
    ]
  },
  {
    name: "Deleuze, Gilles",
    type: "persona",
    note: "Filosofo francese (1925–1995). Nel sito è evocato per le implicazioni deleuziane della lettura di Nussbaum da parte di Brady: i problemi come entità virtuale-reali che precedono le soluzioni — il virtuale non è meno reale dell'attuale, è semplicemente la modalità di esistenza di ciò che è irrisolto. Una lettura che dialoga con l'ontologia del problema come primum dell'etica.",
    articles: [
      { title: "A Problem-Based Reading of Nussbaum's Virtue Ethics", url: "/curated/2018-09-04-brady-nussbaum-virtue-ethics-epochemagazine/", _source: "curated" }
    ]
  },
  {
    name: "Dondi, Ilaria Maria",
    type: "persona",
    note: "Giornalista e autrice della newsletter «Anomalia. Umani in tempi artificiali». Nel sito è la voce che demistifica l'indignazione per l'uso dell'AI nel lavoro creativo: il supporto invisibile (ghostwriter, editor, speechwriter) è sempre stato accessibile al potere senza essere considerato imbroglio — l'AI ne è una versione più economica e accessibile a chi storicamente ne era escluso.",
    articles: [
      { title: "Se uso l'AI sono meno professionista?", url: "/curated/2026-06-21-dondi-ai-professionalita-ghostwriting/", _source: "curated" }
    ]
  },
  {
    name: "Columbro, Donata",
    type: "persona",
    note: "Data journalist e autrice di «Perché contare i femminicidi è un atto politico» (2026) e della newsletter «Ti spiego il dato». Nel sito è la voce che dimostra il carattere costruito di tutte le categorie statistiche — dal femminicidio alla disoccupazione — e che distingue questa postura costruttivista legittima dall'uso negazionista della stessa tesi.",
    articles: [
      { title: "Il femminicidio non esiste", url: "/curated/2026-05-06-columbro-femminicidio-non-esiste/", _source: "curated" }
    ]
  },
  {
    name: "Bores, Alex",
    type: "persona",
    note: "Membro dell'Assemblea di New York (2022), ex data scientist a Palantir (2014–2019). Ha co-scritto il RAISE Act, una delle prime leggi di regolamentazione dell'AI approvata da uno stato americano. Nel sito è il caso che mostra la governance dell'AI come terreno di conflitto politico reale: ha lasciato Palantir quando i dirigenti si rifiutarono di inserire guardrail nel contratto con ICE per impedire l'uso del software nelle deportazioni, ed è poi diventato bersaglio di un super PAC finanziato da co-fondatori di OpenAI e Palantir per il suo lavoro legislativo sull'AI.",
    articles: [
      { title: "Why Are Palantir and OpenAI Scared of Alex Bores?", url: "/curated/2026-04-21-bores-palantir-openai-regulation-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Chan, Kyle",
    type: "persona",
    note: "Foreign policy fellow al Brookings Institution, esperto di Cina e tecnologia. Nel sito è citato per l'analisi della competizione AI sino-americana: la cornice della «gara» è fuorviante perché i due paesi corrono gare diverse — gli USA verso l'AGI, la Cina verso efficienza, diffusione e applicazioni fisiche. La tesi del pezzo è nel titolo: il principale ostacolo americano nella competizione con la Cina è interno agli Stati Uniti.",
    articles: [
      { title: "China's Not the Problem. We Are.", url: "/curated/2026-05-14-chan-china-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Frey, Jennifer",
    type: "persona",
    note: "Professoressa di filosofia, ha costruito e poi visto smantellare un programma di liberal arts all'Università di Tulsa. Nel sito è la voce che difende la liberal education con un argomento intrinseco — la *paideia* e il *Bildung* come coltivazione delle capacità superiori dell'essere umano come fine in sé — in contrappunto al Pinillos già in archivio, che ne difende il valore strumentale. Porta in dote l'Aristotele sulla *scholé*: il fine dell'educazione è il leisure, lo spazio in cui si coltiva il meglio di sé.",
    articles: [
      { title: "A Defense of a Liberal Arts Education in the Age of A.I.", url: "/curated/2026-05-21-frey-liberal-arts-ai-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Zakaria, Fareed",
    type: "persona",
    note: "Giornalista e commentatore politico indiano-americano (1964), conduttore di «Fareed Zakaria GPS» su CNN e columnist del Washington Post. Autore di *The Post-American World* (2008) e *Age of Revolutions* (2024). Nel sito è citato per l'analisi della guerra iraniana come caso empirico del predatory hegemon: un sistema cooperativo globale costruito su beni pubblici e shadow of the future distrutto da un attore con fattore di sconto δ vicino a zero.",
    articles: [
      { title: "Fareed Zakaria on the Moral Cost of Trump's War", url: "/curated/2026-04-10-zakaria-trump-iran-war-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Klein, Ezra",
    type: "persona",
    note: "Giornalista e commentatore americano (1983), cofondatore di Vox, editorialista del NYT e conduttore dell'Ezra Klein Show. Nel sito è citato per il libro *Abundance* (2025, con Derek Thompson) e per il podcast che ne fa un bilancio a un anno dall'uscita: un caso in cui una certa idea della realtà — la scarsità come prodotto di scelte istituzionali, non di destino — ha cominciato a produrre effetti sul comportamento politico americano.",
    articles: [
      { title: "What Worries Me Most About 'Abundance'", url: "/curated/2026-04-28-klein-abundance-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Thompson, Derek",
    type: "persona",
    note: "Giornalista americano, contributing writer all'Atlantic. Coautore con Ezra Klein di *Abundance* (2025), il libro che ha rilanciato il dibattito sul supply-side progressivism negli Stati Uniti: costruire più case, più energia, ridurre i veto point istituzionali. Nel sito è citato insieme a Klein per l'angolo epistemologico del libro, non per il merito delle politiche di housing.",
    articles: [
      { title: "What Worries Me Most About 'Abundance'", url: "/curated/2026-04-28-klein-abundance-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Ottaviani, Jacopo",
    type: "persona",
    note: "Giornalista e informatico italiano, senior strategist a Code for Africa e fellow del Reuters Institute. Premio per il data journalism, lavora all'incrocio tra codice, dati e storytelling su temi sociali urgenti. Nel sito è il caso che mostra il capitale semantico in azione: ha ricostruito in due giorni *Patrie Galere* (mappa delle morti nelle carceri italiane) che nel 2012 gli aveva richiesto tre settimane, usando il vibe coding strutturato — divide et impera applicato all'AI.",
    articles: [
      { title: "From weeks of work to days: How I rebuilt two data journalism projects with AI", url: "/curated/2026-06-26-ottaviani-data-journalism-ai-reuters/", _source: "curated" }
    ]
  },
  {
    name: "Harbaugh, Ken",
    type: "persona",
    note: "Ex pilota della Marina americana, presidente di Valor Media Network. Autore del reportage sulle *vidma* — la rete di intelligence femminile della resistenza ucraina nei territori occupati. Nel sito è la fonte del pezzo che aggiunge dimensione operativa alla serie sulle ombre: honeytraps, comunicazione clandestina, kill chain alimentata da agenti civili.",
    articles: [
      { title: "The Warrior-Witches of Ukraine's Resistance", url: "/curated/2026-06-21-harbaugh-warrior-witches-ukraine-atlantic/", _source: "curated" }
    ]
  },
  {
    name: "Vogels, Werner",
    type: "persona",
    note: "CTO di Amazon (2005 in corso), ingegnere e informatico olandese. Autore del blog *All Things Distributed*, dove scrive di architettura distribuita, cultura organizzativa e innovazione. Nel sito è citato per la riflessione sul ritorno alla «two-pizza culture» e sulla revisione del metodo «working backwards» nell'era dei coding agent: quando costruire un prototipo costa una sera, l'ordine logico del processo creativo si inverte.",
    articles: [
      { title: "A Return to Two-Pizza Culture", url: "/curated/2026-06-30-vogels-two-pizza-culture-allthingsdistributed/", _source: "curated" }
    ]
  },
  {
    name: "Askell, Amanda",
    type: "persona",
    note: "Filosofa di Anthropic, responsabile della costituzione etica dei modelli Claude. Ha guidato la redazione dell'ultima iterazione del documento di 78 pagine soprannominato internamente «soul doc», che integra principi kantiani, la Dichiarazione Universale dei Diritti Umani e i termini di servizio di Apple. Nel sito è la figura che incarna la svolta: la filosofia come infrastruttura tecnica interna alle AI labs, non consulenza esterna.",
    articles: [
      { title: "Why Big AI Labs Are Hiring So Many Philosophers", url: "/curated/2026-06-24-economist-ai-labs-philosophers/", _source: "curated" }
    ]
  },
  {
    name: "Hui, Yuk",
    type: "persona",
    note: "Filosofo cinese-hongkonghese (1985), docente alla City University of Hong Kong. Teorico della cosmotecnica: ogni civiltà produce una tecnica radicata nella propria cosmologia, contro l'idea che la tecnologia moderna sia universale e neutra. Autore di *Recursivity and Contingency* (2019) e *Art and Cosmotechnics* (2021). Nel sito è la fonte del concetto che ridefinisce la competizione AI sino-americana come scontro tra cosmologie, non solo tra modelli.",
    articles: [
      { title: "Cosa intende la Cina per «intelligenza artificiale»", url: "/curated/2026-06-25-pieranni-cina-intelligenza-artificiale-altriorienti/", _source: "curated" }
    ]
  },
  {
    name: "Pieranni, Simone",
    type: "persona",
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
    note: "Sociologo dei media italiano, professore ordinario, studioso di piattaforme digitali, comunicazione e cultura della rete. Autore di numerosi lavori sull'identità digitale, i social network e le trasformazioni del giornalismo nell'era algoritmica. Nel sito è citato per la lettura critica dell'enciclica *Magnifica Humanitas*: usa il documento come leva per spostare il discorso sull'AI dal piano morale al piano politico-strutturale, introducendo l'immagine dei dati come «nuove terre rare del potere» e la necessità di una grammatica politica — non solo un appello etico — per governare l'intelligenza artificiale.",
    articles: [
      { title: "Magnifica Humanitas: le nuove terre rare del potere", url: "/curated/2026-06-17-boccia-artieri-magnifica-humanitas-substack/", _source: "curated" }
    ]
  },
  {
    name: "Brose, Christian",
    type: "persona",
    note: "Presidente e chief strategy officer di Anduril. Ex capo del personale della Commissione per le Forze Armate del Senato americano, poi direttore delle politiche al Pentagono. Autore di The Kill Chain (2020). Nel sito è la voce opposta ad Amodei sul rapporto tra aziende tecnologiche e apparato militare: o ci si fida del governo democraticamente eletto per decidere come usare la tecnologia, o si esce dal business. Ha definito il rifiuto di Anthropic di lavorare con il Pentagono «where Anthropic went wrong».",
    articles: [
      { title: "Our Military Is Built for the Wrong Century", url: "/curated/2026-05-28-brose-anduril-military-drones-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Casey Newton",
    type: "persona",
    note: "Giornalista tecnologico americano, co-fondatore con Zoe Schiffer di Platformer (2021). In precedenza ha scritto di tech per The Verge. Nel sito è l'autore di riferimento per il giornalismo sulle piattaforme e sulla governance tech: cultura interna delle grandi aziende, moderazione dei contenuti, rapporto tra piattaforme e democrazia.",
    articles: [
      { title: "Claude Code for writers", url: "/curated/2026-01-15-newton-claude-code-writers-platformer/", _source: "curated" }
    ]
  },
  {
    name: "McLuhan, Marshall",
    type: "persona",
    note: "Herbert Marshall McLuhan (Edmonton, 1911 – Toronto, 1980), teorico dei media canadese. Autore di La galassia Gutenberg (1962) e Understanding Media (1964). Ha coniato il concetto di «medium come messaggio»: le proprietà formali del mezzo di comunicazione trasformano la cognizione e la società indipendentemente dai contenuti trasmessi. Nel sito entra attraverso Tarchetti, che lo cita chiudendo il pezzo con l'immagine del sistema intero che cambia al contatto con una nuova tecnologia: «Non è l'area incisa che viene maggiormente toccata. La zona dell'urto e dell'incisione è intorpidita. Quello che cambia è l'intero sistema.» È la base teorica di ciò che Postman ha poi sistematizzato come ecologia dei media.",
    articles: [
      { title: "Non usiamo i media, ci cresciamo dentro", url: "/curated/2026-07-13-tarchetti-media-ecology-non-ho-capito/", _source: "curated" }
    ]
  },
  {
    name: "Postman, Neil",
    type: "persona",
    note: "Teorico dei media americano (New York, 1931–2003), fondatore del Department of Communication Arts and Sciences alla NYU e del Media Ecology Program (1968). Autore di Amusing Ourselves to Death (1985) e Technopoly (1992). Nel sito è il fondatore del quadro concettuale che Tarchetti usa per leggere il digitale: i media non sono contenitori neutri ma ambienti che determinano quali contenuti possono esistere e in che forma. L'errore degli editori — e il punto del pezzo — è trattare il digitale come canale di distribuzione mentre esso è un ambiente con proprietà formali proprie.",
    articles: [
      { title: "Non usiamo i media, ci cresciamo dentro", url: "/curated/2026-07-13-tarchetti-media-ecology-non-ho-capito/", _source: "curated" }
    ]
  },
  {
    name: "Azhar, Azeem",
    type: "persona",
    note: "Imprenditore, saggista e analista tecnologico britannico-pakistano (1971). Fondatore di Exponential View, newsletter e podcast di riferimento sull'AI e sulle tecnologie esponenziali. Ex dirigente in BBC, Microsoft e Jawbone. Autore di Exponential (2021). Nel sito è citato per The State of the AI Economy (2026): il primo modello bottom-up e de-duplicato della domanda nell'economia AI, costruito a partire dalle disclosure degli hyperscaler e da fonti proprietarie con una metodologia auditabile.",
    articles: [
      { title: "The State of the AI Economy", url: "/curated/2026-06-25-azhar-state-ai-economy-exponentialview/", _source: "curated" }
    ]
  },
  {
    name: "Meloni, Giorgia",
    type: "persona",
    note: "Politica italiana (1977), presidente del Consiglio dal ottobre 2022, co-fondatrice di Fratelli d'Italia (2012). Nel sito è studiata come caso di governance hard right in sistema fiscalmente vincolato: la distanza tra campagna identitaria e governo tecnocratico non è una scelta politica ma un effetto strutturale dei vincoli di bilancio italiani (debito ~140% PIL, obblighi PNRR, spread sensibili). Il modello «Melonizzazione» — normalizzazione dei partiti post-fascisti attraverso il pragmatismo di governo — funziona dove i margini di azione economica sono compressi al punto che la politica identitaria resta l'unico terreno praticabile.",
    articles: [
      { title: "Giorgia Meloni Cuts the Hard Right a Path to Power", url: "/curated/2026-08-21-cohen-meloni-nyt/", _source: "curated" }
    ]
  },
  {
    name: "Nelson, Ted",
    type: "persona",
    note: "Informatico e teorico dei media americano (1937). Coniò il termine «hypertext» nel 1965, ispirandosi al «memex» di Vannevar Bush: l'iper- stava per «estensione e generalità» come in matematica per gli spazi multidimensionali — una forma capace di rappresentare la struttura reticolare del pensiero. Ideò Xanadu, un browser in cui ogni citazione avrebbe dovuto linkare al documento originale, permettendo di leggere testo citante e citato affiancati — una storia universale del pensiero tracciabile frase per frase. Il progetto non fu mai realizzato. Nel sito è la figura che articola cosa si perde quando le AI summary sostituiscono i link: l'architettura cognitiva del web come sistema di trail di associazione espliciti e attribuiti.",
    articles: [
      { title: "A linkless internet", url: "/curated/2024-12-06-jennings-linkless-internet-aeon/", _source: "curated" }
    ]
  },
  {
    name: "Tucidide",
    type: "persona",
    note: "Storico ateniese (460 ca.–400 ca. a.C.), autore de «La guerra del Peloponneso». Nel sito è il punto di partenza di un canone di lettura per chi lavora con la complessità organizzativa e geopolitica: Tucidide dà il framework strutturale (l'autoinganno come motore della storia, la debolezza della giustizia tra potenze diseguali, la differenza tra cause profonde e pretesti); Senofonte — cronologicamente successivo — è il manager-pratico (l'Anabasi come caso di project management sotto crisi, ritiro attraverso territorio ostile senza mappa); Erodoto — cronologicamente il più antico — apre la prospettiva etnografica e longue-durée, proto-Braudel ante litteram. Il paradosso è che l'ordine logico di lettura (Tucidide → Senofonte → Erodoto: framework, applicazione, prospettiva) è l'inverso dell'ordine cronologico (Erodoto → Tucidide → Senofonte).",
    articles: [
      { title: "Thucydides the perspicacious", url: "/curated/2026-08-03-polansky-schillinger-thucydides-aeon/", _source: "curated" }
    ]
  },

];
