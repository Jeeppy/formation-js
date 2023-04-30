const url = 'https://blockchain.info/ticker';

async function recupererPrix() {
    axios.get(url)
        .then(function(donnees) {
            document.querySelector("#price_label").textContent = donnees.data.EUR.last;
        })
        .catch(function(erreur) {
            alert('Un problème est survenu');
        })
}

setInterval(recupererPrix, 1000);