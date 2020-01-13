'use strict';

//Arrays, Arreglos, Matrices

//Coleccion de tipos de datos, de valores que puede tener una variable
//Collecion de varios datos

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

//Tambien se puede definir un arreglo en forma de objeto

var lenguajes = new Array("PHP", "JS", "GO", "Java", "C#", "C", "Pascal");

//Los indices dentro de la informatica empiezan en cero, los arrays tienen indices

//Para ver la longitud de un array se utiliza la propiedad length
console.log(lenguajes.length);

document.write("[" + lenguajes + "]<br/>");

// var elemento = parseInt(prompt("Número del elemento a escupir: ", 0));

// if (lenguajes[elemento] >= lenguajes.length) {
//     document.write("Indice no encontrado, debe ser menor o igual a " + (lenguajes.length - 1));
// } else {
//     document.write(lenguajes[elemento]);
// }

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");

//for each con funcion de callback

lenguajes.forEach((elemento, index) => {
    document.write("<br/>" + elemento + "-" + index + "<br/>");
});

//aparte de una funcion de CallBack y la utilizacion de un ciclo for
//tambien se puede utilizar el for each convencional
document.write("<ul>");
for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");

//Busquedas con funcion de callback
//Find devuelve el valor si lo encuentra o undefined si no
//findIndex devuelve el indice del elemento si se encuentra en el arreglo
//o -1 si no lo encuentra
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

console.log(busqueda);

//Some 
//The some() method checks if any of the elements in an array pass a test 
var precios = [10, 20, 50, 80, 12];

var someTest = precios.some((precios) => precios >= 20);
console.log(someTest);