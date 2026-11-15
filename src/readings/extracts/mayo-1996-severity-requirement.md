---
# Extract: un testo autonomo dentro un'opera. Formule e righe sono
# riformulazioni di Claudio, non citazioni.
kind: extract
slug: severity-requirement
zotero: GK3UCKC6
status: drafted
title: "The severity requirement"
where: "ch. 6, §6.2"
pages: "178–183"
book_range: [177, 183]
statement: "Evidence counts for a hypothesis only if it fits the hypothesis *and* the test that produced it would very probably have gone the other way, had the hypothesis been false."
notation: "Each line restated in my notation. *P(… ; H false)* reads “the probability of …, in trials where H is false”: a frequency of the test, not a degree of belief in H."
groups:
  - name: "Two requirements"
    rows:
      - id: "a"
        name: "Fit"
        formula: "H fits e"
        reading: "The minimum every approach shares: the outcome is what H would lead you to expect. How “fit” is measured can vary with the problem."
      - id: "b"
        name: "Good test"
        formula: "e is evidence for H ⇔ H fits e ∧ T is severe for H"
        reading: "Having evidence for H and having passed a good test of H are the same thing. So “a poor test, but still evidence” is ruled out."
  - name: "The severity criterion, four equivalent forms"
    rows:
      - { id: "1a", name: "Pass, high", formula: "P(no pass as good as e ; H false) ≈ 1", reading: "Had H been false, the test would very probably not have passed it this well." }
      - { id: "1b", name: "Pass, low", formula: "P(a pass as good as e ; H false) ≈ 0", reading: "The same, stated as the improbability of the pass." }
      - { id: "2a", name: "Fit, high", formula: "P(a worse fit ; H false) ≈ 1", reading: "Restated in terms of fit instead of pass." }
      - { id: "2b", name: "Fit, low", formula: "P(so good a fit ; H false) ≈ 0", reading: "The a forms speak of the test’s power to catch a false H; the b forms of how rarely it misses." }
  - name: "The simplest case"
    rows:
      - { id: "SC*", name: "Pass–fail test", formula: "P(T fails H ; H false) ≈ 1", key: true, reading: "With a cut-off, every test becomes pass or fail. Too coarse to judge one result, but the form to keep in mind: re-cut the scores at the one obtained and the general criterion follows." }
scale:
  caption: "Severity runs from 0 to 1. The two ends are limits; the exam is Mayo’s own example."
  points:
    - { at: 0, label: "0", name: "Zero severity", note: "would pass H even if false: no test at all" }
    - { at: 0.40, label: ".40", name: "Exam T2", note: "fails 40% of under-prepared students" }
    - { at: 0.99, label: ".99 · 1", name: "Exam T1 · maximum", note: "passing it is good evidence; at 1, passing entails H", right: true }
  note: "Passing a zero-severity test does not make H false. It only gives no reason to accept it: one can be right for the wrong reasons."
claims: []
---
