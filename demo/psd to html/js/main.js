// Animate Show
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const handleEvents = function () {
  document.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionHero = $(".section-hero");
    const featuresList = $(".features-list");
    const noseTextBox = $(".nose-text-box");

    if (window.innerWidth > 1024) {
      if (scrollTop > 850) {
        sectionHero.classList.add("hideDp");
      } else {
        sectionHero.classList.remove("hideDp");
      }

      if (scrollTop < 500 || scrollTop > 1600) {
        featuresList.classList.add("hideDp");
      } else {
        featuresList.classList.remove("hideDp");
      }

      if (scrollTop < 1200 || scrollTop > 2400) {
        noseTextBox.classList.add("hideDp");
      } else {
        noseTextBox.classList.remove("hideDp");
      }
    }
  };
};

handleEvents();

// Mobile Navigation
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth Scrolling
const allLinks = $$("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const section = $(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

// Sticky Header
const sectionHero = $(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHero);
