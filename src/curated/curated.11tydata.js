// Directory data per i curated: assegna a ogni item un layout con pagina
// propria. Senza questo, ogni /curated/<slug>/ veniva generato come file
// vuoto (0 byte): il corpo dei .md è vuoto e nessun layout era applicato,
// quindi indice, concetti e sitemap puntavano a nodi inesistenti.
module.exports = {
  layout: "layouts/curated.njk",
  og_type: "article"
};
