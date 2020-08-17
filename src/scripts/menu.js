const burger = document.querySelector('.burger');
const linesBurger = burger.querySelectorAll('.line');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');

const btnContact = document.querySelector('.menu_btn_contact');
const menuForm = document.querySelector('.menu_form');
const menuSoc = document.querySelector('.menu_col_1');
const menuLinks = document.querySelector('.menu_col_2');

// кнопка в разделе ЛЮДИ: "хочу с вами"
const btnPeoples = document.querySelector('.btn_peoples');
const jobFormPage = document.querySelector('.job_form_page');

// ссылка на пользовательское соглашение
const policyLinks = document.querySelectorAll('.policy_link');
// модалка с пс
const policy = document.querySelector('.policy');

// модалка после отправки формы
const contactPage = document.querySelector('.contact_page');
const jobPage = document.querySelector('.job_page');

let policyHideMenu = false; // если ссылка открыта не из меню

policyLinks.forEach(link => { // поль-е согл-е
    link.addEventListener('click', (e) => {
        header.classList.add('header_show_on_white');
        burger.classList.add('burger_show_on_white');
        policy.classList.add('policy_show');
        let isShowMenu = burger.classList.contains('burger_show');
        if (!isShowMenu) {
            document.body.style.overflow = "hidden"
            document.body.style.marginRight = "7px"
            header.classList.add('header_show');
            burger.classList.add('burger_show');
            policyHideMenu = true;
        } else {
            policyHideMenu = false;
        }
        linesBurger.forEach(line => {
            line.style.width = null; //сброс стилей
        });
    });
});

if(btnPeoples != null) {
    btnPeoples.addEventListener('click', (e) => {
        burger.classList.add('burger_show');
    
        jobFormPage.classList.add('job_form_page_show');
        linesBurger.forEach(line => {
            line.style.width = null; //сброс стилей
        });
        header.classList.add('header_show');
        document.body.style.overflow = "hidden"
        document.body.style.marginRight = "7px"
    });
}
//

burger.addEventListener('click', (e) => {
    let isShowMenu = burger.classList.contains('burger_show');
    let isPolityShow = policy.classList.contains('policy_show');
    if (isShowMenu && !isPolityShow) { // закрыть все
        document.body.style.overflow = "visible";
        document.body.style.marginRight = null;

        burger.classList.remove('burger_show');
        header.classList.remove('header_show');
        menu.classList.remove('menu_show');

        //скрыть форму
        menuSoc.classList.remove('menu_col-1_hide');
        menuLinks.classList.remove('menu_col-2_hide');
        menuForm.classList.add('menu_form_hide');

        // скрыть модалку 
        contactPage.classList.remove('contact_page_show');
        jobFormPage.classList.remove('job_form_page_show');
        jobPage.classList.remove('job_page_show');
    } else if (!isShowMenu && !isPolityShow) {
        burger.classList.add('burger_show');
        header.classList.add('header_show');
        menu.classList.add('menu_show');
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "7px";
    }
    if (isPolityShow) {
        document.body.style.overflow = "visible";
        document.body.style.marginRight = null;
        header.classList.remove('header_show_on_white');
        burger.classList.remove('burger_show_on_white');
        policy.classList.remove('policy_show');
        if (policyHideMenu) {
            burger.classList.remove('burger_show');
            header.classList.remove('header_show');
        }
    }
});


btnContact.addEventListener('click', (e) => {
    menuSoc.classList.add('menu_col-1_hide');
    menuLinks.classList.add('menu_col-2_hide');
    menuForm.classList.remove('menu_form_hide');
    menuForm.style.opacity = 0;
    setTimeout(() => {
        menuForm.style.opacity = 1;
    }, 100)
});










