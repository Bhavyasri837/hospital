/* ==========================================================================
   MERIDIAN HEALTH — script.js
   Vanilla JS only. No dependencies.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     LOADING SCREEN
  --------------------------------------------------------------- */
  window.addEventListener("load", function () {
    var loader = document.getElementById("loading-screen");
    if (!loader) return;
    setTimeout(function () {
      loader.classList.add("hide");
    }, 500);
  });

  /* ---------------------------------------------------------------
     STICKY NAVBAR + MOBILE MENU
  --------------------------------------------------------------- */
  var navbar = document.getElementById("navbar");
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("nav-links");

  function onScroll() {
    if (window.scrollY > 12) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    toggleBackToTop();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      var isOpen = navbar.getAttribute("data-open") === "true";
      navbar.setAttribute("data-open", String(!isOpen));
      hamburger.classList.toggle("open", !isOpen);
      hamburger.setAttribute("aria-expanded", String(!isOpen));
      hamburger.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    });

    // Close mobile menu when a link is tapped
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navbar.setAttribute("data-open", "false");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------------
     DARK / LIGHT THEME TOGGLE
     (In-memory only — no localStorage, so the choice resets on reload.
      This keeps the file safe to preview anywhere.)
  --------------------------------------------------------------- */
  var themeToggle = document.getElementById("theme-toggle");
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  // Respect system preference on first load.
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ---------------------------------------------------------------
     SCROLL REVEAL ANIMATIONS
  --------------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = el.getAttribute("data-reveal-delay");
            if (delay) el.style.transitionDelay = delay + "ms";
            el.classList.add("in-view");
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  /* ---------------------------------------------------------------
     ANIMATED COUNTERS
  --------------------------------------------------------------- */
  var counters = document.querySelectorAll(".counter");

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-target"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1800;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.floor(eased * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window && counters.length) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ---------------------------------------------------------------
     FAQ ACCORDION
  --------------------------------------------------------------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {
      var isOpen = question.getAttribute("aria-expanded") === "true";

      // Close all others (single-open accordion)
      faqItems.forEach(function (other) {
        var otherQ = other.querySelector(".faq-question");
        var otherA = other.querySelector(".faq-answer");
        otherQ.setAttribute("aria-expanded", "false");
        otherA.style.maxHeight = null;
      });

      if (!isOpen) {
        question.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* ---------------------------------------------------------------
     TESTIMONIAL SLIDER
  --------------------------------------------------------------- */
  var track = document.getElementById("testimonial-track");
  var dotsWrap = document.getElementById("testimonial-dots");

  if (track && dotsWrap) {
    var slides = track.querySelectorAll(".testimonial-card");
    var current = 0;
    var autoTimer;

    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.setAttribute("aria-label", "Go to testimonial " + (i + 1));
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", function () {
        goTo(i);
        restartAuto();
      });
      dotsWrap.appendChild(dot);
    });

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = "translateX(-" + current * 100 + "%)";
      dotsWrap.querySelectorAll("button").forEach(function (dot, i) {
        dot.classList.toggle("active", i === current);
      });
    }

    function restartAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(function () {
        goTo(current + 1);
      }, 6000);
    }

    goTo(0);
    restartAuto();
  }

  /* ---------------------------------------------------------------
     APPOINTMENT FORM VALIDATION
  --------------------------------------------------------------- */
  var apptForm = document.getElementById("appointment-form");
  if (apptForm) {
    var successMsg = document.getElementById("form-success");

    apptForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var fields = apptForm.querySelectorAll("input[required], select[required]");

      fields.forEach(function (field) {
        var errorEl = apptForm.querySelector('.field-error[data-for="' + field.id + '"]');
        var message = "";

        if (!field.value.trim()) {
          message = "This field is required.";
        } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          message = "Enter a valid email address.";
        } else if (field.type === "tel" && field.value.replace(/\D/g, "").length < 7) {
          message = "Enter a valid phone number.";
        }

        if (message) {
          valid = false;
          field.style.borderColor = "#d64545";
          if (errorEl) errorEl.textContent = message;
        } else {
          field.style.borderColor = "";
          if (errorEl) errorEl.textContent = "";
        }
      });

      if (valid) {
        successMsg.textContent = "✓ Appointment request received. We'll confirm shortly by email.";
        apptForm.reset();
      } else {
        successMsg.textContent = "";
      }
    });

    // Clear error state as the visitor types
    apptForm.querySelectorAll("input, select").forEach(function (field) {
      field.addEventListener("input", function () {
        field.style.borderColor = "";
        var errorEl = apptForm.querySelector('.field-error[data-for="' + field.id + '"]');
        if (errorEl) errorEl.textContent = "";
      });
    });
  }

  /* ---------------------------------------------------------------
     CONTACT FORM
  --------------------------------------------------------------- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    var contactSuccess = document.getElementById("contact-success");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactSuccess.textContent = "✓ Message sent. Our team will reply within the hour.";
      contactForm.reset();
    });
  }

  /* ---------------------------------------------------------------
     BACK TO TOP
  --------------------------------------------------------------- */
  var backToTop = document.getElementById("back-to-top");
  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 480) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------
     LIVE "NEXT AVAILABLE SLOT" TIME (small premium touch)
  --------------------------------------------------------------- */
  var heroTime = document.getElementById("hero-time");
  if (heroTime) {
    var slot = new Date();
    slot.setMinutes(slot.getMinutes() + 90);
    var hours = slot.getHours();
    var minutes = slot.getMinutes();
    var period = hours >= 12 ? "PM" : "AM";
    var displayHours = hours % 12 || 12;
    var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    heroTime.textContent = displayHours + ":" + displayMinutes + " " + period;
  }
})();