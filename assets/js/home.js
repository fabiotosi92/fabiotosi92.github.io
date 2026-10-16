/* Homepage behaviour — progressive enhancement only.
   Everything below is optional: with JS disabled the page stays complete. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Portrait compare slider --------------------------------
     Wipes the estimated depth / normal maps over the photo. The photo
     alone is what shows if this never runs. */
  var compare = document.querySelector("[data-compare]");
  var modeBar = document.querySelector("[data-compare-modes]");

  if (compare && compare.querySelector(".compare-range")) {
    var range = compare.querySelector(".compare-range");
    var maps = Array.prototype.slice.call(compare.querySelectorAll(".compare-map"));
    /* the markup value is chosen so the face stays on the photo side */
    var restPos = range.value;

    var setPos = function (value) {
      compare.style.setProperty("--pos", value + "%");
    };

    compare.classList.add("is-ready");
    if (modeBar) modeBar.classList.add("is-ready");

    if (reduced) {
      setPos(range.value);
    } else {
      /* wipe open once on load, so the slider is noticed */
      setPos(0);
      compare.classList.add("is-intro");
      window.setTimeout(function () { setPos(range.value); }, 450);
      window.setTimeout(function () { compare.classList.remove("is-intro"); }, 1500);
    }

    range.addEventListener("input", function () {
      compare.classList.remove("is-intro");
      setPos(range.value);
    });

    if (modeBar) {
      var buttons = Array.prototype.slice.call(modeBar.querySelectorAll(".compare-mode"));
      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var wanted = btn.getAttribute("data-map");
          buttons.forEach(function (b) {
            var on = b === btn;
            b.classList.toggle("is-active", on);
            b.setAttribute("aria-pressed", on ? "true" : "false");
          });
          maps.forEach(function (m) {
            m.classList.toggle("is-active", m.getAttribute("data-map") === wanted);
          });
          range.setAttribute(
            "aria-label",
            "Reveal the estimated " +
              (wanted === "normals" ? "surface normals" : "depth map") +
              " over the photo"
          );
          /* nudge the wipe open if it was parked at an edge */
          if (Number(range.value) < 8) {
            range.value = restPos;
            setPos(restPos);
          }
        });
      });
    }
  }

  /* ---------- Publication filters and the short list ------------------
     Only the first few papers are shown; the rest stay in the page (so they
     are still searchable and linkable) and are revealed by the button. */
  var bar = document.querySelector("[data-filters]");
  var pubs = Array.prototype.slice.call(document.querySelectorAll(".pub"));
  var moreBtn = document.querySelector("[data-pubs-toggle]");
  var CAP = 7;

  if (bar && pubs.length) {
    bar.hidden = false;
    var counter = bar.querySelector("[data-filter-count]");
    var chips = Array.prototype.slice.call(bar.querySelectorAll(".chip"));
    var topic = "all";
    var expanded = false;

    var matches = function (pub) {
      var t = (pub.getAttribute("data-topic") || "").split(/\s+/);
      return topic === "all" || t.indexOf(topic) !== -1;
    };

    var render = function () {
      var shown = 0, total = 0;
      pubs.forEach(function (pub) {
        if (!matches(pub)) { pub.hidden = true; return; }
        total++;
        var visible = expanded || total <= CAP;
        pub.hidden = !visible;
        if (visible) shown++;
      });
      if (counter) counter.textContent = "Showing " + shown + " of " + total + " publications";
      if (moreBtn) {
        /* no totals on the button: the list is a selection, and a number
           there would read as the whole publication record */
        moreBtn.hidden = total <= CAP;
        var label = moreBtn.querySelector("[data-expand-label]");
        if (label) label.textContent = expanded ? "Collapse" : "Expand";
        moreBtn.classList.toggle("is-open", expanded);
        moreBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
      }
    };

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          var on = c === chip;
          c.classList.toggle("is-active", on);
          c.setAttribute("aria-pressed", on ? "true" : "false");
        });
        topic = chip.getAttribute("data-filter");
        expanded = false;          /* a new topic starts from the short list */
        render();
      });
    });

    if (moreBtn) {
      moreBtn.hidden = false;
      moreBtn.addEventListener("click", function () {
        expanded = !expanded;
        render();
        if (!expanded) {
          var head = document.getElementById("publications");
          if (head) head.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        }
      });
    }

    render();
  }

  /* ---------- Work strip: jump to the matching publication filter ----- */
  var tiles = Array.prototype.slice.call(document.querySelectorAll("[data-jump]"));
  tiles.forEach(function (tile) {
    tile.addEventListener("click", function () {
      var chip = document.querySelector(
        '.chip[data-filter="' + tile.getAttribute("data-jump") + '"]'
      );
      if (chip) chip.click();
      var target = document.getElementById("publications");
      if (target) target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    });
  });

  /* ---------- Reveal on scroll ---------------------------------------
     The reveal is decoration; the content must never depend on it. Every
     path below ends with the element visible, and a timer sweeps up any
     element the observer never reported on. */
  var revealables = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var show = function (el) { el.classList.add("is-visible"); };
  var showAll = function () { revealables.forEach(show); };

  if (reduced || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    var revealer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          show(entry.target);
          revealer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealables.forEach(function (el) { revealer.observe(el); });

    /* Anything already on screen shows immediately… */
    window.addEventListener("load", function () {
      revealables.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.2) show(el);
      });
    });
    /* …and nothing stays hidden if the observer never fires at all. */
    setTimeout(showAll, 4000);
  }

  /* ---------- Nav scroll-spy ----------------------------------------- */
  var links = Array.prototype.slice.call(
    document.querySelectorAll(".navlinks a[href^='#']")
  );
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle(
              "is-active",
              a.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-50% 0px -45% 0px" }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
