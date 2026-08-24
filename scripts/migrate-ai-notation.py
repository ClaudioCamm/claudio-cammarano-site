import os, re, sys, io

ROOT = os.path.expanduser("~/mnt/claudio-cammarano-site/src")

WRITINGS = {
  "2026-03-01-dal-concept-al-deploy.md": ("DL", []),
  "2026-03-09-quando-dario-amodei-ha-detto-no-al-pentagono.md": ("DL", []),
  "2026-03-15-salveremo-le-humanities.md": ("DL", []),
  "2026-04-04-dieci-anni-senza-umberto-eco.md": ("00", []),
  "2026-04-09-il-rumore-a-beirut.md": ("DL", []),
  "2026-04-15-lombra-del-futuro.md": ("DL", ["FM", "TR"]),
  "2026-04-24-cartolina-dal-paese-piu-bello-del-mondo.md": ("DL", ["TR"]),
  "2026-04-30-la-differenza-fra-claude-e-le-mie-gatte.md": ("DL", ["TR"]),
  "2026-05-04-lombra-del-passato.md": ("DL", ["FM", "TR"]),
  "2026-05-20-nessuna-tecnologia-e-innocua.md": ("DL", ["TR"]),
  "2026-06-01-la-macchina-e-la-lotta.md": ("DL", []),
  "2026-06-16-la-dialettica-dell-antilluminismo.md": ("DL", ["TR"]),
  "2026-07-07-linfrastruttura-del-sapere.md": ("DL", []),
  "2026-08-23-la-formula-dellautenticita.md": ("DL", ["FM"]),
}

def apply(path, prose, scope):
    s = io.open(path, encoding="utf8").read()
    if not s.startswith("---"):
        return "NO-FRONTMATTER"
    end = s.index("\n---", 3)
    fm, rest = s[:end], s[end:]
    # rimuove eventuali righe già presenti
    fm = re.sub(r"^ai_(prose|scope):.*\n", "", fm, flags=re.M)
    lines = fm.split("\n")
    out, done = [], False
    for ln in lines:
        out.append(ln)
        if not done and re.match(r"^date:", ln):
            out.append("ai_prose: %s" % ('"00"' if prose == "00" else prose))
            if scope:
                out.append("ai_scope: [%s]" % ", ".join(scope))
            done = True
    if not done:
        return "NO-DATE"
    io.open(path, "w", encoding="utf8").write("\n".join(out) + rest)
    return "ok " + prose + ("·" + "·".join(scope) if scope else "")

report = {}
for fn, (p, sc) in WRITINGS.items():
    report[fn] = apply(os.path.join(ROOT, "writings", fn), p, sc)

for fn in sorted(os.listdir(os.path.join(ROOT, "lab"))):
    if fn.endswith(".md"):
        report["lab/" + fn] = apply(os.path.join(ROOT, "lab", fn), "WR", ["FM"])

nc = 0
for fn in sorted(os.listdir(os.path.join(ROOT, "curated"))):
    if fn.endswith(".md"):
        r = apply(os.path.join(ROOT, "curated", fn), "WR", [])
        if r.startswith("ok"): nc += 1
        else: report["curated/" + fn] = r

bad = {k: v for k, v in report.items() if not v.startswith("ok")}
print("writings:", sum(1 for k,v in report.items() if v.startswith("ok") and not k.startswith("lab/")))
print("lab:", sum(1 for k,v in report.items() if k.startswith("lab/") and v.startswith("ok")))
print("curated:", nc)
print("PROBLEMI:", bad if bad else "nessuno")
