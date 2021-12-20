/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
function mediaFactory(data) {
  // eslint-disable-next-line object-curly-newline
  const { title, likes, id, date, image, video } = data;
  const picture = `assets/medias/${image}`;
  const pictureVideo = `assets/medias/${video}`;
  function ImageOuVideo() {
    if (data.image) {
      return `
        <a class="lienPhoto" href="${picture}" alt="" data-idmedia="${id}">
          <img class="imgPhoto" src="${picture}" alt="photo" data-type="img"></img>
        </a>`;
    }
    return `
      <a class="lienPhoto" href="${pictureVideo}" alt="" data-idmedia="${id}">
        <video class="imgPhoto" src="${pictureVideo}" alt="video" data-type="video"></video>
      </a>`;
  }
  function getUserCardDOM3() {
    const mediasPhotographer = document.createElement('div');
    mediasPhotographer.innerHTML += `
      <div class="encartPhoto" data-likes="${likes}" data-title="${title}" data-date="${date}">
        ${ImageOuVideo()}
        <div class="textPhoto">
          <h3 class="nomPhoto">${title}</h3>
            <button class="likesPhoto" data-idmedia="${id}" data-likes="${likes}">
              <span class="nbLikes">${likes}</span>
                <img class="heart" src="assets/icons/heart.svg" alt="">
            </button>
        </div>
      </div>
    `;
    return mediasPhotographer;
  }
  // eslint-disable-next-line object-curly-newline
  return { title, likes, id, date, image, getUserCardDOM3 };
}
