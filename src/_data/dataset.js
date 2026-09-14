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
  released: "2026-09-14",
  license: "https://creativecommons.org/licenses/by/4.0/",
  licenseLabel: "CC BY 4.0",
  // Compilare dopo il deposito: il DOI concettuale, quello che punta sempre
  // all'ultima versione. Finisce in `identifier` dentro /concetti.json.
  doi: null,
  changelog: [
    {
      version: "1.0.0",
      date: "2026-09-14",
      it: "Prima pubblicazione: 261 concetti tipizzati, 169 con aggancio a Wikidata e Wikipedia, 49 legami dichiarati con la loro ragione, 533 riferimenti ad articoli."
    }
  ]
};
