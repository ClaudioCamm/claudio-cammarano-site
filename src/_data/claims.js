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
  "D1.3": "logical-formal",
  "D1.4": "mathematical-analytic",
  "D1.5": "phenomenological-subjective",
  "D1.6": "interpretive-hermeneutic",
  "D1.7": "aesthetic-evaluative",
  "D1.8": "ethical-normative",
  "D1.9": "procedural-instructional",
  "D1.10": "prescriptive-policy",
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
      { to: "truth-conditions-do-not-transfer", how: "refines", why: "The second says which error the first prevents, and says it with a case." }
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
      { to: "ontology-precedes-epistemology", how: "extends", why: "It turns the principle into one load-bearing axis and six modifiers." }
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
      { to: "mode-a-needs-a-blind-recode", how: "uses-method-in", why: "The figure holds only if the verdict extraction passed the blind check." }
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
  },

  // --------------------------------------------- dalla letteratura (13/10)
  // regola: mai dall'abstract. Solo testo corrente.
  {
    id: "form-alone-cannot-yield-meaning",
    src: "bender2020climbing",
    locus: "\u00a71 Introduction",
    before: "From our perspective, these are overclaims caused by a misunderstanding of the relationship between linguistic form and meaning.",
    claim: "We argue that the language modeling task, because it only uses form as training data, cannot in principle lead to learning of meaning.",
    cuts: [],
    after: "We take the term language model to refer to any system trained only on the task of string prediction, whether it operates over characters, words or sentences, and sequentially or not.",
    fn: "riferimento-tecnico",
    d1: "D1.14",
    d1Status: "proposed",
    stance: "assumed",
    relates: [],
    usedIn: ["/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/"]
  },
  {
    id: "correlation-versus-mechanism",
    src: "mitchell2023debate",
    locus: "p. 1",
    before: "This debate is not just academic; the extent and manner in which machines understand our world has real stakes for how much we can trust them to drive cars, diagnose diseases, care for the elderly, educate children, and more generally act robustly and transparently in tasks that impact humans.",
    claim: "Moreover, the current debate suggests a fascinating divergence in how to think about understanding in intelligent systems, in particular the contrast between mental models that rely on statistical correlations and those that rely on causal mechanisms.",
    cuts: [],
    after: "Until quite recently there was general agreement in the AI research community about machine understanding: while AI systems exhibit seemingly intelligent behavior in many specific tasks, they do not understand the data they process in the way humans do.",
    fn: "strumento-concettuale",
    d1: "D1.6",
    d1Status: "proposed",
    stance: "used",
    relates: [
      { to: "form-alone-cannot-yield-meaning", how: "presupposes", why: "The debate it describes has Bender and Koller's thesis as one of its poles." }
    ],
    usedIn: ["/lab/2026-07-21-what-counts-as-a-verdict/"]
  },
  {
    id: "more-annotators-beats-bias-correction",
    src: "artstein2008",
    locus: "\u00a75.2 Choosing a Coefficient",
    before: "Regarding the question of annotator bias, there is an overwhelming consensus in CL practice: K and \u03b1 are used in the vast majority of the studies we reported.",
    claim: "We agree with the view that K and \u03b1 are more appropriate, as they abstract away from the bias of specific coders. But we also believe that ultimately this issue of annotator bias is of little consequence because the differences get smaller and smaller as the number of annotators grows [\u2026].",
    cuts: ["(Artstein and Poesio 2005)"],
    after: "We believe that increasing the number of annotators is the best strategy, because it reduces the chances of accidental personal biases.",
    fn: "metodo-di-lavoro",
    d1: "D1.10",
    d1Status: "proposed",
    stance: "used",
    relates: [
      { to: "mode-a-needs-a-blind-recode", how: "refines", why: "It moves the problem: not which correction for coder bias, but how many coders." }
    ],
    usedIn: ["/lab/2026-02-20-coding-manual-v2-the-annotation-protocol/"]
  },
  {
    id: "inverse-scaling-of-truthfulness",
    src: "lin2022",
    locus: "\u00a71 Introduction",
    before: "",
    claim: "Across different model families, the largest models were generally less truthful (Fig. 2). This \u201cinverse scaling\u201d trend contrasts with most tasks in NLP, where performance improves with model size [\u2026].",
    cuts: ["(Brown et al., 2020; Kaplan et al., 2020)"],
    after: "One explanation of this result is that larger models produce more imitative falsehoods because they are better at learning the training distribution. Another explanation is that our questions adversarially exploit weaknesses in larger models not arising from imitation of the training distribution.",
    fn: "dato-che-corregge",
    d1: "D1.2",
    d1Status: "confirmed",
    stance: "assumed",
    relates: [],
    usedIn: ["/lab/2026-02-25-horizontal-validation-31-claims/"]
  },
  {
    id: "lms-infer-agent-mental-states",
    src: "andreas2022language",
    locus: "\u00a71 Introduction, (C1)",
    before: "In particular, I claim:",
    claim: "In the course of performing next-word prediction in context, current LMs sometimes infer approximate, partial representations of the beliefs, desires and intentions possessed by the agent that produced the context, and other agents mentioned within it.",
    cuts: [],
    after: "(C2) Once these representations are inferred, they are causally linked to LM prediction, and thus bear the same relation to generated text that an intentional agent\u2019s state bears to its communciative actions.",
    fn: "strumento-concettuale",
    d1: "D1.14",
    d1Status: "proposed",
    stance: "contested",
    relates: [
      { to: "form-alone-cannot-yield-meaning", how: "contests", why: "If the model infers representations of intentions, form alone does not stay mute, as Bender and Koller claim it must." }
    ],
    usedIn: ["/lab/2026-07-21-what-counts-as-a-verdict/"]
  },
  {
    id: "cai-partially-replaces-human-feedback",
    src: "bai2022constitutional",
    locus: "\u00a71 Introduction",
    before: "We also aim to develop methods that encode desirable AI behavior in a simple and transparent form, and that make it easier to understand and evaluate AI decision making.",
    claim: "In this paper we develop a method we refer to as Constitutional AI (CAI), depicted in Figure 1, and use it to train a non-evasive and relatively harmless AI assistant, without any human feedback labels for harms. The method therefore improves upon, and partially replaces reinforcement learning from human feedback [\u2026].",
    cuts: ["[Christiano et al., 2017]"],
    after: "The new assistant \u2018RL-CAI\u2019 is preferred by crowdworkers over those trained with previously collected [Bai et al., 2022, Ganguli et al., 2022] human feedback labels for harmfulness.",
    fn: "metodo-di-lavoro",
    d1: "D1.9",
    d1Status: "proposed",
    stance: "used",
    relates: [],
    usedIn: ["/lab/2026-07-21-what-counts-as-a-verdict/"]
  },
  {
    id: "hallucination-the-standard-definition",
    src: "ji2022",
    locus: "\u00a72",
    before: "Similar to psychological hallucination, which is hard to tell apart from other \u201creal\u201d perceptions, hallucinated text is also hard to capture at first glance.",
    claim: "Within the context of NLP, the above definition of hallucination, the generated content that is nonsensical or unfaithful to the provided source content [\u2026], is the most inclusive and standard.",
    cuts: ["[72, 177, 198, 325]"],
    after: "However, there do exist variations in definition across NLG tasks, which will be further described in the later task-specific sections.",
    fn: "strumento-concettuale",
    d1: "D1.6",
    d1Status: "proposed",
    stance: "used",
    relates: [],
    usedIn: ["/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/"]
  },
  {
    id: "explicit-about-what-is-not-evaluated",
    src: "liang2022holistic",
    locus: "\u00a72, Recognition of incompleteness",
    before: "Different benchmarks make different decisions on what to prioritize, how to make these decisions, and to what extent these processes are made clear in presenting the benchmark.",
    claim: "Since our aim is holistic evaluation, we believe it is necessary to be explicit on the relationship between what we aspire to evaluate and what we actually evaluate.",
    cuts: [],
    after: "The construction of HELM starts top-down with a taxonomy over scenarios and metrics (see Figure 2). The taxonomy not only facilitates the systematic selection of scenarios and metrics, but it also make explicit what is missing.",
    fn: "metodo-di-lavoro",
    d1: "D1.10",
    d1Status: "proposed",
    stance: "used",
    relates: [],
    usedIn: ["/lab/2026-02-20-coding-manual-v2-the-annotation-protocol/"]
  },
  {
    id: "breakthroughs-are-metric-artefacts",
    src: "srivastava2023beyond",
    locus: "\u00a73.4.2",
    before: "",
    claim: "Breakthrough behavior is consistent with the model suddenly gaining new skills in an abrupt way. Careful analysis of task behavior, however, suggests that the underlying change in model capabilities is generally more smooth.",
    cuts: [],
    after: "These smooth improvements can be exposed by decomposing tasks in ways that better capture partial progress. We describe some of those ways in the remainder of this section.",
    fn: "dato-che-corregge",
    d1: "D1.2",
    d1Status: "confirmed",
    stance: "assumed",
    relates: [],
    usedIn: ["/lab/2026-02-25-horizontal-validation-31-claims/"]
  },
  {
    id: "transformer-dispenses-with-recurrence",
    src: "vaswani2017attention",
    locus: "\u00a72 Background",
    before: "End-to-end memory networks are based on a recurrent attention mechanism instead of sequence-aligned recurrence and have been shown to perform well on simple-language question answering and language modeling tasks [34].",
    claim: "To the best of our knowledge, however, the Transformer is the first transduction model relying entirely on self-attention to compute representations of its input and output without using sequence-aligned RNNs or convolution.",
    cuts: [],
    after: "In the following sections, we will describe the Transformer, motivate self-attention and discuss its advantages over models such as [17, 18] and [9].",
    fn: "riferimento-tecnico",
    d1: "D1.1",
    d1Status: "confirmed",
    stance: "assumed",
    relates: [],
    usedIn: ["/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/"]
  },
  {
    id: "plural-paths-one-answer",
    src: "wang2022",
    locus: "\u00a71 Introduction",
    before: "It has been observed that chain-of-thought prompting significantly improves model performance across a variety of multi-step reasoning tasks (Wei et al., 2022).",
    claim: "Self-consistency leverages the intuition that complex reasoning tasks typically admit multiple reasoning paths that reach a correct answer [\u2026].",
    cuts: ["(Stanovich & West, 2000)"],
    after: "The more that deliberate thinking and analysis is required for a problem (Evans, 2010), the greater the diversity of reasoning paths that can recover the answer.",
    fn: "strumento-concettuale",
    d1: "D1.3",
    d1Status: "proposed",
    stance: "used",
    relates: [],
    usedIn: ["/lab/2026-02-25-horizontal-validation-31-claims/"]
  },
  {
    id: "llm-judges-match-human-agreement",
    src: "zheng2023",
    locus: "\u00a71 Introduction",
    before: "We show that some of the biases are minor or can be mitigated.",
    claim: "Once addressed, our results from 3K controlled expert votes and 3K crowdsourced human votes in the wild verify that GPT-4 judge match human evaluations at an agreement rate exceeding 80%, achieving the same level of human-human agreement (4.2, Table 4).",
    cuts: [],
    after: "Consequently, this suggests LLM-as-a-judge is a scalable method to swiftly evaluate human preference, serving as a promising alternative to traditional human evaluations.",
    fn: "dato-che-corregge",
    d1: "D1.2",
    d1Status: "confirmed",
    stance: "contested",
    relates: [
      { to: "mode-a-needs-a-blind-recode", how: "contests", why: "If an automatic judge reaches human-human agreement, blind human recoding is no longer the only standard." }
    ],
    usedIn: ["/lab/2026-07-21-what-counts-as-a-verdict/"]
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

// Citazione breve: cognomi + anno. Serve alla pagina, non al dato.
function breve(fonte) {
  if (!fonte) return "Programme note";
  const tutti = String(fonte.author || fonte.editor || "")
    .split(" and ")
    .map(a => a.split(",")[0].trim())
    .filter(Boolean);
  // BibTeX scrive "and others" per l'elenco troncato: diventa et al.
  const troncato = tutti.some(a => /^others$/i.test(a));
  const cognomi = tutti.filter(a => !/^others$/i.test(a));
  const anno = fonte.year ? ` ${fonte.year}` : "";
  if (troncato && cognomi.length) return `${cognomi[0]} et al.` + anno;
  if (!cognomi.length) return (fonte.title || "").slice(0, 40) + anno;
  if (cognomi.length === 1) return cognomi[0] + anno;
  if (cognomi.length === 2) return `${cognomi[0]} & ${cognomi[1]}` + anno;
  return `${cognomi[0]} et al.` + anno;
}

module.exports = lessie.map(l => {
  const fonte = perChiave[l.src] || null;
  return {
    ...l,
    weight: peso(l),
    fonte,
    cite: breve(fonte),
    // Il claim spezzato sui tagli: parts[i] e cuts[i] si alternano, cosi'
    // la pagina rimette le parole al loro posto senza manipolare stringhe.
    parts: String(l.claim).split("[\u2026]"),
    d1Label: D1[l.d1] || ""
  };
});

// Aggregati per la pagina: non si ricontano a mano in un template.
const _fn = {}, _d1 = {};
module.exports.forEach(l => {
  const f = _fn[l.fn] || (_fn[l.fn] = { key: l.fn, n: 0, w: 0 });
  f.n++; f.w = Math.round((f.w + l.weight) * 100) / 100;
  const d = _d1[l.d1] || (_d1[l.d1] = { key: l.d1, label: l.d1Label, n: 0, w: 0 });
  d.n++; d.w = Math.round((d.w + l.weight) * 100) / 100;
});
module.exports.PESO = Math.round(module.exports.reduce((a, l) => a + l.weight, 0) * 100) / 100;
module.exports.FONTI = new Set(module.exports.map(l => l.src)).size;
module.exports.FN = Object.values(_fn).sort((a, b) => b.w - a.w);
module.exports.D1N = Object.values(_d1).sort((a, b) => b.w - a.w);

module.exports.D1 = D1;
module.exports.RELAZIONI = RELAZIONI;
module.exports.STANCE = STANCE;
