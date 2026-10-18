#!/usr/bin/env node
/**
 * Assembla il pacchetto da depositare: deposito/ENTIA-<versione>/
 *
 * Tutto viene generato dai dati su cui il sito gira. Nessun file del pacchetto
 * si scrive a mano, cosi' alla versione 1.0.1 si rilancia questo e basta.
 *
 *   npm run curatela && npm run deposito
 *
 * Il PDF non si fa qui (serve una toolchain LaTeX): questo scrive il markdown
 * ENTIA-<versione>.md, da cui si compone con pandoc + xelatex.
 */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ROOT = path.join(__dirname, "..");
const entia = require(path.join(ROOT, "src/_data/entia.js"));
const vocab = require(path.join(ROOT, "src/_data/entiaVocab.js"));
const criteri = require(path.join(ROOT, "src/_data/criteri.json"));
const clusters = require(path.join(ROOT, "src/_data/clusters.js"));
const EN = require(path.join(ROOT, "src/_data/entiaEn.js"));
const alias = require(path.join(ROOT, "src/_data/curatedTagAliases.js"));
let curatela = {};
try { curatela = require(path.join(ROOT, "src/_data/curatela.json")); } catch (e) {}

const V = entia.spec;
const SITO = "https://claudiocammarano.com";
const DOI_CONCETTI = "10.5281/zenodo.22843731";
const ORCID = "0009-0006-3690-7466";
// Il DOI si riserva su Zenodo prima di pubblicare, e si passa qui:
//   npm run deposito -- --doi=10.5281/zenodo.NNNNNNN
const DOI = ((process.argv.find(a => a.startsWith("--doi=")) || "").split("=")[1] || "").trim();
const OUT = path.join(ROOT, "deposito", "ENTIA-" + V);
fs.mkdirSync(path.join(OUT, "figure"), { recursive: true });

const scrivi = (rel, testo) => {
  fs.writeFileSync(path.join(OUT, rel), testo, "utf8");
  console.log("  " + rel + "  (" + Buffer.byteLength(testo) + " byte)");
};

// ------------------------------------------------------------------ il corpus
const leggi = dir => fs.readdirSync(path.join(ROOT, "src", dir))
  .filter(f => f.endsWith(".md")).sort()
  .map(f => ({
    slug: f.replace(/\.md$/, ""),
    dati: matter(fs.readFileSync(path.join(ROOT, "src", dir, f), "utf8")).data
  }));
const writings = leggi("writings");
const curated = leggi("curated");

const citazioni = {};
writings.forEach(w => {
  if (!String(w.dati.layout || "").endsWith("catena.njk")) return;
  (w.dati.fonti || []).forEach(s => { citazioni[s] = (citazioni[s] || 0) + 1; });
});
const temaDi = {};
Object.entries(clusters).forEach(([t, as]) => as.forEach(a => { temaDi[a] = t; }));
const iso = d => { try { return new Date(d).toISOString().slice(0, 10); } catch (e) { return ""; } };

