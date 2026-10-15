/**
 * Riscrive il `locus` delle lessie che vengono dal diario di ricerca.
 *
 * Le note del Lab sono prosa continua, senza titoletti: un locus che nomina
 * una sezione inesistente non si puo' controllare, e un riferimento che non
 * si controlla e' esattamente cio' che questa pagina non accetta dagli altri.
 * Quindi il locus e' il numero di capoverso, e qui si ricalcola dalla fonte.
 *
 *   node scripts/locus-lab.js            mostra cosa cambierebbe
 *   node scripts/locus-lab.js --scrivi   riscrive src/_data/claims.js
 */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const FILE = path.join(ROOT, "src/_data/claims.js");

function capoversi(url) {
  const f = path.join(ROOT, "src/lab", url.replace(/^\/lab\//, "").replace(/\/$/, "") + ".md");
  if (!fs.existsSync(f)) return null;
  const t = fs.readFileSync(f, "utf8");
  return t.split(/\n---\n/).slice(1).join("\n---\n").trim().split(/\n\s*\n/);
}

// Il confronto ignora il grassetto e si ferma al primo taglio: il resto
// della citazione puo' legittimamente non essere letterale fin qui.
function ago(claim) {
  return claim.split("[")[0].replace(/\s+/g, " ").trim().slice(0, 45);
}

function trova(l) {
  const par = capoversi(l.src);
  if (!par) return { errore: "nota non trovata" };
  const a = ago(l.claim);
  const i = par.findIndex(p => p.replace(/\*\*/g, "").replace(/\s+/g, " ").indexOf(a) > -1);
  return i < 0 ? { errore: "la citazione non compare nella nota" } : { par: i + 1, su: par.length };
}

const lessie = require(FILE).filter(x => x && x.id && String(x.src).startsWith("/lab/"));
let testo = fs.readFileSync(FILE, "utf8");
let cambi = 0, rotte = 0;

lessie.forEach(l => {
  const r = trova(l);
  if (r.errore) { console.error(`  ROTTA  ${l.id}: ${r.errore}`); rotte++; return; }
  const nuovo = "\\u00b6" + r.par;
  const re = new RegExp(`(id: "${l.id}",[\\s\\S]*?locus: ")([^"]*)(")`);
  const m = testo.match(re);
  if (!m) { console.error(`  ROTTA  ${l.id}: locus non trovato nel file`); rotte++; return; }
  if (m[2] === nuovo) return;
  console.log(`  ${l.id}: ${JSON.stringify(m[2])} -> "¶${r.par}" (di ${r.su})`);
  testo = testo.replace(re, `$1${nuovo}$3`);
  cambi++;
});

if (process.argv.includes("--scrivi") && cambi) {
  fs.writeFileSync(FILE, testo, "utf8");
  console.log(`\nscritti ${cambi} locus.`);
} else if (cambi) {
  console.log(`\n${cambi} da scrivere. Rilancia con --scrivi.`);
} else {
  console.log("  tutti i locus sono a posto.");
}
process.exit(rotte ? 1 : 0);
