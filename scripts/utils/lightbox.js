
const prevArrow = document.querySelector('.lightbox__prev');
const nextArrow = document.querySelector('.lightbox__next');

let imgCurrent;
let idImgCurrent;

function lightbox(param) {
  // console.log(param);
  const lightbox = document.querySelector('.lightbox');
  const contLightbox = document.querySelector('.lightbox__container');
  let imgLightbox = document.querySelector('.lightbox__container img , video source');

  const allImgsTable = Array.from(document.querySelectorAll('.container-img img,.container-img video'));
  // console.log(allImgsTable);

  if(param === "close"){
    closeLightbox();
  }
  else if(param === "prev"){
    previousIMG();
  }
  else if(param === "next"){
    nextIMG();
  }
  else{

    lightbox.focus();
    
    let imgClicked= param.querySelector("img,video");
    imgCurrent = imgClicked;

    let photoLightbox;
    let videoLightbox;

    if(imgCurrent.dataset.type === 'photo'){
      console.log('phto');
      contLightbox.innerHTML = `
        <img class="lightbox__photo" src="" alt="">
      `;
      photoLightbox = document.querySelector('.lightbox__photo');
      imgLightbox = photoLightbox;
    }
    else{
      console.log('vid');
      contLightbox.innerHTML = `
        <video  class="lightbox__video" autoplay width="250">
          <source src="" type="video/mp4">
        </video>
      `;
      videoLightbox = document.querySelector('.lightbox__video source');
      imgLightbox = videoLightbox;
    }

    imgLightbox.src = imgCurrent.src;
    idImgCurrent = allImgsTable.indexOf(imgCurrent);
    lightbox.style.display="block";
  }

  function closeLightbox(){
    lightbox.style.display = "none";
  }

  function previousIMG(){
    idImgCurrent = allImgsTable.indexOf(imgCurrent)-1;
    imgCurrent = allImgsTable[idImgCurrent];
    imgLightbox.src = allImgsTable[idImgCurrent].src;

    // if (idImgCurrent == 0) {
    //   prevArrow.style.display = "none";
    // }
    // else{
    //   prevArrow.style.display = "block";
    // }

  }
  
  function nextIMG(){
    idImgCurrent = allImgsTable.indexOf(imgCurrent)+1;
    imgCurrent = allImgsTable[idImgCurrent];
    imgLightbox.src = allImgsTable[idImgCurrent].src;

    // if (idImgCurrent >= allImgsTable.length - 1) {
    //   nextArrow.style.display = "none";
    // }
    // else{
    //   nextArrow.style.display = "block";

    // }

  }


  return {closeLightbox, previousIMG, nextIMG}

}


//KEYDOWN//
const open_lightbox = document.querySelectorAll('.container-img');
console.log(open_lightbox);
open_lightbox.forEach(img =>{img.addEventListener('keydown', event => {
  if (event.code == 'Enter') {
  }
  })
});
