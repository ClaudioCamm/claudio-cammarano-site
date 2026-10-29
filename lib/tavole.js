// lib/tavole.js — filtri della revisione grafica "Tavole" (ott 2026).
//
// Il problema che risolve: le catene si leggevano in ordine di pubblicazione,
// e l'ordine di pubblicazione non dice niente. Venti catene sono uscite fra il
// 28 e il 30 settembre (l'archivio arretrato), gli orari dentro la stessa
// giornata sono convenzionali, e le parti di una serie escono a settimane di
// distanza con altro in mezzo. Risultato: in home si entrava in una serie
// dalla parte III o IV senza vedere la I.
//
// La regola nuova: le serie si mostrano come LINEE, con le parti in ordine di
// lettura (il numero romano), e la parte uscita per ultima e' segnata sulla
// linea invece di essere estratta. Le catene fuori serie restano in ordine di
// data, raggruppate per mese. Una parte non compare mai da sola.
module.exports = function(eleventyConfig) {
  const CATENA = "layouts/catena.njk";
  const ROMANI = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10 };
  const MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
  const base = function(s) { return String(s).replace(/,\s+[IVXLCDM]+$/i, "").trim(); };
  const parte = function(s) { const m = String(s || "").match(/,\s+([IVXLCDM]+)$/i); return m ? (ROMANI[m[1].toUpperCase()] || 0) : 0; };
  const romano = function(n) { return Object.keys(ROMANI).find(function(k) { return ROMANI[k] === n; }) || String(n); };

  function voce(p) {
    const catena = p.data.layout === CATENA;
    return {
      url: p.url, titolo: p.data.title, data: p.date, tipo: catena ? "catena" : "saggio",
      fonti: catena && p.data.fonti ? p.data.fonti.length : 0,
      tesi: p.data.tesi || p.data.description || "",
      parte: parte(p.data.series), romano: romano(parte(p.data.series))
    };
  }

  // Serie che contengono almeno una catena, come linee. Ordine delle linee:
  // dalla piu' aggiornata. Dentro la linea: ordine di parte.
  eleventyConfig.addFilter("lineeSerie", function(writings, soloConCatene) {
    const map = {};
    (writings || []).forEach(function(p) {
      if (!p.data.series) return;
      const n = base(p.data.series);
      if (!map[n]) map[n] = { nome: n, parti: [] };
      map[n].parti.push(voce(p));
    });
    return Object.values(map)
      .filter(function(l) { return soloConCatene === false || l.parti.some(function(v) { return v.tipo === "catena"; }); })
      .map(function(l) {
        l.parti.sort(function(a, b) { return a.parte - b.parte || a.data - b.data; });
        const ultima = l.parti.slice().sort(function(a, b) { return b.data - a.data; })[0];
        l.parti.forEach(function(v) { v.nuova = v === ultima; v.di = l.parti.length; });
        l.ultima = ultima; l.aggiornata = ultima.data;
        l.catene = l.parti.filter(function(v) { return v.tipo === "catena"; }).length;
        l.saggi = l.parti.length - l.catene;
        return l;
      })
      .sort(function(a, b) { return b.aggiornata - a.aggiornata; });
  });

  // Catene fuori serie, per mese (dal piu' recente).
  eleventyConfig.addFilter("catenePerMese", function(catene) {
    const out = [];
    (catene || []).filter(function(c) { return !c.data.series; })
      .sort(function(a, b) { return b.date - a.date; })
      .forEach(function(c) {
        const k = MESI[c.date.getUTCMonth()] + " " + c.date.getUTCFullYear();
        let g = out.find(function(x) { return x.mese === k; });
        if (!g) { g = { mese: k, catene: [] }; out.push(g); }
        g.catene.push(voce(c));
      });
    return out;
  });

  // Parte di una serie leggibile: "parte III di 4".
  eleventyConfig.addFilter("parteDi", function(series, writings) {
    if (!series) return "";
    const n = base(series), k = parte(series);
    const tot = (writings || []).filter(function(p) { return p.data.series && base(p.data.series) === n; }).length;
    return k ? "parte " + romano(k) + " di " + tot : "";
  });

  eleventyConfig.addFilter("treemapTemi", function(clusters, rami) {
    const items = Object.keys(clusters || {}).map(function(k) {
      return { nome: k, n: clusters[k].length, argomenti: clusters[k], colore: (rami && rami[k] && rami[k].colorKey) || "epi" };
    }).sort(function(a, b) { return b.n - a.n; });
    return module.exports.treemap(items);
  });

  // Minuti di lettura come numero (stesse 200 parole al minuto di readingTime).
  eleventyConfig.addFilter("minuti", function(content) {
    if (!content) return 0;
    const words = String(content).replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });
};

// Treemap dei temi: rettangoli in percentuale (il primo tema a tutta altezza,
// gli altri in due righe). Aree proporzionali al numero di argomenti.
module.exports.treemap = function(items) {
  const tot = items.reduce(function(s, x) { return s + x.n; }, 0) || 1;
  if (items.length < 3) return items.map(function(x, i) { return Object.assign({ x: 0, y: i * 100 / items.length, w: 100, h: 100 / items.length }, x); });
  const out = [], w0 = 100 * items[0].n / tot;
  out.push(Object.assign({ x: 0, y: 0, w: w0, h: 100 }, items[0]));
  const rest = items.slice(1), mid = Math.ceil(rest.length / 2);
  const top = rest.slice(0, mid), bot = rest.slice(mid);
  const sum = function(a) { return a.reduce(function(s, x) { return s + x.n; }, 0); };
  const hTop = 100 * sum(top) / sum(rest);
  [[top, 0, hTop], [bot, hTop, 100 - hTop]].forEach(function(r) {
    let x = w0; const s = sum(r[0]);
    r[0].forEach(function(it) { const w = (100 - w0) * it.n / s; out.push(Object.assign({ x: x, y: r[1], w: w, h: r[2] }, it)); x += w; });
  });
  return out;
};
