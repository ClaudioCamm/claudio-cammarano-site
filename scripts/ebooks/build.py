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
BANDA = ROOT / "scripts" / "ebooks" / "banda.tex"
TESTATA = ROOT / "scripts" / "ebooks" / "testata.tex"
CATENA = ROOT / "scripts" / "ebooks" / "catena.tex"
MIN_WORDS = 3000
LICENSE_LABEL = "CC BY-NC-ND 4.0"
LICENSE_URL = "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.it"
AI = json.loads(subprocess.run(
    ["node", "-e", "const a=require('./src/_data/aiNotation.js');"
     "console.log(JSON.stringify(typeof a==='function'?a():a))"],
    cwd=ROOT, capture_output=True, text=True, check=True).stdout)
SITE = "https://claudiocammarano.com"
FRONT = json.loads(subprocess.run(
    ["node", "-e", "const fs=require('fs'),p=require('path'),m=require('gray-matter');"
     "const d=p.join('src','writings'),o={};"
     "fs.readdirSync(d).filter(f=>f.endsWith('.md')).forEach(f=>"
     "{o[f.replace(/\\.md$/,'')]=m(fs.readFileSync(p.join(d,f),'utf8')).data;});"
     "console.log(JSON.stringify(o))"],
    cwd=ROOT, capture_output=True, text=True, check=True).stdout)
CURATED = json.loads(subprocess.run(
    ["node", "-e", "const fs=require('fs'),p=require('path'),m=require('gray-matter');"
     "const cr=require('./src/_data/criteri.json'),d=p.join('src','curated'),o={};"
     "const ms=['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'];"
     "fs.readdirSync(d).filter(f=>f.endsWith('.md')).forEach(f=>{"
     "const s=f.replace(/\\.md$/,''),x=m(fs.readFileSync(p.join(d,f),'utf8')).data,t=new Date(x.date);"
     "o[s]={title:x.title||s,source:x.source||'',external_url:x.external_url||'',"
     "perche:x.perche||'',criterio:(x.criterio&&cr[x.criterio])?cr[x.criterio].label:'',"
     "data:t.getUTCDate()+' '+ms[t.getUTCMonth()]+' '+t.getUTCFullYear(),"
     "mese:ms[t.getUTCMonth()]+' '+t.getUTCFullYear(),iso:t.toISOString().slice(0,10),"
     "url:'https://claudiocammarano.com/curated/'+s+'/'};});"
     "console.log(JSON.stringify(o))"],
    cwd=ROOT, capture_output=True, text=True, check=True).stdout)
CONCETTI = json.loads(subprocess.run(
    ["node", "-e", "const c=require('./src/_data/conceptsIndex.js');"
     "const v=(typeof c==='function')?c():c, m={};"
     "v.forEach(x=>(x.articles||[]).forEach(a=>{"
     "const s=String(a.url||'').replace(/\\/+$/,'').split('/').pop();"
     "if(s){(m[s]=m[s]||[]).push(x.name);}}));"
     "console.log(JSON.stringify(m))"],
    cwd=ROOT, capture_output=True, text=True, check=True).stdout)
MAINFONT = os.environ.get("EBOOK_MAINFONT", "Source Serif 4")
TOOLCHAIN = "v7"  # v7: tipografia "Tavole" (Bodoni, Archivo); v6: PDF ed ePub anche per le catene  # cambiare per forzare la rigenerazione di tutto

ACCENTI = str.maketrans("àáâãäåèéêëìíîïòóôõöùúûü", "aaaaaaeeeeiiiiooooouuuu")

def slugify(s):
    s = s.lower().translate(ACCENTI)
    s = re.sub(r"\s+", "-", s)
    s = re.sub(r"[^a-z0-9-]", "", s)
    s = re.sub(r"-+", "-", s)
    return s.strip("-")

def serie_base(s):
    return re.sub(r",\s+[IVXLCDM]+$", "", s, flags=re.I).strip()

def split_front(text):
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    return (m.group(1), m.group(2)) if m else ("", text)

def words(body):
    body = re.sub(r"<[^>]+>", " ", body)
    return len(re.findall(r"\S+", body))

