// lib/catene.js — formato "Catena", registrato da .eleventy.js.
//
module.exports = function(eleventyConfig, md, conceptsIndexData) {
  // Una Catena e' un writing (layout layouts/catena.njk) che lega curated gia'
  // pubblicati attorno a una tesi. Il campo `fonti` (slug dei curated, in ordine
  // di lettura) e' l'unica fonte di verita': da li' vengono la numerazione dei
  // rimandi, la striscia cronologica, le schede, "Nella catena" e il blocco
  // "Citato in" sulle pagine dei curated. Vedi il doc di progetto formato-catena.
  const CATENA_LAYOUT = "layouts/catena.njk";
  const catenaMesi = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];
  let catenaCache = null;
  eleventyConfig.on("eleventy.before", function() { catenaCache = null; });

  function catenaCurated() {
    if (catenaCache) return catenaCache;
    const fs = require("fs"), path = require("path"), matter = require("gray-matter");
    const criteri = require("../src/_data/criteri.json");
    const dir = path.join(__dirname, "..", "src", "curated");
    catenaCache = {};
    fs.readdirSync(dir).filter(function(f) { return f.endsWith(".md"); }).forEach(function(f) {
      const slug = f.replace(/\.md$/, "");
      const d = matter(fs.readFileSync(path.join(dir, f), "utf8")).data;
      const dt = new Date(d.date);
      const src = String(d.source || "");
      catenaCache[slug] = {
        slug: slug,
        url: "/curated/" + slug + "/",
        title: d.title || slug,
        source: src,
        testata: src.indexOf(" / ") > -1 ? src.split(" / ").pop() : src,
        external_url: d.external_url || "",
        date: dt,
        dataBreve: catenaMesi[dt.getUTCMonth()] + " " + String(dt.getUTCFullYear()).slice(2),
        dataLunga: dt.getUTCDate() + " " + catenaMesi[dt.getUTCMonth()] + " " + dt.getUTCFullYear(),
        criterio: (d.criterio && criteri[d.criterio]) ? criteri[d.criterio].label : "",
        perche: d.perche || "",
        concepts: Array.isArray(d.concepts) ? d.concepts : []
      };
    });
    return catenaCache;
  }

  function catenaEsc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // Fonti di una Catena come oggetti numerati; slug sconosciuti: errore di build.
  function catenaFonti(fonti, where) {
    const all = catenaCurated();
    return (fonti || []).map(function(slug, i) {
      const c = all[slug];
      if (!c) throw new Error("[catena] " + (where || "") + ": fonte sconosciuta \"" + slug + "\" (non esiste src/curated/" + slug + ".md)");
      return Object.assign({ n: i + 1 }, c);
    });
  }

  function catenaNumero(ctx, slug) {
    const fonti = (ctx && ctx.fonti) || [];
    const i = fonti.indexOf(slug);
    if (i === -1) throw new Error("[catena] il rimando \"" + slug + "\" non e' nella lista `fonti` del pezzo");
    return i + 1;
  }

  eleventyConfig.addFilter("catenaFonti", function(fonti) { return catenaFonti(fonti, this.page && this.page.inputPath); });
  eleventyConfig.addFilter("catenaCrono", function(fonti) {
    return catenaFonti(fonti).slice().sort(function(a, b) { return a.date - b.date; });
  });
  eleventyConfig.addFilter("catenaPeriodo", function(fonti) {
    const d = catenaFonti(fonti).map(function(f) { return f.date; }).sort(function(a, b) { return a - b; });
    if (!d.length) return "";
    const f = function(x) { return catenaMesi[x.getUTCMonth()] + " " + x.getUTCFullYear(); };
    return f(d[0]) === f(d[d.length - 1]) ? f(d[0]) : f(d[0]) + " – " + f(d[d.length - 1]);
  });
  // Concetti presenti in almeno due fonti: il segnale tematico che emerge.
  eleventyConfig.addFilter("catenaRicorrenti", function(fonti) {
    const conta = {};
    catenaFonti(fonti).forEach(function(f) { f.concepts.forEach(function(c) { conta[c] = (conta[c] || 0) + 1; }); });
    const noti = {};
    conceptsIndexData.forEach(function(c) { noti[c.name] = true; });
    return Object.keys(conta).filter(function(k) { return conta[k] >= 2 && noti[k]; })
      .sort(function(a, b) { return conta[b] - conta[a] || a.localeCompare(b, "it"); })
      .map(function(k) { return { name: k, count: conta[k] }; });
  });
  eleventyConfig.addFilter("senzaCatene", function(list) { return (list || []).filter(function(p) { return p.data.layout !== CATENA_LAYOUT; }); });
  eleventyConfig.addFilter("soloCatene", function(list) { return (list || []).filter(function(p) { return p.data.layout === CATENA_LAYOUT; }); });
  eleventyConfig.addFilter("escludiUrl", function(list, urls) {
    const skip = (urls || []).filter(Boolean);
    return (list || []).filter(function(p) { return skip.indexOf(p.url) === -1; });
  });
  // Accetta lo slug completo o il percorso del file (page.inputPath): il
  // fileSlug di Eleventy toglie il prefisso di data, gli slug delle fonti no.
  // Catena da mettere in home: l'ultima pubblicata (a parita' di giorno
  // decide l'orario nel campo date, quindi l'ultima parte della serie).
  eleventyConfig.addFilter("catenaInEvidenza", function(catene) {
    if (!catene || !catene.length) return null;
    return catene.slice().sort(function(a, b) { return b.date - a.date; })[0];
  });

  // Composizione di una serie: solo saggi (blu), solo catene (rosso) o mista
  // (blu con filetto rosso, conteggio esplicito delle due parti).
  eleventyConfig.addFilter("serieComposizione", function(posts) {
    const catene = (posts || []).filter(function(p) { return p.data.layout === CATENA_LAYOUT; }).length;
    const saggi = (posts || []).length - catene;
    const parti = [];
    if (saggi) parti.push(saggi + (saggi === 1 ? " saggio" : " saggi"));
    if (catene) parti.push(catene + (catene === 1 ? " catena" : " catene"));
    return { tipo: catene && saggi ? "mista" : (catene ? "catene" : "saggi"), label: parti.join(" · "), saggi: saggi, catene: catene };
  });

  // Serie in home (28/9): al massimo 4, due di saggi e due di catene, cosi'
  // le catene (due a settimana) non spingono fuori le serie di saggi. Se un
  // tipo non basta, i posti vanno all'altro. Le prime due sono una per tipo,
  // perche' su mobile se ne vedono solo due.
  eleventyConfig.addFilter("serieHome", function(cards, writings, max) {
    max = max || 4;
    const base = function(s) { return String(s).replace(/,\s+[IVXLCDM]+$/i, "").trim(); };
    const conComp = (cards || []).map(function(c) {
      const posts = (writings || []).filter(function(p) { return p.data.series && base(p.data.series) === c.name; });
      const catene = posts.filter(function(p) { return p.data.layout === CATENA_LAYOUT; }).length;
      const saggi = posts.length - catene;
      const parti = [];
      if (saggi) parti.push(saggi + (saggi === 1 ? " saggio" : " saggi"));
      if (catene) parti.push(catene + (catene === 1 ? " catena" : " catene"));
      return Object.assign({}, c, { comp: { tipo: catene && saggi ? "mista" : (catene ? "catene" : "saggi"), label: parti.join(" · ") } });
    }).filter(function(c) { return c.comp.label; });
    const C = conComp.filter(function(c) { return c.comp.tipo === "catene"; });
    const S = conComp.filter(function(c) { return c.comp.tipo !== "catene"; });
    const scelte = C.slice(0, max / 2).concat(S.slice(0, max / 2));
    const resto = C.slice(max / 2).concat(S.slice(max / 2)).sort(function(a, b) { return b.latest - a.latest; });
    while (scelte.length < max && resto.length) scelte.push(resto.shift());
    const perData = scelte.sort(function(a, b) { return b.latest - a.latest; });
    if (perData.length > 2) {
      const primo = perData[0];
      const i = perData.findIndex(function(c, k) { return k > 0 && (c.comp.tipo === "catene") !== (primo.comp.tipo === "catene"); });
      if (i > 1) perData.splice(1, 0, perData.splice(i, 1)[0]);
    }
    return perData;
  });
  // Catene raggruppate per serie (pagina /catene/): serie dalla piu' recente,
  // catene dentro la serie in ordine di parte; in coda "Fuori serie".
  eleventyConfig.addFilter("catenePerSerie", function(catene) {
    const base = function(s) { return String(s).replace(/,\s+[IVXLCDM]+$/i, "").trim(); };
    const map = {}, fuori = [];
    (catene || []).forEach(function(c) {
      if (!c.data.series) { fuori.push(c); return; }
      const n = base(c.data.series);
      if (!map[n]) map[n] = { nome: n, serie: true, catene: [], latest: c.date };
      map[n].catene.push(c);
      if (c.date > map[n].latest) map[n].latest = c.date;
    });
    const gruppi = Object.values(map).sort(function(a, b) { return b.latest - a.latest; });
    gruppi.forEach(function(g) { g.catene.sort(function(a, b) { return a.date - b.date; }); });
    if (fuori.length) gruppi.push({ nome: "Fuori serie", serie: false, catene: fuori.sort(function(a, b) { return b.date - a.date; }) });
    return gruppi;
  });
  // Testate di una catena, senza ripetizioni, nell'ordine di lettura.
  eleventyConfig.addFilter("catenaTestate", function(fonti) {
    const viste = [];
    catenaFonti(fonti, this.page && this.page.inputPath).forEach(function(f) { if (viste.indexOf(f.testata) === -1) viste.push(f.testata); });
    return viste;
  });

  eleventyConfig.addFilter("catenaUrlFonti", function(fonti) {
    return (fonti || []).map(function(s) { return "/curated/" + s + "/"; });
  });
  eleventyConfig.addFilter("citatoIn", function(catene, slugOrPath) {
    const slug = String(slugOrPath).split("/").pop().replace(/\.md$/, "");
    return (catene || []).filter(function(p) { return Array.isArray(p.data.fonti) && p.data.fonti.indexOf(slug) > -1; });
  });

  // {% rif "slug" %} — numero in apice, rimanda alla voce in "Nella catena".
  eleventyConfig.addShortcode("rif", function(slug) {
    const n = catenaNumero(this.ctx, slug);
    const c = catenaCurated()[slug];
    return '<sup class="catena-rif"><a href="#catena-fonte-' + n + '" title="' + catenaEsc(c.source + " — " + c.title) + '">' + n + '</a></sup>';
  });

  // {% scheda "slug" %} — scheda curated incastonata nel testo.
  eleventyConfig.addShortcode("scheda", function(slug) {
    const n = catenaNumero(this.ctx, slug);
    const c = catenaCurated()[slug];
    return '<aside class="catena-scheda" aria-label="Scheda ' + n + '">' +
      '<div class="catena-scheda-meta"><span class="catena-num">' + n + '</span>' +
      '<span class="catena-scheda-fonte">' + catenaEsc(c.source) + ' · ' + c.dataLunga + '</span>' +
      (c.criterio ? '<span class="catena-scheda-criterio">' + catenaEsc(c.criterio) + '</span>' : '') + '</div>' +
      '<p class="catena-scheda-titolo"><a href="' + c.url + '">' + catenaEsc(c.title) + '</a></p>' +
      (c.perche ? '<p class="catena-scheda-perche">' + md.renderInline(c.perche) + '</p>' : '') +
      '<p class="catena-scheda-link"><a href="' + c.url + '">Apri la scheda →</a>' +
      (c.external_url ? ' <a class="catena-scheda-ext" href="' + catenaEsc(c.external_url) + '" target="_blank" rel="noopener noreferrer">Fonte originale ↗</a>' : '') +
      '</p></aside>';
  });

  // {% controtesi "slug" %}testo{% endcontrotesi %} — riquadro tratteggiato.
  eleventyConfig.addPairedShortcode("controtesi", function(content, slug) {
    const n = catenaNumero(this.ctx, slug);
    const c = catenaCurated()[slug];
    const corpo = md.render(String(content).trim()).replace(/\n+/g, " ").trim();
    return '<aside class="catena-controtesi" aria-label="Controtesi">' +
      '<p class="catena-controtesi-label">Controtesi <span>' + n + ' · ' + catenaEsc(c.source) + '</span></p>' +
      corpo +
      '<p class="catena-scheda-link"><a href="' + c.url + '">' + catenaEsc(c.title) + ' →</a></p></aside>';
  });
};
