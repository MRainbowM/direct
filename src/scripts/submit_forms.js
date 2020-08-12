const menuForm = document.querySelector('.menu_form');
const contactsForm = document.querySelector('.contacts_form');

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const linesBurger = burger.querySelectorAll('.line');

// модалка после отправки формы
const contactPage = document.querySelector('.contact_page');

menuForm.addEventListener('submit', (e) => {
    submitFormConnect(e);
});
contactsForm.addEventListener('submit', (e) => {
    submitFormConnect(e);
    menuForm.classList.add('menu_form_hide');
    contactPage.classList.add('contact_page_show');
    burger.classList.add('burger_show');
    header.classList.add('header_show');
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "7px"

    linesBurger.forEach(line => {
        line.style.width = null;
    });
        
});
const submitFormConnect = (e) => {
    e.preventDefault();
    menuForm.classList.add('menu_form_hide');

    contactPage.classList.add('contact_page_show');
}