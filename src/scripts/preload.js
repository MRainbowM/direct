const preload = document.querySelector('.preload');
if (window.innerWidth > 765) {
    preload.classList.add('preload_play');
} else {
    preload.classList.add('preload_play_mobi');
}
setTimeout(() => {
    preload.classList.remove('preload');
    console.log(preload.classList);
    if (preload.classList.contains('preload_play')) {
        preload.classList.remove('preload_play');
    } else if (preload.classList.contains('preload_play_mobi')) {
        preload.classList.remove('preload_play_mobi');
    }
}, 2900)
