/**
 * Le pagine dei claim: /en/claims/ (il carotaggio), /en/claims/<concetto>/ e
 * /en/claims/c013/. Tutto si calcola qui, a build time, da claims.js e
 * claimLayers.js: i template non fanno conti e la pagina non carica librerie.
 *
 * IL CAROTAGGIO. Ogni claim e' una colonna che attraversa i cinque strati
 * ENTIA nell'ordine della notazione, dal meno al piu' esposto all'errore:
 * tag libero, Topic, Theme, Concept, Geometry. Le fasce si leggono in
 * orizzontale (uno strato), le colonne in verticale (un claim). Le relazioni
 * fra claim (relates) sono archi sotto la riga dei claim.
 *
 * I cinque strati non sono una gerarchia a cinque piani e il disegno non
 * finge che lo siano: Topic e Theme sono fasce contigue perche' il Theme si
 * deriva dal Topic; il tag libero attraversa i concetti; la Geometry e' una
 * misura, quindi una barra e non una categoria.
 *
 * L'ordine delle colonne: Theme, Topic, Concept principale, peso decrescente,
 * numero. Cambia se cambiano i dati, ed e' giusto cosi'.
 */
const claims = require("./claims.js");
const L = require("./claimLayers.js");
const NUM = require("../../scripts/ebooks/ledger-numbers.json");

const TH = Object.fromEntries(L.THEMES.map(t => [t.key, t]));
const TO = Object.fromEntries(L.TOPICS.map(t => [t.key, t]));
const CO = Object.fromEntries(L.CONCEPTS.map(c => [c.key, c]));
const THEME_OF_TOPIC = {};
L.THEMES.forEach(t => t.topics.forEach(k => { THEME_OF_TOPIC[k] = t.key; }));
const oTh = L.THEMES.map(t => t.key), oTo = L.TOPICS.map(t => t.key), oCo = L.CONCEPTS.map(c => c.key);

const FN = { "riferimento-tecnico": "technical reference", "dato-che-corregge": "corrective datum", "metodo-di-lavoro": "working method", "strumento-concettuale": "conceptual tool", "lettura-di-mercato": "market reading", "elementi-di-scenario": "scenario element" };
const BASE = { article: 1, incollection: 1, book: 1, inproceedings: 0.75, misc: 0.5 };
const TIER = { 1: "peer-reviewed", 0.75: "proceedings or preprint", 0.5: "grey literature" };
// Un claim nuovo prende il numero alla prima rigenerazione del Ledger. Finche'
// non ce l'ha, la pagina sta all'indirizzo del suo id, e il numero e' "C—".
const num = id => (NUM[id] ? "C" + String(NUM[id]).padStart(3, "0") : "C—");
const slugOf = id => (NUM[id] ? "c" + String(NUM[id]).padStart(3, "0") : id);
const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const first = g => { const m = String(g).match(/^.*?[.!?](\s|$)/); return (m ? m[0] : g).trim(); };
const r2 = x => Math.round(x * 100) / 100;

// ------------------------------------------------------------------ i claim
const byId = {};
const rows = claims.map(c => {
  const b = L.byClaim[c.id] || {};
  const topic = b.topic, theme = THEME_OF_TOPIC[topic] || b.theme;
  const base = c.fonte ? (BASE[c.fonte.type] || 0.5) : 0.5;
  const uses = (c.usedIn || []).length, contested = c.stance === "contested";
  const r = {
    id: c.id, n: num(c.id), slug: slugOf(c.id), url: "/en/claims/" + slugOf(c.id) + "/",
    gist: c.gist, lead: first(c.gist), parts: c.parts, cuts: c.cuts || [], before: c.before, after: c.after,
    cite: c.cite, locus: c.locus, doi: c.fonte && c.fonte.doi, src: c.src, voice: c.voice, shape: c.shape,
    stance: c.stance, contested, d1: c.d1, d1Label: c.d1Label, d1Status: c.d1Status, fn: FN[c.fn] || c.fn,
    names: c.names || [], usedIn: c.usedIn || [], w: c.weight,
    geo: { base, tier: TIER[base], uses, contested },
    topic, theme, concepts: b.concepts || [],
    topicEn: TO[topic] ? TO[topic].en : "", themeEn: TH[theme] ? TH[theme].en : "",
    relates: c.relates || []
  };
  byId[c.id] = r;
  return r;
});
rows.sort((a, b) =>
  oTh.indexOf(a.theme) - oTh.indexOf(b.theme) || oTo.indexOf(a.topic) - oTo.indexOf(b.topic) ||
  oCo.indexOf(a.concepts[0]) - oCo.indexOf(b.concepts[0]) || b.w - a.w || a.n.localeCompare(b.n));
