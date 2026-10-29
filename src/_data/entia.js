/**
 * ENTIA — Epistemic Notation for Texts In Archives.
 *
 * Sorgente unica della specifica: da qui si generano /entia/ (per gli umani),
 * /entia.json (per le macchine) e il deposito. Il file fa `require` dei dati su
 * cui il sito gira davvero — criteri.json, clusters.js, curatedTagAliases.js —
 * cosi' la specifica non può divergere dall'implementazione: se cambia un
 * criterio, cambia il manuale.
 *
 * Due classi di numeri, tenute separate di proposito.
 *   - Le MISURE DESCRITTIVE (cardinalità, distribuzioni, densità) si calcolano
 *     a ogni build: sono aritmetica sul corpus e devono muoversi con lui.
 *   - I RILIEVI (la ricostruibilità dei criteri) sono esperimenti datati, con il
 *     metodo dichiarato: si riportano come sono stati fatti, non si rifanno a
 *     ogni build. Un risultato che cambia senza che nessuno lo rifaccia non è
 *     un risultato.
 */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const criteri = require("./criteri.json");
const clusters = require("./clusters.js");
const alias = require("./curatedTagAliases.js");
const conceptsIndex = require("./conceptsIndex.js");
// Date di curatela: generate da scripts/curatela.js sulla storia del
// repository e committate, perche' il build non ha la storia.
let curatela = {};
try { curatela = require("./curatela.json"); } catch (e) {}

const ROOT = path.join(__dirname, "..", "..");
const SPEC = "1.1.0";
const RILEVATO = "2026-10-11";

function leggi(dir) {
  const d = path.join(ROOT, "src", dir);
  return fs.readdirSync(d).filter(f => f.endsWith(".md")).map(f => ({
    slug: f.replace(/\.md$/, ""),
    dati: matter(fs.readFileSync(path.join(d, f), "utf8")).data
  }));
}

const writings = leggi("writings");
const curated = leggi("curated");
const indice = typeof conceptsIndex === "function" ? conceptsIndex() : conceptsIndex;
const argomenti = [...new Set(Object.values(clusters).flat())];
const tagUsati = [...new Set(curated.flatMap(c => (c.dati.tags || []).filter(t => t !== "curated")))];

// ---------------------------------------------------------------- gli strati
const strati = [
  {
    nome: "Tag libero",
    // Testo breve per la tavola degli strati in home (29/10).
    breve: "Non afferma nulla e non ha vincoli: è lo spazio libero, quello che non costa niente.",
    quanti: tagUsati.filter(t => !alias[t]).length,
    lega: "niente",
    afferma: "niente",
    nonPuo: "generare una pagina",
    nota: "Semantica spontanea senza conseguenze. È la valvola: perché esiste un posto dove l'impulso non costa nulla, gli Argomenti possono restare pochi."
  },
  {
    nome: "Argomento",
    // Testo breve per la tavola degli strati in home (29/10).
    breve: "Dichiara un raggruppamento, scelto da un elenco chiuso.",
    quanti: argomenti.length,
    lega: "l'appartenenza a clusters.js",
    afferma: "un raggruppamento",
    nonPuo: "avere una nota",
    nota: "Semantica normalizzata. Raggruppa, non afferma: se un termine regge una nota non ovvia, non è un Argomento."
  },
  {
    nome: "Tema",
    // Testo breve per la tavola degli strati in home (29/10).
    breve: "Deriva dagli argomenti e li riunisce in un raggruppamento superiore. Nessun programma può verificarlo.",
    quanti: Object.keys(clusters).length,
    lega: "nulla: si deriva dagli Argomenti",
    afferma: "una posizione",
    nonPuo: "essere assegnato a un pezzo",
    nota: "Connotazione. È lo strato che afferma di più e che nessun programma può verificare: una connotazione verificabile sarebbe una denotazione."
  },
  {
    nome: "Concetto",
    // Testo breve per la tavola degli strati in home (29/10).
    breve: "Afferma qualcosa sul mondo, con una nota e dei legami. Un validatore lo controlla: se fallisce, il sito non si pubblica.",
    quanti: indice.length,
    lega: "un validatore che fa cadere il build",
    afferma: "una proposizione sul mondo",
    nonPuo: "esistere senza una nota e dei legami",
    nota: "Semantica lavorata. È l'unico strato alto sia nell'affermare sia nel lasciarsi controllare: il centro, e tutto il resto esiste per proteggerlo."
  },
  {
    nome: "Geometria",
    // Testo breve per la tavola degli strati in home (29/10).
    breve: "Assegna un peso alle altre etichette con una formula pubblicata attraverso 3 coefficienti, e ne ricava una gerarchia.",
    quanti: 3,
    lega: "una formula pubblicata",
    afferma: "niente sul mondo",
    nonPuo: "essere scelta",
    nota: "Il tasso di cambio: l'unico posto dove un saggio, una scheda e una citazione in catena diventano la stessa unità di misura. Pesi 1,5 / 1 / +0,25."
  }
];

