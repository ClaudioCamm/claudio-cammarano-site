# Metadati per il deposito su Zenodo

Da compilare nel form di <https://zenodo.org/uploads/new>. **Il caricamento lo fa Claudio dal proprio account**: nessun agente può creare o usare account a suo nome.

**File da caricare**: `concetti.json` (scaricato da <https://claudiocammarano.com/concetti.json>), `README.md` e `CITATION.cff` di questa cartella.

| Campo Zenodo | Valore |
|---|---|
| Resource type | Dataset |
| Title | Indice concettuale di claudiocammarano.com |
| Authors | Cammarano, Claudio — ORCID 0009-0006-3690-7466 |
| Description | *vedi sotto* |
| Version | 1.0.0 |
| Publication date | 2026-09-19 |
| Language | Italian |
| License | Creative Commons Attribution 4.0 International (CC BY 4.0) |
| Keywords | indice concettuale; concept index; SKOS; JSON-LD; editoria; epistemologia; intelligenza artificiale; semiotica |
| Related identifiers | `https://claudiocammarano.com/indice/` (is documented by) · `https://github.com/ClaudioCamm/claudio-cammarano-site` (is supplement to) |

## Description da incollare

Vocabolario di 268 concetti — persone, teorie, testi, istituzioni, luoghi e paesi — citati con peso argomentativo negli scritti di Claudio Cammarano su claudiocammarano.com. Ogni voce porta una nota discorsiva, gli agganci all'entità reale su Wikidata e Wikipedia dove esistono (169 voci su 268), gli articoli in cui il concetto compare, e 66 legami dichiarati verso altri concetti, ciascuno con la ragione del legame.

Il formato è JSON-LD con due vocabolari standard: SKOS per lo schema di concetti e schema.org per la coerenza con il markup delle pagine. Tre termini propri — il tipo editoriale della voce e la coppia che reifica la ragione di un legame — sono dichiarati e dereferenziabili su https://claudiocammarano.com/ns/.

Un aggancio esterno è stato accettato solo con corrispondenza esatta di etichetta o alias e tipo compatibile, poi verificato voce per voce contro la nota. I limiti del dataset sono dichiarati nel README.

## Dopo il deposito

1. Riportare il DOI nel `README.md` di questa cartella e in `src/llms.njk`, sezione «File espansi».
2. Aggiungere il record al profilo ORCID (Zenodo lo può fare da solo se l'account è collegato).
3. Per le versioni successive usare «New version» sullo stesso record, così il DOI concettuale resta stabile e ogni versione ne ottiene uno proprio.
