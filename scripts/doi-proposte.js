#!/usr/bin/env node
/**
 * Cerca i DOI che mancano alla bibliografia unificata.
 *
 *   node scripts/doi-proposte.js                      Crossref (predefinito)
 *   node scripts/doi-proposte.js --fonte=openalex     OpenAlex
 *   node scripts/doi-proposte.js --riprendi           salta le voci gia' fatte
 *   node scripts/doi-proposte.js --applica            scrive SOLO le "alta"
 *   node scripts/doi-proposte.js --applica --anche-incerte
 *
 * Perche' due fonti. Crossref e' l'anagrafe dei DOI: li assegna lui, e per i
 * libri universitari copre meglio. OpenAlex e' un aggregatore, piu' ricco di
 * metadati ma piu' avaro di richieste. Si interroga Crossref, e se una voce
 * resta scoperta si puo' ripassare con --fonte=openalex.
 *
 * Il tranello che ha rovinato la prima passata: un libro spesso non ha DOI,
 * ma la RECENSIONE del libro si', e porta lo stesso titolo, lo stesso anno e
 * a volte lo stesso nome in testa. Titolo, anno e autore non bastano. Prima
 * di qualunque punteggio si scarta:
 *   - un tipo che e' paratesto e non opera (recensione, editoriale, erratum);
 *   - un titolo che comincia con "review of" o "reviewed work";
 *   - un @book nostro contro un articolo di rivista loro.
 * E per "alta" o "media" il cognome del primo autore deve comparire davvero
 * fra gli autori trovati.
 *
 * I DOI NON si scrivono in biblio.js, che e' generato: stanno in
 * src/_data/doi.json, che `--applica` riscrive da capo con le proposte
 * approvate. Poi: python3 scripts/fondi-bibliografia.py .
 *
 * Nessuna dipendenza, serve Node 18+. Per la corsia veloce (consigliata, ed
 * e' una scelta tua perche' manda il tuo indirizzo a un servizio terzo):
 *   CROSSREF_MAILTO=tua@email node scripts/doi-proposte.js
 *   OPENALEX_MAILTO=tua@email node scripts/doi-proposte.js --fonte=openalex
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const biblio = require(path.join(ROOT, "src/_data/biblio.js"));
const PROPOSTE = path.join(ROOT, "doi-proposte.json");
const DESTINAZIONE = path.join(ROOT, "src/_data/doi.json");

const arg = n => (process.argv.find(a => a.startsWith(`--${n}=`)) || "").split("=")[1];
const applica = process.argv.includes("--applica");
const ancheIncerte = process.argv.includes("--anche-incerte");
const riprendi = process.argv.includes("--riprendi");
const fonte = (arg("fonte") || "crossref").toLowerCase();

const TIPI_PARATESTO = new Set(["review", "editorial", "erratum", "letter", "peer-review", "paratext", "retraction", "grant"]);
const TIPI_LIBRO = new Set(["book", "book-chapter", "monograph", "reference-entry", "dissertation"]);

const spoglia = s => String(s || "")
  .normalize("NFD").replace(/[̀-ͯ]/g, "")
  .toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

const senzaSottotitolo = s => spoglia(String(s || "").split(":")[0]);

function cognome(autori) {
  const primo = String(autori || "").split(/ and /)[0].trim();
  if (!primo) return "";
  return spoglia(primo.includes(",") ? primo.split(",")[0] : primo.split(" ").pop());
}

function somiglianza(a, b) {
  const A = new Set(spoglia(a).split(" ").filter(Boolean));
  const B = new Set(spoglia(b).split(" ").filter(Boolean));
  if (!A.size || !B.size) return 0;
  let comuni = 0;
  A.forEach(w => { if (B.has(w)) comuni++; });
  return comuni / Math.max(A.size, B.size);
}

const attesa = ms => new Promise(r => setTimeout(r, ms));

// ------------------------------------------------------------------ applica
if (applica) {
  if (!fs.existsSync(PROPOSTE)) {
    console.error(`Non trovo ${path.basename(PROPOSTE)}. Lancia prima il comando senza --applica.`);
    process.exit(1);
  }
  const proposte = JSON.parse(fs.readFileSync(PROPOSTE, "utf8")).filter(p => p.doi);
  const incerte = proposte.filter(p => p.fiducia !== "alta");
  const tenute = ancheIncerte ? proposte : proposte.filter(p => p.fiducia === "alta");
  if (incerte.length && !ancheIncerte) {
    console.log(`${incerte.length} proposte non sono "alta" e NON vengono scritte.`);
    console.log(`Guardale in doi-proposte.json, cancella le sbagliate, poi --applica --anche-incerte.\n`);
  }
  const mappa = {};
  tenute.forEach(p => { mappa[p.key] = p.doi; });
  fs.writeFileSync(DESTINAZIONE, JSON.stringify(mappa, Object.keys(mappa).sort(), 2) + "\n");
  console.log(`src/_data/doi.json riscritto: ${Object.keys(mappa).length} DOI.`);
  console.log("Ora: python3 scripts/fondi-bibliografia.py .");
  process.exit(0);
}

// ------------------------------------------------------- le due interrogazioni
// Ogni candidato arriva nella stessa forma, da qualunque fonte:
// { doi, titolo, anno, tipo, sede, autori[] }

const perRicerca = t => String(t || "")
  .replace(/[{}"“”]/g, " ").replace(/[,|:;?!&]/g, " ")
  .replace(/[^\x20-\x7E]/g, " ").replace(/\s+/g, " ").trim().slice(0, 200);

async function chiama(url, tentativo, etichetta) {
  let r;
  try {
    r = await fetch(url, {
      signal: AbortSignal.timeout(20000),
      headers: { "User-Agent": "claudiocammarano.com bibliography reconciliation (Node)" }
    });
  } catch (e) {
    if (tentativo >= 3) throw new Error(e.name === "TimeoutError" ? "nessuna risposta in 20s" : e.message);
    process.stdout.write(` [rete, ritento ${tentativo + 1}/3]`);
    await attesa(3000 * tentativo);
    return null;
  }
  if (r.status === 429) {
    if (tentativo >= 3) throw new Error(`429 da ${etichetta}: limite di richieste`);
    const pausa = 5000 * tentativo;
    process.stdout.write(` [429, aspetto ${pausa / 1000}s]`);
    await attesa(pausa);
    return null;
  }
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

async function daCrossref(titolo, tentativo = 1) {
  const mailto = process.env.CROSSREF_MAILTO || "";
  let url = "https://api.crossref.org/works"
    + `?query.bibliographic=${encodeURIComponent(perRicerca(titolo))}`
    + "&rows=8&select=DOI,title,type,issued,author,container-title";
  if (mailto) url += `&mailto=${encodeURIComponent(mailto)}`;
  const d = await chiama(url, tentativo, "Crossref");
  if (d === null) return tentativo >= 3 ? [] : daCrossref(titolo, tentativo + 1);
  const TIPO = {
    "journal-article": "article", "proceedings-article": "inproceedings",
    "book": "book", "monograph": "book", "edited-book": "book", "reference-book": "book",
    "book-chapter": "book-chapter", "book-part": "book-chapter", "book-section": "book-chapter",
    "posted-content": "preprint", "report": "report", "dissertation": "dissertation"
  };
  return ((d.message && d.message.items) || []).map(x => ({
    doi: x.DOI || "",
    titolo: (x.title && x.title[0]) || "",
    anno: x.issued && x.issued["date-parts"] && x.issued["date-parts"][0] && x.issued["date-parts"][0][0],
    tipo: TIPO[x.type] || x.type || "",
    tipoGrezzo: x.type || "",
    sede: (x["container-title"] && x["container-title"][0]) || "",
    autori: (x.author || []).map(a => `${a.given || ""} ${a.family || ""}`.trim())
  }));
}

async function daOpenAlex(titolo, tentativo = 1) {
  const mailto = process.env.OPENALEX_MAILTO || "";
  let url = "https://api.openalex.org/works"
    + `?filter=title.search:${encodeURIComponent(perRicerca(titolo))}`
    + "&per-page=8&select=doi,title,publication_year,authorships,type,primary_location";
  if (mailto) url += `&mailto=${encodeURIComponent(mailto)}`;
  const d = await chiama(url, tentativo, "OpenAlex");
  if (d === null) return tentativo >= 3 ? [] : daOpenAlex(titolo, tentativo + 1);
  return (d.results || []).map(x => ({
    doi: String(x.doi || "").replace(/^https?:\/\/doi\.org\//, ""),
    titolo: x.title || "",
    anno: x.publication_year,
    tipo: x.type || "",
    tipoGrezzo: x.type || "",
    sede: (x.primary_location && x.primary_location.source && x.primary_location.source.display_name) || "",
    sedeRivista: !!(x.primary_location && x.primary_location.source && x.primary_location.source.type === "journal"),
    autori: (x.authorships || []).map(a => (a.author && a.author.display_name) || "")
  }));
}

const interroga = fonte === "openalex" ? daOpenAlex : daCrossref;

// ------------------------------------------------------------------ giudizio
function scartare(voce, c) {
  if (!c.doi) return "senza doi";
  if (TIPI_PARATESTO.has(c.tipo)) return `e' un ${c.tipo}`;
  const t = spoglia(c.titolo);
  if (!t) return "senza titolo";
  if (t.startsWith("review of") || t.startsWith("reviewed work") || t.startsWith("book review")) return "e' una recensione";
  const nostroLibro = voce.type === "book" || voce.type === "incollection";
  const suaRivista = c.sedeRivista !== undefined ? c.sedeRivista : (c.tipo === "article" && !!c.sede);
  if (nostroLibro && c.tipo === "article" && suaRivista) return "libro nostro, articolo di rivista loro";
  return null;
}

function valuta(voce, candidati) {
  const cog = cognome(voce.author || voce.editor);
  let migliore = null;
  for (const c of candidati) {
    if (scartare(voce, c)) continue;
    const s = Math.max(somiglianza(voce.title, c.titolo), somiglianza(senzaSottotitolo(voce.title), senzaSottotitolo(c.titolo)));
    const anno = parseInt(voce.year, 10);
    const scartoAnno = anno && c.anno ? Math.abs(anno - c.anno) : 99;
    const autoriOk = !!cog && c.autori.some(a => spoglia(a).includes(cog));
    const tipoOk = voce.type === "book" ? TIPI_LIBRO.has(c.tipo) : true;

    let fiducia = null;
    if (s >= 0.92 && scartoAnno <= 1 && autoriOk && tipoOk) fiducia = "alta";
    else if (s >= 0.8 && scartoAnno <= 3 && autoriOk) fiducia = "media";
    else if (s >= 0.7) fiducia = "bassa";
    if (!fiducia) continue;

    const punteggio = s - scartoAnno * 0.03 + (autoriOk ? 0.15 : 0) + (tipoOk ? 0.05 : 0);
    if (!migliore || punteggio > migliore.punteggio) migliore = { punteggio, fiducia, c };
  }
  return migliore;
}

// ------------------------------------------------------------------ la corsa
let gia = [];
if (riprendi && fs.existsSync(PROPOSTE)) {
  gia = JSON.parse(fs.readFileSync(PROPOSTE, "utf8"));
  console.log(`Riprendo: ${gia.length} voci gia' interrogate, le salto.\n`);
}
const fatte = new Set(gia.map(p => p.key));
const daCercare = biblio.filter(v => !v.doi && !fatte.has(v.key));

(async () => {
  console.log(`Fonte: ${fonte}. ${daCercare.length} voci da cercare su ${biblio.length}.\n`);
  const esiti = gia.slice();
  const conti = { alta: 0, media: 0, bassa: 0 };
  let niente = 0, errori = 0, difila = 0;

  for (let i = 0; i < daCercare.length; i++) {
    const v = daCercare[i];
    const avanzamento = `[${String(i + 1).padStart(3)}/${daCercare.length}]`;
    process.stdout.write(`${avanzamento} ${v.key} …`);
    try {
      const m = valuta(v, await interroga(v.title));
      difila = 0;
      if (m) {
        esiti.push({
          key: v.key, fiducia: m.fiducia, doi: m.c.doi,
          tipoBiblio: v.type, tipoTrovato: m.c.tipoGrezzo, sede: m.c.sede,
          titoloBiblio: v.title, titoloTrovato: m.c.titolo,
          anno: v.year, annoTrovato: m.c.anno, fonte
        });
        conti[m.fiducia]++;
        console.log(`\r${avanzamento} ${m.fiducia.padEnd(6)} ${v.key} -> ${m.c.doi}  (${m.c.tipoGrezzo})          `);
      } else {
        niente++;
        console.log(`\r${avanzamento} —      ${v.key}                                                            `);
      }
    } catch (e) {
      errori++; difila++;
      console.log(`\r${avanzamento} errore ${v.key}: ${e.message}                              `);
      if (difila >= 5) {
        console.log(`\nCinque errori di fila: mi fermo invece di martellare il servizio.`);
        console.log(`Quello che ho trovato finora e' salvato. Riparti dopo con --riprendi.`);
        break;
      }
    }
    if ((i + 1) % 10 === 0) fs.writeFileSync(PROPOSTE, JSON.stringify(esiti, null, 2) + "\n");
    await attesa(fonte === "openalex" ? 250 : 120);
  }

  const ordine = { alta: 0, media: 1, bassa: 2 };
  esiti.sort((a, b) => ordine[a.fiducia] - ordine[b.fiducia] || a.key.localeCompare(b.key));
  fs.writeFileSync(PROPOSTE, JSON.stringify(esiti, null, 2) + "\n");

  console.log(`\nalta ${conti.alta} · media ${conti.media} · bassa ${conti.bassa} · nessuna ${niente} · errori ${errori}`);
  console.log(`\nProposte in doi-proposte.json, le incerte in fondo.`);
  console.log(`Guarda tipoBiblio contro tipoTrovato e la sede: un libro che risulta`);
  console.log(`uscito su una rivista e' la sua recensione, non il libro.`);
  console.log(`\n  node scripts/doi-proposte.js --applica          scrive le ${conti.alta} "alta"`);
  console.log(`  ... --applica --anche-incerte                    scrive tutto quello che resta nel file`);
  console.log(`  ... --riprendi                                   continua dopo un'interruzione`);
})();
