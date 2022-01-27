
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


  // lienImgsTable.forEach(image =>{

  //     image.addEventListener('click', function(e){
  //         e.preventDefault(); 
  //         lightbox.style.display="block";
  //         imgLightbox.src = this.href;
  //         console.log(this);
  //         console.log(lienImgsTable.indexOf(this));
  //         // this.classList.toggle("activeImg");

  //         let imgPrevious = lienImgsTable.indexOf(this) -1;
  //         let imgNext = lienImgsTable.indexOf(this) +1;

  //         prevArrow.addEventListener("click", function(e){
  //             imgLightbox.src = lienImgsTable[imgPrevious].href; 
  //             // this.classList.add("activeImg");
  //         });

  //         nextArrow.addEventListener("click", function(){
  //             imgLightbox.src = lienImgsTable[imgNext].href; 
  //             // this.classList.add("activeImg");
  //         });
  //     })
  // })


  // lienImgsTable.forEach(function(image, index){
  //   let newIndex = index;
  //   let clickedImgIndex;
  //   image.addEventListener('click', function(e){
  //     e.preventDefault(); 
  //     // console.log(image);
  //     // console.log(index);
  //     lightbox.style.display="block";
  //     clickedImgIndex = index;
  //     function preview() {
  //       let imageURL = lienImgsTable[newIndex].querySelector("img").src;
  //       imgLightbox.src = imageURL;
  //     }
  //     preview();
  
  //     prevArrow.addEventListener("click", function(){
  //       newIndex--; 
  //       preview();
  //     });
  
  //     nextArrow.addEventListener("click", function(){
  //       newIndex++; 
  //       preview();
  //     });
  //   })
  // });


  // for (let i = 0; i < lienImgsTable.length; i++) {
  //   let newIndex = i; //passing i value to newIndex variable
  //   let clickedImgIndex; //creating new variable
  //   lienImgsTable[i].onclick = (e) => {
  //     e.preventDefault();
  //     lightbox.style.display = "block";
  //     clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
  //     function preview() {
  //       let imageURL = lienImgsTable[newIndex].querySelector("img").src; //getting user clicked img url
  //       imgLightbox.src = imageURL; //passing user clicked img url in previewImg src
  //     }
  //     preview(); //calling above function

  //     if (newIndex == 0) {
  //       prevArrow.style.display = "none";
  //     }
  //     if (newIndex >= lienImgsTable.length - 1) {
  //       nextArrow.style.display = "none";
  //     }
  //     prevArrow.onclick = () => {
  //       newIndex--; //decrement index
  //       if (newIndex == 0) {
  //         preview();
  //         prevArrow.style.display = "none";
  //       } else {
  //         preview();
  //         nextArrow.style.display = "block";
  //       }
  //     }
  //     nextArrow.onclick = () => { 
  //       newIndex++; //increment index
  //       if (newIndex >= lienImgsTable.length - 1) {
  //         preview();
  //         nextArrow.style.display = "none";
  //       } else {
  //         preview();
  //         prevArrow.style.display = "block";
  //       }
  //     }

  //   }

  // }

  return {closeLightbox, previousIMG, nextIMG}

}
