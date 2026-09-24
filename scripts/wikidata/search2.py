#!/usr/bin/env python3
"""Seconda ricerca Wikidata con i nomi corretti (audit L7).
Uso dal Mac: python3 scripts/wikidata/search2.py
Scrive scripts/wikidata/out/candidati2.json; legge anche le proprieta' di
alcuni elementi da verificare (autore, descrizioni)."""
import json, pathlib, sys, time
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from fetch import get, API, OUT

TERMS = {
  "shadow of the future": ["shadow of the future"],
  "dilemma del prigioniero iterato": ["iterated prisoner's dilemma"],
  "two-level games": ["two-level game theory", "Diplomacy and Domestic Politics: The Logic of Two-Level Games"],
  "win-set domestico": ["win-set"],
  "cigni neri": ["black swan theory", "The Black Swan: The Impact of the Highly Improbable"],
  "dottrina Gerasimov": ["Gerasimov doctrine"],
  "controllo riflessivo": ["reflexive control"],
  "allineamento AI": ["AI alignment"],
  "paradigma tecnocratico": ["technocratic paradigm", "Laudato si'"],
  "dilemma di Collingridge": ["Collingridge dilemma"],
  "general purpose technologies": ["general-purpose technology"],
  "iperoggetti": ["hyperobject", "Hyperobjects"],
  "WEIRD": ["WEIRD psychology", "Western, educated, industrialized, rich and democratic", "The WEIRDest People in the World"],
  "disuguaglianze": ["social inequality"],
  "embodied mind": ["embodied cognition", "embodied mind"],
  "watermarking": ["digital watermarking", "text watermarking"],
  "verum ipsum factum": ["verum factum", "verum esse ipsum factum"],
  "ermeneutica del sospetto": ["hermeneutics of suspicion"],
  "incredulità verso le metanarrazioni": ["metanarrative", "The Postmodern Condition"],
  "ragione comunicativa": ["communicative rationality", "The Theory of Communicative Action"],
  "vetocrazia": ["vetocracy"],
  "istituzioni inclusive vs. estrattive": ["extractive institutions", "Why Nations Fail"],
  "fattore di sconto δ": ["discount factor"],
  "trasferimenti monetari diretti": ["cash transfer", "GiveDirectly"],
  "successione aziendale": ["business succession planning"],
  "piccola impresa": ["small business"],
  "memoria storica": ["historical memory", "collective memory"],
  "industria dell'animazione": ["animation industry"],
  "GEO": ["generative engine optimization"],
  "moral deskilling": ["moral deskilling", "deskilling"],
  "cosmotecnica": ["cosmotechnics"],
  "patto sociale": ["social contract"],
  "dati come beni comuni": ["data commons"],
  "polarizzazione cognitiva": ["political polarization"],
  "iperattenzione": ["hyper attention"],
  "news avoidance": ["news avoidance", "selective exposure"],
  "armi autonome": ["lethal autonomous weapon"],
  "atti illocutori": ["illocutionary act"],
  "delega epistemica": ["epistemic dependence", "epistemic trust"],
  "dieta mediatica": ["media diet"],
  "narrazione interattiva": ["interactive storytelling", "interactive narrative"],
  "industrie creative": ["creative industries"],
  "Hunhu/Ubuntu": ["Ubuntu philosophy", "Ubuntu (philosophy)"],
  "neghentropia": ["negentropy"],
  "legge della varietà richiesta": ["law of requisite variety"],
  "capitale simbolico": ["symbolic capital"],
  "The Technium": ["The Technium", "Kevin Kelly"],
  "Stratechery": ["Stratechery", "Ben Thompson"],
  "Digital News Report": ["Reuters Institute Digital News Report", "Reuters Institute for the Study of Journalism"],
  "Netcomm Forum": ["Netcomm"],
  "Frey, Jennifer": ["Jennifer A. Frey"],
  "Brose, Christian": ["Christian Brose"],
  "Ottaviani, Jacopo": ["Jacopo Ottaviani"],
  "Dondi, Ilaria Maria": ["Ilaria Maria Dondi"],
  "drone democracy": ["drone democracy"],
  "educazione estetica": ["On the Aesthetic Education of Man", "aesthetic education"],
  "inemendabilità della realtà": ["Maurizio Ferraris", "new realism"],
  "epistemia": ["Walter Quattrociocchi"]
}
CHECK = ["Q138835467"]

def main():
    res = {}
    for name, terms in TERMS.items():
        seen, lst = set(), []
        for t in terms:
            d = get(API, {"action": "wbsearchentities", "search": t, "language": "en",
                          "uselang": "it", "type": "item", "limit": 5, "format": "json"})
            for x in d.get("search", []):
                if x["id"] not in seen:
                    seen.add(x["id"]); lst.append({"id": x["id"], "label": x.get("label", ""),
                                                   "description": x.get("description", ""), "da": t})
            time.sleep(0.3)
        res[name] = lst[:8]
        print(f"  {name}: {len(lst)}")
    d = get(API, {"action": "wbgetentities", "ids": "|".join(CHECK), "props": "labels|descriptions|claims",
                  "languages": "it|en", "format": "json"})
    res["_verifica"] = d.get("entities", {})
    (OUT / "candidati2.json").write_text(json.dumps(res, ensure_ascii=False, indent=2))
    print("Fatto: scripts/wikidata/out/candidati2.json")

if __name__ == "__main__":
    main()
