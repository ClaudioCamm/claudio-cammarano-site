---
layout: layouts/lab-note.njk
title: "Coding Manual v2.1 — The framework audits itself"
date: 2026-07-10
ai_prose: WR
ai_scope: [FM]
project: "Post-cognition"
stage: "Protocol development"
discipline: ["Epistemology", "Computational linguistics / NLP", "Statistics"]
method: ["Protocol design", "Annotation / inter-annotator agreement", "Quantitative analysis"]
description: "The protocol catches up with the study it governs: six claims codified, AR-lex and AR-sem formally defined, quality control turned into a documentable record. And the record's most prominent entry is the failure of the classifier that produced the headline number — which is the point."
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

Coding Manual v2.1 makes four moves. The scope is updated to the executed design — six claims selected to maximize ontological diversity, from historical-empirical to metaphysical, including two D4.3 causal claims that exercise the three-outcome procedure in situ, with claim wording reproduced verbatim from the batch script, because in a study of lexical variance the prompt wording is part of the data. The two agreement rates get formal definitions matching the deposited analysis code: both are modal rates — the share of replications carrying the most frequent value — where AR-lex compares minimally normalized verbatim verdict strings and AR-sem compares the outputs of a deterministic keyword classifier over five semantic categories, with explicit priority and tie-handling rules, Wilson confidence intervals, and a mean Jaccard similarity over full texts as a complement. Coding is split into two modes, automated extraction and manual annotation, bridged by a mandatory spot-validation: a blind human recode of 10% of the corpus, with acceptance thresholds and a re-extraction rule on failure. And every quality check must now leave a trace in a persistent QC Log, because a study whose QC cannot be exhibited has, for reproducibility purposes, no QC.

The companion document is exactly that log, now compiled over the eighteen batches of the 180-run corpus. Retrospective QC preserves the audit function — errors are found before the analysis is finalized — but not the interruption function: a drifting batch could not have been stopped mid-collection. The log states both facts in its header rather than hiding them.

The register is clean where cleanliness matters most: 180 of 180 runs valid, no skipped replications, every verdict extracted, and — the point of the whole exercise — the deposited script and dataset regenerate the published aggregates exactly. AR-lex 4.44% and AR-sem 78.33% are now numbers a third party can recompute, not numbers to be taken on trust.

The log's most instructive finding, however, is a failure. The keyword classifier that assigns semantic categories to verdicts scored 77.8% agreement against a careful re-reading of the spot sample — below the 90% acceptance threshold the manual itself sets. Two mechanisms are documented: negation blindness ("plausibile ma non confermato" matches *confermato* and lands in VERO) and a keyword priority that overrides the model's own leading label — 32 disagreements across the 137 verdicts that open with an explicit label. Per protocol, the classifier goes back for revision and the corpus for re-extraction.

Three comments on what this means. First, robustness: a label-first sensitivity recoding moves study-level AR-sem from 78.33% to 76.67%. **The 74-point lexical–semantic gap survives its own quality control.** Two claim-level results do not — the vegetarianism tie and the dominant category for the consciousness claim turn out to be classifier-sensitive, and are quarantined until the revision is decided. Second, the per-claim pattern tracks ontology: the empirically settled claims sit at the top of the AR-sem range, the normative claim at the bottom. Reproducibility covaries with the type of claim, not merely with the difficulty of the task — the study's hypothesis, showing up uninvited in its own QC. Third, the disagreement between classifier and self-label on the WWI claim is not a bug on either side: a verdict of the form "false in the strong reading, partially true in the weak reading" can be coded FALSO, following the model's label, or PARZIALMENTE VERO, following the manual's mixed-verdict rule — and choosing between them is a question about what a verdict *is*. Verdict ontology, in other words, which will get its own paragraph in the Discussion.

A validator that certified its own instruments would be exactly the thing this project argues against. A QC log whose most prominent entry is the failure of the tool that produced the headline number is the Epistemic Responsibility Check applied to ourselves.

The manual also gains a deviation log (Appendix C) declaring the four departures from the pre-registered design: the expansion from three claims to six, the data-driven addition of AR-lex/AR-sem alongside the pre-registered κ, the introduction of automated coding, and the retrospective QC itself. A deviation declared is a datum; a deviation hidden is a defect — this is what pre-registration is for.

For the paper, the consequences are structural. Section 4 is rewritten on the six-claim design, with the new metrics reported next to Fleiss' κ rather than instead of it. The Results section inherits the quarantine: the study-level gap is citable now, the two classifier-sensitive claim-level results are not, until the classifier revision is decided and the corpus re-extracted. More substantively, the research question sharpens: not "are LLM validations reproducible?" but "reproducibility is layered — near zero at the lexical surface, high at the semantic level." That is the measurable form of the project's thesis that ontology precedes epistemology. The path to submission now runs through the classifier decision, the completion of the open-materials appendix, the two remaining experiments (multi-model control and uplift), and the OSF deposit.

Documents: {% labdoc "Coding_Manual_v2_1.pdf" %} and {% labdoc "QC_Log_Vertical_Validation.pdf" %} — July 2026
