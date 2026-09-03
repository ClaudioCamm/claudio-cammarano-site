---
layout: layouts/lab-note.njk
permalink: /lab/status/
title: "Project status"
date: 2026-09-03
ai_prose: WR
ai_scope: [FM]
project: "Post-cognition"
stage: "Writing & submission"
discipline: ["Epistemology", "Computational linguistics / NLP"]
method: ["Annotation / inter-annotator agreement", "Qualitative coding"]
description: "A living page, not a dated note: where the research on post-cognition stands today, what the numbers currently are, and which of them are not yet declared."
---

<div class="info-box">
  <p>This page is a living document, not a dated note. The rest of the Lab records what was true on the day each note was written; this page is maintained, and supersedes any figure in an older note that contradicts it. Last updated 3 September 2026.</p>
</div>

Language models produce claims without establishing what kind of claim they are producing. That is the whole of the problem this project addresses, and it is worth stating at the strength the evidence supports. The premise is not that these systems perform no monitoring of their own processing: interpretability work through 2025 and 2026 has shown that they sometimes report on concepts held in their internal states, and the framework concedes it. The premise is narrower. Nothing in the available evidence suggests that a model represents whether the claim it is about to make is definitional or empirical, causal-mechanistic or correlational, framework-dependent or framework-independent. **Content type is not among the contents.** What the framework calls post-cognition is the external operation that supplies that classification after generation, reconstructing it from the output itself.

## The framework

Seven dimensions, D1 through D7. D1, Content Type, is the only genuinely taxonomic dimension; D2 through D7 are attributive, and their values are properties of a claim already typed under D1. The taxonomy is at version 2.2, with eleven active D1 categories — D1.1 through D1.10 and D1.14. The numbering skips D1.11 to D1.13, which the taxonomy reserves for future work.

A Pre-Step 0, after Austin, checks illocutionary force before any classification is assigned: claims that are constitutively not assertions receive the code `NA_ILLOCUTORIO` and validation is suspended. An Exclusion Rule removes pure existence predicates from scope. Causal claims typed D4.3 receive an asymmetric procedure with three outcomes — falsified, non-corroborated, beyond framework scope — and declaring the third is a demarcation of the framework's limits rather than a failure of it. The Coding Manual is at version 2.1, which is additive over v2.0: no annotation rule applied in the horizontal validation was revised.

## The corpus and the numbers

The horizontal corpus is thirty-one claims, annotated in full across D1 to D7. It covers ten of the eleven active D1 categories; D1.9, Procedural-Instructional, is unrepresented, and that gap is declared rather than glossed.

The vertical validation is six claims replicated thirty times each on `claude-sonnet-4-6` through the Anthropic API, executed 25–26 June 2026: 180 runs, no skips, identical prompts, no memory across calls. It measures two things. `ARlex` asks whether the model repeats the same words; `ARsem` asks whether it repeats the same judgment. The distance between them is the study's principal quantitative finding.

`ARlex` is 4.44%. `ARsem` is 76.67%. The gap is approximately 72 percentage points. Mean pairwise Jaccard similarity across narrative fields is 0.340, and the composite index is 0.596. These are the figures of the first arm, and they are the figures of the paper.

A second arm was executed on 31 August 2026: two of the six claims, thirty replications each, on `gpt-5.6-terra` through the OpenAI Responses API, under the same system prompt and the same user template, with reasoning effort set to none. Sixty calls, no skips. `ARlex` rose rather than falling, so the distance between surface variance and substantive convergence does not depend on the model that produced it. **`ARsem` for the second arm is not reported.** The deposited extractor leaves seventeen of the sixty outputs unclassified, because the second model opens the Esito cell with a sentence rather than a verdict label, and extending the classifier's lexicon after inspecting the outputs it failed on would measure the fit rather than the model. The figure is declared pending and will come from the blind coding.

| Claim | D1 | ARsem |
| --- | --- | --- |
| I vaccini causano l'autismo | D1.2, D4.3 | 100% |
| Bitcoin raggiungerà $100k entro il 2026 | D1.4 | 96.7% |
| La prima guerra mondiale fu causata dall'assassinio di Sarajevo | D1.1, D4.3 | 73.3% |
| Il vegetarianismo è eticamente superiore | D1.8 | 70.0% † |
| Fumare causa il cancro ai polmoni | D1.2, D4.3, D3.2 | 63.3% † |
| La coscienza non è riducibile a processi neurali | D1.14 | 56.7% |

*† Dominant category settled; exact proportion pending the blind spot-validation described below.*

