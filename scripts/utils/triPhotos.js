/* tri photos */

document.getElementById('selectTris').addEventListener('change', function(e) {
  // e.preventDefault();
  console.log('You selected: ', this.value);
  if (this.value === 'popularite'){
      trierLikes()  
  }
  else if(this.value === 'date'){
      trierDates()  
  }
  else if(this.value === 'titre'){
      trierTitles()  
  }
});


function trierTitles(){
  
  const elementsPhotos = [...document.querySelectorAll('.encartPhoto')];

  elementsPhotos.sort(function(a, b) {
      var titleA = a.dataset.title.toLowerCase(), titleB = b.dataset.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
  });

  // photosConst.innerHTML = '';

  // elementsPhotos.forEach(article => {
  //     console.log(article.dataset.title); 
      
  //     photosConst.innerHTML += `
  //     <div class="encartPhoto" data-likes="${article.dataset.likes}" data-title="${article.dataset.title}" data-date="${article.dataset.date}">
  //         <a class="lienPhoto" href="" alt="" data-idmedia="${article.dataset.idmedia}">
  //             <img class="imgPhoto" src="${article.querySelector('a .imgPhoto').src}" alt="photo"></img>
  //         </a>
  //         <div class="textPhoto">
  //             <h3 class="nomPhoto">${article.dataset.title}</h3>
  //             <button class="likesPhoto" data-idmedia="${article.dataset.idmedia}" data-likes="${article.dataset.likes}">
  //                 <span class="nbLikes">${article.dataset.likes}</span>
  //                 <img class="heart" src="images/icones/heart.svg" alt="">
  //             </button>
  //         </div>
  //     </div>
  //     `;

  // totalL += likesPhoto;
      
  // })

}


// function trierLikes(){

//   const elementsPhotos = [...document.querySelectorAll('.encartPhoto')];

//   elementsPhotos.sort(function(a, b) {
//       return a.dataset.likes - b.dataset.likes;
//   });

//   photosConst.innerHTML = '';

//   elementsPhotos.forEach(article => {
//       console.log(article.dataset.likes); 
      
//       photosConst.innerHTML += `
//       <div class="encartPhoto" data-likes="${article.dataset.likes}" data-title="${article.dataset.title}" data-date="${article.dataset.date}">
//           <a class="lienPhoto" href="" alt="" data-idmedia="${article.dataset.idmedia}">
//               <img class="imgPhoto" src="${article.querySelector('a .imgPhoto').src}" alt="photo"></img>
//           </a>
//           <div class="textPhoto">
//               <h3 class="nomPhoto">${article.dataset.title}</h3>
//               <button class="likesPhoto" data-idmedia="${article.dataset.idmedia}" data-likes="${article.dataset.likes}">
//                   <span class="nbLikes">${article.dataset.likes}</span>
//                   <img class="heart" src="images/icones/heart.svg" alt="">
//               </button>
//           </div>
//       </div>
//       `;
  
//   totalL += likesPhoto;
      
//   })

// }


// function trierDates(){
//   const elementsPhotos = [...document.querySelectorAll('.encartPhoto')];

//   elementsPhotos.sort(function(a, b){
//       let dateA = new Date(a.dataset.date), dateB = new Date(b.dataset.date);
//       return dateA - dateB;
//   });

//   photosConst.innerHTML = '';

//   elementsPhotos.forEach(article => {
//       console.log(article.dataset.date); 
      
//       photosConst.innerHTML += `
//       <div class="encartPhoto" data-likes="${article.dataset.likes}" data-title="${article.dataset.title}" data-date="${article.dataset.date}">
//           <a class="lienPhoto" href="" alt="" data-idmedia="${article.dataset.idmedia}">
//               <img class="imgPhoto" src="${article.querySelector('a .imgPhoto').src}" alt="photo"></img>
//           </a>
//           <div class="textPhoto">
//               <h3 class="nomPhoto">${article.dataset.title}</h3>
//               <button class="likesPhoto" data-idmedia="${article.dataset.idmedia}" data-likes="${article.dataset.likes}">
//                   <span class="nbLikes">${article.dataset.likes}</span>
//                   <img class="heart" src="images/icones/heart.svg" alt="">
//               </button>
//           </div>
//       </div>
//       `;

//   totalL += likesPhoto;
      
//   })

// }