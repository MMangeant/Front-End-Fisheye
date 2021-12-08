async function getDataJson(){
    return fetch("./data/photographers.json")
     .then(res => res.json())
}


async function getPhotographers() {
    const photographers = await getDataJson();
    return photographers;
}
