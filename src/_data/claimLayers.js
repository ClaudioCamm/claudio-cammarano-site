/**
 * I cinque strati ENTIA applicati alla meta' di ricerca, in inglese.
 *
 * Nessuno strato nuovo: sono gli stessi di /entia/, con le stesse regole su
 * cosa ciascuno lega, cosa afferma e cosa non puo' fare. Quello che cambia e'
 * il vocabolario, perche' cambia il corpus.
 *
 *   Free tag   semantica spontanea, non ancora usata qui: la valvola resta
 *              aperta ma vuota finche' non serve.
 *   Topic      raggruppa, non afferma. Una lessia sta in un Topic solo.
 *   Theme      connota. Si deriva dai Topic e non si assegna a una lessia:
 *              se lo assegnassi a mano sarebbe un Topic con le pretese.
 *   Concept    afferma una proposizione sul mondo. Non esiste senza una nota
 *              e senza legami: e' lo strato dove le idee si collegano, ed e'
 *              il motivo per cui questo file esiste.
 *   Geometry   il tasso di cambio. Non si sceglie: e' la formula del peso,
 *              gia' in claims.js (1 / 0,75 / 0,5; +0,25 per uso; x1,5 se
 *              contestata).
 */

const lessie = require("./claims.js");

const TOPICS = [
  { key: "claim-types",  en: "Claim types",  claims: ["ontology-precedes-epistemology", "truth-conditions-do-not-transfer", "d1-is-load-bearing", "convergence-is-not-a-link", "arguments-answer-to-arguments"] },
  { key: "introspection", en: "Introspection", claims: ["no-metacognition-was-the-wrong-name", "models-lack-epistemic-self-classification", "introspection-is-a-narrow-channel"] },
  { key: "meaning",      en: "Meaning",      claims: ["form-alone-cannot-yield-meaning", "correlation-versus-mechanism", "lms-infer-agent-mental-states"] },
  { key: "annotation",   en: "Annotation",   claims: ["more-annotators-beats-bias-correction", "mode-a-needs-a-blind-recode", "surface-variance-masks-convergence", "reproducibility-is-documentation"] },
  { key: "evaluation",   en: "Evaluation",   claims: ["explicit-about-what-is-not-evaluated", "breakthroughs-are-metric-artefacts", "llm-judges-match-human-agreement"] },
  { key: "truthfulness", en: "Truthfulness", claims: ["inverse-scaling-of-truthfulness", "hallucination-the-standard-definition"] },
  { key: "architecture", en: "Architecture", claims: ["transformer-dispenses-with-recurrence", "plural-paths-one-answer", "cai-partially-replaces-human-feedback"] }
];

// Il Tema afferma una posizione. Si deriva dai Topic, mai assegnato a mano.
const THEMES = [
  { key: "not-said-to-do", en: "What a machine cannot be said to do",
    position: "The limit is argued from how these systems are trained, not from what they fail at today.",
    topics: ["meaning", "claim-types", "introspection"] },
  { key: "how-a-verdict",  en: "How a verdict is made",
    position: "A judgement counts only with the procedure that produced it attached.",
    topics: ["annotation", "evaluation"] },
  { key: "scale-buys",     en: "What scale does not buy",
    position: "Size improves many things monotonically and some things not at all.",
    topics: ["truthfulness", "architecture"] }
];

