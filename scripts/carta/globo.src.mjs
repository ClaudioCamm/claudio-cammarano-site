// Globo azimutale roteabile (home italiana, revisione "Tavole", ott 2026).
//
// La carta resta un SVG generato in build: senza JavaScript, o prima del primo
// tocco, il lettore vede esattamente la carta statica centrata su Bergamo.
// Al primo trascinamento si caricano i confini (world-atlas 110M, lo stesso
// file usato da geometria.mjs) e il globo si ridisegna seguendo il dito o il
// mouse. Al rilascio torna da solo sul centro, con un'oscillazione breve:
// la postazione non si puo' togliere, si puo' solo guardare da un'altra parte
// per un momento. Con prefers-reduced-motion il ritorno e' immediato.
//
// Bundle: npx esbuild scripts/carta/globo.src.mjs --bundle --minify --format=iife --outfile=src/js/globo.js
import { geoAzimuthalEqualArea, geoPath, geoGraticule, geoCircle, geoCentroid } from "d3-geo";
import { feature } from "topojson-client";

const BG = [9.67, 45.70];
const TINY = { "336": [12.45, 41.9], "470": [14.4, 35.9], "442": [6.13, 49.61], "196": [33.2, 35.0] };

function init(svg) {
  const fig = svg.closest(".carta-figura") || svg.parentNode;
  const proj = geoAzimuthalEqualArea().rotate([-BG[0], -BG[1]]).clipAngle(179.5).fitSize([600, 600], { type: "Sphere" });
  const path = geoPath(proj).digits(1);
  const home = proj.rotate().slice();
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  let feats = null, loading = null, raf = 0, anim = 0;
  const paths = Array.from(svg.querySelectorAll("path[data-iso]"));
  const dots = Array.from(svg.querySelectorAll("circle[data-iso]"));
  const ret = svg.querySelector(".carta-reticolo");
  const ring = svg.querySelector(".carta-anello");
  const centro = svg.querySelector(".carta-centro");
  const grat = geoGraticule().step([30, 30])();
  const anelli = [30, 60, 90, 120, 150].map(r => geoCircle().center(BG).radius(r)());

  function load() {
    if (!loading) loading = fetch("/js/mondo-110m.json").then(r => r.json()).then(t => {
      feats = {};
      feature(t, t.objects.countries).features.forEach(f => { feats[f.id] = f; });
    });
    return loading;
  }
  function draw() {
    raf = 0;
    if (!feats) return;
    paths.forEach(p => { const f = feats[p.dataset.iso]; if (f) p.setAttribute("d", path(f) || ""); });
    dots.forEach(c => {
      const id = c.dataset.iso, ll = TINY[id] || (feats[id] && geoCentroid(feats[id]));
      const xy = ll && proj(ll);
      if (xy) { c.setAttribute("cx", xy[0].toFixed(1)); c.setAttribute("cy", xy[1].toFixed(1)); }
    });
    if (ret) ret.setAttribute("d", path(grat));
    if (ring) ring.setAttribute("d", anelli.map(a => path(a)).join(""));
    if (centro) { const xy = proj(BG); centro.setAttribute("cx", xy[0].toFixed(1)); centro.setAttribute("cy", xy[1].toFixed(1)); }
  }
  function schedule() { if (!raf) raf = requestAnimationFrame(draw); }
  function setRot(r) { proj.rotate(r); schedule(); }

  // Ritorno: molla smorzata sulle due componenti della rotazione.
  function back() {
    cancelAnimationFrame(anim);
    if (reduce) { setRot(home); fig.classList.remove("is-ruotato"); return; }
    const from = proj.rotate().slice();
    // prendi la via breve in longitudine
    let dl = ((from[0] - home[0] + 540) % 360) - 180;
    const start = performance.now(), T = 1100;
    (function step(now) {
      const t = Math.min(1, (now - start) / T);
      const k = 1 - Math.exp(-6 * t) * Math.cos(9 * t);   // 0 -> 1 con un rimbalzo breve
      setRot([home[0] + dl * (1 - k), from[1] + (home[1] - from[1]) * k, 0]);
      if (t < 1) anim = requestAnimationFrame(step);
      else { setRot(home); fig.classList.remove("is-ruotato"); }
    })(start);
  }

  let drag = null;
  svg.addEventListener("pointerdown", e => {
    if (e.button !== undefined && e.button !== 0) return;
    cancelAnimationFrame(anim);
    drag = { x: e.clientX, y: e.clientY, r: proj.rotate().slice(), moved: false, id: e.pointerId, touch: e.pointerType !== "mouse" };
    load();
  });
  svg.addEventListener("pointermove", e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;      // un tocco resta un tocco: i link dei paesi funzionano
    // Sul touch decide il primo movimento: in verticale la pagina scorre
    // (touch-action: pan-y), in orizzontale il globo si prende il gesto e da
    // li' in poi gira in tutte le direzioni.
    if (!drag.moved && drag.touch && Math.abs(dy) > Math.abs(dx)) { drag = null; return; }
    if (!drag.moved) { drag.moved = true; svg.setPointerCapture(e.pointerId); fig.classList.add("is-ruotato"); }
    const k = 180 / svg.getBoundingClientRect().width;      // mezzo giro per larghezza della carta
    const lat = Math.max(-89, Math.min(89, drag.r[1] - dy * k));
    if (feats) setRot([drag.r[0] + dx * k, lat, 0]);
    e.preventDefault();
  });
  const end = e => {
    if (!drag) return;
    const moved = drag.moved; drag = null;
    if (moved) { e.preventDefault(); load().then(back); }
  };
  svg.addEventListener("pointerup", end);
  svg.addEventListener("pointercancel", end);
  // Dopo un trascinamento, il click che segue non deve aprire il paese.
  svg.addEventListener("click", e => { if (fig.classList.contains("is-ruotato")) e.preventDefault(); }, true);
  // Tastiera: le frecce ruotano di 15 gradi, Esc o un secondo e mezzo senza
  // tasti riportano su Bergamo.
  let kt = 0;
  svg.setAttribute("tabindex", "0");
  svg.addEventListener("keydown", e => {
    const step = { ArrowLeft: [15, 0], ArrowRight: [-15, 0], ArrowUp: [0, -15], ArrowDown: [0, 15] }[e.key];
    if (e.key === "Escape") { clearTimeout(kt); load().then(back); return; }
    if (!step) return;
    e.preventDefault(); cancelAnimationFrame(anim);
    load().then(() => {
      const r = proj.rotate();
      fig.classList.add("is-ruotato");
      setRot([r[0] + step[0], Math.max(-89, Math.min(89, r[1] + step[1])), 0]);
      clearTimeout(kt); kt = setTimeout(back, 1500);
    });
  });
  fig.classList.add("is-roteabile");
  // Per la verifica visiva: window.globoRuota([lon, lat]) mostra il globo ruotato.
  window.globoRuota = r => load().then(() => { fig.classList.add("is-ruotato"); proj.rotate([-r[0], -r[1], 0]); draw(); });
  window.globoCentro = () => back();
}

document.querySelectorAll(".home-carta .carta-svg").forEach(init);
