/*
 * heb.js — Hierarchical edge bundling per il grafo dei concetti.
 *
 * Un solo motore per due viste:
 *   HEB.ring(el, opts)  → /mappa/            anello completo con controlli
 *   HEB.card(el, opts)  → /concetti/<slug>/  stesso disegno, ritagliato su un nodo
 *
 * La scheda NON ricalcola un layout proprio: applica una similitudine
 * (scala + traslazione) alle stesse coordinate della mappa grande, quindi la
 * forma dei fasci è identica e la posizione angolare di un concetto è la
 * stessa ovunque. Un solo modello mentale per il lettore, un solo layout da
 * mantenere.
 *
 * Perché i fasci e non i segmenti: 232 nodi e 1328 archi stanno molto sopra il
 * tetto di planarità (3n−6 = 690), quindi un node-link classico è per forza
 * illeggibile. Raggruppando gli archi lungo la gerarchia l'unità di lettura
 * diventa il fascio, e la densità smette di essere un problema.
 *
 * Nessuna libreria esterna. Archi su <canvas> (1328 elementi SVG che si
 * ridisegnano insieme non reggono il pan), nodi ed etichette su <svg> sopra.
 */
(function (global) {
  'use strict';

  var TYPE_LABEL = {
    persona: 'Persone', teoria: 'Teorie e concetti', istituzione: 'Istituzioni',
    testo: 'Testi', paese: 'Paesi', luogo: 'Luoghi', altro: 'Altro'
  };
  var TYPE_ORDER = ['persona', 'teoria', 'istituzione', 'testo', 'paese', 'luogo', 'altro'];
  var PAL = ['--heb-1', '--heb-2', '--heb-3', '--heb-4', '--heb-5', '--heb-6'];
  var NONE_KEY = '(tema non assegnato)';

  function cssv(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#888';
  }
  // Stessa regola del filtro displayName di .eleventy.js: le pagine-entita'
  // mostrano "Miranda Fricker", non "Fricker, Miranda". L'ordinamento dentro
  // il gruppo resta pero' sul nome invertito, perche' su un anello di ottanta
  // persone si cerca per cognome.
  function displayName(str, type) {
    if (!str) return '';
    var v = String(str).trim();
    if (type && type !== 'persona') return v;
    var parts = v.split(',');
    if (parts.length !== 2) return v;
    var last = parts[0].trim(), first = parts[1].trim();
    if (!last || !first || first.length > 40) return v;
    return first + ' ' + last;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  }

  /* ---------------------------------------------------------------------
   * Backbone della rete: disparity filter (Serrano, Boguñá, Vespignani,
   * PNAS 2009) unito al legame più forte di ogni nodo.
   * Un arco sopravvive se è statisticamente rilevante rispetto alla forza del
   * NODO, non a una soglia globale: un concetto periferico con tre legami
   * tiene il suo legame forte, un hub con sessanta ne tiene pochi. Una soglia
   * secca sul peso, al confronto, isolerebbe tutta la periferia.
   * ------------------------------------------------------------------- */
  function backbone(nodes, edges, alpha) {
    var k = new Array(nodes.length).fill(0), s = new Array(nodes.length).fill(0);
    edges.forEach(function (e) {
      k[e[0]]++; k[e[1]]++; s[e[0]] += e[2]; s[e[1]] += e[2];
    });
    var keep = new Array(edges.length).fill(false);
    edges.forEach(function (e, idx) {
      [e[0], e[1]].forEach(function (i) {
        if (k[i] <= 1) { keep[idx] = true; return; }
        if (Math.pow(1 - e[2] / s[i], k[i] - 1) < alpha) keep[idx] = true;
      });
    });
    // Il filtro puro lascia isolati i quattro quinti dei nodi: quando tutti i
    // legami di un concetto pesano uguale, nessuno di essi e' piu' probabile
    // del caso, ed e' matematicamente corretto ma inservibile come mappa.
    // Si aggiunge quindi il legame piu' forte di ciascun nodo: la rete resta
    // rada (223 archi su 1328) e nessun concetto resta senza porta.
    var byNode = [];
    for (var i = 0; i < nodes.length; i++) byNode.push([]);
    edges.forEach(function (e, idx) { byNode[e[0]].push(idx); byNode[e[1]].push(idx); });
    byNode.forEach(function (list) {
      list.sort(function (a, b) { return edges[b][2] - edges[a][2] || a - b; });
      if (list.length) keep[list[0]] = true;
    });
    return keep;
  }

  /* --------------------------------------------------------------------- */
  function makeModel(data) {
    var N = data.nodes.map(function (n) {
      return { n: displayName(n.name, n.type), sort: n.name, s: n.slug,
               t: n.type || 'altro', c: n.cluster || null, k: n.count || 1 };
    });
    var E = data.edges.map(function (e) { return [e.source, e.target, e.weight]; });
    var deg = new Array(N.length).fill(0);
    E.forEach(function (e) { deg[e[0]]++; deg[e[1]]++; });
    return { N: N, E: E, deg: deg, sig: backbone(N, E, 0.15) };
  }

  var CX = 560, CY = 560, R = 388, RG = 0.60 * R, BETA = 0.86, VB = 1120;

  function buildLayout(M, mode) {
    var keyOf = function (i) {
      return mode === 'type' ? (M.N[i].t || 'altro') : (M.N[i].c || NONE_KEY);
    };
    var order;
    if (mode === 'type') {
      var present = {};
      M.N.forEach(function (n) { present[n.t || 'altro'] = 1; });
      order = TYPE_ORDER.filter(function (t) { return present[t]; });
    } else {
      var seen = {};
      M.N.forEach(function (n) { var k = n.c || NONE_KEY; seen[k] = (seen[k] || 0) + 1; });
      order = Object.keys(seen).filter(function (k) { return k !== NONE_KEY; }).sort();
      if (seen[NONE_KEY]) order.push(NONE_KEY);
    }
    var buckets = {};
    order.forEach(function (k) { buckets[k] = []; });
    M.N.forEach(function (n, i) { buckets[keyOf(i)].push(i); });
    Object.keys(buckets).forEach(function (k) {
      buckets[k].sort(function (a, b) {
        return M.N[a].sort.localeCompare(M.N[b].sort, 'it', { sensitivity: 'base' });
      });
    });

    var gap = 0.026, usable = Math.PI * 2 - gap * order.length;
    var pos = new Array(M.N.length), groups = [], a = -Math.PI / 2 + gap / 2;
    order.forEach(function (k, gi) {
      var arr = buckets[k], span = usable * (arr.length / M.N.length), start = a;
      arr.forEach(function (idx, j) {
        var ang = arr.length === 1 ? start + span / 2 : start + span * ((j + 0.5) / arr.length);
        pos[idx] = { ang: ang, x: CX + R * Math.cos(ang), y: CY + R * Math.sin(ang), g: gi };
      });
      var mid = start + span / 2;
      groups.push({
        key: k, gi: gi, from: start, to: start + span, mid: mid,
        gx: CX + RG * Math.cos(mid), gy: CY + RG * Math.sin(mid),
        count: arr.length,
        label: mode === 'type' ? (TYPE_LABEL[k] || k) : k,
        color: (mode === 'cluster' && k === NONE_KEY) ? cssv('--heb-none') : cssv(PAL[gi % PAL.length])
      });
      a += span + gap;
    });
    return { pos: pos, groups: groups, keyOf: keyOf, mode: mode };
  }

  function controlPoints(L, i, j) {
    var A = L.pos[i], B = L.pos[j], GA = L.groups[A.g], GB = L.groups[B.g], cps;
    if (A.g === B.g) cps = [[A.x, A.y], [GA.gx, GA.gy], [B.x, B.y]];
    else cps = [[A.x, A.y], [GA.gx, GA.gy], [CX, CY], [GB.gx, GB.gy], [B.x, B.y]];
    var n = cps.length - 1;
    return cps.map(function (p, k) {
      var t = k / n, sx = A.x + (B.x - A.x) * t, sy = A.y + (B.y - A.y) * t;
      return [BETA * p[0] + (1 - BETA) * sx, BETA * p[1] + (1 - BETA) * sy];
    });
  }

  function bspline(cps, per) {
    var P = [cps[0], cps[0]].concat(cps, [cps[cps.length - 1], cps[cps.length - 1]]), out = [];
    for (var s = 0; s < P.length - 3; s++) {
      for (var q = 0; q < per; q++) {
        var t = q / per, t2 = t * t, t3 = t2 * t;
        var b0 = (-t3 + 3 * t2 - 3 * t + 1) / 6, b1 = (3 * t3 - 6 * t2 + 4) / 6,
            b2 = (-3 * t3 + 3 * t2 + 3 * t + 1) / 6, b3 = t3 / 6;
        out.push([
          b0 * P[s][0] + b1 * P[s + 1][0] + b2 * P[s + 2][0] + b3 * P[s + 3][0],
          b0 * P[s][1] + b1 * P[s + 1][1] + b2 * P[s + 2][1] + b3 * P[s + 3][1]
        ]);
      }
    }
    out.push(cps[cps.length - 1]);
    return out;
  }

  function fitCanvas(cv, box, vb) {
    var r = box.getBoundingClientRect(), dpr = Math.min(global.devicePixelRatio || 1, 2);
    cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr);
    cv.getContext('2d').setTransform(dpr * r.width / vb, 0, 0, dpr * r.height / vb, 0, 0);
    return r;
  }

  function strokePath(ctx, pts) {
    ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
    for (var k = 1; k < pts.length; k++) ctx.lineTo(pts[k][0], pts[k][1]);
    ctx.stroke();
  }

  function groupArcs(L, cx, cy, rad, hidden) {
    var s = '';
    L.groups.forEach(function (g) {
      if (hidden && hidden[g.key]) return;
      var a1 = g.from + 0.004, a2 = g.to - 0.004;
      var x1 = cx + rad * Math.cos(a1), y1 = cy + rad * Math.sin(a1);
      var x2 = cx + rad * Math.cos(a2), y2 = cy + rad * Math.sin(a2);
      s += '<path d="M' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' A' + rad + ',' + rad +
           ' 0 ' + ((a2 - a1) > Math.PI ? 1 : 0) + ' 1 ' + x2.toFixed(1) + ',' + y2.toFixed(1) +
           '" fill="none" stroke="' + g.color + '" stroke-width="2.5" opacity=".82"/>';
    });
    return s;
  }

  function radialLabel(txt, ang, cx, cy, rad, cls, extra) {
    var d = ang * 180 / Math.PI, flip = (d > 90 || d < -90);
    var lx = cx + rad * Math.cos(ang), ly = cy + rad * Math.sin(ang);
    return '<text class="' + cls + '" x="' + lx.toFixed(1) + '" y="' + ly.toFixed(1) +
           '" dominant-baseline="middle" text-anchor="' + (flip ? 'end' : 'start') +
           '" transform="rotate(' + (flip ? d + 180 : d).toFixed(2) + ' ' + lx.toFixed(1) + ' ' + ly.toFixed(1) + ')"' +
           (extra || '') + '>' + esc(txt) + '</text>';
  }

  /* ============================ ANELLO COMPLETO ======================== */
  function ring(root, M) {
    var box = root.querySelector('[data-heb-box]');
    var cv = root.querySelector('canvas'), ctx = cv.getContext('2d');
    var ov = root.querySelector('svg');
    var tip = root.querySelector('[data-heb-tip]');
    var mode = 'type', onlySig = true, hover = -1, query = '';
    var hidden = {}, L = null;

    function edges() {
      return M.E.filter(function (e, i) {
        if (onlySig && !M.sig[i]) return false;
        return !hidden[L.keyOf(e[0])] && !hidden[L.keyOf(e[1])];
      });
    }

    function drawEdges() {
      ctx.clearRect(0, 0, VB, VB);
      var list = edges(), dim = hover >= 0;
      ctx.lineCap = 'round';
      for (var pass = 0; pass < 2; pass++) {
        for (var m = 0; m < list.length; m++) {
          var e = list[m], on = !dim || e[0] === hover || e[1] === hover;
          if ((pass === 0) === on) continue;
          var pts = bspline(controlPoints(L, e[0], e[1]), 14);
          if (on && dim) {
            var other = e[0] === hover ? e[1] : e[0];
            ctx.strokeStyle = L.groups[L.pos[other].g].color;
            ctx.globalAlpha = 0.95; ctx.lineWidth = 1.5 + (e[2] - 1) * 0.7;
          } else if (dim) {
            ctx.strokeStyle = cssv('--heb-edge'); ctx.globalAlpha = 0.05; ctx.lineWidth = 1;
          } else {
            ctx.strokeStyle = L.groups[L.pos[e[0]].g].color;
            ctx.globalAlpha = Math.min(0.5, 0.14 + (e[2] - 1) * 0.16);
            ctx.lineWidth = 1 + (e[2] - 1) * 0.6;
          }
          strokePath(ctx, pts);
        }
      }
      ctx.globalAlpha = 1;
    }

    function drawNodes() {
      var list = edges(), nbr = {};
      if (hover >= 0) list.forEach(function (e) {
        if (e[0] === hover) nbr[e[1]] = 1; if (e[1] === hover) nbr[e[0]] = 1;
      });
      var q = query.trim().toLowerCase(), s = groupArcs(L, CX, CY, R + 4, hidden);
      M.N.forEach(function (n, i) {
        if (hidden[L.keyOf(i)]) return;
        var p = L.pos[i], g = L.groups[p.g];
        var match = q && n.n.toLowerCase().indexOf(q) >= 0;
        var cls = hover >= 0 ? ((i === hover || nbr[i]) ? 'on' : 'off') : (q ? (match ? 'on' : 'off') : '');
        var rad = 2.6 + Math.min(2.4, (n.k - 1) * 0.5) + ((i === hover || match) ? 1.6 : 0);
        s += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="' + rad.toFixed(1) +
             '" fill="' + g.color + '" opacity="' + (cls === 'off' ? 0.25 : 1) + '"/>';
        s += radialLabel(n.n, p.ang, CX, CY, R + 12, cls, ' data-i="' + i + '"');
      });
      ov.innerHTML = s;
    }

    function pick(ev) {
      var r = box.getBoundingClientRect();
      var vx = (ev.clientX - r.left) * VB / r.width, vy = (ev.clientY - r.top) * VB / r.height;
      var dx = vx - CX, dy = vy - CY, dist = Math.hypot(dx, dy);
      if (dist < R * 0.62 || dist > R * 1.42) return -1;
      var a = Math.atan2(dy, dx), best = -1, bd = Infinity;
      for (var i = 0; i < M.N.length; i++) {
        if (hidden[L.keyOf(i)]) continue;
        var d = Math.abs(L.pos[i].ang - a);
        if (d > Math.PI) d = Math.PI * 2 - d;
        if (d < bd) { bd = d; best = i; }
      }
      return bd < 0.05 ? best : -1;
    }

    function setHover(i) {
      if (i === hover) return;
      hover = i; drawEdges(); drawNodes();
      if (i < 0) { tip.classList.remove('is-on'); return; }
      var n = M.N[i], p = L.pos[i], r = box.getBoundingClientRect();
      tip.innerHTML = '<b>' + esc(n.n) + '</b><span>' + esc(TYPE_LABEL[n.t] || n.t) +
        (n.c ? ' · ' + esc(n.c) : '') + '</span><span>' + M.deg[i] + ' legami · ' +
        n.k + (n.k === 1 ? ' pezzo' : ' pezzi') + '</span><span class="heb-tip-go">Apri la pagina →</span>';
      tip.classList.add('is-on');
      tip.style.left = Math.max(4, Math.min(r.width - 230, r.width * p.x / VB - 108)) + 'px';
      tip.style.top = Math.max(4, r.height * p.y / VB - 76) + 'px';
    }

    function stats() {
      var el = root.querySelector('[data-heb-stats]');
      if (!el) return;
      var list = edges(), bound = 3 * M.N.length - 6;
      el.textContent = M.N.length + ' concetti · ' + list.length + ' legami disegnati su ' +
        M.E.length + ' · ' + Math.round(list.length / bound * 100) + '% del tetto di leggibilità (3n−6)';
    }

    function legend() {
      var el = root.querySelector('[data-heb-legend]');
      el.innerHTML = L.groups.map(function (g) {
        return '<button type="button" class="heb-legend-item" aria-pressed="' + (hidden[g.key] ? 'false' : 'true') +
          '" data-k="' + esc(g.key) + '"><span class="heb-swatch" style="background:' + g.color + '"></span>' +
          esc(g.label) + ' <span class="heb-legend-n">' + g.count + '</span></button>';
      }).join('');
      el.querySelectorAll('.heb-legend-item').forEach(function (b) {
        b.addEventListener('click', function () {
          var k = b.getAttribute('data-k');
          hidden[k] = !hidden[k]; render();
        });
      });
    }

    function render() {
      L = buildLayout(M, mode);
      legend(); stats(); fitCanvas(cv, box, VB); drawEdges(); drawNodes();
    }

    root.querySelectorAll('[data-heb-mode]').forEach(function (b) {
      b.addEventListener('click', function () {
        mode = b.getAttribute('data-heb-mode'); hidden = {}; hover = -1;
        root.querySelectorAll('[data-heb-mode]').forEach(function (o) {
          o.setAttribute('aria-pressed', String(o === b));
        });
        render();
      });
    });
    var sigBtn = root.querySelector('[data-heb-sig]');
    if (sigBtn) sigBtn.addEventListener('click', function () {
      onlySig = !onlySig;
      sigBtn.setAttribute('aria-pressed', String(onlySig));
      sigBtn.textContent = onlySig ? 'Solo legami forti' : 'Tutti i legami';
      hover = -1; render();
    });
    var q = root.querySelector('[data-heb-search]');
    if (q) q.addEventListener('input', function () { query = q.value; drawNodes(); });

    var dragging = false;
    box.addEventListener('pointerdown', function (ev) { dragging = true; setHover(pick(ev)); });
    box.addEventListener('pointermove', function (ev) {
      if (ev.pointerType === 'mouse' || dragging) setHover(pick(ev));
    });
    box.addEventListener('pointerup', function () { dragging = false; });
    box.addEventListener('pointercancel', function () { dragging = false; });
    box.addEventListener('pointerleave', function (ev) {
      if (ev.pointerType === 'mouse') setHover(-1);
    });
    box.addEventListener('click', function () {
      if (hover >= 0) global.location.href = '/concetti/' + M.N[hover].s + '/';
    });

    var rt;
    global.addEventListener('resize', function () {
      clearTimeout(rt); rt = setTimeout(function () { fitCanvas(cv, box, VB); drawEdges(); }, 120);
    });
    var mq = global.matchMedia('(prefers-color-scheme: dark)');
    (mq.addEventListener ? mq.addEventListener('change', render) : mq.addListener(render));

    render();

    // /mappa/?focus=slug — arrivo dalla scheda di un concetto: si apre gia'
    // con quel nodo isolato, cosi' il salto dalla vista locale alla globale
    // non perde il segno.
    var fp = null;
    try { fp = new URLSearchParams(global.location.search).get('focus'); } catch (err) {}
    if (fp) {
      for (var f = 0; f < M.N.length; f++) {
        if (M.N[f].s === fp) { setHover(f); break; }
      }
    }
  }

  /* ============================== SCHEDA =============================== */
  function card(root, M, slug) {
    var focus = -1;
    for (var i = 0; i < M.N.length; i++) if (M.N[i].s === slug) { focus = i; break; }
    if (focus < 0) { root.hidden = true; return; }

    var box = root.querySelector('[data-heb-box]');
    var cv = root.querySelector('canvas'), ctx = cv.getContext('2d');
    var ov = root.querySelector('svg');
    var note = root.querySelector('[data-heb-note]');
    var CVB = 480, C = 240, CR = 124, SC = CR / R;
    var L = buildLayout(M, 'type');
    var T = function (p) { return [(p[0] - CX) * SC + C, (p[1] - CY) * SC + C]; };

    function render() {
      L = buildLayout(M, 'type');
      fitCanvas(cv, box, CVB);
      ctx.clearRect(0, 0, CVB, CVB);
      var list = M.E.filter(function (e) { return e[0] === focus || e[1] === focus; });
      ctx.lineCap = 'round';
      list.forEach(function (e) {
        var other = e[0] === focus ? e[1] : e[0];
        ctx.strokeStyle = L.groups[L.pos[other].g].color;
        ctx.globalAlpha = 0.85; ctx.lineWidth = 1.4 + (e[2] - 1) * 0.8;
        strokePath(ctx, bspline(controlPoints(L, e[0], e[1]), 14).map(T));
      });
      ctx.globalAlpha = 1;

      var nbr = {}, nc = 0;
      list.forEach(function (e) { var o = e[0] === focus ? e[1] : e[0]; if (!nbr[o]) { nbr[o] = 1; nc++; } });
      var s = groupArcs(L, C, C, CR + 3, null);
      M.N.forEach(function (n, i) {
        var p = L.pos[i], t = T([p.x, p.y]);
        var isF = i === focus, isN = !!nbr[i];
        s += '<circle cx="' + t[0].toFixed(1) + '" cy="' + t[1].toFixed(1) + '" r="' +
             (isF ? 4.6 : (isN ? 3 : 1.5)) + '" fill="' + L.groups[p.g].color +
             '" opacity="' + (isF || isN ? 1 : 0.28) + '"/>';
        if (isF || (isN && nc <= 26)) {
          var txt = n.n.length > 20 ? n.n.slice(0, 19) + '…' : n.n;
          s += radialLabel(txt, p.ang, C, C, CR + 9, isF ? 'is-focus' : '',
                           isN ? ' data-go="' + esc(n.s) + '"' : '');
        }
      });
      ov.innerHTML = s;
      ov.querySelectorAll('[data-go]').forEach(function (t) {
        t.addEventListener('click', function () {
          global.location.href = '/concetti/' + t.getAttribute('data-go') + '/';
        });
      });

      if (note) {
        var fam = {};
        Object.keys(nbr).forEach(function (i) {
          var g = L.groups[L.pos[+i].g].label; fam[g] = (fam[g] || 0) + 1;
        });
        var top = Object.keys(fam).sort(function (a, b) { return fam[b] - fam[a]; })
                    .map(function (k) { return k + ' (' + fam[k] + ')'; }).join(', ');
        note.textContent = nc
          ? (nc > 26
              ? nc + ' concetti collegati: troppi per etichettarli qui, restano i punti. Sporge verso ' + top + '.'
              : 'Sporge verso ' + top + '.')
          : 'Nessun legame con altri concetti, per ora.';
      }
    }

    var rt;
    global.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(render, 150); });
    var mq = global.matchMedia('(prefers-color-scheme: dark)');
    (mq.addEventListener ? mq.addEventListener('change', render) : mq.addListener(render));
    render();
  }

  /* ============================== BOOT ================================= */
  function mount(sel, kind, slug) {
    var root = document.querySelector(sel);
    if (!root) return;
    fetch('/graph-data.json').then(function (r) { return r.json(); }).then(function (d) {
      var M = makeModel(d);
      root.classList.remove('is-loading');
      if (kind === 'card') card(root, M, slug); else ring(root, M);
    }).catch(function () { root.hidden = true; });
  }

  global.HEB = { mount: mount, TYPE_LABEL: TYPE_LABEL };
})(window);
