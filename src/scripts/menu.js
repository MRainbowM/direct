const burger = document.querySelector('.burger')
const header = document.querySelector('.header')
const menu = document.querySelector('.menu')

const btnContact = document.querySelector('.menu_btn_contact');
const menuForm = document.querySelector('.menu_form');
const menuSoc = document.querySelector('.menu_col_1');
const menuLinks = document.querySelector('.menu_col_2');

// кнопка в разделе ЛЮДИ: "хочу с вами"
const btn = document.querySelector('#open-form');

// модалка после отправки формы
const contactPage = document.querySelector('.contact_page');

btn.addEventListener('click', (e) => {
    burger.classList.add('show');
    const lines = burger.querySelectorAll('.line');
    lines.forEach(line => {
        line.style.width = null;
    });

    header.classList.add('show');
    menu.classList.add('menu_show');
    document.body.style.overflow = "hidden"
    menuSoc.classList.add('menu_col-1_hide');
    menuLinks.classList.add('menu_col-2_hide');
    menuForm.classList.remove('menu_form_hide');
});
//


burger.addEventListener('click', (e) => {
    let isShowMenu = burger.classList.contains('show')
    if (isShowMenu) {
        burger.classList.remove('show');
        header.classList.remove('show');
        menu.classList.remove('menu_show');
        document.body.style.overflow = "visible";

        //скрыть форму
        menuSoc.classList.remove('menu_col-1_hide');
        menuLinks.classList.remove('menu_col-2_hide');
        menuForm.classList.add('menu_form_hide');

        // скрыть модалку после отправки формы
        contactPage.classList.remove('contact_page_show');
    } else {
        burger.classList.add('show');
        header.classList.add('show');
        menu.classList.add('menu_show');
        document.body.style.overflow = "hidden";
    }
});


btnContact.addEventListener('click', (e) => {
    menuSoc.classList.add('menu_col-1_hide');
    menuLinks.classList.add('menu_col-2_hide');
    menuForm.classList.remove('menu_form_hide');
});


// отправить форму обратной связи в меню
const btnSend = document.querySelector('.menu_form_send');

btnSend.addEventListener('click', (e) => {
    // menuSoc.classList.remove('menu_col-1_hide');
    // menuLinks.classList.remove('menu_col-2_hide');
    menuForm.classList.add('menu_form_hide');
    
    contactPage.classList.add('contact_page_show');

});