TEXSPEC = {"\\": r"\textbackslash{}", "{": r"\{", "}": r"\}", "$": r"\$", "&": r"\&",
           "#": r"\#", "^": r"\textasciicircum{}", "_": r"\_", "%": r"\%",
           "~": r"\textasciitilde{}"}

def tex(s):
    """Testo da frontmatter a LaTeX: caratteri speciali protetti, corsivo reso."""
    s = "".join(TEXSPEC.get(ch, ch) for ch in str(s))
    return re.sub(r"\*([^*]+)\*", r"\\emph{\1}", s)

def spezza_titolo(t):
    """Il sottotitolo e' quello che sta dopo il primo punto fermo, se c'e'."""
    m = re.match(r"^(.{4,}?)\.\s+(\S.{9,})$", t)
    return (m.group(1), m.group(2)) if m else (t, "")

def espandi_catena(body, fm):
    """Schede, rimandi e controtesi sono shortcode di Eleventy: fuori dal sito
    nessuno li espande, quindi qui si risolvono leggendo le curated."""
    fonti = [str(x) for x in (fm.get("fonti") or [])]
    def n(slug):
        return fonti.index(slug) + 1 if slug in fonti else 0

    def scheda(m):
        c = CURATED.get(m.group(1))
        if not c:
            return ""
        testa = f"**{n(m.group(1))}** · {c['source']} · {c['data']}"
        if c["criterio"]:
            testa += " · [" + c["criterio"] + "]{.badge}"
        out = ["::: scheda", "", testa, "", f"**{c['title']}**", ""]
        if c["perche"]:
            out += [c["perche"], ""]
        if c["external_url"]:
            out += [f"<{c['external_url']}>", ""]
        return "\n".join(out + [":::", ""])

    def contro(m):
        c = CURATED.get(m.group(1), {})
        return ("::: controtesi\n\n**Controtesi " + str(n(m.group(1))) + " · "
                + c.get("source", "") + "**\n\n" + m.group(2).strip() + "\n\n:::\n")

    body = re.sub(r'\{%\s*rif\s+"([^"]+)"\s*%\}', lambda m: f"^{n(m.group(1))}^", body)
    body = re.sub(r'\{%\s*scheda\s+"([^"]+)"\s*%\}', scheda, body)
    body = re.sub(r'\{%\s*controtesi\s+"([^"]+)"\s*%\}(.*?)\{%\s*endcontrotesi\s*%\}',
                  contro, body, flags=re.S)
    if fm.get("tesi"):
        body = "::: tesi\n\n" + str(fm["tesi"]).strip() + "\n\n:::\n\n" + body.lstrip("\n")
    # Le fonti con i loro indirizzi: su carta non si clicca.
    if fonti:
        voci = ["", "## Nella catena", ""]
        for i, slug in enumerate(fonti, 1):
            c = CURATED.get(slug)
            if not c:
                continue
            riga = f"{i}. {c['source']}, *{c['title']}*, {c['data']}"
            if c["criterio"]:
                riga += ". " + c["criterio"]
            voci.append(riga + ".  ")
            if c["external_url"]:
                voci.append(f"    <{c['external_url']}>  ")
            voci += [f"    Scheda: <{c['url']}>", ""]
        body = body.rstrip() + "\n" + "\n".join(voci) + "\n"
    return body

