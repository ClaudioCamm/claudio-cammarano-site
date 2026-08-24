---
layout: layouts/lab-note.njk
title: "Validating AI — The research project so far"
date: 2026-07-03
ai_prose: WR
ai_scope: [FM]
project: "Post-cognition"
stage: "Writing & submission"
discipline: ["Epistemology", "Philosophy of language", "Computational linguistics / NLP", "Statistics"]
method: ["Quantitative analysis", "Statistical modeling", "Annotation / inter-annotator agreement"]
description: "Where the project stands as of July 2026 — the starting point for this log."
documents:
  - file: "11_2026_academic_v4.pdf"
    label: "Validating AI — Academic paper (draft)"
    version: "v4"
    id: "paper-draft"
---

## Origins and theoretical framework

This project grew out of my longstanding interest in epistemology and misinformation, which produced the book *Le Fake News e il Marketing del Vero* (2018). The central hypothesis is that language models generate outputs lacking metacognition — a condition Loru et al. (2025, PNAS) and Quattrociocchi et al. (2025) call *epistemia* — and that structured external intervention, which I call *post-cognition*, is required to reconstruct the ontological commitments implicit in those outputs. The guiding principle is: ontology precedes epistemology. The type of claim must be established before any truth evaluation.

## The taxonomy

The framework is a seven-dimensional taxonomy (D1–D7). The primary dimension D1 classifies the content type of the claim into eleven categories (historical, statistical-probabilistic, metaphysical, causal, normative, etc.). Dimensions D2–D7 are attributive. A Pre-Step 0 — drawing on Austin (1962) — verifies the illocutionary act before applying the framework: if the claim is not an assertion, validation is suspended. A final Epistemic Responsibility Check assesses the epistemic responsibility of the source. The taxonomy is at version 2.2; the Coding Manual is at version 2.0.

## The corpus and empirical validation

The horizontal corpus contains 31 claims demonstrating taxonomic coverage. The vertical validation produced 180 API runs (6 claims × 30 replications each), yielding the principal quantitative finding: a 74-point gap between Lexical Agreement Rate (ARlex = 4.44%) and Semantic Agreement Rate (ARsem = 78.33%); mean pairwise Jaccard similarity J̄ = 0.340; composite index IC = 0.605. This demonstrates that surface-level lexical variance masks high semantic convergence.

## Current state of the paper (v4)

Eight sections drafted (Introduction through Conclusion), a 56-entry bibliography, and six appendices (taxonomy, Coding Manual, system prompts, pre-registration, horizontal corpus, dimensional redundancy matrix, OSF materials). EXP-1 (multi-model control, §6.6) and EXP-2 (uplift experiment, §6.7) remain to be executed, along with the OSF deposit (Appendix G).

## Submission target

arXiv (cs.AI / cs.CL) as an immediate preprint; Synthese and Episteme as journal targets at 6–12 months. arXiv endorsement is currently being sought.

## Attachments

The current working draft (v4), split into three PDFs:

- Academic paper (v4): {% labdoc "11_2026_academic_v4.pdf" %}
- <a href="/downloads/12_2026_backmatter_v4.pdf">Back matter (v4) — PDF →</a>
- <a href="/downloads/13_2026_toc_status_v4.pdf">Table of contents & status (v4) — PDF →</a>
