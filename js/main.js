const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuOverlay = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");

const cards = document.querySelectorAll(".card");

hamburgerMenu.addEventListener("click", () => {
  menuOverlay.classList.toggle("small");
  hamburgerMenu.classList.toggle("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuOverlay.classList.remove("small");
    hamburgerMenu.classList.remove("active");
  });
});

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    cards.forEach((card) => {
      card.classList.remove("card--active");
    });

    card.classList.add("card--active");
  });
});

$(window).on("scroll", function () {
  scroll_pos = $(window).scrollTop() + $(window).height();
  element_pos =
    $(".symptoms__image").offset().top + $(".symptoms__image").height() - 100;
  if (scroll_pos > element_pos) {
    $(".sym-path").addClass("sym-path--active");
  }
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", function (event) {
  event.preventDefault();

  if (window.scrollY >= 100) {
    nav.classList.add("nav--scrolled");
  } else {
    nav.classList.remove("nav--scrolled");
  }
});

AOS.init({
  duration: 600,
});
