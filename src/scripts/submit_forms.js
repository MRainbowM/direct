const menuForm = document.querySelector('.menu_form');
const contactsForm = document.querySelector('.contacts_form');
const jobForm = document.querySelector('.job_form');

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const linesBurger = burger.querySelectorAll('.line');

// модалка после отправки формы
const contactPage = document.querySelector('.response_page');
const jobPage = document.querySelector('.job_page');

menuForm.addEventListener('submit', (e) => {
    e.preventDefault();
    menuForm.classList.add('menu_form_hide');
    contactPage.classList.add('response_page_show');
});

// if(contactsForm){
//     contactsForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         menuForm.classList.add('menu_form_hide');
//         contactPage.classList.add('response_page_show');
    
//         menuForm.classList.add('menu_form_hide');
//         burger.classList.add('burger_show');
//         header.classList.add('header_show');
//         document.body.style.overflow = "hidden";
//         document.body.style.marginRight = "7px"
    
//         linesBurger.forEach(line => {
//             line.style.width = null;
//         });
//     });
// }

if(jobForm != null) {
    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        jobPage.classList.add('job_page_show');
    });
}

const submitFormConnect = (e) => {

}