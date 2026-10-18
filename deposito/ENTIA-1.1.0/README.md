# ENTIA 1.1.0

**Epistemic Notation for Texts In Archives** — notazione editoriale a cinque
strati per archivi curati: dichiara, pezzo per pezzo, che cosa quel pezzo è per
chi lo tiene.

Autore: Claudio Cammarano (ORCID [0009-0006-3690-7466](https://orcid.org/0009-0006-3690-7466))
Licenza: CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/deed.it
Versione viva della specifica: <https://claudiocammarano.com/entia/>
Rilievo: 2026-10-11, su 215 schede.

## Che cosa c'è qui

| File | Che cos'è |
|---|---|
| `ENTIA-1.1.0.pdf` | la specifica, in forma leggibile |
| `ENTIA-1.1.0.md` | la stessa specifica in markdown, da cui è composto il PDF |
| `ENTIA-1.1.0-en.pdf` | la parte normativa in inglese |
| `ENTIA-1.1.0-en.md` | la stessa, in markdown. Non traduce il documento italiano: tiene il normativo e lascia a quello le misure su questo archivio |
| `entia.json` | il vocabolario in JSON-LD/SKOS: strati, funzioni, temi, argomenti, concetti, regole, condizioni d'uso |
| `criteri.json` | le sei funzioni come le usa il sito: la fonte da cui nascono le badge |
| `entia-corpus.csv` | 288 pezzi con le loro assegnazioni, e **due date**: quella della fonte e quella di curatela |
| `entia-mappa.html` | la mappa a cinque strati, interattiva, autosufficiente (si apre in un browser, non chiede rete) |
| `figure/deriva-funzioni.svg` | schede curate per mese, divise per funzione |
| `figure/ricostruibilita.svg` | quanta parte di ogni funzione sta nel testo della scheda |
| `CITATION.cff` | come citare |

## Le due date, e perché sono due

`data_fonte` è quando il materiale è stato pubblicato dal suo autore;
`data_curatela` è quando è entrato in questo archivio, ricavata dal primo
commit che ne ha aggiunto il file. La prima dice quanto sono vecchi i materiali,
la seconda come è cresciuto l'archivio. Le figure e il filtro temporale della
mappa usano la seconda.

## Come citare

> Cammarano, C. (2026). *ENTIA 1.1.0 — Epistemic Notation for Texts In Archives*. Zenodo.

Il dataset dei concetti sta a parte: [10.5281/zenodo.22843731](https://doi.org/10.5281/zenodo.22843731).

## Dichiarare l'uso di ENTIA

La licenza chiede soltanto la citazione. Dire di *usare ENTIA* è un'altra cosa
e ha quattro condizioni, elencate nella specifica: pubblicare le assegnazioni
con le loro date, pubblicare il profilo delle funzioni e il periodo, dichiarare
i disaccordi fra regola e giudizio invece di correggerli in silenzio, versionare
la propria copia dicendo da quale versione discende e quali parametri sono stati
cambiati.

Si sostituiscono il vocabolario e i parametri — temi, argomenti, concetti, nomi
delle funzioni, coefficienti del peso. Non si cambiano il numero degli strati, il
loro ordine, la precedenza fra le funzioni e l'obbligo di esporre il residuo.

## Riprodurre questo pacchetto

```
npm ci
npm run curatela     # date di curatela dalla storia del repository
npm run build        # il sito, da cui si estrae la mappa interattiva
npm run deposito     # questa cartella
```

Il PDF si compone con pandoc e xelatex a partire da `ENTIA-1.1.0.md`.
