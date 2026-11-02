/* comments.js — giscus loader (GitHub Discussions powered comments)
   -------------------------------------------------------------------------
   Configuration is read from data-* attributes on the #comments element so
   markup stays declarative. Fill in data-category-id after you complete the
   one-time giscus setup (see README). Until then a friendly fallback shows
   instead of a broken widget. */
(function () {
  "use strict";

  var PLACEHOLDER = "REPLACE_WITH_CATEGORY_ID";
  var GISCUS_THEME = "transparent_dark";

  function loadGiscus(container) {
    var categoryId = container.getAttribute("data-category-id");
    if (!categoryId || categoryId === PLACEHOLDER) {
      renderFallback(container);
      return;
    }

    var s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.async = true;
    s.crossOrigin = "anonymous";
    s.setAttribute("data-repo", container.getAttribute("data-repo"));
    s.setAttribute("data-repo-id", container.getAttribute("data-repo-id"));
    s.setAttribute("data-category", container.getAttribute("data-category") || "General");
    s.setAttribute("data-category-id", categoryId);
    s.setAttribute("data-mapping", container.getAttribute("data-mapping") || "pathname");
    s.setAttribute("data-strict", "0");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "top");
    s.setAttribute("data-theme", GISCUS_THEME);
    s.setAttribute("data-lang", "en");
    container.appendChild(s);
  }

  function renderFallback(container) {
    var p = document.createElement("p");
    p.className = "comments-fallback";
    p.innerHTML =
      "Comments are powered by GitHub Discussions (giscus) and will appear here " +
      "once discussion-based comments are enabled for this project. " +
      "In the meantime, join the conversation on the project's GitHub repository.";
    container.appendChild(p);
  }

  function init() {
    var container = document.getElementById("giscus-container");
    if (container) loadGiscus(container);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
