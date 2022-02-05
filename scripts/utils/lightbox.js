// Fonction de la lightbox //

function lightbox(param) {
  let mediaLightbox = document.querySelector('.lightbox__container img ,.lightbox__container video source');
  // Création tableau de tous les médias de la page
  const allImgsTable = Array.from(document.querySelectorAll('.container-img img,.container-img video source'));
  contLightbox.focus();

  // Fonction de fermeture de la lightbox //
  function closeLightbox() {
    prevArrow.style.display = 'block';
    nextArrow.style.display = 'block';
    allLightbox.style.display = 'none';
    titleLightbox.innerHTML = '';
  }

  // Fonction pour aller à la photo précédente //
  function previousIMG() {
    // Récupére l'index de la photo et lui enlève 1
    idMediaCurrent = allImgsTable.indexOf(mediaCurrent) - 1;
    mediaCurrent = allImgsTable[idMediaCurrent];

    // Condition pour le code différent selon si c'est une image ou une vidéo
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

    // Flèche de gauche disparait si première image //
    // Flèche de droite disparait si dernière image //
    if (idMediaCurrent == 0) {
      prevArrow.style.display = 'none';
    }
    if (idMediaCurrent <= allImgsTable.length) {
      nextArrow.style.display = 'block';
    }
  }

  // Fonction pour aller à la photo suivante //
  function nextIMG() {
    // Récupére l'index de la photo et lui ajoute 1
    idMediaCurrent = allImgsTable.indexOf(mediaCurrent) + 1;
    mediaCurrent = allImgsTable[idMediaCurrent];

    // Condition pour le code différent selon si c'est une image ou une vidéo
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

    // Flèche de gauche disparait si première image //
    // Flèche de droite disparait si dernière image //
    if (idMediaCurrent >= allImgsTable.length - 1) {
      nextArrow.style.display = 'none';
    }
    if (idMediaCurrent > 0) {
      prevArrow.style.display = 'block';
    }
  }

  // Exécution des fonctions de la lightbox au clic //
  if (param === 'close') {
    closeLightbox();
  } else if (param === 'prev') {
    previousIMG();
  } else if (param === 'next') {
    nextIMG();
  } else {
    let mediaClicked = param.querySelector('img,video source');
    mediaCurrent = mediaClicked;

    // Condition pour le code différent selon si c'est une image ou une vidéo
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
    document.getElementById('focusLightbox').focus();

    // Flèche de gauche disparait si première image //
    // Flèche de droite disparait si dernière image //
    if (idMediaCurrent == 0) {
      prevArrow.style.display = 'none';
    }
    if (idMediaCurrent >= allImgsTable.length - 1) {
      nextArrow.style.display = 'none';
    }
  }

  // Exécution des fonctions de la lightbox au clavier //
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
