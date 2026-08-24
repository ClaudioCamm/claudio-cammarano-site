---
layout: layouts/lab-note.njk
title: "Vertical Validation — 180 API runs and the 74-point gap"
date: 2026-02-28
ai_prose: WR
ai_scope: [FM]
project: "Post-cognition"
stage: "Empirical validation"
discipline: ["Computational linguistics / NLP", "Statistics"]
method: ["Quantitative analysis", "Statistical modeling"]
description: "180 API runs across six claims reveal a 74-point gap between lexical and semantic agreement."
documents:
  - file: "batch_validazione.py"
    label: "Script — Batch Validazione (Anthropic API)"
  - file: "analisi_varianza.py"
    label: "Script — Analisi della Varianza"
    version: "v1"
    id: "variance-script"
---

The quantitative core of the project is a two-level replication design: six claims, thirty API runs each, identical prompt, automated via Python batch script.

The six claims were selected to maximize ontological diversity: "I vaccini causano l'autismo" (D1.1 Historical-Empirical), "Il vegetarianismo è eticamente superiore" (D1.7 Normative-Ethical), "Bitcoin raggiungerà $100k entro il 2026" (D1.8 Predictive), "La Prima Guerra Mondiale fu causata dall'assassinio di Francesco Ferdinando" (D1.3/D4.3 Causal), "La coscienza è irriducibile alla materia" (D1.10 Metaphysical), "Il fumo causa il cancro ai polmoni" (D1.1/D4.3 Causal-Empirical).

The principal quantitative finding is a 74-point gap between two agreement metrics:

- ARlex (Lexical Agreement Rate) = 4.44% — the proportion of replications producing identical surface text
- ARsem (Semantic Agreement Rate) = 78.33% — the proportion of replications producing equivalent verdicts after coding

Mean pairwise Jaccard similarity: J̄ = 0.340. Composite index: IC = 0.605.

The gap is the finding. Surface-level variance — which looks like inconsistency — masks high semantic convergence. An LLM that produces thirty different textual responses to the same prompt is not thirty times unreliable; it may be converging on the same epistemic conclusion through thirty different linguistic paths. Distinguishing these two phenomena requires a framework. That is what this project provides.

Infrastructure: {% labdoc "batch_validazione.py" %}, {% labdoc "analisi_varianza.py" %}, Anthropic API, `caffeinate -i` wrapper for long background runs.
