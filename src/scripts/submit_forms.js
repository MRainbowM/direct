const menuForm = document.querySelector('.menu_form');
const contactsForm = document.querySelector('.contacts_form');

menuForm.addEventListener('submit', (e) => {
    submitFormConnect(e);
});
contactsForm.addEventListener('submit', (e) => {
    submitFormConnect(e);
});
const submitFormConnect = (e) => {
    e.preventDefault();
    console.log('отправли формочку');
}