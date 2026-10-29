// Immagini di condivisione automatiche (audit 2026, L11; revisione "Tavole", 29/10/2026).
// Schede 1200x630 nel linguaggio del sito: testata indigo con il nome, titoli
// in Bodoni, etichette in grottesco stretto, filetto spesso sopra il piede,
// colore per tipo di pezzo (indigo saggi e home, bordeaux catene, blu schede,
// verde lato inglese). Tipi: home-it, home-en, catena, curated, concetto, foto
// (saggio: titolo a sinistra, foto a destra). Composte in SVG, rasterizzate con
// resvg; la foto si compone con sharp. Chiamato da .eleventy.js in build.
// Font: Bodoni Moda e Archivo (SIL OFL 1.1), istanze statiche ricavate dai
// variabili in src/fonts; Source Serif 4 per i sommari.
const fs = require("fs");
const path = require("path");
// resvg e sharp si caricano solo quando si generano le immagini (build).
let Resvg, sharp;
// Cambiare VERSIONE quando cambia la grafica: entra nell'hash dei nomi file,
// cosi' i social non restano sulle immagini vecchie.
const VERSIONE = "5";
// Le schede si disegnano a 2x (2400x1260): nitide sugli schermi retina.
const SCALA = 2;
const FONT = ["BodoniModa-Display.ttf", "BodoniModa-DisplayItalic.ttf", "Archivo-CondBold.ttf", "Archivo-CondMedium.ttf",
  "SourceSerif4-Regular.ttf", "SourceSerif4-Semibold.ttf"].map(f => path.join(__dirname, "fonts", f));
const W = 1200, H = 630;
const C = { indigo: "#1C0E80", blu: "#185FA5", bord: "#800020", verde: "#0F6E56", ink: "#1a1a1a", grigio: "#5c5a66" };
const OPAC = [0, 0.2, 0.38, 0.56, 0.76, 0.96];
const geo = {
  bergamo: require("../../src/_data/cartaGeometriaBergamo.json"),
  goode: require("../../src/_data/cartaGeometria.json")
};
const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// Larghezza media del carattere: Bodoni ~0.47 em, Archivo stretto ~0.5 em in maiuscolo.
function righe(testo, size, larg, max, k) {
  const parole = String(testo).split(/\s+/), out = []; let r = "";
  for (const p of parole) { const prova = r ? r + " " + p : p; if (prova.length * size * k > larg && r) { out.push(r); r = p; } else r = prova; }
  if (r) out.push(r);
  return out.length <= max ? out : null;
}
function adatta(testo, sizes, larg, max, k = 0.47) {
  for (const s of sizes) { const l = righe(testo, s, larg, max, k); if (l) return { size: s, righe: l }; }
  const s = sizes[sizes.length - 1], l = righe(testo, s, larg, 99, k);
  return { size: s, righe: l.slice(0, max).map((x, i) => i === max - 1 ? x.replace(/\s*\S*$/, "") + " …" : x) };
}
const cap = (x, y, t, col, size = 19, anchor = "start", w = "Bold") =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Archivo Cond" font-weight="${w === "Bold" ? 700 : 500}" font-size="${size}" letter-spacing="${size * 0.09}" fill="${col}">${esc(String(t).toUpperCase())}</text>`;

function testata(sezione, colSez) {
  return `<rect width="${W}" height="64" fill="${C.indigo}"/>`
    + `<text x="56" y="43" font-family="Bodoni Moda Display" font-weight="500" font-size="28" fill="#fff">Claudio Cammarano</text>`
    + (sezione ? cap(W - 56, 41, sezione, colSez || "rgba(255,255,255,.72)", 17, "end") : "");
}
function piede(extra) {
  return `<rect x="56" y="${H - 72}" width="${W - 112}" height="5" fill="${C.ink}"/>`
    + cap(56, H - 32, "claudiocammarano.com", C.ink, 18)
    + (extra ? cap(W - 56, H - 32, extra, C.grigio, 18, "end", "Medium") : "");
}
function titolo(t, x, y, larg, sizes, max, col = C.ink, fam = "Bodoni Moda Display", style = "normal") {
  const a = adatta(t, sizes, larg, max);
  let s = "";
  a.righe.forEach((r, i) => { s += `<text x="${x}" y="${y + a.size * 0.92 + i * a.size * 1.04}" font-family="${fam}" font-style="${style}" font-weight="${style === "italic" ? 400 : 500}" font-size="${a.size}" letter-spacing="${-a.size * 0.012}" fill="${col}">${esc(r)}</text>`; });
  return { svg: s, h: a.righe.length * a.size * 1.04, size: a.size };
}
function testo(t, x, y, larg, size, max, col = C.grigio) {
  const a = adatta(t, [size], larg, max, 0.48);
  return { svg: a.righe.map((r, i) => `<text x="${x}" y="${y + size + i * size * 1.35}" font-family="Source Serif 4" font-size="${size}" fill="${col}">${esc(r)}</text>`).join(""), h: a.righe.length * size * 1.35 };
}
function carta(g, classi, x, y, scala, marca, colore = C.indigo) {
  const oy = Number(g.viewBox.split(" ")[1]);
  let s = `<defs><clipPath id="sf"><path d="${g.sphere}"/></clipPath></defs><g transform="translate(${x},${y}) scale(${scala}) translate(0,${-oy})">`;
  s += `<path d="${g.sphere}" fill="#fff" stroke="${colore}" stroke-opacity=".35" stroke-width="${1.2 / scala}"/>`;
  s += `<g clip-path="url(#sf)"><path d="${g.graticule}" fill="none" stroke="#e4e2ec" stroke-width="${0.6 / scala}"/>`;
  const punti = [];
  for (const [iso, c] of Object.entries(g.countries)) {
    const k = classi[iso] || 0;
    if (c.d) s += `<path d="${c.d}" fill="${k ? colore : "#e2e0e8"}" fill-opacity="${k ? OPAC[k] : 1}" stroke="#fff" stroke-width="${0.5 / scala}"/>`;
    if (marca && k && c.area * scala * scala < 900) punti.push(`<circle cx="${c.cx}" cy="${c.cy}" r="${11 / scala}" fill="none" stroke="${colore}" stroke-width="${2.5 / scala}"/>`);
  }
  s += "</g>" + punti.join("");
  if (g.anelli) s += `<path d="${g.anelli}" fill="none" stroke="${colore}" stroke-opacity=".3" stroke-width="${1 / scala}" stroke-dasharray="${4 / scala} ${4 / scala}"/>`;
  if (g.centro && !marca) s += `<circle cx="${g.centro.x}" cy="${g.centro.y}" r="${7 / scala}" fill="${C.bord}" stroke="#fff" stroke-width="${2 / scala}"/>`;
  return s + "</g>";
}
const svg = body => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#fff"/>${body}</svg>`;

