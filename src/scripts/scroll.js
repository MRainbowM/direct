// Проекты
const toProjectsBtn = document.querySelectorAll('.scroll_to_projects');

const scrollToProjects = () => {
    const main = document.querySelector('.main');
    const height = main.clientHeight;
    console.log(height);
    window.scrollTo({
        top: height,
        behavior: 'smooth'
    });
}

toProjectsBtn.forEach((element) => {
    element.addEventListener('click', scrollToProjects);
});

const footerBtn = document.querySelector('.f_top-arrow');

const scrollToStart = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

footerBtn.addEventListener('click', scrollToStart);
// TODO: скролл по ссылкам в меню

const burger = document.querySelector('.burger');
const header = document.querySelector('.header')
const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu_a');
menuLinks.forEach(link => {
    const linkTo = link.getAttribute('data-link');
    const section = document.querySelector('#' + linkTo);
    const scrollPoint = section.offsetTop;
    link.addEventListener('click', (e) => {
        burger.classList.remove('show')
        header.classList.remove('show')
        menu.classList.remove('menu_show')
        document.body.style.overflow = "visible"
        window.scrollTo({
            top: scrollPoint,
            behavior: 'smooth'
        });
    });
});

//Люди: кнопка "хочу с вами" 
const peoplesBtn = document.querySelector('.btn_peoples');

// TODO: скролл к форме в меню
