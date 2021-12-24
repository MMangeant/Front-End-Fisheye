/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
function mediaFilterFactory(data) {
  // eslint-disable-next-line object-curly-newline
  const { title, likes, id, date, image, video } = data;

  document.getElementById('selectTris').addEventListener('change', function(e) {
    // e.preventDefault();
    console.log('You selected: ', this.value);
    if (this.value === 'popularite'){
        // trierLikes()  
    }
    else if(this.value === 'date'){
        // trierDates()  
    }
    else if(this.value === 'titre'){
        // data.sort((a, b) => {
        //   if (a.title < b.title) {
        //     return -1;
        //   }
        //   if (a.title > b.title) {
        //     return 1;
        //   } 
        //   return 0;
        // });
      //   data.sort(function(a, b) {
      //     var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
      //     if (titleA < titleB) return -1;
      //     if (titleA > titleB) return 1;
      //     return 0;
      // });
    }
  });


console.log(data.title.toLowerCase())

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
  function getUserCardDOM3Tri() {
    const mediasPhotographer = document.createElement('div');
    mediasPhotographer.innerHTML += `
      <div class="encartPhoto" data-likes="${likes}" data-title="${title}" data-date="${date}">
        ${ImageOuVideo()}
        <div class="textPhoto">
          <h3 class="nomPhoto">${title}</h3>
            <button class="likesPhoto" data-idmedia="${id}" data-likes="${likes}">
              <span class="nbLikes nb${id}">${likes}</span>
              <img class="heart heart-likes" src="assets/icons/heart.svg" alt="" data-likes="${likes}" data-idmedia="${id}" onclick="calculCoeur(${id})">
            </button>
        </div>
      </div>
    `;
    return mediasPhotographer;
  }
  // eslint-disable-next-line object-curly-newline
  return { title, likes, id, date, image, getUserCardDOM3Tri };
  
}


///

// function trierTitles(){
  
//   const elementsPhotos = [...document.querySelectorAll('.encartPhoto')];

//   elementsPhotos.sort(function(a, b) {
//       var titleA = a.dataset.title.toLowerCase(), titleB = b.dataset.title.toLowerCase();
//       if (titleA < titleB) return -1;
//       if (titleA > titleB) return 1;
//       return 0;
//   });

//   photographerMedias.innerHTML = '';

//   mediasPhotographer.innerHTML += `
//       <div class="encartPhoto" data-likes="${likes}" data-title="${title}" data-date="${date}">
//         ${ImageOuVideo()}
//         <div class="textPhoto">
//           <h3 class="nomPhoto">${title}</h3>
//             <button class="likesPhoto" data-idmedia="${id}" data-likes="${likes}">
//               <span class="nbLikes nb${id}">${likes}</span>
//               <img class="heart heart-likes" src="assets/icons/heart.svg" alt="" data-likes="${likes}" data-idmedia="${id}" onclick="calculCoeur(${id})">
//             </button>
//         </div>
//       </div>
//     `;

// }
