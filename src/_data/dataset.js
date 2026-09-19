/**
 * Identita' del dataset dell'indice concettuale (/concetti.json).
 *
 * La versione e' EDITORIALE e pinnata a mano: un dataset con un DOI non puo'
 * cambiare numero di versione a ogni build. Prima la generavo dalla data di
 * build, che era sbagliato — il file cambiava versione da solo ogni giorno.
 *
 * Quando i dati cambiano in modo sostanziale: alza `version`, aggiorna
 * `released`, scrivi una riga di `changelog`, e su Zenodo usa «New version»
 * sullo stesso record (il DOI concettuale resta, la versione ne ottiene uno
 * proprio). Tenere allineati anche dataset/CITATION.cff e dataset/README.md.
 */
module.exports = {
  version: "1.0.0",
  released: "2026-09-19",
  license: "https://creativecommons.org/licenses/by/4.0/",
  licenseLabel: "CC BY 4.0",
  // Due DOI, e non sono intercambiabili. `doi` e' quello CONCETTUALE: non
  // cambia mai e risolve sempre all'ultima versione — e' quello da citare e
  // da mettere nelle pagine. `versionDoi` identifica questa versione e sola
  // questa: cambia a ogni «New version» su Zenodo. Entrambi finiscono in
  // `identifier` dentro /concetti.json, il concettuale per primo.
  doi: "https://doi.org/10.5281/zenodo.22843731",
  versionDoi: "https://doi.org/10.5281/zenodo.22843732",
  changelog: [
    {
      version: "1.0.0",
      date: "2026-09-19",
      it: "Prima pubblicazione: 268 concetti tipizzati, 169 con aggancio a Wikidata e Wikipedia, 66 legami dichiarati con la loro ragione, 143 riferimenti ad articoli."
    }
  ]
};
