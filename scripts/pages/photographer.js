// Mettre le code JavaScript lié à la page photographer.html

/* récup paramètre id de la page de photographe */
const urlEl = new URLSearchParams(window.location.search);
// eslint-disable-next-line prefer-const
let idUrl = urlEl.get('id');

async function displayDataPage(photographers) {
  const photographersHeader = document.querySelector('.photograph-header');
  // eslint-disable-next-line eqeqeq
  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerPageModel = photographerPageFactory(photographer);
    const userCardDOM2 = photographerPageModel.getUserCardDOM2();
  });
}

async function displayMedias(medias) {
  const photographerMedias = document.querySelector('.photograph-medias');
  // eslint-disable-next-line eqeqeq
  photographerMedias.innerHTML = '';
  medias.forEach((media) => {
    // eslint-disable-next-line no-undef
    const mediaModel = mediaFactory(media);
    const userCardDOM3 = mediaModel.getUserCardDOM3();
    photographerMedias.appendChild(userCardDOM3);
  });
}

// async function displayMediasTri(medias) {
//   medias.filter((media) => media.photographerId == idUrl).forEach((media) => {
//     const mediaModel = mediaFilterFactory(media);
//     const userCardDOM3Tri = mediaModel.getUserCardDOM3Tri();
//     photographerMedias.appendChild(userCardDOM3Tri);
//   });
// }

async function displayEncartBas(photographers) {
  const encartBas = document.querySelector('.encart-bas');
  // eslint-disable-next-line eqeqeq
  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const encartModel = encartBasFactory(photographer); 
    const userCardDOM4 = encartModel.getUserCardDOM4();
    // encartBas.appendChild(userCardDOM4); // ?????? //
  });
}

// function bonjour() {
//   console.log("amazziiiiiiing")
// }



async function initPage() {
  // Récupère les datas des photographes
  // eslint-disable-next-line no-undef
  const { photographers, media } = await getPhotographers();

  let photographersTries = photographers.filter((photographer) => photographer.id == idUrl);
  let mediasTries = media.filter((media) => media.photographerId == idUrl);

  displayDataPage(photographersTries);
  displayMedias(mediasTries);
  displayEncartBas(photographersTries, mediasTries);
  // eslint-disable-next-line no-console
  // console.log(media);
  // amazing();
  
  // array.forEach(element => console.log('yoyo'));
  
  // array.forEach(function (element){
    //    console.log('yoyo');
    // });

    // lightbox();
    
    document.querySelectorAll('#selectTris li').forEach(li => li.addEventListener('click', e => clickTri(e.target.id, mediasTries)))
    document.querySelectorAll('#selectTris li').forEach(li => li.addEventListener('keypress', e => clickTri(e.target.id, mediasTries)))

  
}

initPage();





