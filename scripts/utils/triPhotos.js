// Fonction d'ouverture du dropdown de tri //
function openTri() {
  selectTri.style.display = 'block';
  ouvreTri.style.display = 'none';
}

// Fonction de fermeture du dropdown de tri //
function closeTri() {
  selectTri.style.display = 'none';
  ouvreTri.style.display = 'flex';
}

// Exécution des fonctions d'ouverture et de fermeture au click //
ouvreTri.addEventListener('click', openTri);
fermeTri.addEventListener('click', closeTri);

// Exécution des fonctions d'ouverture et de fermeture à la touche entrée //
ouvreTri.addEventListener('keypress', (event) => {
  if (event.code === 'Enter') {
    openTri();
  }
});
fermeTri.addEventListener('keypress', (event) => {
  if (event.code === 'Enter') {
    closeTri();
  }
});

// Fonction de tri des medias //
function clickTri(motcle, data) {
  if (previousChoice === motcle) {
    return;
  }
  // tri différent pour chaque mot-clé récupéré en paramètre
  if (motcle === 'popularite') {
    previousChoice = motcle;
    const resultLikes = data.sort((a, b) => a.likes - b.likes);
    displayMedias(resultLikes);
  } else if (motcle === 'date') {
    previousChoice = motcle;
    const resultDate = data.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateA - dateB;
    });

    displayMedias(resultDate);
  } else if (motcle === 'titre') {
    previousChoice = motcle;

    const resultTitle = data.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

    displayMedias(resultTitle);
  } else {
    displayMedias(data);
  }
}
