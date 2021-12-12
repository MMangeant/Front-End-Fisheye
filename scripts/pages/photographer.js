//Mettre le code JavaScript lié à la page photographer.html

/*récup paramètre id de la page de photographe*/
let urlEl = new URLSearchParams(window.location.search);
let idUrl = urlEl.get("id");

async function displayDataPage(photographers) {
    const photographersHeader = document.querySelector(".photograph-header");
    photographers.filter(photographer => photographer.id == idUrl).forEach((photographer) => {
        const photographerPageModel = photographerPageFactory(photographer);
        const userCardDOM2 = photographerPageModel.getUserCardDOM2();
        photographersHeader.appendChild(userCardDOM2);
    });
};

async function displayMedias(medias) {
    const photographerMedias = document.querySelector(".photograph-medias");
    medias.filter(media => media.photographerId == idUrl).forEach((media) => {
        const mediaModel = mediaFactory(media);
        const userCardDOM3 = mediaModel.getUserCardDOM3();
        photographerMedias.appendChild(userCardDOM3);
        
    });
};

async function displayEncartBas(photographers) {
    const encartBas = document.querySelector(".encart-bas");
    photographers.filter(photographer => photographer.id == idUrl).forEach((photographer) => {
        const encartModel = totalLikesFactory(photographer);
        const userCardDOM4 = encartModel.getUserCardDOM4();
        encartBas.appendChild(userCardDOM4);
    });
};



async function initPage() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    displayDataPage(photographers);
    displayMedias(media);
    displayEncartBas( photographers);
    console.log(media);
};

initPage();
