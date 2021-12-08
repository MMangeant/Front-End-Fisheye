
// const voilaPromise = new Promise(function PromS(resolve, reject) {
//     setTimeout(() => {
//         //console.log('me voici !');
//         let returny = resolve('345');
//         console.log(returny);
//         }, 2000);

// })


// async await

function maReponse(){
    let result = voilaPromise();
    console.log(result);
}

 function getDataTruc(){
   return fetch("./data/photographers.json")
    .then(res => res.json())
}
// function getDataTruc(){
//     return fetch("./data/photographers.json")
//      .then(res => {
//          if(res.ok){
//            return res.json();
//          }   
//          else throw new Error('something went wrong')  
//      });
//  }
 

async function start() {
    let data = await getDataTruc();
    console.log(data);
    console.log('bonjour');
}

start();




a = true;
if(a) console.log('yess');
else console.log('nonononono');
// let t = ['orange', 'kiwi'];



// t.forEach(fruit => console.log(fruit));

// function getDataTruc(){
//     fetch("./data/photographers.json")
//     .then(function(res, error){
//         console.log(res);
//         return res.json();
//     })
//     .then(function(res){
//         console.log(res);
//         return res.media;
//     })
//     .then(function(ser){
//         console.log(ser);
//     })
    
    

//     // setTimeout(() => {
//     //     console.log('me voici !');
//     //   }, 2000);
// }