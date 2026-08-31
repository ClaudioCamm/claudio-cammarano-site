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

<div class="info-box">
  <p><strong>Correction — 28 August 2026.</strong> Three things in this note need flagging, and they are wrong in different ways.</p>

  <p>The figures are superseded, not mistaken. A retrospective quality check in July 2026 found that the deposited verdict classifier was blind to negation and carried an undeclared mixed-verdict override. Re-extraction under a label-first rule moved study-level <code>ARsem</code> from 78.33% to 76.67% and the headline gap from about 74 points to about 72; the composite index moves from 0.605 to 0.596. <code>ARlex</code> (4.44%) and mean pairwise Jaccard (0.340) are unchanged. What that check found, and why the revision matters more than the numbers do, is the subject of <a href="/lab/2026-07-21-what-counts-as-a-verdict/">What Counts as a Verdict</a>. Two of the six per-claim proportions — vegetarianismo and fumo — remain pending a blind recode and are not declared here.</p>

  <p>The D1 codes were wrong when written, and wrong only here: the deposited corpus and the paper both carry the correct ones. All six claims below took an incorrect code on the primary taxonomic dimension, against a taxonomy — v2.2 — that had been published on this site three weeks earlier, and three of the category names used (Historical-Empirical, Causal-Empirical, Normative-Ethical) do not exist in it. Corrected below: vaccini D1.1 to D1.2, vegetarianismo D1.7 to D1.8, bitcoin D1.8 to D1.4, prima guerra D1.3 to D1.1, coscienza D1.10 to D1.14, fumo D1.1 to D1.2. D4.3 attaches to the three causal claims as an attributive code, not as a content type.</p>

  <p>Two claims were also misquoted. The consciousness claim reads &ldquo;La coscienza non &egrave; riducibile a processi neurali&rdquo;, not &ldquo;irriducibile alla materia&rdquo;; the second is a wider assertion, and the first is what was sent to the API in all thirty runs and what the deposited blind packet contains. The First World War claim names the assassination at Sarajevo, not Franz Ferdinand.</p>

  <p>The title of this note keeps 74 because that was the figure on this date. The errors are recorded rather than removed: a note arguing that claim type must be settled before evaluation cannot quietly repair its own claim types. Current figures: <a href="/lab/status/">Project status</a>.</p>
</div>

The quantitative core of the project is a two-level replication design: six claims, thirty API runs each, identical prompt, automated via Python batch script.

The six claims were selected to maximize ontological diversity: “I vaccini causano l’autismo” (D1.2 Empirical-Quantitative, D4.3), “Il vegetarianismo è eticamente superiore” (D1.8 Ethical-Normative), “Bitcoin raggiungerà $100k entro il 2026” (D1.4), “La prima guerra mondiale fu causata dall’assassinio di Sarajevo” (D1.1 Historical-Factual, D4.3), “La coscienza non è riducibile a processi neurali” (D1.14 Metaphysical-Ontological), “Fumare causa il cancro ai polmoni” (D1.2 Empirical-Quantitative, D4.3, D3.2).

The principal quantitative finding is a 74-point gap between two agreement metrics:

- ARlex (Lexical Agreement Rate) = 4.44% — the proportion of replications producing identical surface text
- ARsem (Semantic Agreement Rate) = 78.33% — the proportion of replications producing equivalent verdicts after coding

Mean pairwise Jaccard similarity: J̄ = 0.340. Composite index: IC = 0.605.

The gap is the finding. Surface-level variance — which looks like inconsistency — masks high semantic convergence. An LLM that produces thirty different textual responses to the same prompt is not thirty times unreliable; it may be converging on the same epistemic conclusion through thirty different linguistic paths. Distinguishing these two phenomena requires a framework. That is what this project provides.

Infrastructure: {% labdoc "batch_validazione.py" %}, {% labdoc "analisi_varianza.py" %}, Anthropic API, `caffeinate -i` wrapper for long background runs.
