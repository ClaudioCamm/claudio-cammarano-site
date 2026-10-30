// Globo azimutale roteabile (home italiana, revisione "Tavole", ott 2026).
//
// Interazione (rev. 30/10): trascinamento con inerzia; un tocco a globo
// ruotato avvia la panoramica e il rientro; senza gesti rientra da solo.
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

  // Comportamento (30/10):
  // - trascinamento libero, con inerzia al rilascio: il globo resta dove lo
  //   si lascia, niente piu' ritorno immediato;
  // - un tocco sul globo gia' ruotato avvia la panoramica: un giro completo
  //   su un asse che cambia mentre gira, poi l'atterraggio composto su Bergamo;
  // - senza altri gesti, dopo IDLE ms il globo rientra da solo, con calma.
  const IDLE = 6000;
  let idle = 0;
  const fine = () => { setRot(home); fig.classList.remove("is-ruotato", "is-panoramica"); };
  const easeInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  function armaIdle() { clearTimeout(idle); idle = setTimeout(() => { if (!drag) back(1400); }, IDLE); }
  function stop() { cancelAnimationFrame(anim); clearTimeout(idle); fig.classList.remove("is-panoramica"); }

  // Rientro semplice, senza rimbalzo: ease-out quartica.
  function back(T = 900) {
    stop();
    if (reduce) return fine();
    const from = proj.rotate().slice();
    const dl = ((from[0] - home[0] + 540) % 360) - 180;
    const start = performance.now();
    (function step(now) {
      const t = Math.min(1, (now - start) / T), k = 1 - Math.pow(1 - t, 4);
      setRot([home[0] + dl * (1 - k), from[1] + (home[1] - from[1]) * k, from[2] * (1 - k)]);
      if (t < 1) anim = requestAnimationFrame(step); else fine();
    })(start);
  }

  // Panoramica: la longitudine fa un giro intero (piu' la distanza da casa),
  // latitudine e inclinazione oscillano con fasi casuali, cosi' l'asse di
  // rotazione cambia a ogni giro e si vedono anche i poli. Accelera,
  // scorre, rallenta e si posa su Bergamo senza oltrepassarla.
  function panoramica() {
    stop();
    if (reduce) return fine();
    fig.classList.add("is-ruotato", "is-panoramica");
    const from = proj.rotate().slice();
    const verso = Math.random() < .5 ? -1 : 1;
    const dl = ((home[0] - from[0] + 540) % 360) - 180;
    const giro = dl + verso * 360;
    const A = 28 + Math.random() * 22, G = 12 + Math.random() * 14, f = Math.random() * Math.PI * 2;
    const start = performance.now(), T = 6200;
    (function step(now) {
      const t = Math.min(1, (now - start) / T), k = easeInOut(t);
      const inv = Math.sin(Math.PI * t);                      // nullo all'inizio e alla fine
      const lat = from[1] + (home[1] - from[1]) * k + A * inv * Math.sin(2 * Math.PI * t + f);
      const roll = from[2] * (1 - k) + G * inv * Math.sin(3 * Math.PI * t + f);
      setRot([from[0] + giro * k, Math.max(-89, Math.min(89, lat)), roll]);
      if (t < 1) anim = requestAnimationFrame(step); else fine();
    })(start);
  }

  // Inerzia: velocita' misurata sugli ultimi movimenti, attrito esponenziale.
  function inerzia(vx, vy) {
    let last = performance.now();
    (function step(now) {
      const dt = Math.min(48, now - last); last = now;
      const r = proj.rotate();
      setRot([r[0] + vx * dt, Math.max(-89, Math.min(89, r[1] - vy * dt)), r[2]]);
      const att = Math.pow(0.0025, dt / 1000);                // circa -95% al secondo
      vx *= att; vy *= att;
      if (Math.hypot(vx, vy) > 0.004) anim = requestAnimationFrame(step); else armaIdle();
    })(last);
  }

  let drag = null;
  svg.addEventListener("pointerdown", e => {
    if (e.button !== undefined && e.button !== 0) return;
    const ruotato = fig.classList.contains("is-ruotato");
    stop();
    drag = { x: e.clientX, y: e.clientY, r: proj.rotate().slice(), moved: false, id: e.pointerId, touch: e.pointerType !== "mouse", ruotato: ruotato, campioni: [] };
    load();
  });
  svg.addEventListener("pointermove", e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;      // un tocco resta un tocco
    if (!drag.moved && drag.touch && Math.abs(dy) > Math.abs(dx)) { drag = null; return; }   // in verticale scorre la pagina
    if (!drag.moved) { drag.moved = true; svg.setPointerCapture(e.pointerId); fig.classList.add("is-ruotato"); }
    const k = 180 / svg.getBoundingClientRect().width;      // mezzo giro per larghezza della carta
    drag.k = k;
    drag.campioni.push([performance.now(), e.clientX, e.clientY]);
    if (drag.campioni.length > 6) drag.campioni.shift();
    if (feats) setRot([drag.r[0] + dx * k, Math.max(-89, Math.min(89, drag.r[1] - dy * k)), drag.r[2]]);
    e.preventDefault();
  });
  const end = e => {
    if (!drag) return;
    const d = drag; drag = null;
    if (d.moved) {
      e.preventDefault();
      const c = d.campioni, a = c[0], b = c[c.length - 1];
      const dt = b && a ? b[0] - a[0] : 0;
      const fermo = !b || performance.now() - b[0] > 80;        // dito fermo prima di alzarlo: niente inerzia
      if (dt > 0 && !fermo) load().then(() => inerzia((b[1] - a[1]) / dt * d.k, (b[2] - a[2]) / dt * d.k));
      else armaIdle();
    } else if (d.ruotato && e.type === "pointerup") {
      // Secondo tocco, a globo ruotato: panoramica e ritorno.
      d.panoramica = true; load().then(panoramica);
    } else if (d.ruotato) armaIdle();
    lastTap = d;
  };
  let lastTap = null;
  svg.addEventListener("pointerup", end);
  svg.addEventListener("pointercancel", end);
  // A globo ruotato il click non apre il paese: e' un comando per il globo.
  svg.addEventListener("click", e => { if (fig.classList.contains("is-ruotato") || (lastTap && lastTap.panoramica)) e.preventDefault(); }, true);
  // Tastiera: frecce per ruotare, Invio o spazio per la panoramica, Esc per
  // il rientro immediato.
  svg.setAttribute("tabindex", "0");
  svg.addEventListener("mousedown", e => e.preventDefault());
  svg.addEventListener("keydown", e => {
    const step = { ArrowLeft: [15, 0], ArrowRight: [-15, 0], ArrowUp: [0, -15], ArrowDown: [0, 15] }[e.key];
    if (e.key === "Escape") { load().then(() => back()); return; }
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); load().then(panoramica); return; }
    if (!step) return;
    e.preventDefault(); stop();
    load().then(() => {
      const r = proj.rotate();
      fig.classList.add("is-ruotato");
      setRot([r[0] + step[0], Math.max(-89, Math.min(89, r[1] + step[1])), r[2]]);
      armaIdle();
    });
  });
  fig.classList.add("is-roteabile");
  // Per la verifica visiva: window.globoRuota([lon, lat]) mostra il globo ruotato.
  window.globoRuota = r => load().then(() => { fig.classList.add("is-ruotato"); proj.rotate([-r[0], -r[1], 0]); draw(); });
  window.globoCentro = () => back();
  window.globoPanoramica = () => load().then(panoramica);
}

document.querySelectorAll(".home-carta .carta-svg").forEach(init);