// --------------------------------------------------------------- le funzioni
const ORDINE = ["riferimento-tecnico", "dato-che-corregge", "metodo-di-lavoro",
                "lettura-di-mercato", "strumento-concettuale", "elementi-di-scenario"];

const PROVE = {
  "riferimento-tecnico":
    "Se sparisse questa fonte, l'informazione non esisterebbe altrove in forma primaria?",
  "dato-che-corregge":
    "So nominare la credenza diffusa che questo pezzo smentisce? Se non so dirla, non è questo criterio.",
  "metodo-di-lavoro":
    "Descrive una sequenza di operazioni che potrei adottare domani?",
  "lettura-di-mercato":
    "C'è una struttura economica, con qualcuno che paga e qualcuno che incassa?",
  "strumento-concettuale":
    "Posso applicare questa cornice a un oggetto diverso da quello di cui il pezzo parla?",
  "elementi-di-scenario":
    "Dice dove stanno le cose, senza dare né una cornice né una correzione. Ultima scelta."
};

const usoCriterio = {};
curated.forEach(c => { const k = c.dati.criterio; if (k) usoCriterio[k] = (usoCriterio[k] || 0) + 1; });

const funzioni = ORDINE.filter(k => criteri[k]).map((k, i) => ({
  slug: k,
  label: criteri[k].label,
  descrizione: criteri[k].descrizione,
  estesa: criteri[k].estesa,
  prova: PROVE[k],
  precedenza: i + 1,
  schede: usoCriterio[k] || 0
}));

// ----------------------------------------------------------------- le regole
const regole = [
  { nome: "Referente determinabile",
    testo: "Un termine sale ai Concetti quando il suo referente si può determinare. Lo strumento che lo determina è la nota, non il nome. Se la nota verrebbe una voce di dizionario, il termine resta un Argomento." },
  { nome: "Qualificazione del nome",
    testo: "Il nome di una voce si qualifica solo quando la determinazione non trova un'ancora esterna: Taiwan resta nuda, Taiwan / TSMC porta l'inquadratura editoriale. Sette voci-luogo su otto seguono la regola." },
  { nome: "I paesi stanno nei Concetti",
    testo: "Un paese non è mai un Argomento: quell'informazione vive nel campo concepts come Concetto-paese, dove ha nota, legami e peso sulla carta. L'Argomento di un pezzo sull'Ucraina è Geopolitica." },
  { nome: "Vince il criterio più specifico",
    testo: "Quando due funzioni si applicano entrambe, vince quella più stretta, nell'ordine dichiarato. Strumento concettuale è il più largo e perde ogni volta che se ne applica uno più preciso; elementi di scenario resta ultima scelta." },
  { nome: "Quantita'",
    testo: "Da due a quattro Argomenti per scheda, da tre a cinque Concetti. Sono le quantità che la pratica già rispetta, non soglie imposte." },
  { nome: "Il criterio è datato",
    testo: "Una badge dice che cosa quella lettura ha fatto per questo archivio in quella data. La funzione è relazionale, e le relazioni hanno una data: lo stesso testo può cambiare funzione quando cambia l'archivio." }
];

