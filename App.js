const hamburger_menu = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.mobile-view');
hamburger_menu.addEventListener('click',navToggle)

function navToggle(){
    hamburger_menu.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}