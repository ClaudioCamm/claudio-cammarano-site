// La ricerca del sito (13/11): Pagefind per il testo pieno, in italiano e in
// inglese insieme, piu' un livello di parole simili per i refusi e le forme
// vicine. Ogni risultato porta la qualita' della corrispondenza:
//   esatta    la parola cercata compare cosi' com'e'
//   variante  compare una forma con la stessa radice o lo stesso inizio
//   simile    compare una parola vicina per scrittura (un refuso, un accento)
// L'ordine e' il punteggio di Pagefind moltiplicato per la qualita'.
(() => {
  const root = document.getElementById('cerca');
  if (!root) return;
  const input = root.querySelector('#cerca-q');
  const out = root.querySelector('#cerca-out');
  const facets = root.querySelector('#cerca-tipi');
  const sugg = root.querySelector('#cerca-forse');
  const stato = root.querySelector('#cerca-stato');
  const L = root.dataset.lang === 'en' ? 'en' : 'it';
  const T = {
    it: { all: 'Tutto', none: 'Nessun risultato per «%»', n: '% risultati', one: '1 risultato', maybe: 'Anche con parole simili:', more: 'Altri risultati', exact: 'esatta', variant: 'variante', similar: 'simile a «%»', loose: 'corrispondenza debole' },
    en: { all: 'All', none: 'No results for “%”', n: '% results', one: '1 result', maybe: 'Also with similar words:', more: 'More results', exact: 'exact', variant: 'variant', similar: 'close to “%”', loose: 'weak match' }
  }[L];

  // che cosa e' una pagina, dal suo indirizzo
  const TIPI = [
    [/^\/en\/claims\/c\d{3}\//, 'Claim', 'claim'],
    [/^\/en\/claims\/(all\/)?$/, 'Claims', 'claim'],
    [/^\/en\/claims\/[^/]+\//, 'Concept (research)', 'claim'],
    [/^\/lab\//, 'Lab', 'lab'],
    [/^\/en\//, 'English', 'en'],
    [/^\/writings\//, 'Saggi', 'saggi'],
    [/^\/curated\//, 'Curated', 'curated'],
    [/^\/catene\//, 'Catene', 'catene'],
    [/^\/concetti\//, 'Concetti', 'concetti'],
    [/^\/serie\//, 'Serie', 'serie'],
    [/^\/learning\//, 'Learning log', 'learning'],
    [/^\/(tag|temi)\//, 'Argomenti e temi', 'tag'],
  ];
  const tipo = url => { const p = url.replace(/^https?:\/\/[^/]+/, ''); for (const [re, lab, k] of TIPI) if (re.test(p)) return { lab, k }; return { lab: L === 'en' ? 'Page' : 'Pagina', k: 'altro' }; };

  const TIER = { exact: 0, variant: 1, similar: 2, loose: 3 };
  const simileOf = r => r.q === 'similar';
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  let lessico = null, gen = 0, filtro = 'tutto', ultimi = [];

  // Due istanze di Pagefind, una per lingua. Il pacchetto e' uno, ma ogni
  // istanza interroga il suo indice con il suo stemmer: unire l'indice
  // inglese a quello italiano (mergeIndex) faceva passare le parole inglesi
  // per lo stemmer italiano, e "severity" trovava una pagina inglese su 28.
  // Pagefind sceglie la lingua da <html lang> al primo uso: la si imposta per
  // un momento, si inizializza, e si rimette com'era.
  let pfs = null;
  async function istanza(lang, url) {
    const html = document.documentElement, prima = html.lang;
    html.lang = lang;
    try {
      const pf = await import(url);
      await pf.options({ excerptLength: 26, ranking: { termSimilarity: 1.4, pageLength: 0.6, termFrequency: 0.9 } });
      await pf.init();
      return pf;
    } finally { html.lang = prima; }
  }
  async function avvia() {
    if (pfs) return pfs;
    pfs = (async () => [await istanza('it', '/pagefind/pagefind.js'), await istanza('en', '/pagefind/pagefind.js?en')])();
    return pfs;
  }
  async function caricaLessico() {
    if (lessico) return lessico;
    try { lessico = Object.entries(await (await fetch('/pagefind-lessico.json')).json()); } catch (e) { lessico = []; }
    return lessico;
  }
  avvia(); // si prepara mentre il lettore scrive
  input.addEventListener('focus', caricaLessico, { once: true });

  // distanza di Damerau-Levenshtein con tetto: oltre il tetto non interessa
  function dist(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      let best = Infinity;
      for (let j = 1; j <= b.length; j++) {
        const c = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
        best = Math.min(best, d[i][j]);
      }
      if (best > max) return max + 1;
    }
    return d[a.length][b.length];
  }
  // le parole del sito vicine a una parola cercata, con la loro somiglianza
  // Se la parola cercata e' nel sito, si accettano solo le sue forme vicine
  // (stessa radice: certezza/certezze, severity/severita); se non c'e', e' con
  // ogni probabilita' un refuso, e si allarga a ogni parola a una o due lettere.
  function vicine(t) {
    if (t.length < 4 || !lessico) return [];
    const nota = (lessico.find(([w]) => w === t) || [, 0])[1] >= 3;
    const max = nota ? 1 : (t.length <= 5 ? 1 : 2);
    const c = [];
    for (const [w, f] of lessico) {
      if (w === t) continue;
      if (nota && w.slice(0, Math.min(5, t.length - 1)) !== t.slice(0, Math.min(5, t.length - 1))) continue;
      const d = dist(t, w, max);
      if (d <= max) c.push({ w, f, sim: 1 - d / Math.max(t.length, w.length) });
    }
    c.sort((a, b) => b.sim - a.sim || b.f - a.f);
    return c.slice(0, 3);
  }

  // esatta se la parola cercata sta nel titolo o fra le parole evidenziate;
  // variante se Pagefind ha trovato una forma della stessa radice. Ma se la
  // parola cercata non esiste nel sito (un refuso), le sue "varianti" sono
  // per lo piu' rumore: scendono sotto le parole simili.
  const nelSito = t => lessico && lessico.some(([w]) => w === t);
  function qualita(r, termini) {
    const m = (r.excerpt.match(/<mark>([^<]+)<\/mark>/g) || []).map(x => norm(x.replace(/<\/?mark>/g, '')).replace(/[^a-z0-9]/g, ''));
    const tit = norm(r.meta.title || '');
    if (termini.every(t => tit.includes(t)) || m.some(x => termini.includes(x))) return 'exact';
    return termini.every(nelSito) ? 'variant' : 'loose';
  }

  async function cerca(q) {
    const mio = ++gen;
    const termini = norm(q).split(/\s+/).filter(Boolean);
    if (!termini.length) { out.innerHTML = ''; facets.innerHTML = ''; sugg.innerHTML = ''; stato.textContent = ''; return; }
    await caricaLessico();
    const res = new Map();
    const due = await avvia();
    const raccogli = async (query, peso, simile) => {
      const ss = await Promise.all(due.map(pf => pf.search(query)));
      if (mio !== gen) return;
      const tutti = ss.flatMap(s => (s ? s.results.slice(0, simile ? 20 : 50) : []));
      const dati = await Promise.all(tutti.map(r => r.data().then(d => ({ d, score: r.score }))));
      for (const { d, score } of dati) {
        const q2 = simile ? 'similar' : qualita(d, termini);
        const w = { exact: 1, variant: 0.8, similar: peso, loose: 0.3 }[q2];
        // un titolo che e' proprio la cosa cercata viene prima: la pagina del
        // concetto "Severity" prima dei claim che ne parlano
        const tt = norm(d.meta.title || '').replace(/[^a-z0-9 ]/g, ' ').trim();
        const tq = termini.join(' ');
        const nome = tt === tq || tt.startsWith(tq + ' ');
        const voce = { nome, url: d.url, title: d.meta.title || d.url, excerpt: d.excerpt, score: score * w, q: q2, simile, lang: /^\/en\/|^\/lab\//.test(d.url) ? 'en' : 'it' };
        // una pagina trovata in piu' modi tiene la corrispondenza migliore
        const prima = res.get(d.url);
        if (!prima || TIER[voce.q] < TIER[prima.q] || (TIER[voce.q] === TIER[prima.q] && prima.score < voce.score)) res.set(d.url, voce);
      }
    };
    await raccogli(q, 1, null);
    // le parole simili: per ogni termine, le tre piu' vicine nel lessico
    const alternative = [];
    termini.forEach((t, i) => vicine(t).forEach(v => {
      const q2 = termini.slice(); q2[i] = v.w;
      alternative.push({ q: q2.join(' '), sim: v.sim, w: v.w, t });
    }));
    for (const a of alternative) await raccogli(a.q, Math.pow(a.sim, 2) * 0.7, a.w);
    if (mio !== gen) return;
    ultimi = [...res.values()].sort((a, b) => TIER[a.q] - TIER[b.q] || (b.nome && !simileOf(b)) - (a.nome && !simileOf(a)) || b.score - a.score);
    sugg.innerHTML = alternative.length ? `<span>${T.maybe}</span> ` + [...new Set(alternative.map(a => a.w))].map(w => `<button type="button" data-w="${w}">${w}</button>`).join('') : '';
    disegna(q);
  }

  function disegna(q) {
    const conta = {};
    ultimi.forEach(r => { const t = tipo(r.url); conta[t.lab] = (conta[t.lab] || 0) + 1; });
    facets.innerHTML = [`<button type="button" data-f="tutto" class="${filtro === 'tutto' ? 'on' : ''}">${T.all} <b>${ultimi.length}</b></button>`]
      .concat(Object.entries(conta).sort((a, b) => b[1] - a[1]).map(([lab, n]) => `<button type="button" data-f="${lab}" class="${filtro === lab ? 'on' : ''}">${lab} <b>${n}</b></button>`)).join('');
    const vis = ultimi.filter(r => filtro === 'tutto' || tipo(r.url).lab === filtro);
    stato.textContent = !ultimi.length ? T.none.replace('%', q) : (vis.length === 1 ? T.one : T.n.replace('%', vis.length));
    out.innerHTML = vis.slice(0, 40).map(r => {
      const t = tipo(r.url);
      const ql = r.q === 'similar' ? T.similar.replace('%', r.simile) : T[r.q];
      return `<li class="cr-${t.k}"><a href="${r.url}"><span class="cr-k">${t.lab}${r.lang === 'en' && t.k !== 'claim' && t.k !== 'lab' && t.k !== 'en' ? ' · EN' : ''}</span><span class="cr-t">${r.title}</span><span class="cr-x">${r.excerpt}</span><span class="cr-q cr-q-${r.q}">${ql}</span></a></li>`;
    }).join('');
  }

  let timer;
  input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => { filtro = 'tutto'; cerca(input.value.trim()); }, 220); });
  facets.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; filtro = b.dataset.f; disegna(input.value.trim()); });
  sugg.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; input.value = b.dataset.w; filtro = 'tutto'; cerca(b.dataset.w); });
  const p = new URLSearchParams(location.search).get('q');
  if (p) { input.value = p; cerca(p); }
})();
