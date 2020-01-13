"use strict";

// Funciones anonimas
// Es una funcion que no tiene nombre basicamente

var pelicula = function(nombrePelicula) {
    return "La pelicula es: " + nombrePelicula;
}

//Funcion de Callback
//Funcion que se ejecuta dentro de otra

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 7, function(dato) {
    console.log("La suma es: " + dato);
}, function(dato) {
    console.log("La suma por dos es: ", (dato * 2));
});