**The pattern is the finding, not the aggregate.** Semantic agreement is highest where the claim type makes a determinate verdict available and lowest where it does not, which is what the framework predicts. The vegetarianismo result is the clearest case: a normative claim submitted without a specified moral framework resolves predominantly to suspension of judgment. That is moderate agreement and high epistemic correctness at the same time, and an evaluation scheme reading agreement as a reliability score would report it as instability.

## What is not settled

Five things, stated plainly.

The semantic agreement rate of the second arm is pending, for the reason given above. Until the blind coding is done, the multi-model control establishes that the lexical–semantic distance is not a property of one model, and nothing more than that.

Two of the six per-claim proportions wobble by a single output between the label-first re-extraction and the quality-control sensitivity check. Eighteen outputs, three per claim, stratified and stripped of their automated labels, are deposited for a blind recode; until someone who has not seen the answers has coded them, those two figures are not declared.

The multi-model control has been executed, but on one second model and two of the six claims. Until it is extended, the architectural reading of the lexical–semantic gap rests on two architectures and a fragment of the corpus: more than a property of one model, less than a result about autoregressive generation as such.

The uplift experiment — framework prompt against a naive prompt on four causal claims, blind-coded — is likewise designed, pre-registered and unexecuted. **It is the decisive move, because `ARsem` on its own cannot separate genuine epistemic convergence from concentration on an epistemic-looking attractor.** Until it runs, the claim that post-cognition produces epistemic behaviour rather than epistemic appearance is a hypothesis, and is stated as one.

Inter-annotator agreement is a Phase 2 deliverable, not a missing component of Phase 1. The semantic coding is mono-rater, deliberately: a single expert coder is not ground truth, and validity is a property of intersubjective agreement under an explicit scheme. Phase 1 claims only that the categories are reproducible under a fixed, deposited rule which agrees with a blind coder at a reported rate.

## Versioning

The unified working paper ran from v1 to v7 and is closed. From September 2026 the programme publishes on two lines, named rather than lettered, because they are not stages of one another and neither supersedes the other.

The **ontology line** is the ontological paper: the taxonomy, the asymmetric procedure for causal claims, the argument for external post-cognition and the actantial description that replaced it. Its versions are numbered α1, α2, and so on. The **empirical line** is the empirical paper: the vertical validation, the multi-model control, the blind coding and the uplift experiment. Its versions are numbered β1, β2. **The letters are version sigla within a line, not marks of maturity: α is not a draft of β.** The two lines advance at different speeds, and the states shown on the home page are the states of each line, not of the programme.

### Concordance

Where each part of v7 went. Sections not listed here carry over unchanged into the line indicated.

| v7 | Line | Note |
| --- | --- | --- |
| — | — | *Mapping to be completed section by section.* |

## Where the papers are going

The route is unchanged: an OSF deposit and pre-registration, then arXiv as a preprint under cs.AI or cs.CL, with *Synthese* and *Episteme* as journal targets at six to twelve months. The two lines travel it separately and at their own pace.

The invitation stands. The Coding Manual, the thirty-one-claim corpus with full annotations, the system prompt, the extraction scripts and the blind packet are deposited openly and indexed on the [deliverables page](/en/deliverables/), and Phase 2 needs annotators. Researchers or graduate students with a background in epistemology, philosophy of language or computational linguistics willing to code a sub-corpus of twenty to thirty claims are invited to write.

## Corrections and redactions

3 September 2026 — the unified working paper closed at v7 and the programme split into two lines. The reason is recorded in [What Counts as One Paper](/lab/2026-09-03-what-counts-as-one-paper/). No figure changed: the split reorganises where the work is published, not what it found.

28 August 2026 — from v7 onward the Crimea case is cited by a generic designation, an established Italian historian speaking on television, rather than by name. The argument it carries — that authority in one domain does not transfer to another — does not depend on the identity, and nothing in the case rests on it. The already published documents keep the name as printed: they are a record of what was deposited, and are not rewritten after the fact.

28 August 2026 — the D1 codes in the notes of 25 and 28 February were incorrect and have been corrected in place, with the error recorded on each note. The note of 3 February carried correct codes under two category names that do not exist in the taxonomy; the names have been corrected and the change recorded there. The deposited corpus was never affected.

Documents: {% labdoc "cammarano-post-cognitive-validation-v7.pdf", "Working paper — v7, closed" %}, {% labdoc "cammarano-post-cognitive-validation-backmatter-v6.pdf", "References & appendices — v6" %}, {% labdoc "cammarano-coding-manual-v2-1.pdf", "Coding Manual — v2.1" %}. Second arm: {% labdoc "batch_exp1_openai.py", "runner" %}, {% labdoc "exp1_raw.json", "raw outputs" %}, {% labdoc "exp1_run_log.json", "run log" %}, {% labdoc "system_prompt.txt", "system prompt" %} — September 2026.