const campo = v => {
  const s = v === undefined || v === null ? "" : String(v);
  return /[",;\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};

const COLONNE = ["slug", "tipo", "funzione", "titolo", "data_fonte", "data_curatela",
  "fonte", "url", "temi", "argomenti", "concetti", "peso", "citata_da_catene"];
const righe = [COLONNE.join(",")];

writings.forEach(w => {
  const catena = String(w.dati.layout || "").endsWith("catena.njk");
  const args = (Array.isArray(w.dati.category) ? w.dati.category : [w.dati.category]).filter(Boolean).map(String);
  righe.push([
    w.slug, catena ? "Catena" : "Saggio", "", w.dati.title || w.slug,
    iso(w.dati.date), curatela[w.slug] || "", "", SITO + "/writings/" + w.slug + "/",
    [...new Set(args.map(a => temaDi[a]).filter(Boolean))].join("; "),
    args.join("; "), (w.dati.concepts || []).join("; "), "1.5", ""
  ].map(campo).join(","));
});
curated.forEach(c => {
  const args = [...new Set((c.dati.tags || []).map(t => alias[t]).filter(Boolean))];
  const n = citazioni[c.slug] || 0;
  righe.push([
    c.slug, "Scheda",
    (criteri[c.dati.criterio] && criteri[c.dati.criterio].label) || "",
    c.dati.title || c.slug, iso(c.dati.date), curatela[c.slug] || "",
    c.dati.source || "", c.dati.external_url || "",
    [...new Set(args.map(a => temaDi[a]).filter(Boolean))].join("; "),
    args.join("; "), (c.dati.concepts || []).join("; "),
    String(1 + 0.25 * n), String(n)
  ].map(campo).join(","));
});

// ------------------------------------------------------------------ le figure
const mesiBrevi = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];
const funzOrd = [...entia.funzioni].sort((a, b) => a.precedenza - b.precedenza);
const TINTE = ["#1C0E80", "#C0304A", "#009E73", "#4C7FE0", "#9A35A8", "#C9A227"];

function derivaSvg() {
  const perMese = {};
  curated.forEach(c => {
    const d = curatela[c.slug];
    if (!d) return;
    const k = d.slice(0, 7);
    const f = (criteri[c.dati.criterio] && criteri[c.dati.criterio].label) || "(nessuna)";
    perMese[k] = perMese[k] || {};
    perMese[k][f] = (perMese[k][f] || 0) + 1;
  });
  const mesi = Object.keys(perMese).sort();
  const W = 760, H = 440, ML = 46, MR = 190, MT = 38, MB = 58;
  const larg = (W - ML - MR) / mesi.length;
  const max = Math.max(...mesi.map(k => Object.values(perMese[k]).reduce((a, b) => a + b, 0)));
  const scala = v => (H - MT - MB) * v / max;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Georgia, serif" role="img" aria-label="Schede curate per mese, divise per funzione">`;
  s += `<rect width="${W}" height="${H}" fill="#ffffff"/>`;
  s += `<text x="${ML}" y="18" font-size="13" fill="#1a1a1a">Schede curate per mese, divise per funzione</text>`;
  for (let g = 0; g <= 4; g++) {
    const v = Math.round(max * g / 4), y = H - MB - scala(v);
    s += `<line x1="${ML}" y1="${y}" x2="${W - MR}" y2="${y}" stroke="#e0e0e0" stroke-width="1"/>`;
    s += `<text x="${ML - 6}" y="${y + 4}" font-size="10" fill="#666" text-anchor="end">${v}</text>`;
  }
  mesi.forEach((k, i) => {
    let y = H - MB;
    funzOrd.forEach((f, j) => {
      const n = perMese[k][f.label] || 0;
      if (!n) return;
      const h = scala(n);
      y -= h;
      s += `<rect x="${(ML + i * larg + 3).toFixed(1)}" y="${y.toFixed(1)}" width="${(larg - 6).toFixed(1)}" height="${h.toFixed(1)}" fill="${TINTE[j]}"/>`;
    });
    s += `<text x="${(ML + i * larg + larg / 2).toFixed(1)}" y="${(y - 6).toFixed(1)}" font-size="10" fill="#1a1a1a" text-anchor="middle">${Object.values(perMese[k]).reduce((a, b) => a + b, 0)}</text>`;
    s += `<text x="${(ML + i * larg + larg / 2).toFixed(1)}" y="${H - MB + 18}" font-size="10.5" fill="#1a1a1a" text-anchor="middle">${mesiBrevi[+k.slice(5, 7) - 1]}</text>`;
    s += `<text x="${(ML + i * larg + larg / 2).toFixed(1)}" y="${H - MB + 32}" font-size="9" fill="#999" text-anchor="middle">${k.slice(0, 4)}</text>`;
  });
  funzOrd.forEach((f, j) => {
    const y = MT + 6 + j * 19;
    s += `<rect x="${W - MR + 4}" y="${y}" width="11" height="11" fill="${TINTE[j]}"/>`;
    s += `<text x="${W - MR + 21}" y="${y + 10}" font-size="10.5" fill="#1a1a1a">${f.label}</text>`;
  });
  s += `<text x="${ML}" y="${H - 6}" font-size="9" fill="#999">Mesi di calendario per data di curatela. Fonte: entia-corpus.csv, ENTIA ${V}.</text>`;
  return s + "</svg>";
}

function ricostruibilitaSvg() {
  const r = entia.rilievi;
  const dati = [...r.ricostruibilita].sort((a, b) => b.quota - a.quota);
  const W = 700, MT = 34, MB = 42, ML = 170, MR = 60, alt = 26;
  const H = MT + MB + dati.length * alt;
  const x = q => ML + (W - ML - MR) * q;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Georgia, serif" role="img" aria-label="Quota di etichette ricostruibili dal testo, per funzione">`;
  s += `<rect width="${W}" height="${H}" fill="#ffffff"/>`;
  s += `<text x="12" y="18" font-size="13" fill="#1a1a1a">Quanta parte della funzione sta nel testo della scheda</text>`;
  s += `<line x1="${x(r.baseline).toFixed(1)}" y1="${MT - 6}" x2="${x(r.baseline).toFixed(1)}" y2="${H - MB + 8}" stroke="#C0304A" stroke-width="1" stroke-dasharray="4 3"/>`;
  s += `<text x="${(x(r.baseline) + 5).toFixed(1)}" y="${MT - 10}" font-size="10" fill="#C0304A">caso: ${Math.round(r.baseline * 100)}%</text>`;
  dati.forEach((d, i) => {
    const y = MT + i * alt;
    s += `<text x="${ML - 10}" y="${y + 15}" font-size="11" fill="#1a1a1a" text-anchor="end">${d.criterio}</text>`;
    s += `<rect x="${ML}" y="${y + 4}" width="${(x(d.quota) - ML).toFixed(1)}" height="14" fill="#1C0E80"/>`;
    s += `<text x="${(x(d.quota) + 7).toFixed(1)}" y="${y + 15}" font-size="10.5" fill="#666">${Math.round(d.quota * 100)}% · ${d.su} casi</text>`;
  });
  s += `<text x="12" y="${H - 16}" font-size="9" fill="#999">Naive Bayes, validazione leave-one-out su ${r.schedeAlRilievo} schede, ${r.data}. Non e' una scala di qualita':</text>`;
  s += `<text x="12" y="${H - 5}" font-size="9" fill="#999">misura dove sta il criterio, se dentro o fuori il testo.</text>`;
  return s + "</svg>";
}

// --------------------------------------------------------- la mappa staccata
function mappaStaccata() {
  const pagina = fs.readFileSync(path.join(ROOT, "_site/entia/index.html"), "utf8");
  const css = (pagina.match(/<style>([\s\S]*?)<\/style>/) || [, ""])[1];
  const i = pagina.indexOf('<div class="entia-mappa">');
  const j = pagina.indexOf("</script>", pagina.indexOf("const EM_DATI"));
  if (i < 0 || j < 0) throw new Error("blocco mappa non trovato in _site: lancia prima il build");
  const corpo = pagina.slice(i, j + "</script>".length);
  return `<!doctype html>
<html lang="it"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ENTIA ${V} — la mappa dell'archivio</title>
<style>
:root{--color-primary:#1C0E80;--color-text:#1a1a1a;--color-text-light:#666;
  --color-bg:#ffffff;--color-bg-alt:#f5f5f0;--color-border:#e0e0e0}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){
  --color-text:#ececec;--color-text-light:#a0a0a0;--color-bg:#161616;
  --color-bg-alt:#202020;--color-border:#333;--color-primary:#8da2f0}}
body{margin:0;padding:24px 16px 40px;background:var(--color-bg);color:var(--color-text);
  font:17px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
.foglio{max-width:980px;margin:0 auto}
h1{font-family:Georgia,serif;font-size:1.7rem;line-height:1.2;margin:0 0 .3em}
.occhiello{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--color-primary);margin:0 0 .6em}
.guida{color:var(--color-text-light);margin:0 0 1.4em}
.entia-nota{font-size:.84em;color:var(--color-text-light);line-height:1.55}
a{color:var(--color-primary)}
${css}</style></head>
<body><div class="foglio">
<p class="occhiello">ENTIA ${V} · figura interattiva</p>
<h1>La mappa dell'archivio</h1>
<p class="guida">I cinque strati, uno dentro l'altro: Tema, Argomento, Funzione, Pezzo, Concetto.
L'area di ogni rettangolo e' il peso del pezzo che lo genera. Tocca un rettangolo per scendere
di un livello; le briciole in alto riportano indietro. Copia depositata al ${entia.rilievi.data};
la versione viva sta su <a href="${SITO}/entia/#mappa">${SITO.replace("https://", "")}/entia/</a>.</p>
${corpo}
</div></body></html>`;
}

// ------------------------------------------------------- la specifica in md
const md = s => String(s)
  .replace(/<strong>(.*?)<\/strong>/g, "**$1**")
  .replace(/<em>(.*?)<\/em>/g, "*$1*")
  .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g, "[$2]($1)")
  .replace(/<[^>]+>/g, "");

