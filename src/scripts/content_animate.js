const elContentHide = document.querySelectorAll('.content_hide');

const setDelay = (section) => {
    if (section) {
        const contactsHide = section.querySelectorAll('.content_hide');
        let i = 0;
        contactsHide.forEach(element => {
            i = i + 0.2;
            element.style.transitionDelay = i + 's';
        });
    }
}

const reviewsSection = document.querySelector('.reviews');
setDelay(reviewsSection);

const peoplesSection = document.querySelector('.peoples');
setDelay(peoplesSection);

const eventsSection = document.querySelector('.events');
setDelay(eventsSection);

const contactsSection = document.querySelector('.contacts');
setDelay(contactsSection);

const footerSection = document.querySelector('.content_hide_footer');
const footerHide = document.querySelectorAll('.content_hide');
footerHide.forEach(element => {
    if (element.classList.contains('footer_mail') ||
        element.classList.contains('footer_links')) {
        element.style.transitionDelay = '0.2s';
    }
    if (element.classList.contains('footer_logo') ||
        element.classList.contains('footer_info')) {
        element.style.transitionDelay = '0.4s';
    }
});

const showElements = () => {
    elContentHide.forEach(element => {
        const { offsetTop } = element;
        const { scrollTop } = document.scrollingElement;
        let scrollPoint = scrollTop + window.innerHeight;
        const isShow = offsetTop < scrollPoint;
        if (isShow) {
            element.classList.add('content_show');
            setTimeout(() => {
                element.classList.remove('content_hide');
            }, 2000);

        }
    });
}

window.addEventListener('scroll', (e) => {
    showElements();
});