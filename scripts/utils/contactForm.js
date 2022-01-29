/* eslint-disable linebreak-style */
const modal = document.getElementById('contact_modal');
const modal_contenu = document.querySelector('.modal');

// eslint-disable-next-line no-unused-vars
function displayModal() {
  modal.style.display = 'block';
  modal_contenu.focus();
}
// eslint-disable-next-line no-unused-vars
function closeModal() {
  modal.style.display = 'none';
  
}


//KEYDOWN//
const close_modal = document.querySelector('#closeModal');
close_modal.addEventListener('keydown', event => {
  if (event.code == 'Enter') {
    closeModal();
  }
});