function scheda(j) {
  // --- Home italiana: il claim e il globo
  if (j.tipo === "home-it") {
    const g = geo.bergamo, lato = 470, sc = lato / 600;
    let b = testata("Libri, mercati, idee") + carta(g, j.classi, W - lato - 56, 84, sc, false);
    b += cap(56, 132, "La tesi", C.bord, 19);
    b += `<text x="56" y="214" font-family="Bodoni Moda Display" font-weight="500" font-size="72" letter-spacing="-1.5" fill="${C.ink}">Le idee sono</text>`;
    b += `<text x="56" y="290" font-family="Bodoni Moda Display" font-weight="500" font-size="72" letter-spacing="-1.5" fill="${C.ink}">cose reali.</text>`;
    b += `<text x="56" y="366" font-family="Bodoni Moda Display" font-style="italic" font-weight="400" font-size="62" fill="${C.indigo}">Il mercato è dove</text>`;
    b += `<text x="56" y="436" font-family="Bodoni Moda Display" font-style="italic" font-weight="400" font-size="62" fill="${C.indigo}">si incontrano.</text>`;
    return svg(b + `<rect x="56" y="${H - 72}" width="560" height="5" fill="${C.ink}"/>` + cap(56, H - 32, "claudiocammarano.com", C.ink, 18) + cap(W - 56, H - 32, "Dove guarda questo sito", C.grigio, 16, "end", "Medium"));
  }
  // --- Home inglese: claim in verde, carta Goode sotto
  if (j.tipo === "home-en") {
    const g = geo.goode, [, , vw, vh] = g.viewBox.split(" ").map(Number);
    let b = testata("Research", "#9fd8c6");
    b += `<text x="56" y="150" font-family="Bodoni Moda Display" font-weight="500" font-size="64" letter-spacing="-1.3" fill="${C.ink}">Ideas are real things.</text>`;
    b += `<text x="56" y="222" font-family="Bodoni Moda Display" font-style="italic" font-weight="400" font-size="58" fill="${C.verde}">Somebody has to check them.</text>`;
    const top = 250, disp = H - 80 - top, sc = Math.min(1088 / vw, disp / vh);
    b += carta(g, j.classi, (W - vw * sc) / 2, top, sc, false, C.indigo);
    return svg(b + piede("Where the Italian essays look"));
  }
  // --- Saggio senza foto: titolo, tesi, minuti
  if (j.tipo === "saggio") {
    let b = testata("Saggio") + cap(56, 132, j.serie || "Saggio", C.indigo, 19);
    const t = titolo(j.titolo, 56, 152, 780, [76, 66, 58, 50], 3);
    b += t.svg;
    if (j.tesi) b += testo(j.tesi, 56, 152 + t.h + 18, 780, 25, 3).svg;
    b += `<rect x="900" y="132" width="2" height="${H - 230}" fill="${C.ink}"/>`;
    b += `<text x="932" y="300" font-family="Bodoni Moda Display" font-weight="400" font-size="150" fill="${C.indigo}">${j.minuti}′</text>`;
    b += cap(938, 340, "minuti di lettura", C.grigio, 17, "start", "Medium");
    b += `<rect x="938" y="362" width="${Math.min(200, j.minuti * 4)}" height="12" fill="${C.indigo}"/>`;
    return svg(b + piede(j.data));
  }
  // --- Catena: titolo, perle delle fonti, testate
  if (j.tipo === "catena") {
    let b = testata("Catena", "#e7a2b2") + cap(56, 132, j.serie ? j.serie : "Catena · fuori serie", C.bord, 19);
    const t = titolo(j.titolo, 56, 152, 1080, [78, 68, 60], 2);
    b += t.svg;
    if (j.tesi) b += testo(j.tesi, 56, 152 + t.h + 14, 1000, 24, 2).svg;
    const y = 452, n = j.fonti.length, passo = Math.min(56, 1000 / n);
    b += `<line x1="64" y1="${y}" x2="${64 + (n - 1) * passo}" y2="${y}" stroke="${C.bord}" stroke-width="3"/>`;
    for (let i = 0; i < n; i++) b += `<circle cx="${64 + i * passo}" cy="${y}" r="13" fill="${C.bord}"/>`;
    b += cap(64 + (n - 1) * passo + 34, y + 7, n + " fonti", C.bord, 19);
    // Testate finche' ci stanno (~0.42 em per carattere a 19 px), poi "e altre N".
    let riga = "", k = 0;
    for (; k < j.fonti.length; k++) { const prova = riga ? riga + " · " + j.fonti[k] : j.fonti[k]; if (prova.length * 19 * 0.42 > 960) break; riga = prova; }
    if (k < j.fonti.length) riga += " · e altre " + (j.fonti.length - k);
    b += `<text x="56" y="${y + 52}" font-family="Archivo Cond" font-weight="500" font-size="19" fill="${C.grigio}">${esc(riga)}</text>`;
    return svg(b + piede(j.data));
  }
  // --- Scheda curated: testata, titolo, criterio, carta piccola
  if (j.tipo === "curated") {
    const g = geo.bergamo, lato = 380, sc = lato / 600;
    let b = testata("Curated", "#a9cdee") + carta(g, j.classi, W - lato - 48, 104, sc, j.marca, C.blu);
    b += cap(56, 132, j.fonte, C.blu, 19);
    const t = titolo(j.titolo, 56, 152, 640, [64, 56, 48, 42], 4);
    b += t.svg;
    const yc = 152 + t.h + 34;
    b += cap(56, yc, j.criterio, C.blu, 18);
    b += `<rect x="56" y="${yc + 9}" width="${j.criterio.length * 10.2}" height="3" fill="${C.blu}"/>`;
    return svg(b + piede("Letture schedate per l’uso"));
  }
  // --- Concetto: carta con il paese segnato
  if (j.tipo === "concetto") {
    const g = geo.bergamo, lato = 470, sc = lato / 600;
    let b = testata("Indice dei concetti") + carta(g, j.classi, W - lato - 48, 84, sc, j.marca);
    b += cap(56, 132, j.sottotitolo, C.indigo, 19);
    b += titolo(j.titolo, 56, 152, 560, [84, 72, 62, 52], 3).svg;
    return svg(b + piede(""));
  }
  throw new Error("tipo " + j.tipo);
}

