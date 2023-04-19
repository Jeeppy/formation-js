function addition(...nombres) {

    let resultat = 0;
    nombres.forEach(nombre => {
        resultat += nombre;
    });

    return resultat;
}

console.log(addition(4, 9, 5, 415, 78, 54));