const imagesLoaded = require('imagesloaded');
const Isotope = require('isotope-layout');

const applyFilter = (btns, btns2, activName, iso) => {
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
            let f = filterValue + filterValue2;
            iso.arrange({
                filter: f
            });

            // плавная переключалка в фильтре сайты/дизайн
            const swipe = document.querySelector('.projects-p_filter_swipe');
            if (filterValue == '.filter-site') {
                swipe.style.left = null;
            } else if (filterValue == '.filter-dsg') {
                swipe.style.left = '50%';
            }

            element.classList.add(activName);
            btns.forEach(el => {
                if (element != el) {
                    el.classList.remove(activName);
                }
            });
        });
    });
}

const elem = document.querySelector('.cases');

imagesLoaded(elem, function () {
    if (elem) {
        
        const iso = new Isotope('.cases', {});
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
            applyFilter(btnsYears, btnsProj, 'year-active', iso);
            applyFilter(btnsProj, btnsYears, 'filter-active', iso);
            // const event = new Event("click");
            // const f = btnsYears[0].getAttribute('data-filter') + btnsProj[0].getAttribute('data-filter');
            const f = '.filter-site';
            iso.arrange({
                filter: f
            });
        }
    }
});

