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
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Foucault, Michel",
    type: "persona",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Derrida, Jacques",
    type: "persona",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Averroè",
    type: "persona",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Kahneman, Daniel",
    type: "persona",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Taleb, Nassim Nicholas",
    type: "persona",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "Axelrod, Robert",
    type: "persona",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" }
    ]
  },
  {
    name: "Putnam, Robert",
    type: "persona",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Lyotard, Jean-François",
    type: "persona",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Habermas, Jürgen",
    type: "persona",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Ferraris, Maurizio",
    type: "persona",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Eco, Umberto",
    type: "persona",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" }
    ]
  },
  {
    name: "Wack, Pierre",
    type: "persona",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
    ]
  },
  {
    name: "Amodei, Dario",
    type: "persona",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
    ]
  },
  {
    name: "Gerasimov, Valery",
    type: "persona",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Acemoglu, Daron",
    type: "persona",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Platone",
    type: "persona",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" },
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" }
    ]
  },
  {
    name: "Spinoza, Baruch",
    type: "persona",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Clark, Andy",
    type: "persona",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Varela, Francisco",
    type: "persona",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Floridi, Luciano",
    type: "persona",
    articles: [
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" }
    ]
  },
  {
    name: "Braudel, Fernand",
    type: "persona",
    articles: [
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "Vico, Giambattista",
    type: "persona",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" }
    ]
  },
  {
    name: "Friston, Karl",
    type: "persona",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },

  // ─── TEORIE ───────────────────────────────────────────────────────────────

  {
    name: "shadow of the future",
    type: "teoria",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Tit-for-Tat",
    type: "teoria",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "dilemma del prigioniero iterato",
    type: "teoria",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "win-set domestico",
    type: "teoria",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "two-level games",
    type: "teoria",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "antifragilità",
    type: "teoria",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "cigni neri",
    type: "teoria",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "dottrina Gerasimov",
    type: "teoria",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "controllo riflessivo",
    type: "teoria",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "dual use",
    type: "teoria",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "dilemma di Collingridge",
    type: "teoria",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "general purpose technologies",
    type: "teoria",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "extended mind",
    type: "teoria",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "embodied mind",
    type: "teoria",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "free-energy principle",
    type: "teoria",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "LLM come attante zero",
    type: "teoria",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" },
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" }
    ]
  },
  {
    name: "capitale semantico",
    type: "teoria",
    articles: [
      { title: "La macchina e la lotta", url: "/writings/2026-06-01-la-macchina-e-la-lotta/" }
    ]
  },
  {
    name: "scenario planning",
    type: "teoria",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
    ]
  },
  {
    name: "verum ipsum factum",
    type: "teoria",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" }
    ]
  },
  {
    name: "ermeneutica del sospetto",
    type: "teoria",
    articles: [
      { title: "Salveremo le humanities", url: "/writings/2026-03-15-salveremo-le-humanities/" }
    ]
  },
  {
    name: "incredulità verso le metanarrazioni",
    type: "teoria",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "inemendabilità della realtà",
    type: "teoria",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "ragione comunicativa",
    type: "teoria",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "istituzioni inclusive vs. estrattive",
    type: "teoria",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "disputa sugli universali",
    type: "teoria",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Mavi Vatan",
    type: "teoria",
    articles: [
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "fattore di sconto δ",
    type: "teoria",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },

  // ─── TESTI ────────────────────────────────────────────────────────────────

  {
    name: "The Evolution of Cooperation",
    type: "testo",
    articles: [
      { title: "L'ombra del futuro", url: "/writings/2026-04-15-lombra-del-futuro/" }
    ]
  },
  {
    name: "Antifragile",
    type: "testo",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "La condition postmoderne",
    type: "testo",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Dialektik der Aufklärung",
    type: "testo",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Why Nations Fail",
    type: "testo",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "The Embodied Mind",
    type: "testo",
    articles: [
      { title: "La differenza fra Claude e le mie gatte", url: "/writings/2026-04-30-la-differenza-fra-claude-e-le-mie-gatte/" }
    ]
  },
  {
    name: "Discours de la méthode",
    type: "testo",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },

  // ─── ISTITUZIONI ──────────────────────────────────────────────────────────

  {
    name: "Anthropic",
    type: "istituzione",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Palantir",
    type: "istituzione",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "DARPA",
    type: "istituzione",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },

  // ─── LUOGHI ───────────────────────────────────────────────────────────────

  {
    name: "Libano / Beirut",
    type: "luogo",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" }
    ]
  },
  {
    name: "Mediterraneo come spazio strategico",
    type: "luogo",
    articles: [
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "Iran 1978–79",
    type: "luogo",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Taiwan / TSMC",
    type: "luogo",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Bologna",
    type: "luogo",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" }
    ]
  },
  {
    name: "Bergamo / Val Brembana",
    type: "luogo",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },

  // ─── PAESI (stati come attori politici) ───────────────────────────────────

  {
    name: "Russia",
    type: "paese",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Ucraina",
    type: "paese",
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Stati Uniti",
    type: "paese",
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
    note: "Come attore istituzionale. Per Europa come concetto culturale e geopolitico, vedi la voce separata.",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Cartolina dal paese più bello del mondo", url: "/writings/2026-04-24-cartolina-dal-paese-piu-bello-del-mondo/" }
    ]
  },
  {
    name: "Europa",
    type: "paese",
    note: "Come concetto geopolitico e culturale, distinto dall'istituzione UE.",
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
    articles: [
      { title: "Il rumore a Beirut", url: "/writings/2026-04-09-il-rumore-a-beirut/" },
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Iran",
    type: "paese",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" },
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },

  // ─── LEADER POLITICI ──────────────────────────────────────────────────────

  {
    name: "Trump, Donald",
    type: "persona",
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
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Orbán, Viktor",
    type: "persona",
    articles: [
      { title: "Dieci anni senza Umberto Eco", url: "/writings/2026-02-19-dieci-anni-senza-umberto-eco/" }
    ]
  },
  {
    name: "Netanyahu, Benjamin",
    type: "persona",
    articles: [
      { title: "La dialettica dell'antilluminismo", url: "/writings/2026-06-16-la-dialettica-dell-antilluminismo/" }
    ]
  },
  {
    name: "Xi, Jinping",
    type: "persona",
    articles: [
      { title: "L'ombra del passato", url: "/writings/2026-05-04-lombra-del-passato/" }
    ]
  },
  {
    name: "Karp, Alexander",
    type: "persona",
    articles: [
      { title: "Nessuna tecnologia è innocua", url: "/writings/2026-05-20-nessuna-tecnologia-e-innocua/" }
    ]
  },
  {
    name: "Hegseth, Pete",
    type: "persona",
    articles: [
      { title: "Quando Dario Amodei ha detto no al Pentagono", url: "/writings/2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono/" }
    ]
  },
  {
    name: "Thompson, Ben",
    type: "persona",
    articles: []
  },
  {
    name: "Arendt, Hannah",
    type: "persona",
    articles: []
  },
  {
    name: "Thiel, Peter",
    type: "persona",
    articles: []
  },
  {
    name: "van Middelaar, Luuk",
    type: "persona",
    articles: []
  },
  {
    name: "Kojève, Alexandre",
    type: "persona",
    articles: []
  }

];
