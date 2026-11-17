"""
Readings: legge la libreria Zotero dalla Web API (sola lettura) e la ricopia
in un database SQLite temporaneo con lo stesso schema minimo che sync.py
interroga. Cosi' le norme di igiene restano in un posto solo (sync.py).

La chiave API non sta mai nel repo: si legge da ZOTERO_API_KEY o da
~/.zotero_key. L'utente da ZOTERO_USER_ID o dal config ("zotero_user").
"""
import json, os, sqlite3, time, urllib.request

ANN_TYPE = {"highlight": 1, "note": 2, "image": 3, "ink": 4, "underline": 5, "text": 6}


def _key():
    k = os.environ.get("ZOTERO_API_KEY")
    if not k and os.path.exists(os.path.expanduser("~/.zotero_key")):
        k = open(os.path.expanduser("~/.zotero_key")).read().strip()
    if not k:
        raise SystemExit("ZOTERO_API_KEY mancante (o ~/.zotero_key)")
    return k


def _get_all(user, path, key):
    out, start = [], 0
    while True:
        sep = "&" if "?" in path else "?"
        url = f"https://api.zotero.org/users/{user}/{path}{sep}limit=100&start={start}"
        for i in range(4):
            try:
                r = urllib.request.Request(url, headers={"Zotero-API-Key": key, "Zotero-API-Version": "3"})
                with urllib.request.urlopen(r, timeout=60) as f:
                    page, total = json.load(f), int(f.headers.get("Total-Results", 0))
                break
            except Exception:
                if i == 3:
                    raise
                time.sleep(2 * (i + 1))
        out += page
        start += 100
        if start >= total:
            return out


def build_db(user, path):
    key = _key()
    items = [x["data"] for x in _get_all(user, "items", key)]
    cols = [x["data"] for x in _get_all(user, "collections", key)]
    c = sqlite3.connect(path)
    c.executescript("""
      create table items(itemID integer primary key, key text, itemTypeID int, dateModified text);
      create table itemTypes(itemTypeID integer primary key, typeName text);
      create table fields(fieldID integer primary key, fieldName text);
      create table itemDataValues(valueID integer primary key, value text);
      create table itemData(itemID int, fieldID int, valueID int);
      create table tags(tagID integer primary key, name text);
      create table itemTags(itemID int, tagID int);
      create table deletedItems(itemID int);
      create table collections(collectionID integer primary key, collectionName text, parentCollectionID int);
      create table collectionItems(collectionID int, itemID int);
      create table creatorTypes(creatorTypeID integer primary key, creatorType text);
      create table creators(creatorID integer primary key, firstName text, lastName text);
      create table itemCreators(itemID int, creatorID int, creatorTypeID int, orderIndex int);
      create table itemAttachments(itemID int, parentItemID int);
      create table itemAnnotations(itemID int, parentItemID int, type int, color text, pageLabel text,
                                   sortIndex text, text text, comment text);
    """)
    ids = {}

    def intern(table, col, val):
        r = c.execute(f"select rowid from {table} where {col}=?", (val,)).fetchone()
        return r[0] if r else c.execute(f"insert into {table}({col}) values(?)", (val,)).lastrowid

    for x in items:
        ids[x["key"]] = c.execute("insert into items(key, itemTypeID, dateModified) values(?,?,?)",
                                  (x["key"], intern("itemTypes", "typeName", x["itemType"]),
                                   x.get("dateModified", "").replace("T", " ").rstrip("Z"))).lastrowid
    colid = {}
    live_cols = [k for k in cols if not k.get("deleted")]
    for k in live_cols:
        colid[k["key"]] = c.execute("insert into collections(collectionName) values(?)", (k["name"],)).lastrowid
    for k in live_cols:
        if k.get("parentCollection") in colid:
            c.execute("update collections set parentCollectionID=? where collectionID=?",
                      (colid[k["parentCollection"]], colid[k["key"]]))
    skip = {"key", "version", "itemType", "creators", "tags", "collections", "relations", "parentItem",
            "deleted", "dateAdded", "dateModified", "note", "annotationType", "annotationColor",
            "annotationPageLabel", "annotationSortIndex", "annotationText", "annotationComment",
            "annotationPosition", "annotationAuthorName", "inPublications"}
    for x in items:
        i = ids[x["key"]]
        if x.get("deleted"):
            c.execute("insert into deletedItems values(?)", (i,))
        for f, v in x.items():
            if f in skip or v in ("", None) or isinstance(v, (dict, list)):
                continue
            c.execute("insert into itemData values(?,?,?)",
                      (i, intern("fields", "fieldName", f), c.execute("insert into itemDataValues(value) values(?)", (str(v),)).lastrowid))
        for t in x.get("tags", []):
            c.execute("insert into itemTags values(?,?)", (i, intern("tags", "name", t["tag"])))
        for ck in x.get("collections", []):
            if ck in colid:
                c.execute("insert into collectionItems values(?,?)", (colid[ck], i))
        for n, cr in enumerate(x.get("creators", [])):
            last = cr.get("lastName", cr.get("name", ""))
            cid = c.execute("insert into creators(firstName, lastName) values(?,?)", (cr.get("firstName", ""), last)).lastrowid
            c.execute("insert into itemCreators values(?,?,?,?)", (i, cid, intern("creatorTypes", "creatorType", cr["creatorType"]), n))
        par = ids.get(x.get("parentItem"))
        if x["itemType"] == "attachment":
            c.execute("insert into itemAttachments values(?,?)", (i, par))
        if x["itemType"] == "annotation":
            c.execute("insert into itemAnnotations values(?,?,?,?,?,?,?,?)",
                      (i, par, ANN_TYPE.get(x.get("annotationType"), 0), x.get("annotationColor"),
                       x.get("annotationPageLabel"), x.get("annotationSortIndex"),
                       x.get("annotationText"), x.get("annotationComment")))
    c.commit()
    return c
