---
layout: layouts/lab-note.njk
title: "Coding Manual v2.0 — The annotation protocol for reproducibility"
date: 2026-02-20
project: "Post-cognition"
stage: "Protocol development"
discipline: ["Epistemology", "Computational linguistics / NLP"]
method: ["Annotation / inter-annotator agreement", "Protocol design"]
description: "Fifteen variables (V1–V15) operationalize the taxonomy into a reproducible annotation protocol."
documents:
  - file: "Coding_Manual_v2_0.pdf"
    id: "coding-manual"
    label: "Coding Manual v2.0 — Protocollo di Annotazione"
    version: "2.0"
---

Taxonomy without operationalization is philosophy. The Coding Manual translates the framework into a reproducible annotation protocol — the document that tells a human annotator exactly what to extract from an LLM-generated validation, variable by variable.

Coding Manual v2.0 unifies three prior documents: the original v1.0, the D4.3 Addendum (causal asymmetry), and Pre-Step 0 (illocutionary act check). It covers fifteen variables (V1–V15), from replication ID and verdict to top-three arguments, cited sources, quantitative values, and normative frameworks.

A few design decisions worth noting:

Arguments are paraphrased, never copied verbatim. The variable captures the logical structure, not the surface phrasing — which is precisely the distinction the broader project aims to make.

Confidence is coded as an integer (0–100) only when explicitly stated by the model. Imputed confidence is not coded.

NA_ILLOCUTORIO is the only verdict that permits a null value for most other variables. All other verdicts require full extraction.

The manual also specifies when to pause and escalate: if the first ten replications of any claim show less than 30% verdict agreement, the protocol is suspended and the principal investigator is consulted before continuing.

Document: {% labdoc "Coding_Manual_v2_0.pdf" %} — February 2026
