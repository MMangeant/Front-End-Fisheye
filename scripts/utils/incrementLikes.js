// Fonction factory de l'incrémentation des likes de chaque photos et de l'encart du bas //

function calculCoeur(idMedia) {
  const ciblePhoto = document.querySelector(`.nb${idMedia}`);
  const coeurPlusUn = Number(ciblePhoto.textContent) + 1;
  ciblePhoto.textContent = coeurPlusUn;
  sommeLikes++;
  document.querySelector('.totalLikes').textContent = sommeLikes;
}
