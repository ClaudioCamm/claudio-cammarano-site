// Immagini di condivisione automatiche (audit 2026, L11).
// Compone una scheda 1200x630 in SVG (titolo + carta) e la rasterizza con
// resvg; le foto dei saggi in WebP/AVIF diventano JPG 1200x630 con sharp.
// Chiamato da .eleventy.js nell'evento eleventy.after, solo in build.
const fs = require("fs");
const path = require("path");
const { Resvg } = require("@resvg/resvg-js");
const sharp = require("sharp");

const W = 1200, H = 630;
// Cambiare VERSIONE quando cambia la grafica: entra nell'hash dei nomi file.
const VERSIONE = "3";
const BLU = "#1C0E80", VERDE = "#1f9d55";
const FONT = [path.join(__dirname, "fonts/SourceSerif4-Regular.ttf"), path.join(__dirname, "fonts/SourceSerif4-Semibold.ttf")];
const OPAC = [0, 0.2, 0.38, 0.56, 0.76, 0.96];
const geo = {
  bergamo: require("../../src/_data/cartaGeometriaBergamo.json"),
  goode: require("../../src/_data/cartaGeometria.json")
};

function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

// A capo approssimato: larghezza media del carattere ~0.5 em.
function righe(testo, size, larg, max) {
  const parole = String(testo).split(/\s+/), out = [];
  let r = "";
  for (const p of parole) {
    const prova = r ? r + " " + p : p;
    if (prova.length * size * 0.5 > larg && r) { out.push(r); r = p; } else r = prova;
  }
  if (r) out.push(r);
  return out.length <= max ? out : null;
}
function adatta(testo, sizes, larg, max) {
  for (const s of sizes) { const l = righe(testo, s, larg, max); if (l) return { size: s, righe: l }; }
  const s = sizes[sizes.length - 1], l = righe(testo, s, larg, 99);
  return { size: s, righe: l.slice(0, max).map((x, i) => i === max - 1 ? x.replace(/\s*\S*$/, "") + " …" : x) };
}

function carta(g, classi, x, y, scala, marca) {
  const oy = Number(g.viewBox.split(" ")[1]);
  let s = `<defs><clipPath id="sf"><path d="${g.sphere}"/></clipPath></defs>`;
  s += `<g transform="translate(${x},${y}) scale(${scala}) translate(0,${-oy})">`;
  s += `<path d="${g.sphere}" fill="#f3f2f7" stroke="#d9d6e3" stroke-width="${1 / scala}"/>`;
  s += `<g clip-path="url(#sf)"><path d="${g.graticule}" fill="none" stroke="#e2dfea" stroke-width="${0.6 / scala}"/>`;
  const punti = [];
  for (const [iso, c] of Object.entries(g.countries)) {
    const k = classi[iso] || 0;
    if (c.d) s += k ? `<path d="${c.d}" fill="${BLU}" fill-opacity="${OPAC[k]}" stroke="#fff" stroke-width="${0.5 / scala}"/>`
                    : `<path d="${c.d}" fill="#dcd9e5" stroke="#fff" stroke-width="${0.5 / scala}"/>`;
    if (k && c.area < 30) punti.push(`<circle cx="${c.cx}" cy="${c.cy}" r="${5 / scala}" fill="${BLU}" fill-opacity="${OPAC[k]}" stroke="#fff" stroke-width="${1 / scala}"/>`);
    // Schede di concetti e curated: un cerchio attorno ai paesi evidenziati
    // troppo piccoli per leggersi a questa scala (l'Europa vicino al centro).
    if (marca && k && c.area * scala * scala < 900) punti.push(`<circle cx="${c.cx}" cy="${c.cy}" r="${11 / scala}" fill="none" stroke="${BLU}" stroke-width="${2.5 / scala}"/>`);
  }
  s += "</g>" + punti.join("");
  if (g.anelli) s += `<path d="${g.anelli}" fill="none" stroke="${BLU}" stroke-opacity="0.3" stroke-width="${1 / scala}" stroke-dasharray="${4 / scala} ${4 / scala}"/>`;
  if (g.centro && !marca) s += `<circle cx="${g.centro.x}" cy="${g.centro.y}" r="${7 / scala}" fill="${VERDE}" stroke="#fff" stroke-width="${2 / scala}"/>`;
  return s + "</g>";
}

function scheda(job) {
  const g = geo[job.geom];
  let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
  s += `<rect width="${W}" height="${H}" fill="#ffffff"/><rect width="14" height="${H}" fill="${BLU}"/>`;
  const kicker = `<text x="64" y="84" font-family="Source Serif 4" font-weight="600" font-size="22" letter-spacing="3" fill="${BLU}">${esc(job.kicker.toUpperCase())}</text>`;
  const firma = `<text x="64" y="${H - 48}" font-family="Source Serif 4" font-size="22" fill="#5c5a66">claudiocammarano.com</text>`;
  if (job.geom === "goode") {
    // Carta larga: titolo sopra, carta sotto a tutta larghezza.
    const t = adatta(job.titolo, [50, 44, 38], 1060, 2);
    s += kicker;
    t.righe.forEach((r, i) => { s += `<text x="64" y="${150 + i * t.size * 1.15}" font-family="Source Serif 4" font-weight="600" font-size="${t.size}" fill="#1a1a1a">${esc(r)}</text>`; });
    const [, , vw, vh] = g.viewBox.split(" ").map(Number);
    const top = 150 + t.righe.length * t.size * 1.15, disp = H - 70 - top;
    const scala = Math.min(1080 / vw, disp / vh);
    s += carta(g, job.classi, (W - vw * scala) / 2 + 7, top, scala, job.marca);
    s += `<text x="${W - 48}" y="${H - 24}" text-anchor="end" font-family="Source Serif 4" font-size="20" fill="#5c5a66">claudiocammarano.com</text>`;
  } else {
    const lato = 560, scala = lato / 600;
    s += carta(g, job.classi, W - lato - 36, (H - lato) / 2, scala, job.marca);
    s += kicker;
    const t = adatta(job.titolo, [60, 52, 46, 40, 34], 500, 4);
    let y = 84 + 40 + t.size;
    t.righe.forEach((r, i) => { s += `<text x="64" y="${y + i * t.size * 1.15}" font-family="Source Serif 4" font-weight="600" font-size="${t.size}" fill="#1a1a1a">${esc(r)}</text>`; });
    y += t.righe.length * t.size * 1.15 + 14;
    if (job.sottotitolo) {
      const st = adatta(job.sottotitolo, [26, 23], 500, 3);
      st.righe.forEach((r, i) => { s += `<text x="64" y="${y + i * st.size * 1.3}" font-family="Source Serif 4" font-size="${st.size}" fill="#5c5a66">${esc(r)}</text>`; });
    }
    s += firma;
  }
  return s + "</svg>";
}

async function rendi(jobs, outDir) {
  let n = 0;
  const coda = jobs.slice();
  async function lavora() { let job; while ((job = coda.shift())) { await uno(job); n++; } }
  async function uno(job) {
    const dest = path.join(outDir, job.out);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (job.kind === "foto") {
      await sharp(path.join(process.cwd(), "src", job.src)).resize(W, H, { fit: "cover" }).jpeg({ quality: 84, mozjpeg: true }).toFile(dest);
    } else {
      const png = new Resvg(scheda(job), { font: { fontFiles: FONT, loadSystemFonts: false, defaultFontFamily: "Source Serif 4" } }).render().asPng();
      await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toFile(dest);
    }
  }
  await Promise.all([1, 2, 3, 4].map(lavora));
  return n;
}
module.exports = { rendi, scheda, VERSIONE };
