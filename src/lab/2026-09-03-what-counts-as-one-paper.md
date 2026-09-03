---
layout: layouts/lab-note.njk
title: "What Counts as One Paper"
date: 2026-09-03
ai_prose: WR
project: "Post-cognition"
stage: "Writing & submission"
discipline: ["Epistemology", "Philosophy of science", "Semiotics", "Computational linguistics / NLP"]
method: ["Model evaluation / benchmarking", "Protocol design"]
description: "Running the protocol on a second model broke the extractor, and the reason it broke turned out to be an argument about the protocol itself — an argument with no place in an empirical paper. From here the programme runs on two lines."
documents:
  - file: "cammarano-post-cognitive-validation-v7.pdf"
    label: "Ontology Precedes Epistemology — working paper"
    version: "v7"
    id: "paper-draft"
  - file: "batch_exp1_openai.py"
    label: "EXP-1 multi-model control — runner"
  - file: "exp1_raw.json"
    label: "EXP-1 — sixty raw outputs, second arm"
  - file: "exp1_run_log.json"
    label: "EXP-1 — run log"
  - file: "system_prompt.txt"
    label: "Vertical validation — system prompt, both arms"
---

On 31 August I ran the validation protocol on a second model. Two claims, thirty replications each, the same system prompt and the same user template as the first arm, reasoning effort set to none so that the model generated directly. Sixty calls, no skips. The point of the exercise was narrow: to find out whether the distance between lexical and semantic agreement was a property of autoregressive generation or a property of `claude-sonnet-4-6`.

The extractor failed on seventeen of the sixty outputs.

The failure was not a bug. The label-first rule reads a verdict from the head of the Esito cell, and it works on the first arm because the outputs of `claude-sonnet-4-6` open that cell with a verdict label — FALSO, SOSPESO, PARZIALMENTE VERO. The second model opens it with a sentence. Nine outputs begin with *non validato*, a construction the coding manual's lexicon does not contain. Eight begin with *difendibile*, *validabile* or *validità condizionata*, likewise absent. In six of the nine first cases the negation window I had introduced in July to repair a different failure reached across a slash and discarded the one lexicon term that was present. **A correction made in July broke under a vocabulary the July revision had never seen.**

I could have repaired it in twenty minutes. Add the missing terms, narrow the window, rerun. I did not, and the reason is the reason this note exists. Extending a classifier's lexicon after inspecting the outputs it failed on is a fit to those outputs. **Any agreement rate obtained that way measures the fit, not the model.** So the semantic agreement rate for the second arm is declared pending rather than estimated, and it will come from the blind coding, under one scheme and one coder with model identity concealed.

That much is methodological hygiene. What followed is not.

The first arm produced verdict labels with high consistency across 180 runs, and nothing in the system prompt asked for them. The prompt specifies a row and leaves the slot empty. **The labels were supplied by the model.** Which means the extraction rule that produced every semantic agreement figure in the paper depends on an output convention of the model being measured. I had described post-cognition as external — a property of the validation protocol applied by an observer, not of the agent that produced the claim. That description holds for the classification scheme. It does not hold for the procedure that reads outputs into it.

The obvious repair is to enumerate the admissible verdict labels in the prompt. Comparability is restored, the rule transfers, and the problem disappears. **It also buys an instrument that returns the same result on every model, which is an instrument blind to the differences between models.** Françoise Bastide's analysis of scientific texts is useful here: a result is produced by a configuration of actants, not by one agent operating on another. The configuration in this case has three terms — the rules, the model responding under them, and me. Asking whether such a configuration is external in an absolute sense is a malformed question. Externality is a relation among the three terms, and variation between arms is not noise to be tuned away. It is what the apparatus is for. The criterion of quality shifts from the transferability of a rule set to its well-formedness: if the rules are well formed, what varies between models is attributable to the models.

I wrote that argument into §7.6 of the v7 draft, and then spent a fortnight failing to make the draft hold together around it.

The reason is now obvious to me and was not obvious then. That argument is philosophy. It is about what a protocol is, what it means for one to stand outside the system it measures, and what a research programme should want from an instrument. It is not a finding about flag rates, and it does not belong in the same document as a table of flag rates. Every attempt to keep both in one paper produced a text that asked its reader to hold two different kinds of attention at once and rewarded neither.

Once I saw it there, I saw it everywhere else in the draft. The three falsifiable claims on the front page of this site have been two papers for months. The first — that disagreement between runs is lexical rather than epistemic — is a measurement. The second — that fixing the type of a claim before evaluating it changes what the evaluation finds — is an experiment, and one I have not yet run. The third — that a model can report on its own internal states and still not classify the epistemic type of its own assertions, which is why the check has to come from outside — is an argument. **Measurements and experiments are answerable to data and to a coding protocol. Arguments are answerable to other arguments.** I had been asking one document to be accountable to both, and the seams were showing long before the second model made them visible.

**So the working paper closes at v7, and the programme continues on two lines.**

The first is the ontological line. It carries the principle that gives the programme its name, the seven-dimensional taxonomy, the asymmetric procedure for causal claims, the narrow premise about epistemic self-classification that replaced the flat one in July, and the actantial argument of §7.6. It is close to finished and it is the line whose literature I control best, which is not a coincidence: it is the line I have actually been writing all along. Its versions will be numbered from α1.

The second is the empirical line: the vertical validation, the multi-model control, the blind coding that is still outstanding, and the uplift experiment, which is pre-registered and still unexecuted. It carries the claim that matters most and is furthest from being settled — whether classifying a claim's type before evaluating it changes what the evaluation finds, or merely changes how the output is dressed. Its versions will be numbered from β1. It is not close to finished, and I would rather say so than let a philosophical paper carry it across the line by association.

The split costs something, and I would rather name the cost than pretend it is all gain. The unified draft had one real advantage: architecture and measurement in the same place, so that a reader could see the taxonomy do work rather than take my word that it would. Split apart, the ontological paper has to earn its case on the strength of the argument, with the corpus reduced to what it always was — illustration, not validation, conducted by a single annotator who also wrote the taxonomy. That is a harder paper to write. It is also a more honest one, and it removes the easiest objection a referee can make.

There is a version of this note that presents the reorganisation as a plan I had all along. I did not. I ran a control expecting a number, got a broken classifier instead, and the classifier turned out to be telling me something about the shape of the work rather than about the second model. That is the third time in this programme that an instrument failure has produced the most useful result of the month, which is either a good sign about the method or a bad sign about the instruments. I have not decided which.

Documents: {% labdoc "cammarano-post-cognitive-validation-v7.pdf", "the working paper, v7" %}, {% labdoc "cammarano-post-cognitive-validation-backmatter-v6.pdf", "its back matter, still at v6" %}, and {% labdoc "cammarano-coding-manual-v2-1.pdf", "the coding manual, v2.1" %}. The second arm is deposited entire: {% labdoc "batch_exp1_openai.py", "the runner" %}, {% labdoc "exp1_raw.json", "the sixty raw outputs" %}, {% labdoc "exp1_run_log.json", "the run log" %} and {% labdoc "system_prompt.txt", "the system prompt used by both arms" %}.
