let cursors = document.querySelectorAll('.cursor');
window.addEventListener("mousemove", (e) => {
    cursors.forEach((cursor) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        // cursor.style.transform = 'translate3d('+e.clientX + 'px, 0,' + e.clientY + 'px)';
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

const whiteElements = document.querySelectorAll('.cursor_on_white');
whiteElements.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('on_white');
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('on_white');
        });
    })
});

const review1Elements = document.querySelectorAll('.cursor_review-1');
review1Elements.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('review-1');
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('review-1');
        });
    })
});

const review2Elements = document.querySelectorAll('.cursor_review-2');
review2Elements.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('review-2');
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('review-2');
        });
    })
});
const review3Elements = document.querySelectorAll('.cursor_review-3');
review3Elements.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('review-3');
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('review-3');
        });
    })
});
const review4Elements = document.querySelectorAll('.cursor_review-4');
review4Elements.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('review-4');
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('review-4');
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



