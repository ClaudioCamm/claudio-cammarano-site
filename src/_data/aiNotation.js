/**
 * Notazione dell'intervento AI.
 *
 * Fonte unica delle etichette dei codici: la legenda del colophon, i `title`
 * attribute in pagina e i messaggi della validazione di build attingono tutti
 * da qui. Aggiungere un codice significa modificare questo file e nient'altro.
 *
 * La notazione misura quanta della superficie pubblicata è passata dal modello,
 * non il peso intellettuale del contributo.
 *
 * Vedi /colophon/#notazione e il saggio «La formula dell'autenticità».
 */

module.exports = {

  // Data di attivazione (ISO). I pezzi anteriori non sono retrodatati e la
  // validazione di build non chiede loro il campo `ai_prose`.
  activeFrom: "2026-08-23",

  // Certificazione retroattiva. La notazione è stata introdotta il 23 agosto
  // 2026 e applicata anche all'archivio: i pezzi anteriori portano un codice
  // ricostruito a posteriori, e la cosa è dichiarata sotto ogni pezzo.
  retro: {
    onLabel: { it: "23 agosto 2026", en: "23 August 2026" },
    note: {
      it: "Codice attribuito retroattivamente il 23 agosto 2026, all'introduzione della notazione: è una ricostruzione dichiarata, non una registrazione in presa diretta.",
      en: "Code assigned retrospectively on 23 August 2026, when the notation was introduced: a declared reconstruction, not a real-time record."
    }
  },

  // Path del saggio che argomenta la notazione, per i rimandi nei template.
  essayUrl: "/writings/2026-08-23-la-formula-dellautenticita/",
  essayTitle: "La formula dell'autenticità",

  // ─── PRIMO ASSE — su quanta prosa. Obbligatorio, valore singolo. ───────────
  proseOrder: ["00", "DL", "ED", "WR"],
  prose: {
    "00": {
      label: { it: "Nessun intervento", en: "None" },
      desc: {
        it: "Nessun uso di modelli linguistici oltre il correttore ortografico.",
        en: "No use of language models beyond the spellchecker."
      }
    },
    "DL": {
      label: { it: "Dialogo", en: "Dialogue" },
      desc: {
        it: "Discussione preliminare, brainstorming, ricerca e verifica condotti in conversazione con un modello. Il testo è mio dalla prima riga.",
        en: "Preliminary discussion, brainstorming, research and fact-checking conducted in conversation with a model. The text is mine from the first line."
      }
    },
    "ED": {
      label: { it: "Editing", en: "Editing" },
      desc: {
        it: "Testo interamente scritto da me e sottoposto a revisione assistita.",
        en: "Text written entirely by me, then revised with assistance."
      }
    },
    "WR": {
      label: { it: "Scrittura", en: "Writing" },
      desc: {
        it: "Prima stesura generata su mie indicazioni e sui miei materiali, poi riscritta ed editata da me.",
        en: "First draft generated from my instructions and my materials, then rewritten and edited by me."
      }
    }
  },

  // ─── SECONDO ASSE — su quali apparati. Facoltativo, cumulabile. ────────────
  scopeOrder: ["FM", "TR"],
  scope: {
    "FM": {
      label: { it: "Formalizzazione", en: "Formalisation" },
      desc: {
        it: "Costruzione assistita di apparati tecnici — formule, modelli, codice, tabelle — che entrano nel testo pubblicato.",
        en: "Assisted construction of technical apparatus — formulas, models, code, tables — appearing in the published text."
      }
    },
    "TR": {
      label: { it: "Traduzione", en: "Translation" },
      desc: {
        it: "Adattamento assistito da o verso l'inglese di un testo già mio.",
        en: "Assisted adaptation from or into English of a text already mine."
      }
    }
  },

  // Nota di metodo in coda alle note del Lab (sezione in inglese).
  labMethodNote: {
    it: "L'apparato formale di questa nota è stato costruito in dialogo con un modello linguistico e verificato riga per riga. La verifica è la parte che conta: nessun passaggio è stato accettato sulla base dell'autorevolezza apparente dell'output.",
    en: "The formal apparatus of this note was built in dialogue with a language model and verified line by line. The verification is the part that counts: no step was accepted on the strength of the output's apparent authority."
  },

  // Dichiarazione in testa alla pagina indice dei Curated.
  curatedDeclaration: {
    it: "I testi di questa sezione seguono un metodo costante. La selezione del materiale e la chiave di lettura sono mie e precedono la stesura; la prima stesura è generata da un modello a partire da quelle indicazioni; l'editing e la validazione finale sono miei. Il codice <code>WR</code> che accompagna ogni pezzo dichiara la superficie di prosa passata dal modello, non l'origine dell'interpretazione — che in questa sezione è integralmente mia e senza la quale il pezzo non esisterebbe.",
    en: "The texts in this section follow a constant method. Material selection and interpretive framing are mine and precede drafting; the first draft is model-generated from those instructions; editing and final validation are mine. The <code>WR</code> code on each piece declares the prose surface that passed through the model, not the origin of the reading — which in this section is entirely mine, and without which the piece would not exist."
  }
};