// --- Saggio con foto: testata, titolo a sinistra, foto a destra (composta con sharp)
function fotoPannello(j) {
  let b = testata("Saggio") + cap(56, 132, j.serie || "Saggio", C.indigo, 19);
  b += titolo(j.titolo, 56, 152, 470, [66, 58, 50, 44], 4).svg;
  b += `<rect x="56" y="${H - 72}" width="${560 - 56 - 32}" height="5" fill="${C.ink}"/>` + cap(56, H - 32, "claudiocammarano.com", C.ink, 18);
  return svg(b);
};
const FOTO = { x: 560, y: 64, w: 640, h: 566 };

async function rendi(jobs, outDir) {
  Resvg = require("@resvg/resvg-js").Resvg; sharp = require("sharp");
  const png = svg => new Resvg(svg, { fitTo: { mode: "width", value: W * SCALA }, font: { fontFiles: FONT, loadSystemFonts: false, defaultFontFamily: "Source Serif 4" } }).render().asPng();
  let n = 0;
  const coda = jobs.slice();
  async function lavora() { let job; while ((job = coda.shift())) { await uno(job); n++; } }
  async function uno(job) {
    const dest = path.join(outDir, job.out);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (job.tipo === "foto") {
      // JPG: la foto non regge la tavolozza ridotta del PNG.
      const img = await sharp(path.join(process.cwd(), "src", job.src)).resize(FOTO.w * SCALA, FOTO.h * SCALA, { fit: "cover" }).toBuffer();
      await sharp(png(fotoPannello(job))).composite([{ input: img, left: FOTO.x * SCALA, top: FOTO.y * SCALA }])
        .jpeg({ quality: 86, progressive: false, chromaSubsampling: "4:4:4" }).toFile(dest);
    } else {
      // PNG e non JPEG: testo e contorni restano netti. JPEG progressivi
      // vengono mostrati sgranati da alcuni social (LinkedIn).
      await sharp(png(scheda(job))).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(dest);
    }
  }
  await Promise.all([1, 2, 3, 4].map(lavora));
  return n;
}
module.exports = { rendi, scheda, VERSIONE };
