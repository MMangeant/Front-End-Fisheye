/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
function photographerFactory(data) {
  // eslint-disable-next-line object-curly-newline
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const articlePhotograph = document.createElement('article');
    articlePhotograph.innerHTML += `
        <a class="lienPhotographer" href="photographer.html?id=${id}" target="_blank" alt="" aria-label="${name}">
            <img class="portraitPhotographer" src="${picture}" alt="photographer photo">
            <h2 class="namePhotographer">${name}</h2>
        </a>
        <div class="textPhotographer">
            <h3 class="adressePhotographer">${city}, ${country}</h3>
            <p class="taglinePhotographer">${tagline}</p>
            <p class="pricePhotographer">${price}€/jour</p>
        </div>
        `;
    return (articlePhotograph);
  }
  // eslint-disable-next-line object-curly-newline
  return { name, picture, id, city, country, tagline, price, getUserCardDOM };
}
