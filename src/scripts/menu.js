let burger = document.querySelector('.burger')
burger.addEventListener('click', (e) => {
    let isShowMenu = burger.classList.contains('show')
    if(isShowMenu) {
        burger.classList.remove('show')
    }else {
        burger.classList.add('show')
    }
})