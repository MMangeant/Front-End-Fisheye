/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
function encartBasFactory(data) {
  // eslint-disable-next-line object-curly-newline
  const { id, photographerId, likes, price } = data;

  /* let addLikes =  */[...document.querySelectorAll('.nbLikes')].forEach(like =>{ sommeLikes += Number(like.innerHTML) });

  function getUserCardDOM4() {
    encartBas.innerHTML += `
      <div tabindex="0">
        <span class="totalLikes" tabindex="0">${sommeLikes}</span>
        <img class="heart" src="./assets/icons/heart-noir.svg" alt="">
      </div>
      <div tabindex="0">${price}€/jour</div>
    `;
    return encartBas;
  }
  // eslint-disable-next-line object-curly-newline
  return { id, photographerId, likes, price, getUserCardDOM4 };
}
