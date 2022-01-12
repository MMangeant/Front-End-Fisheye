function lightbox(){
  
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
  
  crossLightbox.addEventListener("click", function(){
      lightbox.style.display = "none";
  });
  


  // console.log(Array.from(lienImgs))
  // const isLargeNumber = (element) => element;
  // console.log(lienImgs.currentNode);
  // console.log(lienImgs.findIndex(isLargeNumber));

  lienImgsTable.forEach(image =>{
    
      image.addEventListener('click', function(e){
          e.preventDefault(); 
          lightbox.style.display="block";
          imgLightbox.src = this.href;
          console.log(this);
          console.log(lienImgsTable.indexOf(this));
          // this.classList.toggle("activeImg");
          
          let imgPrevious = lienImgsTable.indexOf(this) -1;
          let imgNext = lienImgsTable.indexOf(this) +1;

          prevArrow.addEventListener("click", function(e){
              imgLightbox.src = lienImgsTable[imgPrevious].href; 
              // this.classList.add("activeImg");
          });
           
          nextArrow.addEventListener("click", function(){
              imgLightbox.src = lienImgsTable[imgNext].href; 
              // this.classList.add("activeImg");
          });
      })
  })




}