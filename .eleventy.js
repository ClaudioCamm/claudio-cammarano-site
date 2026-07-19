const markdownIt = require("markdown-it");
const md = markdownIt({ html: true, typographer: true });
const clustersData = require("./src/_data/clusters.js");
const conceptsIndexData = require("./src/_data/conceptsIndex.js");
const curatedTagAliases = require("./src/_data/curatedTagAliases.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/downloads");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/visualizations");

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

  // === COLLECTIONS ===

  eleventyConfig.addCollection("writings", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/writings/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("curated", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/curated/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Note di ricerca /lab/ — collezione separata da writings e curated,
  // volutamente fuori dalla tassonomia Argomenti/Concetti (vedi MANUALE.md §9)
  eleventyConfig.addCollection("lab", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/lab/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("learning", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/learning/*.md");
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
    return docs.sort(function(a, b) { return b.date - a.date; });
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
  eleventyConfig.addCollection("mergedConceptsIndex", function(collectionApi) {
    // Deep-clone to avoid mutating the require() cache across builds
    var index = conceptsIndexData.map(function(c) {
      return {
        name: c.name,
        type: c.type,
        articles: c.articles.slice(),
        note: c.note || null,
        citation: c.citation || null,
        lab: c.lab || false
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

  // Usato solo dalla sezione /episteme-advisory/lab/, che è in sola lingua inglese
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

  // Groups conceptsIndex array by type, sorted by article count desc then alpha
  eleventyConfig.addFilter("filterByType", function(arr, type) {
    if (!arr) return [];
    return arr
      .filter(function(c) { return c.type === type; })
      .sort(function(a, b) {
        if (b.articles.length !== a.articles.length) return b.articles.length - a.articles.length;
        return a.name.localeCompare(b.name, 'it');
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
