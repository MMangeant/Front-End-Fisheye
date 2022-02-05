function displayModal() {
  modal.style.display = 'block';
  modalContenu.focus();
}

function closeModal() {
  modal.style.display = 'none';
}

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modalChamps.forEach((champ) => {
    console.log(champ.name, ' :');
    console.log(champ.value);
  });
  closeModal();
});

modalBtn.addEventListener('blur', () => {
  console.log('sortie focus');
  modalContenu.focus();
});
