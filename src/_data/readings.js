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
const claimByN = Object.fromEntries(CP.claims.map(c => [c.n, { n: c.n, url: c.url, lead: c.lead, concepts: c.conceptsEn.map(k => k.en).join(" + "), voice: c.voice, w: c.w }]));
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

// titolo in lingua originale, l'inglese fra quadre se c'e'
const fullTitle = (t, en) => (en ? `${t} [${en}]` : t);
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
  x.work = { slug: w.slug, url: w.url, display: w.display, short: w.short, year: w.year, authorLine: w.authorLine };
  x.url = BASE + w.slug + "/" + x.slug + "/";
  // il righello dell'estratto: solo i segni delle sue pagine
  const [a, b] = x.book_range || [0, 0];
  x.rulers = w.rulers.map(r => ({ ...r, marks: r.marks.filter(m => +m.page >= a && +m.page <= b) })).filter(r => r.marks.length).map(zone);
  w.extracts.push(x);
}

const STAGES = ["on file", "reading", "underlined", "drafted", "published"];
const funnel = STAGES.map((s, i) => works.filter(w => STAGES.indexOf(w.status) >= i).length);
const groups = Z.groups.map(g => {
  const ws = works.filter(w => w.groupEn === g.en);
  return { key: g.key, en: g.en, blurb: g.blurb, active: ws.filter(w => w.status !== "on file"), shelf: ws.filter(w => w.status === "on file"), count: ws.length };
});

module.exports = {
  updated: Z.updated,
  stages: STAGES,
  funnel,
  groups,
  works,
  cards: works.filter(w => w.card),
  extracts: extracts.filter(x => x.url),
  claimByN,
  total: works.length,
};
