import IMask from 'imask';

const iPhones = document.querySelectorAll('.phone');
const maskOptions = {
  mask: '+{7}(#00)000-00-00',
  definitions: {
    '#': /[1,2,3,4,5,6,7,9,0]/
  }
  // prepare: function (str) {
  //   // debugger
  //   if (str === '8') {
  //     return '7';
  //   }
  //   return str;
  // }
};

iPhones.forEach(element => {
  let mask = IMask(element, maskOptions);
});


