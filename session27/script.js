
function chargerScript(script) {
    return new Promise((resolve, reject) => {
        let element = document.createElement('script');
        element.src = script;
        document.head.append(element);

        element.onload = () => resolve('Fichier ' + script + ' a été chargé');

        element.onerror = () => reject(new Error('Opération impossible pour le script ' + script));
    });
}

async function resultat() {
    try {
        const scriptA = await chargerScript('test.js');
        console.log(scriptA);
        const scriptB = await chargerScript('autre.js');
        console.log(scriptB);
    }
    catch(error) {
        console.log(error);
        document.head.lastChild.remove();
    }
}

resultat();

// async function direBonjour() {
//     const promesse = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Promesse tenu !'), 3000);
//     });

//     let resultat = await promesse;
//     console.log(resultat);
// }


// direBonjour();