rows.forEach((r, i) => { r.i = i; });

// relazioni in uscita e in entrata, con numero e frase d'apertura del bersaglio
const EDGES = [];
rows.forEach(r => r.relates.forEach(x => { if (byId[x.to]) EDGES.push({ a: r.id, b: x.to, how: x.how, why: x.why }); }));
rows.forEach(r => {
  r.out = EDGES.filter(e => e.a === r.id).map(e => ({ how: e.how, why: e.why, n: byId[e.b].n, url: byId[e.b].url, lead: byId[e.b].lead }));
  r.in = EDGES.filter(e => e.b === r.id).map(e => ({ how: e.how, why: e.why, n: byId[e.a].n, url: byId[e.a].url, lead: byId[e.a].lead }));
  r.conceptsEn = r.concepts.map(k => ({ key: k, en: CO[k].en, url: "/en/claims/" + k + "/" }));
  r.neighbours = [r.id, ...EDGES.filter(e => e.a === r.id).map(e => e.b), ...EDGES.filter(e => e.b === r.id).map(e => e.a)];
});

// ------------------------------------------------------------------ disegno
const LAYER = {
  1: { en: "Free tag", bg: "#E4EBE7", fg: "#1a1a1a" },
  2: { en: "Topic", bg: "#C9E0D6", fg: "#1a1a1a" },
  3: { en: "Theme", bg: "#5FA88E", fg: "#fff" },
  4: { en: "Concept", bg: "#0F6E56", fg: "#fff" },
  5: { en: "Geometry", bg: "#800020", fg: "#fff" }
};

function glyph(shape, x, y, s, cls, ring) {
  let g = "";
  if (ring) { g += `<circle class="cc-ring" cx="${r2(x)}" cy="${r2(y)}" r="${r2(s * 0.62)}"/>`; s *= 0.66; }
  if (shape === "point") g += `<circle class="${cls} f" cx="${r2(x)}" cy="${r2(y)}" r="${r2(s * 0.22)}"/>`;
  else if (shape === "therefore") [[0, -0.26], [-0.23, 0.2], [0.23, 0.2]].forEach(([dx, dy]) => { g += `<circle class="${cls} f" cx="${r2(x + dx * s)}" cy="${r2(y + dy * s)}" r="${r2(s * 0.11)}"/>`; });
  else if (shape === "exists") { const a = s * 0.3; g += `<path class="${cls} s" d="M${r2(x + a)},${r2(y - a)}v${r2(2 * a)}M${r2(x - a)},${r2(y - a)}h${r2(2 * a)}M${r2(x - a)},${r2(y)}h${r2(2 * a)}M${r2(x - a)},${r2(y + a)}h${r2(2 * a)}"/>`; }
  else g += `<path class="${cls} s" d="M${r2(x)},${r2(y - s * 0.34)}v${r2(s * 0.42)}"/><circle class="${cls} f" cx="${r2(x)}" cy="${r2(y + s * 0.27)}" r="${r2(s * 0.09)}"/>`;
  return g;
}

