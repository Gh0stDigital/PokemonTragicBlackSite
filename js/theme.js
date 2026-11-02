/* theme.js — retro theme cycling (green → amber → crimson)
   The initial theme is applied inline in <head> to avoid a flash of the
   wrong theme; this module wires up the toggle button and persistence. */
(function () {
  "use strict";

  var THEMES = [
    { id: "green", label: "PHOSPHOR" },
    { id: "amber", label: "AMBER" },
    { id: "crimson", label: "CRIMSON" }
  ];
  var STORAGE_KEY = "ptb-theme";

  function indexOfTheme(id) {
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) return i;
    }
    return 0;
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "green";
  }

  function applyTheme(id, button) {
    document.documentElement.setAttribute("data-theme", id);
    try { localStorage.setItem(STORAGE_KEY, id); } catch (e) {}
    if (button) {
      var label = THEMES[indexOfTheme(id)].label;
      var text = button.querySelector(".label");
      if (text) text.textContent = label;
      button.setAttribute("aria-label", "Theme: " + label + ". Activate to change.");
    }
  }

  function init() {
    var button = document.getElementById("theme-toggle");
    if (!button) return;

    // Sync button label with whatever theme is already applied.
    applyTheme(currentTheme(), button);

    button.addEventListener("click", function () {
      var next = THEMES[(indexOfTheme(currentTheme()) + 1) % THEMES.length].id;
      applyTheme(next, button);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
