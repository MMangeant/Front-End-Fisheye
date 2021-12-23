/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
function totalLikesFactory(data) {
  // eslint-disable-next-line object-curly-newline
  const { id, photographerId, likes, price } = data;

  /* let addLikes =  */[...document.querySelectorAll('.nbLikes')].forEach(like =>{ sommeLikes += Number(like.innerHTML) });

  function getUserCardDOM4() {
    encartBas.innerHTML += `
      <div>
        <span class="totalLikes">${sommeLikes}</span>
        <img class="heart" src="./assets/icons/heart-noir.svg" alt="">
      </div>
      <div>${price}€/jour</div>
    `;
    return encartBas;
  }
  // eslint-disable-next-line object-curly-newline
  return { id, photographerId, likes, price, getUserCardDOM4 };
}