// Il Concetto: una proposizione sul mondo, una nota, dei legami. Il centro.
const CONCEPTS = [
  { key: "form-meaning-gap", en: "Form–meaning gap",
    note: "Training on form alone leaves meaning out of reach: what reads as understanding is a property of the text, not of the system.",
    links: ["agent-model", "imitative-falsehood", "sequence-without-recurrence"],
    claims: ["form-alone-cannot-yield-meaning", "correlation-versus-mechanism"] },
  { key: "agent-model", en: "Agent model",
    note: "A model can carry partial representations of the intentions behind the text it was trained on without being an agent itself.",
    links: ["form-meaning-gap"],
    claims: ["lms-infer-agent-mental-states", "correlation-versus-mechanism"] },
  { key: "epistemic-self-classification", en: "Epistemic self-classification",
    note: "A system can report on contents of its own processing and still not represent what kind of claim it is about to make: the typing has to come from outside.",
    links: ["agent-model", "claim-type"],
    claims: ["no-metacognition-was-the-wrong-name", "models-lack-epistemic-self-classification", "introspection-is-a-narrow-channel"] },
  { key: "claim-type", en: "Claim type",
    note: "What kind of claim something is decides how it can be checked at all: the ontology comes before the epistemology.",
    links: ["verdict", "measurement-artefact"],
    claims: ["ontology-precedes-epistemology", "truth-conditions-do-not-transfer", "d1-is-load-bearing", "arguments-answer-to-arguments", "convergence-is-not-a-link"] },
  { key: "verdict", en: "Verdict",
    note: "A judgement on an output is worth no more than the procedure that produced it, and the procedure has to be inspectable.",
    links: ["coder-agreement", "machine-judge", "claim-type", "declared-incompleteness"],
    claims: ["mode-a-needs-a-blind-recode", "llm-judges-match-human-agreement", "reproducibility-is-documentation"] },
  { key: "coder-agreement", en: "Coder agreement",
    note: "Agreement between coders measures a procedure, not a truth, and it improves more by adding coders than by correcting for their bias.",
    links: ["verdict", "convergent-paths"],
    claims: ["more-annotators-beats-bias-correction", "mode-a-needs-a-blind-recode", "surface-variance-masks-convergence"] },
  { key: "machine-judge", en: "Machine judge",
    note: "A model can stand in for a human rater at a measurable rate of agreement; the rate is the claim, not the competence.",
    links: ["verdict", "inverse-scaling"],
    claims: ["llm-judges-match-human-agreement", "cai-partially-replaces-human-feedback"] },
  { key: "measurement-artefact", en: "Measurement artefact",
    note: "A discontinuity in a curve can belong to the metric rather than to the thing measured: a finer metric dissolves it.",
    links: ["declared-incompleteness", "claim-type", "convergent-paths"],
    claims: ["breakthroughs-are-metric-artefacts", "surface-variance-masks-convergence", "convergence-is-not-a-link"] },
  { key: "declared-incompleteness", en: "Declared incompleteness",
    note: "An evaluation is honest when it states the distance between what it aspires to measure and what it actually measures.",
    links: ["measurement-artefact", "verdict"],
    claims: ["explicit-about-what-is-not-evaluated", "reproducibility-is-documentation"] },
  { key: "inverse-scaling", en: "Inverse scaling",
    note: "More parameters do not buy more of everything: on some properties the larger model is the worse one.",
    links: ["imitative-falsehood", "measurement-artefact"],
    claims: ["inverse-scaling-of-truthfulness", "breakthroughs-are-metric-artefacts"] },
  { key: "imitative-falsehood", en: "Imitative falsehood",
    note: "A model can be wrong because it learned the training distribution well, not because it learned it badly.",
    links: ["inverse-scaling", "form-meaning-gap"],
    claims: ["inverse-scaling-of-truthfulness", "hallucination-the-standard-definition"] },
  { key: "convergent-paths", en: "Convergent paths",
    note: "Several different derivations arriving at the same answer is evidence about the answer, not noise to be averaged away.",
    links: ["coder-agreement", "measurement-artefact"],
    claims: ["plural-paths-one-answer", "surface-variance-masks-convergence"] },
  { key: "sequence-without-recurrence", en: "Sequence without recurrence",
    note: "Relations between positions in a sequence can be computed all at once instead of step by step, which is what made the scale possible.",
    links: ["form-meaning-gap"],
    claims: ["transformer-dispenses-with-recurrence"] }
];

// ---------------------------------------------------------------- indici
const perLessia = {};
lessie.forEach(l => { perLessia[l.id] = { topic: null, theme: null, concepts: [] }; });

const temaDiTopic = {};
THEMES.forEach(t => t.topics.forEach(k => { temaDiTopic[k] = t; }));

TOPICS.forEach(t => {
  t.w = 0; t.n = 0;
  t.theme = temaDiTopic[t.key] ? temaDiTopic[t.key].key : null;
  t.claims.forEach(id => {
    const v = perLessia[id];
    if (!v) throw new Error(`[claimLayers] Topic ${t.key}: lessia sconosciuta ${id}`);
    v.topic = t.key;
    v.topicEn = t.en;
    v.theme = t.theme;
    const l = lessie.find(x => x.id === id);
    t.w = Math.round((t.w + l.weight) * 100) / 100; t.n++;
  });
});

const orfane = Object.keys(perLessia).filter(id => !perLessia[id].topic);
if (orfane.length) throw new Error(`[claimLayers] lessie senza Topic: ${orfane.join(", ")}`);

