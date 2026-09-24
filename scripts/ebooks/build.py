#!/usr/bin/env python3
"""PDF ed ePub dei saggi lunghi (audit 2026, L6).

Per ogni saggio in src/writings con almeno MIN_WORDS parole (15 minuti a
200 parole al minuto, la stessa misura del filtro readingTime) genera
src/downloads/saggi/<slug>.pdf e .epub con Pandoc. Rigenera solo i saggi
il cui sorgente e' cambiato: gli hash stanno in manifest.json.
Uso: python3 scripts/ebooks/build.py [--force]
"""
import hashlib, json, os, re, subprocess, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = ROOT / "src" / "writings"
OUT = ROOT / "src" / "downloads" / "saggi"
MANIFEST = OUT / "manifest.json"
FILTER = ROOT / "scripts" / "ebooks" / "filter.lua"
CSS = ROOT / "scripts" / "ebooks" / "epub.css"
MIN_WORDS = 3000
LICENSE_LABEL = "CC BY-NC-ND 4.0"
LICENSE_URL = "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.it"
AI = json.loads(subprocess.run(
    ["node", "-e", "const a=require('./src/_data/aiNotation.js');"
     "console.log(JSON.stringify(typeof a==='function'?a():a))"],
    cwd=ROOT, capture_output=True, text=True, check=True).stdout)
SITE = "https://claudiocammarano.com"
MAINFONT = os.environ.get("EBOOK_MAINFONT", "Source Serif 4")
TOOLCHAIN = "v2"  # v2: notazione AI e licenza CC BY-NC-ND 4.0 in coda  # cambiare per forzare la rigenerazione di tutto

def split_front(text):
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    return (m.group(1), m.group(2)) if m else ("", text)

def words(body):
    body = re.sub(r"<[^>]+>", " ", body)
    return len(re.findall(r"\S+", body))

def main():
    force = "--force" in sys.argv
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}
    changed = False
    for md in sorted(SRC.glob("*.md")):
        text = md.read_text(encoding="utf-8")
        front, body = split_front(text)
        slug = md.stem
        if words(body) < MIN_WORDS:
            continue
        digest = hashlib.sha256((TOOLCHAIN + text).encode()).hexdigest()
        pdf, epub = OUT / f"{slug}.pdf", OUT / f"{slug}.epub"
        if not force and manifest.get(slug) == digest and pdf.exists() and epub.exists():
            continue
        url = f"{SITE}/writings/{slug}/"
        tm = re.search(r'^title:\s*"?(.*?)"?\s*$', front, re.M)
        dm = re.search(r'^date:\s*(\S+)', front, re.M)
        title = tm.group(1) if tm else slug
        date = dm.group(1) if dm else ""
        mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio",
                "agosto", "settembre", "ottobre", "novembre", "dicembre"]
        dp = re.match(r"(\d{4})-(\d{2})-(\d{2})", date)
        if dp:
            date = f"{int(dp.group(3))} {mesi[int(dp.group(2)) - 1]} {dp.group(1)}"
        tmp = OUT / f".{slug}.md"
        # Le entita' numeriche servono a markdown-it (formule con _ e *);
        # a Pandoc vanno restituiti i caratteri veri.
        body = body.replace("&#95;", "_").replace("&#42;", "*").replace("&#92;", "\\")
        # Certificazione dell'intervento AI, come in coda alle pagine del sito.
        pm = re.search(r'^ai_prose:\s*(\w+)', front, re.M)
        sm = re.search(r'^ai_scope:\s*\[(.*?)\]', front, re.M)
        codes, labels = [], []
        if pm and pm.group(1) in AI["prose"]:
            codes.append(pm.group(1)); labels.append(AI["prose"][pm.group(1)]["label"]["it"])
        for sc in (sm.group(1).split(",") if sm else []):
            sc = sc.strip().strip("'\"")
            if sc in AI["scope"]:
                codes.append(sc); labels.append(AI["scope"][sc]["label"]["it"])
        coda = "\n\n---\n\n"
        if codes:
            coda += (f"**Intervento AI: {'·'.join(codes)}** ({' · '.join(labels)}). "
                     f"Notazione descritta in <{SITE}/notazione/>.")
            if dm and dm.group(1) < AI["activeFrom"]:
                coda += " " + AI["retro"]["note"]["it"]
            coda += "\n\n"
        coda += (f"© Claudio Cammarano. Licenza [{LICENSE_LABEL}]({LICENSE_URL}): "
                 "si può condividere citando l'autore e la fonte, non a fini commerciali "
                 "e senza modifiche.\n\n"
                 f"Versione originale e aggiornata: <{url}>. "
                 "Le parti interattive del saggio sono disponibili solo online.\n")
        tmp.write_text(body + coda, encoding="utf-8")
        common = [
            "pandoc", str(tmp),
            "-f", "markdown+tex_math_single_backslash+tex_math_dollars",
            "--lua-filter", str(FILTER),
            "-M", f"title={title}",
            "-M", "author=Claudio Cammarano",
            "-M", "lang=it-IT",
            "-M", f"date={date}",
            "-M", f"rights=© Claudio Cammarano. {LICENSE_LABEL} ({LICENSE_URL}). {url}",
            "--resource-path", str(ROOT),
        ]
        subprocess.run(common + [
            "-o", str(pdf), "--pdf-engine=xelatex",
            "-V", f"mainfont={MAINFONT}", "-V", "geometry:a4paper,margin=2.6cm",
            "-V", "fontsize=11pt", "-V", "linkcolor=blue", "-V", "urlcolor=blue",
            "-V", "colorlinks=true"], check=True, cwd=ROOT)
        subprocess.run(common + [
            "-o", str(epub), "--mathml", "--css", str(CSS)], check=True, cwd=ROOT)
        tmp.unlink()
        manifest[slug] = digest
        changed = True
        print(f"ok  {slug}")
    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    print("modifiche" if changed else "nessuna modifica")

if __name__ == "__main__":
    main()
