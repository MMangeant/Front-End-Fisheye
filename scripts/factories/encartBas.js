function encartBasFactory(data) {
  const { id, photographerId, likes, price } = data;

  [...document.querySelectorAll('.nbLikes')].forEach(like =>{ sommeLikes += Number(like.innerHTML) });

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
  
  return { id, photographerId, likes, price, getUserCardDOM4 };
}
