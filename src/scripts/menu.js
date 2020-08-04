const burger = document.querySelector('.burger')
const header = document.querySelector('.header')
const menu = document.querySelector('.menu')
burger.addEventListener('click', (e) => {
    let isShowMenu = burger.classList.contains('show')
    if (isShowMenu) {
        burger.classList.remove('show')
        header.classList.remove('show')
        menu.classList.remove('menu_show')
        document.body.style.overflow = "visible"
    } else {
        burger.classList.add('show')
        header.classList.add('show')
        menu.classList.add('menu_show')
        document.body.style.overflow = "hidden"
    }
});

const btnContact = document.querySelector('.menu_btn_contact');
const menuForm = document.querySelector('.menu_form');
const menuSoc = document.querySelector('.menu_col_1');
const menuLinks = document.querySelector('.menu_col_2');
btnContact.addEventListener('click', (e) => {
    menuSoc.classList.add('menu_col-1_hide');
    menuLinks.classList.add('menu_col-2_hide');
    menuForm.classList.remove('menu_form_hide');
});

const btnClose = document.querySelector('.menu_form_close');
btnClose.addEventListener('click', (e) => {
    menuSoc.classList.remove('menu_col-1_hide');
    menuLinks.classList.remove('menu_col-2_hide');
    menuForm.classList.add('menu_form_hide');
});




