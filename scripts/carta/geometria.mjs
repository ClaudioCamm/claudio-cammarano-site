// Geometria della carta "Dove guarda questo sito" (audit 2026, L9).
// Proiezione di Goode interrotta, confini Natural Earth 1:110M (world-atlas).
// Si lancia solo quando cambia la geometria, non a ogni build:
//   npm i --no-save d3-geo d3-geo-projection topojson-client world-atlas
//   node scripts/carta/geometria.mjs
// Scrive src/_data/cartaGeometria.json (percorsi SVG per codice ISO).
import * as d3 from "d3-geo";
import * as P from "d3-geo-projection";
import { feature } from "topojson-client";
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const topo = require("world-atlas/countries-110m.json");

const W = 800;
// Taglia i poligoni che attraversano l'interruzione nord di Goode (-40°),
// altrimenti la Groenlandia si stende sopra i lobi.
function clip(ring, left, X) {
  const out = [], inside = p => left ? p[0] <= X : p[0] >= X;
  for (let i = 0; i < ring.length - 1; i++) {
    const a = ring[i], b = ring[i + 1], ia = inside(a), ib = inside(b);
    if (ia) out.push(a);
    if (ia !== ib) { const t = (X - a[0]) / (b[0] - a[0]); out.push([X, a[1] + t * (b[1] - a[1])]); }
  }
  if (out.length) out.push(out[0]);
  return out;
}
function split(g, X = -40) {
  const polys = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : null;
  if (!polys) return g;
  const res = [];
  for (const poly of polys) {
    const xs = poly[0].map(c => c[0]), lat = Math.max(...poly[0].map(c => c[1]));
    if (lat > 0 && Math.min(...xs) < X && Math.max(...xs) > X) {
      for (const [l, off] of [[true, -1e-4], [false, 1e-4]]) {
        const r = clip(poly[0], l, X + off);
        if (r.length > 3) {
          if (d3.geoArea({ type: "Polygon", coordinates: [r] }) > 2 * Math.PI) r.reverse();
          res.push([r]);
        }
      }
    } else res.push(poly);
  }
  return { type: "MultiPolygon", coordinates: res };
}

const proj = P.geoInterruptedHomolosine().fitWidth(W, { type: "Sphere" });
const path = d3.geoPath(proj).digits(0);
const b = path.bounds({ type: "Sphere" });
const countries = {};
for (const f of feature(topo, topo.objects.countries).features) {
  if (f.id === "010" || !f.id) continue; // Antartide esclusa
  const geom = split(f.geometry);
  const d = path({ type: "Feature", geometry: geom });
  if (!d) continue;
  const [cx, cy] = proj(d3.geoCentroid(f)) || [0, 0];
  countries[f.id] = { d, cx: +cx.toFixed(1), cy: +cy.toFixed(1), area: Math.round(path.area(geom)) };
}
// Stati troppo piccoli per la scala 1:110M: solo il punto.
const tiny = { "336": [12.45, 41.9], "470": [14.4, 35.9], "442": [6.13, 49.61], "196": [33.2, 35.0] };
for (const [id, ll] of Object.entries(tiny)) {
  if (countries[id]) continue;
  const [cx, cy] = proj(ll);
  countries[id] = { d: "", cx: +cx.toFixed(1), cy: +cy.toFixed(1), area: 0 };
}
const out = {
  _nota: "Generato da scripts/carta/geometria.mjs. Non modificare a mano.",
  viewBox: `0 ${Math.floor(b[0][1]) - 1} ${W} ${Math.ceil(b[1][1] - b[0][1]) + 2}`,
  sphere: path({ type: "Sphere" }),
  graticule: path(d3.geoGraticule().step([30, 30])()),
  countries
};
fs.writeFileSync(new URL("../../src/_data/cartaGeometria.json", import.meta.url), JSON.stringify(out));
console.log("paesi:", Object.keys(countries).length, "byte:", JSON.stringify(out).length);
