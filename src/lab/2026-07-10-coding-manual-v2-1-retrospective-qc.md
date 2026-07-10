---
layout: layouts/lab-note.njk
title: "Coding Manual v2.1 — The framework audits itself"
date: 2026-07-10
project: "Post-cognition"
stage: "Protocol development"
discipline: ["Epistemology", "Computational linguistics / NLP", "Statistics"]
method: ["Protocol design", "Annotation / inter-annotator agreement", "Quantitative analysis"]
description: "The protocol catches up with the study it governs: six claims codified, AR-lex and AR-sem formally defined, quality control turned into a documentable record — retrospectively, and declaredly so."
documents:
  - file: "Coding_Manual_v2_1.pdf"
    id: "coding-manual"
    label: "Coding Manual v2.1 — Annotation Protocol"
    version: "2.1"
  - file: "QC_Log_Vertical_Validation.pdf"
    label: "Retrospective QC Log — Vertical Validation Corpus"
    version: "July 2026"
---

A compliance audit of the vertical validation against Coding Manual v2.0 returned an uncomfortable result: the study had outgrown its own protocol. The manual prescribed 90 validations across three claims; the executed run was 180 across six. The headline finding — the 74-point gap between lexical and semantic agreement — rested on two metrics defined nowhere in the framework documents. And the quality checks the manual mandates existed as practice, not as record.

A framework whose central instrument is an Epistemic Responsibility Check cannot exempt itself from the responsibility it checks. **Reproducibility is a property of documentation, not of results**: if a third party cannot recompute AR-sem = 78.33% from the deposited materials, the number is testimony, not evidence. Hence this release.

Coding Manual v2.1 makes four moves. The scope is updated to the executed design — six claims selected to maximize ontological diversity, from historical-empirical to metaphysical, including two D4.3 causal claims that exercise the three-outcome procedure in situ. The two agreement rates get formal, pairwise definitions: AR-lex compares verbatim verdict strings, AR-sem compares coded verdict categories, and the verdict table of the manual now explicitly serves as the set of semantic equivalence classes — the operational content of the gap. Coding is split into two modes, automated extraction and manual annotation, bridged by a mandatory spot-validation: a blind human recode of 10% of the corpus, with acceptance thresholds and a re-extraction rule on failure. And every quality check must now leave a trace in a persistent QC Log, because a study whose QC cannot be exhibited has, for reproducibility purposes, no QC.

The companion document is exactly that log, compiled retrospectively over the eighteen batches of the 180-run corpus. Retrospective QC preserves the audit function — errors are found and corrected before the analysis is finalized — but not the interruption function: a drifting batch could not have been stopped mid-collection. The log states both facts in its header rather than hiding them; declaring the retrospective character of a check is part of the same standard the framework imposes on the claims it validates.

The manual also gains a deviation log (Appendix C) declaring the four departures from the pre-registered design: the expansion from three claims to six, the data-driven addition of AR-lex/AR-sem alongside the pre-registered κ, the introduction of automated coding, and the retrospective QC itself. A deviation declared is a datum; a deviation hidden is a defect — this is what pre-registration is for.

For the paper, the consequences are structural. Section 4 is rewritten on the six-claim design, with the new metrics reported next to Fleiss' κ rather than instead of it. More substantively, the research question sharpens: not "are LLM validations reproducible?" but "reproducibility is layered — near zero at the lexical surface, high at the semantic level." That is the measurable form of the project's thesis that ontology precedes epistemology. The path to submission now runs through the completion of the open-materials appendix, the two remaining experiments (multi-model control and uplift), and the OSF deposit.

Documents: {% labdoc "Coding_Manual_v2_1.pdf" %} and {% labdoc "QC_Log_Vertical_Validation.pdf" %} — July 2026
