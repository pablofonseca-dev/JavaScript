"use strict";

//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones

//Defino la función
function calculadora(arg1, arg2) {
    //Conjunto de instrucciones a ejecutar 
    if (isNaN(arg1) == false && isNaN(arg2) == false) {
        console.log("Suma: " + (arg1 + arg2));
        console.log("Resta: " + (arg1 - arg2));
        console.log("Multiplicación: " + (arg1 * arg2));
        console.log("División: " + (arg1 / arg2));
        return 0;
    } else {
        return 1;
    }
}

let numberOne = parseFloat(prompt("Ingrese número 1", 0));
let numberTwo = parseFloat(prompt("Ingrese número 2", 0));
if (calculadora(numberOne, numberTwo)) {
    console.log("Program exit with code 1");
} else {
    console.log("Program exit successfuly with code 0");
}

// for (let i = 1; i <= 10; i++) {
//     calculadora(i, i);
// }