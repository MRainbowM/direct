const header = document.querySelector('.header');
const headerLogo = header.querySelector('.logo');
const burger = header.querySelector('.burger');
let scrollPoint = 0;
window.addEventListener('scroll', (e) => {
    const { scrollTop } = document.scrollingElement;
    const lines = burger.querySelectorAll('.line');
    burger.classList.add('burger_animate');
    console.log(scrollTop);
    console.log(scrollPoint);
    if (scrollTop > scrollPoint && scrollTop > 0) {
        lines.forEach(line => {
            line.style.width = '0';
        });
    } else {
        lines.forEach(line => {
            line.style.width = null;
        });
    }
    setTimeout(() => {
        burger.classList.remove('burger_animate');
    }, 400);
    scrollPoint = scrollTop;
});

