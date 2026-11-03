#!/usr/bin/env python3
"""The Claims Ledger: PDF ed ePub di tutti i claim del lato ricerca.

Il documento non si scrive: si compila da src/_data/claims.js e
claimLayers.js, nell'ordine della mappa (domanda, concetto, claim), con la
stessa testata dei saggi e il verde della ricerca al posto del blu.

I numeri C001, C002... sono permanenti: stanno in ledger-numbers.json, un
claim lo riceve la prima volta che compare e non lo cambia piu', anche se
nella mappa si sposta. Si rigenera solo se i dati sono cambiati (impronta in
src/downloads/ricerca/manifest.json); si tiene solo l'ultima edizione.
Uso: python3 scripts/ebooks/ledger.py [--force]
"""
import datetime, hashlib, json, re, subprocess, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
HERE = ROOT / "scripts" / "ebooks"
OUT = ROOT / "src" / "downloads" / "ricerca"
MANIFEST = OUT / "manifest.json"
NUMBERS = HERE / "ledger-numbers.json"
SLUG = "the-claims-ledger"
SITE = "https://claudiocammarano.com"
PAGE = f"{SITE}/en/claims/"
LICENSE_LABEL = "CC BY-NC-ND 4.0"
LICENSE_URL = "https://creativecommons.org/licenses/by-nc-nd/4.0/"
TOOLCHAIN = "ledger-v2"  # v2: voci a due colonne, come nel mock-up  # cambiare per forzare la rigenerazione

# Le stesse etichette della pagina /en/claims/ (gloss in claims.njk).
GLOSS = {
    "riferimento-tecnico": "technical reference",
    "dato-che-corregge": "corrective datum",
    "metodo-di-lavoro": "working method",
    "strumento-concettuale": "conceptual tool",
    "lettura-di-mercato": "market reading",
    "elementi-di-scenario": "scenario element",
}
ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

DATA = json.loads(subprocess.run(
    ["node", "-e",
     "const c=require('./src/_data/claims.js'),L=require('./src/_data/claimLayers.js'),"
     "E=require('./src/_data/entia.js');"
     "console.log(JSON.stringify({claims:c,concepts:L.CONCEPTS,themes:L.THEMES,"
     "graph:L.graph,entia:{spec:E.spec,doi:E.deposito.doi}}))"],
    cwd=ROOT, capture_output=True, text=True, check=True).stdout)


def md(s):
    """Testo dai dati a markdown: niente che Pandoc possa leggere come sintassi."""
    s = str(s or "").strip()
    return re.sub(r"([\\`*_\[\]<>#|])", r"\\\1", s)


def numbers(order):
    """Numeri permanenti: quelli gia' dati restano, i nuovi prendono il prossimo libero."""
    nums = json.loads(NUMBERS.read_text()) if NUMBERS.exists() else {}
    nxt = max(nums.values(), default=0) + 1
    for cid in order:
        if cid not in nums:
            nums[cid] = nxt
            nxt += 1
    NUMBERS.write_text(json.dumps(nums, indent=2, ensure_ascii=False) + "\n")
    return nums


def map_svg(g, path):
    """La mappa dei concetti, dalla stessa geometria della pagina, in verde."""
    esc = lambda s: str(s).replace("&", "&amp;").replace("<", "&lt;")
    parts = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {g["W"]} {g["height"]}" '
             f'width="{g["W"]}" height="{g["height"]}">',
             '<style>.b{font:700 10px "Archivo";font-stretch:condensed;letter-spacing:1px;fill:#800020}'
             '.a{fill:none;stroke:#b8b8b8;stroke-width:.8}.c{fill:#fff;stroke:#0F6E56;stroke-width:2}'
             '.l{font:13px "Source Serif 4";fill:#1a1a1a}.r{fill:#0F6E56;opacity:.55}'
             '.n{font:11px "Source Serif 4";fill:#666}</style>']
    for b in g["bands"]:
        parts.append(f'<text class="b" x="0" y="{b["y"]}">{esc(b["en"].upper())}</text>')
    for a in g["arcs"]:
        parts.append(f'<path class="a" d="{a["d"]}"/>')
    for n in g["nodes"]:
        parts.append(f'<circle class="c" cx="{g["NX"]}" cy="{n["y"]}" r="{n["r"]}"/>'
                     f'<text class="l" x="78" y="{n["y"] - 1}">{esc(n["en"])}</text>'
                     f'<rect class="r" x="78" y="{n["y"] + 6}" width="{n["bar"]}" height="3"/>'
                     f'<text class="n" x="{g["W"] - 4}" y="{n["y"] - 1}" text-anchor="end">{n["n"]}</text>')
    parts.append("</svg>")
    path.write_text("".join(parts), encoding="utf-8")


def source(c):
    f = c.get("fonte")
    if not f:
        return f"Lab note, <{SITE}{c['src']}>"
    authors = " & ".join(a.split(",")[0].strip() for a in f["author"].split(" and "))
    out = f"{md(authors)} ({f['year']}), *{md(f['title'])}*"
    venue = f.get("booktitle") or f.get("journal") or f.get("publisher")
    if venue:
        out += f", {md(venue)}"
    if f.get("doi"):
        out += f", doi:{md(f['doi'])}"
    return out


