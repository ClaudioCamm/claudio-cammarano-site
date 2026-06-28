#!/usr/bin/env node
/**
 * sync-concepts.js
 *
 * Pre-build script: confronta i `concepts` dei post curated con conceptsIndex.js.
 *
 * Livello 1 (automatico): se un concetto esiste in conceptsIndex.js ma manca
 *   l'articolo curated nel suo array `articles`, lo aggiunge.
 *
 * Livello 2 (avviso): se un concetto nei curated non esiste affatto in
 *   conceptsIndex.js, stampa un avviso da gestire manualmente.
 *
 * Uso: node scripts/sync-concepts.js
 * Integrato in package.json come "prebuild".
 */

const fs   = require('fs');
const path = require('path');

const ROOT          = path.join(__dirname, '..');
const CURATED_DIR   = path.join(ROOT, 'src', 'curated');
const CONCEPTS_FILE = path.join(ROOT, 'src', '_data', 'conceptsIndex.js');

// ─── 1. Leggi e parsa i file curated ────────────────────────────────────────

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  match[1].split('\n').forEach(line => {
    const colon = line.indexOf(':');
    if (colon === -1) return;
    const key = line.slice(0, colon).trim();
    let val   = line.slice(colon + 1).trim();
    // Rimuovi virgolette esterne
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fm[key] = val;
  });
  return fm;
}

function parseConcepts(raw) {
  // Parsa `concepts: ["A", "B", "C"]` da frontmatter grezzo
  const match = raw.match(/^---\n[\s\S]*?\n---/);
  if (!match) return [];
  const block = match[0];
  const cLine = block.match(/concepts:\s*(\[[\s\S]*?\])/);
  if (!cLine) return [];
  try {
    // Sicuro: solo stringhe dentro array
    const arr = cLine[1].match(/"([^"]+)"/g);
    return arr ? arr.map(s => s.replace(/"/g, '')) : [];
  } catch {
    return [];
  }
}

const curatedFiles = fs.readdirSync(CURATED_DIR)
  .filter(f => f.endsWith('.md'))
  .map(filename => {
    const raw      = fs.readFileSync(path.join(CURATED_DIR, filename), 'utf8');
    const fm       = parseFrontmatter(raw);
    const concepts = parseConcepts(raw);
    const slug     = filename.replace(/\.md$/, '');
    const url      = `/curated/${slug}/`;
    return { filename, title: fm.title || slug, url, concepts };
  })
  .filter(f => f.concepts.length > 0);

// ─── 2. Leggi conceptsIndex.js ──────────────────────────────────────────────

// Cancella la cache require per rileggere ogni volta
delete require.cache[require.resolve(CONCEPTS_FILE)];
const conceptsIndex = require(CONCEPTS_FILE);

// Mappa nome → entry (per lookup veloce)
const byName = new Map(conceptsIndex.map(c => [c.name, c]));

// ─── 3. Analisi discrepanze ──────────────────────────────────────────────────

const toAdd   = []; // { conceptName, article }  — livello 1
const missing = []; // { conceptName, filename }  — livello 2

for (const post of curatedFiles) {
  for (const concept of post.concepts) {
    const entry = byName.get(concept);
    if (!entry) {
      missing.push({ conceptName: concept, filename: post.filename });
      continue;
    }
    // Controlla se l'articolo è già nell'array
    const alreadyIn = entry.articles.some(a => a.url === post.url);
    if (!alreadyIn) {
      toAdd.push({
        conceptName: concept,
        article: { title: post.title, url: post.url, _source: 'curated' }
      });
    }
  }
}

// ─── 4. Livello 1 — aggiornamento automatico ─────────────────────────────────

if (toAdd.length === 0 && missing.length === 0) {
  console.log('[concepts] ✓ Tutto sincronizzato.');
  process.exit(0);
}

if (toAdd.length > 0) {
  let src = fs.readFileSync(CONCEPTS_FILE, 'utf8');

  for (const { conceptName, article } of toAdd) {
    const nameStr  = `name: "${conceptName}"`;
    const pos      = src.indexOf(nameStr);
    if (pos === -1) continue;

    const emptyArr = '    articles: []';
    const emptyPos = src.indexOf(emptyArr, pos);
    const closeArr = '\n    ]';
    const closePos = src.indexOf(closeArr, pos);

    // Caso: articles: []
    if (emptyPos !== -1 && (closePos === -1 || emptyPos < closePos)) {
      const newArr = `    articles: [\n      { title: "${article.title}", url: "${article.url}", _source: "${article._source}" }\n    ]`;
      src = src.slice(0, emptyPos) + newArr + src.slice(emptyPos + emptyArr.length);
    } else if (closePos !== -1) {
      // Caso: array con articoli esistenti — appendi prima del ]
      const newLine = `,\n      { title: "${article.title}", url: "${article.url}", _source: "${article._source}" }`;
      src = src.slice(0, closePos) + newLine + src.slice(closePos);
    }

    console.log(`[concepts] ✓ Aggiunto "${article.title}" → ${conceptName}`);
  }

  fs.writeFileSync(CONCEPTS_FILE, src, 'utf8');
}

// ─── 5. Livello 2 — avvisi manuali ───────────────────────────────────────────

if (missing.length > 0) {
  console.log('\n[concepts] ⚠ Concetti non in conceptsIndex.js (da aggiungere manualmente):');
  // Raggruppa per concetto
  const grouped = {};
  for (const { conceptName, filename } of missing) {
    if (!grouped[conceptName]) grouped[conceptName] = [];
    grouped[conceptName].push(filename);
  }
  for (const [name, files] of Object.entries(grouped)) {
    console.log(`  - "${name}" (citato in: ${files.join(', ')})`);
  }
  console.log('');
}
