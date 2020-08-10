const elContentHide = document.querySelectorAll('.content_hide');

const peoplesSection = document.querySelector('.peoples');
const peoplesHide = peoplesSection.querySelectorAll('.content_hide');
let i = 0;
peoplesHide.forEach(element => {
    i = i + 0.3;
    element.style.transitionDelay = i + 's';
});

const eventsSection = document.querySelector('.events');
const eventsHide = eventsSection.querySelectorAll('.content_hide');
i = 0;
eventsHide.forEach(element => {
    i = i + 0.3;
    element.style.transitionDelay = i + 's';
});

const contactsSection = document.querySelector('.contacts');
const contactsHide = contactsSection.querySelectorAll('.content_hide');
i = 0;
contactsHide.forEach(element => {
    i = i + 0.3;
    element.style.transitionDelay = i + 's';
});




const showElements = () => {
    elContentHide.forEach(element => {
        const { offsetTop } = element;
        const { scrollTop } = document.scrollingElement;
        let scrollPoint = scrollTop + window.innerHeight;
        const isShow = offsetTop < scrollPoint;
        if (isShow) {
            // debugger
            element.classList.add('content_show');
            // setTimeout(() => {
            // }, 600);
            setTimeout(() => {
                element.classList.remove('content_hide');
            }, 2000);

        }
    });
}

window.addEventListener('scroll', (e) => {
    showElements();
});