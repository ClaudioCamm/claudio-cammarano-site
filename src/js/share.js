// Condividi (audit 2026, L12): pannello di sistema se disponibile, altrimenti
// menu di link. Gestisce tutte le barre della pagina; caricato una volta sola.
(function () {
  if (window.__shareInit) return; window.__shareInit = true;
  function init() {
    document.querySelectorAll(".share-bar").forEach(function (bar) {
      var btn = bar.querySelector(".share-btn"), menu = bar.querySelector(".share-menu");
      var url = bar.getAttribute("data-share-url"), title = bar.getAttribute("data-share-title");
      var touch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
      btn.addEventListener("click", function () {
        if (navigator.share && touch) { navigator.share({ title: title, url: url }).catch(function () {}); return; }
        var open = menu.hidden; menu.hidden = !open; btn.setAttribute("aria-expanded", String(open));
      });
      var copy = bar.querySelector("[data-share-copy]");
      if (copy) copy.addEventListener("click", function () {
        var label = copy.textContent;
        (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(function () {
          copy.textContent = copy.getAttribute("data-label-ok");
          setTimeout(function () { copy.textContent = label; menu.hidden = true; }, 1600);
        }).catch(function () { window.prompt("", url); });
      });
      document.addEventListener("click", function (e) { if (!bar.contains(e.target)) { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); } });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") menu.hidden = true; });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
