// Dati editoriali del "sistema figurato" in home.
// Le chiavi devono combaciare alla lettera con quelle di clusters.js.
// - specimen: concetti-campione mostrati sotto ogni ramo (unico punto curato
//   a mano; tutto il resto del pannello si aggiorna da solo a ogni build).
// - colorKey: aggancia il ramo alle variabili colore della mappa
//   (--graph-cluster-*), per continuità visiva tra albero e grafo.
// - maxArgomenti: quanti argomenti mostrare per ramo prima dell'ellissi.
module.exports = {
  maxArgomenti: 6,
  rami: {
    "Epistemologia & AI": {
      colorKey: "epi",
      specimen: ["Eco, Umberto", "Floridi, Luciano", "Friston, Karl", "Fricker, Miranda", "Amodei, Dario", "Kahneman, Daniel"]
    },
    "Geopolitica & potere": {
      colorKey: "geo",
      specimen: ["Axelrod, Robert", "Gerasimov, Valery", "shadow of the future", "Tit-for-Tat", "Wack, Pierre"]
    },
    "Editoria & comunicazione": {
      colorKey: "edi",
      specimen: ["Diegoli, Gianluca", "Hayles, Katherine", "Droga, David", "Austin, John L."]
    },
    "Italia & istituzioni": {
      colorKey: "ita",
      specimen: ["Vico, Giambattista", "Melandri, Lea", "Ypi, Lea"]
    },
    "Economia & lavoro": {
      colorKey: "eco",
      specimen: ["Acemoglu, Daron", "Taleb, Nassim Nicholas", "Putnam, Robert"]
    }
  }
};
