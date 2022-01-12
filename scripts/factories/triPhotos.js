// function trierMedias(){
//   let clickTri = document.querySelector('#selectTris').addEventListener('change', clickTri(motcle, data))
//   console.log(clickTri);

// }

function clickTri(motcle, data ){
  if (motcle === 'popularite') {
    const resultLikes = data.sort(function (a, b) {
      return a.likes - b.likes;
    });
    photographerMedias.innerHTML = '';
    displayMedias(resultLikes)
    console.log('pop');
    console.log(resultLikes);
  }
  else if (motcle === 'date') {
    const resultDate = data.sort(function (a, b) {
      let dateA = new Date(a.date), dateB = new Date(b.date);
      return dateA - dateB;
    });
    photographerMedias.innerHTML = '';
    displayMedias(resultDate)
    console.log('date');
    console.log(resultDate);
  }
  else if (motcle === 'titre') {
    const resultTitle = data.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    photographerMedias.innerHTML = '';
    displayMedias(resultTitle)
    console.log('title');
    console.log(resultTitle);
  }
  else {
    displayMedias(media); //affiche les medias
    console.log('else')
    // console.log(motcle)
  }
}


