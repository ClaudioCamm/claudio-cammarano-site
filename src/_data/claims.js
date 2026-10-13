/**
 * Le lessie: le affermazioni che il programma di ricerca cita, tipizzate.
 *
 * Una lessia e' un ritaglio VERBATIM. Tre campi tengono il testo originale e
 * non si parafrasano mai: `before`, `claim`, `after`. Dove il ritaglio salta
 * delle parole, nel claim compare […] e le parole saltate stanno in `cuts`,
 * nell'ordine: la pagina le rimette al loro posto quando il lettore chiede di
 * vedere i tagli. E' la regola ENTIA dell'esporre il residuo applicata alla
 * citazione.
 *
 * Due etichette per ogni lessia, e sono di natura diversa:
 *   - `fn`  = la funzione ENTIA, cioe' che cosa quel testo e' PER QUESTO
 *             archivio. Le sei sono quelle di criteri.json, le stesse della
 *             meta' editoriale: il protocollo non si duplica.
 *   - `d1`  = il tipo di affermazione IN SE', dalla tassonomia D1. Undici
 *             codici attivi. `d1Status: "proposed"` finche' non e' confermato
 *             a mano: una proposta non si traveste da assegnazione.
 *
 * Il peso segue la forma della meta' editoriale con coefficienti locali
 * (vedi `peso` in fondo): fonte peer-reviewed 1, preprint o atti 0,75, fonte
 * grigia 0,5; piu' 0,25 per ogni nota che la cita; x1,5 se e' una controtesi
 * assunta, perche' pesare di piu' cio' che ti contraddice e' una scelta
 * epistemica dichiarata.
 *
 * `src` e' una chiave di src/_data/biblio.js oppure un percorso del sito, per
 * le affermazioni del programma stesso. Le cinque qui sotto sono di questo
 * secondo tipo: sono il banco di prova dello schema, non ancora la
 * letteratura. Le lessie dai paper entrano quando i DOI sono a posto.
 */
const biblio = require("./biblio.js");

const RELAZIONI = {
  refines: "cito:qualifies",
  contests: "cito:disagreesWith",
  presupposes: "cito:obtainsBackgroundFrom",
  extends: "cito:extends",
  "uses-method-in": "cito:usesMethodIn",
  confirms: "cito:confirms"
};

// Gli undici codici attivi di D1. I nomi che mancano sono quelli che il
// coding manual non ha ancora esposto in chiaro sul sito: il codice vale,
// l'etichetta si riempie dopo.
const D1 = {
  "D1.1": "historical-factual",
  "D1.2": "empirical-quantitative",
  "D1.3": "",
  "D1.4": "",
  "D1.5": "",
  "D1.6": "",
  "D1.7": "",
  "D1.8": "ethical-normative",
  "D1.9": "",
  "D1.10": "",
  "D1.14": "metaphysical-ontological"
};

const STANCE = ["assumed", "used", "contested", "superseded"];

