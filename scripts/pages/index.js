
async function displayData(photographers) {

  photographers.forEach((photographer) => {

    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
async function init() {

  const { photographers } = await getPhotographers();
  displayData(photographers);
}
init();
