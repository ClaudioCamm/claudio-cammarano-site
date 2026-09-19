# Indice concettuale di claudiocammarano.com

Vocabolario dei concetti — persone, teorie, testi, istituzioni, luoghi e paesi — citati con peso argomentativo negli scritti di Claudio Cammarano su [claudiocammarano.com](https://claudiocammarano.com). Ogni voce porta una nota discorsiva, gli agganci all'entità reale su Wikidata e Wikipedia dove esistono, gli articoli in cui il concetto compare, e i legami dichiarati verso altri concetti con la ragione di ciascun legame.

**Versione 1.0.0 — 19 settembre 2026**

- Dati: <https://claudiocammarano.com/concetti.json> (JSON-LD)
- Vista navigabile: <https://claudiocammarano.com/indice/>
- Termini propri: <https://claudiocammarano.com/ns/>
- DOI: [10.5281/zenodo.22843732](https://doi.org/10.5281/zenodo.22843732)
- Licenza: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## Contenuto

| | |
|---|---|
| Concetti | 268 |
| — teorie | 113 |
| — persone | 101 |
| — istituzioni | 20 |
| — testi | 17 |
| — paesi | 10 |
| — luoghi | 7 |
| Voci con aggancio esterno (Wikidata, Wikipedia) | 169 |
| Legami dichiarati fra concetti | 66 |
| Parole di note discorsive | ~18.400 |
| Articoli referenziati | 143 |

## Schema

Il file è un documento JSON-LD con due vocabolari standard: [SKOS](http://www.w3.org/2004/02/skos/core) per lo schema di concetti e [schema.org](https://schema.org/) per la coerenza con il markup delle pagine del sito.

L'oggetto radice è insieme `skos:ConceptScheme`, `schema:DefinedTermSet` e `schema:Dataset`, con `name`, `description`, `version`, `dateModified`, `license`, `creator` (con ORCID), `keywords`, `distribution` e un blocco `cc:statistics`.

Ogni voce in `hasDefinedTerm` è insieme `skos:Concept` e `schema:DefinedTerm`:

| Campo | Significato |
|---|---|
| `@id` | IRI della voce, nella forma `…/concetti/<slug>/#term` |
| `prefLabel`, `name` | etichetta della voce |
| `termCode` | slug, stabile e uguale a quello dell'URL |
| `cc:type` | tipo editoriale della voce (vedi sotto) |
| `note`, `description` | la nota discorsiva, integrale |
| `url` | la pagina della voce sul sito |
| `inScheme`, `inDefinedTermSet` | lo schema a cui appartiene |
| `exactMatch` | Q-id Wikidata e voce Wikipedia, quando l'aggancio è certo |
| `about` | l'entità reale tipizzata (`Person`, `Organization`, `Place`, `Country`, `CreativeWork`) con il suo `sameAs` |
| `subjectOf` | gli articoli in cui la voce compare |
| `related` | i legami in forma SKOS nuda |
| `cc:relatedTerm` | gli stessi legami con la ragione |

### I tre termini propri

Tre cose che servono a questo indice non hanno un termine in SKOS né in schema.org, e sono dichiarate nel namespace `https://claudiocammarano.com/ns#`, dereferenziabile su <https://claudiocammarano.com/ns/>:

- **`cc:type`** — il tipo editoriale della voce: `persona`, `teoria`, `testo`, `istituzione`, `luogo`, `paese`. È una classificazione interna al sito, non un'affermazione ontologica.
- **`cc:relatedTerm`** e **`cc:Link`** — un legame dichiarato fra due voci. `skos:related` esprime la relazione ma non ha spazio per motivarla, e la motivazione è la parte che porta l'informazione. Ogni legame è quindi reificato in un nodo `cc:Link` con `cc:target` e `cc:why`.
- **`cc:why`** — la ragione del legame, entro 160 caratteri, scritta come relazione e non come direzione: l'arco è dichiarato una volta sola e compare su entrambe le pagine.

Gli stessi legami sono ripetuti in forma nuda in `skos:related`, così un consumatore che conosce solo SKOS li vede comunque.

## Metodo e provenienza

I dati sono generati a build time da `src/_data/conceptsIndex.js`, che è la fonte di verità del sito: il file JSON non è mantenuto a mano e non può divergere dalle pagine.

**Agganci esterni.** Un aggancio a Wikidata è stato accettato solo con corrispondenza esatta di label o alias **e** tipo (`P31`) compatibile, poi verificato voce per voce contro la nota. Un Q-id sbagliato è peggio di nessun Q-id, perché afferma in forma leggibile dalle macchine un'identità falsa: le 92 voci senza aggancio sono coniazioni proprie, acronimi e casi in cui il candidato trovato era l'entità sbagliata.

**Legami.** I candidati sono stati calcolati sull'affinità lessicale fra le note (TF-IDF), non sulla co-occorrenza fra articoli: un legame che si limitasse a registrare due concetti comparsi nello stesso pezzo non aggiungerebbe nulla a quanto il sito già calcola. Il criterio di accettazione è stato se le due note si nominino a vicenda. 78 coppie proposte, 48 accettate, una aggiunta a mano.

**Intervento di modelli linguistici.** L'impianto del dataset, i candidati e la prima stesura delle ragioni dei legami sono stati prodotti in dialogo con un modello linguistico; la selezione, la correzione e la validazione finale sono dell'autore. Le note discorsive delle voci seguono la stessa divisione del lavoro. Il sito adotta una notazione esplicita dell'intervento AI sui pezzi pubblicati, documentata su <https://claudiocammarano.com/colophon/#notazione>; questo dataset ricadrebbe sotto il codice `WR` di quella notazione.

## Limiti dichiarati

- 99 voci su 268 non hanno `exactMatch`: sono coniazioni proprie, acronimi, o casi in cui il candidato trovato era l'entita' sbagliata.
- I legami coprono 100 voci su 268: 32 concetti presenti in piu' di un articolo e 136 presenti in uno solo non hanno ancora legami dichiarati.
- Il grafo visibile sul sito (`/mappa/`) disegna sia la co-occorrenza fra articoli sia i legami dichiarati, distinti nel tratto; il file qui depositato contiene i soli legami dichiarati.
- Le note sono scritte in italiano e dal punto di vista del sito: dicono come un concetto e' usato in questo corpus, non che cosa il concetto sia in generale.

## Citazione

> Cammarano, C. (2026). *Indice concettuale di claudiocammarano.com* (versione 1.0.0) [Dataset]. Zenodo. CC BY 4.0. https://doi.org/10.5281/zenodo.22843732

Vedi anche `CITATION.cff` in questa cartella.
