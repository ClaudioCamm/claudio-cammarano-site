#!/usr/bin/env node
/**
 * check-tags.js
 *
 * Il gemello di sync-concepts.js, ma per gli Argomenti.
 *
 * I tag dei curated sono scritti liberi e minuscoli, e diventano un Argomento
 * vero solo se tradotti in src/_data/curatedTagAliases.js. Un tag non mappato
 * non è un errore: semplicemente non genera nessuna pagina /tag/ e non compare
 * in /indice/ né in /temi/. Il che è facilissimo non notare — è successo con
 * "videogiochi", rimasto invisibile per tre mesi.
 *
 * Tre segnalazioni, in ordine di urgenza:
 *
 *   1. ALIAS MANCANTI — il tag corrisponde a un Argomento che esiste già in
 *      clusters.js. Perdita secca: l'Argomento c'è, i curated non ci entrano.
 *      Si risolve con una riga in curatedTagAliases.js.
 *   2. TAG DECORATIVI — tag non mappati che non corrispondono a nessun
 *      Argomento esistente. Scelta legittima finché è una scelta: promuoverli
 *      o lasciarli. Mostrati sopra una soglia di occorrenze; `--all` li elenca
 *      tutti.
 *   3. ARGOMENTI ORFANI — alias che puntano a un Argomento assente da
 *      clusters.js: la pagina /tag/ esiste ma non ha Tema né breadcrumb.
 *
 * I nomi di paese sono esclusi di proposito: quell'informazione vive nel campo
 * concepts: come Concetto-paese, non come Argomento (MANUALE.md §2).
 *
 * Avvisa e basta: non fa mai fallire il build.
 *
 * Uso: node scripts/check-tags.js [--all] — in package.json come "prebuild".
 */

const fs   = require('fs');
const path = require('path');

const ROOT        = path.join(__dirname, '..');
const CURATED_DIR = path.join(ROOT, 'src', 'curated');
const SOGLIA      = 3;                       // occorrenze sotto cui un tag decorativo non si segnala
const MOSTRA_TUTTO = process.argv.includes('--all');

const aliases  = require(path.join(ROOT, 'src', '_data', 'curatedTagAliases.js'));
const clusters = require(path.join(ROOT, 'src', '_data', 'clusters.js'));

// Esclusi di proposito: i paesi vanno in concepts:, non in tags:.
const PAESI = new Set([
  'cina', 'russia', 'ucraina', 'germania', 'giappone', 'iran', 'taiwan',
  'stati uniti', 'stati-uniti', 'usa', 'italia', 'europa', 'regno unito', 'africa'
]);

const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();

const mapped     = new Map(Object.entries(aliases).map(([k, v]) => [norm(k), v]));
const argomenti  = [...new Set(Object.values(clusters).flat())];
const perNome    = new Map(argomenti.map(a => [norm(a), a]));

// ─── 1. Raccogli i tag dei curated ───────────────────────────────────────────

function parseTags(raw) {
  const fm = raw.match(/^---\n[\s\S]*?\n---/);
  if (!fm) return [];
  const line = fm[0].match(/^tags:\s*\[(.*?)\]/m);
  if (!line) return [];
  return line[1].split(',').map(t => t.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
}

const usi = new Map(); // tag → [filename]

if (fs.existsSync(CURATED_DIR)) {
  for (const filename of fs.readdirSync(CURATED_DIR).filter(f => f.endsWith('.md'))) {
    const raw = fs.readFileSync(path.join(CURATED_DIR, filename), 'utf8');
    for (const tag of parseTags(raw)) {
      const n = norm(tag);
      if (n === 'curated' || PAESI.has(n)) continue;
      if (mapped.has(n)) continue;
      if (!usi.has(tag)) usi.set(tag, []);
      usi.get(tag).push(filename);
    }
  }
}

const perOccorrenze = (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]);
const mancanti   = [...usi].filter(([t]) => perNome.has(norm(t))).sort(perOccorrenze);
const decorativi = [...usi].filter(([t]) => !perNome.has(norm(t))).sort(perOccorrenze);

// ─── 2. Alias che puntano a un Argomento senza Tema ──────────────────────────

const orfani = new Map();
for (const [tag, argomento] of mapped) {
  if (perNome.has(norm(argomento))) continue;
  if (!orfani.has(argomento)) orfani.set(argomento, []);
  orfani.get(argomento).push(tag);
}

// ─── 3. Output ───────────────────────────────────────────────────────────────

const conta = n => `${n} ${n === 1 ? 'articolo' : 'articoli'}`;

if (mancanti.length === 0 && decorativi.length === 0 && orfani.size === 0) {
  console.log('[tags] ✓ Tutti i tag curated sono mappati e hanno un Tema.');
  process.exit(0);
}

if (mancanti.length > 0) {
  console.log('\n[tags] ⚠ ALIAS MANCANTI — l\'Argomento esiste già, ma i curated non ci entrano');
  console.log('        Una riga in src/_data/curatedTagAliases.js e rientrano al prossimo build.');
  for (const [tag, files] of mancanti) {
    console.log(`   - "${tag}" (${conta(files.length)}) → Argomento "${perNome.get(norm(tag))}"`);
  }
  console.log('');
}

if (decorativi.length > 0) {
  const sopra = MOSTRA_TUTTO ? decorativi : decorativi.filter(([, f]) => f.length >= SOGLIA);
  const sotto = decorativi.length - sopra.length;
  if (sopra.length > 0) {
    console.log('\n[tags] ⚠ Tag decorativi ricorrenti (nessuna pagina /tag/, assenti da /indice/ e /temi/)');
    console.log('        Promuoverli ad Argomento o lasciarli: l\'importante è che sia una scelta (MANUALE.md §2).');
    for (const [tag, files] of sopra) {
      console.log(`   - "${tag}" (${conta(files.length)})`);
    }
  }
  if (sotto > 0) {
    console.log(`   … e altri ${sotto} tag decorativi sotto le ${SOGLIA} occorrenze — \`node scripts/check-tags.js --all\` per l'elenco completo.`);
  }
  console.log('');
}

if (orfani.size > 0) {
  console.log('\n[tags] ⚠ Argomenti senza Tema in clusters.js (pagina /tag/ orfana: niente Tema, niente breadcrumb)');
  for (const [argomento, tags] of orfani) {
    console.log(`   - "${argomento}" ← ${tags.map(t => `"${t}"`).join(', ')}`);
  }
  console.log('');
}
