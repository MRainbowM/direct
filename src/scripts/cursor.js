let cursors = document.querySelectorAll('.cursor');
window.addEventListener("mousemove", (e) => {
    cursors.forEach((cursor) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});


const links = document.querySelectorAll('a');
links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('active');
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('active');
        });
    })
});
// const links = document.querySelectorAll('.cursor-link');
// links.forEach((link) => {
//     link.addEventListener('mouseenter', () => {
//         cursors.forEach((cursor) => {
//             cursor.classList.add('active');
//         });
//     })
//     link.addEventListener('mouseleave', () => {
//         cursors.forEach((cursor) => {
//             cursor.classList.remove('active');
//         });
//     })
// });



