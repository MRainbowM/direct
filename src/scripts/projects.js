const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', (e) => {
    cards.forEach((card) => {
        const { top } = card.getBoundingClientRect();
        const bottom = window.innerHeight - card.clientHeight - top
        const breakPointOpacity = window.innerHeight * 0.08;
        const isOpacity = top < breakPointOpacity || bottom < breakPointOpacity
        const active = window.innerHeight - card.clientHeight + 300
        if (top <= active) {
            card.classList.remove('card_hide');
            card.classList.add('card_show');
            card.classList.add('card_active');
            const title = card.querySelector('.card_title');
        }
        if (isOpacity) {
            card.classList.remove('card_active');
            const img = card.querySelector('.parallax_img');
            // img.style.transition = '0.3s'
            img.style.transform = ` rotateY(0deg) rotateX(0deg)`
            // setTimeout(() => {
            //     img.style.transition = null
            // }, 300)

        } else {
            card.classList.add('card_active');
        }
    })
});
window.addEventListener("mousemove", (e) => {
    const card = document.querySelector('.card_active');
    const img = card.querySelector('.parallax_img');
    let xPos = (e.clientX / img.clientWidth - 0.5) * 10;
    let yPos = (e.clientY / img.clientHeight - 0.5) * 10;
    img.style.transform = `rotateY(${yPos}deg) rotateX(${xPos}deg)`
});