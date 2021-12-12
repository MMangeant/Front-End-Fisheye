

function totalLikesFactory(data) {
    const { id, photographerId, likes, price} = data;
    let sommeLikes = totalL;

    function getUserCardDOM4() {
            encartBas.innerHTML += `
            <div>
                <span class="totalLikes">${sommeLikes}</span>
                <img class="heart" src="assets/icons/heart-noir.svg" alt="">
            </div>
            <div>${price}€/jour</div>
            `;

        return encartBas;
    }
    return { id, photographerId, likes, price , getUserCardDOM4 }
}