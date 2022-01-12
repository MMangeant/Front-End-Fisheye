function lightbox() {

  const lightbox = document.querySelector('.lightbox');

  lightbox.innerHTML += `
      <button class="lightbox__close"></button>
      <button class="lightbox__prev"></button>
      <button class="lightbox__next"></button>
      <div class="lightbox__container"><img class="lightbox__photo" src="" alt=""></div>
  `;

  const lienImgs = document.querySelectorAll('.lienPhoto');
  const lienImgsTable = Array.from(lienImgs);
  const contLightbox = document.querySelector('.lightbox__container');
  const imgLightbox = document.querySelector('.lightbox__container img');

  const crossLightbox = document.querySelector(".lightbox__close");
  const prevArrow = document.querySelector('.lightbox__prev');
  const nextArrow = document.querySelector('.lightbox__next');

  crossLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

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

  for (let i = 0; i < lienImgsTable.length; i++) {
    let newIndex = i; //passing i value to newIndex variable
    let clickedImgIndex; //creating new variable
    lienImgsTable[i].onclick = (e) => {
      e.preventDefault();
      lightbox.style.display = "block";
      clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
      function preview() {
        let imageURL = lienImgsTable[newIndex].querySelector("img").src; //getting user clicked img url
        imgLightbox.src = imageURL; //passing user clicked img url in previewImg src
      }
      preview(); //calling above function

      if (newIndex == 0) {
        prevArrow.style.display = "none";
      }
      if (newIndex >= lienImgsTable.length - 1) {
        nextArrow.style.display = "none";
      }
      prevArrow.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevArrow.style.display = "none";
        } else {
          preview();
          nextArrow.style.display = "block";
        }
      }
      nextArrow.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= lienImgsTable.length - 1) {
          preview();
          nextArrow.style.display = "none";
        } else {
          preview();
          prevArrow.style.display = "block";
        }
      }

    }

  }


}
