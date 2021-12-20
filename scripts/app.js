async function getDataJson() {
  return fetch('./data/photographers.json')
    // eslint-disable-next-line arrow-parens
    .then(res => res.json());
}

// eslint-disable-next-line no-unused-vars
async function getPhotographers() {
  const photographers = await getDataJson();
  return photographers;
}
