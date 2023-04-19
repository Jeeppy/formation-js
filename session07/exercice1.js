function abracadabra() {
    let first_name = prompt("First name ?");
    let last_name = prompt("Last name ? ");
    let age = prompt("Age ?");

    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
        + first_name
        + " ! Euh... Je veux dire... Monsieur le grand magicien "
        + last_name
        + " ! Cela fait déjà ${age} ans que vous faites rayonner notre contrée !.")
}

abracadabra();