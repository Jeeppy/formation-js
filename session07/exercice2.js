function bodyMassIndex(mass, height) {
    // Height in meters
    metersHeight = Number(height) / 100;
    let bmi = mass / Math.pow(Number(height) / 100, 2);
    return bmi
}

let mass = prompt("Mass (kg)?");
let height = prompt("Height (cm)?")

alert(bodyMassIndex(mass, height));