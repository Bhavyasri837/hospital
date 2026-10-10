import { useEffect } from "react";
import SiteContent from "./components/SiteContent.jsx";

export default function App() {
  useEffect(() => {
    const cleanups = [];
    const observers = [];
    const listen = (target, event, handler, options) => {
      target.addEventListener(event, handler, options);
      cleanups.push(() => target.removeEventListener(event, handler, options));
    };

    const loader = document.getElementById("loading-screen");
    const loaderTimer = window.setTimeout(() => loader?.classList.add("hide"), 500);
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const backToTop = document.getElementById("back-to-top");

    const onScroll = () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 12);
      backToTop?.classList.toggle("show", window.scrollY > 480);
    };
    listen(window, "scroll", onScroll, { passive: true });
    onScroll();

    const toggleMenu = () => {
      const isOpen = navbar?.getAttribute("data-open") === "true";
      navbar?.setAttribute("data-open", String(!isOpen));
      hamburger?.classList.toggle("open", !isOpen);
      hamburger?.setAttribute("aria-expanded", String(!isOpen));
      hamburger?.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    };
    if (hamburger) listen(hamburger, "click", toggleMenu);
    navLinks?.querySelectorAll("a").forEach((link) => {
      listen(link, "click", () => {
        navbar?.setAttribute("data-open", "false");
        hamburger?.classList.remove("open");
        hamburger?.setAttribute("aria-expanded", "false");
        hamburger?.setAttribute("aria-label", "Open menu");
      });
    });

    const themeToggle = document.getElementById("theme-toggle");
    const applyTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
    };
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
    if (themeToggle) {
      listen(themeToggle, "click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        applyTheme(current === "dark" ? "light" : "dark");
      });
    }

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-reveal-delay");
            if (delay) entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
      document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
      observers.push(revealObserver);

      const counters = document.querySelectorAll(".counter");
      if (counters.length) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target;
            const target = Number(element.getAttribute("data-target"));
            const suffix = element.getAttribute("data-suffix") || "";
            const start = performance.now();
            const animate = (now) => {
              const progress = Math.min((now - start) / 1800, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              element.textContent = `${Math.floor(eased * target).toLocaleString()}${suffix}`;
              if (progress < 1) requestAnimationFrame(animate);
              else element.textContent = `${target.toLocaleString()}${suffix}`;
            };
            requestAnimationFrame(animate);
            observer.unobserve(element);
          });
        }, { threshold: 0.4 });
        counters.forEach((element) => counterObserver.observe(element));
        observers.push(counterObserver);
      }
    } else {
      document.querySelectorAll(".reveal").forEach((element) => element.classList.add("in-view"));
    }

    const faqItems = [...document.querySelectorAll(".faq-item")];
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      if (!question || !answer) return;
      listen(question, "click", () => {
        const shouldOpen = question.getAttribute("aria-expanded") !== "true";
        faqItems.forEach((other) => {
          other.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
          const otherAnswer = other.querySelector(".faq-answer");
          if (otherAnswer) otherAnswer.style.maxHeight = "";
        });
        if (shouldOpen) {
          question.setAttribute("aria-expanded", "true");
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
      });
    });

    const track = document.getElementById("testimonial-track");
    const dots = document.getElementById("testimonial-dots");
    let sliderTimer;
    if (track && dots) {
      dots.replaceChildren();
      const slides = [...track.querySelectorAll(".testimonial-card")];
      cleanups.push(() => dots.replaceChildren());
      let current = 0;
      const dotButtons = slides.map((_, index) => {
        const button = document.createElement("button");
        button.setAttribute("aria-label", `Go to testimonial ${index + 1}`);
        button.addEventListener("click", () => {
          goTo(index);
          restartSlider();
        });
        dots.appendChild(button);
        return button;
      });
      const goTo = (index) => {
        current = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dotButtons.forEach((button, dotIndex) => button.classList.toggle("active", dotIndex === current));
      };
      const restartSlider = () => {
        window.clearInterval(sliderTimer);
        sliderTimer = window.setInterval(() => goTo(current + 1), 6000);
      };
      goTo(0);
      restartSlider();
    }

    const appointmentForm = document.getElementById("appointment-form");
    if (appointmentForm) {
      const success = document.getElementById("form-success");
      listen(appointmentForm, "submit", (event) => {
        event.preventDefault();
        let valid = true;
        appointmentForm.querySelectorAll("input[required], select[required]").forEach((field) => {
          const error = appointmentForm.querySelector(`.field-error[data-for="${field.id}"]`);
          let message = "";
          if (!field.value.trim()) message = "This field is required.";
          else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) message = "Enter a valid email address.";
          else if (field.type === "tel" && field.value.replace(/\D/g, "").length < 7) message = "Enter a valid phone number.";
          field.style.borderColor = message ? "#d64545" : "";
          if (error) error.textContent = message;
          if (message) valid = false;
        });
        if (success) success.textContent = valid ? "✓ Appointment request received. We'll confirm shortly by email." : "";
        if (valid) appointmentForm.reset();
      });
      appointmentForm.querySelectorAll("input, select").forEach((field) => {
        listen(field, "input", () => {
          field.style.borderColor = "";
          const error = appointmentForm.querySelector(`.field-error[data-for="${field.id}"]`);
          if (error) error.textContent = "";
        });
      });
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      listen(contactForm, "submit", (event) => {
        event.preventDefault();
        const success = document.getElementById("contact-success");
        if (success) success.textContent = "✓ Message sent. Our team will reply within the hour.";
        contactForm.reset();
      });
    }

    if (backToTop) listen(backToTop, "click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    const heroTime = document.getElementById("hero-time");
    if (heroTime) {
      const slot = new Date(Date.now() + 90 * 60 * 1000);
      heroTime.textContent = slot.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    }

    return () => {
      window.clearTimeout(loaderTimer);
      window.clearInterval(sliderTimer);
      cleanups.forEach((cleanup) => cleanup());
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return <SiteContent />;
}