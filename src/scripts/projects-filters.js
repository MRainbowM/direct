var Isotope = require('isotope-layout');

var elem = document.querySelector('.cases');

var iso = new Isotope(elem, {
    // options
    itemSelector: '.cases_card',
    layoutMode: 'fitRows'
});

// element argument can be a selector string
//   for an individual element
var iso = new Isotope('.cases', {
    // options
});

// iso.arrange({
//     // item element provided as argument
//     filter: function (itemElem) {
//         // var number = itemElem.querySelector('.year_2020').innerText;
//         // return parseInt(number, 10) > 50;
//         // var year = itemElem.getAttribute('data-filter_year');
//         var number = itemElem.querySelector('.year2020');
//         return number;
//     }
// });

const btnsGroup = document.querySelector('.projects-p_years');
const btnsYears = btnsGroup.querySelectorAll('a');

btnsYears.forEach(element => {
    element.addEventListener('click', (e) => {
        const filterValue = element.getAttribute('data-filter');
        iso.arrange({
            filter: filterValue
        });
    });
});

