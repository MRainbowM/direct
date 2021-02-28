const { config } = require("../config");

let cursors = document.querySelectorAll('.cursor');

let cursorShadow = document.querySelector('.cursor-shadow');
let cursorDot = document.querySelector('.cursor-dot');
let cursorArrow = document.querySelector('.cursor-arrow');

let cursorsReview = document.querySelectorAll('.cursor-review-img');

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

    let x = e.clientX - 60;
    let y = e.clientY - 40;
    cursorArrow.style.left = x + 'px';
    cursorArrow.style.top = y + 'px';

    cursorsReview.forEach(cursor => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

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
export const addEventForLinksDjump = (link, color = null) => {
    link.addEventListener('mouseenter', () => {
        cursors.forEach((cursor) => {
            cursor.classList.add('jump');

            cursorArrow.style.transform = 'rotate(0deg) scale(1)';
            cursorArrow.style.opacity = 1;
            cursorArrow.style.color = color;

        });
    })
    link.addEventListener('mouseleave', () => {
        cursors.forEach((cursor) => {
            cursor.classList.remove('jump');

            cursorArrow.style.transform = 'rotate(-135deg) scale(0.5)';
            cursorArrow.style.opacity = 0;
            // cursorArrow.style.color = null;

        });
    })
};

const linksDjump = document.querySelectorAll('.cursor_jump');
const linksDjumpWhite = document.querySelectorAll('.cursor_jump_white');
const linksDjumpBlack = document.querySelectorAll('.cursor_jump_black');

linksDjump.forEach((link) => {
    addEventForLinksDjump(link);
});
linksDjumpWhite.forEach((link) => {
    addEventForLinksDjump(link, 'white');
});
linksDjumpBlack.forEach((link) => {
    addEventForLinksDjump(link, 'black');
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
const cursorReviews = document.querySelectorAll('[data-cursor-review-id]');
reviewImgElements.forEach((link) => {

    let review_id = link.getAttribute('data-review-img');
    link.addEventListener('mouseenter', () => {
        cursorReviews.forEach((cursor_review) => {
            let id = cursor_review.getAttribute('data-cursor-review-id');
            if (id == review_id) {
                cursorShadow.style.opacity = 0;
                cursorDot.style.opacity = 0;

                cursor_review.style.height = '160px';
                cursor_review.style.width = '160px';
            }
        });
    });

    link.addEventListener('mouseleave', () => {
        cursorReviews.forEach((cursor_review) => {
            let id = cursor_review.getAttribute('data-cursor-review-id');
            if (id == review_id) {
                cursor_review.style.height = '0px';
                cursor_review.style.width = '0px';

                cursorShadow.style.opacity = null;
                cursorDot.style.opacity = null;
            }
        });
    })
});

//arrow

const initArrow = () => {
    cursorArrow.style.transform = 'rotate(-135deg) scale(0.5)';
    cursorArrow.style.opacity = 0;
}

initArrow();
