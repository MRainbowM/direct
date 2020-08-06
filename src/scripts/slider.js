const btnsLeft = document.querySelectorAll('.slider-arr_left');
const btnsRight = document.querySelectorAll('.slider-arr_right');

let isAnimate = false;

const handleSlider = (id, nextIndex) => {
    const sliderElement = document.getElementById(id);
    const sliderContainer = sliderElement.querySelector('.slider_container');
    const items = sliderContainer.querySelectorAll('.slider_item');
    const maxIndex = items.length;
    const itemWidth = items[0].clientWidth;
    let offset = 0;
    if (nextIndex >= 0 && nextIndex < maxIndex) {
        isAnimate = true;
        offset = nextIndex * itemWidth;
    } else if (nextIndex >= maxIndex) {
        isAnimate = true;
        offset = (maxIndex - 1) * itemWidth;
    } else if (nextIndex < 0) {
        isAnimate = true;
        offset = 0;
    }
    sliderContainer.style.marginLeft = '-' + offset + 'px';
    setTimeout(() => {
        isAnimate = false;
        hideItems(sliderContainer);
    }, 320);
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

const handleClick = (diffIndex = 0) => (e) => {
    // console.log(e.currentTarget);
    if (isAnimate) return;

    const elSel = e.currentTarget;
    let id = '';
    if (elSel.getAttribute('data-id')) {
        id = elSel.getAttribute('data-id');
    } else {
        id = elSel.closest('.slider').id
    }

    const sliderElement = document.getElementById(id);
    const sliderContainer = sliderElement.querySelector('.slider_container');

    const items = sliderContainer.querySelectorAll('.slider_item');
    const itemWidth = items[0].clientWidth;

    let currentIndex = currentPosition(sliderContainer, itemWidth);
    const nextIndex = currentIndex + diffIndex;

    handleSlider(id, nextIndex);

}


// текущая позиция
const currentPosition = (sliderContainer, itemWidth) => {
    const { offsetLeft } = sliderContainer;
    let currentIndex = Math.abs(offsetLeft) / itemWidth;
    currentIndex = Math.ceil(currentIndex);
    return currentIndex;
}


// скрыть карточки 
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

let touchStartX = 0;
let touchMinDist = 30;
let sliderSel;
let startOffset = 0;
let moveOffset = 0;
let currentIndex = 0;
let itemWidth = 0;
let sliderId = '';

const initSwipe = () => {
    const sliderContainers = document.querySelectorAll('.slider');
    sliderContainers.forEach((slider) => {
        slider.addEventListener('touchstart', onTouchStart);
        slider.addEventListener('touchmove', onTouchMove);
        slider.addEventListener('touchend', onTouchEnd);
        slider.addEventListener('mousedown', onMouseStart);
        slider.addEventListener('mousemove', onMouseMove);
        slider.addEventListener('mouseup', onMouseEnd);
    });
};

function onTouchStart(e) {
    touchStartX = e.changedTouches[0].pageX;
    const slider = e.currentTarget;
    sliderId = slider.getAttribute('id');
    sliderSel = slider.querySelector('.slider_container');
    sliderSel.style.transition = 'none';
    const items = sliderSel.querySelectorAll('.slider_item');
    itemWidth = items[0].clientWidth;
    currentIndex = currentPosition(sliderSel, itemWidth)
    startOffset = currentIndex * itemWidth;
}

function onTouchMove(e) {
    if (touchStartX != 0) {
        let cursor = touchStartX - e.changedTouches[0].pageX;
        moveOffset = startOffset + cursor;
        sliderSel.style.marginLeft = (moveOffset * -1) + 'px';
    }
}

function onTouchEnd(e) {
    startOffset = 0;
    sliderSel.style.transition = null
    let nextIndex = moveOffset / itemWidth;
    let diffIndex = nextIndex - currentIndex;

    if (diffIndex > 0) {
        nextIndex = Math.ceil(nextIndex);
    } else if (diffIndex < 0) {
        nextIndex = Math.floor(nextIndex);
    }
    
    let distX = e.changedTouches[0].pageX - touchStartX;
    let distOk = Math.abs(distX) > touchMinDist;
    if (distOk) {
        handleSlider(sliderId, nextIndex);
    }
    touchStartX = 0;
}
///-----
function onMouseStart(e) {
    touchStartX = e.pageX;
    const slider = e.currentTarget;
    sliderId = slider.getAttribute('id');
    sliderSel = slider.querySelector('.slider_container');
    sliderSel.style.transition = 'none';
    const items = sliderSel.querySelectorAll('.slider_item');
    itemWidth = items[0].clientWidth;
    currentIndex = currentPosition(sliderSel, itemWidth)
    startOffset = currentIndex * itemWidth;
}

function onMouseMove(e) {
    if (touchStartX != 0) {
        let cursor = touchStartX - e.pageX;
        moveOffset = startOffset + cursor;
        sliderSel.style.marginLeft = (moveOffset * -1) + 'px';
    }
}

function onMouseEnd(e) {
    startOffset = 0;
    sliderSel.style.transition = null
    let nextIndex = moveOffset / itemWidth;
    let diffIndex = nextIndex - currentIndex;

    if (diffIndex > 0) {
        nextIndex = Math.ceil(nextIndex);
    } else if (diffIndex < 0) {
        nextIndex = Math.floor(nextIndex);
    }
    
    let distX = e.pageX - touchStartX;
    let distOk = Math.abs(distX) > touchMinDist;
    if (distOk) {
        handleSlider(sliderId, nextIndex);
    }
    touchStartX = 0;
}


initSwipe();
