const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuOverlay = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");

hamburgerMenu.addEventListener("click", () => {
  menuOverlay.classList.toggle("small");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuOverlay.classList.remove("small");
  });
});
