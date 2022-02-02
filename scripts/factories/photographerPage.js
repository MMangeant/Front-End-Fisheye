
function photographerPageFactory(data) {

  const { name, id, city, country, tagline, portrait } = data;
  const picture = `assets/photographers/${portrait}`;
  function getUserCardDOM2() {

    photographersHeader.innerHTML += `
      <div class="textPhotographer">
        <h2 class="namePhotographer" tabindex="0" >${name}</h2>
        <h3 class="adressePhotographer" tabindex="0">${city}, ${country}</h3>
        <p class="taglinePhotographer" tabindex="0">${tagline}</p>
      </div>
      <button id="contact_button" onclick="displayModal()" tabindex="0">Contactez-moi</button>
      <div>
        <img  class="portraitPhotographer" src="${picture}" alt="${name}" tabindex="0">
      </div>
    `;

    nameContact.innerHTML += `${name}`;

    return photographersHeader;
    return nameContact;
  }

  return { name, picture, id, city, country, tagline, getUserCardDOM2 };
}
