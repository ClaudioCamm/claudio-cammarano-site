/**
 * ENTIA in inglese: etichette e testo normativo — ENTIA 1.1 bilingue (R14).
 *
 * Sorgente unica del lato inglese. Da qui pescano sia /en/entia/ sia le
 * definizioni inglesi in /entia.json, cosi' la pagina e il vocabolario macchina
 * non possono divergere. Lo stesso principio per cui entia.js e' sorgente unica
 * della meta' italiana.
 *
 * COSA STA QUI, E COSA NO. Qui sta il vocabolario e il testo DEL PROTOCOLLO:
 * i cinque strati, le sei funzioni, le regole, la conformita', la portata.
 * Non ci stanno gli Argomenti (59) ne' i Concetti (376), che sono il
 * vocabolario locale e che la conformita' dichiara sostituibile: tradurli
 * renderebbe questo archivio leggibile in inglese, non renderebbe il
 * protocollo adottabile da altri, e solo la seconda cosa e' R14.
 * Non ci stanno nemmeno le misure sul corpus ne' la mappa: sono la prova che
 * ENTIA e' usata qui, non una parte di cio' che un altro deve implementare.
 *
 * TERMINI. Gli strati seguono l'inglese che /en/claims/ usa gia' (Topic,
 * Theme, Concept): un sinonimo nuovo farebbe dire la stessa cosa a due pagine
 * con due parole. "scheda" e' "card" e "catena" e' "chain" in tutto il file.
 *
 * Se il vocabolario italiano cresce e questo file no, `manca()` ferma il build.
 */

// ------------------------------------------------------------- i cinque strati
const strati = {
  "Tag libero": "Free tag",
  "Argomento": "Topic",
  "Tema": "Theme",
  "Concetto": "Concept",
  "Geometria": "Geometry"
};

const stratiTesti = {
  "Tag libero": {
    lega: "nothing",
    afferma: "nothing",
    nonPuo: "generate a page",
    nota: "Spontaneous semantics with no consequences. It is the relief valve: because there is one place where the impulse costs nothing, the Topics can stay few."
  },
  "Argomento": {
    lega: "membership in clusters.js",
    afferma: "a grouping",
    nonPuo: "carry a note",
    nota: "Normalised semantics. It groups, it does not assert: if a term can carry a note that is not obvious, it is not a Topic."
  },
  "Tema": {
    lega: "nothing: it is derived from the Topics",
    afferma: "a position",
    nonPuo: "be assigned to an item",
    nota: "Connotation. It is the layer that asserts the most and that no program can check: a connotation that could be verified would be a denotation."
  },
  "Concetto": {
    lega: "a validator that fails the build",
    afferma: "a proposition about the world",
    nonPuo: "exist without a note and without links",
    nota: "Worked semantics. It is the only layer that is high both in what it asserts and in how far it submits to checking: the centre, and everything else exists to protect it."
  },
  "Geometria": {
    lega: "a published formula",
    afferma: "nothing about the world",
    nonPuo: "be chosen",
    nota: "The exchange rate: the only place where an essay, a card and a citation inside a chain become the same unit. Weights 1.5 / 1 / +0.25."
  }
};

// -------------------------------------------------------------- le sei funzioni
// "Market reading" tiene la metafora della lettura e non scivola in "Market
// analysis": la funzione non analizza un settore, ne interpreta la struttura.
// "Corrective evidence" allenta "dato" in evidence perche' la definizione
// italiana parla gia' di evidenza, e "corrective datum" in inglese sembra un
// errore di battitura.
const funzioni = {
  "lettura-di-mercato": "Market reading",
  "riferimento-tecnico": "Technical reference",
  "metodo-di-lavoro": "Working method",
  "strumento-concettuale": "Conceptual tool",
  "dato-che-corregge": "Corrective evidence",
  "elementi-di-scenario": "Scenario elements"
};

const funzioniTesti = {
  "riferimento-tecnico": {
    descrizione: "A foundational resource on the subject.",
    estesa: "The resource you have to have read — or watched — to treat the subject with any competence: the text the others build on, often without saying so. When this site takes the subject up, it builds from here.",
    prova: "If this source disappeared, would the information exist nowhere else in primary form?"
  },
  "dato-che-corregge": {
    descrizione: "Evidence — a number, a trend or a case — that contradicts a consensus.",
    estesa: "A number, a trend or a documented case that contradicts a widely held idea — sometimes one I held myself. It enters precisely because it forces a correction.",
    prova: "Can I name the common belief this item contradicts? If I cannot state it, this is not the criterion."
  },
  "metodo-di-lavoro": {
    descrizione: "What changes in the process or the organisation of work.",
    estesa: "The item describes a change in the way work gets done — editorial processes, how teams are organised, tools — worth carrying into practice, mine or that of the organisations I write about.",
    prova: "Does it describe a sequence of operations I could adopt tomorrow?"
  },
  "lettura-di-mercato": {
    descrizione: "Maps the economic structure of a sector.",
    estesa: "The item makes clear how a sector works economically: who pays, who earns, where the value moves. It enters when it updates the understanding of a market's structure — publishing or otherwise.",
    prova: "Is there an economic structure here, with someone paying and someone collecting?"
  },
  "strumento-concettuale": {
    descrizione: "A thesis or a category to carry onto other ground.",
    estesa: "The item supplies a thesis or a category that works outside the context it was born in: a tool to carry onto other ground. What gets flagged is the tool, not the subject.",
    prova: "Can I apply this frame to an object other than the one the item is about?"
  },
  "elementi-di-scenario": {
    descrizione: "Updates the picture on a front this site follows.",
    estesa: "The item updates the picture on one of the fronts this site follows over time — AI, publishing, the geopolitics of content — and keeps the map current.",
    prova: "It says where things stand, without offering either a frame or a correction. Last resort."
  }
};

