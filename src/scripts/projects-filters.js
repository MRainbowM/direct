
const elem = document.querySelector('.cases');

if (elem) {
    const Isotope = require('isotope-layout');
    const iso = new Isotope('.cases', {});

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
    let btnsYears = '';
    if (btnsGroupYears) {
        btnsYears = btnsGroupYears.querySelectorAll('div');
    }

    const btnsGroupProj = document.querySelector('.projects-p_filter');
    let btnsProj = '';
    if (btnsGroupProj) {
        btnsProj = btnsGroupProj.querySelectorAll('a');
    }

    if (btnsYears != '' && btnsProj != '') {
        applyFilter(btnsYears, btnsProj, 'year-active');
        applyFilter(btnsProj, btnsYears, 'filter-active');
        const event = new Event("click");
        const f = btnsYears[0].getAttribute('data-filter') + btnsProj[0].getAttribute('data-filter');
        iso.arrange({
            filter: f
        });
    }
}
