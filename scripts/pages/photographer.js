// Mettre le code JavaScript lié à la page photographer.html

/* récup paramètre id de la page de photographe */
const urlEl = new URLSearchParams(window.location.search);
// eslint-disable-next-line prefer-const
let idUrl = urlEl.get('id');

async function displayDataPage(photographers) {
  const photographersHeader = document.querySelector('.photograph-header');
  // eslint-disable-next-line eqeqeq
  photographers.filter((photographer) => photographer.id == idUrl).forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerPageModel = photographerPageFactory(photographer);
    const userCardDOM2 = photographerPageModel.getUserCardDOM2();
    // photographersHeader.appendChild(userCardDOM2); // ?????? //
  });
}

async function displayMedias(medias) {
  const photographerMedias = document.querySelector('.photograph-medias');
  // eslint-disable-next-line eqeqeq
  medias.filter((media) => media.photographerId == idUrl).forEach((media) => {
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
  photographers.filter((photographer) => photographer.id == idUrl).forEach((photographer) => {
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
  displayDataPage(photographers);
  displayMedias(media);
  displayEncartBas(photographers, media);
  // eslint-disable-next-line no-console
  // console.log(media);
  // amazing();
  lightbox();
  // document.querySelector('#selectTris').addEventListener('change', clickTri(this.value, media))
  // document.querySelector('#selectTris').addEventListener('change', function(e){
  //   console.log(this.value);
  //   console.log(media);
  //   console.log(media.sort(function(a, b) {
  //     return a.likes - b.likes;
  //   }));
  // })
  document.querySelector('#selectTris').addEventListener('change', function(e){
    if (this.value === 'popularite') {
          const resultLikes = media.sort(function(a, b) {
            return a.likes - b.likes;
          });
          photographerMedias.innerHTML='';
          displayMedias(resultLikes)
          console.log('pop');
          console.log(resultLikes);
    } 
    else if (this.value === 'date'){
          const resultDate = media.sort(function(a, b){
            let dateA = new Date(a.date), dateB = new Date(b.date);
            return dateA - dateB;
          });
          photographerMedias.innerHTML='';
          displayMedias(resultDate)
          console.log('date');
          console.log(resultDate);
    }
    else if(this.value === 'titre'){
          const resultTitle = media.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            } 
            return 0;
          });
          photographerMedias.innerHTML='';
          displayMedias(resultTitle)
          console.log('title');
          console.log(resultTitle);
    }
    else{
          displayMedias(media); //affiche les medias
          console.log('else')
          // console.log(motcle)
    }
  })
  
  
}

initPage();

// function detri(media){
  //let mediatrier =  sort(a-b)
 ///displayMedias(mediatrier); affiche les medias
// } 

// let dropdown document.queryselector('zdz).addeventlistenr('change', detriyeajh(this.value, data) )

// function test(a,b){

//   console.log('motcler vaut : ', a);
//   console.log('media vaut : ', b);
//   }



