// function trierMedias(){
//   let clickTri = document.querySelector('#selectTris').addEventListener('change', clickTri(this.value, data))
//   console.log(clickTri);

// }

function clickTri(motcle, data ){
  if (motcle === 'popularite') {
    const resultLikes = data.sort(function(a, b) {
      return a.likes - b.likes;
    });
    // displayMedias(resultLikes)
    console.log(resultLikes);
    console.log('pop');
  } else if(motcle === 'date'){
    const resultDate = data.sort(function(a, b){
      let dateA = new Date(a.date), dateB = new Date(b.date);
      return dateA - dateB;
    });
    // displayMedias(resultDate)
    console.log('date');
  }
  else if(motcle === 'title'){
    const resultTitle = data.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      } 
      return 0;
    });
    // displayMedias(resultTitle)
    console.log('title');
  }
  else{
    // displayMedias(media); //affiche les medias
    console.log('else')
    console.log(motcle)
  }
}


