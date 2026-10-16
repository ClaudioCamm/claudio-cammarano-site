/**
 * I claim: le affermazioni che il programma di ricerca cita, tipizzate.
 *
 * Nome deciso il 16/10: non sono "lessie". Quelle di Barthes ricoprono il
 * testo in sequenza e non sono necessariamente asserzioni; queste lo
 * campionano e sono definite dall'esserlo. Con le lessie di Landow (il nodo
 * indirizzabile di un ipertesto) c'e' invece parentela, ma fra i due usi del
 * termine corre un'omonimia, non una sinonimia.
 *
 * Un claim e' un ritaglio VERBATIM. Tre campi tengono il testo originale e
 * non si parafrasano mai: `before`, `claim`, `after`. Dove il ritaglio salta
 * delle parole, nel claim compare […] e le parole saltate stanno in `cuts`,
 * nell'ordine: la pagina le rimette al loro posto quando il lettore chiede di
 * vedere i tagli. E' la regola ENTIA dell'esporre il residuo applicata alla
 * citazione.
 *
 * Due etichette per ogni claim, e sono di natura diversa:
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
 * letteratura. Le claims dai paper entrano quando i DOI sono a posto.
 */
const fs = require("fs");
const path = require("path");
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

const claims = [
  {
    id: "ontology-precedes-epistemology",
    gist: "Before asking whether a statement is true, you have to settle what kind of statement it is: the test that fits a measurement does not fit a value judgement. The whole framework rests on taking that step first, and in the open.",
    src: "/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/",
    locus: "\u00b64",
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
    gist: "Two claims of different kinds share no standard of truth, so a procedure that works on one returns a meaningless verdict on the other. The failure is not getting the answer wrong; it is applying the wrong test and not noticing.",
    src: "/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/",
    locus: "\u00b64",
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
    gist: "One dimension of the taxonomy decides what a claim is; the other six describe how it behaves once that is settled. Keeping a single axis load-bearing is what stops the scheme from flattening into a list of labels.",
    src: "/lab/2026-02-03-the-seven-dimensional-taxonomy-v2/",
    locus: "\u00b63",
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
    gist: "Thirty differently worded answers to the same prompt are not thirty disagreements: they can be one conclusion reached thirty ways. Measuring the wording instead of the conclusion makes a model look far less stable than it is.",
    src: "/lab/2026-02-28-vertical-validation-180-api-runs/",
    locus: "\u00b611",
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
    gist: "A machine-produced verdict counts here only after a person has recoded a sample by hand, without seeing what the machine decided, and the two agree above ninety per cent. The threshold is what turns an output into evidence.",
    src: "/lab/2026-07-21-what-counts-as-a-verdict/",
    locus: "\u00b62",
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
    gist: "A system trained only on the shape of language has nothing in its input that could tell it what the language is about. The argument is about what the training signal contains, not about how well the system performs today.",
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
    gist: "The dispute over machine understanding is not one question but two pictures of what understanding is: tracking statistical regularities, or holding a causal model of how things work. Naming the split explains why the two camps talk past each other.",
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
    gist: "When measuring whether two people label things the same way, correcting for each coder's personal bias matters less than how many coders there are. For a coding protocol, that moves the effort from the statistics to the recruitment.",
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
    gist: "On questions written to echo common misconceptions, the larger models answered falsely more often than the smaller ones, reversing the usual pattern. Scale is not a general-purpose fix, and on some properties it is the problem.",
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
    gist: "Predicting the next word can require the model to build a partial picture of what the writer believed and wanted. The claim is about representations inside the system, not about the system being someone.",
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
    gist: "Harmlessness was trained by having the model criticise and revise its own answers against a written list of principles, instead of having people label every harmful output. Human judgement moves out of the labels and into the rules.",
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
    gist: "Across the field, hallucination means generated content that is nonsensical or unfaithful to the source it was given: a definition about fidelity to the input, not about truth in the world. It is the broadest one in use and the one that travels best between tasks.",
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
    gist: "An evaluation should publish the distance between what it set out to measure and what it actually measured. Stating what was left out counts as part of the result, not as an apology for it.",
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
    gist: "Abilities that look as though they switch on all at once with scale often improve smoothly underneath: the jump belongs to an all-or-nothing metric. Change the metric and the cliff turns back into a slope.",
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
    gist: "The architecture behind current language models dropped step-by-step processing of a sequence in favour of computing every relation between positions at once. It is the engineering fact the rest of the debate stands on.",
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
    gist: "When several different chains of reasoning arrive at the same answer, that agreement is itself evidence for the answer. The method samples many derivations and keeps the one they converge on.",
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
    gist: "Asked to rank answers, a strong model agreed with human raters about as often as human raters agreed with each other, above eighty per cent. What was measured is a rate of agreement, which is not the same thing as competence to judge.",
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
  },

  // ------------------------------------- dal diario di ricerca (15/10)
  // I locus sono numeri di capoverso: le note non hanno titoletti, e un
  // locus che nomina una sezione inesistente non e' controllabile.
  {
    id: "no-metacognition-was-the-wrong-name",
    gist: "The programme used to assert flatly that the producing system performs no metacognition over its own outputs. A 2026 result on models reporting concepts implanted in their own activations withdrew that premise, and this is the withdrawal, kept in the archive rather than quietly edited out.",
    src: "/lab/2026-07-28-what-counts-as-introspection/",
    locus: "\u00b66",
    before: "",
    claim: "A model that reports a concept implanted in its own activations is doing something, and \u201cno metacognition\u201d is not an accurate name for it.",
    cuts: [],
    after: "So the flat version is gone. I am not interested in defending it.",
    fn: "dato-che-corregge",
    d1: "D1.14",
    d1Status: "proposed",
    stance: "assumed",
    relates: [],
    usedIn: []
  },
  {
    id: "models-lack-epistemic-self-classification",
    gist: "The premise the whole framework rests on, in its narrow form: a model may represent that a passage is in Spanish, or that it is being evaluated, without representing that the assertion it is about to make is causal rather than correlational. The typing of the claim is the one content the self-report does not carry.",
    src: "/lab/2026-07-28-what-counts-as-introspection/",
    locus: "\u00b68",
    before: "The reportable representations carry contents. They do not carry a typing of the assertion those contents are about to become.",
    claim: "So \u00a73.3 now reads: language models lack epistemic self-classification. It is a smaller claim, and it is better positioned than the one it replaces.",
    cuts: [],
    after: "The old premise was a claim about a capability, and capability claims are hostage to the next experiment. The new one is a claim about a representational content, which is what the framework was always about.",
    fn: "strumento-concettuale",
    d1: "D1.14",
    d1Status: "proposed",
    stance: "assumed",
    relates: [
      { to: "no-metacognition-was-the-wrong-name", how: "refines", why: "It is the narrower premise that replaced the flat one, and the only part of it the argument needs." },
      { to: "lms-infer-agent-mental-states", how: "refines", why: "A model may represent what the writer wanted without representing what kind of claim it is about to make." }
    ],
    usedIn: []
  },
  {
    id: "introspection-is-a-narrow-channel",
    gist: "What a model reports about its own workings is not a log of them. The reportable part of a representation carries a small share of its variance, and the same information can drive the task while bypassing that part entirely, which is why a protocol cannot ask the model to certify its own output.",
    src: "/lab/2026-07-28-what-counts-as-introspection/",
    locus: "\u00b610",
    before: "Alongside this, the reportable component of a concept\u2019s representation turns out to carry a median of six to seven per cent of that representation\u2019s variance, with the rest sitting outside it.",
    claim: "What a model can say about its own processing is a narrow and selective channel onto that processing, not a transcript of it.",
    cuts: [],
    after: "Lindsey\u2019s own numbers point the same way from a different angle: introspective detection succeeds on a minority of trials even in the strongest models he tested, and models asked to describe the mechanics behind their own calculations often describe them wrongly.",
    fn: "dato-che-corregge",
    d1: "D1.2",
    d1Status: "proposed",
    stance: "assumed",
    relates: [
      { to: "models-lack-epistemic-self-classification", how: "confirms", why: "A channel this narrow is not one a protocol can route the typing of a claim through." }
    ],
    usedIn: []
  },
  {
    id: "convergence-is-not-a-link",
    gist: "Two independent findings pointing the same way is not evidence that they are connected. The rule is applied here against the programme's own interest, on a convergence it would have been convenient to claim.",
    src: "/lab/2026-07-28-what-counts-as-introspection/",
    locus: "\u00b611",
    before: "It is a satisfying convergence and it is not a demonstration. I measured 180 outputs. They measured representations, in a different setting, for a different purpose.",
    claim: "A convergence between two lines of evidence is not the same as a link between them, and writing it up as though it were would be the category collapse this project exists to catch.",
    cuts: [],
    after: "",
    fn: "metodo-di-lavoro",
    d1: "D1.10",
    d1Status: "proposed",
    stance: "used",
    relates: [
      { to: "surface-variance-masks-convergence", how: "refines", why: "It is the measured gap itself that must not be joined to a representation-level finding without an experiment." }
    ],
    usedIn: []
  },
  {
    id: "reproducibility-is-documentation",
    gist: "A number nobody else can recompute from the deposited materials is testimony, not evidence. A framework whose instrument is an epistemic responsibility check cannot exempt itself from that check, which is the reason the materials are deposited at all.",
    src: "/lab/2026-07-10-coding-manual-v2-1-retrospective-qc/",
    locus: "\u00b62",
    before: "A framework whose central instrument is an Epistemic Responsibility Check cannot exempt itself from the responsibility it checks.",
    claim: "Reproducibility is a property of documentation, not of results: if a third party cannot recompute AR-sem = 78.33% from the deposited materials, the number is testimony, not evidence.",
    cuts: [],
    after: "Hence this release.",
    fn: "metodo-di-lavoro",
    d1: "D1.10",
    d1Status: "proposed",
    stance: "used",
    relates: [
      { to: "mode-a-needs-a-blind-recode", how: "refines", why: "The blind recode counts only if a third party can repeat it from what was deposited." }
    ],
    usedIn: []
  },
  {
    id: "arguments-answer-to-arguments",
    gist: "A measurement, an experiment and an argument are accountable to different things, so they cannot be asked to share one document and one standard of proof. This is the taxonomy's own principle turned on the programme's publication plan, and it is what split the working paper in two.",
    src: "/lab/2026-09-03-what-counts-as-one-paper/",
    locus: "\u00b610",
    before: "The third \u2014 that a model can report on its own internal states and still not classify the epistemic type of its own assertions, which is why the check has to come from outside \u2014 is an argument.",
    claim: "Measurements and experiments are answerable to data and to a coding protocol. Arguments are answerable to other arguments.",
    cuts: [],
    after: "I had been asking one document to be accountable to both, and the seams were showing long before the second model made them visible.",
    fn: "strumento-concettuale",
    d1: "D1.3",
    d1Status: "proposed",
    stance: "used",
    relates: [
      { to: "ontology-precedes-epistemology", how: "extends", why: "The same principle applied one level up: not to the claim under test, but to the document that carries it." }
    ],
    usedIn: []
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

// La grammatica visiva: quattro marche, una per tipo di garanzia.
//
// Non sono forme arbitrarie da imparare a memoria: ognuna e' il segno che la
// disciplina usa gia' per quella cosa. Un punto e' un dato; i tre punti sono
// il "dunque"; la E rovesciata e' il quantificatore esistenziale; il punto
// esclamativo e' la marca del direttivo nella notazione degli atti
// linguistici, che questo progetto usa gia' nel Pre-Step 0 austiniano.
// Il segno dice di che garanzia vive il claim, prima di leggerlo.
const FORMA = {
  "D1.1": "point", "D1.2": "point",                                        // un dato
  "D1.3": "therefore", "D1.4": "therefore",                                // dunque
  "D1.5": "exists", "D1.6": "exists", "D1.14": "exists",                   // esiste
  "D1.7": "directive", "D1.8": "directive", "D1.9": "directive", "D1.10": "directive" // si faccia
};
const FAMIGLIE = [
  { forma: "point", en: "what was observed", sub: "a measurement, a record", d1: ["D1.1", "D1.2"] },
  { forma: "therefore", en: "what follows", sub: "by derivation, not by observation", d1: ["D1.3", "D1.4"] },
  { forma: "exists", en: "what there is", sub: "an ontological or interpretive claim", d1: ["D1.5", "D1.6", "D1.14"] },
  { forma: "directive", en: "what should be done", sub: "a rule, a method, a norm", d1: ["D1.7", "D1.8", "D1.9", "D1.10"] }
];

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

// La maniglia di un claim del diario: il titolo della nota, troncato
// prima del trattino, piu' il capoverso. "Programme note" su undici claims
// non e' un'ancora, e' un'etichetta che non distingue niente.
function notaBreve(src, locus) {
  const f = path.join(__dirname, "..", "lab",
    String(src).replace(/^\/lab\//, "").replace(/\/$/, "") + ".md");
  let titolo = "Research log";
  if (fs.existsSync(f)) {
    const m = fs.readFileSync(f, "utf8").match(/^title:\s*"?(.*?)"?\s*$/m);
    if (m) titolo = m[1].split(/\s[\u2014-]\s/)[0].replace(/^"|"$/g, "").trim();
  }
  return locus ? `${titolo} ${locus}` : titolo;
}

module.exports = claims.map(l => {
  const fonte = perChiave[l.src] || null;
  return {
    ...l,
    weight: peso(l),
    fonte,
    cite: fonte ? breve(fonte) : notaBreve(l.src, l.locus),
    shape: FORMA[l.d1] || "circle",
    voice: fonte ? "literature" : "log",
    contested: l.stance === "contested",
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

module.exports.FAMIGLIE = FAMIGLIE;
module.exports.D1 = D1;
module.exports.RELAZIONI = RELAZIONI;
module.exports.STANCE = STANCE;