function runs(vals) {
  const out = []; let s = 0;
  for (let i = 1; i <= vals.length; i++) if (i === vals.length || vals[i] !== vals[s]) { out.push([s, i - 1, vals[s]]); s = i; }
  return out;
}
const fit = (txt, px, fs) => { const m = Math.floor(px / (fs * 0.52)); return txt.length <= m ? txt : (m > 3 ? txt.slice(0, m - 1) + "…" : ""); };

/**
 * Il carotaggio come SVG.
 *   cols   i claim da disegnare, gia' in ordine
 *   W      larghezza del viewBox
 *   label  false per la versione ridotta (niente colonna dei nomi degli strati)
 *   focus  id del claim da mettere in evidenza (pagina claim), o null
 */
function core(cols, { W = 1248, label = true, focus = null, numbers = true, arcsH = 90, cls = "" } = {}) {
  const n = cols.length, lx = label ? 150 : 0, pw = W - lx, cw = pw / n;
  const bh = 42, gap = 5, top = 4;
  const Y = k => top + (k - 1) * (bh + gap);
  const geoH = 84, claimY = Y(5) + geoH + 24, numH = numbers ? 46 : 8;
  const arcY = claimY + numH;
  const ids = new Set(cols.map(c => c.id));
  const E = EDGES.filter(e => ids.has(e.a) && ids.has(e.b));
  const H = arcY + (E.length ? arcsH : 10);
  const X = i => lx + i * cw + cw / 2;
  const at = {}; cols.forEach((c, i) => { at[c.id] = i; });
  const dim = c => (focus && c.id !== focus ? " cc-dim" : "");
  const o = [];
  o.push(`<svg class="cc${cls ? " " + cls : ""}" viewBox="0 0 ${W} ${r2(H)}" role="img" aria-label="The claims cored through the five layers of ENTIA">`);
  o.push(`<defs><marker id="cc-ah" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" class="cc-ahp"/></marker></defs>`);
  // fasce di fondo
  for (let k = 1; k <= 4; k++) {
    o.push(`<rect class="cc-band cc-b${k}" x="${lx}" y="${Y(k)}" width="${r2(pw)}" height="${bh}"/>`);
    if (label) o.push(`<text class="cc-ln" x="0" y="${Y(k) + bh / 2 + 4}">${k} · ${LAYER[k].en}</text>`);
  }
  o.push(`<rect class="cc-band cc-b5" x="${lx}" y="${Y(5)}" width="${r2(pw)}" height="${geoH}"/>`);
  if (label) {
    o.push(`<text class="cc-ln" x="0" y="${Y(5) + 18}">5 · Geometry</text>`);
    o.push(`<text class="cc-lsub" x="0" y="${Y(5) + 35}">weight, 0.5 → 2</text>`);
    o.push(`<text class="cc-ln" x="0" y="${claimY + 4}">The claims</text>`);
  }
  // le carote
  cols.forEach((c, i) => o.push(`<line class="cc-core${c.id === focus ? " cc-on" : ""}" data-i="${i}" x1="${r2(X(i))}" x2="${r2(X(i))}" y1="${Y(1)}" y2="${claimY}"/>`));
  // strato 1: nomi, un'etichetta per corsa contigua
  runs(cols.map(c => c.names.join(" · "))).forEach(([s, e, v]) => {
    if (!v) return;
    const x0 = lx + s * cw + 2, x1 = lx + (e + 1) * cw - 2, w = x1 - x0;
    const on = !focus || cols.slice(s, e + 1).some(c => c.id === focus);
    const t = fit(v, w - 6, 12) || v.slice(0, Math.max(2, Math.floor(w / 6.5)));
    o.push(`<g class="cc-seg${on ? "" : " cc-dim"}"><rect class="cc-s1" x="${r2(x0)}" y="${Y(1) + 7}" width="${r2(w)}" height="${bh - 14}"/><text class="cc-t1" x="${r2((x0 + x1) / 2)}" y="${Y(1) + bh / 2 + 4}">${esc(t)}</text><title>${esc(v)}</title></g>`);
  });
  // strati 2-4
  [[2, c => c.topic, k => TO[k].en], [3, c => c.theme, k => TH[k].en], [4, c => c.concepts[0], k => CO[k].en]].forEach(([k, get, name]) => {
    runs(cols.map(get)).forEach(([s, e, v]) => {
      const x0 = lx + s * cw + 1.5, x1 = lx + (e + 1) * cw - 1.5, w = x1 - x0;
      const on = !focus || cols.slice(s, e + 1).some(c => c.id === focus) || (k === 4 && byId[focus] && byId[focus].concepts.includes(v));
      const href = k === 4 ? ` href="/en/claims/${v}/"` : "";
      const lab = name(v);
      o.push(`<${k === 4 ? "a" : "g"}${href} class="cc-seg cc-k${k}${on ? "" : " cc-dim"}"><rect class="cc-s${k}" x="${r2(x0)}" y="${Y(k) + 4}" width="${r2(w)}" height="${bh - 8}"/><text class="cc-t${k}" x="${r2((x0 + x1) / 2)}" y="${Y(k) + bh / 2 + 4.5}">${esc(fit(lab, w - 6, 13))}</text><title>${esc(lab)}</title></${k === 4 ? "a" : "g"}>`);
    });
  });
  // concetti secondari: una tacca bianca nella colonna
  cols.forEach((c, i) => c.concepts.slice(1).forEach((k, j) => {
    o.push(`<rect class="cc-extra" x="${r2(X(i) - 4)}" y="${Y(4) + bh - 12 - j * 7}" width="8" height="4"><title>Also: ${esc(CO[k].en)}</title></rect>`);
  }));
  // strato 5: il peso
  const base = Y(5) + geoH - 8, sc = (geoH - 28) / 2;
  cols.forEach((c, i) => {
    const h = c.w * sc;
    o.push(`<rect class="cc-w${dim(c)}${c.id === focus ? " cc-on" : ""}" data-i="${i}" x="${r2(X(i) - cw * 0.28)}" y="${r2(base - h)}" width="${r2(cw * 0.56)}" height="${r2(h)}"/>`);
    if (c.contested) o.push(`<text class="cc-x15${dim(c)}" x="${r2(X(i))}" y="${r2(base - h - 4)}">×1.5</text>`);
  });
  // i claim: la marca e il numero
  cols.forEach((c, i) => {
    const s = Math.min(cw * 0.72, 22);
    o.push(`<a class="cc-claim${dim(c)}${c.id === focus ? " cc-on" : ""}" href="${c.url}" data-i="${i}"><rect class="cc-hit" x="${r2(lx + i * cw)}" y="${Y(1)}" width="${r2(cw)}" height="${r2(claimY - Y(1) + numH)}"/>${glyph(c.shape, X(i), claimY, s, "cc-" + c.voice, c.contested)}${numbers ? `<text class="cc-n" transform="translate(${r2(X(i) + 4)},${claimY + 16}) rotate(90)">${c.n}</text>` : ""}<title>${c.n} · ${esc(c.lead)}</title></a>`);
  });
  // relazioni orizzontali: archi sotto, dalla fonte della relazione al bersaglio
  E.forEach(e => {
    const xa = X(at[e.a]), xb = X(at[e.b]), r = Math.abs(xb - xa) / 2, ry = Math.min(r, arcsH - 8);
    const on = !focus || focus === e.a || focus === e.b;
    o.push(`<path class="cc-arc cc-${e.how}${on ? "" : " cc-dim"}${focus && on ? " cc-on" : ""}" data-a="${at[e.a]}" data-b="${at[e.b]}" d="M${r2(xa)},${arcY} A${r2(r)},${r2(ry)} 0 0 ${xb > xa ? 0 : 1} ${r2(xb)},${arcY}" marker-end="url(#cc-ah)"><title>${byId[e.a].n} ${e.how} ${byId[e.b].n}</title></path>`);
  });
  o.push(`</svg>`);
  return o.join("");
}


