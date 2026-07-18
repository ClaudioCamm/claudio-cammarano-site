# Aggiornamento skill `pubblica-articolo` — campi criterio/perche/rinvio

Istruzioni: apri la skill da **Impostazioni → Capacità**, sezione **2. CURATED — Link con commento**. Due interventi.

---

## Intervento 1 — Sostituire il template YAML della sezione 2a

Sostituisci il blocco yaml attuale con questo:

```yaml
---
title: ""
external_url: ""
source: ""
date: YYYY-MM-DD
criterio: ""
perche: ""
description: ""
tags: [curated]
concepts: []
---
```

---

## Intervento 2 — Aggiungere questo blocco subito dopo l'elenco dei "Campi obbligatori" della sezione 2a

Copia e incolla integralmente:

```markdown
**Campi del criterio di selezione (raccomandati, non obbligatori):**

- `criterio` — lo slug del perché il pezzo entra in archivio. **Uno solo** (mai doppie
  assegnazioni), scelto dalla lista chiusa qui sotto. La lista vive in
  `src/_data/criteri.json`: valida sempre lo slug contro quel file. Se lo slug non è
  in lista, il badge semplicemente non viene renderizzato — nessun errore di build —
  ma la skill non deve mai produrre slug fuori lista.

  1. `lettura-di-mercato` — mappa la struttura economica di un settore
     (caso tipo: Diegoli sui podcast lunghi)
  2. `riferimento-tecnico` — risorsa fondativa del tema
     (caso tipo: Karpathy, Deep Dive LLM)
  3. `metodo-di-lavoro` — cosa cambia nel processo o nell'organizzazione del lavoro
     (caso tipo: Vogels, two-pizza culture)
  4. `strumento-concettuale` — tesi o categoria da portare su altri terreni
     (caso tipo: Tarchetti, ecologia dei media)
  5. `dato-che-corregge` — evidenza (numero, trend o caso) che smentisce un consenso
     (caso tipo: Economist sulla demenza)
  6. `elementi-di-scenario` — aggiorna il quadro su un fronte che il sito segue:
     segnale, caso, storia esemplare, senza tesi portabile né dato che corregge
     (caso tipo: la sommozzatrice del Nord Stream).
     **Regola d'uso: ultima scelta, mai prima scelta** — si assegna solo se nessun
     altro criterio si applica.

- `perche` — glossa libera opzionale, **una sola frase** tra virgolette doppie, mostrata
  sotto il badge. Non è un secondo riassunto: è la ragione d'archivio condensata.
  Quasi sempre è già dentro la `description` (il passaggio "entra nel sito perché…"):
  estraila e condensala, non inventarla. Registro in prima persona, senza virgolette
  doppie interne.

- `rinvio` — opzionale, path interno del pezzo o della serie con cui questo curated
  dialoga (es. `/curated/2026-06-26-ottaviani-data-journalism-ai-reuters/`).
  Si usa solo quando il dialogo è esplicito nel commento. Il template lo rende come
  "In dialogo con →" risolvendo automaticamente il titolo.

**Regole editoriali:**
- Un solo criterio dominante per pezzo. Se un pezzo ha due perché di natura diversa,
  scegli il dominante; il secondo può vivere nel `rinvio` o nella `description`.
- Nessuna casella "altro": se nessun criterio si applica davvero, il pezzo
  probabilmente non deve entrare in archivio — la lista funge anche da filtro
  in ingresso. Segnalalo a Claudio invece di forzare.
- **La skill valida, non è un requisito.** La pubblicazione manuale resta pienamente
  supportata: un curated scritto a mano senza `criterio` e `perche` rende esattamente
  come prima (fallback totale, nessun build rotto). Questi campi costano al massimo
  due righe di YAML.
```

---

## Nota (non va nella skill)

I sei slug e le etichette visibili sono in `src/_data/criteri.json`. Se in futuro la lista cambia, va aggiornata in due posti: quel file (che governa la resa) e questa sezione della skill (che governa la generazione). Il file dati è la fonte di verità.
