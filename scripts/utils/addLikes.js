function calculCoeur(){
    let dataIdPhoto = this.getAttribute('data-idmedia');
    let ciblePhoto = document.querySelector(`[data-idmedia='${dataIdPhoto}'] .nbLikes`)
    let coeurPlusUn = Number(ciblePhoto.textContent)+1 ;
    ciblePhoto.textContent = coeurPlusUn;
    sommeLikes++;
    afficheLikes.textContent = sommeLikes;
}