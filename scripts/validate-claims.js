#!/usr/bin/env node
/**
 * Controlla le lessie di src/_data/claims.js prima del build.
 *
 * Fa cadere il build sugli errori di struttura — un riferimento rotto, un
 * codice inventato, un taglio che non torna — perche' una lessia che punta a
 * niente e' peggio di una lessia che manca. Avvisa soltanto sulla lunghezza
 * della citazione, che e' una soglia editoriale e non un fatto.
 *
 * Le sei funzioni si leggono da criteri.json: sono le stesse della meta'
 * editoriale, e se qualcuno ne aggiunge una di nascosto qui, il build lo dice.
 */
const path = require("path");
const claims = require(path.join(__dirname, "..", "src/_data/claims.js"));
const biblio = require(path.join(__dirname, "..", "src/_data/biblio.js"));
const criteri = require(path.join(__dirname, "..", "src/_data/criteri.json"));

const FUNZIONI = Object.keys(criteri);
const D1 = claims.D1 || {};
const RELAZIONI = claims.RELAZIONI || {};
const STANCE = claims.STANCE || [];
const TETTO_PAROLE = 140;

const chiavi = new Set();
biblio.forEach(v => { chiavi.add(v.key); (v.altKeys || []).forEach(k => chiavi.add(k)); });

const ids = new Set(claims.map(l => l.id));
const errori = [];
const avvisi = [];

const parole = s => String(s || "").trim().split(/\s+/).filter(Boolean).length;

claims.forEach((l, i) => {
  const dove = l.id || `lessia #${i + 1}`;
  const err = m => errori.push(`${dove}: ${m}`);

  if (!l.id || !/^[a-z0-9][a-z0-9-]*$/.test(l.id)) err("id mancante o non in forma di slug");
  if (claims.filter(x => x.id === l.id).length > 1) err("id ripetuto");

  if (!l.src) err("src mancante");
  else if (!l.src.startsWith("/") && !chiavi.has(l.src)) err(`src "${l.src}" non e' ne' una chiave di biblio.js ne' un percorso del sito`);

  if (!l.claim || !l.claim.trim()) err("claim vuoto");
  const buchi = (String(l.claim).match(/\[…\]/g) || []).length;
  const tagli = (l.cuts || []).length;
  if (buchi !== tagli) err(`${buchi} […] nel claim ma ${tagli} voci in cuts: i tagli devono tornare`);
  (l.cuts || []).forEach((c, k) => { if (!String(c).trim()) err(`cuts[${k}] vuoto`); });

  if (!FUNZIONI.includes(l.fn)) err(`fn "${l.fn}" non e' una delle sei funzioni di criteri.json`);
  if (!Object.prototype.hasOwnProperty.call(D1, l.d1)) err(`d1 "${l.d1}" non e' un codice attivo`);
  if (!["proposed", "confirmed"].includes(l.d1Status)) err("d1Status dev'essere proposed o confirmed");
  if (!STANCE.includes(l.stance)) err(`stance "${l.stance}" fuori lista`);

  // Una lessia assunta senza locus non e' verificabile: e' una parafrasi con le virgolette.
  if (l.stance === "assumed" && !String(l.locus || "").trim()) err("stance assumed senza locus");

  (l.relates || []).forEach((r, k) => {
    if (!ids.has(r.to)) err(`relates[${k}] punta a "${r.to}", che non esiste`);
    if (r.to === l.id) err(`relates[${k}] punta a se stessa`);
    if (!Object.prototype.hasOwnProperty.call(RELAZIONI, r.how)) err(`relates[${k}].how "${r.how}" fuori vocabolario`);
    if (!String(r.why || "").trim()) err(`relates[${k}] senza why`);
    else if (r.why.length > 160) err(`relates[${k}].why oltre 160 caratteri (${r.why.length})`);
  });

  (l.usedIn || []).forEach((u, k) => { if (!String(u).startsWith("/")) err(`usedIn[${k}] non e' un percorso del sito`); });

  const totale = parole(l.before) + parole(l.claim) + parole(l.after) + (l.cuts || []).reduce((n, c) => n + parole(c), 0);
  if (totale > TETTO_PAROLE) avvisi.push(`${dove}: il ritaglio e' di ${totale} parole, sopra le ${TETTO_PAROLE} della citazione breve`);
});

avvisi.forEach(a => console.warn(`[claims] avviso — ${a}`));

if (errori.length) {
  console.error(`\n[claims] ${errori.length} errori:`);
  errori.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
}

const perFn = {};
const perD1 = {};
claims.forEach(l => {
  perFn[l.fn] = (perFn[l.fn] || 0) + l.weight;
  perD1[l.d1] = (perD1[l.d1] || 0) + l.weight;
});
const dominanti = Object.entries(perD1).sort((a, b) => b[1] - a[1]);
const totale = dominanti.reduce((n, [, p]) => n + p, 0) || 1;
const quota3 = dominanti.slice(0, 3).reduce((n, [, p]) => n + p, 0) / totale;

console.log(`[claims] ${claims.length} lessie verificate — ${Object.keys(perFn).length} funzioni, ${dominanti.length} categorie D1`);
console.log(`[claims] le prime tre D1 coprono il ${Math.round(quota3 * 100)}% del peso` +
  (claims.length < 50 ? "  (sotto le 50 lessie la misura non decide niente)" : ""));
