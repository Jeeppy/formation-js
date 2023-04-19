function sayHello(first_name) {
    alert("Bonjour " + first_name)
}

function addition(nombreUn, nombreDeux) {
    console.log(nombreUn + nombreDeux)
}

let cry = "Spartan !!!";

function warCry() {
    let cry = "SPARTAN !!!";
    console.log(cry);
}

// warCry();
// console.log(cry);

//sayHello("Jean-Patrick");
//addition(5, 9.4)

let nombreUn = 4, nombreDeux = 7;

function add(nombreA, nombreB) {
    result = nombreA + nombreB;
    return result;
}

// console.log(add(nombreUn, nombreDeux));

let preparation = 10, cooking = 15;

function cook(cakeNumber, preparationMinutes = 10, cookingMinutes = 15) {
    let result = cakeNumber * (preparationMinutes + cookingMinutes);
    return result;
}

// console.log(cook(5));

function sayAge() {
    let age = prompt("How old are you ?")
    age = Number(age);
    alert("You are " + (age + 1));
}

// sayAge();

let functionAnonymous = function () {
    console.log('I am an anonymous function');
}

    // functionAnonymous();
    (function () { console.log('I am an anonymous function') })