function specifica() {
  const r = entia.rilievi;
  const c = entia.corpus;
  const q = n => n.toLocaleString("it-IT");
  let t = "";
  t += "## Che cos'è\n\n";
  t += "ENTIA è una notazione editoriale a cinque strati per archivi curati. Serve a dichiarare, pezzo per pezzo, **che cosa quel pezzo è per chi lo tiene**: non di che cosa parla, ma a che serve nell'archivio che lo ospita. È un protocollo aperto, versionato e rilasciato con licenza " + entia.licenza.nome + ".\n\n";
  t += "Questa versione è ricavata da un archivio reale: " + q(c.pezzi) + " pezzi — " + q(c.saggi) + " saggi, " + q(c.catene) + " catene, " + q(c.schede) + " schede — distribuiti su " + c.temi + " temi, " + c.argomenti + " argomenti e " + q(c.concetti) + " concetti.\n\n";
  t += "## Il nome\n\n" + md(entia.radice) + "\n\n";
  t += "## I cinque strati\n\n";
  t += "Ogni strato dichiara che cosa vincola, che cosa afferma e che cosa non \u00e8 in grado di fare. L'ordine non \u00e8 una gerarchia di valore: \u00e8 un gradiente di esposizione all'errore.\n\n";
  entia.strati.forEach((s, i) => {
    t += "**" + (i + 1) + ". " + s.nome + "** \u2014 " + s.quanti + " voci. *Vincola:* " + md(s.lega) +
         ". *Afferma:* " + md(s.afferma) + ". *Non pu\u00f2:* " + md(s.nonPuo) + ".\n\n";
    t += md(s.nota) + "\n\n";
  });
  t += "## Le sei funzioni\n\n";
  t += "Non sono categorie ma posizioni in una precedenza: si guarda la prima, e si scende solo se non regge.\n\n";
  funzOrd.forEach(f => {
    t += "### " + f.precedenza + ". " + f.label + "\n\n";
    t += md(f.estesa) + "\n\n";
    t += "*Prova:* " + md(f.prova) + "  \n*Schede nell'archivio:* " + f.schede + "\n\n";
  });
  t += "## Le regole\n\n";
  entia.regole.forEach(g => { t += "**" + g.nome + ".** " + md(g.testo) + "\n\n"; });
  t += "## Che cosa il modello si propone\n\n" + md(entia.limiti.premessa) + "\n\n";
  entia.limiti.voci.forEach(v => { t += "**" + md(v.titolo) + "** " + md(v.testo) + "\n\n"; });
  t += "## Il rilievo\n\n";
  t += md(r.metodo) + " Il caso, su questa distribuzione, ricostruirebbe il " + Math.round(r.baseline * 100) + "% delle etichette.\n\n";
  t += "| Funzione | Ricostruibile | Casi |\n|---|---:|---:|\n";
  [...r.ricostruibilita].sort((a, b) => b.quota - a.quota)
    .forEach(x => { t += "| " + x.criterio + " | " + Math.round(x.quota * 100) + "% | " + x.su + " |\n"; });
  t += "\n" + md(r.lettura) + "\n\n" + md(r.cautela) + " Vedi `figure/ricostruibilita.svg`.\n\n";
  t += "## " + entia.conformita.titolo + "\n\n";
  t += md(entia.conformita.licenzaVsUso) + "\n\n";
  t += "### " + entia.conformita.struttura.titolo + "\n\n";
  t += md(entia.conformita.struttura.fisso) + "\n\n" + md(entia.conformita.struttura.locale) + "\n\n";
  t += "### " + entia.conformita.peso.titolo + "\n\n";
  t += md(entia.conformita.peso.testo) + "\n\n" + md(entia.conformita.peso.soglia) + "\n\n";
  t += "### Le quattro condizioni\n\n" + md(entia.conformita.premessa) + "\n\n";
  entia.conformita.requisiti.forEach((x, i) => { t += (i + 1) + ". " + md(x) + "\n"; });
  t += "\n## Come citare\n\n";
  t += "> Cammarano, C. (2026). *ENTIA " + V + " \u2014 " + entia.sciolto + "*. Zenodo." +
       (DOI ? " https://doi.org/" + DOI : "") + "\n\n";
  t += "Il dataset dei concetti sta a parte: https://doi.org/" + DOI_CONCETTI + "\n";
  t += "\n## Licenza\n\n" + entia.licenza.nome + " (" + entia.licenza.url + "). " + md(entia.licenzaNota) + "\n";
  return t;
}

