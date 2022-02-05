const prevArrow = document.querySelector('.lightbox__prev');
const nextArrow = document.querySelector('.lightbox__next');
const crossLightbox = document.querySelector('.lightbox__close');

const titleLightbox = document.querySelector('.lightbox__title');

let mediaCurrent;
let idMediaCurrent;

let photoLightbox;
let videoLightbox;

function lightbox(param) {
  const allLightbox = document.querySelector('.lightbox');
  const contLightbox = document.querySelector('.lightbox__container');
  let mediaLightbox = document.querySelector('.lightbox__container img ,.lightbox__container video source');

  const allImgsTable = Array.from(document.querySelectorAll('.container-img img,.container-img video source'));

  contLightbox.focus();

  function closeLightbox() {
    prevArrow.style.display = 'block';
    nextArrow.style.display = 'block';
    allLightbox.style.display = 'none';
    titleLightbox.innerHTML = '';
  }

  function previousIMG() {
    idMediaCurrent = allImgsTable.indexOf(mediaCurrent) - 1;
    mediaCurrent = allImgsTable[idMediaCurrent];

    if (mediaCurrent.dataset.type === 'photo') {
      contLightbox.innerHTML = `
        <img class="lightbox__photo" src="" alt="">
      `;
      photoLightbox = document.querySelector('.lightbox__photo');
      mediaLightbox = photoLightbox;
    } else {
      contLightbox.innerHTML = `
        <video  class="lightbox__video" autoplay width="250">
          <source src="" type="video/mp4">
        </video>
      `;
      videoLightbox = document.querySelector('.lightbox__video source');
      mediaLightbox = videoLightbox;
    }

    mediaLightbox.src = allImgsTable[idMediaCurrent].src;
    titleLightbox.innerHTML = '';
    titleLightbox.innerHTML += allImgsTable[idMediaCurrent].dataset.title;

    if (idMediaCurrent == 0) {
      prevArrow.style.display = 'none';
    }
    if (idMediaCurrent <= allImgsTable.length) {
      nextArrow.style.display = 'block';
    }
  }

  function nextIMG() {
    idMediaCurrent = allImgsTable.indexOf(mediaCurrent) + 1;
    mediaCurrent = allImgsTable[idMediaCurrent];

    if (mediaCurrent.dataset.type === 'photo') {
      contLightbox.innerHTML = `
        <img class="lightbox__photo" src="" alt="">
      `;
      photoLightbox = document.querySelector('.lightbox__photo');
      mediaLightbox = photoLightbox;
    } else {
      contLightbox.innerHTML = `
        <video  class="lightbox__video" autoplay width="250">
          <source src="" type="video/mp4">
        </video>
      `;
      videoLightbox = document.querySelector('.lightbox__video source');
      mediaLightbox = videoLightbox;
    }

    mediaLightbox.src = allImgsTable[idMediaCurrent].src;
    titleLightbox.innerHTML = '';
    titleLightbox.innerHTML += allImgsTable[idMediaCurrent].dataset.title;

    if (idMediaCurrent >= allImgsTable.length - 1) {
      nextArrow.style.display = 'none';
    }
    if (idMediaCurrent > 0) {
      prevArrow.style.display = 'block';
    }
  }

  if (param === 'close') {
    closeLightbox();
  } else if (param === 'prev') {
    previousIMG();
  } else if (param === 'next') {
    nextIMG();
  } else {
    let mediaClicked = param.querySelector('img,video source');
    mediaCurrent = mediaClicked;

    if (mediaCurrent.dataset.type === 'photo') {
      contLightbox.innerHTML = `
        <img class="lightbox__photo" src="" alt="" tabindex="0">
      `;
      photoLightbox = document.querySelector('.lightbox__photo');
      mediaLightbox = photoLightbox;
    } else {
      contLightbox.innerHTML = `
        <video  class="lightbox__video" autoplay width="250" tabindex="0">
          <source src="" type="video/mp4">
        </video>
      `;
      videoLightbox = document.querySelector('.lightbox__video source');
      mediaLightbox = videoLightbox;
    }

    titleLightbox.innerHTML += mediaCurrent.dataset.title;
    mediaLightbox.src = mediaCurrent.src;
    idMediaCurrent = allImgsTable.indexOf(mediaCurrent);
    allLightbox.style.display = 'block';

    if (idMediaCurrent == 0) {
      prevArrow.style.display = 'none';
    }
    if (idMediaCurrent >= allImgsTable.length - 1) {
      nextArrow.style.display = 'none';
    }

    document.getElementById('focusLightbox').focus();
  }

  document.addEventListener('keyup', (e) => {
    if (e.which == 37) {
      return previousIMG();
    }
    if (e.which == 39) {
      return nextIMG();
    }
    if (e.which == 27) {
      return closeLightbox();
    }
    return param;
  });

  return { closeLightbox, previousIMG, nextIMG };
}
