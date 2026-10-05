/**
 * Peso di un pezzo nell'indice dei concetti.
 *
 * Un pezzo non vale uno per tutti. Un saggio o una catena e' lavoro proprio,
 * un curated e' una selezione: il primo vale 1,5, il secondo 1. E un curated
 * che una catena cita fra le proprie fonti prende un quarto di punto in piu'
 * per ogni catena che lo usa, perche' essere servito a costruire
 * un'argomentazione e' un uso in piu' rispetto all'essere archiviato.
 *
 * Usato da:
 *   - .eleventy.js, filtro cartaGeo (il peso dei paesi nella carta in home)
 *   - src/_data/graphLayout.js (la dimensione dei nodi in /mappa/)
 * Il conteggio mostrato a schermo resta un conteggio: «3 pezzi», non «3,5».
 * Vedi /colophon/#carta.
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ROOT = path.join(__dirname, "..");

const PESO_WRITING = 1.5;
const BONUS_CATENA = 0.25;

let _catene = null;

// slug del curated -> quante catene lo citano in `fonti`
function catenePerSlug() {
  if (_catene) return _catene;
  const dir = path.join(ROOT, "src", "writings");
  const out = {};
  fs.readdirSync(dir).filter(function (f) { return f.endsWith(".md"); }).forEach(function (f) {
    const d = matter(fs.readFileSync(path.join(dir, f), "utf8")).data || {};
    if (d.layout !== "layouts/catena.njk") return;
    (Array.isArray(d.fonti) ? d.fonti : []).forEach(function (s) {
      const k = String(s).trim();
      if (k) out[k] = (out[k] || 0) + 1;
    });
  });
  _catene = out;
  return out;
}

function pesoArticolo(a) {
  const url = (a && a.url) || "";
  const base = url.indexOf("/writings/") === 0 ? PESO_WRITING : 1;
  if (url.indexOf("/curated/") !== 0) return base;
  const slug = url.slice("/curated/".length).replace(/\/$/, "");
  return base + BONUS_CATENA * (catenePerSlug()[slug] || 0);
}

function somma(articles) {
  return (articles || []).reduce(function (t, a) { return t + pesoArticolo(a); }, 0);
}

module.exports = { PESO_WRITING, BONUS_CATENA, catenePerSlug, pesoArticolo, somma };
