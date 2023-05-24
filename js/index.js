const icon_bar = document.querySelector('.icon__bars');
const ul_list = document.querySelector('.list__nav__bar');
const icon_x = document.querySelector('.icon__x');

function agregar_block() {
    ul_list.classList.remove('mostrar__box');
}

function ocultar_block() {
    ul_list.classList.add('mostrar__box');
}

icon_x.addEventListener('click', ocultar_block);
icon_bar.addEventListener('click', agregar_block);

function redireccionar_agenda() {
    window.location.href = '../agenda.html';
}