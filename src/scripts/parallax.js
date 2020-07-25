const imgs = document.querySelectorAll('.parallax');

window.addEventListener("mousemove", (e) => {
    imgs.forEach((img) => {
        let xPos = (e.clientX / img.clientWidth - 0.5) * 15;
        let yPos = (e.clientY / img.clientHeight - 0.5) * 15;
        img.style.transform = `translate3d(0px, 0px, 0px) rotateY(${yPos}deg) rotateX(${xPos}deg)`
    });
})