"use strict";

//Parametros REST y SPREAD 


//Ejemplo de parametro REST
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1", fruta1);
    console.log("Fruta 2", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//Ejemplo de parametro SPREAD
//SPREAD indica que la variable que contiene una coleccion sigue exactamente el orden parametral de la funcion
//por ende fruta 1 es mango y fruta 2 es tomate.
var masFrutas = ['Mango', 'Tomate'];
listadoFrutas(...masFrutas, "Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");