// ------------------------------------------------------------- la conformità
const conformita = {
  titolo: "Adottare ENTIA",
  licenzaVsUso: "La licenza chiede una cosa sola: citare la fonte. Copiare questa pagina, adattarla, portarla dentro un prodotto a pagamento \u00e8 permesso. Dichiarare di <em>usare ENTIA</em> \u00e8 un'altra cosa, e ha delle condizioni: come accade per i metodi di valutazione delle prove in medicina, dove il manuale \u00e8 libero ma il diritto di scrivere \u00ababbiamo seguito il metodo\u00bb \u00e8 vincolato a requisiti espliciti. La distinzione serve a chi legge: senza di essa, l'etichetta non dice niente.",
  struttura: {
    titolo: "Che cosa si adotta, e che cosa si sostituisce",
    fisso: "<strong>La struttura \u00e8 ENTIA, e non si cambia:</strong> i cinque strati e il loro ordine; le funzioni intese come posizioni in una precedenza (prima si guarda se il pezzo \u00e8 un riferimento tecnico, per ultimo se \u00e8 un elemento di scenario); l'obbligo di esporre il residuo, cio\u00e8 i casi in cui la regola e il giudizio non sono andati d'accordo.",
    locale: "<strong>Il vocabolario e i parametri sono miei, e si sostituiscono:</strong> i temi, gli argomenti, i concetti, i nomi delle sei funzioni, i coefficienti del peso. Un archivio di storia dell'arte avr\u00e0 altri temi e altre funzioni, e peser\u00e0 i pezzi in un altro modo. \u00c8 il senso del plurale nel nome: non si adotta la mia tassonomia, si adotta il modo di costruirne una e di tenerla onesta."
  },
  peso: {
    titolo: "Il peso",
    testo: "La formula che d\u00e0 un peso a ogni pezzo entra nel pacchetto <strong>nella sua forma, non nei suoi numeri</strong>. ENTIA chiede che una funzione di peso esista, sia pubblicata e sia versionata: senza di essa i profili di due archivi non sono confrontabili, e i numeri si possono accordare a cose fatte senza che si veda. Non chiede che i coefficienti siano i miei (un saggio 1,5; una scheda 1; pi\u00f9 0,25 per ogni catena che la cita; i pesi geografici 1, 0,5 e 0,25): quelli dipendono da che cosa un archivio produce.",
    soglia: "Quindi no: cambiare i coefficienti non produce un criterio diverso, produce <strong>un'altra configurazione dello stesso criterio</strong>, che va dichiarata \u2014 come si dichiara una soglia, non come si cambia una prova. Si smette di fare ENTIA quando si cambia il numero degli strati o il loro ordine, quando si trasforma la precedenza fra le funzioni in un calcolo automatico, o quando si smette di pubblicare il residuo."
  },
  premessa: "Quattro condizioni, con una sola idea dietro: la conformit\u00e0 non \u00e8 seguire la regola, \u00e8 rendere visibile dove la regola non ha funzionato.",
  requisiti: [
    "Pubblicare le assegnazioni, pezzo per pezzo, con la data in cui sono state fatte. Senza la data non si vede la deriva.",
    "Pubblicare il profilo: come le funzioni si distribuiscono, e su quale periodo. \u00c8 il numero che rende una copia confrontabile con l'originale.",
    "Dichiarare i disaccordi noti fra la regola e il giudizio, invece di correggerli in silenzio. Sono l'unico punto da cui la notazione pu\u00f2 imparare qualcosa.",
    "Versionare la propria copia, dire da quale versione di ENTIA discende e quali parametri sono stati cambiati."
  ]
};

