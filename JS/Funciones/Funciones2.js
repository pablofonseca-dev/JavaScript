//Parametros opcionales
"use strict";

function calculadora(arg1, arg2, showInConsole = false, showInDocument = false) {
    //Conjunto de instrucciones a ejecutar 
    if (isNaN(arg1) == false && isNaN(arg2) == false) {
        if (showInConsole) {
            console.log("Suma: " + (arg1 + arg2));
            console.log("Resta: " + (arg1 - arg2));
            console.log("Multiplicación: " + (arg1 * arg2));
            console.log("División: " + (arg1 / arg2));
        }
        if (showInDocument) {
            document.write("Suma: " + (arg1 + arg2) + "<br/>");
            document.write("Resta: " + (arg1 - arg2) + "<br/>");
            document.write("Multiplicación: " + (arg1 * arg2) + "<br/>");
            document.write("División: " + (arg1 / arg2) + "<br/>");
        }
        return 0;
    } else {
        return 1;
    }
}
let numberOne = parseFloat(prompt("Ingrese número 1", 0));
let numberTwo = parseFloat(prompt("Ingrese número 2", 0));
if (calculadora(numberOne, numberTwo, 0, 1)) {
    console.log("Program exit with code 1");
} else {
    console.log("Program exit successfuly with code 0");
}