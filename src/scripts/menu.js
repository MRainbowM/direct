let burger = document.querySelector('.burger')
let header = document.querySelector('.header')
let menu = document.querySelector('.menu')
burger.addEventListener('click', (e) => {
    let isShowMenu = burger.classList.contains('show')
    if(isShowMenu) {
        burger.classList.remove('show')
        header.classList.remove('show')
        menu.classList.remove('menu_show')
        document.body.style.overflow = "visible"
    }else {
        burger.classList.add('show')
        header.classList.add('show')
        menu.classList.add('menu_show')
        document.body.style.overflow = "hidden"
    }
});

