// Il quinto strato, reso: un record per claim con il peso scomposto nei suoi
// tre fattori (fonte, uso, dissenso). Lo legge la tavola II della home
// inglese; i numeri sono quelli permanenti del Claims Ledger.
const claims = require("./claims.js");
const { byClaim, conceptByKey, TOPICS, THEMES, CONCEPTS, NAMES } = require("./claimLayers.js");
const numeri = require("../../scripts/ebooks/ledger-numbers.json");

const BASE = { article: 1, incollection: 1, book: 1, inproceedings: 0.75, misc: 0.5 };
const TIER = { 1: "peer-reviewed", 0.75: "proceedings or preprint", 0.5: "grey literature" };

const punti = claims.map(c => {
  const base = c.fonte ? (BASE[c.fonte.type] || 0.5) : 0.5;
  const k = (byClaim[c.id] || {}).concepts || [];
  const con = conceptByKey[k[0]];
  return {
    n: numeri[c.id] ? "C" + String(numeri[c.id]).padStart(3, "0") : c.id,
    w: c.weight, base, tier: TIER[base], u: (c.usedIn || []).length,
    m: c.stance === "contested" ? 1.5 : 1, shape: c.shape, voice: c.voice,
    ct: c.stance === "contested",
    concept: con ? (con.en || con.label || con.name || k[0]) : "",
    gist: c.gist.split(/(?<=[.])\s/)[0],
    src: c.voice === "log" ? "Lab note" : c.cite,
    href: "/en/claims/#" + c.id
  };
});

module.exports = {
  punti,
  strati: { names: NAMES.length, topics: TOPICS.length, themes: THEMES.length, concepts: CONCEPTS.length, factors: 3 },
  claims: claims.length,
  papers: new Set(claims.filter(c => c.fonte).map(c => c.fonte.key)).size,
  notes: new Set(claims.filter(c => !c.fonte).map(c => c.src)).size
};
