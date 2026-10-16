#!/usr/bin/env node
/**
 * Controlla le claims di src/_data/claims.js prima del build.
 *
 * Fa cadere il build sugli errori di struttura — un riferimento rotto, un
 * codice inventato, un taglio che non torna — perche' un claim che punta a
 * niente e' peggio di un claim che manca. Avvisa soltanto sulla lunghezza
 * della citazione, che e' una soglia editoriale e non un fatto.
 *
 * Le sei funzioni si leggono da criteri.json: sono le stesse della meta'
 * editoriale, e se qualcuno ne aggiunge una di nascosto qui, il build lo dice.
 */
const path = require("path");
const fs = require("fs");
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
  const dove = l.id || `claim #${i + 1}`;
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

  // Un claim assunto senza locus non e' verificabile: e' una parafrasi con le virgolette.
  if (l.stance === "assumed" && !String(l.locus || "").trim()) err("stance assumed senza locus");

  // Mai dall'apparato: l'abstract e' una riscrittura dell'autore, non il suo testo.
  // Il claim deve stare nel testo corrente, dove l'affermazione e' argomentata.
  if (/^\s*(abstract|summary|sommario|keywords|parole chiave|blurb|back cover|quarta)/i.test(String(l.locus || "")))
    err(`locus nell'apparato ("${l.locus}"): serve testo corrente`);

  // La parafrasi non e' un lusso: senza, la pagina chiede al lettore di
  // essere gia' dentro a quella letteratura. E non puo' essere la citazione
  // con altre parole intorno, altrimenti non parafrasa niente.
  const g = String(l.gist || "").trim();
  if (!g) err("manca la parafrasi (gist)");
  else if (g.length < 80) err(`parafrasi troppo corta (${g.length} caratteri): deve dire anche perche' conta`);
  else if (String(l.claim).indexOf(g) > -1) err("la parafrasi e' un pezzo della citazione, non una parafrasi");

  // Un claim che viene dal diario di ricerca deve stare dove dice di stare.
  // Se una nota viene riscritta, il capoverso si sposta e la build lo dice:
  // e' lo stesso controllo che la pagina pretende dalle fonti altrui.
  if (String(l.src || "").startsWith("/lab/")) {
    const nota = path.join(__dirname, "..", "src/lab",
      l.src.replace(/^\/lab\//, "").replace(/\/$/, "") + ".md");
    if (!fs.existsSync(nota)) err(`la nota ${l.src} non esiste`);
    else {
      const par = fs.readFileSync(nota, "utf8").split(/\n---\n/).slice(1).join("\n---\n")
        .trim().split(/\n\s*\n/);
      const n = parseInt(String(l.locus).replace(/[^0-9]/g, ""), 10);
      const ago = l.claim.split("[")[0].replace(/\s+/g, " ").trim().slice(0, 45);
      const dentro = par[n - 1] &&
        par[n - 1].replace(/\*\*/g, "").replace(/\s+/g, " ").indexOf(ago) > -1;
      if (!dentro) err(`locus ${l.locus}: la citazione non e\' li\'. Lancia "node scripts/locus-lab.js"`);
    }
  }

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
// Il profilo D1 dei due sotto-corpus, separati.
//
// Qui prima si stampava la quota dei primi tre codici sul totale, come prova
// della previsione delle "3-4 categorie ricorrenti". Ritirata il 16/10: in un
// corpus di prosa scientifica quella soglia e' soddisfatta dal genere — non ci
// sono interiezioni, l'estetica e' rara, la fenomenologia in prima persona
// quasi assente — quindi la conferma non poteva mancare e il numero non
// distingueva niente. Cio' che puo' sorprendere e' lo SCARTO fra la
// letteratura e il diario: generi vicini, ruoli diversi.
function profilo(set) {
  const m = {};
  set.forEach(l => { m[l.d1] = (m[l.d1] || 0) + 1; });
  const ord = Object.values(m).sort((a, b) => b - a);
  const tot = set.length || 1;
  return { codici: ord.length, n: set.length,
           tre: Math.round(100 * ord.slice(0, 3).reduce((a, v) => a + v, 0) / tot) };
}
const lett = profilo(claims.filter(l => l.fonte));
const diario = profilo(claims.filter(l => !l.fonte));

console.log(`[claims] ${claims.length} claims verificate — ${Object.keys(perFn).length} funzioni, ${Object.keys(perD1).length} categorie D1`);
console.log(`[claims] profilo D1 — letteratura: ${lett.codici} codici su ${lett.n} claim, prime tre ${lett.tre}%` +
  `  ·  diario: ${diario.codici} codici su ${diario.n}, prime tre ${diario.tre}%` +
  (claims.length < 60 ? "\n          (a queste dimensioni una voce vale otto punti: e' una direzione, non un risultato)" : ""));
