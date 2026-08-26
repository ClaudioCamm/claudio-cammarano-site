---
layout: layouts/lab-note.njk
title: "What Counts as a Verdict"
date: 2026-07-21
ai_prose: WR
ai_scope: [FM]
project: "Post-cognition"
stage: "Writing & submission"
discipline: ["Epistemology", "Philosophy of language", "Computational linguistics / NLP", "Statistics"]
method: ["Annotation / inter-annotator agreement", "Quantitative analysis", "Protocol design"]
description: "A spot-validation that failed at 77.8% did not turn up an arithmetic error. It turned up a hidden ontological decision inside the extractor — the same category collapse the framework is built to catch in other people's outputs, found this time in mine."
documents:
  - file: "11_2026_academic_v5.pdf"
    label: "Validating AI — Academic paper (draft)"
    version: "v5"
    id: "paper-draft"
  - file: "12_2026_backmatter_v5.pdf"
    label: "Validating AI — Backmatter (references, tables, appendices)"
    version: "v5"
    id: "paper-backmatter"
  - file: "analisi_varianza_v2.py"
    label: "Script — Variance Analysis v2 (label-first re-extraction)"
    version: "v2"
    id: "variance-script"
  - file: "analisi_varianza_labelfirst.json"
    label: "Label-first re-extraction — per-claim output"
    version: "July 2026"
  - file: "campione_cieco_18.md"
    label: "Blind spot-validation packet — 18 outputs, labels stripped"
    version: "July 2026"
  - file: "08_epistemologia_ai_bibliografia_v5.bib"
    label: "Bibliografia — Epistemologia della Conoscenza AI-Generata"
    version: "83 fonti"
    id: "bibliography"
---

The whole project rests on one claim: ontology precedes epistemology. You cannot judge a statement before deciding what kind of statement it is. This week that claim turned around and pointed at the project's own measurement instrument, and I want to record what it found there, because the finding is the argument.

Start with the trigger. The vertical validation is six claims replicated thirty times each, 180 runs on `claude-sonnet-4-6` through the Anthropic API, executed 25–26 June 2026, no skips. It measures two things at once. `ARlex` asks whether the model repeats the same *words* across replications; `ARsem` asks whether it repeats the same *judgment*. The headline of the study is the distance between those two numbers. To get `ARsem` I automate verdict extraction: a keyword classifier reads the *Esito* cell of each validation prospectus and sorts it into a category. This is Mode A of Coding Manual v2.1, and Mode A carries a mandatory check. A human recodes a sample by hand, blind to the machine, and the two must agree above 90%.

The check returned 77.8%. Below threshold. And the doubt it raised was not cosmetic. **If the extractor is defective, I no longer know whether the lexical–semantic gap is a fact about the model or an artifact of my own tool.**

So I opened the disagreements, expecting one bug. I found two things that only looked like one.

The first is a real bug, and a satisfying one, because it is simply wrong. The classifier is blind to negation. It read "plausibile ma non confermato," matched on *confermato*, and filed a suspended verdict as an affirmed one. A model hedging its answer was recorded as a model asserting it. That is fixable in the ordinary way: you teach the tool to read the *non*.

The second is not a bug. It is a philosophical choice wearing the costume of a line of code. It lives on the causal claims, the ones the model evaluates with a strong-form and a weak-form reading. The clean case is the First World War "caused" by the assassination at Sarajevo. Read every output and they say the same thing on two levels: the strong monocausal reading is false, the weak proximate-cause reading is defensible. Now ask the question the extractor has to answer thirty times: *what is the verdict of an output like that?* The deposited classifier had a mixed-verdict override that unified all thirty into a single category, `PARZIALMENTE VERO`, and reported 100% agreement. The label-first rule — the output's own leading self-label governs — splits out the minority that foregrounds the strong-form falsity, 8 of 30 reading `FALSO`, and reports 73.3%. **Neither number is a mistake. They are answers to a question that was never asked out loud, only settled in silence by whoever wrote the override.**

That is the moment the whole thing inverts, but I want to get the decision right before I name it.

