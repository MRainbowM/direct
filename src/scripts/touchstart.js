const burger = document.querySelector('.burger');
burger.addEventListener('touchstart', (e) => {
    burger.classList.remove('show_hover');
});


const cursors = document.querySelectorAll('.cursor');

document.addEventListener('touchstart', (e) => {
    cursors.forEach(cursor => {
        cursor.style.display = 'none';
    });
});

// document.addEventListener('mouseover', (e) => {
//     cursors.forEach(cursor => {
//         cursor.style.display = null;
//     });
// });