// ---------------------------------------------------------- portata del modello
const limiti = {
  premessa: "Il modello serve a far <strong>intravedere pattern</strong> dentro un'infrastruttura progettata su pi\u00f9 livelli. Gli strati non sono una classificazione ordinata per comodit\u00e0: sono le condizioni perch\u00e9 qualcosa si possa vedere. Un archivio in cui ogni pezzo porta un solo tag non ha una forma da guardare.",
  voci: [
    {
      titolo: "Il pattern, se emerge, non discende in modo ovvio e necessario dalle premesse.",
      testo: "\u00c8 questo che lo rende informativo. Dove le conclusioni seguono deduttivamente dalle regole non si legge nulla che non fosse gi\u00e0 nelle regole: la notazione restituirebbe l'archivio che le \u00e8 stato dato. Qui le assegnazioni si fanno a mano, una per una, e il disegno si vede dopo \u2014 ENTIA \u00e8 una notazione, non un motore deduttivo."
    },
    {
      titolo: "Quello che si vede vale per questo archivio e per il periodo in cui \u00e8 osservato.",
      testo: "Le quote per funzione stanno su poche decine di casi, e la mappa si ridisegna a ogni pezzo che entra. Sono una forma, non una misura: la pagina dichiara sempre su quanti pezzi un rilievo \u00e8 stato fatto, e il filtro temporale della mappa permette di vedere se quella forma cambia nel tempo."
    }
  ]
};

// ---------------------------------------------------------------- i rilievi
const rilievi = {
  data: RILEVATO,
  schedeAlRilievo: 215,
  metodo: "Ricostruzione dell'etichetta da testata, Argomenti, tipi dei concetti e lessico del perché; classificatore naive Bayes con lisciatura, validazione leave-one-out su 215 schede.",
  baseline: 0.47,
  ricostruibilita: [
    { criterio: "Lettura di mercato", quota: 0.62, su: 24 },
    { criterio: "Elementi di scenario", quota: 0.58, su: 24 },
    { criterio: "Riferimento tecnico", quota: 0.56, su: 16 },
    { criterio: "Strumento concettuale", quota: 0.50, su: 101 },
    { criterio: "Metodo di lavoro", quota: 0.36, su: 14 },
    { criterio: "Dato che corregge", quota: 0.28, su: 36 }
  ],
  lettura: "Non è una scala di qualità: misura dove sta il criterio. Lettura di mercato è quasi tutta nel testo, perché i soldi e le istituzioni lasciano tracce materiali. Dato che corregge è quasi tutta fuori: per dire che un pezzo corregge bisogna sapere che cosa si credeva prima, e quella credenza non sta nella scheda.",
  cautela: "I numeri per criterio stanno su 14-36 casi: è una forma, non una misura."
};

// ------------------------------------------------- misure vive sul corpus
function coorti() {
  const d = curated.map(c => c.dati).filter(x => x.date);
  return d.length;
}


// ------------------------------------------------- i dati della mappa a strati
// Stessa sorgente della specifica: la figura non può mostrare un archivio
// diverso da quello che il sito pubblica.
function citazioniPerScheda() {
  const c = {};
  writings.forEach(w => {
    if (!String(w.dati.layout || "").endsWith("catena.njk")) return;
    (w.dati.fonti || []).forEach(s => { c[s] = (c[s] || 0) + 1; });
  });
  return c;
}
const cit = citazioniPerScheda();
const iso = d => { try { return new Date(d).toISOString().slice(0, 10); } catch (e) { return null; } };

