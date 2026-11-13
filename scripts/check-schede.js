#!/usr/bin/env node
/**
 * check-schede.js
 *
 * Pre-build script (avvisa, non blocca): segnala le schede semantiche da
 * rivedere — note dei concetti (conceptsIndex.js), descrizioni degli
 * argomenti (tagDescriptions.json) e dei temi (temiDescriptions.json).
 *
 * Soglie (decise il 13/11/2026, skill scheda-semantica §7):
 *   - concetti: nuovi pezzi ≥ max(5, 30% della base); una catena conta 2;
 *     un writing nuovo fa scattare la revisione da solo;
 *   - argomenti: nuovi pezzi ≥ max(10, 30% della base); un writing nuovo
 *     la fa scattare da solo;
 *   - difetti (formula «nel sito», descrizione mancante): sempre.
 *
 * La base sta nel campo `revisione: { data, pezzi, writings, catene }` delle
 * voci di conceptsIndex.js e in src/_data/revisioniSchede.json per argomenti
 * e temi. Le voci senza base vengono controllate solo per i difetti.
 * Dopo una revisione validata si aggiornano data e conteggi della voce.
 *
 * Uso: node scripts/check-schede.js [--all]
 */

const fs   = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC  = path.join(ROOT, 'src');
const MOSTRA_TUTTO = process.argv.includes('--all');

const concepts  = require(path.join(SRC, '_data', 'conceptsIndex.js'));
const aliases   = require(path.join(SRC, '_data', 'curatedTagAliases.js'));
const clusters  = require(path.join(SRC, '_data', 'clusters.js'));
const tagDesc   = JSON.parse(fs.readFileSync(path.join(SRC, '_data', 'tagDescriptions.json'), 'utf8'));
const temiDesc  = JSON.parse(fs.readFileSync(path.join(SRC, '_data', 'temiDescriptions.json'), 'utf8'));
const revFile   = path.join(SRC, '_data', 'revisioniSchede.json');
const revisioni = fs.existsSync(revFile) ? JSON.parse(fs.readFileSync(revFile, 'utf8')) : { argomenti: {}, temi: {} };

// ─── 1. Frontmatter minimo ───────────────────────────────────────────────────

function lista(fm, key) {
  const m = fm.match(new RegExp('^' + key + ':\\s*(.*)$', 'm'));
  if (!m) return [];
  const v = m[1].trim();
  if (!v.startsWith('[')) return v ? [v.replace(/^["']|["']$/g, '')] : [];
  const out = [];
  const re = /"((?:[^"\\]|\\.)*)"|'([^']*)'|([^,\[\]]+)/g;
  let x;
  while ((x = re.exec(v.slice(1, v.lastIndexOf(']'))))) {
    const s = (x[1] ?? x[2] ?? x[3] ?? '').trim();
    if (s) out.push(s);
  }
  return out;
}