const lessie = [
  {
    id: "ontology-precedes-epistemology",
    src: "/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/",
    locus: "§ The governing principle",
    before: "The governing principle, which became the paper's title, is this: ontology precedes epistemology.",
    claim: "You cannot determine whether a claim is true without first establishing what type of claim you are dealing with.",
    cuts: [],
    after: "A statistical claim and a normative claim share nothing in their truth conditions — treating them as interchangeable is the error the framework is designed to prevent.",
    fn: "strumento-concettuale",
    d1: "D1.14",
    d1Status: "proposed",
    stance: "assumed",
    relates: [
      { to: "truth-conditions-do-not-transfer", how: "refines", why: "La seconda dice quale errore la prima previene, e lo dice con un caso." }
    ],
    usedIn: ["/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/", "/lab/2026-07-21-what-counts-as-a-verdict/"]
  },
  {
    id: "truth-conditions-do-not-transfer",
    src: "/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/",
    locus: "§ The governing principle",
    before: "You cannot determine whether a claim is true without first establishing what type of claim you are dealing with.",
    claim: "A statistical claim and a normative claim share nothing in their truth conditions — treating them as interchangeable is the error the framework is designed to prevent.",
    cuts: [],
    after: "",
    fn: "strumento-concettuale",
    d1: "D1.14",
    d1Status: "proposed",
    stance: "assumed",
    relates: [],
    usedIn: ["/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/"]
  },
  {
    id: "d1-is-load-bearing",
    src: "/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/",
    locus: "§ Dimension D1",
    before: "Dimension D1 — Content Type is the load-bearing axis. It currently includes eleven active categories (D1.1 through D1.10, plus D1.14), covering the full range from historical-factual and empirical-quantitative claims to ethical-normative and metaphysical-ontological ones.",
    claim: "The remaining dimensions […] operate as modifiers that describe how a given claim type behaves epistemically.",
    cuts: ["— D2 (temporality), D3 (epistemic certainty), D4 (causal structure), D5 (framework-dependency), D6 (verifiability mode), D7 (falsifiability) —"],
    after: "",
    fn: "metodo-di-lavoro",
    d1: "D1.10",
    d1Status: "proposed",
    stance: "assumed",
    relates: [
      { to: "ontology-precedes-epistemology", how: "extends", why: "Traduce il principio in un asse portante e sei modificatori." }
    ],
    usedIn: ["/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/"]
  },
  {
    id: "surface-variance-masks-convergence",
    src: "/lab/2026-02-28-vertical-validation-180-api-runs/",
    locus: "§ The gap",
    before: "The gap is the finding.",
    claim: "Surface-level variance […] masks high semantic convergence.",
    cuts: ["— which looks like inconsistency —"],
    after: "An LLM that produces thirty different textual responses to the same prompt is not thirty times unreliable; it may be converging on the same epistemic conclusion through thirty different linguistic paths. Distinguishing these two phenomena requires a framework. That is what this project provides.",
    fn: "dato-che-corregge",
    d1: "D1.2",
    d1Status: "confirmed",
    stance: "assumed",
    relates: [
      { to: "mode-a-needs-a-blind-recode", how: "uses-method-in", why: "Il numero regge solo se l'estrazione dei verdetti ha superato il controllo cieco." }
    ],
    usedIn: ["/lab/2026-02-28-vertical-validation-180-api-runs/", "/lab/2026-07-21-what-counts-as-a-verdict/"]
  },
  {
    id: "mode-a-needs-a-blind-recode",
    src: "/lab/2026-07-21-what-counts-as-a-verdict/",
    locus: "§ Start with the trigger",
    before: "This is Mode A of Coding Manual v2.1, and Mode A carries a mandatory check.",
    claim: "A human recodes a sample by hand, blind to the machine, and the two must agree above 90%.",
    cuts: [],
    after: "",
    fn: "metodo-di-lavoro",
    d1: "D1.10",
    d1Status: "proposed",
    stance: "used",
    relates: [],
    usedIn: ["/lab/2026-07-21-what-counts-as-a-verdict/", "/lab/2026-07-10-coding-manual-v2-1-retrospective-qc/"]
  }
];

// ------------------------------------------------------------------ il peso
const perChiave = {};
biblio.forEach(v => {
  perChiave[v.key] = v;
  (v.altKeys || []).forEach(k => { perChiave[k] = v; });
});

const BASE = { article: 1, incollection: 1, book: 1, inproceedings: 0.75, misc: 0.5 };

function peso(l) {
  const fonte = perChiave[l.src];
  let p = fonte ? (BASE[fonte.type] || 0.5) : 0.5; // percorso del sito = fonte grigia
  p += 0.25 * (l.usedIn || []).length;
  if (l.stance === "contested") p *= 1.5;
  return Math.round(p * 100) / 100;
}

module.exports = lessie.map(l => ({
  ...l,
  weight: peso(l),
  fonte: perChiave[l.src] || null,
  d1Label: D1[l.d1] || ""
}));

module.exports.D1 = D1;
module.exports.RELAZIONI = RELAZIONI;
module.exports.STANCE = STANCE;
