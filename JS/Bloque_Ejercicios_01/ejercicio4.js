let rangeOne = 0;
let rangeTwo = 0;

rangeOne = parseFloat(prompt("Ingrese el número del que desea partir: ", 0));
rangeTwo = parseFloat(prompt("Ingrese el número del rango final: ", 0));

if (isNaN(rangeOne) == false && isNaN(rangeTwo) == false) {
    console.log("Los números impares entre " + rangeOne + " y " + rangeTwo + " son: ");
    if (rangeOne < rangeTwo) {
        for (let index = rangeOne + 1; index < rangeTwo; index++) {
            evenNumbers(index);
        }
    } else if (rangeOne > rangeTwo) {
        for (let index = rangeOne - 1; index > rangeTwo; index--) {
            evenNumbers(index);
        }
    }
}

function evenNumbers(index) {
    if ((index % 2) != 0) {
        console.log(index);
    }
}