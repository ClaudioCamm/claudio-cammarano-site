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

  // ─── TESTI ────────────────────────────────────────────────────────────────

  {
    name: "The Evolution of Cooperation",
    type: "testo",
    note: "Libro di Robert Axelrod (1984). Riporta i risultati del torneo computazionale del dilemma del prigioniero e dimostra che la cooperazione può emergere tra attori egoisti in contesti iterati. Punto di partenza teorico della serie «Ombre» del sito: il lavoro che ha dato base scientifica all'idea che la cooperazione sia razionale.",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" }
    ]
  },
  {
    name: "Antifragile",
    type: "testo",
    note: "Libro di Nassim Taleb (2012), terzo volume della pentalogia Incerto. Formalizza la distinzione tra sistemi fragili, robusti e antifragili attraverso la disuguaglianza di Jensen. Nel sito è citato sia per il nucleo matematico (risposta convessa vs. concava ai disturbi) sia per le implicazioni politiche: il modello cinese come esempio di fragilità mascherata da efficienza.",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "La condition postmoderne",
    type: "testo",
    note: "Rapporto di Jean-François Lyotard (1979) sulla «condizione del sapere» nelle società avanzate. Conia la formula «incredulità verso le metanarrazioni». Nel sito è usato per mostrare come la diagnosi postmoderna sia stata rovesciata in strumento di potere dai populismi contemporanei — uso che Lyotard non aveva prescritto.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Dialektik der Aufklärung",
    type: "testo",
    note: "Opera di Adorno e Horkheimer (1947). La tesi: l'illuminismo porta in sé i germi del proprio rovesciamento — la ragione strumentale, separata da fondamenti normativi, diventa dominio. Nel sito il capovolgimento è letto diversamente: non è l'illuminismo che si è rovesciato su se stesso, è la sua critica che si è rovesciata.",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Why Nations Fail",
    type: "testo",
    note: "Libro di Daron Acemoglu e James Robinson (2012). Argomenta che prosperità e fallimento degli stati dipendono dalla qualità delle loro istituzioni — inclusive o estrattive. Nel sito è il quadro teorico per leggere le traiettorie degli stati analizzati nella serie «Ombre».",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "The Embodied Mind",
    type: "testo",
    note: "Libro di Francisco Varela, Evan Thompson ed Eleanor Rosch (1991). Propone la cognizione come radicata nel corpo e nell'esperienza vissuta, contro il cognitivismo classico. Nel sito è il testo che «cambia statuto» davanti a un LLM: da posizione tra altre diventa criterio di distinzione tra mente biologica e macchina.",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Discours de la méthode",
    type: "testo",
    note: "Opera di René Descartes (1637). Propone il metodo del dubbio sistematico come fondamento della conoscenza certa, e la «morale provvisoria» come strategia conservatrice durante la demolizione delle vecchie certezze. Nel sito è usato come analogia del programma illuminista: ricostruire le fondamenta richiede un alloggio provvisorio.",
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
  }

];
