const iconOpenMenu = document.getElementById('menu-hamburger');

const mainMenu = document.querySelector('.main-menu');

const iconCloseMenu = document.getElementById('menu-close');

const overlay = document.querySelector('.overlay')

iconOpenMenu.addEventListener('click', openMenu)

iconCloseMenu.addEventListener('click', closeMenu)

function openMenu() {
    mainMenu.classList.add('ativo');
    overlay.classList.add('ativo');
}

function closeMenu() {
    mainMenu.classList.remove('ativo');
    overlay.classList.remove('ativo');
}