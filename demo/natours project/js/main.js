const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = $$("a:link");
const checkbox = $(".navigation__checkbox");
const popup = $(".popup");
const popupContent = $(".popup__content");
const btnPopup = $$("#btn-popup");
const popupClose = $(".popup__close");

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
      const sectionEl = $(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (checkbox.checked) checkbox.checked = !checkbox.checked;
    return checkbox.checked;
  });
});

///////////////////////////////////////////////////////////
// Popup open-close

const openPopup = () => {
  popup.classList.add("popup--open");
  popupContent.classList.add("popup__content--open");
};

const closePopup = () => {
  popup.classList.remove("popup--open");
  popupContent.classList.remove("popup__content--open");
};

btnPopup.forEach(function (btn) {
  document.addEventListener("click", function (e) {
    if (e.target === btn) openPopup();
    else if (e.target === popup || e.target === popupClose) closePopup();
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (popup.classList.contains("popup--open")) {
      closePopup();
    }
  }
});

// btnPopup.forEach(function (btn) {
//   btn.addEventListener("click", () => openPopup());
// });

// document.addEventListener("click", function (e) {
//   if (e.target === popup || e.target === popupClose) closePopup();
// });
