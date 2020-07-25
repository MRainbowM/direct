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

    // debugger
    if (nextIndex >= 0 && nextIndex < maxIndex) {
        isAnimate = true;
        const offset = nextIndex * itemWidth
        sliderContainer.style.marginLeft = '-' + offset + 'px';
        setTimeout(() => {
            isAnimate = false;
        }, 310)
    }
    // debugger
    let btn_left;
    let btn_right;
    if (btn.classList.contains('slider-arr_left')) {
        btn_right = document.querySelector('.slider-arr_right, ' + 'div[' + id + ']');
        btn_left = btn
    } else if (btn.classList.contains('slider-arr_right')) {
        btn_left = document.querySelector('.slider-arr_left, ' + 'div[' + id + ']');
        btn_right = btn
    }
    if (nextIndex === 0 || nextIndex === -1) {
        btn_left.classList.add('no-active')
        btn_left.classList.remove('active')
    } else if (nextIndex === maxIndex - 1 || nextIndex === maxIndex) {
        btn_right.classList.add('no-active')
        btn_right.classList.remove('active')
    } else {
        if (btn_left.classList.contains('no-active')) {
            btn_left.classList.remove('no-active')
            btn_left.classList.add('active')
        }
        if (btn_right.classList.contains('no-active')) {
            btn_right.classList.remove('no-active')
            btn_right.classList.add('active')
        }
    }
}

const onClickLeft = handleClick(-1)
const onClickRight = handleClick(1)

btnsLeft.forEach((element) => {
    element.addEventListener('click', onClickLeft)
})

btnsRight.forEach((element) => {
    element.addEventListener('click', onClickRight)
})

// TODO: addEventListner: resize reset mardin 