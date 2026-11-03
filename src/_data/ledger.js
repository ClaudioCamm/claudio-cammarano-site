// The Claims Ledger: edizione, claim e pagine dell'ultima compilazione,
// letti dal manifest che scripts/ebooks/ledger.py scrive accanto al PDF.
// Cosi' la riga dell'edizione in /en/claims/ non si aggiorna a mano.
const fs = require("fs");
const path = require("path");

module.exports = () => {
  const f = path.join(__dirname, "..", "downloads", "ricerca", "manifest.json");
  if (!fs.existsSync(f)) return null;
  const m = JSON.parse(fs.readFileSync(f, "utf8"))["the-claims-ledger"];
  if (!m) return null;
  return {
    pdf: "/downloads/ricerca/the-claims-ledger.pdf",
    epub: "/downloads/ricerca/the-claims-ledger.epub",
    edition: m.edition,
    claims: m.claims,
    pages: m.pages || null
  };
};
