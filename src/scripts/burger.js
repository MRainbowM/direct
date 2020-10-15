const header = document.querySelector('.header');
const headerLogo = header.querySelector('.logo');
const burger = header.querySelector('.burger');
const contacts = document.querySelector('.contacts');
const footer = document.querySelector('.footer');
let scrollPoint = 0;

window.addEventListener('scroll', (e) => {
    const { scrollTop } = document.scrollingElement;
    const lines = burger.querySelectorAll('.line');
    burger.classList.add('burger_animate');

    // в футере делаем белый бургер
    if (scrollTop >= footer.offsetTop) { 
        lines.forEach(line => {
            line.style.backgroundColor = 'white';
        });
    } else {
        lines.forEach(line => {
            line.style.backgroundColor = null;
        });
    }

    //в контактах делаем ховер белым
    if(contacts && footer) {
        if (scrollTop >= contacts.offsetTop && scrollTop <= footer.offsetTop) { 
            burger.classList.add('hover_white');
        } else {
            burger.classList.remove('hover_white');
        }
    }

    if (scrollTop > scrollPoint && scrollTop > 0) {
        lines.forEach(line => {
            line.style.width = '0';
        });
    //    if(!burger.contains('burger_show')){
    //    }
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

