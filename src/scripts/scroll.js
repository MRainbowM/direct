const elements = document.querySelectorAll('.scroll');

const scrollToProjects = () => {
    const main = document.querySelector('.main');
    const height = main.clientHeight;
    console.log(height);
    window.scrollTo({
        top: height,
        behavior: 'smooth'
    });
}

elements.forEach((element) => {
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
