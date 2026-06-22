// Mappa esplicita: tag liberi dei curated (frontmatter `tags:`, minuscolo) →
// nome canonico dell'Argomento (deve corrispondere a una voce in clusters.js,
// esistente o nuova). Qualsiasi tag curated NON presente qui resta puramente
// decorativo: non genera una pagina /tag/ e non compare in Temi/Argomenti.
// I nomi di paese (cina, germania, giappone, stati-uniti, ucraina) sono
// volutamente esclusi: quell'informazione vive nel campo concepts: come
// Concetto-paese, non come Argomento.

module.exports = {
  // Coincidenze di maiuscole con Argomenti già esistenti (writings)
  "ai": "AI",
  "democrazia": "Democrazia",
  "filosofia": "Filosofia",
  "geopolitica": "Geopolitica",
  "politica": "Politica",
  "scrittura": "Scrittura",
  "epistemologia": "Epistemologia",
  "italia": "Italia",

  // Accorpamenti in Argomenti già esistenti (sinonimi tematici)
  "storie": "Geopolitica",
  "educazione": "Formazione",

  // Nuovi Argomenti — Geopolitica & potere
  "difesa": "Difesa",
  "europa": "Europa",
  "storia": "Storia",
  "memoria": "Storia",
  "strategia": "Strategia",
  "autoritarismo": "Autoritarismo",
  "decision-making": "Decisioni",
  "energia": "Transizione energetica",
  "transizione": "Transizione energetica",

  // Nuovi Argomenti — Editoria & comunicazione
  "media": "Media",
  "giornalismo": "Giornalismo",
  "cultura": "Cultura",
  "globalizzazione": "Cultura",
  "editoria": "Editoria",
  "publishing": "Editoria",
  "animazione": "Editoria",
  "marketing": "Marketing",
  "brand": "Marketing",
  "imprenditoria": "Imprenditoria",
  "leadership": "Imprenditoria",
  "creative-industries": "Imprenditoria",
  "pubblicità": "Pubblicità",

  // Nuovi Argomenti — Epistemologia & AI
  "ricerca": "Ricerca",
  "sicurezza": "Sicurezza",
  "scienza": "Scienza",
  "chimica": "Scienza",
  "agenti": "Agenti",
  "interpretabilità": "Interpretabilità",
  "semiconduttori": "Semiconduttori",
  "google": "Google",
  "futuro": "Futuro",
  "lingua": "Lingua",
  "genere": "Genere",
  "privacy": "Sorveglianza",
  "surveillance": "Sorveglianza",
  "wearables": "Sorveglianza",

  // Nuovi Argomenti — Italia & istituzioni
  "femminismo": "Femminismo",

  // Nuovi Argomenti — Economia & lavoro
  "economia": "Economia",
  "sviluppo": "Economia",
  "lavoro": "Lavoro",
  "ecommerce": "E-commerce",
  "retail": "E-commerce",
  "startup": "Startup"
};
