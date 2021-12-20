/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
function calculCoeur() {
  const dataIdPhoto = this.getAttribute('data-idmedia');
  const ciblePhoto = document.querySelector(`[data-idmedia='${dataIdPhoto}'] .nbLikes`);
  const coeurPlusUn = Number(ciblePhoto.textContent) + 1;
  ciblePhoto.textContent = coeurPlusUn;
  // eslint-disable-next-line no-undef
  sommeLikes++;
  // eslint-disable-next-line no-undef
  afficheLikes.textContent = sommeLikes;
}
