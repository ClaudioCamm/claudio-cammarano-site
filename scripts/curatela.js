#!/usr/bin/env node
/**
 * Data di curatela: il giorno in cui un pezzo e' entrato nell'archivio, cioe'
 * la data del primo commit che ne ha aggiunto il file. Si calcola qui e si
 * committa, perche' il build su Netlify lavora su un clone superficiale e la
 * storia del repository non c'e'. Da rigenerare dopo ogni pubblicazione:
 *
 *   npm run curatela
 */
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const out = {};

for (const dir of ["src/curated", "src/writings"]) {
  const qui = path.join(ROOT, dir);
  if (!fs.existsSync(qui)) continue;
  for (const f of fs.readdirSync(qui).filter(n => n.endsWith(".md")).sort()) {
    const righe = execFileSync(
      "git",
      ["log", "--diff-filter=A", "--follow", "--format=%as", "--", dir + "/" + f],
      { cwd: ROOT, encoding: "utf8" }
    ).trim().split("\n").filter(Boolean);
    const data = righe[righe.length - 1];
    if (data) out[f.replace(/\.md$/, "")] = data;
  }
}

const dest = path.join(ROOT, "src/_data/curatela.json");
fs.writeFileSync(dest, JSON.stringify(out, Object.keys(out).sort(), 2) + "\n");
console.log(Object.keys(out).length + " date di curatela -> src/_data/curatela.json");
