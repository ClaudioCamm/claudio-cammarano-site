// Globo azimutale roteabile (home italiana, revisione "Tavole").
//
// La carta resta un SVG generato in build: senza JavaScript, o prima del primo
// gesto, il lettore vede esattamente la carta statica centrata su Bergamo.
// Al primo gesto si caricano i confini (world-atlas 110M, lo stesso file usato
// da geometria.mjs) e il globo si ridisegna.
//
// Comportamento (30/10):
// - tocco puntuale: il globo ruota lungo il cerchio massimo che passa per
//   Bergamo e per il punto toccato, porta quel punto al centro, si ferma un
//   istante e prosegue nello stesso moto, alla stessa velocita', fino a
//   chiudere il giro e posarsi di nuovo su Bergamo;
// - trascinamento: il giro parte subito nella direzione del gesto, a
//   velocita' di crociera, senza soste, e si chiude su Bergamo;
//   Se il punto e' un paese con dati, durante la sosta il paese si evidenzia
//   e compare un'etichetta con nome e peso: se ha una pagina, l'etichetta e'
//   il link per aprirla. Su desktop il paese si evidenzia gia' al passaggio
//   del mouse, e Cmd/Ctrl+clic apre direttamente la pagina;
// - un tocco mentre il globo gira lo riporta indietro su Bergamo (reset);
// - frecce sinistra/destra: tenute premute fanno girare il globo sul suo asse
//   naturale; lasciate, dopo un momento il globo rientra. Esc: reset.
// Il moto lungo il cerchio massimo e' costruito con matrici di rotazione e
// convertito negli angoli di d3: niente torsioni vicino ai poli.
// Con prefers-reduced-motion niente giri: il globo resta su Bergamo.
//
// Bundle: npx esbuild scripts/carta/globo.src.mjs --bundle --minify --format=iife --outfile=src/js/globo.js
import { geoAzimuthalEqualArea, geoPath, geoGraticule, geoCircle, geoCentroid } from "d3-geo";
import { feature } from "topojson-client";

const BG = [9.67, 45.70];
const TINY = { "336": [12.45, 41.9], "470": [14.4, 35.9], "442": [6.13, 49.61], "196": [33.2, 35.0] };
const RAD = Math.PI / 180, DEG = 180 / Math.PI;
const CROCIERA = 0.055;   // gradi al millisecondo: un giro completo in circa 7 secondi
const RAMPA = 700;        // ms per accelerare da fermo alla velocita' di crociera
const PAUSA = 700;        // ms di sosta sul punto toccato
const PAUSA_PAESE = 1500; // sosta piu' lunga quando il punto e' un paese con una pagina

// --- algebra minima: vettori sulla sfera e matrici 3x3 ---
const cart = ([l, p]) => { l *= RAD; p *= RAD; return [Math.cos(p) * Math.cos(l), Math.cos(p) * Math.sin(l), Math.sin(p)]; };
const sfer = ([x, y, z]) => [Math.atan2(y, x) * DEG, Math.asin(Math.max(-1, Math.min(1, z))) * DEG];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const croce = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norma = v => { const n = Math.hypot(v[0], v[1], v[2]); return [v[0] / n, v[1] / n, v[2] / n]; };
const mul = (A, B) => A.map(r => [0, 1, 2].map(j => r[0] * B[0][j] + r[1] * B[1][j] + r[2] * B[2][j]));
const app = (A, v) => A.map(r => dot(r, v));
const tra = A => [0, 1, 2].map(i => [A[0][i], A[1][i], A[2][i]]);
function asse(n, t) {   // Rodrigues: rotazione di t radianti attorno al versore n
  const [x, y, z] = n, c = Math.cos(t), s = Math.sin(t), C = 1 - c;
  return [[c + x * x * C, x * y * C - z * s, x * z * C + y * s],
          [y * x * C + z * s, c + y * y * C, y * z * C - x * s],
          [z * x * C - y * s, z * y * C + x * s, c + z * z * C]];
}
// Matrice della rotazione di d3 [lambda, phi, gamma] (d3-geo/src/rotation.js).
function daAngoli([l, p, g]) {
  l *= RAD; p *= RAD; g *= RAD;
  const Rz = [[Math.cos(l), -Math.sin(l), 0], [Math.sin(l), Math.cos(l), 0], [0, 0, 1]];
  const Ry = [[Math.cos(p), 0, -Math.sin(p)], [0, 1, 0], [Math.sin(p), 0, Math.cos(p)]];
  const Rx = [[1, 0, 0], [0, Math.cos(g), -Math.sin(g)], [0, Math.sin(g), Math.cos(g)]];
  return mul(Rx, mul(Ry, Rz));
}
// E l'inversa: dalla matrice agli angoli che d3 si aspetta.
function adAngoli(M) {
  const T = tra(M);
  const C = sfer(app(T, [1, 0, 0]));                     // il punto che finisce al centro
  const l = -C[0], p = -C[1];
  const v = app(daAngoli([l, p, 0]), app(T, [0, 0, 1])); // dove finisce il "su", prima del rollio
  return [l, p, Math.atan2(v[1], v[2]) * DEG];
}

