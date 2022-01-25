function calculCoeur(idMedia) {
  // eslint-disable-next-line no-console
  const ciblePhoto = document.querySelector(`.nb${idMedia}`);
  const coeurPlusUn = Number(ciblePhoto.textContent) + 1;
  ciblePhoto.textContent = coeurPlusUn;
  sommeLikes++;
  /* let afficheLikes =  */document.querySelector('.totalLikes').textContent = sommeLikes;
}

