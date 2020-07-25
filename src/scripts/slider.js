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
    const currentIndex = Math.abs(offsetLeft) / itemWidth;
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
    debugger

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
        console.log(offsetLeft, offsetRight);
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

