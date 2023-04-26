let ville = "Lille";

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=d18207e9cdc6bf4981a181568e3ce968&units=metric';
    let requete = new XMLHttpRequest();
    requete.open("GET", url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = document.querySelector('#temperature_label');
                temperature.textContent = reponse.main.temp;
                let elementVille = document.querySelector('#ville')
                elementVille.textContent = ville;
                console.log(reponse);
            }
            else {
                console.log("Une erreur est survenu, veuillez ressayez plus tard.");
            }
        }
    }
}

recevoirTemperature(ville);

let button = document.querySelector("#changer")
button.addEventListener('click', () => {
    ville = prompt("Ville ?");
    recevoirTemperature(ville);
});