/**
 * La matrice alla Bertin: una colonna per claim, una riga per ogni valore di
 * ogni strato. Pleonastica rispetto al carotaggio, ed e' il suo pregio: non
 * disegna niente che non sia nei dati, e lascia al lettore il riconoscimento.
 */
function matrix(cols, W = 1248) {
  const lx = 230, n = cols.length, cw = (W - lx) / n, rh = 15, arcH = 110;
  const at = {}; cols.forEach((c, i) => { at[c.id] = i; });
  const X = i => lx + i * cw + cw / 2;
  const names = [...new Set(cols.flatMap(c => c.names))];
  const rows = [
    ...names.map(v => [1, v, v]),
    ...oTo.filter(k => cols.some(c => c.topic === k)).map(k => [2, k, TO[k].en]),
    ...oTh.filter(k => cols.some(c => c.theme === k)).map(k => [3, k, TH[k].en]),
    ...oCo.filter(k => cols.some(c => c.concepts.includes(k))).map(k => [4, k, CO[k].en])
  ];
  let y = arcH + 26, last = 0; const gy = {}, heads = [];
  rows.forEach(([k, key]) => {
    if (k !== last) { y += 16; heads.push([k, y]); y += 6; last = k; }
    gy[k + ":" + key] = y; y += rh;
  });
  const geoY = y + 26, H = geoY + 118;
  const o = [`<svg class="cc cc-mx" viewBox="0 0 ${W} ${r2(H)}" role="img" aria-label="The claims as a matrix: one column per claim, one row per value of each layer">`];
  // archi sopra la riga dei claim
  EDGES.forEach(e => {
    if (at[e.a] == null || at[e.b] == null) return;
    const xa = X(at[e.a]), xb = X(at[e.b]), r = Math.abs(xb - xa) / 2;
    o.push(`<path class="cc-arc cc-${e.how}" d="M${r2(xa)},${arcH} A${r2(r)},${r2(Math.min(r, arcH - 10))} 0 0 ${xb > xa ? 1 : 0} ${r2(xb)},${arcH}"><title>${byId[e.a].n} ${e.how} ${byId[e.b].n}</title></path>`);
  });
  cols.forEach((c, i) => o.push(`<a class="cc-claim" href="${c.url}">${glyph(c.shape, X(i), arcH + 10, Math.min(cw * 0.7, 16), "cc-" + c.voice, c.contested)}<title>${c.n} · ${esc(c.lead)}</title></a>`));
  heads.forEach(([k, yy]) => {
    o.push(`<text class="cc-ln cc-mxh" x="0" y="${yy}">${k} · ${LAYER[k].en}</text><line class="cc-mxr" x1="0" x2="${W}" y1="${yy + 4}" y2="${yy + 4}"/>`);
  });
  rows.forEach(([k, key, lab]) => {
    const yy = gy[k + ":" + key];
    const txt = k === 4 ? `<a href="/en/claims/${key}/"><text class="cc-mxl" x="10" y="${yy + 11.5}">${esc(lab)}</text></a>` : `<text class="cc-mxl" x="10" y="${yy + 11.5}">${esc(lab)}</text>`;
    o.push(txt + `<line class="cc-mxg" x1="${lx}" x2="${W}" y1="${yy + rh}" y2="${yy + rh}"/>`);
  });
  cols.forEach((c, i) => {
    const cells = [...c.names.map(v => [1, v]), [2, c.topic], [3, c.theme], ...c.concepts.map(k => [4, k])];
    cells.forEach(([k, key]) => {
      const yy = gy[k + ":" + key];
      o.push(`<rect class="cc-s${k} cc-mxc" x="${r2(X(i) - cw * 0.36)}" y="${yy + 2}" width="${r2(cw * 0.72)}" height="${rh - 4}"><title>${c.n}</title></rect>`);
    });
  });
  o.push(`<text class="cc-ln cc-mxh" x="0" y="${geoY}">5 · Geometry</text><line class="cc-mxr" x1="0" x2="${W}" y1="${geoY + 4}" y2="${geoY + 4}"/>`);
  cols.forEach((c, i) => {
    const h = c.w * 30;
    o.push(`<rect class="cc-w cc-mxw" x="${r2(X(i) - cw * 0.3)}" y="${r2(geoY + 72 - h)}" width="${r2(cw * 0.6)}" height="${r2(h)}"/>`);
    o.push(`<text class="cc-n" transform="translate(${r2(X(i) + 3.5)},${geoY + 80}) rotate(90)">${c.n}</text>`);
  });
  o.push(`</svg>`);
  return o.join("");
}

