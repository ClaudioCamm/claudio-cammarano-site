const markdownIt = require("markdown-it");
const md = markdownIt({ html: true, typographer: true });
const clustersData = require("./src/_data/clusters.js");
const conceptsIndexData = require("./src/_data/conceptsIndex.js");
const curatedTagAliases = require("./src/_data/curatedTagAliases.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/vendor");
  eleventyConfig.addPassthroughCopy("src/downloads");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/visualizations");
  eleventyConfig.addPassthroughCopy("src/js");

  // === TRANSFORMS ===

  // Add loading="lazy" and decoding="async" to all images.
  // The first image in an article gets fetchpriority="high" and loading="eager" instead (LCP).
  eleventyConfig.addTransform("lazyimages", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      var firstImg = true;
      var isArticle = content.indexOf('class="article-full"') !== -1;
      return content.replace(/<img([^>]*)>/gi, function(match, attrs) {
        // Skip images that already have loading= set
        if (attrs.indexOf('loading=') !== -1) return match;
        if (isArticle && firstImg) {
          firstImg = false;
          return '<img' + attrs + ' loading="eager" decoding="async" fetchpriority="high">';
        }
        return '<img' + attrs + ' loading="lazy" decoding="async">';
      });
    }
    return content;
  });

  // Convert straight apostrophes to typographic apostrophes in final HTML output.
  // Targets only apostrophes between word characters (e.g. l'uomo, dell'alba)
  // leaving HTML attributes, URLs and code blocks untouched.
  eleventyConfig.addTransform("smartapostrophe", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      var rsqm = "’"; // RIGHT SINGLE QUOTATION MARK
      return content
        .replace(/(\w)&#39;(\w)/g, "$1" + rsqm + "$2")
        .replace(/(\w)'(\w)/g, "$1" + rsqm + "$2");
    }
    return content;
  });

  // === SHORTCODES ===

  eleventyConfig.addShortcode("kicker", function(text) {
    return `<p class="kicker">${text}</p>`;
  });

  eleventyConfig.addShortcode("pullquote", function(text) {
    return `<blockquote class="pullquote">${text}</blockquote>`;
  });

  eleventyConfig.addShortcode("figure", function(src, caption) {
    return `
      <figure class="figure-wrapper">
        <img src="${src}" alt="${caption || ''}">
        ${caption ? `<figcaption class="caption">${caption}</figcaption>` : ''}
      </figure>
    `;
  });

  eleventyConfig.addShortcode("infobox", function(content) {
    return `<div class="info-box">${content}</div>`;
  });

  eleventyConfig.addShortcode("dataviz", function(content) {
    return `<div class="data-viz">${content}</div>`;
  });

  // Link inline, dentro il corpo di una nota del Lab, a un documento
  // registrato nel campo `documents:` del frontmatter (di qualsiasi nota,
  // non solo di quella corrente) — vedi collezione "labDocuments" sotto
  // e MANUALE.md §3. Se il file non è registrato, torna al vecchio
  // stile a testo semplice invece di rompere la build.
  eleventyConfig.addShortcode("labdoc", function(filename, label) {
    var docs = (this.ctx && this.ctx.collections && this.ctx.collections.labDocuments) || [];
    var doc = docs.find(function(d) { return d.file === filename; });
    if (!doc) return "`" + filename + "`";
    return '<a href="' + doc.downloadUrl + '" class="lab-doc-link">' + (label || filename) + '</a>';
  });

  // Filtra i documenti del Lab per sezione della pagina deliverables.
  eleventyConfig.addFilter("groupOf", function(docs, key) {
    return (docs || []).filter(function(d) { return d.group === key; });
  });

  // === COLLECTIONS ===

  // Validazione della notazione dell'intervento AI (vedi src/_data/aiNotation.js).
  // Ogni pezzo in writings/, curated/ e lab/ deve dichiarare `ai_prose`, senza
  // eccezioni di data: l'archivio anteriore al 23 agosto 2026 è stato
  // certificato retroattivamente, e i pezzi che lo dichiarano lo segnalano in
  // pagina. Un codice fuori enum è sempre un errore.
  eleventyConfig.addCollection("aiNotationAudit", function(collectionApi) {
    var notation = require("./src/_data/aiNotation.js");
    var activeFrom = new Date(notation.activeFrom + "T00:00:00Z");
    var PROSE = notation.proseOrder;
    var SCOPE = notation.scopeOrder;
    var errors = [];
    var checked = 0;
    var retro = 0;

    ["writings", "curated", "lab"].forEach(function(dir) {
      collectionApi.getFilteredByGlob("src/" + dir + "/*.md").forEach(function(item) {
        var where = dir + "/" + (item.inputPath || "").split("/").pop();
        var prose = item.data.ai_prose;
        var scope = item.data.ai_scope;

        if (prose !== undefined && PROSE.indexOf(prose) === -1) {
          var hint = (prose === 0 || prose === "0")
            ? ' — YAML legge 00 come numero: scrivilo fra virgolette, ai_prose: "00"'
            : "";
          errors.push(where + ': ai_prose "' + prose + '" fuori enum (ammessi: ' + PROSE.join(", ") + ")" + hint);
        }
        if (scope !== undefined) {
          if (!Array.isArray(scope)) {
            errors.push(where + ": ai_scope deve essere una lista, non " + typeof scope);
          } else {
            scope.forEach(function(v) {
              if (SCOPE.indexOf(v) === -1) {
                errors.push(where + ': ai_scope "' + v + '" fuori enum (ammessi: ' + SCOPE.join(", ") + ")");
              }
            });
          }
        }
        checked++;
        if (prose === undefined) {
          errors.push(where + ": manca ai_prose (obbligatorio, archivio compreso)");
        } else if (item.date < activeFrom) {
          retro++;
        }
      });
    });

    if (errors.length) {
      throw new Error(
        "\n[notazione AI] " + errors.length + " problema/i di dichiarazione:\n  - " +
        errors.join("\n  - ") +
        "\n\nUn pezzo privo di codice è un errore di pubblicazione, non un default:\n" +
        "l'assenza della sigla sarebbe ambigua fra «nessun intervento» e «dimenticato».\n" +
        "Vedi /colophon/#notazione.\n"
      );
    }

    console.log("[notazione AI] " + checked + " pezzi verificati, di cui " + retro +
      " certificati retroattivamente il " + notation.activeFrom + " — nessun problema.");
    return [];
  });


  eleventyConfig.addCollection("writings", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/writings/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("curated", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/curated/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Validazione di build: il criterio di ogni curated deve appartenere alla
  // lista chiusa di src/_data/criteri.json — che e' la sola fonte, la stessa
  // che alimenta il badge in pagina e la legenda del colophon. Un criterio
  // fuori lista annullerebbe il filtro in ingresso: se la lista non vincola,
  // non e' un criterio, e' un'etichetta.
  eleventyConfig.addCollection("validazioneCriteri", function(collectionApi) {
    const criteri = require("./src/_data/criteri.json");
    const ammessi = Object.keys(criteri);
    const errors = [];
    let checked = 0;

    collectionApi.getFilteredByGlob("src/curated/*.md").forEach(function(item) {
      const where = String(item.inputPath).replace(/^\.\//, "");
      const c = item.data.criterio;
      checked++;
      if (c === undefined || c === null || String(c).trim() === "") {
        errors.push(where + ": manca il campo criterio");
      } else if (ammessi.indexOf(String(c).trim()) === -1) {
        errors.push(where + ': criterio "' + c + '" fuori lista');
      }
    });

    if (errors.length) {
      throw new Error(
        "\n[criteri curated] " + errors.length + " scheda/e non conforme/i:\n  - " +
        errors.join("\n  - ") +
        "\n\nCriteri ammessi: " + ammessi.join(", ") +
        "\nLa lista sta in src/_data/criteri.json: per ammetterne uno nuovo si\n" +
        "aggiunge la voce li', non si scrive uno slug libero nel frontmatter.\n" +
        "Vedi /colophon/#criteri.\n"
      );
    }

    console.log("[criteri curated] " + checked + " schede verificate — nessun criterio fuori lista.");
    return [];
  });

  // Note di ricerca /lab/ — collezione separata da writings e curated,
  // volutamente fuori dalla tassonomia Argomenti/Concetti (vedi MANUALE.md §9)
  eleventyConfig.addCollection("lab", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/lab/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // La pagina di stato del programma di ricerca vive fuori da src/lab/
  // (permalink /lab/status/) apposta per non entrare nel changelog: e' una
  // pagina viva, non una nota datata. Questa collezione serve solo a
  // leggerne la data dalla home inglese, senza scriverla a mano.
  eleventyConfig.addCollection("labStatus", function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      return item.url === "/lab/status/";
    });
  });

  eleventyConfig.addCollection("learning", function(collectionApi) {
    // Dal piu' recente: e' un log, non un archivio cronologico.
    return collectionApi.getFilteredByGlob("src/learning/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Documenti citati nelle note del Lab, dichiarati nel campo `documents:`
  // del frontmatter della nota che li introduce (vedi MANUALE.md §3).
  // Alimenta sia lo shortcode {% labdoc %} (link inline nel testo) sia le
  // card verdi "Dal Lab" nel Learning Log — un solo posto da aggiornare
  // per nota, nessun file separato da creare per ogni documento.
  function buildLabDocuments(collectionApi) {
    var notes = collectionApi.getFilteredByGlob("src/lab/*.md");
    var docs = [];
    notes.forEach(function(note) {
      var list = note.data.documents;
      if (!list) return;
      list.forEach(function(d) {
        docs.push({
          file: d.file,
          id: d.id || null,
          label: d.label || d.file,
          version: d.version || null,
          date: note.date,
          sourceUrl: note.url,
          sourceTitle: note.data.title,
          downloadUrl: "/downloads/" + d.file
        });
      });
    });
    docs.sort(function(a, b) { return b.date - a.date; });

    // Annotazioni per la pagina /en/deliverables/: a quale sezione
    // appartiene ogni documento, e se una versione piu' recente con lo
    // stesso `id` l'ha superato. Il Learning Log non le usa.
    var groups = require("./src/_data/deliverableGroups.js");
    var seenId = {};
    docs.forEach(function(doc) {
      var ext = doc.file.indexOf(".") === -1
        ? ""
        : doc.file.slice(doc.file.lastIndexOf("."));
      doc.group = (doc.id && groups.byId[doc.id])
        || groups.byFile[doc.file]
        || groups.byExt[ext]
        || "corpus";
      // docs e' ordinato dal piu' recente: il primo con un dato `id` e'
      // quello corrente, tutti gli altri sono versioni superate.
      doc.superseded = false;
      if (doc.id) {
        if (seenId[doc.id]) doc.superseded = true;
        seenId[doc.id] = true;
      }
    });

    return docs;
  }

  eleventyConfig.addCollection("labDocuments", function(collectionApi) {
    return buildLabDocuments(collectionApi);
  });

  // Vista "corrente" del Learning Log: solo l'ultima versione per ogni
  // `id` dichiarato (vedi MANUALE.md §3). Le versioni superate restano
  // scaricabili dai link {% labdoc %} dentro le vecchie note — spariscono
  // solo dalla griglia "Dal Lab", non dal sito. I documenti senza `id`
  // (il caso normale, un solo oggetto) restano tutti visibili.
  eleventyConfig.addCollection("labDocumentsCurrent", function(collectionApi) {
    var all = buildLabDocuments(collectionApi);
    var latestById = {};
    var result = [];
    all.forEach(function(doc) {
      if (!doc.id) {
        result.push(doc);
        return;
      }
      var current = latestById[doc.id];
      if (!current || doc.date > current.date) {
        latestById[doc.id] = doc;
      }
    });
    result = result.concat(Object.values(latestById));
    return result.sort(function(a, b) { return b.date - a.date; });
  });

  // All unique series (base names, stripped of episode number) from writings
  eleventyConfig.addCollection("seriesList", function(collectionApi) {
    var seriesSet = new Set();
    collectionApi.getFilteredByGlob("src/writings/*.md").forEach(function(item) {
      var s = item.data.series;
      if (!s) return;
      // Strip trailing ", I", ", II", ", III", etc.
      var base = s.replace(/,\s+[IVXLCDM]+$/i, '').trim();
      seriesSet.add(base);
    });
    return Array.from(seriesSet).sort();
  });

  // Schede serie per la home (audit 2026, L4): nome, numero di saggi,
  // data dell'ultimo, ordinate dalla serie aggiornata piu' di recente.
  eleventyConfig.addCollection("seriesCards", function(collectionApi) {
    var map = {};
    collectionApi.getFilteredByGlob("src/writings/*.md").forEach(function(item) {
      var s = item.data.series;
      if (!s) return;
      var base = s.replace(/,\s+[IVXLCDM]+$/i, '').trim();
      if (!map[base]) map[base] = { name: base, count: 0, latest: item.date };
      map[base].count += 1;
      if (item.date > map[base].latest) map[base].latest = item.date;
    });
    return Object.values(map).sort(function(a, b) { return b.latest - a.latest; });
  });

  // PDF ed ePub di un saggio lungo, se la GitHub Action li ha generati
  // (audit 2026, L6). Riceve page.inputPath; null se i file non ci sono.
  eleventyConfig.addFilter("ebook", function(inputPath) {
    if (!inputPath) return null;
    var fs = require("fs"), path = require("path");
    var slug = path.basename(inputPath, ".md");
    var dir = path.join(__dirname, "src", "downloads", "saggi");
    var pdf = path.join(dir, slug + ".pdf"), epub = path.join(dir, slug + ".epub");
    if (!fs.existsSync(pdf) || !fs.existsSync(epub)) return null;
    return { pdf: "/downloads/saggi/" + slug + ".pdf", epub: "/downloads/saggi/" + slug + ".epub" };
  });

  // Carta "Dove guarda questo sito" (audit 2026, L9). Riceve
  // mergedConceptsIndex e restituisce { svg, legenda, altri }.
  // Peso di ogni voce = numero di pezzi collegati x peso del modo:
  // luogo/paese citato 1, altra geografia diretta 0,5, dal teorico 0,25.
  // Forme-stato: l'UE colora i membri; l'Italia e i membri con menzioni
  // proprie sommano UE + proprie; le regioni danno peso pieno ai membri.
  // Cinque classi a quantili sui valori delle voci di legenda.
  // opzioni: { geom: "goode" | "bergamo", lang: "it" | "en" } (L10: la home
  // italiana usa Lambert centrata su Bergamo, quella inglese Goode).
  eleventyConfig.addFilter("cartaGeo", function(index, opzioni) {
    const o = opzioni || {};
    const bergamo = o.geom === "bergamo";
    const en = o.lang === "en";
    const geom = require(bergamo ? "./src/_data/cartaGeometriaBergamo.json" : "./src/_data/cartaGeometria.json");
    const paesi = require("./src/_data/geoPaesi.json");
    const N = function(n) { return en ? ((paesi.nomiEn || {})[n] || n) : n; };
    const W = en ? " · weight " : " · peso ";
    const slugify = eleventyConfig.getFilter("slugify");
    const unita = {};
    (index || []).forEach(function(c) {
      if (!c.geo || c.geo.modo === "nessuna" || !c.geo.paesi.length) return;
      const n = (c.articles || []).length;
      if (!n) return;
      const w = c.geo.modo === "teorico" ? 0.25 : (c.type === "luogo" || c.type === "paese" ? 1 : 0.5);
      c.geo.paesi.forEach(function(p) { unita[p] = (unita[p] || 0) + n * w; });
    });
    const ue = paesi.regioni.UE.membri;
    const valUE = unita.UE || 0;
    const perIso = {};
    const diretti = {}; // paesi citati per nome: solo questi ricevono il punto se piccoli
    const info = {};    // iso -> { titolo, nome } per il mouse over e il link
    const voci = [];
    Object.keys(unita).forEach(function(nome) {
      let v = unita[nome];
      if (nome === "UE") { voci.push({ nome: en ? N("UE") : "Unione europea", chiave: "UE", valore: v }); return; }
      if (paesi.regioni[nome] && paesi.regioni[nome].iso) {
        paesi.regioni[nome].iso.forEach(function(i) { perIso[i] = Math.max(perIso[i] || 0, v); if (!info[i]) info[i] = { titolo: N(nome) + W + Math.max(1, Math.round(v)), nome: null }; });
        voci.push({ nome: N(nome), chiave: nome, valore: v }); return;
      }
      // Colore: i membri UE sommano il peso dell'Unione. Legenda: l'Italia
      // mostra la somma (decisione del 24/9), gli altri membri solo il peso
      // proprio, perche' l'Unione ha gia' la sua voce.
      const membro = ue.indexOf(nome) >= 0;
      const iso = paesi.stati[nome];
      if (iso) {
        perIso[iso] = Math.max(perIso[iso] || 0, membro ? v + valUE : v); diretti[iso] = true;
        const tot = Math.max(1, Math.round(membro ? v + valUE : v));
        info[iso] = { titolo: N(nome) + W + tot + (membro && valUE ? (en ? ' (with the European Union)' : ' (con l’Unione europea)') : ''), nome: nome };
      }
      voci.push({ nome: N(nome), chiave: nome, valore: (membro && nome === "Italia") ? v + valUE : v });
    });
    ue.forEach(function(m) {
      const iso = paesi.stati[m];
      if (iso && !perIso[iso] && valUE) {
        perIso[iso] = valUE;
        info[iso] = { titolo: N(m) + (en ? ' · through the European Union (weight ' : ' · tramite l’Unione europea (peso ') + Math.max(1, Math.round(valUE)) + ')', nome: "Unione Europea" };
      }
    });
    // Classi a quantili sui valori delle voci di legenda
    const valori = voci.map(function(v) { return v.valore; }).sort(function(a, b) { return a - b; });
    const soglie = [0.2, 0.4, 0.6, 0.8].map(function(q) { return valori[Math.floor(q * (valori.length - 1))]; });
    function classe(v) {
      if (!v) return 0;
      let k = 1; soglie.forEach(function(t) { if (v > t) k++; }); return Math.min(k, 5);
    }
    // Link alla pagina concetto con lo stesso nome, se esiste
    const nomi = {};
    (index || []).forEach(function(c) { nomi[c.name] = c; });
    function url(v) {
      const cand = v.chiave === "UE" ? "Unione Europea" : v.chiave;
      return nomi[cand] ? "/concetti/" + slugify(cand) + "/" : "/indice/#paesi";
    }
    voci.forEach(function(v) { v.classe = classe(v.valore); v.url = url(v); v.peso = Math.max(1, Math.round(v.valore)); });
    voci.sort(function(a, b) { return b.valore - a.valore || a.chiave.localeCompare(b.chiave); });
    // SVG
    function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
    function linkIso(iso) {
      const i = info[iso];
      return i && i.nome && nomi[i.nome] ? "/concetti/" + slugify(i.nome) + "/" : null;
    }
    let svg = '<svg class="carta-svg" viewBox="' + geom.viewBox + '" role="group" aria-labelledby="carta-titolo carta-desc">'
      + '<title id="carta-titolo">' + (en ? 'Where the Italian essays look' : 'Dove guarda questo sito') + '</title>'
      + '<desc id="carta-desc">' + (en
        ? 'World map in Goode’s interrupted projection. Each country is shaded in five classes by how much the Italian essays discuss it; the values are in the text legend.'
        : (bergamo
          ? 'Carta del mondo in proiezione azimutale equivalente di Lambert, centrata su Bergamo, con i cerchi di distanza ogni 30 gradi. Ogni paese è colorato in cinque classi secondo quanto il sito ne parla; il dettaglio con i valori è nella legenda testuale.'
          : 'Carta del mondo in proiezione di Goode interrotta. Ogni paese è colorato in cinque classi secondo quanto il sito ne parla; il dettaglio con i valori è nella legenda testuale.')) + '</desc>'
      + '<clipPath id="carta-clip"><path d="' + geom.sphere + '"/></clipPath>'
      + '<path class="carta-sfera" d="' + geom.sphere + '"/>'
      + '<path class="carta-reticolo" d="' + geom.graticule + '"/><g clip-path="url(#carta-clip)">';
    const punti = [];
    Object.keys(geom.countries).forEach(function(iso) {
      const c = geom.countries[iso], k = classe(perIso[iso]);
      const t = k && info[iso] ? '<title>' + esc(info[iso].titolo) + '</title>' : '';
      const href = k ? linkIso(iso) : null;
      function wrap(el) { return href ? '<a href="' + href + '" class="carta-link">' + el + '</a>' : el; }
      if (c.d) svg += wrap('<path class="carta-p carta-c' + k + '" d="' + c.d + '">' + t + '</path>');
      if (k && c.area < (bergamo ? 20 : 40) && diretti[iso]) punti.push(wrap('<circle class="carta-punto carta-c' + k + '" cx="' + c.cx + '" cy="' + c.cy + '" r="4">' + t + '</circle>'));
    });
    svg += '</g>';
    if (geom.anelli) svg += '<path class="carta-anello" d="' + geom.anelli + '"/>';
    svg += punti.join("");
    if (geom.centro) svg += '<circle class="carta-centro" cx="' + geom.centro.x + '" cy="' + geom.centro.y + '" r="4.5"/><text class="carta-centro-nome" x="' + (geom.centro.x + 9) + '" y="' + (geom.centro.y - 8) + '">' + geom.centro.nome + '</text>';
    svg += '</svg>';
    return { svg: svg, legenda: voci.slice(0, 12), altri: Math.max(0, voci.length - 12), totale: voci.length };
  });

  // Prima frase di un testo (fino a . ? ! seguiti da spazio o fine).
  eleventyConfig.addFilter("firstSentence", function(str) {
    if (!str) return "";
    var m = String(str).match(/^.*?[.?!](?=\s|$)/);
    return m ? m[0] : String(str);
  });

  // All unique Argomenti: category tags from writings + curated tags mapped
  // through curatedTagAliases.js onto their canonical Argomento name.
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    var tagSet = new Set();
    collectionApi.getFilteredByGlob("src/writings/*.md").forEach(function(item) {
      var cats = item.data.category;
      if (!cats) return;
      var arr = Array.isArray(cats) ? cats : [cats];
      arr.forEach(function(c) { tagSet.add(c); });
    });
    collectionApi.getFilteredByGlob("src/curated/*.md").forEach(function(item) {
      var tags = item.data.tags;
      if (!tags) return;
      var arr = Array.isArray(tags) ? tags : [tags];
      arr.forEach(function(t) {
        var canonical = curatedTagAliases[String(t).toLowerCase()];
        if (canonical) tagSet.add(canonical);
      });
    });
    return Array.from(tagSet).sort();
  });

  // Mixed feed: writings + curated sorted by date descending
  eleventyConfig.addCollection("allPosts", function(collectionApi) {
    const writings = collectionApi.getFilteredByGlob("src/writings/*.md")
      .map(item => { item.data._postType = "writing"; return item; });
    const curated = collectionApi.getFilteredByGlob("src/curated/*.md")
      .map(item => { item.data._postType = "curated"; return item; });
    return [...writings, ...curated]
      .sort((a, b) => b.date - a.date);
  });

  // === COLLECTIONS (continued) ===

  // Merged concepts index: static conceptsIndex.js + curated items that declare
  // concepts[] in their frontmatter. Curated articles are added to matching
  // concept entries; unknown concept names are reported (see warning below)
  // and skipped — they need to be added to conceptsIndex.js first.
  // ─── JSON-LD dell'indice concettuale (DefinedTerm) ─────────────────────────
  // Ogni pagina /concetti/<slug>/ e' una voce di vocabolario (DefinedTerm) del
  // set dichiarato in /indice/. L'identita' dell'entita' reale sta in `about`,
  // con il sameAs a Wikidata. Vedi MANUALE.md.
  const CC_SITE = "https://claudiocammarano.com";
  const CC_ABOUT_TYPE = {
    persona: "Person",
    istituzione: "Organization",
    luogo: "Place",
    paese: "Country",
    testo: "CreativeWork"
  };
  function ccPlainText(s) {
    if (!s) return "";
    return String(s)
      .replace(/<[^>]+>/g, "")
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
  function ccDisplayName(str, type) {
    if (!str) return "";
    const s = String(str).trim();
    if (type && type !== "persona") return s;
    const parts = s.split(",");
    if (parts.length !== 2) return s;
    const last = parts[0].trim(), first = parts[1].trim();
    if (!last || !first || first.length > 40) return s;
    return first + " " + last;
  }
  eleventyConfig.addFilter("conceptJsonLd", function (concept, pageUrl) {
    const name = ccDisplayName(concept.name, concept.type);
    const url = CC_SITE + pageUrl;
    const obj = {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": url + "#term",
      "name": name,
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "@id": CC_SITE + "/indice/#set",
        "name": "Indice concettuale di claudiocammarano.com",
        "url": CC_SITE + "/indice/"
      }
    };
    try {
      obj.termCode = eleventyConfig.getFilter("slugify")(concept.name);
    } catch (err) { /* slugify non disponibile: termCode omesso */ }
    if (concept.note) obj.description = ccPlainText(concept.note);
    const aboutType = CC_ABOUT_TYPE[concept.type];
    const same = (concept.sameAs && concept.sameAs.length) ? concept.sameAs : null;
    if (aboutType) {
      obj.about = { "@type": aboutType, "name": name };
      if (same) obj.about.sameAs = same;
    } else if (same) {
      obj.sameAs = same;
    }
    obj.mainEntityOfPage = {
      "@type": "CollectionPage",
      "@id": url,
      "url": url,
      "author": {
        "@type": "Person",
        "@id": CC_SITE + "/#person",
        "name": "Claudio Cammarano",
        "url": CC_SITE
      }
    };
    if (concept.articles && concept.articles.length) {
      obj.subjectOf = concept.articles.map(function (a) {
        return { "@type": "Article", "name": a.title, "url": CC_SITE + a.url };
      });
    }
    return JSON.stringify(obj, null, 2);
  });

  // ─── L'indice concettuale come dataset (SKOS + schema.org) ─────────────────
  // Serve /concetti.json. Doppio vocabolario di proposito: skos: descrive lo
  // schema di concetti, schema.org resta coerente con il JSON-LD delle pagine.
  // Il `why` dei legami non ha casa in nessuno dei due, quindi e' reificato in
  // un termine proprio documentato su /ns/ — vedi MANUALE.md sezione 5.
  const CC_NS = "https://claudiocammarano.com/ns#";
  // ─── La notazione dell'intervento AI come vocabolario ──────────────────────
  // Serve /notazione.json. Una lista di codici e' esattamente cio' per cui SKOS
  // esiste: uno schema, due collezioni (i due assi), sei concetti con notazione,
  // etichetta e definizione nelle due lingue. Il resto — perimetro, politica di
  // retrodatazione, changelog — sta in termini propri documentati su /ns/.
  eleventyConfig.addFilter("notationJsonLd", function (n) {
    const SITE = CC_SITE, BASE = n.spec.url + "#";
    function term(code, def, axis) {
      return {
        "@id": BASE + code,
        "@type": ["skos:Concept", "DefinedTerm"],
        notation: code,
        termCode: code,
        prefLabel: { it: def.label.it, en: def.label.en },
        definition: { it: def.desc.it, en: def.desc.en },
        inScheme: BASE + "scheme",
        "cc:axis": axis
      };
    }
    const prose = n.proseOrder.map(function (c) { return term(c, n.prose[c], "prosa"); });
    const scope = n.scopeOrder.map(function (c) { return term(c, n.scope[c], "apparato"); });

    const doc = {
      "@context": {
        "@vocab": "https://schema.org/",
        skos: "http://www.w3.org/2004/02/skos/core#",
        cc: CC_NS,
        notation: { "@id": "skos:notation" },
        prefLabel: { "@id": "skos:prefLabel", "@container": "@language" },
        definition: { "@id": "skos:definition", "@container": "@language" },
        inScheme: { "@id": "skos:inScheme", "@type": "@id" },
        hasTopConcept: { "@id": "skos:hasTopConcept", "@type": "@id" },
        member: { "@id": "skos:member", "@type": "@id" }
      },
      "@id": BASE + "scheme",
      "@type": ["skos:ConceptScheme", "DefinedTermSet"],
      name: "Notazione dell'intervento AI",
      alternateName: "AI intervention notation",
      description: "Vocabolario dei codici con cui claudiocammarano.com dichiara, su ogni testo pubblicato, quanta della superficie pubblicata e' passata da un modello linguistico. Due assi indipendenti: il primo sulla prosa, obbligatorio e a valore singolo; il secondo sugli apparati tecnici, facoltativo e cumulabile.",
      url: n.spec.url,
      version: n.spec.version,
      datePublished: n.activeFrom,
      dateModified: n.spec.updated,
      inLanguage: ["it", "en"],
      license: n.spec.license,
      creator: {
        "@type": "Person",
        "@id": SITE + "/#person",
        name: "Claudio Cammarano",
        url: SITE,
        sameAs: ["https://orcid.org/0009-0006-3690-7466"]
      },
      isBasedOn: SITE + n.essayUrl,
      "cc:vocabulary": SITE + "/ns/",
      "cc:scopeStatement": { it: n.scopeStatement.it, en: n.scopeStatement.en },
      "cc:retroPolicy": {
        activeFrom: n.activeFrom,
        it: n.retro.note.it,
        en: n.retro.note.en
      },
      "cc:codeForm": "Un valore del primo asse, eventualmente seguito dai valori del secondo separati da un punto mediano: DL, WR, 00·FM, ED·TR, DL·FM·TR.",
      "cc:changelog": n.spec.changelog,
      "cc:axis": [
        {
          "@id": BASE + "asse-prosa",
          "@type": "skos:Collection",
          prefLabel: { it: "Primo asse — su quanta prosa", en: "First axis — how much prose" },
          "cc:required": true,
          "cc:cardinality": "uno",
          member: prose.map(function (t) { return t["@id"]; })
        },
        {
          "@id": BASE + "asse-apparato",
          "@type": "skos:Collection",
          prefLabel: { it: "Secondo asse — su quali apparati", en: "Second axis — which apparatus" },
          "cc:required": false,
          "cc:cardinality": "zero o piu'",
          member: scope.map(function (t) { return t["@id"]; })
        }
      ],
      hasTopConcept: prose.concat(scope).map(function (t) { return t["@id"]; }),
      hasDefinedTerm: prose.concat(scope)
    };
    return JSON.stringify(doc, null, 2);
  });

  eleventyConfig.addFilter("conceptSchemeJsonLd", function (all, ds) {
    const S = CC_NS, SITE = CC_SITE;
    const slugify = eleventyConfig.getFilter("slugify");
    const termId = n => SITE + "/concetti/" + slugify(n) + "/#term";
    const pageUrl = n => SITE + "/concetti/" + slugify(n) + "/";

    // archi asseriti, risolti nelle due direzioni
    const edges = new Map();
    all.forEach(function (c) {
      (c.related || []).forEach(function (r) {
        if (!edges.has(c.name)) edges.set(c.name, []);
        if (!edges.has(r.name)) edges.set(r.name, []);
        edges.get(c.name).push({ name: r.name, why: r.why });
        edges.get(r.name).push({ name: c.name, why: r.why });
      });
    });

    const terms = all.map(function (c) {
      const label = ccDisplayName(c.name, c.type);
      const t = {
        "@id": termId(c.name),
        "@type": ["skos:Concept", "DefinedTerm"],
        prefLabel: label,
        name: label,
        termCode: slugify(c.name),
        conceptType: c.type,
        url: pageUrl(c.name),
        inScheme: SITE + "/indice/#set",
        inDefinedTermSet: SITE + "/indice/#set"
      };
      if (c.note) { t.note = ccPlainText(c.note); t.description = t.note; }
      if (c.citation) t.citation = ccPlainText(c.citation);
      const same = (c.sameAs && c.sameAs.length) ? c.sameAs : null;
      if (same) t.exactMatch = same;
      const aboutType = CC_ABOUT_TYPE[c.type];
      if (aboutType) {
        t.about = { "@type": aboutType, name: label };
        if (same) t.about.sameAs = same;
      }
      if (c.articles && c.articles.length) {
        t.subjectOf = c.articles.map(function (a) {
          return { "@type": "Article", name: a.title, url: SITE + a.url };
        });
      }
      const es = edges.get(c.name);
      if (es && es.length) {
        // percorso standard, per chi legge solo SKOS
        t.related = es.map(function (x) { return termId(x.name); });
        // percorso arricchito, con la ragione del legame
        t.relatedTerm = es.map(function (x) {
          return { "@type": "cc:Link", target: termId(x.name), why: x.why };
        });
      }
      return t;
    });

    const withSame = terms.filter(function (t) { return t.exactMatch; }).length;
    const nEdges = all.reduce(function (s, c) { return s + ((c.related || []).length); }, 0);
    const byType = {};
    all.forEach(function (c) { byType[c.type] = (byType[c.type] || 0) + 1; });

    const doc = {
      "@context": {
        "@vocab": "https://schema.org/",
        skos: "http://www.w3.org/2004/02/skos/core#",
        cc: S,
        prefLabel: { "@id": "skos:prefLabel" },
        note: { "@id": "skos:note" },
        exactMatch: { "@id": "skos:exactMatch", "@type": "@id" },
        inScheme: { "@id": "skos:inScheme", "@type": "@id" },
        related: { "@id": "skos:related", "@type": "@id" },
        hasTopConcept: { "@id": "skos:hasTopConcept" },
        conceptType: { "@id": "cc:type" },
        relatedTerm: { "@id": "cc:relatedTerm" },
        target: { "@id": "cc:target", "@type": "@id" },
        why: { "@id": "cc:why" }
      },
      "@id": SITE + "/indice/#set",
      "@type": ["skos:ConceptScheme", "DefinedTermSet", "Dataset"],
      name: "Indice concettuale di claudiocammarano.com",
      alternateName: "Concept index of claudiocammarano.com",
      description: "Vocabolario dei concetti — persone, teorie, testi, istituzioni, luoghi e paesi — citati con peso argomentativo negli scritti di Claudio Cammarano. Ogni voce porta una nota discorsiva, gli agganci all'entita' reale su Wikidata e Wikipedia, gli articoli in cui compare e i legami dichiarati verso altri concetti, ciascuno con la ragione del legame.",
      url: SITE + "/indice/",
      version: ds.version,
      dateModified: ds.released,
      datePublished: ds.released,
      inLanguage: "it",
      license: ds.license,
      creator: {
        "@type": "Person",
        "@id": SITE + "/#person",
        name: "Claudio Cammarano",
        url: SITE,
        sameAs: [
          "https://orcid.org/0009-0006-3690-7466",
          "https://www.wikidata.org/wiki/Q140264282"
        ]
      },
      isBasedOn: SITE + "/",
      keywords: [
        "indice concettuale", "concept index", "SKOS", "editoria",
        "epistemologia", "intelligenza artificiale", "teoria dei giochi",
        "media ecology", "semiotica"
      ],
      distribution: {
        "@type": "DataDownload",
        encodingFormat: "application/ld+json",
        contentUrl: SITE + "/concetti.json"
      },
      // i DOI, quando ci sono: prima il concettuale (stabile), poi quello
      // di questa versione, cosi' il file si dichiara come la cosa depositata
      identifier: [ds.doi, ds.versionDoi].filter(Boolean).length
        ? [ds.doi, ds.versionDoi].filter(Boolean)
        : undefined,
      "cc:changelog": ds.changelog,
      "cc:statistics": {
        concetti: terms.length,
        perTipo: byType,
        conAggancioEsterno: withSame,
        legamiDichiarati: nEdges
      },
      "cc:vocabulary": SITE + "/ns/",
      hasDefinedTerm: terms,
      hasTopConcept: terms.map(function (t) { return { "@id": t["@id"] }; })
    };
    return JSON.stringify(doc, null, 2);
  });

  eleventyConfig.addCollection("mergedConceptsIndex", function(collectionApi) {
    // Deep-clone to avoid mutating the require() cache across builds
    var index = conceptsIndexData.map(function(c) {
      return {
        name: c.name,
        type: c.type,
        articles: c.articles.slice(),
        note: c.note || null,
        sameAs: (c.sameAs && c.sameAs.length) ? c.sameAs.slice() : null,
        related: (c.related && c.related.length) ? c.related.slice() : null,
        citation: c.citation || null,
        lab: c.lab || false,
        geo: c.geo || null
      };
    });

    // Fast lookup by concept name
    var byName = {};
    index.forEach(function(c) { byName[c.name] = c; });

    // Walk curated + learning collections
    var missing = []; // { file, conceptName } — reported after the loop

    function walkCollection(items, source) {
      items.forEach(function(item) {
        var concepts = item.data.concepts;
        if (!Array.isArray(concepts) || concepts.length === 0) return;

        concepts.forEach(function(conceptName) {
          var concept = byName[conceptName];
          if (!concept) {
            missing.push({ file: item.inputPath, name: conceptName });
            return; // not in taxonomy — add it to conceptsIndex.js first
          }

          var already = concept.articles.some(function(a) { return a.url === item.url; });
          if (!already) {
            concept.articles.push({
              title: item.data.title,
              url: item.url,
              _source: source
            });
          }
        });
      });
    }

    walkCollection(collectionApi.getFilteredByGlob("src/curated/*.md"), "curated");
    walkCollection(collectionApi.getFilteredByGlob("src/learning/*.md"), "learning");

    if (missing.length > 0) {
      console.warn("\n⚠️  CONCETTI NON REGISTRATI (ignorati nell'indice/grafo) — aggiungili a src/_data/conceptsIndex.js:");
      missing.forEach(function(m) {
        console.warn("   " + m.file + " -> \"" + m.name + "\"");
      });
      console.warn("");
    }

    return index;
  });

  // === FILTERS ===

  eleventyConfig.addFilter("formatDate", function(date) {
    return new Intl.DateTimeFormat('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  });

  // Usato solo dalla sezione /lab/, che è in sola lingua inglese
  eleventyConfig.addFilter("formatDateEN", function(date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  });

  eleventyConfig.addFilter("isoDate", function(date) {
    return new Date(date).toISOString().split('T')[0];
  });

  eleventyConfig.addFilter("rssDate", function(date) {
    return new Date(date).toUTCString();
  });

  // Related posts: up to 3 writings sharing at least one category tag
  eleventyConfig.addFilter("getRelatedPosts", function(collection, currentUrl, category) {
    if (!category) return [];
    var tags = Array.isArray(category) ? category : [category];
    return collection
      .filter(function(p) {
        if (p.url === currentUrl) return false;
        if (!p.data.category) return false;
        var pTags = Array.isArray(p.data.category) ? p.data.category : [p.data.category];
        return tags.some(function(t) { return pTags.indexOf(t) !== -1; });
      })
      .slice(0, 3);
  });

  // Curated pertinenti per un writing, selezione automatica a build time.
  // Punteggio: +3 per concetto condiviso (via mergedConceptsIndex), +1 per
  // argomento condiviso (tag del curated canonicalizzato via curatedTagAliases
  // contro le category del writing). Soglia minima 2: meglio due pertinenti
  // veri che tre con un riempitivo. Quanti: 3 sotto i 20 min di lettura,
  // 4 fino a 40, 5 oltre (stesse 200 wpm del filtro readingTime).
  eleventyConfig.addFilter("relatedCurated", function(curatedCollection, currentUrl, category, allConcepts, content) {
    if (!curatedCollection || !currentUrl) return [];

    var myConcepts = {};
    (allConcepts || []).forEach(function(c) {
      if (c.articles.some(function(a) { return a.url === currentUrl; })) {
        myConcepts[c.name] = true;
      }
    });

    var myTags = {};
    var cats = Array.isArray(category) ? category : (category ? [category] : []);
    cats.forEach(function(t) { myTags[String(t).toLowerCase()] = true; });

    var scored = [];
    curatedCollection.forEach(function(p) {
      var score = 0;
      (p.data.concepts || []).forEach(function(cn) {
        if (myConcepts[cn]) score += 3;
      });
      (p.data.tags || []).forEach(function(t) {
        if (t === 'curated') return;
        var canonical = curatedTagAliases[String(t).toLowerCase()];
        if (canonical && myTags[canonical.toLowerCase()]) score += 1;
      });
      if (score >= 2) scored.push({ post: p, score: score });
    });

    scored.sort(function(a, b) {
      return b.score - a.score || (b.post.date - a.post.date);
    });

    var text = (content || '').replace(/<[^>]*>/g, ' ');
    var words = text.split(/\s+/).filter(function(w) { return w.length > 0; }).length;
    var minutes = words / 200;
    var howMany = minutes < 20 ? 3 : (minutes <= 40 ? 4 : 5);

    return scored.slice(0, howMany).map(function(s) { return s.post; });
  });

  // Prev/next navigation within writings collection (sorted newest first)
  eleventyConfig.addFilter("getPrevPost", function(collection, currentUrl) {
    const index = collection.findIndex(function(p) { return p.url === currentUrl; });
    return index < collection.length - 1 ? collection[index + 1] : null;
  });

  eleventyConfig.addFilter("getNextPost", function(collection, currentUrl) {
    const index = collection.findIndex(function(p) { return p.url === currentUrl; });
    return index > 0 ? collection[index - 1] : null;
  });

  // Find a post by URL (used by the curated `rinvio:` field).
  // Returns null if not found — the template falls back to the raw path.
  eleventyConfig.addFilter("findByUrl", function(collection, url) {
    if (!url) return null;
    return collection.find(function(p) { return p.url === url; }) || null;
  });

  eleventyConfig.addFilter("jsonEscape", function(str) {
    if (!str) return '';
    return JSON.stringify(String(str)).slice(1, -1);
  });

  // Renderizza il markdown inline (corsivo *...*, apici, ecc.) contenuto nei
  // campi testuali di conceptsIndex.js, che altrimenti stamperebbero gli
  // asterischi letterali. Da usare con | safe. Vedi concetti.njk.
  eleventyConfig.addFilter("mdInline", function(str) {
    if (!str) return '';
    return md.renderInline(String(str));
  });

  // Rimuove i marcatori markdown di enfasi (*...*, _..._) restituendo testo
  // pulito: per meta tag, title e altri contesti che non renderizzano HTML.
  // Nome in forma naturale per title, H1 e breadcrumb delle pagine-entita':
  // "Fricker, Miranda" -> "Miranda Fricker". L'indice alfabetico continua a
  // usare concept.name (forma invertita) per l'ordinamento. Si applica solo
  // alle entita' di tipo "persona" e solo con una singola virgola.
  eleventyConfig.addFilter("displayName", function(str, type) {
    if (!str) return '';
    const s = String(str).trim();
    if (type && type !== 'persona') return s;
    const parts = s.split(',');
    if (parts.length !== 2) return s;
    const last = parts[0].trim();
    const first = parts[1].trim();
    if (!last || !first || first.length > 40) return s;
    return first + ' ' + last;
  });

  eleventyConfig.addFilter("stripMd", function(str) {
    if (!str) return '';
    return String(str)
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/_([^_]+)_/g, "$1");
  });

  // Full JSON serialization (used for the /graph-data.json output and inline data blocks)
  eleventyConfig.addFilter("toJSON", function(obj) {
    return JSON.stringify(obj);
  });

  eleventyConfig.addFilter("readingTime", function(content) {
    if (!content) return '';
    const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = text.split(' ').filter(w => w.length > 0).length;
    const minutes = Math.ceil(words / 200);
    return minutes + ' min';
  });

  eleventyConfig.addFilter("limit", function(arr, count) {
    if (!arr) return [];
    return arr.slice(0, count);
  });

  eleventyConfig.addFilter("getSeriesNav", function(collection, seriesBaseName, currentUrl) {
    if (!seriesBaseName) return null;
    var posts = collection.filter(function(p) {
      var s = p.data.series;
      if (!s) return false;
      var base = s.replace(/,\s+[IVXLCDM]+$/i, '').trim();
      return base === seriesBaseName;
    }).sort(function(a, b) { return a.date - b.date; });
    var index = posts.findIndex(function(p) { return p.url === currentUrl; });
    if (index === -1 || posts.length < 2) return null;
    return {
      prev: index > 0 ? posts[index - 1] : null,
      next: index < posts.length - 1 ? posts[index + 1] : null,
      position: index + 1,
      total: posts.length
    };
  });

  eleventyConfig.addFilter("seriesBaseName", function(str) {
    if (!str) return '';
    return str.replace(/,\s+[IVXLCDM]+$/i, '').trim();
  });

  eleventyConfig.addFilter("filterBySeries", function(collection, baseName) {
    if (!baseName) return [];
    return collection.filter(function(p) {
      var s = p.data.series;
      if (!s) return false;
      var base = s.replace(/,\s+[IVXLCDM]+$/i, '').trim();
      return base === baseName;
    }).sort(function(a, b) { return a.date - b.date; });
  });

  // Ordina alfabeticamente (localeCompare "it", case-insensitive) un array di
  // stringhe — usato per gli Argomenti dentro ogni cluster su /temi/
  // (ordinamento per-cluster: ogni sezione con header h2 ricomincia da A).
  eleventyConfig.addFilter("sortAlpha", function(arr) {
    if (!arr) return [];
    return arr.slice().sort(function(a, b) {
      return String(a).localeCompare(String(b), "it", { sensitivity: "base" });
    });
  });

  // Restituisce tutti gli Argomenti di tutti i cluster come lista piatta
  // ordinata alfabeticamente in modo globale — usato su /indice/ dove la
  // lista è flat senza separatori di cluster, per cui il sort deve essere
  // globale e non per-cluster (che darebbe salti A→A→A non evidenti).
  eleventyConfig.addFilter("allTagsSorted", function(clusters) {
    if (!clusters) return [];
    var all = [];
    Object.keys(clusters).forEach(function(clusterName) {
      clusters[clusterName].forEach(function(tag) { all.push(tag); });
    });
    return all.sort(function(a, b) {
      return String(a).localeCompare(String(b), "it", { sensitivity: "base" });
    });
  });

  eleventyConfig.addFilter("slugify", function(str) {
    if (!str) return '';
    return str.toLowerCase()
      .replace(/[àáâãäå]/g, 'a')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  });

  // Concepts for a post: given a page URL, returns all concepts that cite it
  eleventyConfig.addFilter("conceptsForPost", function(url, allConcepts) {
    if (!url || !allConcepts) return [];
    return allConcepts.filter(function(c) {
      return c.articles.some(function(a) { return a.url === url; });
    });
  });

  // Related concepts: concepts that share at least one article with the given concept name
  // ─── Legami dichiarati fra concetti ────────────────────────────────────────
  // Archi asseriti a mano in conceptsIndex.js (campo `related`), distinti dalla
  // co-occorrenza calcolata da `relatedConcepts`. Ogni arco si dichiara UNA
  // volta sola e viene reso in entrambe le direzioni: per questo il `why` si
  // scrive come relazione e non come direzione.
  eleventyConfig.addFilter("assertedLinks", function (conceptName, allConcepts) {
    if (!conceptName || !allConcepts) return [];
    var byName = {};
    allConcepts.forEach(function (c) { byName[c.name] = c; });
    var out = [], seen = {};
    function push(name, why) {
      if (!byName[name] || seen[name] || name === conceptName) return;
      seen[name] = true;
      out.push({ name: name, type: byName[name].type, why: why || "" });
    }
    var self = byName[conceptName];
    if (self && self.related) {
      self.related.forEach(function (r) { push(r.name, r.why); });
    }
    allConcepts.forEach(function (c) {
      if (c.name === conceptName || !c.related) return;
      c.related.forEach(function (r) { if (r.name === conceptName) push(c.name, r.why); });
    });
    return out.sort(function (a, b) { return a.name.localeCompare(b.name, "it"); });
  });

  eleventyConfig.addFilter("relatedConcepts", function(conceptName, allConcepts) {
    if (!allConcepts || !conceptName) return [];
    var current = null;
    for (var i = 0; i < allConcepts.length; i++) {
      if (allConcepts[i].name === conceptName) { current = allConcepts[i]; break; }
    }
    if (!current || !current.articles.length) return [];
    var currentUrls = {};
    current.articles.forEach(function(a) { currentUrls[a.url] = true; });
    var related = [];
    allConcepts.forEach(function(c) {
      if (c.name === conceptName) return;
      var shared = c.articles.filter(function(a) { return currentUrls[a.url]; }).length;
      if (shared > 0) related.push({ name: c.name, type: c.type, sharedCount: shared });
    });
    return related
      .sort(function(a, b) { return b.sharedCount - a.sharedCount; })
      .slice(0, 14);
  });

  // Lettera iniziale normalizzata per i separatori dell'indice analitico:
  // accenti rimossi (Averroe' sta sotto A, Ypi sotto Y), maiuscola, e "#" per
  // tutto cio' che non e' una lettera latina (es. "77 Brigade").
  eleventyConfig.addFilter("firstLetter", function(str) {
    if (!str) return '#';
    var ch = String(str).trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').charAt(0).toUpperCase();
    return /[A-Z]/.test(ch) ? ch : '#';
  });

  // Ancora HTML valida per una lettera ("#" non puo' stare in un id).
  eleventyConfig.addFilter("letterAnchor", function(letter) {
    return letter === '#' ? 'num' : String(letter).toLowerCase();
  });

  // Lettere iniziali presenti in una lista gia' ordinata, senza duplicati e
  // nell'ordine della lista stessa.
  eleventyConfig.addFilter("initials", function(arr) {
    if (!arr) return [];
    var out = [], seen = {};
    arr.forEach(function(c) {
      var name = (c && c.name) ? c.name : c;
      if (!name) return;
      var ch = String(name).trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').charAt(0).toUpperCase();
      if (!/[A-Z]/.test(ch)) ch = '#';
      if (!seen[ch]) { seen[ch] = true; out.push(ch); }
    });
    return out;
  });

  // Raggruppa conceptsIndex per tipo. Ordine ALFABETICO, con il numero di
  // menzioni solo come spareggio fra omonimi.
  // Prima era il contrario (menzioni desc, poi alfabetico): con poche decine
  // di voci quell'ordine funzionava come classifica di rilevanza, ma sopra le
  // duecento voci un elenco ordinato per frequenza non e' piu' consultabile —
  // per trovare un termine bisogna scorrerlo tutto. La rilevanza resta
  // leggibile dal badge del conteggio e dal peso visivo della riga, che sono
  // segnali non posizionali: l'ordine torna a servire la ricerca.
  // sensitivity "base" perche' l'indice mescola nomi propri maiuscoli e
  // termini comuni minuscoli, che devono ordinarsi per lettera e non per case.
  eleventyConfig.addFilter("filterByType", function(arr, type) {
    if (!arr) return [];
    return arr
      .filter(function(c) { return c.type === type; })
      .sort(function(a, b) {
        var byName = String(a.name).localeCompare(String(b.name), "it", { sensitivity: "base", numeric: true });
        if (byName !== 0) return byName;
        return b.articles.length - a.articles.length;
      });
  });

  // Returns the cluster name for the first matching tag, or null if unmapped
  eleventyConfig.addFilter("clusterOf", function(tags) {
    if (!tags) return null;
    var arr = Array.isArray(tags) ? tags : [tags];
    for (var clusterName in clustersData) {
      for (var i = 0; i < arr.length; i++) {
        if (clustersData[clusterName].indexOf(arr[i]) !== -1) {
          return clusterName;
        }
      }
    }
    return null;
  });

  // Shared match logic: does this post belong to Argomento `tag`?
  // Writings match via data.category (exact); curated items match via
  // data.tags mapped through curatedTagAliases.js onto a canonical name.
  function matchesTag(post, tag) {
    var cats = post.data.category;
    if (cats) {
      var arr = Array.isArray(cats) ? cats : [cats];
      if (arr.indexOf(tag) !== -1) return true;
    }
    var ctags = post.data.tags;
    if (ctags) {
      var carr = Array.isArray(ctags) ? ctags : [ctags];
      for (var i = 0; i < carr.length; i++) {
        if (curatedTagAliases[String(carr[i]).toLowerCase()] === tag) return true;
      }
    }
    return false;
  }

  // Returns every canonical Argomento name a post belongs to (writings'
  // category values as-is, curated tags translated through the aliases map).
  function argomentiOf(post) {
    var names = [];
    var cats = post.data.category;
    if (cats) {
      var arr = Array.isArray(cats) ? cats : [cats];
      arr.forEach(function(c) { names.push(c); });
    }
    var ctags = post.data.tags;
    if (ctags) {
      var carr = Array.isArray(ctags) ? ctags : [ctags];
      carr.forEach(function(t) {
        var canonical = curatedTagAliases[String(t).toLowerCase()];
        if (canonical) names.push(canonical);
      });
    }
    return names;
  }

  // Matches an Argomento against both writings (data.category, exact match)
  // and curated items (data.tags, mapped through curatedTagAliases.js).
  // Pass collections.allPosts to get both types; collections.writings still
  // works as before (curated branch is simply a no-op for those items).
  eleventyConfig.addFilter("filterByTag", function(collection, tag) {
    if (!tag) return [];
    return collection.filter(function(p) { return matchesTag(p, tag); });
  });

  // Highest article count among all Argomenti (writings + curated combined),
  // used to scale the proportional weight bar under each pill on /temi/ e /indice/.
  eleventyConfig.addFilter("maxTagCount", function(clusters, allPosts) {
    if (!clusters || !allPosts) return 0;
    var max = 0;
    Object.keys(clusters).forEach(function(clusterName) {
      clusters[clusterName].forEach(function(tag) {
        var count = allPosts.filter(function(p) { return matchesTag(p, tag); }).length;
        if (count > max) max = count;
      });
    });
    return max;
  });

  // Argomenti vicini: per il tag dato, gli altri Argomenti più frequentemente
  // presenti negli stessi articoli (co-occorrenza), in ordine decrescente.
  eleventyConfig.addFilter("relatedArgomenti", function(tag, allPosts) {
    if (!tag || !allPosts) return [];
    var counts = {};
    allPosts.forEach(function(p) {
      if (!matchesTag(p, tag)) return;
      argomentiOf(p).forEach(function(name) {
        if (name === tag) return;
        counts[name] = (counts[name] || 0) + 1;
      });
    });
    return Object.keys(counts)
      .map(function(name) { return { name: name, count: counts[name] }; })
      .sort(function(a, b) { return b.count - a.count || a.name.localeCompare(b.name, "it"); })
      .slice(0, 5);
  });

  // Sparkline temporale: posizione (0-100) di ogni articolo lungo l'arco di
  // tempo coperto dal tag, più le etichette del periodo iniziale e finale.
  eleventyConfig.addFilter("dateSparkline", function(posts) {
    if (!posts || !posts.length) return { points: [], minLabel: "", maxLabel: "", single: true };
    var fmt = function(ts) {
      return new Date(ts).toLocaleDateString("it-IT", { month: "short", year: "numeric" });
    };
    var times = posts.map(function(p) { return p.date.getTime(); });
    var minT = Math.min.apply(null, times), maxT = Math.max.apply(null, times);
    var single = minT === maxT;
    var range = maxT - minT || 1;
    var points = posts.map(function(p) {
      var t = p.date.getTime();
      var x = single ? 50 : ((t - minT) / range) * 92 + 4;
      return { x: Math.round(x * 10) / 10, title: p.data.title, dateLabel: fmt(t) };
    });
    return { points: points, minLabel: fmt(minT), maxLabel: fmt(maxT), single: single };
  });

  eleventyConfig.addFilter("excerpt", function(content, maxLen) {
    if (!content) return '';
    maxLen = maxLen || 420;
    let text = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    text = text.replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '');
    // Preserve heading text as its own line before stripping HTML
    text = text.replace(/<\/h[1-6]>/gi, '\n');
    text = text.replace(/<[^>]*>/g, ' ');
    // Convert LaTeX math to readable text (MathJax runs client-side, not available here)
    const mathToText = (expr) => {
      let t = expr;
      // Common symbols
      t = t.replace(/\\cdot/g, '·').replace(/\\times/g, '×');
      t = t.replace(/\\leq/g, '≤').replace(/\\geq/g, '≥').replace(/\\neq/g, '≠');
      t = t.replace(/\\cap/g, '∩').replace(/\\cup/g, '∪').replace(/\\subseteq/g, '⊆');
      t = t.replace(/\\approx/g, '≈').replace(/\\infty/g, '∞');
      // Any remaining \command -> just the command name (e.g. \delta -> delta, \pi -> pi)
      t = t.replace(/\\([a-zA-Z]+)/g, '$1');
      // Clean up sub/superscript braces
      t = t.replace(/[_^]\{([^}]+)\}/g, '_$1').replace(/[_^]([a-zA-Z0-9])/g, '_$1');
      t = t.replace(/[{}]/g, '');
      return t.trim();
    };
    text = text.replace(/\$\$([^$]+)\$\$/g, function(_, m) { return mathToText(m); });
    text = text.replace(/\$([^$\n]+)\$/g, function(_, m) { return mathToText(m); });
    // Normalize spaces but keep newlines
    text = text.replace(/[ \t]+/g, ' ').replace(/\n[ \t]*/g, '\n').trim();
    text = text.replace(/\n{2,}/g, '\n');
    if (text.length <= maxLen) return text;
    const truncated = text.substring(0, maxLen);
    const lastSpace = truncated.lastIndexOf(' ');
    return truncated.substring(0, lastSpace > Math.floor(maxLen * 0.5) ? lastSpace : maxLen) + '…';
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
