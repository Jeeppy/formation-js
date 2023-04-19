function addition(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function substract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiplication(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function division(numberOne, numberTwo) {
    if (numberTwo == 0) {
        throw new Error("Impossible de diviser par 0 !");
    }
    return numberOne / numberTwo;
}

do {
    try {
        do {
            var choice = prompt("Que souhaitez-vous faire ?\n\n"
                + "1 - Addition\n"
                + "2 - Soustraction\n"
                + "3 - Multiplication\n"
                + "4 - Division\n"
            );
            choice = Number(choice);
        } while (isNaN(choice) || choice < 0 || choice > 4)

        do {
            var numberOne = Number(prompt("Premier nombre ?"));
        } while (isNaN(numberOne))

        do {
            var numberTwo = Number(prompt("Deuxième nombre ?"));
        } while (isNaN(numberTwo))

        let result;
        switch (choice) {
            case 1:
                result = addition(numberOne, numberTwo);
                break;
            case 2:
                result = substract(numberOne, numberTwo);
                break;
            case 3:
                result = multiplication(numberOne, numberTwo);
                break;
            case 4:
                result = division(numberOne, numberTwo);
                break;
            default:
                throw new Error("L'opération n'existe pas!");
        }

        alert("Résultat : " + result);
    }
    catch (error) {
        alert(error.message);
    }
} while (confirm("Voulez-vous continuer ?"))