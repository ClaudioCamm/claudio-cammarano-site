---
layout: layouts/catena.njk
title: "La firma e il segnale"
date: 2026-09-28T20:20:00Z
description: "Un decimo delle parole pronunciate a Westminster è scritto da un modello. Dieci schede dell'archivio su che cosa resta del valore di un testo quando scriverlo non costa più nulla, e sul perché riconoscere la macchina dallo stile è una strada chiusa."
tesi: "Quando produrre un testo non costa più nulla, il suo valore si sposta sul segnale costoso che lo accompagna: chi lo firma, e come dichiara il lavoro che c'è dietro."
category: ["Scrittura", "AI"]
series: "La fiducia, I"
serie_totale_prevista: 2
lang: "🇮🇹 Italiano"
ai_prose: WR
tags: [writings]
concepts: ["segnale costoso", "scrittura", "ghostwriting", "capitale semantico", "LLM come attante zero"]
fonti:
  - 2026-09-23-economist-discorsi-scritti-ai-politica
  - 2026-09-24-economist-dont-let-ai-kill-the-author
  - 2026-07-30-economist-ai-writing-detection
  - 2026-06-10-nyt-em-dash-ai
  - 2023-01-25-kirchenbauer-watermark-llm-arxiv
  - 2026-09-19-sorkin-social-reckoning-nyt
  - 2026-06-21-dondi-ai-professionalita-ghostwriting
  - 2026-07-27-millman-kabbalah-ai-nyt
  - 2026-01-15-newton-claude-code-writers-platformer
  - 2026-08-04-stephens-never-write-ai-nyt
controtesi: 2026-08-04-stephens-never-write-ai-nyt
---

A settembre l'*Economist* ha passato i dibattiti di Westminster a uno strumento che riconosce il testo generato, e ha trovato che un decimo delle parole pronunciate ai Comuni è redatto da un modello, contro un valore vicino allo zero nel 2024.{% rif "2026-09-23-economist-discorsi-scritti-ai-politica" %} L'inchiesta si apre con un'ironia che nessuno avrebbe potuto inventare: il deputato laburista che aveva chiesto ai colleghi «chi sta plasmando chi» lo aveva fatto con un intervento interamente artificiale. Il dato non è britannico, perché australiani e canadesi stanno al triplo di quel tasso e un terzo delle proposte di legge del parlamento norvegese contiene testo generato, e la distribuzione dice più del totale: più della metà dei deputati non usa quasi mai l'AI, e chi la usa è prolifico. Il giorno dopo, lo stesso giornale ha tirato le conseguenze in un editoriale che ha il merito raro di dichiarare il proprio interesse.{% rif "2026-09-24-economist-dont-let-ai-kill-the-author" %} I suoi due argomenti non sono quelli che si sentono di solito. Il primo riguarda chi scrive, per il quale la fatica della scrittura è in gran parte fatica del pensiero; il secondo riguarda chi legge, e introduce la categoria che mi interessa: un testo umano richiede più tempo a scriversi che a leggersi, e questa asimmetria garantisce lo sforzo, se non la qualità. È un segnale costoso, e l'intelligenza artificiale ne azzera il costo, con un effetto che si estende anche ai testi in cui non è stata usata, perché basta il sospetto.

{% scheda "2026-09-24-economist-dont-let-ai-kill-the-author" %}

La tesi che ricavo dalle dieci schede di questa catena è che **quando produrre un testo non costa più nulla, il suo valore si sposta sul segnale che lo accompagna**: chi lo firma, e come dichiara il lavoro che c'è dietro. Per ricostruire quel segnale le strade sono due, riconoscere la macchina o farsi riconoscere da chi scrive, e l'archivio documenta abbastanza bene perché la prima sia chiusa.

## Riconoscere la macchina

L'*Economist* ci ha provato con metodo, costruendo un corpus di quasi cinquantaseimila frasi per confrontare la prosa dei modelli con la propria, con quella dei quotidiani americani e con la narrativa dei bestseller dal 1950 in poi.{% rif "2026-07-30-economist-ai-writing-detection" %} Il risultato corregge i luoghi comuni: il trattino lungo non è più un indizio, perché fra i modelli principali soltanto Claude ne usa più degli scrittori umani, e parole come *delve* sono sparite con gli aggiornamenti. I segnali che restano sono polisillabi, nominalizzazioni, poche virgole, e le figure retoriche di repertorio che Orwell avrebbe chiamato dizione pretenziosa. Vauhini Vara, sul *New York Times*, ha scritto una difesa del trattino lungo che diventa, suo malgrado, la prova del problema: prova a rinunciarvi per una sera e le dita tornano da sole alla combinazione di tasti.{% rif "2026-06-10-nyt-em-dash-ai" %} Nella scheda annotavo che i tic che attribuiamo alla macchina sono in buona parte nostri, e che la macchina li ha imparati da noi. Un criterio stilistico dura quanto l'aggiornamento successivo del modello, e colpisce intanto chi scriveva così da prima.

