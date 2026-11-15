#!/usr/bin/env python3
"""
Readings: dalla libreria Zotero (SOLA LETTURA) ai dati delle schede di lettura
del sito, src/_data/readingsZotero.json. Gira ogni settimana; a mano:

    python3 scripts/readings/sync.py            # Zotero in ~/Zotero
    python3 scripts/readings/sync.py --db PATH  # altra copia

Zotero e' il quaderno e puo' essere in disordine; il sito vede solo OPERE.
Norme di igiene (decise il 15/11/2026):

 1. Una sola scheda per opera. Documenti diversi sono la stessa opera se
    hanno lo stesso ISBN/DOI, o stesso primo autore + titolo normalizzato, o
    se il config lo dice ("same"). La scheda somma tutto: un righello per
    ogni copia annotata. L'opera sta nel gruppo della copia annotata (se no,
    nel primo gruppo dell'ordine del config) e porta "also in" per gli altri.
 2. Le sottolineature si contano una volta: lo stesso passo segnato in due
    copie (es. un'anticipazione e il volume) vale una.
 3. Copia di lettura e voce bibliografica ("copies" nel config): due
    referenti, una scheda; il file prende i metadati della voce.
 4. Metadati insufficienti (titolo, autore, anno) o titoli sporchi: fuori,
    e nel rapporto. Fuori anche i testi di Claudio Cammarano, i PDF senza
    voce, e tutto cio' che ha il tag "private".
 5. Solo rosso (struttura) e giallo (passo chiave) sono pubblici; gli altri
    colori e i commenti alle annotazioni restano privati (salvo tag "public").
    Il testo sottolineato NON entra nei dati (il repo e' pubblico): solo
    pagina e ruolo.
 6. Pagine del libro, non del PDF: se il PDF non ha le etichette giuste, il
    config da' lo scarto per copia ("offsets").
 7. Indirizzi stabili: lo slug si fissa la prima volta e resta legato alla
    chiave Zotero (scripts/readings/slugs.json, solo aggiunte).
 8. Niente sparisce in silenzio: una scheda il cui documento non c'e' piu'
    resta, marcata; una scheda con sottolineature nuove dopo la stesura e'
    marcata "changed".

Il rapporto (stdout o --report) elenca scartati, ritirati, cambiati.
"""
import argparse, hashlib, json, os, re, shutil, sqlite3, sys, tempfile, unicodedata
from datetime import date

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
ROLE = {"#ff6666": "structure", "#ffd400": "key"}
SELF = {"cammarano"}
PUBLIC_TYPES = {"book", "bookSection", "journalArticle", "conferencePaper", "report", "thesis",
                "manuscript", "preprint", "encyclopediaArticle", "magazineArticle", "newspaperArticle",
                "webpage", "blogPost", "document"}


def ascii_(s):
    return unicodedata.normalize("NFKD", s or "").encode("ascii", "ignore").decode()


def slugify(s):
    return re.sub(r"[^a-z0-9]+", "-", ascii_(s).lower()).strip("-")[:60].strip("-")


def norm_title(t):
    t = re.split(r"[:.?]\s", ascii_(t).lower() + " ")[0]
    return re.sub(r"[^a-z0-9]+", " ", t).strip()


def dirty_title(t, authors):
    if re.search(r"<[^>]+>|&[a-z]+;", t):
        return "HTML in the title"
    if re.search(r"\.(pdf|epub|docx?)$", t.strip(), re.I) or (" " not in t.strip() and re.search(r"[_]|\d-|-\d|[a-z][A-Z]", t)):
        return "title looks like a file name"
    names = {ascii_(a["last"]).lower() for a in authors if a["last"]}
    words = set(re.findall(r"[a-z]+", ascii_(t).lower())) - {"and", "et", "al"}
    if names and words and words <= names | set(ascii_(" ".join(a["first"] for a in authors)).lower().split()):
        return "title is made of author names"
    lasts = [a["last"] for a in authors if a["last"]]
    if len(lasts) != len(set(lasts)):
        return "the same author listed twice"
    return ""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--db", default=os.path.expanduser("~/Zotero/zotero.sqlite"))
    ap.add_argument("--config", default=os.path.join(HERE, "readings-config.json"))
    ap.add_argument("--slugs", default=os.path.join(HERE, "slugs.json"))
    ap.add_argument("--cards", default=os.path.join(ROOT, "src", "readings"))
    ap.add_argument("--out", default=os.path.join(ROOT, "src", "_data", "readingsZotero.json"))
    ap.add_argument("--report", default="-")
    a = ap.parse_args()
    cfg = json.load(open(a.config))
    slugs = json.load(open(a.slugs)) if os.path.exists(a.slugs) else {}

    tmp = tempfile.mkdtemp()
    try:
        db = os.path.join(tmp, "z.sqlite")
        shutil.copy2(a.db, db)
        for ext in ("-wal", "-shm"):          # Zotero scrive in WAL
            if os.path.exists(a.db + ext):
                shutil.copy2(a.db + ext, db + ext)
        c = sqlite3.connect(f"file:{db}?mode=ro", uri=True)
        data, report = build(c, cfg, slugs, a.cards)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    json.dump(dict(sorted(slugs.items())), open(a.slugs, "w"), indent=1, ensure_ascii=False)
    os.makedirs(os.path.dirname(a.out), exist_ok=True)
    json.dump(data, open(a.out, "w"), indent=1, ensure_ascii=False)
    txt = render_report(data, report)
    if a.report == "-":
        print(txt)
    else:
        open(a.report, "w").write(txt)


