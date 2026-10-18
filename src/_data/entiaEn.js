/**
 * Le etichette inglesi del vocabolario ENTIA — ENTIA 1.1 bilingue (R14).
 *
 * Qui sta solo il vocabolario DEL PROTOCOLLO: i cinque strati, le sei funzioni
 * e i Temi. Argomenti e Concetti restano in italiano, con la lingua dichiarata
 * in /entia.json: sono il vocabolario locale, che la specifica dichiara
 * sostituibile (conformita', "struttura fissa, vocabolario locale"). Tradurli
 * non renderebbe il protocollo adottabile da altri, renderebbe questo archivio
 * leggibile in inglese: sono due cose diverse e solo la prima e' R14.
 *
 * I nomi degli strati seguono l'inglese che il lato ricerca usa gia' (Topics,
 * Themes, Concepts): se qui si inventasse un sinonimo, /en/claims/ e
 * /entia.json direbbero la stessa cosa con due parole.
 *
 * Le chiavi sono le etichette italiane (strati, temi) e gli slug (funzioni).
 * Se una chiave manca, il build si ferma: vedi `manca()` in fondo. Una
 * etichetta inglese assente e' peggio di un vocabolario monolingue, perche'
 * promette due lingue e ne consegna una e mezza.
 */

const strati = {
  "Tag libero": "Free tag",
  "Argomento": "Topic",
  "Tema": "Theme",
  "Concetto": "Concept",
  "Geometria": "Geometry"
};

// "Lettura di mercato" tiene la metafora della lettura, non diventa
// "Market analysis": la funzione non analizza, interpreta una struttura.
// "Dato che corregge" allenta "dato" in "evidence" perche' la definizione
// stessa parla di evidenza — un numero, un trend o un caso.
const funzioni = {
  "lettura-di-mercato": "Market reading",
  "riferimento-tecnico": "Technical reference",
  "metodo-di-lavoro": "Working method",
  "strumento-concettuale": "Conceptual tool",
  "dato-che-corregge": "Corrective evidence",
  "elementi-di-scenario": "Scenario elements"
};

const temi = {
  "Epistemologia & AI": "Epistemology & AI",
  "Geopolitica & potere": "Geopolitics & power",
  "Editoria & comunicazione": "Publishing & communication",
  "Italia & istituzioni": "Italy & institutions",
  "Economia & lavoro": "Economy & work"
};

// La descrizione inglese dello schema: la stessa
// depositata su Zenodo il 18/10: se divergono, il record e il vocabolario
// dicono due cose del medesimo protocollo.
const scheme = {
  description: "A five-layer editorial notation for curated archives: what an item is for whoever keeps it, declared item by item."
};

// Chiamata da entiaVocab.js: se il vocabolario italiano cresce e qui no, il
// build lo dice invece di emettere una lingua a meta'.
function manca(chiaviStrati, slugFunzioni, chiaviTemi) {
  const buchi = [];
  chiaviStrati.forEach(k => { if (!strati[k]) buchi.push(`strato "${k}"`); });
  slugFunzioni.forEach(k => { if (!funzioni[k]) buchi.push(`funzione "${k}"`); });
  chiaviTemi.forEach(k => { if (!temi[k]) buchi.push(`tema "${k}"`); });
  if (buchi.length) {
    throw new Error(
      "[entia] etichetta inglese mancante in src/_data/entiaEn.js: " + buchi.join(", ") +
      "\n         ENTIA 1.1 dichiara due lingue: un'etichetta assente le fa diventare una e mezza."
    );
  }
}

module.exports = { strati, funzioni, temi, scheme, manca };
