document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navMenu = document.getElementById("nav-menu");
  const header = document.querySelector("#header__mobile header");

  burgerMenu.addEventListener("click", function () {
    navMenu.classList.toggle("hidden");
    header.classList.toggle("open");
  });
});
