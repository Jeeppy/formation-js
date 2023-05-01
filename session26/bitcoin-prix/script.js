const url = 'https://blockchain.info/ticker'

function recupererPrix() {
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let prixEnEuros = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEnEuros;
            }
            else {
                console.log('Un problème est survenu, merci de revenir plus tard.');
            }
        }
    }
    console.log('Prix actualisé');
}

setInterval(recupererPrix, 5000);