// ------------------------------------------------------------------ i testi
// La specifica in inglese: lo stesso normativo di /en/entia/, e per la stessa
// ragione. Le misure su questo archivio — i conteggi per strato, le schede per
// funzione, il rilievo — restano nel documento italiano e in entia-corpus.csv:
// sono la prova che ENTIA e' usata qui, non una parte di cio' che un altro deve
// implementare. Testi: src/_data/entiaEn.js, la stessa fonte della pagina.
function specificaEn() {
  let t = "";
  t += "## What it is\n\n";
  EN.orientamento.cose.forEach(x => { t += md(x) + "\n\n"; });
  t += "## Who it is for\n\n";
  EN.orientamento.chi.forEach(x => { t += md(x) + "\n\n"; });
  t += "## The name\n\n" + md(EN.orientamento.nome) + "\n\n";
  t += "## The five layers\n\n";
  t += "The notation is not a taxonomy of subjects: it is a scale of commitment. Each layer declares what binds it, what it asserts and what it is unable to do. The order is not a hierarchy of value: it is a gradient of exposure to error.\n\n";
  entia.strati.forEach((s2, i) => {
    const e = EN.stratiTesti[s2.nome];
    t += "**" + (i + 1) + ". " + EN.strati[s2.nome] + "** — *Binds:* " + md(e.lega) +
         ". *Asserts:* " + md(e.afferma) + ". *Cannot:* " + md(e.nonPuo) + ".\n\n";
    t += md(e.nota) + "\n\n";
  });
  t += "## The six functions\n\n";
  t += "Not categories but positions in a precedence: you look at the first, and go down only if it does not hold.\n\n";
  funzOrd.forEach(f => {
    const e = EN.funzioniTesti[f.slug];
    t += "### " + f.precedenza + ". " + EN.funzioni[f.slug] + "\n\n";
    t += md(e.estesa) + "\n\n";
    t += "*Test:* " + md(e.prova) + "\n\n";
  });
  t += "## The rules\n\n";
  entia.regole.forEach(g => { const e = EN.regole[g.nome]; t += "**" + e.nome + ".** " + md(e.testo) + "\n\n"; });
  t += "## What the model is for\n\n" + md(EN.limiti.premessa) + "\n\n";
  EN.limiti.voci.forEach(v => { t += "**" + md(v.titolo) + "** " + md(v.testo) + "\n\n"; });
  t += "## " + EN.conformita.titolo + "\n\n" + md(EN.conformita.licenzaVsUso) + "\n\n";
  t += "### " + EN.conformita.struttura.titolo + "\n\n";
  t += md(EN.conformita.struttura.fisso) + "\n\n" + md(EN.conformita.struttura.locale) + "\n\n";
  t += "### " + EN.conformita.peso.titolo + "\n\n";
  t += md(EN.conformita.peso.testo) + "\n\n" + md(EN.conformita.peso.soglia) + "\n\n";
  t += "### The four conditions\n\n" + md(EN.conformita.premessa) + "\n\n";
  EN.conformita.requisiti.forEach((x, i) => { t += (i + 1) + ". " + md(x) + "\n"; });
  t += "\n## The measurements are elsewhere\n\n";
  t += "This document carries the normative text only. The counts per layer, the cards per function and the reconstructibility measurement are properties of the archive this version was derived from, not of the notation: they are in `ENTIA-" + V + ".md` and in `entia-corpus.csv`, each with the date it was taken.\n\n";
  t += "## How to cite\n\n";
  t += "> Cammarano, C. (2026). *ENTIA " + V + " — " + entia.sciolto + "*. Zenodo." +
       (DOI ? " https://doi.org/" + DOI : "") + "\n\n";
  t += "The concept dataset is deposited separately: https://doi.org/" + DOI_CONCETTI + "\n";
  return t;
}

