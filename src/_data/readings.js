// Readings (/en/claims/readings/): unisce i dati di Zotero (readingsZotero.json,
// scritto da scripts/readings/sync.py) con le schede scritte a mano in
// src/readings/cards (Card, una per opera) e src/readings/extracts (Extract,
// un testo autonomo dentro un'opera). Controlla il tetto delle citazioni:
// al massimo 3 per scheda, al massimo 25 parole l'una; oltre, la build si ferma.
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const DIR = path.join(__dirname, "..", "readings");
const Z = require("./readingsZotero.json");
const CP = require("./claimPages.js");
const CL = require("./claims.js");
const EN = require("./entiaEn.js");
const SHELVES = require("./shelves.js");
const CONFIG = require("../../scripts/readings/readings-config.json");
// ENTIA accanto a ogni claim (16/11/2026): funzione (badge come sul lato
// italiano, etichetta da entiaEn), stance, D1 (anche se solo proposto),
// relazioni CiTO. Il peso resta sulla pagina del claim.
const clById = Object.fromEntries(CL.map(l => [l.id, l]));
const claimByN = Object.fromEntries(CP.claims.map(c => {
  const l = clById[c.id] || {};
  return [c.n, { n: c.n, url: c.url, lead: c.lead, concepts: c.conceptsEn.map(k => k.en).join(" + "), voice: c.voice,
    fnKey: l.fn || "", fnEn: EN.funzioni[l.fn] || c.fn || "", stance: c.stance, contested: c.contested,
    d1: c.d1, d1Label: c.d1Label, d1Proposed: c.d1Status !== "confirmed",
    rel: (c.out || []).map(r => ({ how: r.how, n: r.n, url: r.url })) }];
}));
const conceptByKey = Object.fromEntries(CP.concepts.map(k => [k.key, { en: k.en, url: k.url }]));
// tutti i C### citati in una scheda, nell'ordine in cui compaiono
const claimsIn = o => [...new Set(JSON.stringify(o).match(/C\d{3}/g) || [])].filter(n => claimByN[n]).map(n => claimByN[n]);
const BASE = "/en/claims/readings/";
const MAXQ = 3, MAXW = 25;

function load(sub) {
  const d = path.join(DIR, sub);
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d).filter(f => f.endsWith(".md")).map(f => ({ file: f, ...matter.read(path.join(d, f)).data }));
}

function quotes(o, acc = []) {
  if (Array.isArray(o)) o.forEach(x => quotes(x, acc));
  else if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) { if (k === "quote" && v) acc.push(v); else quotes(v, acc); }
  return acc;
}
function checkQuotes(where, o) {
  const q = quotes(o);
  if (q.length > MAXQ) throw new Error(`[readings] ${where}: ${q.length} quotations, the limit is ${MAXQ}`);
  q.forEach(s => { const n = s.split(/\s+/).length; if (n > MAXW) throw new Error(`[readings] ${where}: a quotation of ${n} words, the limit is ${MAXW}`); });
}

// Titoli non inglesi (regola del 15/11/2026): il titolo in lingua originale nel
// trattamento normale, poi in piccolo, fra quadre, il titolo dell'edizione
// inglese di riferimento. Testo semplice per <title> e meta, HTML per le pagine.
const escH = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const fullTitle = (t, en) => (en ? `${t} [${en}]` : t);
const titleHtml = (t, en) => (en ? `${escH(t)} <small class="t-en">[${escH(en)}]</small>` : escH(t));
const authorLine = a => a.map(x => x.last).join(", ");
const short = a => (a.length > 2 ? `${a[0].last} et al.` : a.map(x => x.last).join(", "));

// righello: le pagine lette in zone, le pagine non lette ripiegate
function zone(r) {
  const pages = [...new Set(r.marks.map(m => +m.page).filter(n => !isNaN(n)))].sort((x, y) => x - y);
  const zs = [];
  for (const p of pages) { const z = zs[zs.length - 1]; if (z && p - z.b <= 6) z.b = p; else zs.push({ a: p, b: p }); }
  return {
    copy: r.copy, collection: r.collection, counted: r.counted, total: r.marks.length,
    zones: zs.map(z => {
      const a = z.a - 1, b = z.b + 1, n = b - a + 1, per = {};
      const marks = r.marks.filter(m => +m.page >= a && +m.page <= b).map(m => {
        const k = (per[m.page] = (per[m.page] || 0) + 1);
        return { page: m.page, role: m.role, left: (((+m.page - a) / n) * 100).toFixed(2), k: k - 1 };
      });
      return { a, b, n, pages: Array.from({ length: n }, (_, i) => a + i), marks };
    }),
  };
}

const cards = load("cards"), extracts = load("extracts");
const byKey = {};
for (const g of Z.groups) for (const w of g.works) for (const k of w.keys) byKey[k] = w;

