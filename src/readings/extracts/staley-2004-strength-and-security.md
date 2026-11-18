---
# Extract: un testo autonomo dentro un'opera. Formule e righe sono
# riformulazioni di Claudio, non citazioni.
kind: extract
slug: strength-and-security
zotero: 3FRG2VW7
status: drafted
title: "Strength of evidence and security of evidence claims"
where: "§4"
pages: "470–471"
book_range: [470, 471]
statement: "How strongly a result indicates a hypothesis is one question; how exposed the claim “this result is evidence for H” is to the failure of an auxiliary assumption is another. Robustness may not answer the first, but it can answer the second."
table_title: "The two dimensions, line by line"
notation: "Each line restated in my notation. *e ▷ H* reads “e is evidence for H”; *A* is any auxiliary assumption the claim rests on (theory of the experiment, apparatus, recording, interpretation of the data)."
groups:
  - name: "Two dimensions of an evidence claim"
    rows:
      - id: "S"
        name: "Strength"
        formula: "str(e ▷ H)"
        reading: "How strongly e indicates H. Usually said in words (suggestive, compelling, conclusive); significance levels, chi-squared fits and likelihood ratios give partial numbers, not the confirmation measure philosophers looked for."
      - id: "Sec"
        name: "Security"
        formula: "sec(e ▷ H) = resistance of e ▷ H to the failure of some A"
        key: true
        reading: "Not how strong the evidence is, but how likely the claim that it is evidence is to be defeated by an assumption that turns out false."
  - name: "Why security is a separate question"
    rows:
      - { id: "U", name: "Used, not tested", formula: "str(e ▷ H) is computed given A", reading: "The assumptions serve in the evaluation of strength and are not evaluated in the same step." }
      - { id: "F", name: "Fallible", formula: "confidence in A ≠ A true", reading: "Even absolute confidence in an assumption could be misplaced. That is the only reason security matters, and it is reason enough." }
  - name: "Two questions to ask of each assumption"
    rows:
      - { id: "Q1", name: "Support", formula: "how strong is the evidence for A?", reading: "Security grows if the claim rests on assumptions that are themselves very well supported." }
      - { id: "Q2", name: "Sensitivity", formula: "how much does e ▷ H depend on A?", reading: "Security also grows if the claim rests on A lightly, so that its failure would weaken the claim rather than destroy it." }
      - { id: "Q", name: "Two routes", formula: "sec ↑ ⇐ evidence for A ↑ ∨ dependence on A ↓", key: true, reading: "The second route counts even when the first looks settled, because the judgement that A is well supported can itself be wrong." }
  - name: "Where robustness comes in"
    rows:
      - { id: "R1", name: "Stronger?", formula: "robust ⇒ stronger : open", reading: "Two statistically equivalent results, one from several experiments resting on different assumptions, one from a single experiment: whether the first is stronger evidence, Staley leaves unresolved." }
      - { id: "R2", name: "More secure", formula: "robust ⇒ more secure, under conditions", reading: "The thesis of the paper: robustness can answer either question, and guard against at least two kinds of error." }
claims: []
---
