import IMask from 'imask';

const iPhones = document.querySelectorAll('.phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
iPhones.forEach(element => {
    let mask = IMask(element, maskOptions);
});