def build(c, cfg, slugs, cards_dir):
    def field(i, f):
        r = c.execute("""select v.value from itemData d join itemDataValues v using(valueID)
            join fields fl using(fieldID) where d.itemID=? and fl.fieldName=?""", (i, f)).fetchone()
        return r[0] if r else ""

    def tags_of(i):
        return [r[0] for r in c.execute("select t.name from itemTags it join tags t using(tagID) where it.itemID=?", (i,))]

    deleted = {r[0] for r in c.execute("select itemID from deletedItems")}
    colls = {cid: (n, p) for cid, n, p in c.execute("select collectionID, collectionName, parentCollectionID from collections")}

    def cpath(cid):
        p = []
        while cid:
            n, cid = colls[cid]
            p.append(n)
        return " / ".join(reversed(p))

    bypath = {cpath(k): k for k in colls}
    keyid = {k: i for i, k in c.execute("select itemID, key from items")}
    offsets = cfg.get("offsets", {})
    report = dict(skipped=[], withdrawn=[], changed=[])

    def annotations(att, copy_key):
        out = []
        off = offsets.get(copy_key, 0)
        for aid, color, page, sidx, text, comment in c.execute(
                """select itemID, color, pageLabel, sortIndex, text, comment
                   from itemAnnotations where parentItemID=? order by sortIndex""", (att,)):
            if aid in deleted:
                continue
            atags = [t.lower() for t in tags_of(aid)]
            role = ROLE.get((color or "").lower())
            if "private" in atags or not role:
                continue
            mod = c.execute("select dateModified from items where itemID=?", (aid,)).fetchone()[0][:10]
            try:
                book_page = str(int(page) - off) if off else (page or "")
            except ValueError:
                book_page = page or ""
            words = " ".join((text or "").split())
            out.append(dict(page=book_page, role=role, tags=[t for t in atags if t not in ("public",)],
                            heading="",  # nessun testo del libro nei dati pubblici
                            comment=(comment or "").strip() if "public" in atags else "",
                            date=mod, h=hashlib.sha1(norm_title(words).encode()).hexdigest()[:12],
                            extract="extract" in atags))
        return out

    def part(i, collection):
        key = c.execute("select key from items where itemID=?", (i,)).fetchone()[0]
        typ = c.execute("select typeName from items join itemTypes using(itemTypeID) where itemID=?", (i,)).fetchone()[0]
        cr_all = [(l or "", f or "", t) for l, f, t in c.execute(
            """select cr.lastName, cr.firstName, ct.creatorType from itemCreators ic join creators cr using(creatorID)
               join creatorTypes ct using(creatorTypeID) where ic.itemID=? order by ic.orderIndex""", (i,))]
        # gli autori; curatori e traduttori solo se autori non ce ne sono
        au = [dict(last=l, first=f) for l, f, t in cr_all if t == "author"] or [dict(last=l, first=f) for l, f, t in cr_all]
        tags = [t.lower() for t in tags_of(i)]
        atts = [r[0] for r in c.execute("select itemID from itemAttachments where parentItemID=?", (i,)) if r[0] not in deleted]
        if typ == "attachment":
            atts = [i]
        anns = [x for att in atts for x in annotations(att, key)]
        year = (field(i, "date") or "")[:4]
        return dict(key=key, type=typ, title=field(i, "title"), authors=au,
                    year=year if year.strip("0") else "", publisher=field(i, "publisher"),
                    isbn=re.sub(r"[^0-9X]", "", field(i, "ISBN").split(" ")[0].upper()), doi=field(i, "DOI").lower(),
                    pages=field(i, "numPages"), tags=tags, reading="reading" in tags, private="private" in tags,
                    collection=collection, annotations=anns)

    copies = {x["copy"]: x["reference"] for x in cfg.get("copies", [])}
    same = {k: grp[0] for grp in cfg.get("same", []) for k in grp}
    order = [g["zotero"] for g in cfg["groups"]]

    # 1. raccogli i documenti delle cartelle scelte
    parts = []
    for g in cfg["groups"]:
        cid = bypath.get(g["zotero"])
        if cid is None:
            report["skipped"].append((g["zotero"], "folder not found in Zotero"))
            continue
        for (i,) in c.execute("select itemID from collectionItems where collectionID=?", (cid,)):
            if i in deleted:
                continue
            p = part(i, g["zotero"])
            if p["key"] in copies and copies[p["key"]] in keyid:
                ref = part(keyid[copies[p["key"]]], g["zotero"])
                p = dict(ref, key=p["key"], annotations=p["annotations"],
                         reading=p["reading"] or ref["reading"], role="copy", reference=ref["key"], collection=g["zotero"])
            elif p["type"] in ("attachment", "note", "annotation"):
                report["skipped"].append((p["title"] or p["key"], "file without a bibliographic record"))
                continue
            else:
                p["role"] = "reference" if p["key"] in copies.values() else "item"
            why = ""
            if p["private"]:
                why = "tagged private"
            elif any(ascii_(x["last"]).lower() in SELF for x in p["authors"]):
                why = "own text (never published as a reading)"
            elif p["type"] not in PUBLIC_TYPES:
                why = f"item type {p['type']}"
            elif not (p["title"] and p["authors"] and p["year"]):
                why = "missing " + ", ".join(k for k, v in (("title", p["title"]), ("author", p["authors"]), ("year", p["year"])) if not v)
            else:
                why = dirty_title(p["title"], p["authors"])
            if why:
                report["skipped"].append((f"{p['title'][:70]} [{p['key']}]", why))
                continue
            parts.append(p)

    # 2. riunisci le parti in opere
    # stessa opera se condividono UNA qualunque di queste chiavi (unione):
    # dichiarazione nel config, voce di riferimento, ISBN, DOI, autore+titolo
    def idents(p):
        ids = []
        if p["key"] in same:
            ids.append("same:" + same[p["key"]])
        if p.get("reference"):
            ids.append("key:" + p["reference"])
        if p["key"] in copies.values():
            ids.append("key:" + p["key"])
        if p["isbn"]:
            ids.append("isbn:" + p["isbn"])
        if p["doi"]:
            ids.append("doi:" + p["doi"])
        ids.append("t:" + ascii_(p["authors"][0]["last"]).lower() + "|" + norm_title(p["title"]))
        return ids

    parent = list(range(len(parts)))
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    first = {}
    for n, p in enumerate(parts):
        for k in idents(p):
            if k in first:
                parent[find(n)] = find(first[k])
            else:
                first[k] = n
    works = {}
    for n, p in enumerate(parts):
        works.setdefault(find(n), []).append(p)

    cards = {}
    if os.path.isdir(cards_dir):
        for root, _, files in os.walk(cards_dir):
            for f in files:
                if f.endswith(".md"):
                    t = open(os.path.join(root, f)).read()
                    fm = dict(re.findall(r"^(\w+):\s*(.+?)\s*$", t.split("---")[1] if t.startswith("---") else "", re.M))
                    if fm.get("zotero") and fm.get("kind", "card") != "extract":
                        cards.setdefault(fm["zotero"].strip('"'), []).append(dict(file=f, **fm))

    out_groups = {g: [] for g in order}
    seen_keys = set()
    for wid, ps in works.items():
        # copia annotata prima; fra le voci, quella con piu' metadati
        ps.sort(key=lambda p: (-len(p["annotations"]), p["role"] == "copy", order.index(p["collection"])))
        meta = next((p for p in ps if p["role"] == "reference"), ps[0])
        anchor = min(ps, key=lambda p: p["key"])["key"]
        anchor = next((slugs_k for slugs_k in (p["key"] for p in ps) if slugs_k in slugs), anchor)
        if anchor not in slugs:
            # autore-anno; se gia' preso, si aggiunge la prima parola piena del titolo
            base = slugify(f"{meta['authors'][0]['last']} {meta['year']}")
            taken = set(slugs.values())
            cand = base
            if cand in taken:
                w1 = next((x for x in norm_title(meta["title"]).split() if x not in ("the", "a", "an", "le", "la", "les", "il", "lo", "der", "die", "das")), "x")
                cand = f"{base}-{slugify(w1)}"
            i = 2
            while cand in taken:
                cand, i = f"{base}-{i}", i + 1
            slugs[anchor] = cand
        slug = slugs[anchor]
        # 2. ogni passo una volta (vince la copia con piu' sottolineature)
        seen_h, rulers = set(), []
        for p in ps:
            mine = [x for x in p["annotations"] if x["h"] not in seen_h]
            seen_h.update(x["h"] for x in p["annotations"])
            if p["annotations"]:
                rulers.append(dict(copy=p["key"], collection=p["collection"], marks=[
                    dict(page=x["page"], role=x["role"], heading=x["heading"], extract=x["extract"]) for x in p["annotations"]],
                    counted=len(mine)))
        n_ann = len(seen_h)
        groups_in = sorted({p["collection"] for p in ps}, key=order.index)
        # l'opera sta dove vive il testo che si legge: la copia annotata, poi la
        # copia di lettura dichiarata, poi il primo gruppo dell'ordine
        home = next((p["collection"] for p in ps if p["annotations"]),
                    next((p["collection"] for p in ps if p["role"] == "copy"), groups_in[0]))
        last_read = max((x["date"] for p in ps for x in p["annotations"]), default="")
        card = next((cards[k][0] for k in [p["key"] for p in ps] + [anchor] if k in cards), None)
        status = "underlined" if n_ann else ("reading" if any(p["reading"] for p in ps) else "on file")
        if card:
            status = card.get("status", "drafted")
            seen_n = int(card.get("underlinings", "0") or 0)
            if n_ann > seen_n:
                report["changed"].append((slug, seen_n, n_ann))
        seen_keys.update(p["key"] for p in ps)
        w = dict(slug=slug, key=anchor, title=meta["title"], title_en=cfg.get("titles_en", {}).get(anchor, ""),
                 authors=meta["authors"], year=meta["year"], publisher=meta["publisher"], isbn=meta["isbn"],
                 doi=meta["doi"], type=meta["type"], status=status, underlinings=n_ann, last_read=last_read,
                 changed=bool(card) and n_ann > int(card.get("underlinings", "0") or 0),
                 group=home, rulers=rulers,
                 # la voce bibliografica di una copia di lettura non si mostra come "also in"
                 also_in=[g for g in groups_in if g != home and any(p["collection"] == g and p["role"] != "reference" for p in ps)],
                 keys=[p["key"] for p in ps])
        out_groups[home].append(w)

    for k, cs in cards.items():
        if k not in seen_keys:
            report["withdrawn"].append((cs[0]["file"], k))

    rank = {"published": 0, "drafted": 1, "underlined": 2, "reading": 3, "on file": 4}
    groups = []
    for g in cfg["groups"]:
        ws = sorted(out_groups[g["zotero"]], key=lambda w: (rank.get(w["status"], 5), ascii_(w["authors"][0]["last"]).lower(), w["year"]))
        groups.append(dict(key=slugify(g["en"]), en=g["en"], blurb=g.get("blurb", ""), works=ws))
    return dict(updated=date.today().isoformat(), groups=groups,
                withdrawn=[k for _, k in report["withdrawn"]]), report


def render_report(data, r):
    n = sum(len(g["works"]) for g in data["groups"])
    L = [f"Readings — {data['updated']}: {n} works in {len(data['groups'])} groups"]
    for g in data["groups"]:
        act = [w for w in g["works"] if w["status"] != "on file"]
        L.append(f"  {g['en']}: {len(g['works'])} works, {len(act)} under way")
    if r["changed"]:
        L.append("\nCards with new underlinings since they were written:")
        L += [f"  {s}: {a} -> {b}" for s, a, b in r["changed"]]
    if r["withdrawn"]:
        L.append("\nCards whose Zotero document is gone (still online):")
        L += [f"  {f} [{k}]" for f, k in r["withdrawn"]]
    if r["skipped"]:
        L.append(f"\nLeft out ({len(r['skipped'])}), to fix in Zotero if wanted:")
        L += [f"  - {t}: {why}" for t, why in r["skipped"]]
    return "\n".join(L)


if __name__ == "__main__":
    main()
