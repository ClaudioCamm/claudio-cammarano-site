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
SITE = "https://claudiocammarano.com"
MAINFONT = os.environ.get("EBOOK_MAINFONT", "Source Serif 4")
TOOLCHAIN = "v1"  # cambiare per forzare la rigenerazione di tutto

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
        tmp.write_text(body + f"\n\n---\n\nVersione originale e aggiornata: <{url}>. "
                       "Le parti interattive del saggio sono disponibili solo online.\n", encoding="utf-8")
        common = [
            "pandoc", str(tmp),
            "-f", "markdown+tex_math_single_backslash+tex_math_dollars",
            "--lua-filter", str(FILTER),
            "-M", f"title={title}",
            "-M", "author=Claudio Cammarano",
            "-M", "lang=it-IT",
            "-M", f"date={date}",
            "-M", f"rights=© Claudio Cammarano. Riproduzione consentita citando la fonte: {url}",
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
