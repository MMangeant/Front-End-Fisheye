// Fonction factory de l'encart des médias //

function mediaFactory(data) {
  const {
    title, likes, id, date, image, video,
  } = data;
  const picture = `assets/medias/${image}`;
  const pictureVideo = `assets/medias/${video}`;
  function ImageOuVideo() {
    if (data.image) {
      return `
      <img class="imgPhoto" src="${picture}" alt="${title}" data-type="photo" data-title="${title}" class="sourceLightbox"></img>`;
    }
    return `
      <video class="imgPhoto" src="${pictureVideo}" alt="${title}" data-type="video" data-title="${title}" >
        <source src="${pictureVideo}" type="video/mp4" class="sourceLightbox" data-title="${title}" data-type="video">
      </video>`;
  }
  function getUserCardDOM3() {
    const mediasPhotographer = document.createElement('div');
    mediasPhotographer.innerHTML += `
      <div class="encartPhoto" data-likes="${likes}" data-title="${title}" data-date="${date}">
        <div onclick="lightbox(this)" onKeyUp="if (event.keyCode == 13) lightbox(this)" class="container-img" alt="${title}" data-idmedia="${id}" tabindex="0" role="image link" aria-label="ouvre la vue lightbox">
          ${ImageOuVideo()}
        </div>
        <div class="textPhoto">
          <h3 class="nomPhoto" tabindex="0" aria-label="${title}" role="text">${title}</h3>
          <button class="likesPhoto" data-idmedia="${id}" data-likes="${likes}" role="image" aria-label="likes">
            <span class="nbLikes nb${id}">${likes}</span>
            <img class="heart heart-likes" src="assets/icons/heart.svg" alt="" data-likes="${likes}" data-idmedia="${id}" onclick="calculCoeur(${id})">
          </button>
        </div>
      </div>
    `;

    return mediasPhotographer;
  }

  return {
    title, likes, id, date, image, getUserCardDOM3,
  };
}
