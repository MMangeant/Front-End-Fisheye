


let objetsTris = [
  {
    "title": "Aashion Yellow Beach",
    "likes": 62,
    "date": "2012-12-08",
  },
  {
    "title": "Hashion Urban Jungle",
    "likes": 11,
    "date": "2011-11-06",
  },
  {
    "title": "Zashion Pattern on a Pattern",
    "likes": 72,
    "date": "2013-08-12",
  }]

  
  objetsTris.sort(function(a, b) {
    return a.likes - b.likes;
  });

  objetsTris.sort(function(a, b){
    let dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
});

objetsTris.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  } 
  return 0;
});



  console.table(objetsTris);