const mappaPezzi = [].concat(
  writings.map(w => ({
    s: w.slug,
    t: String(w.dati.title || w.slug).slice(0, 80),
    f: String(w.dati.layout || "").endsWith("catena.njk") ? "Catena" : "Saggio",
    a: (Array.isArray(w.dati.category) ? w.dati.category : [w.dati.category]).filter(Boolean).map(String),
    c: (w.dati.concepts || []).map(String),
    p: 1.5,
    d: iso(w.dati.date),
    dc: curatela[w.slug] || null
  })),
  curated.map(c => ({
    s: c.slug,
    t: String(c.dati.title || c.slug).slice(0, 80),
    f: (criteri[c.dati.criterio] && criteri[c.dati.criterio].label) || "(senza criterio)",
    a: [...new Set((c.dati.tags || []).map(t => alias[t]).filter(Boolean))],
    c: (c.dati.concepts || []).map(String),
    p: 1 + 0.25 * (cit[c.slug] || 0),
    d: iso(c.dati.date),
    dc: curatela[c.slug] || null
  }))
);

// La data di curatela non ha un ripiego: se manca, e' null. Una data della
// fonte spacciata per data di curatela e' esattamente l'errore che il filtro
// temporale serve a evitare.
const senzaCuratela = mappaPezzi.filter(p => !p.dc).length;
if (senzaCuratela) {
  console.warn("[entia] " + senzaCuratela + " pezzi su " + mappaPezzi.length +
    " senza data di curatela. Lancia \"npm run curatela\" e riavvia il server.");
}

// Il rilievo è un esperimento datato, non un'aritmetica: non si rifà a ogni
// build. Ma se il corpus cresce e il rilievo resta fermo, la pagina mentirebbe
// per omissione — quindi calcola da sé il proprio scarto e lo dichiara.
rilievi.schedeOggi = curated.length;
rilievi.scarto = curated.length - rilievi.schedeAlRilievo;
rilievi.scaduto = Math.abs(rilievi.scarto) >= Math.max(10, rilievi.schedeAlRilievo * 0.05);

// Il deposito su Zenodo. Due DOI, e non sono intercambiabili: `doi` e' quello
// CONCETTUALE, non cambia mai e risolve sempre all'ultima versione — e' quello
// da citare e da mettere nelle pagine. `versionDoi` identifica la 1.0.0 e sola.
// Alla versione nuova: «New version» sullo stesso record, si aggiorna solo
// versionDoi, e si rilancia `npm run deposito -- --doi=<versionDoi>`.
const deposito = {
  doi: "10.5281/zenodo.23303451",
  versionDoi: "10.5281/zenodo.23457580",
  url: "https://doi.org/10.5281/zenodo.23303451",
  depositato: "2026-10-19",
  citazione: "Cammarano, C. (2026). ENTIA " + SPEC + " \u2014 Epistemic Notation for Texts In Archives. Zenodo."
};

module.exports = {
  spec: SPEC,
  nome: "ENTIA",
  sciolto: "Epistemic Notation for Texts In Archives",
  radice: "Se le idee sono cose, ENTIA è uno strumento che serve a metterle nel loro cassetto: a classificarle dentro questo ecosistema editoriale. Altre ENTIA sono possibili e pensabili, su altri argomenti, dentro altri mondi mentali. Il plurale rimanda naturalmente a <em>entia non sunt multiplicanda praeter necessitatem</em> — che per un protocollo di selezione è un criterio sano.",
  deposito,
  licenza: { nome: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/deed.it" },
  licenzaNota: "Diversa da quella dei saggi, e deliberatamente: NC-ND su un protocollo impedirebbe l'adozione che lo rende utile, e ND vieterebbe le versioni derivate che sono il segno che un metodo è vivo.",
  strati,
  funzioni,
  regole,
  conformita,
  limiti,
  rilievi,
  mappa: { temi: clusters, pezzi: mappaPezzi },
  corpus: {
    pezzi: writings.length + curated.length,
    saggi: writings.filter(w => !String(w.dati.layout || "").endsWith("catena.njk")).length,
    catene: writings.filter(w => String(w.dati.layout || "").endsWith("catena.njk")).length,
    schede: curated.length,
    datate: coorti(),
    concetti: indice.length,
    argomenti: argomenti.length,
    temi: Object.keys(clusters).length,
    tagLiberi: tagUsati.length,
    tagCanonici: tagUsati.filter(t => alias[t]).length,
    senzaCuratela
  }
};
