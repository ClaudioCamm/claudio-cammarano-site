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
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Derrida, Jacques",
    type: "persona",
    note: "Filosofo algerino-francese (1930–2004), fondatore della decostruzione. Nel sito è citato insieme a Foucault come fonte del post-strutturalismo deviato: la decostruzione come strumento critico si rovescia in cinismo politico quando viene adottata da chi vuole dissolvere ogni fondamento normativo. Teorico della differenza e della traccia.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" },
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
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" }
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
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" }
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
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
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
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" },
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
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" }
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
    name: "Lea Melandri",
    type: "persona",
    note: "Saggista, insegnante e attivista femminista italiana (1941). Fondatrice con Elvio Fachinelli della rivista «L'erba voglio» negli anni Settanta, poi di «Lapis»; autrice di testi come L'infamia originaria, pietre miliari della teoria femminista italiana. Nel sito, in un pezzo di Annalisa Camilli su «Internazionale», è il caso che mette a fuoco la tensione tra impatto culturale indiscutibile e assenza di un modello di business che ne garantisca il sostentamento. Cosa imputabile naturalmente non a Melandri stessa, quanto a un vero e proprio fallimento del mercato.",
    articles: []
  },
  {
    name: "Miyazaki Hayao",
    type: "persona",
    note: "Regista e animatore giapponese (1941), cofondatore dello Studio Ghibli. Nel sito è citato come riferimento implicito del dibattito sulla crisi degli animatori giapponesi: il modello artigianale e il mentoring che hanno formato la sua generazione sono esattamente ciò che l'industria ha smantellato dopo il 1973.",
    articles: []
  },
  {
    name: "Lea Ypi",
    type: "persona",
    note: "Filosofa e scrittrice albanese, docente alla LSE. Nel sito è citata due volte: come una delle quattro filosofe che secondo Gloria Origgi hanno rifondato la filosofia politica da Parigi — ripensando il marxismo come teoria dell'emancipazione contro un liberalismo che confonde libertà formale e libertà reale — e come una delle voci che hanno suggerito il pezzo di Jonathan White sulla colonizzazione tecnologica del pensiero sul futuro.",
    articles: []
  },
  {
    name: "Chiara Cordelli",
    type: "persona",
    note: "Filosofa politica, docente a Chicago. Nel sito è citata per la sua analisi dell'esternalizzazione progressiva dello Stato a soggetti privati — dalle carceri al controllo delle frontiere in «Privatocrazia» — e, in «Ruled by None», per la tesi che il flusso di capitale di venture capital orienti oggi l'idea di futuro più di qualunque pianificazione pubblica.",
    articles: []
  },
  {
    name: "Hélène Landemore",
    type: "persona",
    note: "Politologa, docente a Yale. Nel sito è citata per la sua proposta di assemblee cittadine selezionate per sorteggio come alternativa a una rappresentanza corrotta da media e interessi privati — metodo su cui ha lavorato concretamente alla costituzione islandese e alle Conventions Citoyennes francesi sul clima.",
    articles: []
  },
  {
    name: "Miranda Fricker",
    type: "persona",
    note: "Filosofa, docente alla NYU. Nel sito è citata per il suo lavoro sull'ingiustizia epistemica: chi viene ascoltato e chi no, e come questa asimmetria sia essa stessa una forma di potere che la filosofia politica tradizionale ha per lo più ignorato.",
    articles: []
  },
  {
    name: "Gloria Origgi",
    type: "persona",
    note: "Filosofa, ricercatrice CNRS a Parigi. Nel sito è l'autrice del pezzo che presenta quattro filosofe — Ypi, Cordelli, Landemore, Fricker — come prova che la filosofia politica, dopo decenni di egemonia maschile fatta più di sfoggio retorico che di proposte concrete, è tornata a essere una disciplina seria e politicamente rilevante.",
    articles: []
  },
  {
    name: "Gianluca Diegoli",
    type: "persona",
    note: "Consulente di marketing ed e-commerce, autore della newsletter, blogger della prima ora, grande sperimentatore, figura pubblica, autore di libri rilevanti che vanno al di là del marketing. Nel sito è citato per la sua distinzione fra tre «IA» del commercio digitale — discovery lato consumatore, infrastruttura di back-office, agentica — sistematicamente confuse nel dibattito pubblico nonostante abbiano urgenza, maturità e grado di hype completamente diversi.",
    articles: []
  },
  {
    name: "David Droga",
    type: "persona",
    note: "Fondatore dell'agenzia Droga5, ex CEO di Accenture Song. Nel sito è citato per la sua tesi provocatoria: l'AI sta per spazzare via il mercato della creatività mediocre, non quella di qualità — un argomento che distingue nettamente fra lavoro «formulaico e medio» (automatizzabile) e originalità di gusto, contesto e strategia (non automatizzabile, secondo lui).",
    articles: []
  },

  // ─── TEORIE ───────────────────────────────────────────────────────────────

  {
    name: "shadow of the future",
    type: "teoria",
    note: "Il «peso del futuro» nella teoria dei giochi iterata: la cooperazione è sostenibile quando i giocatori si aspettano di incontrarsi ancora e il fattore di sconto δ è sufficientemente alto. Nel sito è il concetto centrale della serie «Ombre»: senza ombra del futuro la diserzione diventa razionale e il sistema cooperativo collassa.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
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
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
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
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
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
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "controllo riflessivo",
    type: "teoria",
    note: "Concetto sviluppato da Vladimir Lefebvre negli anni Sessanta e militarizzato dalla dottrina russa: la capacità di indurre un avversario a prendere «volontariamente» decisioni favorevoli ai propri obiettivi, fornendogli informazioni selettive. Nel sito è la forma cognitiva della guerra ibrida: non si attacca il canale, si manipola il contenuto semantico.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "allineamento AI",
    type: "teoria",
    note: "Il problema di assicurare che i sistemi di intelligenza artificiale perseguano obiettivi coerenti con i valori umani, anche man mano che diventano più capaci. Nel sito è il quadro implicito che motiva le scelte di Anthropic: rifiutare contratti militari dipende dall'importanza di mantenere il controllo sullo sviluppo dell'AI a lungo termine.",
    articles: []
  },
  {
    name: "dual use",
    type: "teoria",
    note: "La proprietà di tecnologie e conoscenze di essere utilizzabili sia per scopi civili che militari. Nel sito è presentato come struttura normale dello sviluppo tecnologico, non come caso speciale: con le general purpose technologies, la distinzione origine/destinazione è inapplicabile per costruzione. Il termine funziona sempre troppo tardi, fino a risultare quasi inutile.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "dilemma di Collingridge",
    type: "teoria",
    note: "Paradosso sulla governance tecnologica: una tecnologia è controllabile quando non la capiamo ancora abbastanza da sapere cosa farne; quando la comprendiamo è già così radicata che il controllo è praticabile solo in forma di esenzione parziale. Nel sito spiega strutturalmente perché la classificazione dual use è sempre obsoleta quando diventa applicabile.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "general purpose technologies",
    type: "teoria",
    note: "Tecnologie (Bresnahan & Trajtenberg, 1995) che migliorano nel tempo, si applicano pervasivamente a tutti i settori e generano innovazioni complementari su scala sistemica: stampa, vapore, elettricità, Internet, AI. Nel sito è la categoria che rende inapplicabile la distinzione civile/militare: una GPT abita entrambi i domini per costruzione.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "extended mind",
    type: "teoria",
    note: "Tesi filosofica di Clark e Chalmers (1998): la mente non finisce dove finisce il cranio. Gli strumenti cognitivi usati regolarmente fanno parte funzionalmente della mente del soggetto. Nel sito è usata per inquadrare il rapporto con i LLM: la domanda non è se il LLM «pensa», ma come modifica la struttura cognitiva di chi lo usa.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "embodied mind",
    type: "teoria",
    note: "Paradigma cognitivo e filosofico secondo cui la cognizione è radicata nella struttura corporea del soggetto e nella sua interazione con l'ambiente, contro il cognitivismo classico (mente come software su hardware). Nel sito è il criterio per distinguere la mente biologica dal LLM: senza corpo non si dà cogito nel senso pieno.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
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
    note: "Concetto elaborato nel sito a partire dall'Actor-Network Theory: un LLM non ha esistenza pre-attanziale neanche residuale. Quando non è usato vale zero; quando è usato prende la forma dell'utente. Diverso da qualsiasi altro artefatto tecnico, che mantiene almeno un'ontologia residuale: è un attante che esiste solo nell'atto.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" }
    ]
  },
  {
    name: "capitale semantico",
    type: "teoria",
    note: "Concetto usato nel sito attraverso Floridi: l'insieme di tutto ciò che si è letto, vissuto, capito, sbagliato e corretto. Senza capitale semantico, uno strumento come un LLM non è utilizzabile intelligentemente — non si ha il metro per giudicare ciò che la macchina produce. L'esperienza non è una zavorra ma la condizione di possibilità dell'uso intelligente.",
    articles: [
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" }
    ]
  },
  {
    name: "scenario planning",
    type: "teoria",
    note: "Metodo strategico sviluppato in Shell negli anni Settanta (Pierre Wack): invece di prevedere il futuro, si costruiscono scenari alternativi plausibili per rompere i modelli mentali del management. Nel sito è il quadro con cui Amodei ha valutato le conseguenze a lungo termine dell'AI militarizzata prima di rifiutare il contratto con il Pentagono.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
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
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" }
    ]
  },
  {
    name: "incredulità verso le metanarrazioni",
    type: "teoria",
    note: "Definizione lyotardiana della condizione postmoderna (1979): la perdita di legittimità dei grandi sistemi di giustificazione (Ragione, Storia, Progresso). Nel sito è presentata come diagnosi, non come prescrizione — Lyotard descriveva un fatto, non lo celebrava. Il problema è nei suoi epigoni, che ne hanno fatto uno strumento di relativismo attivo.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "inemendabilità della realtà",
    type: "teoria",
    note: "Concetto del nuovo realismo di Ferraris: la realtà resiste agli schemi concettuali che le applichiamo. Non possiamo interpretarla arbitrariamente perché essa oppone resistenza. Nel sito è il limite esterno del processo interpretativo: senza questo vincolo non rimane libertà di interpretare, ma solo il potere di imporre la propria narrazione.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "ragione comunicativa",
    type: "teoria",
    note: "Concetto di Habermas: ogni volta che argomentiamo presupponiamo già norme condivise — la struttura pragmatica dell'argomentazione richiede che la migliore argomentazione possa prevalere sulla forza. Nel sito è l'universale minimo che il relativismo non può abolire senza autocontraddirsi: argomentare contro l'argomentazione è già argomentare.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
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
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
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
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "trasferimenti monetari diretti",
    type: "teoria",
    note: "Strumento di riduzione della povertà estrema che consiste nel dare liquidità diretta ai beneficiari invece di erogare servizi tramite intermediari. Nel sito è citato come dato che mette in discussione decenni di architetture assistenziali più sofisticate e più costose, a parità o superiorità di efficacia.",
    articles: []
  },
  {
    name: "aiuto allo sviluppo",
    type: "teoria",
    note: "Il complesso di politiche, programmi e architetture istituzionali con cui paesi e organizzazioni internazionali trasferiscono risorse ai paesi a basso reddito. Nel sito è il bersaglio implicito del dibattito sui trasferimenti monetari diretti: l'evidenza che la semplicità batta la sofisticazione costringe a riconsiderare l'intero impianto tradizionale.",
    articles: []
  },
  {
    name: "successione aziendale",
    type: "teoria",
    note: "Il processo di trasmissione della leadership e della proprietà di un'impresa da una generazione o gestione alla successiva. Nel sito è il tema di un caso studio sulle aziende creative di piccole dimensioni: la trasmissione della leadership in questi contesti non assomiglia né a quella delle imprese familiari tradizionali né a quella delle corporation.",
    articles: []
  },
  {
    name: "piccola impresa",
    type: "teoria",
    note: "Nel sito è il contesto dimensionale in cui si gioca il problema della successione aziendale nelle industrie creative: scale ridotte, dipendenza dalla figura fondatrice, assenza delle strutture di governance che attutiscono il passaggio generazionale nelle organizzazioni più grandi.",
    articles: []
  },
  {
    name: "editoria",
    type: "teoria",
    note: "Filo tematico ricorrente nei curated del sito: la sostenibilità economica della produzione culturale e informativa, dalla digitalizzazione di archivi storici dietro paywall, alla precarietà di chi produce conoscenza senza un modello di business solido, alla sovrapposizione crescente tra informazione e difesa nella nomina di figure militari a ruoli editoriali.",
    articles: []
  },
  {
    name: "memoria storica",
    type: "teoria",
    note: "Nel sito è il terreno di scontro politico attivato dalla digitalizzazione delle schede di iscrizione al NSDAP da parte di Der Spiegel: la domanda aperta è se la sensibilizzazione di massa su un passato totalitario non avrebbe più valore se resa universale invece che dietro paywall, soprattutto mentre forze come l'AfD ne contestano la rilevanza.",
    articles: []
  },
  {
    name: "legge Bacchelli",
    type: "teoria",
    note: "Legge italiana dell'8 agosto 1985, n. 440, che consente al Presidente del Consiglio di concedere un vitalizio a cittadini illustri in stato di necessità, con merito comprovato in campo scientifico, culturale, sportivo o sociale. Nel sito è il caso Lea Melandri: un punto dolente per chi sostiene che la produzione di conoscenza debba reggersi su un modello di business solido, non sulla sola buona volontà o sul sussidio pubblico ad hoc.",
    articles: []
  },
  {
    name: "propaganda",
    type: "teoria",
    note: "Nel sito è collegata alla sovrapposizione crescente tra i piani dell'informazione e della difesa: la nomina di un generale britannico, ex comandante della 77 Brigade, come defence editor dell'Economist è il caso che rende visibile quanto i contenuti che ne escono sembrino sempre meno innocui — un tema che dialoga con la dottrina Gerasimov e il controllo riflessivo già trattati altrove sul sito.",
    articles: []
  },
  {
    name: "industria dell'animazione",
    type: "teoria",
    note: "Nel sito è il caso degli animatori giapponesi: un mercato quasi triplicato in un decennio (fino a 19 miliardi di dollari) che resta cronicamente incapace di formare e remunerare chi produce materialmente il valore — solo uno su cinque riceve oggi formazione sul campo, contro sette su dieci una generazione fa. Un caso da manuale per chi si occupa di editoria e publishing più in generale.",
    articles: []
  },
  {
    name: "economia",
    type: "teoria",
    note: "Filo tematico ricorrente nei curated del sito, in due varianti distinte: come dibattito sugli strumenti di riduzione della povertà estrema (i trasferimenti monetari diretti contro l'architettura assistenziale tradizionale) e come lente con cui leggere la sostenibilità di filiere produttive — dalla cultura all'animazione — che crescono senza remunerare chi ci lavora.",
    articles: []
  },
  {
    name: "macroeconomia",
    type: "teoria",
    note: "Nel sito è il quadro teorico evocato dal dibattito sui trasferimenti monetari diretti: l'evidenza che la semplicità batta la sofisticazione nella riduzione della povertà estrema costringe a riconsiderare assunzioni macroeconomiche più ampie sull'efficacia delle architetture assistenziali tradizionali.",
    articles: []
  },
  {
    name: "GS1 Web Vocabulary",
    type: "teoria",
    note: "Standard che estende Schema.org con termini specifici per il largo consumo — categoria merceologica, allergeni, dettagli logistici — per dare «voce» ai codici a barre sul web. Nel sito è il caso esemplare di infrastruttura semantica mancante: un barcode tradizionale è muto per i motori di ricerca, generativi compresi.",
    articles: []
  },
  {
    name: "Schema.org",
    type: "teoria",
    note: "Vocabolario condiviso da Google, Microsoft e altri motori di ricerca per marcare semanticamente i contenuti web. Nel sito è la base su cui si costruisce il GS1 Web Vocabulary, e più in generale il riferimento per qualsiasi discussione su come rendere i contenuti leggibili dalle macchine, motori AI compresi.",
    articles: []
  },
  {
    name: "web semantico",
    type: "teoria",
    note: "L'idea — di cui il GS1 Web Vocabulary è un'implementazione concreta — che i contenuti del web debbano essere strutturati in modo leggibile dalle macchine, non solo dagli umani. Nel sito è il prerequisito infrastrutturale, spesso assente nei cataloghi italiani, perché i prodotti siano «letti» e citati dai motori di ricerca generativi.",
    articles: []
  },
  {
    name: "e-commerce",
    type: "teoria",
    note: "Nel sito è il settore attraversato da due pezzi complementari: la domanda se i prodotti italiani siano leggibili dai motori di ricerca generativi (infrastruttura semantica), e la distinzione fra le tre «IA» del commercio digitale che il settore confonde sistematicamente — discovery, infrastruttura, agentica.",
    articles: []
  },
  {
    name: "GEO",
    type: "teoria",
    note: "Generative Engine Optimization: l'equivalente della SEO per i motori di ricerca generativi. Nel sito è il problema pratico di chi si lamenta di non comparire nelle risposte AI senza sapere che, spesso, il blocco bot di Cloudflare attivo di default restituisce 403 proprio ai crawler che vorrebbe accogliere.",
    articles: []
  },
  {
    name: "pubblicità",
    type: "teoria",
    note: "Nel sito è il settore su cui David Droga distingue lavoro creativo «formulaico e medio» (che l'AI sostituirà) da originalità di gusto e strategia (che no) — mentre OpenAI punta a metà dei ricavi pubblicitari di Meta in tre anni e i riassunti AI erodono il traffico su cui si basa l'intero ecosistema.",
    articles: []
  },
  {
    name: "stock option",
    type: "teoria",
    note: "Nel sito è il meccanismo al centro del caso Bending Spoons: un pool di 51 milioni di azioni distribuite ai dipendenti, e il regime fiscale agevolato britannico (EMI) che spiega parte del vantaggio di Londra su Roma e Milano nel generare startup di seconda generazione dagli ex-dipendenti di aziende quotate.",
    articles: []
  },
  {
    name: "metodo scientifico",
    type: "teoria",
    note: "Il processo con cui acquisiamo informazione e strutturiamo la conoscenza. Nel sito è l'oggetto della carrellata di Kevin Kelly (2006/2026): non un insieme fisso di protocolli ma una struttura vivente che si modifica con gli strumenti disponibili — e che l'AI potrebbe cambiare nei prossimi 80 anni più di quanto non abbia fatto nei precedenti 80.",
    articles: []
  },
  {
    name: "ghostwriting",
    type: "teoria",
    note: "La pratica di scrivere testi firmati da altri. Nel sito è il termine chiave del pezzo di Dondi: il ghostwriting ha sempre reso invisibile il lavoro di supporto alle figure di potere senza che questo fosse considerato imbroglio. L'AI ne è una versione più economica e accessibile — e l'indignazione che suscita rivela che il privilegio viene contestato solo quando smette di essere esclusivo.",
    articles: []
  },
  {
    name: "privilegio",
    type: "teoria",
    note: "Nel sito è il nodo del ragionamento di Dondi: chi ha potere ha sempre avuto accesso a supporto — ghostwriter, editor, speechwriter, assistenti di ricerca — senza che questo fosse considerato imbroglio o segno di incompetenza. I privilegi non si confessano: si usano. L'AI rende visibile questa asimmetria rendendola accessibile a chi ne era storicamente escluso.",
    articles: []
  },
  {
    name: "lavoro invisibile",
    type: "teoria",
    note: "Il lavoro non riconosciuto, non retribuito o non attribuito che sorregge la produzione culturale e intellettuale visibile. Nel sito è il filo che connette il caso Dondi (ghostwriting come privilegio del potere) e il caso Melandri (chi ha prodotto conoscenza senza ricevere una rendita adeguata dall'industria che ne ha beneficiato).",
    articles: []
  },
  {
    name: "femminicidio",
    type: "teoria",
    note: "L'omicidio di donne motivato da odio misogino o da dinamiche di controllo maschile. Nel sito è la categoria statistica al centro del pezzo di Columbro: costruita socialmente come tutte le categorie — GDP, disoccupazione, ondate di calore — ma necessaria per misurare un pattern asimmetrico che i dati Istat documentano con chiarezza (53% delle donne ucciso da partner o ex, contro il 4,7% degli uomini).",
    articles: []
  },
  {
    name: "costruttivismo",
    type: "teoria",
    note: "La postura epistemologica secondo cui le categorie con cui descriviamo la realtà sono costruzioni sociali, storiche e culturali, non rispecchiamenti di entità naturali preesistenti. Nel sito è la posizione corretta e ben argomentata di Columbro sulle statistiche — e insieme il punto di vulnerabilità che il negazionismo sfrutta quando la distinzione tra costruzione della categoria e negazione del fenomeno non viene esplicitata.",
    articles: []
  },
  {
    name: "ontologia sociale",
    type: "teoria",
    note: "Lo studio di come esistono le entità sociali — istituzioni, categorie, ruoli, fatti istituzionali. Nel sito compare in due contesti: come distinzione mancante nel costruttivismo di Columbro (il problema non è che il femminicidio «non esista», ma come classificarlo correttamente) e come sfondo nella lettura di Nussbaum (un'ontologia delle virtù fondata sui problemi come entità primarie).",
    articles: []
  },
  {
    name: "etica della virtù",
    type: "teoria",
    note: "La tradizione etica che si concentra sul carattere del soggetto morale piuttosto che su principi universali o calcolo delle conseguenze. Nel sito è riletta attraverso Brady su Nussbaum come una diversa ontologia etica: non un'alternativa all'utilitarismo che aggiunge «virtù» all'ontologia, ma una proposta in cui i problemi — le sfere dell'attività umana dove la scelta è inevitabile — sono primari, e le virtù ne sono le soluzioni virtuali.",
    articles: []
  },
  {
    name: "liberalismo",
    type: "teoria",
    note: "La tradizione filosofico-politica fondata sulla libertà individuale, i diritti, lo stato di diritto e i limiti al potere arbitrario. Nel sito è il valore identitario con cui The Economist costruisce la propria autorità editoriale — una strategia di marketing valoriale distinta dal «marketing della verità» di WaPo e NYT, più resistente alle crisi di credibilità legate all'assetto proprietario.",
    articles: []
  },
  {
    name: "marketing valoriale",
    type: "teoria",
    note: "La strategia comunicativa di costruire l'identità di un brand attorno a un sistema di valori, non solo a una promessa funzionale o fattuale. Nel sito è il modo in cui The Economist ha risposto alla crisi di fiducia nei media: non difendere la verità come valore giornalistico (come WaPo e NYT nel 2016), ma difendere il liberalismo come sistema di valori su scala globale — con molta agiografia, ma con più resistenza strutturale.",
    articles: []
  },

  // ─── TESTI ────────────────────────────────────────────────────────────────

  {
    name: "The Evolution of Cooperation",
    type: "testo",
    note: "Libro di Robert Axelrod (1984). Riporta i risultati del torneo computazionale del dilemma del prigioniero e dimostra che la cooperazione può emergere tra attori egoisti in contesti iterati. Punto di partenza teorico della serie «Ombre» del sito: il lavoro che ha dato base scientifica all'idea che la cooperazione sia razionale.",
    citation: "AXELROD, Robert, <a href=\"https://openlibrary.org/books/OL3186143M/The_evolution_of_cooperation\"><em>The Evolution of Cooperation</em></a>, New York, Basic Books, 1984.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" }
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

  // ─── ISTITUZIONI ──────────────────────────────────────────────────────────

  {
    name: "Anthropic",
    type: "istituzione",
    note: "Azienda AI americana fondata nel 2021 da Dario Amodei e altri ex OpenAI. Nel sito è la protagonista dell'articolo sul rifiuto del contratto col Pentagono: rappresenta il modello dell'azienda AI che prende sul serio l'allineamento e le conseguenze strategiche a lungo termine. Nel dibattito sul dual use sceglie esplicitamente di non partecipare ai contratti militari diretti.",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Palantir",
    type: "istituzione",
    note: "Azienda di data analytics fondata nel 2003 da Peter Thiel e Alexander Karp. Nel sito è la controparte di Anthropic: Karp ha pubblicato un manifesto in favore dell'impegno militare di Silicon Valley, Palantir lavora attivamente con il Dipartimento della Difesa americano. Caso studio della scelta opposta a quella di Amodei.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
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
    articles: []
  },
  {
    name: "AfD",
    type: "istituzione",
    note: "Alternative für Deutschland, partito di estrema destra tedesco. Nel sito è citato come attore della contestazione politica della memoria storica: un dirigente del partito, Björn Höcke, si è scagliato contro la digitalizzazione degli archivi NSDAP — mentre il partito stesso continua a guadagnare terreno in diverse regioni tedesche.",
    articles: []
  },
  {
    name: "The Economist",
    type: "istituzione",
    note: "Settimanale britannico. Nel sito è il caso della nomina del generale Alex Turner — ex comandante della 77 Brigade, ancora in servizio attivo al momento della nomina — a defence editor: un caso che rende visibile la sovrapposizione crescente tra i piani dell'informazione e della difesa.",
    articles: []
  },
  {
    name: "77 Brigade",
    type: "istituzione",
    note: "Unità dell'esercito britannico per le «attività informative», istituita nel 2015. Nel sito è citata per il suo ruolo nel monitoraggio del dibattito online dei cittadini britannici durante la pandemia (secondo una richiesta FOI del 2024) e per la sovrapposizione, nel caso Turner/Economist, tra comando militare di un'unità di information warfare e ruolo editoriale.",
    articles: []
  },
  {
    name: "Studio Ghibli",
    type: "istituzione",
    note: "Studio d'animazione giapponese fondato nel 1985 da Hayao Miyazaki e Isao Takahata. Nel sito è il riferimento implicito di qualità artigianale nel dibattito sulla crisi degli animatori giapponesi: il modello di formazione sul campo che lo studio ha incarnato è esattamente ciò che l'industria, nel suo insieme, ha smantellato dopo il 1973.",
    articles: []
  },
  {
    name: "GS1",
    type: "istituzione",
    note: "Organizzazione globale di standard per l'identificazione di prodotti (codici a barre) e la tracciabilità della filiera. Nel sito è la fonte del GS1 Web Vocabulary e il punto di vista — tramite la newsletter Tendenze di GS1 Italy — da cui arrivano più pezzi curated sull'infrastruttura semantica del commercio digitale.",
    articles: []
  },
  {
    name: "Netcomm Forum",
    type: "istituzione",
    note: "Il principale evento italiano dedicato all'e-commerce. Nel sito è il contesto da cui Gianluca Diegoli osserva, dal vivo, la confusione sistematica fra le tre «IA» del commercio digitale e il ritardo italiano nell'adozione dell'AI di infrastruttura rispetto al Nord Europa.",
    articles: []
  },
  {
    name: "Cannes Lions",
    type: "istituzione",
    note: "Il festival internazionale della creatività pubblicitaria. Nel sito è il palcoscenico in cui OpenAI si presenta come protagonista a sorpresa puntando a metà dei ricavi pubblicitari di Meta, e in cui — l'anno precedente — un Grand Prix è stato ritirato dopo la scoperta che il case study era stato manipolato con l'AI.",
    articles: []
  },
  {
    name: "OpenAI",
    type: "istituzione",
    note: "Nel sito compare nel caso Droga come l'azienda che punta a metà dei ricavi pubblicitari attuali di Meta in tre anni — piattaforma ad self-serve, test pubblicitari in Giappone, Ad Tools generativi — segno che il fronte AI vs. mercato pubblicitario tradizionale si sta aprendo prima e più aggressivamente di quanto raccontato altrove sul sito a proposito di Anthropic o Palantir.",
    articles: []
  },
  {
    name: "Bending Spoons",
    type: "istituzione",
    note: "Azienda tech italiana, quotata al Nasdaq a giugno 2026 con una valutazione di 20 miliardi di dollari. Nel sito è il caso studio di cosa potrebbe sbloccare per l'ecosistema startup italiano: non l'azienda in sé, ma il pool di 51 milioni di azioni distribuite ai dipendenti, potenziale innesco di una generazione di startup di seconda mano sul modello di Berlino e Londra.",
    articles: []
  },
  {
    name: "Zalando",
    type: "istituzione",
    note: "E-commerce di moda tedesco, quotato. Nel sito è uno dei casi di riferimento — insieme a Rocket Internet — per misurare l'effetto «ex-dipendenti che fondano startup» a Berlino: 138 nuove startup da 24 unicorni tedeschi, l'81% rimaste nella stessa città.",
    articles: []
  },
  {
    name: "Rocket Internet",
    type: "istituzione",
    note: "Startup studio e incubatore tedesco. Nel sito è citato insieme a Zalando come motore dell'effetto di seconda generazione berlinese — l'evidenza usata per valutare se Bending Spoons potrà fare lo stesso per l'Italia.",
    articles: []
  },
  {
    name: "Revolut",
    type: "istituzione",
    note: "Fintech britannica. Nel sito è uno dei casi citati per l'effetto di seconda generazione londinese, insieme a Braze, Wise e Monzo — 168 startup da 27 unicorni, il 69% rimaste a Londra, favorite anche dal regime fiscale agevolato EMI sulle stock option.",
    articles: []
  },
  {
    name: "Washington Post",
    type: "istituzione",
    note: "Quotidiano americano. Nel sito è il caso della credibilità erosa: dopo il 2016 aveva costruito un «marketing della verità» («Democracy Dies in Darkness») come risposta al primo insediamento di Trump — una postura oggi meno credibile per ragioni legate all'assetto proprietario (Jeff Bezos) e alle relative ingerenze editoriali.",
    articles: []
  },
  {
    name: "New York Times",
    type: "istituzione",
    note: "Quotidiano americano. Nel sito è citato insieme al Washington Post come testata che ha imbastito un «marketing della verità» al primo insediamento di Trump nel 2016 — una strategia di posizionamento diversa da quella valoriale adottata dall'Economist, e più vulnerabile alle crisi di credibilità legate alle scelte proprietarie.",
    articles: []
  },

  {
    name: "The Technium",
    type: "testo",
    note: "Blog di Kevin Kelly (kk.org/thetechnium), attivo dal 2003. Il titolo è anche il nome del concetto centrale di Kelly: la tecnosfera come sistema vivente con proprie tendenze evolutive. Nel sito è la fonte del saggio del 2006 sulle speculazioni sul metodo scientifico, ripubblicato nel 2026 con un'introduzione aggiornata.",
    citation: "KELLY, Kevin, <a href=\"https://kk.org/thetechnium\"><em>The Technium</em></a>, blog personale, 2003–.",
    articles: []
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
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Bologna",
    type: "luogo",
    note: "Nel sito è lo sfondo dell'articolo su Umberto Eco: il DAMS, le istituzioni culturali fondate da Eco, l'università come luogo di formazione non di accademici ma di persone capaci di stare nel mondo e influenzarlo — «lo scopo non è creare Platone, ma Alcibiade». Bologna come laboratorio intellettuale del secondo Novecento italiano.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" }
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
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Ucraina",
    type: "paese",
    note: "Nel sito è il laboratorio del win-set compresso e del fattore δ rivoluzionato: Zelensky, outsider con basso δ pre-2022, ha trasformato la propria struttura strategica dopo l'invasione russa. È anche uno dei «primi laboratori» della guerra ibrida russa insieme a Estonia, Georgia e Moldova.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
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
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Unione Europea",
    type: "paese",
    note: "Come istituzione: citata per la sua struttura grande, centralizzata, iperconnessa — che Taleb considera fragile per costruzione perché concentra i rischi e sopprime la varianza locale. Appare come benchmark (spesa R&S media europea 2,2% del PIL contro l'1,3% italiano) e come attore nelle negoziazioni internazionali. Per Europa come concetto culturale e geopolitico, vedi la voce separata.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
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
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Cina",
    type: "paese",
    note: "Nel sito è il caso studio della fragilità autoritaria: il «modello cinese» (decisioni rapide perché senza opposizione) è una sciocchezza confutata dalla pandemia — i medici di Wuhan zittiti, l'occultamento attivo, il ritardo nella condivisione del genoma. Citata anche come attore geopolitico che gioca su tre tavoli incompatibili simultaneamente.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Iran",
    type: "paese",
    note: "Nel sito in due accezioni: come paese (attore geopolitico, esportatore di petrolio con la Cina come compratore unico, giocatore su tavoli incompatibili); e come luogo storico della rivoluzione del 1978–79 (caso studio dell'antiilluminismo e dell'entusiasmo malriposto di Foucault). Le due voci sono separate nell'indice.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Germania",
    type: "paese",
    note: "Nel sito è il contesto della digitalizzazione degli archivi NSDAP da parte di Der Spiegel e dell'avanzata dell'AfD in diverse regioni: il caso in cui la cultura della memoria storica diventa esplicitamente terreno di scontro politico contemporaneo.",
    articles: []
  },
  {
    name: "Regno Unito",
    type: "paese",
    note: "Nel sito è il contesto della 77 Brigade e della sovrapposizione fra information warfare militare e giornalismo di difesa, resa visibile dalla nomina di un suo ex comandante a defence editor dell'Economist.",
    articles: []
  },
  {
    name: "Giappone",
    type: "paese",
    note: "Nel sito è il caso della crisi degli animatori: un mercato dell'anime quasi triplicato in un decennio fino a 19 miliardi di dollari, sostenuto da una manodopera cronicamente sottopagata e mal formata dopo lo smantellamento del sistema di apprendistato seguito al fallimento di Mushi Production nel 1973.",
    articles: []
  },

  // ─── LEADER POLITICI ──────────────────────────────────────────────────────

  {
    name: "Trump, Donald",
    type: "persona",
    note: "Politico americano, presidente degli Stati Uniti (2025 in corso). Nel sito è la figura politica più citata (sei articoli): appare come utilizzatore deteriore del post-strutturalismo (nega la realtà dei fatti), caso studio di basso fattore di sconto δ nella teoria dei giochi, pivot del caos democratico globale post-2016.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" },
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Putin, Vladimir",
    type: "persona",
    note: "Presidente russo (1952). Nel sito compare in quattro articoli: come utilizzatore deteriore della lezione post-strutturalista; come ideatore della guerra ibrida e delle misure attive; come attore della crisi ucraina; come caso di win-set domestico progressivamente compresso e irreversibile dopo l'accentramento del potere.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" },
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Zelensky, Volodymyr",
    type: "persona",
    note: "Presidente ucraino (1978). Nel sito è studiato come caso di trasformazione radicale del profilo strategico: outsider comunicativo con basso fattore δ pre-2022, ha cambiato completamente struttura strategica dopo l'invasione russa. Caso limite nella teoria dei two-level games: win-set domestico compresso, win-set internazionale massimizzato.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Orbán, Viktor",
    type: "persona",
    note: "Primo ministro ungherese (1963). Nel sito è citato come utilizzatore deteriore della lezione post-strutturalista: la realtà come narrazione manipolabile, senza resistenza ontologica. Rappresenta il modello dell'autocrate illiberale europeo che ha imparato male da Foucault e Derrida.",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" }
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
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Karp, Alexander",
    type: "persona",
    note: "CEO di Palantir (1967). Nel sito è citato per il suo «manifesto» del 2026: l'élite ingegneristica di Silicon Valley ha un debito morale con il paese che ne ha reso possibile l'ascesa e un obbligo affermativo di partecipare alla difesa della nazione. Il sito condivide la premessa ma non le conclusioni.",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
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
    articles: []
  },
  {
    name: "Arendt, Hannah",
    type: "persona",
    note: "Filosofa politica tedesco-americana (1906–1975). Autrice de Le origini del totalitarismo (1951) e La banalità del male (1963). Teorica della sfera pubblica, della natalità come categoria politica e della distinzione tra lavoro, opera e azione come fondamento dell'analisi della vita attiva.",
    articles: []
  },
  {
    name: "Thiel, Peter",
    type: "persona",
    note: "Investitore e imprenditore tedesco-americano (1967). Cofondatore di PayPal e Palantir, finanziatore di Facebook e Trump. Teorico del monopolio come obiettivo strategico (Zero to One, 2014): i mercati competitivi distruggono i margini, il monopolio crea valore — e il «segreto» è la verità che nessuno dice ad alta voce.",
    articles: []
  },
  {
    name: "van Middelaar, Luuk",
    type: "persona",
    note: "Storico e filosofo politico olandese (1973). Consigliere di Herman Van Rompuy al Consiglio Europeo, autore de Il passaggio all'Europa (2009) e Alarums and Excursions (2019). Teorico dell'improvvisazione istituzionale come metodo di governance europea in tempi di crisi.",
    articles: []
  },
  {
    name: "Kojève, Alexandre",
    type: "persona",
    note: "Filosofo russo-francese (1902–1968). Le sue letture di Hegel agli anni Trenta hanno formato un'intera generazione di intellettuali europei (Aron, Bataille, Merleau-Ponty). Teorico della «fine della storia» ante litteram e dell'impero post-storico — il Lateinisches Reich come possibile risposta europea alla fine dei conflitti ideologici.",
    articles: []
  },
  {
    name: "Kevin Kelly",
    type: "persona",
    note: "Futurista e saggista americano (1952), co-fondatore di Wired, autore di Out of Control (1994), What Technology Wants (2010), The Inevitable (2016). Nel sito è citato per un saggio del 2006 sulle possibili evoluzioni del metodo scientifico — quattordici speculazioni che vent'anni dopo leggono come una descrizione del presente, soprattutto alla luce dell'AI.",
    articles: []
  },
  {
    name: "Martha Nussbaum",
    type: "persona",
    note: "Filosofa americana (1947), docente a Chicago. Neo-aristoteliana, autrice di The Fragility of Goodness (1986), Upheavals of Thought (2001), Creating Capabilities (2011). Il suo approccio sulle capacità dovrebbe essere centrale nella teorizzazione del lavoro culturale, ma apparentemente così non è. Nel sito è il pretesto per una lettura dell'etica della virtù come ontologia etica radicale: le virtù non sono proprietà positive determinate, ma soluzioni virtuali a problemi che esistono per primi.",
    articles: []
  },
  {
    name: "Aristotele",
    type: "persona",
    note: "Filosofo greco (384–322 a.C.), allievo di Platone, fondatore del Liceo. Nel sito è il fondamento teorico dell'etica della virtù riletta da Nussbaum: non un catalogo di caratteristiche positive, ma una logica in cui i problemi — le sfere dell'attività umana dove la scelta è inevitabile e rischiosa — sono primari, e le virtù ne sono la risposta eccellente.",
    articles: []
  },
  {
    name: "Deleuze, Gilles",
    type: "persona",
    note: "Filosofo francese (1925–1995). Nel sito è evocato per le implicazioni deleuziane della lettura di Nussbaum da parte di Brady: i problemi come entità virtuale-reali che precedono le soluzioni — il virtuale non è meno reale dell'attuale, è semplicemente la modalità di esistenza di ciò che è irrisolto. Una lettura che dialoga con l'ontologia del problema come primum dell'etica.",
    articles: []
  },
  {
    name: "Ilaria Maria Dondi",
    type: "persona",
    note: "Giornalista e autrice della newsletter «Anomalia. Umani in tempi artificiali». Nel sito è la voce che demistifica l'indignazione per l'uso dell'AI nel lavoro creativo: il supporto invisibile (ghostwriter, editor, speechwriter) è sempre stato accessibile al potere senza essere considerato imbroglio — l'AI ne è una versione più economica e accessibile a chi storicamente ne era escluso.",
    articles: []
  },
  {
    name: "Donata Columbro",
    type: "persona",
    note: "Data journalist e autrice di «Perché contare i femminicidi è un atto politico» (2026) e della newsletter «Ti spiego il dato». Nel sito è la voce che dimostra il carattere costruito di tutte le categorie statistiche — dal femminicidio alla disoccupazione — e che distingue questa postura costruttivista legittima dall'uso negazionista della stessa tesi.",
    articles: []
  },

];
