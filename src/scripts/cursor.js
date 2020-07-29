let cursors = document.querySelectorAll('.cursor');
window.addEventListener("mousemove", (e) => {
    cursors.forEach((cursor) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});


const links = document.querySelectorAll('.cursor_link');
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

const linksDjump = document.querySelectorAll('.cursor_jump');
linksDjump.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('jump');
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('jump');
        });
    })
});

const redElements = document.querySelectorAll('.cursor_on_red');
redElements.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('on_red');
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('on_red');
        });
    })
});

const blackElements = document.querySelectorAll('.cursor_on_black');
blackElements.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('on_black');
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('on_black');
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



