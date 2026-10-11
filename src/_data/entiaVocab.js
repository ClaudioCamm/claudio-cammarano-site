/**
 * Il vocabolario ENTIA in forma leggibile da una macchina: SKOS per i quattro
 * strati nominali, piu' la specifica (strati, funzioni, regole, conformita',
 * portata, rilievi) e le misure sul corpus.
 *
 * Sorgente unica: entia.js. Da qui escono sia /entia.json sul sito sia il file
 * omonimo nel pacchetto depositato, cosi' la versione pubblica e quella
 * depositata non possono divergere.
 */
const entia = require("./entia.js");
const clusters = require("./clusters.js");
const conceptsIndex = require("./conceptsIndex.js");

const SITO = "https://claudiocammarano.com";
const NS = SITO + "/entia/ns#";
const ORCID = "https://orcid.org/0009-0006-3690-7466";

const indice = typeof conceptsIndex === "function" ? conceptsIndex() : conceptsIndex;
const nomeDi = c => typeof c === "string"
  ? c
  : String(c.nome || c.label || c.titolo || c.concept || c.name || c.slug || "");

const slugifica = s => String(s).toLowerCase().normalize("NFD")
  .replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const temaDi = {};
Object.entries(clusters).forEach(([t, as]) => as.forEach(a => { temaDi[a] = t; }));

const concetti = [...new Set(indice.map(nomeDi).filter(Boolean))].sort((a, b) => a.localeCompare(b, "it"));

module.exports = {
  "@context": {
    skos: "http://www.w3.org/2004/02/skos/core#",
    dct: "http://purl.org/dc/terms/",
    "@vocab": NS
  },
  "@id": SITO + "/entia/",
  "@type": "skos:ConceptScheme",
  "dct:title": "ENTIA — " + entia.sciolto,
  "dct:description": "Notazione editoriale a cinque strati per archivi curati: che cosa un pezzo è per chi lo tiene, dichiarato pezzo per pezzo.",
  "dct:creator": { "@id": ORCID, name: "Claudio Cammarano" },
  "dct:license": entia.licenza.url,
  "dct:identifier": "https://doi.org/" + entia.deposito.doi,
  "dct:isVersionOf": "https://doi.org/" + entia.deposito.versionDoi,
  "dct:hasVersion": entia.spec,
  "dct:modified": entia.rilievi.data,
  "dct:language": "it",

  strati: entia.strati.map((s, i) => ({
    "@id": NS + "strato/" + slugifica(s.nome),
    ordine: i + 1,
    nome: s.nome,
    cardinalita: s.quanti,
    lega: s.lega,
    afferma: s.afferma,
    nonPuo: s.nonPuo,
    nota: s.nota
  })),

  funzioni: entia.funzioni.map(f => ({
    "@id": NS + "funzione/" + f.slug,
    "@type": "skos:Concept",
    "skos:inScheme": { "@id": NS + "scheme/funzioni" },
    "skos:prefLabel": f.label,
    "skos:definition": f.descrizione,
    estesa: f.estesa,
    prova: f.prova,
    precedenza: f.precedenza,
    schede: f.schede
  })),

  temi: Object.keys(clusters).map(t => ({
    "@id": NS + "tema/" + slugifica(t),
    "@type": "skos:Concept",
    "skos:inScheme": { "@id": NS + "scheme/temi" },
    "skos:prefLabel": t,
    "skos:narrower": (clusters[t] || []).map(a => ({ "@id": NS + "argomento/" + slugifica(a) }))
  })),

  argomenti: Object.entries(clusters).flatMap(([t, as]) => as.map(a => ({
    "@id": NS + "argomento/" + slugifica(a),
    "@type": "skos:Concept",
    "skos:inScheme": { "@id": NS + "scheme/argomenti" },
    "skos:prefLabel": a,
    "skos:broader": { "@id": NS + "tema/" + slugifica(t) }
  }))),

  concetti: concetti.map(n => ({
    "@id": NS + "concetto/" + slugifica(n),
    "@type": "skos:Concept",
    "skos:inScheme": { "@id": NS + "scheme/concetti" },
    "skos:prefLabel": n
  })),

  regole: entia.regole.map(r => ({ nome: r.nome, testo: r.testo })),
  conformita: entia.conformita,
  portata: entia.limiti,
  rilievi: entia.rilievi,
  corpus: entia.corpus
};
