let monTableauAssociatif = {
    'prenom'    :   'Mark',
    'nom'       :   'Zuckerberg',
    'poste'     :   'PDG de Facebook'
};

function toString(tableau) {
    for (const valeur in tableau) {
        console.log(valeur + ' : ' + tableau[valeur]);
    }
}

toString(monTableauAssociatif);