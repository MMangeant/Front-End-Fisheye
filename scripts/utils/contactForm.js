const modal = document.getElementById('contact_modal');
const modal_btn = document.getElementById('send_button');
const modal_contenu = document.querySelector('.modal');
const modal_champs = [...document.querySelectorAll('input, textarea')];

modal_btn.addEventListener('click', function(e) {
  e.preventDefault();
  modal_champs.forEach(champ => {
    console.log(champ.name, ' :');
    console.log(champ.value);
  })
  closeModal();
})

function displayModal() {
  modal.style.display = 'block';
  modal_contenu.focus();
}

function closeModal() {
  modal.style.display = 'none';
}

modal_btn.addEventListener('blur', function() {
  console.log('sortie focus');
  modal_contenu.focus();
})

