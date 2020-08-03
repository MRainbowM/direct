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

//Люди: кнопка "хочу с вами" 
const peoplesBtn = document.querySelector('.btn_peoples');

// TODO: скролл к форме в меню




