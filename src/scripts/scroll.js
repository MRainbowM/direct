const toProjectsBtn = document.querySelectorAll('.scroll_to_projects');
toProjectsBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        const projectsSection = document.querySelector('#projects');
        startScroll(projectsSection);
    });
});

const footerBtn = document.querySelector('.f_top-arrow');
footerBtn.addEventListener('click', (e) => {
    const mainSection = document.querySelector('#main');
    startScroll(mainSection);
});

// скролл по ссылкам в меню
const burger = document.querySelector('.burger');
const header = document.querySelector('.header')
const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu_a');
menuLinks.forEach(link => {
    let linkTo = link.getAttribute('data-link');
    let section = document.querySelector('#' + linkTo);
    link.addEventListener('click', (e) => {
        burger.classList.remove('burger_show');
        header.classList.remove('header_show');
        menu.classList.remove('menu_show');
        document.body.style.overflow = null;
        document.body.style.marginRight = null;
        startScroll(section);
    });
});
// скролл по ссылкам в футере
const footerLinks = document.querySelectorAll('.footer_a');
footerLinks.forEach(link => {
    let linkTo = link.getAttribute('data-link');
    let section = document.querySelector('#' + linkTo);
    link.addEventListener('click', (e) => {
        startScroll(section);

        // let scrollPoint = section.offsetTop;
        // window.scrollTo({
        //     top: scrollPoint,
        //     behavior: 'smooth'
        // });
    });
});

const startScroll = (section) => {
    let direction = 0;
    scrollPoint = section.getBoundingClientRect().top
    direction = (scrollPoint < 0) ? -1 : (scrollPoint > 0) ? 1 : 0;
    if (direction == 0) return;
    scroll(section, direction);
}

const scroll = (el, direction) => {
    console.log(el);
    let pageHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    let duration = 2000;
    let start = new Date().getTime();
    const fn = () => {
        let top = el.getBoundingClientRect().top
        let now = new Date().getTime() - start;
        let result = Math.round(top * now / duration);
        result = (result > direction * top) ? top : (result == 0) ? direction : result;
        if (direction * top > 0 && (pageHeight - window.pageYOffset) > direction * document.documentElement.clientHeight) {
            window.scrollBy(0, result);
            requestAnimationFrame(fn);
        }
    }
    requestAnimationFrame(fn);
}

(function () {
    const requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();