// Navbar Scroll
const nav = document.querySelector('header');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 ) {
      nav.classList.add("nav-fixed");
    } else {
      nav.classList.remove("nav-fixed");
    }
};


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.menu-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});