def main():
    force = "--force" in sys.argv
    claims = {c["id"]: c for c in DATA["claims"]}
    concepts = {k["key"]: k for k in DATA["concepts"]}
    themes = DATA["themes"]

    # Ordine della mappa: domanda, concetto, claim.
    order = []
    for t in themes:
        for tk in t["concepts"]:
            for cid in concepts[tk["key"]]["claims"]:
                if cid in claims and cid not in order:
                    order.append(cid)
    order += [cid for cid in claims if cid not in order]

    digest = hashlib.sha256((TOOLCHAIN + json.dumps(DATA, sort_keys=True, ensure_ascii=False)
                             + (HERE / "ledger.tex").read_text()).encode()).hexdigest()
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}
    pdf, epub = OUT / f"{SLUG}.pdf", OUT / f"{SLUG}.epub"
    if not force and manifest.get(SLUG, {}).get("digest") == digest and pdf.exists() and epub.exists():
        print("nessuna modifica")
        return

    nums = numbers(order)
    N = lambda cid: f"C{nums[cid]:03d}"
    today = datetime.date.today()
    edition = f"{today.day} {today.strftime('%B')} {today.year}"
    fp = digest[:12]

    svg = OUT / f".{SLUG}-map.svg"
    mappdf = OUT / f".{SLUG}-map.pdf"
    map_svg(DATA["graph"], svg)
    subprocess.run(["rsvg-convert", "-f", "pdf", "-o", str(mappdf), str(svg)], check=True)

    L = []
    # Tavola I: la mappa. Per il PDF vale il .pdf, per l'ePub il .svg (filter.lua scarta l'altro).
    L += ["```{=latex}", r"\clearpage", "```", "", "# The map {.unnumbered}", "",
          "*The same questions as propositions, with the links declared between them. "
          "The bar is weight, the arc is a link; the number counts the claims under each concept.*", "",
          f"![]({mappdf.relative_to(ROOT)}){{height=19cm}} ![]({svg.relative_to(ROOT)}){{width=100%}}", ""]

    given = {}  # un claim sotto due concetti si stampa una volta sola
    for i, t in enumerate(themes):
        L += ["```{=latex}", r"\clearpage", "```", "",
              f"# Part {ROMAN[i]} · {md(t['en'])} {{.unnumbered}}", "",
              f"*{md(t['position'])}*", ""]
        for tk in t["concepts"]:
            k = concepts[tk["key"]]
            ids = [cid for cid in k["claims"] if cid in claims]
            L += [f"## {md(k['en'])} {{.unnumbered}}", "",
                  f"**{md(k['question'])}**", "", md(k["note"]), ""]
            links = [concepts[x]["en"] for x in k.get("links", []) if x in concepts]
            if links:
                L += [f"[Linked to]{{.k}} {md(' · '.join(links))}", ""]
            for cid in ids:
                if cid in given:
                    L += [f"[Also here]{{.k}} [{N(cid)}](#{N(cid).lower()}), given under {md(given[cid])}.", ""]
                    continue
                given[cid] = k["en"]
                c = claims[cid]
                L += [f"::: {{.voce #{N(cid).lower()}}}", ""]
                quote = f"**{md(c['claim'])}**"
                if c.get("before"):
                    quote = f"[{md(c['before'])}]{{.ctx}} " + quote
                if c.get("after"):
                    quote += f" [{md(c['after'])}]{{.ctx}}"
                # il numero sporge nella colonna di sinistra, come nel registro
                L += [f"[{N(cid)}]{{.no}}" + quote, "", f"[{md(c['gist'])}]{{.gist}}", ""]
                fn = GLOSS.get(c.get("fn"), c.get("fn", ""))
                d1 = " ".join(x for x in [c.get("d1", ""), c.get("d1Label", "")] if x)
                if c.get("d1Status") and c["d1Status"] != "confirmed":
                    d1 += f" ({c['d1Status']})"
                meta = [f"[Source]{{.k}} {source(c)}" + (f", {md(c['locus'])}" if c.get("locus") else ""),
                        f"[Marks]{{.k}} {md(fn)} · {md(d1)} · {md(c.get('stance', ''))}"
                        + (" · contested" if c.get("contested") else "")]
                if c.get("names"):
                    meta.insert(1, f"[Names]{{.k}} {md(' · '.join(c['names']))}")
                rel = [f"{r['how']} → [{N(r['to'])}](#{N(r['to']).lower()})"
                       for r in c.get("relates", []) if r["to"] in claims]
                if rel:
                    meta.append("[Relations]{.k} " + " · ".join(rel))
                L += ["\n\n".join(meta), "", ":::", ""]

    # Indice delle fonti.
    L += ["```{=latex}", r"\clearpage", "```", "", "# Sources {.unnumbered}", ""]
    seen = {}
    for cid in order:
        f = claims[cid].get("fonte")
        key = f["key"] if f else "lab"
        seen.setdefault(key, []).append(cid)
    for key, ids in sorted(seen.items(), key=lambda kv: (kv[0] == "lab", kv[0])):
        if key == "lab":
            L += [f"Lab notes on claudiocammarano.com: "
                  + ", ".join(f"[{N(x)}](#{N(x).lower()})" for x in ids) + ".", ""]
            continue
        f = claims[ids[0]]["fonte"]
        line = f"{md(f['author'])} ({f['year']}). *{md(f['title'])}*."
        venue = f.get("booktitle") or f.get("journal") or f.get("publisher")
        if venue:
            line += f" {md(venue)}."
        if f.get("doi"):
            line += f" doi:{md(f['doi'])}."
        L += [line + " " + ", ".join(f"[{N(x)}](#{N(x).lower()})" for x in ids), ""]

    # La firma: da dove viene questo file e come ci si torna.
    e = DATA["entia"]
    L += ["---", "",
          f"**Compiled, not written.** This edition was generated on {edition} from the "
          f"site's data (`src/_data/claims.js`, `claimLayers.js`): {len(claims)} claims, "
          f"{len(concepts)} concepts, {len(themes)} questions. No sentence is added at compile time. "
          f"Data fingerprint: `{fp}`.", "",
          "Numbers are permanent: a claim keeps its number in every edition, and a new claim "
          "takes the next free one. Only the latest edition is kept.", "",
          "Quoted passages belong to their authors and are given with source and locus. "
          f"Notation: ENTIA {e['spec']}, <https://doi.org/{e['doi']}>.", "",
          f"© Claudio Cammarano. Licence [{LICENSE_LABEL}]({LICENSE_URL}) for the apparatus: "
          "share with attribution, not for commercial use, without changes.", "",
          f"Original and current version: <{PAGE}>. The map and the filters are interactive only online.", "",
          f"I also write *The Abstract*, in English, once a month, on the content economy: "
          f"<{SITE}/newsletter/>.", ""]

    tmp = OUT / f".{SLUG}.md"
    tmp.write_text("\n".join(L), encoding="utf-8")
    defs = OUT / f".{SLUG}.tex"
    app = (r"\ccVoce{Edition}{" + edition + r" \textperiodcentered{} " + f"{len(claims)} claims, "
           f"{len(concepts)} concepts, {len(themes)} questions" + "}"
           r"\ccVoce{Notation}{ENTIA " + e["spec"] + r", \nolinkurl{doi.org/" + e["doi"] + "}}"
           r"\ccVoce{Origin}{\nolinkurl{" + PAGE + "}}")
    defs.write_text("\n".join([
        r"\newcommand{\ccSerie}{Research \textperiodcentered{} " + edition + "}",
        r"\newcommand{\ccTitolo}{The Claims Ledger}",
        r"\newcommand{\ccSottotitolo}{Every claim this research programme stands on, uses or has to answer to}",
        r"\newcommand{\ccSommario}{Each one verbatim, with the context it came in, the question it answers "
        r"and the links it keeps with the others. Arranged as the map: question, concept, claim.}",
        r"\newcommand{\ccData}{" + edition + "}",
        r"\newcommand{\ccTitoloBreve}{The Claims Ledger}",
        r"\newcommand{\ccApparato}{" + app + "}",
    ]) + "\n", encoding="utf-8")

    common = ["pandoc", str(tmp), "-f", "markdown", "--lua-filter", str(HERE / "filter.lua"),
              "-M", "title=The Claims Ledger", "-M", "author=Claudio Cammarano", "-M", "lang=en-GB",
              "-M", f"date={edition}",
              "-M", f"rights=© Claudio Cammarano. {LICENSE_LABEL} ({LICENSE_URL}). {PAGE}",
              "--resource-path", str(ROOT)]
    subprocess.run(common + ["-o", str(pdf), "--pdf-engine=xelatex",
                             "-H", str(defs), "-H", str(HERE / "testata.tex"),
                             "-H", str(HERE / "banda.tex"), "-H", str(HERE / "ledger.tex"),
                             "-V", "mainfont=Source Serif 4", "-V", "geometry:a4paper,margin=2.6cm",
                             "-V", "fontsize=11pt", "-V", "colorlinks=true"], check=True, cwd=ROOT)
    subprocess.run(common + ["-o", str(epub), "--css", str(HERE / "ledger-epub.css")],
                   check=True, cwd=ROOT)
    for p in (tmp, defs, svg, mappdf):
        p.unlink()
    pages = None
    try:  # le pagine, per la riga dell'edizione in /en/claims/ (src/_data/ledger.js)
        info = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True).stdout
        pages = int(re.search(r"^Pages:\s+(\d+)", info, re.M).group(1))
    except Exception:
        pass
    manifest[SLUG] = {"digest": digest, "edition": today.isoformat(), "claims": len(claims), "pages": pages}
    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    print(f"ok  {SLUG}  ({len(claims)} claims, {edition})")


if __name__ == "__main__":
    main()
