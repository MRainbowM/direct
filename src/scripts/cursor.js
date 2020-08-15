let cursors = document.querySelectorAll('.cursor');

let cursorShadow = document.querySelector('.cursor-shadow');
let cursorDot = document.querySelector('.cursor-dot');
let cursorArrow = document.querySelector('.cursor-arrow');


window.addEventListener("mousemove", (e) => {
    // cursors.forEach((cursor) => {
    //     // cursor.style.left = e.clientX + 'px';
    //     // cursor.style.top = e.clientY + 'px';
    //     cursor.style.transform = 'translate3d('+e.clientX + 'px, ' + e.clientY + 'px, 0)';
    //     // cursor.style.transform = 'translate3d('+e.clientX + 'px, 0,' + e.clientY + 'px)';
    // });
    // cursorDot.style.transform = 'translate3d(' + e.clientX + 'px, 0,' + e.clientY + 'px)';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorShadow.style.transform = 'matrix(1, 0, 0, 1,' + e.clientX + ', ' + e.clientY + ')';
    // cursorArrow.style.transform = 'matrix(1, 0, 0, 1,' + e.clientX + ', ' + e.clientY + ')';

    let x = e.clientX - 60;
    let y = e.clientY - 55;
    cursorArrow.style.left = x + 'px';
    cursorArrow.style.top = y + 'px';

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

            cursorArrow.style.transform = 'rotate(0deg) scale(1)';
            cursorArrow.style.opacity = 1;

        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('jump');

            cursorArrow.style.transform = 'rotate(-135deg) scale(0.5)';
            cursorArrow.style.opacity = 0;

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


//arrow

const initArrow = () => {
    const { Back } = window;
    // const cursor = document.querySelector(".cursor-arrow");
    const cursorIcon = document.querySelector(".cursor-arrow__icon");
    const cursorBox = cursorArrow.getBoundingClientRect();
    // const easing = Back.easeOut.config(1.7);
    const animationDuration = 0.3;
    // const cursorSide = null; // will be "left" or "right"
    const cursorInsideSwiper = false;
    cursorArrow.style.transform = 'rotate(-135deg) scale(0.5)';
    cursorArrow.style.opacity = 0;
}

initArrow();