const pezzi = []; // { url, kind: 'curated'|'learning'|'writing'|'catena', concepts, tags }
for (const dir of ['curated', 'learning', 'writings']) {
  const d = path.join(SRC, dir);
  if (!fs.existsSync(d)) continue;
  for (const f of fs.readdirSync(d).filter(f => f.endsWith('.md'))) {
    const raw = fs.readFileSync(path.join(d, f), 'utf8');
    const fm = (raw.match(/^---\n([\s\S]*?)\n---/) || [, ''])[1];
    const catena = /^layout:\s*["']?layouts\/catena\.njk/m.test(fm);
    const kind = dir === 'writings' ? (catena ? 'catena' : 'writing') : dir;
    pezzi.push({
      url: '/' + dir + '/' + f.replace(/\.md$/, ''),
      kind,
      concepts: lista(fm, 'concepts'),
      tags: dir === 'writings' ? lista(fm, 'category') : dir === 'curated'
        ? lista(fm, 'tags').map(t => aliases[t.toLowerCase()]).filter(Boolean) : []
    });
  }
}
const perUrl = new Map(pezzi.map(p => [p.url, p]));
const kindOf = url => (perUrl.get(url) || { kind: url.startsWith('/writings') ? 'writing' : 'curated' }).kind;

function conta(urls) {
  const c = { pezzi: urls.size, writings: 0, catene: 0 };
  for (const u of urls) { const k = kindOf(u); if (k === 'writing') c.writings++; if (k === 'catena') c.catene++; }
  return c;
}

function verdetto(base, ora, minimo) {
  const nuoviW = ora.writings - (base.writings || 0);
  const nuoviC = ora.catene - (base.catene || 0);
  const nuovi  = (ora.pezzi - base.pezzi) + Math.max(0, nuoviC); // la catena conta 2
  const soglia = Math.max(minimo, Math.ceil(base.pezzi * 0.3));
  if (nuoviW > 0) return `${nuoviW} writing nuovo/i`;
  if (nuovi >= soglia) return `${nuovi} pezzi nuovi (soglia ${soglia})`;
  return null;
}

const NEL_SITO = /\bnel sito\b/i;
const avvisi = { soglia: [], difetti: [], nelSito: [] };

// ─── 2. Concetti ─────────────────────────────────────────────────────────────

let senzaBase = 0;
for (const c of concepts) {
  const urls = new Set((c.articles || []).map(a => a.url.replace(/\/$/, '')));
  for (const p of pezzi) if (p.concepts.includes(c.name)) urls.add(p.url);
  const ora = conta(urls);
  if (!c.note && ora.pezzi >= 3) avvisi.difetti.push(`concetto "${c.name}": nota mancante (${ora.pezzi} pezzi)`);
  if (c.note && NEL_SITO.test(c.note)) avvisi.nelSito.push(`concetto "${c.name}"`);
  if (!c.revisione) { senzaBase++; continue; }
  const v = verdetto(c.revisione, ora, 5);
  if (v) avvisi.soglia.push(`concetto "${c.name}": ${v} dal ${c.revisione.data}`);
}

// ─── 3. Argomenti e temi ─────────────────────────────────────────────────────

const perTag = new Map();
for (const p of pezzi) for (const t of p.tags) {
  if (!perTag.has(t)) perTag.set(t, new Set());
  perTag.get(t).add(p.url);
}
for (const t of new Set(Object.values(clusters).flat())) {
  const ora = conta(perTag.get(t) || new Set());
  const d = tagDesc[t];
  if (!d && ora.pezzi >= 3) avvisi.difetti.push(`argomento "${t}": descrizione mancante (${ora.pezzi} pezzi)`);
  if (d && NEL_SITO.test(d)) avvisi.nelSito.push(`argomento "${t}"`);
  const base = (revisioni.argomenti || {})[t];
  if (!base) continue;
  const v = verdetto(base, ora, 10);
  if (v) avvisi.soglia.push(`argomento "${t}": ${v} dal ${base.data}`);
}
for (const t of Object.keys(clusters)) {
  if (!temiDesc[t]) avvisi.difetti.push(`tema "${t}": descrizione mancante`);
  else if (NEL_SITO.test(temiDesc[t])) avvisi.nelSito.push(`tema "${t}"`);
}

// ─── 4. Output ───────────────────────────────────────────────────────────────

if (avvisi.soglia.length === 0 && avvisi.difetti.length === 0 && avvisi.nelSito.length === 0) {
  console.log(`[schede] ✓ Nessuna scheda da rivedere (${senzaBase} concetti senza base di revisione).`);
  process.exit(0);
}
const LIMITE = 15;
for (const [titolo, righe] of [['Schede oltre soglia', avvisi.soglia], ['Difetti', avvisi.difetti]]) {
  if (righe.length === 0) continue;
  console.log(`\n[schede] ⚠ ${titolo} (${righe.length})`);
  for (const r of MOSTRA_TUTTO ? righe : righe.slice(0, LIMITE)) console.log('   - ' + r);
  if (!MOSTRA_TUTTO && righe.length > LIMITE) console.log(`   … e altre ${righe.length - LIMITE} — \`node scripts/check-schede.js --all\``);
}
if (avvisi.nelSito.length > 0) {
  console.log(`\n[schede] ⚠ Formula «nel sito» ancora in ${avvisi.nelSito.length} schede` + (MOSTRA_TUTTO ? ':' : ' — `--all` per l\'elenco'));
  if (MOSTRA_TUTTO) for (const r of avvisi.nelSito) console.log('   - ' + r);
}
console.log('');
