function lightbox(){
  
  const lightbox = document.querySelector('.lightbox');
  
  lightbox.innerHTML += `
      <button class="lightbox__close"></button>
      <button class="lightbox__prev"></button>
      <button class="lightbox__next"></button>
      <div class="lightbox__container"><img class="lightbox__photo" src="" alt=""></div>
  `;              
  
  const lienImg = document.querySelectorAll('.lienPhoto');
  const contLightbox = document.querySelector('.lightbox__container');
  const imgLightbox = document.querySelector('.lightbox__container img');
  
  const crossLightbox = document.querySelector(".lightbox__close");
  const prevArrow = document.querySelector('.lightbox__prev');
  const nextArrow = document.querySelector('.lightbox__next');
  
  crossLightbox.addEventListener("click", function(){
      lightbox.style.display = "none";
  });
  
  // console.log(lienImg)
//   const isLargeNumber = (element) => element;
//   console.log(lienImg.findIndex(isLargeNumber));

  lienImg.forEach(image =>{
      image.addEventListener('click', function(e){
          e.preventDefault(); 
          lightbox.style.display="block";
          imgLightbox.src = this.href;
          console.log(this);
        //   console.log(this.indexOf());
        //   console.log((lienImg.indexOf(this), this))
        //   console.log(lienImg.findIndex(this))
          // console.log(this.closest("a > a"))
          // console.log(this.siblings)
          // console.log(this.currentNode)
        //   console.log(this.nextSibling) 
          this.classList.toggle("activeImg");
          
          let imgPrevious = document.querySelector('.activeImg');
          let imgNext = document.querySelector('.activeImg').parentNode.nextElementSibling.querySelector('a');

          prevArrow.addEventListener("click", function(e){
              document.querySelector('.activeImg').classList.toggle("activeImg");
              imgLightbox.src = imgPrevious.href; 
              // imgNext.classList.toggle("activeImg");
              console.log("imgPrevious");
              // imgPrevious.toggle("activeImg");
          });
           
          nextArrow.addEventListener("click", function(){
              imgLightbox.src = imgNext;
              this.classList.add("activeImg");
          });
      })
  })




}