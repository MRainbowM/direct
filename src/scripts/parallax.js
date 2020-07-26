// const imgs = document.querySelectorAll('.parallax');

// window.addEventListener("mousemove", (e) => {
//     imgs.forEach((img) => {
//         let xPos = (e.clientX / img.clientWidth - 0.5) * 15;
//         let yPos = (e.clientY / img.clientHeight - 0.5) * 15;
//         img.style.transform = `translate3d(0px, 0px, 0px) rotateY(${yPos}deg) rotateX(${xPos}deg)`
//     });
// })

const parallax = document.querySelectorAll('.parallax_container');

parallax.forEach((contsiner) => {
    contsiner.addEventListener("mousemove", (e) => {
        const img = contsiner.querySelector('.parallax_img');
        let xPos = (e.clientX / img.clientWidth - 0.5) * 15;
        let yPos = (e.clientY / img.clientHeight - 0.5) * 15;
        img.style.transform = `translate3d(0px, 0px, 0px) rotateY(${yPos}deg) rotateX(${xPos}deg)`
    });
});

parallax.forEach((contsiner) => {
    contsiner.addEventListener("mouseout", (e) => {
        const img = contsiner.querySelector('.parallax_img');
        img.style.transform = `translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)`
    });
});