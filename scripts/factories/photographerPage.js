

function photographerPageFactory(data) {
    const { name, id, city, country, tagline, portrait} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM2() {
        const headerPhotographer = document.querySelector('.photograph-header');
        
            headerPhotographer.innerHTML += `
            <div class="textPhotographer">
                <h2 class="namePhotographer">${name}</h2>
                <h3 class="adressePhotographer">${city}, ${country}</h3>
                <p class="taglinePhotographer">${tagline}</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <div>
                <img  class="portraitPhotographer" src="${picture}" alt="photographer photo">
            </div>
            `;

        return headerPhotographer;
    }
    return { name, picture, id, city, country, tagline, getUserCardDOM2 }
}



