// const preloading = document.querySelector('.preloading');
// preload.classList.add('play');

const preload = document.querySelector('.preload');
// preload.classList.remove('preload_hide');
preload.classList.add('preload_play');
setTimeout(() => {
    preload.classList.remove('preload');
    preload.classList.remove('preload_play');
}, 2900)
