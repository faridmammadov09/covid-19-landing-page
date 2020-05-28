const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuOverlay = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");

const cards = document.querySelectorAll(".card");

hamburgerMenu.addEventListener("click", () => {
  menuOverlay.classList.toggle("small");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuOverlay.classList.remove("small");
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