// ------------------------------------------------------------------ concetti
const concepts = L.CONCEPTS.map(k => {
  const cl = rows.filter(r => r.concepts.includes(k.key));
  const topics = [...new Set(cl.map(r => r.topic))];
  const theme = k.theme || (cl[0] && cl[0].theme);
  return {
    key: k.key, en: k.en, question: k.question, note: k.note, url: "/en/claims/" + k.key + "/",
    theme, themeEn: TH[theme] ? TH[theme].en : "",
    topics: topics.map(t => TO[t].en),
    names: [...new Set(cl.flatMap(r => r.names))],
    weights: cl.map(r => r.w),
    links: (k.links || []).filter(x => CO[x]).map(x => ({ key: x, en: CO[x].en, url: "/en/claims/" + x + "/" })),
    linkedFrom: L.CONCEPTS.filter(o => (o.links || []).includes(k.key)).map(o => ({ key: o.key, en: o.en, url: "/en/claims/" + o.key + "/" })),
    claims: cl,
    related: [...new Map([...(k.links || []).filter(x => CO[x]).map(x => [x, { key: x, en: CO[x].en, url: "/en/claims/" + x + "/" }]), ...L.CONCEPTS.filter(o => (o.links || []).includes(k.key)).map(o => [o.key, { key: o.key, en: o.en, url: "/en/claims/" + o.key + "/" }])]).values()],
    svg: core(cl, { W: 1100, label: true, numbers: true, arcsH: 80 })
  };
});

