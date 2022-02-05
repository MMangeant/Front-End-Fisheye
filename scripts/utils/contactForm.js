// Fonction d'affichage de la modale de contact //
function displayModal() {
  modal.style.display = 'block';
  modalContenu.focus();
}

// Fonction de fermeture de la modale de contact //
function closeModal() {
  modal.style.display = 'none';
}

// Fonction du bouton Envoyer de la modale //
modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // log des champs
  modalChamps.forEach((champ) => {
    console.log(champ.name, ' :');
    console.log(champ.value);
  });
  closeModal();
});
