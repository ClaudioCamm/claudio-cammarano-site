/**
 * Layout globale del grafo dei concetti — calcolato una sola volta a build time.
 *
 * Produce un'unica struttura { nodes, edges } con coordinate x/y stabili
 * (simulazione a forze deterministica, nessuna libreria esterna) condivisa da:
 *   - la "finestra" che ogni pagina /concetti/slug/ ritaglia attorno al suo nodo
 *   - la pagina /mappa/ che mostra l'intero grafo
 *
 * Non dipende dalle collection di Eleventy: rilegge direttamente i file
 * markdown con gray-matter, replicando la stessa logica di merge usata da
 * mergedConceptsIndex in .eleventy.js, in modo da poter girare come semplice
 * funzione sincrona nei dati globali.
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const conceptsIndexData = require("./conceptsIndex.js");
const clustersData = require("./clusters.js");

const ROOT = path.join(__dirname, "..", "..");

// Stesso slugify del filtro Nunjucks, per restare coerenti con gli URL /concetti/
function slugify(str) {
  if (!str) return "";
  return str.toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const tagToCluster = {};
Object.entries(clustersData).forEach(function (entry) {
  var clusterName = entry[0], tags = entry[1];
  tags.forEach(function (t) { tagToCluster[t.toLowerCase()] = clusterName; });
});

function clusterOfCategory(category) {
  if (!category) return null;
  var arr = Array.isArray(category) ? category : [category];
  for (var clusterName in clustersData) {
    for (var i = 0; i < arr.length; i++) {
      if (clustersData[clusterName].indexOf(arr[i]) !== -1) return clusterName;
    }
  }
  return null;
}

function clusterOfTagsHeuristic(tags) {
  if (!tags) return null;
  var arr = Array.isArray(tags) ? tags : [tags];
  for (var i = 0; i < arr.length; i++) {
    var c = tagToCluster[String(arr[i]).toLowerCase()];
    if (c) return c;
  }
  return null;
}

function readMd(dir) {
  var full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter(function (f) { return f.endsWith(".md"); }).map(function (f) {
    var parsed = matter(fs.readFileSync(path.join(full, f), "utf8"));
    return { file: f, data: parsed.data };
  });
}

// PRNG deterministico (mulberry32) — stesso seed a ogni build, layout stabile
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

var W = 820, H = 700;
var CLUSTER_CENTERS = {
  "Epistemologia & AI":       [210, 190],
  "Geopolitica & potere":     [610, 190],
  "Editoria & comunicazione": [210, 510],
  "Italia & istituzioni":     [610, 510]
};
var DEFAULT_CENTER = [410, 350];

function buildLayout() {
  var writings = readMd("src/writings").map(function (w) {
    return {
      url: "/writings/" + w.file.replace(/\.md$/, "") + "/",
      cluster: clusterOfCategory(w.data.category)
    };
  });
  var curatedFiles = readMd("src/curated").map(function (c) {
    return {
      url: "/curated/" + c.file.replace(/\.md$/, "") + "/",
      concepts: Array.isArray(c.data.concepts) ? c.data.concepts : [],
      cluster: clusterOfTagsHeuristic(c.data.tags)
    };
  });

  // Stesso merge di mergedConceptsIndex (.eleventy.js), ma con il cluster di ogni articolo
  var concepts = conceptsIndexData.map(function (c) {
    return {
      name: c.name,
      type: c.type,
      articles: c.articles.map(function (a) {
        var w = writings.filter(function (x) { return x.url === a.url; })[0];
        return { url: a.url, cluster: w ? w.cluster : null };
      })
    };
  });
  var byName = {};
  concepts.forEach(function (c) { byName[c.name] = c; });
  curatedFiles.forEach(function (cur) {
    cur.concepts.forEach(function (name) {
      var c = byName[name];
      if (!c) return;
      var already = c.articles.some(function (a) { return a.url === cur.url; });
      if (!already) c.articles.push({ url: cur.url, cluster: cur.cluster });
    });
  });

  // Cluster primario + flag cross-cluster
  concepts.forEach(function (c) {
    var counts = {};
    c.articles.forEach(function (a) {
      if (a.cluster) counts[a.cluster] = (counts[a.cluster] || 0) + 1;
    });
    var names = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a] || a.localeCompare(b, "it");
    });
    c.clusters = names;
    c.primaryCluster = names[0] || null;
    c.crossCluster = names.length > 1;
  });

  // Nodi
  var nodes = concepts.map(function (c, i) {
    return {
      i: i,
      name: c.name,
      slug: slugify(c.name),
      type: c.type,
      cluster: c.primaryCluster,
      clusters: c.clusters,
      crossCluster: c.crossCluster,
      count: c.articles.length
    };
  });

  // Archi: ogni coppia di concetti che condivide almeno un articolo, peso = quanti
  var edges = [];
  for (var a = 0; a < concepts.length; a++) {
    var urlsA = {};
    concepts[a].articles.forEach(function (x) { urlsA[x.url] = true; });
    for (var b = a + 1; b < concepts.length; b++) {
      var shared = 0;
      concepts[b].articles.forEach(function (x) { if (urlsA[x.url]) shared++; });
      if (shared > 0) edges.push({ source: a, target: b, weight: shared });
    }
  }

  layoutForces(nodes, edges);

  return { nodes: nodes, edges: edges, width: W, height: H };
}

function layoutForces(nodes, edges) {
  var rand = mulberry32(42);
  nodes.forEach(function (n) {
    var c = CLUSTER_CENTERS[n.cluster] || DEFAULT_CENTER;
    n.x = c[0] + (rand() - 0.5) * 170;
    n.y = c[1] + (rand() - 0.5) * 170;
  });

  var N = nodes.length;
  var iterations = 400;
  for (var iter = 0; iter < iterations; iter++) {
    var cool = 1 - iter / iterations;

    for (var a = 0; a < N; a++) {
      var fx = 0, fy = 0;
      for (var b = 0; b < N; b++) {
        if (a === b) continue;
        var dx = nodes[a].x - nodes[b].x;
        var dy = nodes[a].y - nodes[b].y;
        var distSq = dx * dx + dy * dy;
        if (distSq < 1) distSq = 1;
        var dist = Math.sqrt(distSq);
        var force = 1700 / distSq;
        fx += (dx / dist) * force;
        fy += (dy / dist) * force;
      }
      nodes[a]._fx = fx;
      nodes[a]._fy = fy;
    }

    edges.forEach(function (e) {
      var s = nodes[e.source], t = nodes[e.target];
      var dx = t.x - s.x, dy = t.y - s.y;
      var dist = Math.sqrt(dx * dx + dy * dy) || 1;
      var targetDist = 95;
      var k = 0.018 * Math.min(e.weight, 4);
      var force = (dist - targetDist) * k;
      var fx2 = (dx / dist) * force, fy2 = (dy / dist) * force;
      s._fx += fx2; s._fy += fy2;
      t._fx -= fx2; t._fy -= fy2;
    });

    nodes.forEach(function (n) {
      var c = CLUSTER_CENTERS[n.cluster] || DEFAULT_CENTER;
      n._fx += (c[0] - n.x) * 0.01;
      n._fy += (c[1] - n.y) * 0.01;
    });

    nodes.forEach(function (n) {
      n.x += n._fx * 0.06 * cool;
      n.y += n._fy * 0.06 * cool;
      n.x = Math.max(35, Math.min(W - 35, n.x));
      n.y = Math.max(35, Math.min(H - 35, n.y));
    });
  }

  nodes.forEach(function (n) {
    n.x = Math.round(n.x * 10) / 10;
    n.y = Math.round(n.y * 10) / 10;
    delete n._fx;
    delete n._fy;
  });
}

module.exports = buildLayout;
