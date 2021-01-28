const { config } = require("../config");

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
    let y = e.clientY - 40;
    cursorArrow.style.left = x + 'px';
    cursorArrow.style.top = y + 'px';

});

/// start hover ссылок
export const addEventForLinks = (link) => {
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
};

const links = document.querySelectorAll('.cursor_link');

links.forEach((link) => {
    addEventForLinks(link);
});
/// end hover ссылок

/// start Стрелочки перехода
export const addEventForLinksDjump = (link) => {
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
};

const linksDjump = document.querySelectorAll('.cursor_jump');

linksDjump.forEach((link) => {
    addEventForLinksDjump(link);
});
/// end Стрелочки перехода

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

/// start hover ссылок на белом
export const addEventForLinksWhite = (link) => {
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
};
const whiteElements = document.querySelectorAll('.cursor_on_white');
whiteElements.forEach((link) => {
    addEventForLinksWhite(link);
});
/// end hover ссылок на белом


const reviewImgElements = document.querySelectorAll('[data-review-img]');
console.log(reviewImgElements);
reviewImgElements.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('review-img');
            cursorDot.style.opacity = 0;
            let url = link.getAttribute('data-review-img');
            console.log(url);
            cursor.style.backgroundImage = url;
        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('review-img');
            cursorDot.style.opacity = null;
            cursor.style.backgroundImage = null;
        });
    })
});



//arrow

const initArrow = () => {
    cursorArrow.style.transform = 'rotate(-135deg) scale(0.5)';
    cursorArrow.style.opacity = 0;
}

initArrow();





