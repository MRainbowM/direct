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
// скролл по ссылкам в меню
const burger = document.querySelector('.burger');
const header = document.querySelector('.header')
const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu_a');
menuLinks.forEach(link => {
    let linkTo = link.getAttribute('data-link');
    let section = document.querySelector('#' + linkTo);
    link.addEventListener('click', (e) => {
        burger.classList.remove('burger_show')
        header.classList.remove('header_show')
        menu.classList.remove('menu_show')
        document.body.style.overflow = "visible"
        let scrollPoint = section.offsetTop;
        window.scrollTo({
            top: scrollPoint,
            behavior: 'smooth'
        });
    });
});
// скролл по ссылкам в футере
const footerLinks = document.querySelectorAll('.footer_a');
footerLinks.forEach(link => {
    let linkTo = link.getAttribute('data-link');
    let section = document.querySelector('#' + linkTo);
    link.addEventListener('click', (e) => {
        let scrollPoint = section.offsetTop;
        window.scrollTo({
            top: scrollPoint,
            behavior: 'smooth'
        });
    });
});

// TODO: плавный сколл в сафари