// Profilo di velocita' a trapezio: accelera, viaggia a velocita' costante,
// frena. Restituisce durata e posizione (gradi) al tempo t.
function tratto(A) {
  let r = RAMPA, v = CROCIERA;
  if (A < v * r) { r = Math.sqrt(A * r / v); v = A / r; }   // tratto corto: profilo a triangolo
  const T = 2 * r + (A - v * r) / v, a = v / r;
  return { T, pos: t => t <= 0 ? 0 : t >= T ? A : t < r ? a * t * t / 2 : t < T - r ? v * r / 2 + v * (t - r) : A - a * (T - t) * (T - t) / 2 };
}

function init(svg) {
  const fig = svg.closest(".carta-figura") || svg.parentNode;
  const proj = geoAzimuthalEqualArea().rotate([-BG[0], -BG[1]]).clipAngle(179.5).fitSize([600, 600], { type: "Sphere" });
  const path = geoPath(proj).digits(1);
  const home = proj.rotate().slice();
  const M0 = daAngoli(home), B = cart(BG);
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  let feats = null, loading = null, raf = 0, anim = 0, inMoto = false;
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
  // Etichetta del paese puntato, sopra la carta (fuori dall'SVG, cosi' il
  // tocco sull'etichetta non viene preso dal globo).
  fig.style.position = "relative";
  const et = document.createElement("a");
  et.className = "globo-etichetta";
  et.setAttribute("aria-live", "polite");
  fig.appendChild(et);
  let puntati = [];
  function mostra(info) {
    if (!info) return;
    et.innerHTML = "<b></b> <span></span>" + (info.href ? " <i>&#8594;</i>" : "");
    et.querySelector("b").textContent = info.nome;
    et.querySelector("span").textContent = info.peso || "";
    if (info.href) et.setAttribute("href", info.href); else et.removeAttribute("href");
    const r = svg.getBoundingClientRect(), f = fig.getBoundingClientRect();
    et.style.left = (r.left - f.left + r.width / 2) + "px";
    et.style.top = (r.top - f.top + r.height / 2) + "px";
    puntati = Array.from(svg.querySelectorAll('[data-iso="' + info.iso + '"]'));
    puntati.forEach(el => el.classList.add("is-puntato"));
    et.classList.add("is-visibile");
  }
  function nascondi() {
    et.classList.remove("is-visibile");
    puntati.forEach(el => el.classList.remove("is-puntato")); puntati = [];
  }
  // Dati del paese sotto il dito: nome e peso dal <title>, pagina dal link.
  function paese(target) {
    const el = target && target.closest && target.closest("[data-iso]");
    if (!el) return null;
    const t = el.querySelector("title"), a = el.closest("a");
    if (!t) return null;
    const testo = t.textContent, m = testo.match(/peso (\d+)/);
    return { iso: el.dataset.iso, nome: testo.split(" · ")[0], peso: m ? m[1] : "", href: a ? a.getAttribute("href") : "" };
  }

  function schedule() { if (!raf) raf = requestAnimationFrame(draw); }
  function setRot(r) { proj.rotate(r); schedule(); }
  function fine() { inMoto = false; setRot(home); fig.classList.remove("is-ruotato"); }
  function stop() { cancelAnimationFrame(anim); inMoto = false; nascondi(); }

  // Reset: il rientro di sempre, secco e senza rimbalzo (ease-out quartica),
  // lungo l'arco piu' breve fra l'orientamento attuale e quello di casa.
  function back(T = 650) {
    stop();
    if (reduce) return fine();
    const M1 = daAngoli(proj.rotate());
    const R = mul(M0, tra(M1));                             // porta l'orientamento attuale a casa
    const ang = Math.acos(Math.max(-1, Math.min(1, (R[0][0] + R[1][1] + R[2][2] - 1) / 2)));
    if (ang < 1e-4) return fine();
    const n = norma([R[2][1] - R[1][2], R[0][2] - R[2][0], R[1][0] - R[0][1]]);
    const start = performance.now();
    inMoto = true; fig.classList.add("is-ruotato");
    (function step(now) {
      const t = Math.min(1, (now - start) / T), k = 1 - Math.pow(1 - t, 4);
      setRot(adAngoli(mul(asse(n, ang * k), M1)));
      if (t < 1) anim = requestAnimationFrame(step); else fine();
    })(start);
  }

  // Giro lungo il cerchio massimo da Bergamo verso D: il centro della carta
  // percorre l'intero cerchio. Se `sosta` e' un angolo, il globo si ferma
  // li' per PAUSA ms e riparte alla stessa velocita'.
  function giro(D, sosta, info) {
    stop();
    if (reduce) return fine();
    let n = croce(B, cart(D));
    if (Math.hypot(n[0], n[1], n[2]) < 1e-6) n = croce(B, [0, 0, 1]);
    n = norma(n);
    const at = s => setRot(adAngoli(mul(M0, asse(n, -s * RAD))));   // al centro c'e' B ruotato di s attorno a n
    const segm = sosta ? [tratto(sosta), null, tratto(360 - sosta)] : [tratto(360)];
    const durate = segm.map(x => x ? x.T : (info && info.href ? PAUSA_PAESE : PAUSA)), offs = sosta ? [0, sosta, sosta] : [0];
    let fase = 0;
    const start = performance.now();
    inMoto = true; fig.classList.add("is-ruotato");
    (function step(now) {
      let t = now - start, i = 0;
      while (i < segm.length - 1 && t > durate[i]) { t -= durate[i]; i++; }
      const x = segm[i];
      if (i !== fase) { fase = i; if (i === 1) mostra(info); else nascondi(); }
      at(offs[i] + (x ? x.pos(Math.min(t, x.T)) : 0));
      if (i < segm.length - 1 || t < durate[i]) anim = requestAnimationFrame(step); else fine();
    })(start);
  }

  // Coordinate SVG (viewBox 600x600) di un evento.
  const inSvg = e => { const r = svg.getBoundingClientRect(); return [(e.clientX - r.left) * 600 / r.width, (e.clientY - r.top) * 600 / r.height]; };

  let gesto = null;
  svg.addEventListener("pointerdown", e => {
    if (e.button !== undefined && e.button !== 0) return;
    if (inMoto) { gesto = { reset: true }; e.preventDefault(); load().then(() => back()); return; }   // reset
    if (e.metaKey || e.ctrlKey) { gesto = null; return; }   // Cmd/Ctrl+clic: si apre il paese
    gesto = { x: e.clientX, y: e.clientY, p: inSvg(e), touch: e.pointerType !== "mouse", id: e.pointerId, info: paese(e.target) };
    load();
  });
  svg.addEventListener("pointermove", e => {
    if (!gesto || gesto.reset || gesto.partito || e.pointerId !== gesto.id) return;
    const dx = e.clientX - gesto.x, dy = e.clientY - gesto.y;
    if (Math.hypot(dx, dy) < 8) return;                       // sotto la soglia resta un tocco
    if (gesto.touch && Math.abs(dy) > Math.abs(dx)) { gesto = null; return; }   // in verticale scorre la pagina
    // Trascinamento: il giro parte subito nella direzione del gesto. Il dito
    // spinge la superficie, quindi al centro arriva il punto "dietro".
    gesto.partito = true;
    e.preventDefault();
    const u = Math.hypot(dx, dy), D = proj.invert([300 - dx / u * 120, 300 - dy / u * 120]);
    load().then(() => giro(D, 0));
  });
  const end = e => {
    const g = gesto; gesto = null;
    if (!g || g.reset || g.partito || e.type !== "pointerup") return;
    const [x, y] = g.p;
    if (Math.hypot(x - 300, y - 300) > 299) return;            // fuori dalla sfera
    const P = proj.invert([x, y]);
    if (!P) return;
    const d = Math.acos(Math.max(-1, Math.min(1, dot(B, cart(P))))) * DEG;
    load().then(() => giro(P, d > 2 ? d : 0, g.info));          // vicino a Bergamo: giro senza sosta
  };
  svg.addEventListener("pointerup", end);
  svg.addEventListener("pointercancel", end);
  // Sul globo il tocco e' un comando: i link dei paesi restano nella legenda.
  svg.addEventListener("click", e => { if (!(e.metaKey || e.ctrlKey)) e.preventDefault(); }, true);

  // Frecce sinistra/destra: rotazione uniforme attorno all'asse terrestre
  // finche' il tasto resta premuto; lasciato, un momento e poi il rientro.
  // Attive quando la carta e' sullo schermo e il fuoco non e' in un campo.
  let visibile = false, spin = 0, dir = 0, rientro = 0, last = 0;
  if ("IntersectionObserver" in window) new IntersectionObserver(es => { visibile = es[0].isIntersecting; }).observe(svg);
  const campo = el => el && (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable);
  function gira(now) {
    if (!dir) return;
    const dt = last ? Math.min(48, now - last) : 16; last = now;
    const r = proj.rotate();
    setRot([r[0] + dir * CROCIERA * dt, r[1], r[2]]);
    spin = requestAnimationFrame(gira);
  }
  document.addEventListener("keydown", e => {
    if (!visibile || campo(document.activeElement) || e.altKey || e.metaKey || e.ctrlKey) return;
    if (e.key === "Escape" && fig.classList.contains("is-ruotato")) { dir = 0; load().then(() => back()); return; }
    const d = { ArrowLeft: 1, ArrowRight: -1 }[e.key];
    if (!d) return;
    e.preventDefault();
    if (dir === d) return;
    stop(); clearTimeout(rientro);
    load().then(() => { dir = d; last = 0; fig.classList.add("is-ruotato"); cancelAnimationFrame(spin); spin = requestAnimationFrame(gira); });
  });
  document.addEventListener("keyup", e => {
    if (!(e.key === "ArrowLeft" || e.key === "ArrowRight") || !dir) return;
    dir = 0; cancelAnimationFrame(spin);
    rientro = setTimeout(() => back(900), 1500);
  });

  fig.classList.add("is-roteabile");
  // Per la verifica: window.globoGiro([lon, lat]) simula un tocco su quel punto.
  window.globoGiro = P => load().then(() => giro(P, Math.acos(dot(B, cart(P))) * DEG));
  window.globoCentro = () => back();
  window.globoRot = () => proj.rotate();
}

document.querySelectorAll(".home-carta .carta-svg").forEach(init);
