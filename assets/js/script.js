function toggleMenu() {
  const menu = document.querySelector(".nav-list");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
