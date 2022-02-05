// Fonction factory de l'entête infos des photographes //

function photographerPageFactory(data) {
  const {
    name, id, city, country, tagline, portrait,
  } = data;
  const picture = `assets/photographers/${portrait}`;
  function getUserCardDOM2() {
    photographersHeader.innerHTML += `
      <div class="textPhotographer">
        <h1 class="namePhotographer" tabindex="0" role="header">${name}</h2>
        <h2 class="adressePhotographer" tabindex="0" role="text">${city}, ${country}</h3>
        <p class="taglinePhotographer" tabindex="0" role="text">${tagline}</p>
      </div>
      <button id="contact_button" onclick="displayModal()" tabindex="0" aria-label="contact me">Contactez-moi</button>
      <div>
        <img  class="portraitPhotographer" src="${picture}" alt="${name}" tabindex="0" role="image">
      </div>
    `;
    nameContact.innerHTML += `${name}`;
    return photographersHeader;
  }
  return {
    name, picture, id, city, country, tagline, getUserCardDOM2,
  };
}
