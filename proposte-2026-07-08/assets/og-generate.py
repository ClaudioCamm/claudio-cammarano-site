#!/usr/bin/env python3
# Genera le OG card (1200x630) coerenti con l'identita' del sito.
# Uso: python3 og-generate.py  (richiede Pillow e i TTF di Source Serif 4)
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG      = "#f5f5f0"   # --color-bg-alt
PRIMARY = "#1C0E80"   # --color-primary
TEXT    = "#1a1a1a"   # --color-text
LIGHT   = "#666666"   # --color-text-light
MARGIN  = 90

FONT_SEMIBOLD = "SourceSerif4-600.ttf"
FONT_REGULAR  = "SourceSerif4-400.ttf"

POSTS = [
    ("og-linfrastruttura-del-sapere.png",
     "L’infrastruttura del sapere",
     "La condizione epistemica · III"),
    ("og-la-macchina-e-la-lotta.png",
     "La macchina e la lotta",
     None),
    ("og-lombra-del-futuro.png",
     "L’ombra del futuro",
     "Teoria dei giochi e ordine internazionale · I"),
    ("og-lombra-del-passato.png",
     "L’ombra del passato",
     "Teoria dei giochi e ordine internazionale · II"),
    ("og-nessuna-tecnologia-e-innocua.png",
     "Nessuna tecnologia è innocua, e neanche questo sito lo è",
     None),
]

def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=font) <= max_w:
            cur = t
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

def make(fname, title, kicker):
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, 10], fill=PRIMARY)                 # filetto superiore
    max_w = W - 2 * MARGIN
    size = 84
    while size > 44:
        f = ImageFont.truetype(FONT_SEMIBOLD, size)
        lines = wrap(d, title, f, max_w)
        if len(lines) <= 3: break
        size -= 4
    lh = int(size * 1.18)
    block_h = len(lines) * lh
    y = (H - block_h) // 2 - 20
    if kicker:
        fk = ImageFont.truetype(FONT_REGULAR, 30)
        ktxt = kicker.upper()
        # letterspacing manuale leggero
        x = MARGIN
        for ch in ktxt:
            d.text((x, y - 64), ch, font=fk, fill=PRIMARY)
            x += d.textlength(ch, font=fk) + 2
    for ln in lines:
        d.text((MARGIN, y), ln, font=f, fill=TEXT)
        y += lh
    fd = ImageFont.truetype(FONT_REGULAR, 32)
    dom = "claudiocammarano.com"
    x = MARGIN
    for ch in dom:
        d.text((x, H - MARGIN - 20), ch, font=fd, fill=PRIMARY)
        x += d.textlength(ch, font=fd) + 1.5
    img.save(fname, "PNG", optimize=True)
    print(fname, "ok")

for fname, title, kicker in POSTS:
    make(fname, title, kicker)
