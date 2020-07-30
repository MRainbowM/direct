const btnsLeft = document.querySelectorAll('.slider-arr_left');
const btnsRight = document.querySelectorAll('.slider-arr_right');

let isAnimate = false;

const handleClick = (diffIndex = 0) => (e) => {
    if (isAnimate) return;

    const btn = e.currentTarget;
    const id = btn.getAttribute('data-id');
    const sliderElement = document.getElementById(id);
    const sliderContainer = sliderElement.querySelector('.slider_container');

    const items = sliderContainer.querySelectorAll('.slider_item');
    const itemWidth = items[0].clientWidth;

    const { offsetLeft } = sliderContainer;
    const maxIndex = items.length;
    let currentIndex = Math.abs(offsetLeft) / Math.abs(itemWidth);
    currentIndex = Math.abs(currentIndex)
    const nextIndex = currentIndex + diffIndex;

    if (nextIndex >= 0 && nextIndex < maxIndex) {
        isAnimate = true;
        const offset = nextIndex * itemWidth
        sliderContainer.style.marginLeft = '-' + offset + 'px';
        setTimeout(() => {
            isAnimate = false;
            hideItems(sliderContainer);
        }, 310)
    }
    const btns_right = document.querySelectorAll('[data-id="' + id + '"]' + '.slider-arr_right');
    const btns_left = document.querySelectorAll('[data-id="' + id + '"]' + '.slider-arr_left');
    if (nextIndex === 0 || nextIndex === -1) {
        btns_left.forEach((element) => {
            element.classList.add('no-active');
            element.classList.remove('active');
        });
    } else if (nextIndex === maxIndex - 1 || nextIndex === maxIndex) {
        btns_right.forEach((element) => {
            element.classList.add('no-active');
            element.classList.remove('active');
        });
    } else {
        btns_left.forEach((element) => {
            if (element.classList.contains('no-active')) {
                element.classList.remove('no-active');
                element.classList.add('active');
            }
        });
        btns_right.forEach((element) => {
            if (element.classList.contains('no-active')) {
                element.classList.remove('no-active');
                element.classList.add('active');
            }
        });
    }
}

const hideItems = (parent) => {
    const items = parent.querySelectorAll('.slider_item');
    items.forEach((element) => {
        const windowWidth = window.innerWidth;
        const { offsetLeft, offsetWidth } = element;
        const offsetRight = windowWidth - (offsetLeft + offsetWidth);
        if (offsetLeft < 0 || offsetRight < 0) {
            element.classList.add('slider_item_hide');
        } else if (offsetLeft >= 0 && offsetRight >= 0) {
            element.classList.remove('slider_item_hide');
        }
    });
}

const resetSlider = () => {
    const sliders = document.querySelectorAll('.slider_container');
    sliders.forEach((element) => {
        element.style.transition = 'none';
        element.style.marginLeft = 0;
        element.style.transition = null;

    });

    const btns = document.querySelectorAll('.slider-arr_left');
    btns.forEach((element) => {
        element.classList.add('no-active');
        element.classList.remove('active');
    });

    hideItems(document);
}

const onClickLeft = handleClick(-1);
const onClickRight = handleClick(1);

window.addEventListener('resize', resetSlider);

hideItems(document);

btnsLeft.forEach((element) => {
    element.addEventListener('click', onClickLeft);
});

btnsRight.forEach((element) => {
    element.addEventListener('click', onClickRight);
});


//swipe

let touchStartX = 0
let touchMinDist = 30

const initSwipe = () => {
    const sliderContainers = document.querySelectorAll('.slider');
    sliderContainers.forEach((slider) => {
        slider.addEventListener('touchstart', onTouchStart);
        slider.addEventListener('touchend', onTouchEnd);
    });
};

function onTouchStart(e) {
    touchStartX = e.changedTouches[0].pageX;
} 

function onTouchEnd(e) {
    let distX = e.changedTouches[0].pageX - touchStartX;
    let absDistX = Math.abs(distX);
    let distOk = (absDistX > touchMinDist);
    if (distOk) {
        let touchDirect = (distX < 0) ? 'left' : 'right';
        touchSetCarucel(e, touchDirect)
    }
}

function touchSetCarucel(e, direct) {
    let list = e.target.closest('.slider')
    console.log(list);
    debugger
    if (parent) {
        let step = (direct === 'left') ? 1 : (direct === 'right') ? -1 : 0
        let section = list.parentElement.parentElement
        let button = section.querySelector('button[onclick]')
        setCarusel(button, step)
    }
}

function setCarusel(button, step) {
    let section = button.parentElement
    let buttons = section.querySelectorAll('button[onclick]')
    let list = section.querySelector('[data-carusel]')
    if (list.firstElementChild) {
        let lenght = list.childElementCount
        let w = list.firstElementChild.offsetWidth + 10
        let viewLenght = Math.floor(list.offsetWidth / w)
        let count = lenght - viewLenght
                            // console.log({list, buttons, lenght, viewLenght, count})
        let index = +(list.dataset.carusel) + step
        if(index >= 0 && index <= count) {
            list.style.transform = `translateX(calc(${index} * ${w}px * -1))`
            list.dataset.carusel = index
        }
        if(index <= 0)  {
            buttons[0].style.opacity = 0        
            buttons[0].style.pointerEvents = 'none'        
        } else {
            buttons[0].style.opacity =  1       
            buttons[0].style.pointerEvents = null        
        }
        if(index >= count) {
            buttons[1].style.opacity = 0        
            buttons[1].style.pointerEvents = 'none'        
        } else {
            buttons[1].style.opacity =  1       
            buttons[1].style.pointerEvents = null        
        }
    } else {
        buttons[0].style.opacity = 0        
        buttons[0].style.pointerEvents = 'none'
        buttons[1].style.opacity = 0        
        buttons[1].style.pointerEvents = 'none'
    }
}

initSwipe();
