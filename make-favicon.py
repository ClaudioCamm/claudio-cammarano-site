#!/usr/bin/env python3
"""
Genera i file favicon dal logo sorgente.
Uso: python3 make-favicon.py src/images/favicon-source.png
"""
import sys
from pathlib import Path
from PIL import Image

source = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("src/images/favicon-source.png")

if not source.exists():
    print(f"Errore: file non trovato: {source}")
    sys.exit(1)

img = Image.open(source).convert("RGBA")

# Ritaglia al quadrato centrato se non lo è già
w, h = img.size
if w != h:
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    img = img.crop((left, top, left + side, top + side))

out = Path("src/images")
out.mkdir(parents=True, exist_ok=True)

# favicon.ico (multi-size)
ico_path = Path("src/favicon.ico")
img_16 = img.resize((16, 16), Image.LANCZOS)
img_32 = img.resize((32, 32), Image.LANCZOS)
img_48 = img.resize((48, 48), Image.LANCZOS)
img_32.save(ico_path, format="ICO", sizes=[(16,16),(32,32),(48,48)])
print(f"✓ {ico_path}")

# PNG singoli
for size, name in [(16, "favicon-16.png"), (32, "favicon-32.png"), (180, "apple-touch-icon.png")]:
    resized = img.resize((size, size), Image.LANCZOS)
    p = out / name
    resized.save(p, "PNG")
    print(f"✓ {p}")

print("\nFavicon generati. Ora esegui il build del sito (es. npm run build).")