Resta la via tecnica, e il riferimento è il lavoro di Kirchenbauer e dei suoi colleghi del Maryland sulla filigrana: il modello favorisce in modo impercettibile una parte del vocabolario scelta da una funzione pseudocasuale, e un test statistico riconosce la traccia anche in frammenti brevi, con un tasso di falsi positivi prossimo a zero.{% rif "2023-01-25-kirchenbauer-watermark-llm-arxiv" %} La soluzione è elegante e ha un solo difetto, che è decisivo: funziona se chi produce il modello la applica al momento della generazione. A tre anni dalla pubblicazione nessun modello di largo uso l'ha adottata in produzione, e gli strumenti di rilevamento in commercio lavorano su indizi statistici troppo incerti per valere come prova.

{% scheda "2023-01-25-kirchenbauer-watermark-llm-arxiv" %}

## Il valore sta nella provenienza

Se la macchina non si lascia riconoscere, conviene chiedersi che cosa perda un testo quando si scopre che l'ha scritto lei. Aaron Sorkin, intervistato per il *New York Times Magazine*, racconta una cena in cui un quadro astratto gli piaceva molto, finché il padrone di casa non gli ha detto che l'aveva dipinto una macchina: da quel momento ciò che provava è sparito.{% rif "2026-09-19-sorkin-social-reckoning-nyt" %} L'oggetto era lo stesso, era cambiata un'informazione sulla sua provenienza. È il controesempio più netto a chi sostiene che l'autenticità non sia la grandezza che conta, e va preso sul serio prima di discuterlo, perché dice che una parte del valore sta nella storia dell'oggetto e che chi la nasconde sottrae qualcosa al lettore.

{% scheda "2026-09-19-sorkin-social-reckoning-nyt" %}

La provenienza, però, raramente è stata semplice. Ilaria Maria Dondi, dopo aver scritto un pezzo di cui era soddisfatta aiutandosi anche con un modello, si è chiesta se stesse barando, e si è risposta ricordando che gli amministratori delegati pubblicano libri scritti da altri e i politici pronunciano discorsi di speechwriter senza che nessuno li accusi di impostura.{% rif "2026-06-21-dondi-ai-professionalita-ghostwriting" %} L'indignazione, osserva, scatta quando uno strumento economico offre lo stesso sostegno a chi un editor non se l'è mai potuto permettere, e la competenza si misura dalla capacità di difendere ciò che si firma. Lo scrivo sapendo che Irene Media fa anche questo mestiere: il ghostwriting ha sempre funzionato perché la firma dichiarava una responsabilità, e il testo restava di chi era disposto a risponderne.

{% scheda "2026-06-21-dondi-ai-professionalita-ghostwriting" %}

Resta da stabilire che cosa vada dichiarato, e qui due schede aiutano più di un codice deontologico. Debbie Millman, che dirige un master in brand strategy, propone di trattare l'intelligenza artificiale come la tradizione ebraica tratta la Kabbalah, da non studiare prima dei quarant'anni, e distingue fra la mente formata, che può usare la macchina senza farsene sostituire la voce, e quella in formazione, che non sa ancora distinguere le due cose.{% rif "2026-07-27-millman-kabbalah-ai-nyt" %} Casey Newton racconta invece di aver usato Claude Code per costruire strumenti al servizio della propria scrittura, fra cui un archivio semantico delle 818 puntate della sua newsletter interrogabile in linguaggio naturale: la macchina non scrive al suo posto, gli restituisce l'accesso a ciò che ha già scritto.{% rif "2026-01-15-newton-claude-code-writers-platformer" %} Sono usi diversi, che una dichiarazione generica («scritto con l'aiuto dell'AI») confonde. Una dichiarazione utile deve dire quale parte del lavoro è passata da un modello, ed è la ragione per cui ogni pezzo di questo sito, compreso questo, porta una notazione che lo specifica.

{% controtesi "2026-08-04-stephens-never-write-ai-nyt" %}
Bret Stephens, sul *New York Times*, chiede di non scrivere mai con l'intelligenza artificiale, nemmeno le mail di routine, e concede in partenza il punto su cui poggia questa catena: la certificazione dell'uso risolve il problema etico dell'autenticità.{% rif "2026-08-04-stephens-never-write-ai-nyt" %} La sua ragione è un'altra, ed è cognitiva: scrivere sottopone il pensiero allo sforzo dell'articolazione e al controllo della coerenza, e delegarlo equivale a prendere ogni giorno la scala mobile al posto delle scale. La dichiarazione protegge il lettore; la mente di chi scrive resta esposta.
{% endcontrotesi %}

La controtesi coglie un limite reale, e coincide con il primo dei due argomenti dell'*Economist*, che la prima parte di questa catena ha lasciato da parte. Il segnale costoso ricostruito dalla firma e dalla dichiarazione restituisce al lettore un'informazione sulla provenienza, e non dice nulla sulla qualità del pensiero che il testo contiene; per quello resta il giudizio di chi legge, e la responsabilità di chi firma di poter difendere ogni riga. La seconda parte di questa serie sposta la stessa domanda dal testo alla risposta: se il valore di un testo dipende da una provenienza dichiarata, da che cosa dipende il valore di ciò che una macchina afferma?