const works = [];
for (const g of Z.groups) {
  for (const w of g.works) {
    const card = cards.find(c => w.keys.includes(c.zotero));
    if (card) {
      checkQuotes(card.file, card);
      card.claimList = claimsIn(card.sections || []);
      card.claimsCount = card.claimList.length;
      card.conceptList = (card.concepts || []).map(k => conceptByKey[k]).filter(Boolean);
    }
    w.groupEn = g.en;
    w.groupKey = g.key;
    w.short = short(w.authors);
    w.authorLine = authorLine(w.authors);
    w.display = fullTitle(w.title, (card && card.title_en) || w.title_en);
    w.displayHtml = titleHtml(w.title, (card && card.title_en) || w.title_en);
    w.card = card || null;
    if (card) w.status = card.status || "drafted";
    w.url = card ? BASE + w.slug + "/" : "";
    w.extracts = [];
    w.rulerZones = w.rulers.map(zone);
    works.push(w);
  }
}
for (const x of extracts) {
  checkQuotes(x.file, x);
  x.claimList = claimsIn(x.claims || []);
  const w = byKey[x.zotero];
  if (!w) continue;
  x.work = { slug: w.slug, url: w.url, display: w.display, displayHtml: w.displayHtml, short: w.short, year: w.year, authorLine: w.authorLine };
  x.url = BASE + w.slug + "/" + x.slug + "/";
  x.workFull = w;
  // il righello dell'estratto: solo i segni delle sue pagine
  const [a, b] = x.book_range || [0, 0];
  x.rulers = w.rulers.map(r => ({ ...r, marks: r.marks.filter(m => +m.page >= a && +m.page <= b) })).filter(r => r.marks.length).map(zone);
  w.extracts.push(x);
}

const STAGES = ["on file", "reading", "underlined", "drafted", "published"];
const funnel = STAGES.map((s, i) => works.filter(w => STAGES.indexOf(w.status) >= i).length);
// scaffali: nome pubblico e riga da shelves.js (ordine suo); i non mappati
// tengono il nome Zotero e vanno in coda
const zoteroOf = Object.fromEntries(CONFIG.groups.map(g => [g.en, g.zotero]));
const slugify = s => String(s).toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const groups = Z.groups.map(g => {
  const zot = g.zotero || zoteroOf[g.en] || g.en;
  const i = SHELVES.findIndex(s => s.zotero === zot);
  const sh = SHELVES[i] || { en: zot.split(" / ").pop(), line: "" };
  const ws = works.filter(w => w.groupEn === g.en);
  const key = slugify(sh.en);
  ws.forEach(w => { w.shelfEn = sh.en; w.shelfKey = key; });
  // distribuzione delle funzioni ENTIA dei claim tratti da ciascuna scheda
  ws.filter(w => w.card).forEach(w => {
    const d = {};
    w.card.claimList.forEach(c => { if (c.fnKey) d[c.fnKey] = (d[c.fnKey] || 0) + 1; });
    w.fnMix = Object.entries(d).sort((a, b) => b[1] - a[1]).map(([k, n]) => ({ key: k, en: EN.funzioni[k] || k, n }));
  });
  return { key, en: sh.en, line: sh.line, zotero: zot, order: i < 0 ? 999 : i,
    active: ws.filter(w => w.status !== "on file"), shelf: ws.filter(w => w.status === "on file"), count: ws.length };
}).sort((a, b) => a.order - b.order);
// also_in: i nomi Zotero diventano nomi pubblici
const pub = Object.fromEntries(groups.map(g => [g.zotero, g.en]));
works.forEach(w => { w.alsoIn = (w.also_in || []).map(z => pub[z] || z); });
// funzioni ENTIA per la legenda dell'indice, nell'ordine di entiaEn
const fnUsed = [...new Set(works.flatMap(w => (w.fnMix || []).map(f => f.key)))];
const fnLegend = Object.keys(EN.funzioni).filter(k => fnUsed.includes(k)).map(k => ({ key: k, en: EN.funzioni[k] }));

module.exports = {
  updated: Z.updated,
  stages: STAGES,
  funnel,
  groups,
  shelfCount: groups.length,
  fnLegend,
  works,
  cards: works.filter(w => w.card),
  extracts: extracts.filter(x => x.url),
  claimByN,
  // per i rimandi: claim -> scheda da cui e' tratto; concetto -> schede
  cardByClaim: Object.fromEntries(works.filter(w => w.card).flatMap(w => [
    ...w.card.claimList.map(c => [c.n, { url: w.url, display: w.display, short: w.short, year: w.year }]),
    ...w.extracts.flatMap(x => x.claimList.map(c => [c.n, { url: x.url, display: x.title, short: w.short, year: w.year }])),
  ])),
  cardsByConcept: works.filter(w => w.card).reduce((o, w) => { (w.card.concepts || []).forEach(k => (o[k] = o[k] || []).push({ url: w.url, display: w.display, short: w.short, year: w.year, status: w.status })); return o; }, {}),
  total: works.length,
};