def main():
    force = "--force" in sys.argv
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}
    changed = False
    for md in sorted(SRC.glob("*.md")):
        text = md.read_text(encoding="utf-8")
        front, body = split_front(text)
        slug = md.stem
        fm = FRONT.get(slug, {})
        e_catena = str(fm.get("layout") or "").endswith("catena.njk")
        if not e_catena and words(body) < MIN_WORDS:
            continue
        impronta = TOOLCHAIN + text
        if e_catena:
            impronta += json.dumps([CURATED.get(str(f), {}) for f in (fm.get("fonti") or [])],
                                   sort_keys=True, ensure_ascii=False)
        digest = hashlib.sha256(impronta.encode()).hexdigest()
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
        if e_catena:
            body = espandi_catena(body, fm)
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
                 "Le parti interattive " + ("della catena" if e_catena else "del saggio")
                 + " sono disponibili solo online.\n")
        # La via del ritorno: questo file viaggia da solo, chi lo riceve
        # inoltrato non e' passato dal sito e deve poterci tornare.
        serm = re.search(r'^series:\s*"?(.*?)"?\s*$', front, re.M)
        if serm:
            base = serie_base(serm.group(1))
            coda += ("\nQuesta catena fa parte" if e_catena else "\nQuesto saggio fa parte")
            coda += (f" della serie *{base}*: "
                     f"<{SITE}/serie/{slugify(base)}/>.\n")
        coda += ("\nScrivo anche *The Abstract*, in inglese, una volta al mese, "
                 f"sull'economia dei contenuti: <{SITE}/newsletter/>. "
                 f"C'è anche il feed: <{SITE}/feed.xml>.\n")
        tmp.write_text(body + coda, encoding="utf-8")
        # Testata: i valori che testata.tex impagina.
        titolo, sottotitolo = spezza_titolo(title)
        sommario = str(fm.get("description") or "").strip()
        cat = fm.get("category") or []
        if isinstance(cat, str):
            cat = [cat]
        argomenti = " \u00b7 ".join(str(c) for c in cat)
        elenco = [str(x) for x in (fm.get("concepts") or [])] or CONCETTI.get(slug, [])
        concetti = " \u00b7 ".join(sorted(elenco, key=lambda x: x.lower()))
        serie = ""
        if fm.get("series"):
            intera = str(fm["series"])
            base_s = serie_base(intera)
            parte = intera[len(base_s):].lstrip(", ").strip()
            tot = fm.get("serie_totale_prevista")
            serie = base_s + (f" \u00b7 {parte}" if parte else "") + (f" di {tot}" if parte and tot else "")
        app = ""
        if e_catena and fm.get("fonti"):
            dd = sorted((CURATED[f] for f in map(str, fm["fonti"]) if f in CURATED),
                        key=lambda c: c["iso"])
            if dd:
                arco = dd[0]["mese"] if dd[0]["mese"] == dd[-1]["mese"] else f"{dd[0]['mese']} \u2013 {dd[-1]['mese']}"
                app += r"\ccVoce{Fonti}{" + tex(f"{len(dd)} schede, {arco}") + "}"
        if argomenti:
            app += r"\ccVoce{Argomenti}{" + tex(argomenti) + "}"
        if concetti:
            app += r"\ccVoce{Concetti}{" + tex(concetti) + "}"
        app += r"\ccVoce{Origine}{\nolinkurl{" + url + "}}"
        defs = OUT / f".{slug}.tex"
        defs.write_text("\n".join([
            r"\newcommand{\ccSerie}{" + tex(serie) + "}",
            r"\newcommand{\ccTitolo}{" + tex(titolo) + "}",
            r"\newcommand{\ccSottotitolo}{" + tex(sottotitolo) + "}",
            r"\newcommand{\ccSommario}{" + tex(sommario) + "}",
            r"\newcommand{\ccData}{" + tex(date) + "}",
            r"\newcommand{\ccTitoloBreve}{" + tex(titolo) + "}",
            r"\newcommand{\ccApparato}{" + app + "}",
        ]) + "\n", encoding="utf-8")
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
        inc = ["-H", str(defs), "-H", str(TESTATA)]
        if e_catena:
            inc += ["-H", str(CATENA)]
        inc += ["-H", str(BANDA)]
        subprocess.run(common + [
            "-o", str(pdf), "--pdf-engine=xelatex"] + inc + [
            "-V", f"mainfont={MAINFONT}", "-V", "geometry:a4paper,margin=2.6cm",
            "-V", "fontsize=11pt", "-V", "linkcolor=blue", "-V", "urlcolor=blue",
            "-V", "colorlinks=true"], check=True, cwd=ROOT)
        subprocess.run(common + [
            "-o", str(epub), "--mathml", "--css", str(CSS)], check=True, cwd=ROOT)
        tmp.unlink()
        defs.unlink()
        manifest[slug] = digest
        changed = True
        print(f"ok  {slug}")
    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    print("modifiche" if changed else "nessuna modifica")

if __name__ == "__main__":
    main()
