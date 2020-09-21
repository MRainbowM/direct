const Isotope = require('isotope-layout');

const elem = document.querySelector('.cases');

// const iso = new Isotope(elem, {
//     itemSelector: '.cases_card',
//     layoutMode: 'fitRows'
// });


const iso = new Isotope('.cases', {
    // options
});

const applyFilter = (btns, btns2, activName) => {
    btns.forEach(element => {
        element.addEventListener('click', (e) => {
            const filterValue = element.getAttribute('data-filter');
            let filterValue2 = '';
            let actBtn2 = '';
            if (activName == 'year-active') {
                btns2.forEach(btn => {
                    if (btn.classList.contains('filter-active')) {
                        actBtn2 = btn;
                    }
                });
            } else if (activName == 'filter-active') {
                btns2.forEach(btn => {
                    if (btn.classList.contains('year-active')) {
                        actBtn2 = btn;
                    }
                });
            }
            filterValue2 = actBtn2.getAttribute('data-filter');
            const f = filterValue + filterValue2;
            iso.arrange({
                filter: f
            });
            element.classList.add(activName);
            btns.forEach(el => {
                if (element != el) {
                    el.classList.remove(activName);
                }
            });
        });
    });
}

const btnsGroupYears = document.querySelector('.projects-p_years');
const btnsYears = btnsGroupYears.querySelectorAll('div');

const btnsGroupProj = document.querySelector('.projects-p_filter');
const btnsProj = btnsGroupProj.querySelectorAll('a');

applyFilter(btnsYears, btnsProj, 'year-active')
applyFilter(btnsProj, btnsYears, 'filter-active')

const event = new Event("click");
setTimeout(() => {
    btnsYears[0].dispatchEvent(event);
    btnsProj[0].dispatchEvent(event);
}, 10)
