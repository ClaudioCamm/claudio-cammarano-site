#!/usr/bin/env node
/**
 * validate-concepts.js
 *
 * Controllo di integrità dell'indice concettuale, eseguito nel prebuild.
 * Fallisce il build — di proposito: un legame che punta a un nome inesistente
 * o un articolo che non c'è più spariscono in silenzio, e non te ne accorgi
 * per mesi. Meglio un build rotto adesso.
 *
 * Controlla:
 *   1. `related` — il nome puntato esiste, non è se stesso, non è ripetuto,
 *      l'arco non è dichiarato in entrambe le direzioni, il `why` c'è ed è
 *      breve, e non più di 5 legami per voce.
 *   2. `articles` — ogni url corrisponde a un file sorgente esistente.
 *   3. `sameAs` — è un array di URL http(s).
 *
 * Uso: node scripts/validate-concepts.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const index = require(path.join(ROOT, 'src', '_data', 'conceptsIndex.js'));

const MAX_RELATED = 5;
const MAX_WHY = 160;
const PREFIX_DIR = {
  '/writings/': 'src/writings',
  '/curated/':  'src/curated',
  '/learning/': 'src/learning',
  '/lab/':      'src/lab',
};

const errors = [];
const byName = new Map(index.map(c => [c.name, c]));
const declared = new Map(); // "A|B" ordinato -> nome che l'ha dichiarato

for (const c of index) {
  // ── sameAs ──────────────────────────────────────────────────────────────
  if (c.sameAs !== undefined) {
    if (!Array.isArray(c.sameAs) || !c.sameAs.length) {
      errors.push(`"${c.name}": sameAs deve essere un array non vuoto`);
    } else {
      c.sameAs.forEach(u => {
        if (typeof u !== 'string' || !/^https?:\/\//.test(u)) {
          errors.push(`"${c.name}": sameAs non è un URL — ${JSON.stringify(u)}`);
        }
      });
    }
  }

  // ── articles ────────────────────────────────────────────────────────────
  for (const a of (c.articles || [])) {
    if (!a || typeof a.url !== 'string') {
      errors.push(`"${c.name}": articolo senza url`);
      continue;
    }
    const prefix = Object.keys(PREFIX_DIR).find(p => a.url.startsWith(p));
    if (!prefix) continue; // prefisso non gestito: non è compito di questo script
    const slug = a.url.slice(prefix.length).replace(/\/$/, '');
    if (!slug) continue; // url della sezione (es. /lab/): e' una pagina indice, non un sorgente
    const file = path.join(ROOT, PREFIX_DIR[prefix], slug + '.md');
    if (!fs.existsSync(file)) {
      errors.push(`"${c.name}": l'articolo ${a.url} non ha un sorgente (${path.relative(ROOT, file)})`);
    }
  }

  // ── related ─────────────────────────────────────────────────────────────
  if (c.related === undefined) continue;
  if (!Array.isArray(c.related)) {
    errors.push(`"${c.name}": related deve essere un array`);
    continue;
  }
  if (c.related.length > MAX_RELATED) {
    errors.push(`"${c.name}": ${c.related.length} legami, il massimo è ${MAX_RELATED}`);
  }
  const seen = new Set();
  for (const r of c.related) {
    if (!r || typeof r.name !== 'string') {
      errors.push(`"${c.name}": legame senza name`);
      continue;
    }
    if (r.name === c.name) {
      errors.push(`"${c.name}": legame verso se stesso`);
      continue;
    }
    if (!byName.has(r.name)) {
      errors.push(`"${c.name}": legame verso "${r.name}", che non è nell'indice`);
      continue;
    }
    if (seen.has(r.name)) {
      errors.push(`"${c.name}": legame verso "${r.name}" ripetuto`);
      continue;
    }
    seen.add(r.name);
    if (!r.why || !String(r.why).trim()) {
      errors.push(`"${c.name}" → "${r.name}": manca il why`);
    } else if (String(r.why).length > MAX_WHY) {
      errors.push(`"${c.name}" → "${r.name}": why di ${String(r.why).length} caratteri, il massimo è ${MAX_WHY}`);
    }
    const key = [c.name, r.name].sort().join(' | ');
    if (declared.has(key)) {
      errors.push(`arco "${key}" dichiarato due volte (in "${declared.get(key)}" e in "${c.name}"): va dichiarato una volta sola, viene reso in entrambe le direzioni`);
    } else {
      declared.set(key, c.name);
    }
  }
}

const withRelated = index.filter(c => c.related && c.related.length).length;
if (errors.length) {
  console.error(`\n[concepts] ✗ ${errors.length} problemi nell'indice concettuale:\n`);
  errors.forEach(e => console.error('  - ' + e));
  console.error('');
  process.exit(1);
}
console.log(`[concepts] ✓ indice valido — ${index.length} voci, ${declared.size} legami dichiarati su ${withRelated} voci.`);
