// Fonction factory de l'encart fixe en bas //

function encartBasFactory(data) {
  const {
    id, photographerId, likes, price,
  } = data;
  [...document.querySelectorAll('.nbLikes')].forEach((like) => { sommeLikes += Number(like.innerHTML); });
  function getUserCardDOM4() {
    encartBas.innerHTML += `
      <div tabindex="0">
        <span class="totalLikes" tabindex="0" role="text">${sommeLikes}</span>
        <img class="heart" src="./assets/icons/heart-noir.svg" alt="">
      </div>
      <div tabindex="0" role="text">${price}€/jour</div>
    `;
    return encartBas;
  }

  return {
    id, photographerId, likes, price, getUserCardDOM4,
  };
}
