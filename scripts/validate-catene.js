// Densita' minima delle catene (regola dell'11 ottobre 2026).
//
// Una catena con meno di dieci fonti tende a essere una lista. E' un criterio
// interno, non un divieto: questo controllo AVVISA e non blocca mai il build,
// perche' una soglia editoriale non si fa rispettare dal compilatore e la
// deroga consapevole deve restare possibile senza toccare il codice.
// Guarda solo le catene datate dall'11/10 in poi: le ventisei precedenti
// restano come sono. E il rimedio a una catena magra non e' aggiungere la
// decima fonte per fare numero -- sarebbe una fonte scelta da una quota,
// cioe' il vizio contro cui esistono i sei criteri -- ma aspettare.
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const DA = "2026-10-11";
const MIN = 10;
const dir = path.join(__dirname, "..", "src", "writings");

const magre = [];
fs.readdirSync(dir).filter(f => f.endsWith(".md")).forEach(function(f) {
  const d = matter(fs.readFileSync(path.join(dir, f), "utf8")).data;
  if (!String(d.layout || "").endsWith("catena.njk")) return;
  if (!d.date) return;
  const giorno = new Date(d.date).toISOString().slice(0, 10);
  if (giorno < DA) return;
  const n = (d.fonti || []).length;
  if (n < MIN) magre.push("  " + f + " — " + n + " fonti, ne servono " + MIN);
});

if (magre.length) {
  console.warn("\n[catene] Sotto il criterio di densita' (" + MIN + " fonti):");
  console.warn(magre.join("\n"));
  console.warn("Criterio interno, non un divieto: la deroga e' una scelta, non un errore.\n");
}
