const hamMenu = document.querySelector(".ham-menu");
const navContainer = document.querySelector(".nav-container");
const navItems = document.querySelector(".nav-items");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navItems.classList.toggle("active");
  navContainer.classList.toggle("active");
});
