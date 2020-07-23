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
}

const onClickLeft = handleClick(-1)
const onClickRight = handleClick(1)

btnsLeft.forEach((element) => {
    element.addEventListener('click', onClickLeft)
})

btnsRight.forEach((element) => {
    element.addEventListener('click', onClickRight)
})