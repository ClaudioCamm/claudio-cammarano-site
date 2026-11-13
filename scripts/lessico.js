#!/usr/bin/env node
/**
 * Il lessico della ricerca: le parole che compaiono nel sito costruito, con la
 * loro frequenza. Serve alla ricerca per proporre parole simili quando la
 * parola cercata non c'e' o e' scritta male (Pagefind cerca per parola intera
 * e per prefisso, non perdona i refusi).
 *
 * Legge le pagine in _site dentro <main data-pagefind-body>, toglie script e
 * tag, normalizza (minuscole, niente accenti) e tiene le parole da 4 lettere
 * in su. Scrive _site/pagefind-lessico.json: { parola: frequenza }.
 * Gira dopo Eleventy e prima di Pagefind (vedi "build" in package.json).
 */
const fs = require("fs");
const path = require("path");

const SITE = process.argv[2] || "_site";
const OUT = path.join(SITE, "pagefind-lessico.json");
const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function* pages(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!/^(pagefind|mb|fonts|images|downloads|js|css)$/.test(e.name)) yield* pages(p); }
    else if (e.name.endsWith(".html")) yield p;
  }
}

const freq = new Map();
let n = 0;
for (const f of pages(SITE)) {
  const html = fs.readFileSync(f, "utf8");
  const m = html.match(/<main[^>]*data-pagefind-body[^>]*>([\s\S]*?)<\/main>/);
  if (!m) continue;
  n++;
  const text = m[1]
    .replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ");
  for (const w of norm(text).match(/[a-z][a-z'’-]{3,}/g) || []) {
    const k = w.replace(/^[^a-z]+|[^a-z]+$/g, "").replace(/['’].*$/, "");
    if (k.length < 4 || k.length > 24) continue;
    freq.set(k, (freq.get(k) || 0) + 1);
  }
}
const out = Object.fromEntries([...freq].filter(([, c]) => c >= 2).sort((a, b) => b[1] - a[1]));
fs.writeFileSync(OUT, JSON.stringify(out));
console.log(`[lessico] ${Object.keys(out).length} parole da ${n} pagine -> ${OUT}`);