// --------------------------------------------------------------------- i temi
const temi = {
  "Epistemologia & AI": "Epistemology & AI",
  "Geopolitica & potere": "Geopolitics & power",
  "Editoria & comunicazione": "Publishing & communication",
  "Italia & istituzioni": "Italy & institutions",
  "Economia & lavoro": "Economy & work"
};

// ------------------------------------------------------------------ le regole
// Indicizzate per nome italiano, non per posizione: se l'ordine in entia.js
// cambia, qui non si rompe niente e `manca()` se ne accorge comunque.
const regole = {
  "Referente determinabile": {
    nome: "Determinable referent",
    testo: "A term rises to the Concepts when its referent can be determined. What determines it is the note, not the name. If the note would come out as a dictionary entry, the term stays a Topic."
  },
  "Qualificazione del nome": {
    nome: "Qualifying the name",
    testo: "A name is qualified only when the determination finds no external anchor: Taiwan stays bare, Taiwan / TSMC carries the editorial framing. Seven of the eight place entries follow the rule."
  },
  "I paesi stanno nei Concetti": {
    nome: "Countries live in the Concepts",
    testo: "A country is never a Topic: that information lives in the concepts field as a country-Concept, where it has a note, links and weight on the map. The Topic of an item about Ukraine is Geopolitics."
  },
  "Vince il criterio più specifico": {
    nome: "The most specific function wins",
    testo: "When two functions both apply, the narrower one wins, in the declared order. Conceptual tool is the widest and loses whenever a more precise one applies; scenario elements stays the last resort."
  },
  "Quantita'": {
    nome: "Quantity",
    testo: "Two to four Topics per card, three to five Concepts. These are the quantities the practice already keeps, not thresholds imposed on it."
  },
  "Il criterio è datato": {
    nome: "The function is dated",
    testo: "A badge says what that reading did for this archive on that date. The function is relational, and relations have a date: the same text can change function when the archive changes."
  }
};

// -------------------------------------------------------------- la conformità
const conformita = {
  titolo: "Adopting ENTIA",
  licenzaVsUso: "The licence asks one thing only: cite the source. Copying this page, adapting it, taking it inside a paid product is all allowed. Claiming to <em>use ENTIA</em> is a different matter, and it comes with conditions — as it does for the evidence-grading methods used in medicine, where the manual is free but the right to write «we followed the method» is tied to explicit requirements. The distinction is there for the reader: without it, the label says nothing.",
  struttura: {
    titolo: "What is adopted, and what gets replaced",
    fisso: "<strong>The structure is ENTIA, and it does not change:</strong> the five layers and their order; the functions understood as positions in a precedence (first you ask whether the item is a technical reference, last whether it is a scenario element); the obligation to expose the residue, that is, the cases where the rule and the judgement did not agree.",
    locale: "<strong>The vocabulary and the parameters are mine, and they get replaced:</strong> the themes, the topics, the concepts, the names of the six functions, the coefficients of the weight. An art-history archive will have other themes and other functions, and will weigh its items some other way. This is what the plural in the name is for: you do not adopt my taxonomy, you adopt the way of building one and of keeping it honest."
  },
  peso: {
    titolo: "The weight",
    testo: "The formula that gives every item a weight enters the package <strong>in its form, not in its numbers</strong>. ENTIA asks that a weight function exist, be published and be versioned: without one, the profiles of two archives are not comparable, and the numbers can be tuned after the fact with nobody seeing it. It does not ask that the coefficients be mine (an essay 1.5; a card 1; plus 0.25 for every chain that cites it; the geographic weights 1, 0.5 and 0.25): those depend on what a given archive produces.",
    soglia: "So no: changing the coefficients does not produce a different criterion, it produces <strong>another configuration of the same criterion</strong>, and that has to be declared — the way a threshold is declared, not the way a test is replaced. You stop doing ENTIA when you change the number of the layers or their order, when you turn the precedence among the functions into an automatic computation, or when you stop publishing the residue."
  },
  premessa: "Four conditions, with a single idea behind them: conformance is not following the rule, it is making visible where the rule did not work.",
  requisiti: [
    "Publish the assignments, item by item, with the date on which they were made. Without the date the drift cannot be seen.",
    "Publish the profile: how the functions are distributed, and over what period. It is the number that makes a copy comparable with the original.",
    "Declare the known disagreements between the rule and the judgement, instead of correcting them in silence. They are the only point from which the notation can learn anything.",
    "Version your own copy, say which version of ENTIA it descends from, and say which parameters you changed."
  ]
};

