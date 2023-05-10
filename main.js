const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-inactive');
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}



menuHamburguesa.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('mobile-inactive');
}