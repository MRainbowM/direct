const Isotope = require('isotope-layout');

const elem = document.querySelector('.cases');

// const iso = new Isotope(elem, {
//     itemSelector: '.cases_card',
//     layoutMode: 'fitRows'
// });


const iso = new Isotope('.cases', {
    // options
});

const applyFilter = (btns, activName) => {
    btns.forEach(element => {
        element.addEventListener('click', (e) => {
            const filterValue = element.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            });
            element.classList.add(activName);
            btns.forEach(el => {
                if(element != el) {
                    el.classList.remove(activName);
                }
            });
        });
    });
}

const btnsGroupYears = document.querySelector('.projects-p_years');
const btnsYears = btnsGroupYears.querySelectorAll('a');
applyFilter(btnsYears, 'year-active')

const btnsGroupProj = document.querySelector('.projects-p_filter');
const btnsProj = btnsGroupProj.querySelectorAll('a');
applyFilter(btnsProj, 'filter-active')

const event = new Event("click");
btnsYears[0].dispatchEvent(event);