// ------------------------------------------------------- la portata del modello
const limiti = {
  premessa: "The model is there to let <strong>patterns be glimpsed</strong> inside an infrastructure designed on several levels. The layers are not a classification ordered for convenience: they are the conditions under which anything can be seen at all. An archive in which every item carries a single tag has no shape to look at.",
  voci: [
    {
      titolo: "The pattern, if it emerges, does not follow from the premises in an obvious and necessary way.",
      testo: "That is what makes it informative. Where the conclusions follow deductively from the rules, nothing is read that was not already in the rules: the notation would hand back the archive it was given. Here the assignments are made by hand, one at a time, and the design shows up afterwards — ENTIA is a notation, not a deductive engine."
    },
    {
      titolo: "What can be seen holds for this archive, and for the period over which it is observed.",
      testo: "The shares per function rest on a few dozen cases, and the map is redrawn with every item that enters. They are a shape, not a measurement: the Italian page always declares how many items a finding rests on, and its time filter makes it possible to see whether that shape changes."
    }
  ]
};

// -------------------------------------------------------------- orientamento
const orientamento = {
  cose: [
    "A way of declaring, for every text that enters an archive, <strong>what function it performs for whoever keeps it</strong>. Not whether it is good or important: what it does. Whether it brings a tool of thought reusable elsewhere, whether it corrects a figure that was taken as settled, whether it describes how a sector works economically, whether it shows the way somebody works. That declaration is a badge, and it is visible on every card of the site.",
    "Around the function stand four more layers: what the item is about, where it sits among the themes of the house, which worked concepts it hooks onto, and how much it weighs in the general count."
  ],
  chi: [
    "<strong>Whoever curates another archive</strong> — a newsroom, an observatory, a corporate library, a research group. The protocol is open and is not tied to these contents: the six functions hold for any corpus in which somebody decides what gets in. Other ENTIA are possible, on other worlds.",
    "<strong>Whoever wants to check it.</strong> Published alongside the rule are the corpus with its assignments, the dates on which they were made, and the declared scope of the model.",
    "<strong>Whoever reads this site</strong>, to weigh a pointer before following it: a badge says in two words why that text was kept."
  ],
  nome: "If ideas are things, ENTIA is an instrument for putting them in their drawer: for classifying them inside one editorial ecosystem. Other ENTIA are possible and thinkable, on other subjects, inside other mental worlds. The plural points, naturally enough, at <em>entia non sunt multiplicanda praeter necessitatem</em> — which for a protocol of selection is a sound criterion.",
  normativo: "This is the normative text in English. The Italian page carries the discursive account of why the notation exists, the measurements taken on this archive and the interactive map; the machine-readable form of everything below is in /entia.json."
};

// --------------------------------------------------- la descrizione dello schema
// La stessa depositata su Zenodo il 18/10: se divergono, il record e il
// vocabolario dicono due cose del medesimo protocollo.
const scheme = {
  description: "A five-layer editorial notation for curated archives: what an item is for whoever keeps it, declared item by item."
};

// ------------------------------------------------------------------ il controllo
// Chiamato da entiaVocab.js e da /en/entia/. Se il vocabolario italiano cresce
// e l'inglese no, il build si ferma invece di consegnare una lingua a meta'.
function manca(chiaviStrati, slugFunzioni, chiaviTemi, nomiRegole, quanteVociLimiti) {
  const buchi = [];
  (chiaviStrati || []).forEach(k => {
    if (!strati[k]) buchi.push(`etichetta dello strato "${k}"`);
    if (!stratiTesti[k]) buchi.push(`testi dello strato "${k}"`);
  });
  (slugFunzioni || []).forEach(k => {
    if (!funzioni[k]) buchi.push(`etichetta della funzione "${k}"`);
    if (!funzioniTesti[k]) buchi.push(`testi della funzione "${k}"`);
  });
  (chiaviTemi || []).forEach(k => { if (!temi[k]) buchi.push(`tema "${k}"`); });
  (nomiRegole || []).forEach(k => { if (!regole[k]) buchi.push(`regola "${k}"`); });
  if (quanteVociLimiti != null && quanteVociLimiti !== limiti.voci.length) {
    buchi.push(`portata: ${quanteVociLimiti} voci in italiano, ${limiti.voci.length} in inglese`);
  }
  if (buchi.length) {
    throw new Error(
      "[entia] manca in src/_data/entiaEn.js: " + buchi.join(", ") +
      "\n         ENTIA 1.1 dichiara due lingue: un pezzo assente le fa diventare una e mezza."
    );
  }
}

module.exports = {
  strati, stratiTesti, funzioni, funzioniTesti, temi, regole,
  conformita, limiti, orientamento, scheme, manca
};
