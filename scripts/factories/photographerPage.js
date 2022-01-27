/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function photographerPageFactory(data) {
  // eslint-disable-next-line object-curly-newline
  const { name, id, city, country, tagline, portrait } = data;
  const picture = `assets/photographers/${portrait}`;
  function getUserCardDOM2() {
    // const headerPhotographer = document.querySelector('.photograph-header');
    photographersHeader.innerHTML += `
      <div class="textPhotographer">
        <h2 class="namePhotographer" tabindex="0" >${name}</h2>
        <h3 class="adressePhotographer" tabindex="0">${city}, ${country}</h3>
        <p class="taglinePhotographer" tabindex="0">${tagline}</p>
      </div>
      <button class="contact_button" onclick="displayModal()" tabindex="0">Contactez-moi</button>
      <div>
        <img  class="portraitPhotographer" src="${picture}" alt="${name}" tabindex="0">
      </div>
    `;
    return photographersHeader;
  }
  // eslint-disable-next-line object-curly-newline
  return { name, picture, id, city, country, tagline, getUserCardDOM2 };
}
