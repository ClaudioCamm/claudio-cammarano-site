const markdownIt = require("markdown-it");
const md = markdownIt({ html: true, typographer: true });
const clustersData = require("./src/_data/clusters.js");
const conceptsIndexData = require("./src/_data/conceptsIndex.js");

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

  // === COLLECTIONS ===

  eleventyConfig.addCollection("writings", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/writings/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("curated", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/curated/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("learning", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/learning/*.md");
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

  // All unique category tags from writings
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    var tagSet = new Set();
    collectionApi.getFilteredByGlob("src/writings/*.md").forEach(function(item) {
      var cats = item.data.category;
      if (!cats) return;
      var arr = Array.isArray(cats) ? cats : [cats];
      arr.forEach(function(c) { tagSet.add(c); });
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
  // concept entries; unknown concept names are silently skipped.
  eleventyConfig.addCollection("mergedConceptsIndex", function(collectionApi) {
    // Deep-clone to avoid mutating the require() cache across builds
    var index = conceptsIndexData.map(function(c) {
      return {
        name: c.name,
        type: c.type,
        articles: c.articles.slice(),
        note: c.note || null
      };
    });

    // Fast lookup by concept name
    var byName = {};
    index.forEach(function(c) { byName[c.name] = c; });

    // Walk curated collection
    var curated = collectionApi.getFilteredByGlob("src/curated/*.md");
    curated.forEach(function(item) {
      var concepts = item.data.concepts;
      if (!Array.isArray(concepts) || concepts.length === 0) return;

      concepts.forEach(function(conceptName) {
        var concept = byName[conceptName];
        if (!concept) return; // not in taxonomy — add it to conceptsIndex.js first

        var already = concept.articles.some(function(a) { return a.url === item.url; });
        if (!already) {
          concept.articles.push({
            title: item.data.title,
            url: item.url,
            _source: "curated"
          });
        }
      });
    });

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

  // Prev/next navigation within writings collection (sorted newest first)
  eleventyConfig.addFilter("getPrevPost", function(collection, currentUrl) {
    const index = collection.findIndex(function(p) { return p.url === currentUrl; });
    return index < collection.length - 1 ? collection[index + 1] : null;
  });

  eleventyConfig.addFilter("getNextPost", function(collection, currentUrl) {
    const index = collection.findIndex(function(p) { return p.url === currentUrl; });
    return index > 0 ? collection[index - 1] : null;
  });

  eleventyConfig.addFilter("jsonEscape", function(str) {
    if (!str) return '';
    return JSON.stringify(String(str)).slice(1, -1);
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

  eleventyConfig.addFilter("filterByTag", function(collection, tag) {
    if (!tag) return [];
    return collection.filter(function(p) {
      var cats = p.data.category;
      if (!cats) return false;
      var arr = Array.isArray(cats) ? cats : [cats];
      return arr.indexOf(tag) !== -1;
    });
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