const README = `# ENTIA ${V}

**Epistemic Notation for Texts In Archives** — notazione editoriale a cinque
strati per archivi curati: dichiara, pezzo per pezzo, che cosa quel pezzo è per
chi lo tiene.

Autore: Claudio Cammarano (ORCID [${ORCID}](https://orcid.org/${ORCID}))
Licenza: ${entia.licenza.nome} — ${entia.licenza.url}
${DOI ? "DOI di questa versione: https://doi.org/" + DOI + "\n" : ""}Versione viva della specifica: <${SITO}/entia/>
Rilievo: ${entia.rilievi.data}, su ${entia.rilievi.schedeAlRilievo} schede.

## Che cosa c'è qui

| File | Che cos'è |
|---|---|
| \`ENTIA-${V}.pdf\` | la specifica, in forma leggibile |
| \`ENTIA-${V}.md\` | la stessa specifica in markdown, da cui è composto il PDF |
| \`ENTIA-${V}-en.pdf\` | la parte normativa in inglese |
| \`ENTIA-${V}-en.md\` | la stessa, in markdown. Non traduce il documento italiano: tiene il normativo e lascia a quello le misure su questo archivio |
| \`entia.json\` | il vocabolario in JSON-LD/SKOS: strati, funzioni, temi, argomenti, concetti, regole, condizioni d'uso |
| \`criteri.json\` | le sei funzioni come le usa il sito: la fonte da cui nascono le badge |
| \`entia-corpus.csv\` | ${entia.corpus.pezzi} pezzi con le loro assegnazioni, e **due date**: quella della fonte e quella di curatela |
| \`entia-mappa.html\` | la mappa a cinque strati, interattiva, autosufficiente (si apre in un browser, non chiede rete) |
| \`figure/deriva-funzioni.svg\` | schede curate per mese, divise per funzione |
| \`figure/ricostruibilita.svg\` | quanta parte di ogni funzione sta nel testo della scheda |
| \`CITATION.cff\` | come citare |

## Le due date, e perché sono due

\`data_fonte\` è quando il materiale è stato pubblicato dal suo autore;
\`data_curatela\` è quando è entrato in questo archivio, ricavata dal primo
commit che ne ha aggiunto il file. La prima dice quanto sono vecchi i materiali,
la seconda come è cresciuto l'archivio. Le figure e il filtro temporale della
mappa usano la seconda.

## Come citare

> Cammarano, C. (2026). *ENTIA ${V} — ${entia.sciolto}*. Zenodo.${DOI ? " https://doi.org/" + DOI : ""}

Il dataset dei concetti sta a parte: [${DOI_CONCETTI}](https://doi.org/${DOI_CONCETTI}).

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

\`\`\`
npm ci
npm run curatela     # date di curatela dalla storia del repository
npm run build        # il sito, da cui si estrae la mappa interattiva
npm run deposito     # questa cartella
\`\`\`

Il PDF si compone con pandoc e xelatex a partire da \`ENTIA-${V}.md\`.
`;

