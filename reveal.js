// Staggered page-load reveal: the title eases in first, then the rest pop up.
(function () {
  function run() {
    var main = document.getElementById("main");
    if (!main) return;

    var title = main.querySelector(".name-row, section > h2, .post > h2");
    if (title) title.classList.add("reveal-title");

    var others = main.querySelectorAll(
      "#site-header, #intro-text p, .intro-nav, #intro-image, section > p, .list-item, .timeline-entry, .blog-post, .post > .blog-date, .post-body, #footer"
    );

    var base = 0.45; // wait for the title, then start popping
    var step = 0.09; // stagger between each element

    Array.prototype.forEach.call(others, function (el, i) {
      el.style.animationDelay = (base + i * step).toFixed(2) + "s";
      el.classList.add("reveal-pop");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
