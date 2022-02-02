let previousChoice;

const ouvreTri = document.querySelector('.ouvreTri');
const selectTri = document.querySelector('#selectTris');
const fermeTri = document.querySelector('.fa-chevron-up');

function openTri() {
  selectTri.style.display = 'block';
  ouvreTri.style.display = 'none';
}

function closeTri() {
  selectTri.style.display = 'none';
  ouvreTri.style.display = 'flex';
}

ouvreTri.addEventListener('click', openTri);

fermeTri.addEventListener('click', closeTri);

// KEYPRESS //
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

function clickTri(motcle, data) {
  if (previousChoice === motcle) {
    return;
  }

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