const CFF = `cff-version: 1.2.0
message: "Se usi ENTIA, cita così."
title: "ENTIA — ${entia.sciolto}"
abstract: "Notazione editoriale a cinque strati per archivi curati: dichiara, pezzo per pezzo, che cosa quel pezzo è per chi lo tiene. Protocollo aperto, versionato, con il corpus su cui è stato ricavato."
version: "${V}"
date-released: "${entia.rilievi.data}"
${DOI ? 'doi: "' + DOI + '"\n' : ''}license: CC-BY-4.0
type: dataset
url: "${SITO}/entia/"
repository-code: "https://github.com/ClaudioCamm/claudio-cammarano-site"
keywords:
  - notazione editoriale
  - curatela
  - SKOS
  - archivi
  - epistemologia
  - knowledge organization
authors:
  - family-names: Cammarano
    given-names: Claudio
    orcid: "https://orcid.org/${ORCID}"
references:
  - type: dataset
    title: "Concetti — claudiocammarano.com"
    authors:
      - family-names: Cammarano
        given-names: Claudio
        orcid: "https://orcid.org/${ORCID}"
    doi: "${DOI_CONCETTI}"
`;

// ------------------------------------------------------------------ scrittura
console.log("deposito/ENTIA-" + V + ":");
scrivi("README.md", README);
scrivi("CITATION.cff", CFF);
scrivi("entia.json", JSON.stringify(vocab, null, 2) + "\n");
scrivi("criteri.json", JSON.stringify(criteri, null, 2) + "\n");
scrivi("entia-corpus.csv", righe.join("\n") + "\n");
scrivi("ENTIA-" + V + ".md", specifica());
scrivi("ENTIA-" + V + "-en.md", specificaEn());
scrivi("figure/deriva-funzioni.svg", derivaSvg());
scrivi("figure/ricostruibilita.svg", ricostruibilitaSvg());
try {
  scrivi("entia-mappa.html", mappaStaccata());
} catch (e) {
  console.warn("  entia-mappa.html NON generata: " + e.message);
}
// Lo zip si compone fuori dalla cartella e poi si copia dentro: zip non sa
// rigenerare un archivio gia' presente senza prima cancellarlo.
try {
  const tmp = path.join(require("os").tmpdir(), "ENTIA-" + V + "-" + process.pid + ".zip");
  require("child_process").execFileSync("zip", ["-rq", tmp, "."], { cwd: OUT });
  fs.copyFileSync(tmp, path.join(OUT, "..", "ENTIA-" + V + ".zip"));
  fs.unlinkSync(tmp);
  console.log("  ../ENTIA-" + V + ".zip  (il pacchetto intero)");
} catch (e) { console.warn("  zip non creato: " + e.message); }
console.log(DOI ? "\nDOI inciso nel pacchetto: " + DOI : "\nSenza DOI: riservalo su Zenodo e rilancia con --doi=...");
console.log("\n" + entia.corpus.pezzi + " pezzi nel CSV. Il PDF va composto a parte da ENTIA-" + V + ".md.");
