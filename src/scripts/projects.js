const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', (e) => {

    cards.forEach((card) => {
        const { top } = card.getBoundingClientRect();
        const active = window.innerHeight - card.clientHeight + 300
        if (top <= active) {
            card.classList.remove('card_hide');
            card.classList.add('card_show');
            const title = card.querySelector('.card_title');
        }
    })
});