const perChiaveC = {};
CONCEPTS.forEach(c => { perChiaveC[c.key] = c; });
CONCEPTS.forEach(c => {
  c.links.forEach(k => {
    if (!perChiaveC[k]) throw new Error(`[claimLayers] Concept ${c.key}: legame rotto verso ${k}`);
  });
  if (!c.note || !c.links.length) throw new Error(`[claimLayers] Concept ${c.key}: serve una nota e almeno un legame`);
  c.w = 0; c.n = 0; c.temi = {};
  c.claims.forEach(id => {
    const v = perLessia[id];
    if (!v) throw new Error(`[claimLayers] Concept ${c.key}: lessia sconosciuta ${id}`);
    v.concepts.push(c.key);
    const l = lessie.find(x => x.id === id);
    c.w = Math.round((c.w + l.weight) * 100) / 100; c.n++;
    c.temi[v.theme] = (c.temi[v.theme] || 0) + l.weight;
  });
  // Il Tema del Concetto si deriva, non si assegna: vince il tema che pesa di
  // piu' fra le lessie del concetto. A parita' decide l'ordine dichiarato in
  // THEMES, come la precedenza che ENTIA usa per le funzioni: una regola
  // pubblicata, non la prima chiave che capita.
  const ord = THEMES.map(t => t.key);
  c.theme = Object.entries(c.temi)
    .sort((a, b) => (b[1] - a[1]) || (ord.indexOf(a[0]) - ord.indexOf(b[0])))[0][0];
  c.temaConteso = Object.keys(c.temi).length > 1;
});

// ------------------------------------------------------- il diagramma ad archi
// Layout deterministico, calcolato qui: la pagina non fa matematica e non
// carica librerie. Concetti in colonna, ordinati per tema e poi per peso;
// i legami sono archi che si gonfiano a sinistra.
const NX = 58, RIGA = 40, TOP = 26, W = 420;
const ordineTema = THEMES.map(t => t.key);
const righe = CONCEPTS.slice().sort((a, b) =>
  (ordineTema.indexOf(a.theme) - ordineTema.indexOf(b.theme)) || (b.w - a.w));

// Le fasce dei Temi: lo strato intermedio deve vedersi nello strumento,
// altrimenti la mappa mostra dodici concetti e nessuna posizione.
const BANDA = 30;
const bands = [];
let scorso = null, offset = 0;
const yDi = righe.map((c, i) => {
  if (c.theme !== scorso) {
    if (scorso !== null) offset += BANDA;
    const t = THEMES.find(x => x.key === c.theme);
    bands.push({ theme: c.theme, en: t.en, position: t.position, y: TOP + i * RIGA + offset - 19 });
    scorso = c.theme;
  }
  return TOP + i * RIGA + offset;
});

const nodes = righe.map((c, i) => ({
  key: c.key, en: c.en, note: c.note, theme: c.theme, w: c.w, n: c.n,
  claims: c.claims, links: c.links,
  y: yDi[i],
  r: Math.round((3.2 + 2.1 * Math.sqrt(c.w)) * 10) / 10,
  // larghezza della barra del peso, proporzionale al peso massimo
  bar: 0
}));
const wMax = Math.max.apply(null, nodes.map(n => n.w));
nodes.forEach(n => { n.bar = Math.round((n.w / wMax) * 150); });

// I concetti di ogni tema, per l'elenco testuale accanto alla mappa.
THEMES.forEach(t => {
  t.concepts = righe.filter(c => c.theme === t.key).map(c => ({ key: c.key, en: c.en, n: c.n }));
});

const posizione = {};
nodes.forEach((n, i) => { posizione[n.key] = i; });

const visti = {};
const arcs = [];
CONCEPTS.forEach(c => c.links.forEach(k => {
  const a = posizione[c.key], b = posizione[k];
  const chiave = Math.min(a, b) + "-" + Math.max(a, b);
  if (visti[chiave]) return;
  visti[chiave] = 1;
  const ya = nodes[a].y, yb = nodes[b].y;
  const salto = Math.abs(a - b);
  const gonfia = Math.min(10 + salto * 7, 46);
  arcs.push({
    d: `M ${NX},${ya} Q ${NX - gonfia},${(ya + yb) / 2} ${NX},${yb}`,
    from: nodes[Math.min(a, b)].key, to: nodes[Math.max(a, b)].key
  });
}));

module.exports = {
  TOPICS, THEMES, CONCEPTS,
  byClaim: perLessia,
  conceptByKey: perChiaveC,
  graph: { nodes, arcs, bands, NX, W, height: TOP + righe.length * RIGA + offset + 14 }
};
