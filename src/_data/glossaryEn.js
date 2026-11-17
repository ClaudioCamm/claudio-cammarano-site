// Glossario del lato inglese (17/11/2026): una riga per termine, mostrata al
// passaggio del mouse (o al tocco) la prima volta che il termine compare in
// una pagina. Uso nei template: {% from "components/gl.njk" import gl %}
// {{ gl("stance") }} oppure {{ gl("stance", "Stance") }} per un'etichetta diversa.
// Testi approvati da Claudio il 17/11/2026.
module.exports = {
  entia:    { term: "ENTIA", def: "The notation this site uses on itself: what each piece is for, read through five layers." },
  claim:    { term: "claim", def: "A sentence from a source, kept verbatim, that the programme stands on, uses or has to answer to." },
  card:     { term: "card", def: "My paraphrase of a work, section by section, with the passages I underlined." },
  extract:  { term: "extract", def: "A self-contained text inside a work, restated line by line in my notation." },
  shelf:    { term: "shelf", def: "A group of readings, as I keep them while working." },
  function: { term: "function", def: "What a claim does for the programme: a conceptual tool, a working method, corrective evidence, a technical reference." },
  stance:   { term: "stance", def: "How the programme holds the claim: assumed, used, or contested." },
  d1:       { term: "claim type", def: "What kind of statement it is, so that the right test can be applied. Proposed until checked by hand." },
  cito:     { term: "relations", def: "How one claim bears on another, in the CiTO vocabulary: refines, extends, presupposes, confirms, contests." },
  weight:   { term: "weight", def: "How much a claim counts, by a published formula: the source, its use here, and dissent." }
};
