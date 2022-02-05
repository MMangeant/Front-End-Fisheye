// Fonction factory de l'encart des photographes sur l'accueil //

function photographerFactory(data) {
  const {
    name, id, city, country, tagline, price, portrait,
  } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const articlePhotograph = document.createElement('article');
    articlePhotograph.innerHTML += `
        <a class="lienPhotographer" href="photographer.html?id=${id}" target="_blank" alt="" aria-label="${name}" role="link">
            <img class="portraitPhotographer" src="${picture}" alt="${name}" tabindex="0">
            <h2 class="namePhotographer" tabindex="0">${name}</h2>
        </a>
        <div class="textPhotographer" role="text paragraph">
            <h3 class="adressePhotographer" tabindex="0">${city}, ${country}</h3>
            <p class="taglinePhotographer" tabindex="0">${tagline}</p>
            <p class="pricePhotographer" tabindex="0">${price}€/jour</p>
        </div>
        `;
    return (articlePhotograph);
  }

  return {
    name, picture, id, city, country, tagline, price, getUserCardDOM,
  };
}
