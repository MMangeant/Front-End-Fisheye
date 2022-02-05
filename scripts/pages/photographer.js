// Récupération du paramètre id de la page de photographe //
const urlEl = new URLSearchParams(window.location.search);
let idUrl = urlEl.get('id');

// Fonction pour afficher les informations du photographe sur l'entête de sa page //
async function displayDataPage(photographers) {
  const photographersHeader = document.querySelector('.photograph-header');
  photographers.forEach((photographer) => {
    const photographerPageModel = photographerPageFactory(photographer);
    const userCardDOM2 = photographerPageModel.getUserCardDOM2();
  });
}

// Fonction pour afficher toutes les photos du photographe //
async function displayMedias(medias) {
  const photographerMedias = document.querySelector('.photograph-medias');
  photographerMedias.innerHTML = '';
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const userCardDOM3 = mediaModel.getUserCardDOM3();
    photographerMedias.appendChild(userCardDOM3);
  });
}

// Fonction pour afficher l'encart fixe en bas de page avec le prix et le cumul des likes //
async function displayEncartBas(photographers) {
  photographers.forEach((photographer) => {
    const encartModel = encartBasFactory(photographer);
    const userCardDOM4 = encartModel.getUserCardDOM4();
  });
}

async function initPage() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();

  // Tri des infos récupérées du JSON pour la correspondance avec id de l'url
  let photographersTries = photographers.filter((photographer) => photographer.id == idUrl);
  let mediasTries = media.filter((elt) => elt.photographerId == idUrl);

  // Exécution des fonctions d'affichage de la page (infos, medias, encart du bas)
  displayDataPage(photographersTries);
  displayMedias(mediasTries);
  displayEncartBas(photographersTries, mediasTries);

  // Exécution fonction de tri, au click et au clavier
  document.querySelectorAll('#selectTris li').forEach((li) => li.addEventListener('click', (e) => clickTri(e.target.id, mediasTries)));
  document.querySelectorAll('#selectTris li').forEach((li) => li.addEventListener('keypress', (e) => clickTri(e.target.id, mediasTries)));
}

initPage();
