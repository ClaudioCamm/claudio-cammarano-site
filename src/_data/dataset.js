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
  version: "1.1.0",
  released: "2026-09-19",
  license: "https://creativecommons.org/licenses/by/4.0/",
  licenseLabel: "CC BY 4.0",
  // Due DOI, e non sono intercambiabili. `doi` e' quello CONCETTUALE: non
  // cambia mai e risolve sempre all'ultima versione — e' quello da citare e
  // da mettere nelle pagine. `versionDoi` identifica questa versione e sola
  // questa: cambia a ogni «New version» su Zenodo. Entrambi finiscono in
  // `identifier` dentro /concetti.json, il concettuale per primo.
  doi: "https://doi.org/10.5281/zenodo.22843731",
  // Da aggiornare a ogni «New version» su Zenodo, prima del push:
  // il DOI si riserva nella bozza e si incolla qui.
  versionDoi: "https://doi.org/10.5281/zenodo.22850180",
  changelog: [
    {
      version: "1.1.0",
      date: "2026-09-19",
      it: "268 concetti (7 nuovi), 180 con aggancio esterno (+11), 148 legami dichiarati (+82) che coprono 217 voci. Corretta la definizione di epistemia: e' l'illusione di conoscenza prodotta in chi usa il modello, non una proprieta' del modello."
    },
    {
      version: "1.0.0",
      date: "2026-09-19",
      it: "Prima pubblicazione: 268 concetti tipizzati, 169 con aggancio a Wikidata e Wikipedia, 66 legami dichiarati con la loro ragione, 143 riferimenti ad articoli."
    }
  ]
};
