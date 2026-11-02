/* main.js — shared site behaviour
   - Highlights the active nav link for in-page anchor sections while scrolling.
   - Keeps explicit page links (guide.html etc.) working normally. */
(function () {
  "use strict";

  function init() {
    var navLinks = Array.prototype.slice.call(
      document.querySelectorAll(".nav a[href]")
    );
    if (!navLinks.length) return;

    // Click: immediately reflect the active state for anchor links.
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (link.getAttribute("href").indexOf("#") === 0) {
          navLinks.forEach(function (l) { l.classList.remove("active"); });
          link.classList.add("active");
        }
      });
    });

    // Scroll spy: highlight the section currently in view.
    var sections = navLinks
      .map(function (link) {
        var href = link.getAttribute("href");
        if (href.indexOf("#") !== 0 || href === "#") return null;
        var el = document.querySelector(href);
        return el ? { link: link, el: el } : null;
      })
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var match = sections.filter(function (s) { return s.el === entry.target; })[0];
          if (!match) return;
          navLinks.forEach(function (l) { l.classList.remove("active"); });
          match.link.classList.add("active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (s) { observer.observe(s.el); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
