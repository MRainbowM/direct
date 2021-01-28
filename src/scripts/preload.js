const preload = document.querySelector('.preload');
if(preload){
    if (window.innerWidth > 765) {
        preload.classList.add('preload_play');
    } else {
        preload.classList.add('preload_play_mobi');
    }
    setTimeout(() => {
        preload.classList.remove('preload');
        if (preload.classList.contains('preload_play')) {
            preload.classList.remove('preload_play');
        } else if (preload.classList.contains('preload_play_mobi')) {
            preload.classList.remove('preload_play_mobi');
        }
    }, 2900)
}
