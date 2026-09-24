// Controllo del campo geo nell'indice dei concetti (audit 2026, L8).
// Ogni voce deve avere geo: { modo, paesi }. modo e' "diretta", "teorico"
// o "nessuna"; i paesi devono esistere in src/_data/geoPaesi.json.
const c = require("../src/_data/conceptsIndex.js");
const g = require("../src/_data/geoPaesi.json");
const voci = typeof c === "function" ? c() : c;
const noti = new Set([...Object.keys(g.stati), ...Object.keys(g.regioni)]);
const errori = [];
for (const v of voci) {
  if (!v.geo) { errori.push(`${v.name}: manca geo`); continue; }
  const { modo, paesi } = v.geo;
  if (!["diretta", "teorico", "nessuna"].includes(modo)) errori.push(`${v.name}: modo "${modo}" non valido`);
  if (!Array.isArray(paesi)) { errori.push(`${v.name}: paesi non e' una lista`); continue; }
  if (modo === "nessuna" && paesi.length) errori.push(`${v.name}: modo nessuna ma con paesi`);
  if (modo !== "nessuna" && !paesi.length) errori.push(`${v.name}: modo ${modo} senza paesi`);
  for (const p of paesi) if (!noti.has(p)) errori.push(`${v.name}: paese sconosciuto "${p}" (aggiungerlo a geoPaesi.json)`);
}
if (errori.length) {
  console.error("[geo] errori nell'indice:\n  " + errori.join("\n  "));
  process.exit(1);
}
const conta = voci.reduce((a, v) => (a[v.geo.modo] = (a[v.geo.modo] || 0) + 1, a), {});
console.log(`[geo] ✓ ${voci.length} voci con geografia: ${conta.diretta || 0} dirette, ${conta.teorico || 0} dal teorico, ${conta.nessuna || 0} senza.`);
