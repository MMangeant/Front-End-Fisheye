// function trierMedias(){
//   let clickTri = document.querySelector('#selectTris').addEventListener('change', clickTri(motcle, data))
//   console.log(clickTri);

// }
let previousChoice; 

const ouvreTri = document.querySelector('.ouvreTri');
const selectTri = document.querySelector('#selectTris');
const fermeTri = document.querySelector('.fa-chevron-up');

ouvreTri.addEventListener('click', function openTri() {
  selectTri.style.display = "block";
  ouvreTri.style.display = "none";
});

fermeTri.addEventListener('click', function openTri() {
  selectTri.style.display = "none";
  ouvreTri.style.display = "flex";
});


//KEYPRESS//
ouvreTri.addEventListener('keypress', event => {
  if (event.code == 'Enter') {
    selectTri.style.display = "block";
    ouvreTri.style.display = "none";
  }
});

fermeTri.addEventListener('keypress', event => {
  if (event.code == 'Enter') {
    selectTri.style.display = "none";
    ouvreTri.style.display = "flex";
  }
});


function clickTri(motcle, data ){
  // console.log(motcle.target.id, ' popularite');
  // console.log(data);

  console.log('exter : ',previousChoice);

  if(previousChoice === motcle){
    console.log('meme element clicker');
    return 
  }
  console.log(previousChoice);
  if (motcle === 'popularite') {
    previousChoice = motcle; 
  console.log('a linterieur : ',previousChoice);

    const resultLikes = data.sort(function (a, b) {
      return a.likes - b.likes;
    });
    
    displayMedias(resultLikes);
  }
  else if (motcle === 'date') {
    previousChoice = motcle; 
    console.log('a linterieur : ',previousChoice);

    const resultDate = data.sort(function (a, b) {
      let dateA = new Date(a.date), dateB = new Date(b.date);
      return dateA - dateB;
    });
    
    displayMedias(resultDate);
  }
  else if (motcle === 'titre') {
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
  }
  else {
    displayMedias(data); //affiche les medias
    console.log('else')
    // console.log(motcle)
    
  }
}


