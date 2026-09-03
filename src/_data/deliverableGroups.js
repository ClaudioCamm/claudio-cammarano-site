/**
 * Raggruppamento dei materiali depositati, per la pagina /en/deliverables/.
 *
 * I documenti del Lab si dichiarano nel frontmatter delle note (vedi
 * MANUALE.md §3). Questo file dice soltanto in quale sezione della pagina
 * dei deliverables ciascuno va a finire, e non tocca ne' le note ne' il
 * Learning Log.
 *
 * Come si assegna un gruppo, in quest'ordine:
 *   1. `byId`   — vale per tutta la catena di versioni con quell'`id`
 *   2. `byFile` — per i documenti che non hanno un `id`
 *   3. `byExt`  — rete di sicurezza: un deposito nuovo non sparisce mai,
 *                 finisce nel gruppo dell'estensione
 *
 * Aggiungendo un documento nuovo non e' obbligatorio toccare questo file:
 * conviene farlo solo se la rete di sicurezza lo mette nel posto sbagliato.
 */

module.exports = {
  // Ordine di apparizione delle sezioni in pagina.
  order: ["paper", "framework", "corpus", "code", "bibliography"],

  labels: {
    paper:        "The paper",
    framework:    "The framework",
    corpus:       "Corpus and record",
    code:         "Code, prompts and raw data",
    bibliography: "Bibliography"
  },

  notes: {
    paper:        "The unified working paper ran from v1 to v7 and is closed. Every version stays where it was published.",
    framework:    "The taxonomy and the annotation protocol that applies it. The coding manual is additive across versions: no rule applied in the horizontal validation was later revised.",
    corpus:       "The claims, the annotations and the quality-control record — including the audit that failed.",
    code:         "Everything needed to run the two arms again and to re-extract the figures from the raw outputs.",
    bibliography: "The working bibliography, which grew with the drafts."
  },

  byId: {
    "paper-draft":      "paper",
    "paper-backmatter": "paper",
    "coding-manual":    "framework",
    "variance-script":  "code",
    "bibliography":     "bibliography"
  },

  byFile: {
    "tassonomia_completa_v2_2.pdf":   "framework",
    "archivio_31_validazioni_v4.pdf": "corpus",
    "campione_cieco_18.md":           "corpus",
    "QC_Log_Vertical_Validation.pdf": "corpus",
    "batch_validazione.py":           "code",
    "batch_exp1_openai.py":           "code",
    "system_prompt.txt":              "code",
    "exp1_raw.json":                  "code",
    "exp1_run_log.json":              "code"
  },

  byExt: {
    ".pdf":  "corpus",
    ".py":   "code",
    ".json": "code",
    ".txt":  "code",
    ".md":   "corpus",
    ".bib":  "bibliography"
  }
};