Three roads were open. Add label-first handling and negation handling and re-extract. Or build a content-based classifier with targeted patches. Or throw out the machine and recode all 180 outputs by hand, myself, in Mode M. Every instinct pulled toward the third. If the instrument is unreliable, trust the hand; the hand is firmer. I rejected it, and the reason is the spine of the paper. One coder recoding 180 outputs is not a firmer foundation. It is the mono-rater condition scaled up to 180, and it contradicts the project's own Phase 1 / Phase 2 architecture.

The grounding here is not decoration, so I will name it in the body where it belongs. No datum certifies itself. There is no theory-neutral observation against which a classification is finally checked (Quine, 1951). The base statements that anchor a theory are accepted by convention, not read off some foundation — Popper's image is of piles driven into a swamp, sunk until they bear the load, resting on no bedrock (Popper, 1959). The hunt for a self-justifying given is the myth Sellars named (Sellars, 1956). The annotation-theory version says it exactly: a single expert is not ground truth, because validity is a property of intersubjective agreement under an explicit scheme, not of one coder's private access to the fact (Artstein & Poesio, 2008). I chose the first road, label-first plus negation, and re-extracted.

The decision that matters more than the rule is what I now let Mode A claim about itself. **It may not be presented as self-validating.** It is checked against a human coder blind to the automated output, on a random sample, and its result is reported as an agreement rate, not a certificate of correctness. That single move rewrote two passages of the paper. In §4.5, `ARsem` is now defined as the modal category under a fixed, deposited rule, blind-checked, with agreement reported as a rate. In §4.6, the mono-rater status stops being a weakness I apologize for and becomes a design feature: Phase 1 claims only reproducibility under a fixed rule, while *validity* is a Phase 2 property, measured as Fleiss' κ against the 0.61 criterion (Landis & Koch, 1977).

And the number holds. Study-level `ARsem` moves from 78.33% to 76.67%; the gap slips from about 74 points to about 72. Four of the six claims match the QC-Log sensitivity check exactly — vaccini at 100%, bitcoin at 96.7%, prima_guerra at 73.3%, coscienza at 56.7%. Two differ by a single run.

Those two are where I had to practise a discipline I preach. On vegetarianismo the dominant category is fixed as `SOSPESO`, on fumo as `PARZIALMENTE VERO`, but the exact proportion wobbles by one output between the re-extraction and the QC Log. I did not reach in and pick the figure I liked. I left it open, marked it pending in §6.3, and built the thing that closes it honestly: 18 outputs, three per claim, stratified, randomized, stripped of their automated labels, seed fixed, the key held by me alone. **A number that depends on a blind validation I have not yet run is not a number I am allowed to declare.** So the answer key stays off this page; only the labels-stripped packet is deposited, so anyone can recode it against me.

Which returns me to the inversion I postponed. Before you can extract a verdict from an output, someone must already have decided what counts as a verdict. The classifier made that ontological decision silently, inside an override, and my quality check did not surface an arithmetic slip. It surfaced a hidden ontological commitment sitting in the measurement pipeline — the same category collapse `post-cognition` was built to catch in other people's outputs, found this time in mine. The technical record of what was changed lives in the [Coding Manual v2.1 retrospective](/lab/2026-07-10-coding-manual-v2-1-retrospective-qc/); this note is only the reflection on what the change exposed.

So here is the state of the facts, without a moral attached. The gap holds. The extraction rule is now declared and deposited beside the original, so both readings regenerate from the raw file. Two of the six proportions remain pending a blind coder who has not seen my answers. And the operating lesson, which I expect to keep relearning: in measuring a judgment, "how much do I agree with myself" must always be turned into "how much do I agree with someone who has not seen my answer."

Documents: {% labdoc "11_2026_academic_v5.pdf" %}, {% labdoc "12_2026_backmatter_v5.pdf" %}, {% labdoc "analisi_varianza_v2.py" %}, {% labdoc "analisi_varianza_labelfirst.json" %}, the blind packet {% labdoc "campione_cieco_18.md" %}, and the updated bibliography {% labdoc "08_epistemologia_ai_bibliografia_v5.bib" %} — July 2026.
