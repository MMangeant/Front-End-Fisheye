// Mettre le code JavaScript lié à la page photographer.html

/* récup paramètre id de la page de photographe */
const urlEl = new URLSearchParams(window.location.search);
let idUrl = urlEl.get('id');

async function displayDataPage(photographers) {
  const photographersHeader = document.querySelector('.photograph-header');
  photographers.forEach((photographer) => {
    const photographerPageModel = photographerPageFactory(photographer);
    const userCardDOM2 = photographerPageModel.getUserCardDOM2();
  });
}

async function displayMedias(medias) {
  const photographerMedias = document.querySelector('.photograph-medias');
  photographerMedias.innerHTML = '';
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const userCardDOM3 = mediaModel.getUserCardDOM3();
    photographerMedias.appendChild(userCardDOM3);
  });
}

async function displayEncartBas(photographers) {
  photographers.forEach((photographer) => {
    const encartModel = encartBasFactory(photographer);
    const userCardDOM4 = encartModel.getUserCardDOM4();
  });
}

async function initPage() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();

  let photographersTries = photographers.filter((photographer) => photographer.id == idUrl);
  let mediasTries = media.filter((elt) => elt.photographerId == idUrl);

  displayDataPage(photographersTries);
  displayMedias(mediasTries);
  displayEncartBas(photographersTries, mediasTries);

  document.querySelectorAll('#selectTris li').forEach((li) => li.addEventListener('click', (e) => clickTri(e.target.id, mediasTries)));
  document.querySelectorAll('#selectTris li').forEach((li) => li.addEventListener('keypress', (e) => clickTri(e.target.id, mediasTries)));
}

initPage();