// le pagine claim: la carota del claim con i claim che tocca
rows.forEach(r => {
  const near = rows.filter(x => r.neighbours.includes(x.id));
  r.svg = core(near, { W: 460, label: false, focus: r.id, numbers: true, arcsH: 70 });
});

// indice per Theme, per la pagina principale e per la vista sul telefono
const themes = L.THEMES.map(t => ({
  key: t.key, en: t.en, position: t.position,
  concepts: concepts.filter(c => c.theme === t.key),
  topics: t.topics.map(k => ({ key: k, en: TO[k].en, claims: rows.filter(r => r.topic === k) })).filter(x => x.claims.length)
}));

// il pannello di lettura del carotaggio: solo i campi che servono al JS
const reader = rows.map(r => ({
  n: r.n, url: r.url, lead: r.lead, cite: r.cite, names: r.names.join(" · ") || "—",
  topic: r.topicEn, theme: r.themeEn, concepts: r.conceptsEn.map(c => c.en).join(" + "),
  w: r.w, geo: r.geo, out: r.out.map(x => [x.how, x.n]), in: r.in.map(x => [x.how, x.n])
}));

module.exports = {
  claims: rows, byId, concepts, themes, reader, layers: LAYER,
  svg: core(rows, { W: 1248, cls: "cc-main" }),
  matrix: matrix(rows),
  counts: { claims: rows.length, concepts: concepts.length, relations: EDGES.length, names: L.NAMES.length, topics: L.TOPICS.length, themes: L.THEMES.length }
};
