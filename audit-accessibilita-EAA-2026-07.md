# Valutazione accessibilità — claudiocammarano.com

Data: 7 luglio 2026
Metodo: revisione statica del codice sorgente (Eleventy/Nunjucks, CSS), confronto con WCAG 2.1 AA (lo standard tecnico richiamato da EN 301 549, base dell'EAA). Non è stata eseguita una scansione automatica sul sito live né un test con screen reader.

## Il sito rientra nell'EAA?

Probabilmente no, come obbligo di legge. L'European Accessibility Act (in vigore dal 28 giugno 2025) copre categorie specifiche: e-commerce, servizi bancari, e-book, biglietteria, trasporti, telecomunicazioni e servizi digitali B2C con transazioni. claudiocammarano.com è un sito editoriale personale — writings, learning log, portfolio — senza vendite, abbonamenti o transazioni gestite sul sito stesso (la newsletter rimanda a Substack, esterno). Non risulta quindi un "prodotto o servizio" nell'elenco coperto dall'EAA.

Questo non significa che l'accessibilità non conti: resta buona pratica, migliora SEO e usabilità, e se in futuro il sito integrasse vendite (es. libri, corsi, consulenza Episteme Advisory a pagamento) il discorso cambierebbe. La valutazione che segue usa WCAG 2.1 AA come riferimento tecnico, indipendentemente dall'obbligo legale.

## Cosa funziona già bene

Il sito ha una base solida: `lang` dinamico per pagina (it/en), landmark `<main>` e `<nav>` corretti, `aria-label` su pulsanti icona (ricerca, menu, condividi, torna su), `aria-expanded`/`aria-controls` sul toggle del menu mobile, immagini con `alt` testuali descrittivi e non generici, `rel="noopener"` sui link esterni, breadcrumb con `aria-label`, contrasto testo principale molto buono (testo su sfondo: rapporto 14–16:1, ben oltre il minimo 4.5:1).

## Problemi rilevati

**Assenza di skip link.** Non c'è un link "salta al contenuto" prima della navigazione. Chi naviga da tastiera deve attraversare tutto il menu ad ogni pagina. Criterio WCAG 2.4.1.

**Focus da tastiera rimosso su due campi di ricerca.** In `style.css` righe 169-172 e 4099-4102, `:focus { outline: none; }` è sostituito solo da un cambio colore del bordo (1px). È un indicatore di focus debole, difficile da notare per chi ha bassa vista o naviga da tastiera. Criterio WCAG 2.4.7 / 2.4.11.

**Colore "hint" a basso contrasto.** La variabile `--color-text-hint` (#999 su sfondo bianco, #5a5856 su sfondo scuro) ha un rapporto di contrasto di 2.6–2.85:1, sotto il minimo 4.5:1 per testo normale. Al momento la variabile non risulta usata nel CSS attivo, quindi il rischio è solo potenziale — ma va rimossa o corretta prima di essere riutilizzata.

**Link che aprono nuove schede senza avviso.** Diversi link (`target="_blank"`, es. LinkedIn, Substack, loghi in about.njk) non segnalano testualmente che si apre una nuova scheda. Non bloccante ma raccomandato da WCAG 3.2.5.

**Nessun supporto a `prefers-reduced-motion`.** Lo scroll fluido e le animazioni (menu condividi, torna su, barra di progresso) non si disattivano per chi ha impostato "riduci animazioni" nel sistema. Non obbligatorio in AA ma buona pratica raccomandata.

**PDF scaricabili non verificati.** La cartella `downloads/` contiene diversi PDF (materiali didattici, guide di lettura). Non è stato verificato se sono taggati/accessibili a screen reader. Se pubblicati dopo giugno 2025 e destinati al pubblico, andrebbero controllati.

## Priorità consigliate

1. Aggiungere uno skip link visibile al focus in cima a `base.njk`.
2. Ripristinare un indicatore di focus visibile (es. `box-shadow` oltre al cambio colore bordo) nei due punti indicati.
3. Rimuovere la variabile `--color-text-hint` non conforme, o correggerne il valore se verrà riutilizzata.
4. Aggiungere `@media (prefers-reduced-motion: reduce)` per disattivare scroll fluido e transizioni.
5. Verificare l'accessibilità dei PDF in `downloads/` con un controllo tag/struttura.

Nessuno dei punti sopra richiede una riscrittura strutturale: sono correzioni mirate su `base.njk`, `header.njk`/`article.njk` e `style.css`.
