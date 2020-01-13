'use strict';

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript, curso de Victor Robles";
var texto2 = "es muy buen curso";

var dato = texto1.toLowerCase();
dato = texto2.toUpperCase();
dato = numero.toString();
console.log(dato);

//Calcular longitud de un texto
var nombre = "Pablo Fonseca";
nombre = ["hola", "hola"];

console.log(nombre.length);

//Concatenar - Unir textos 
var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);

//o

var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

//Métodos de busqueda
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var lastBusqueda = texto1.lastIndexOf("curso");
console.log(lastBusqueda);

var searchBusqueda = texto1.search("curso");
console.log(searchBusqueda);

//Match devuelve una coleccion con las ocurrencias
var matchBusqueda = texto1.match("curso");
console.log(matchBusqueda);

//Sin embargo, para buscar todas las ocurrencias se debe usar una expresion regular 
matchBusqueda = texto1.match(/curso/gi);
console.log(matchBusqueda);

//Para partir un String desde un indice hasta una cantidad de letras despues de ese indice se usa substr
var substrBusqueda = texto1.substr(14, 5);
console.log(substrBusqueda);

//Para sacar un caracter a partir de un indice dado se usa charAt
var charBusqueda = texto1.charAt(44);
console.log(charBusqueda);

//Para verificar si un texto inicia con una secuencia de caracteres se usa el metodo startsWith
var startBusqueda = texto1.startsWith("Bienvenido");
console.log(startBusqueda);

//Para verificar si un texto termina con una secuencia de caracteres se usa el metodo endsWith
var endBusqueda = texto1.endsWith("Victor Robles");
console.log(endBusqueda);

//Para verificar si un texto incluye una palabra se usa includes
var includeBusqueda = texto1.includes("JavaScript");
console.log(includeBusqueda);

//Funciones de reemplazo
//Para reemplazar un texto por otro se utiliza la funcion replace
var replaceTexto = texto1.replace("JavaScript", "MongoDB");
console.log(replaceTexto);

//Para partir un texto a partir de un indice y guardar el resto de caracteres en una variable 
//se utiliza el metodo slice
var sliceTexto = texto1.slice(14);
console.log(sliceTexto);

//El mismo metodo slice sirve para cortar un string desde un indice a otro, como un rango
var slice2Texto = texto1.slice(14, 22);
console.log(slice2Texto);

//El metodo split sirve para recordar cada una de las palabras de un texto y almacenarlas como 
//posiciones de una coleccion
//con esta caja negra se pueden desarrollar varias herramientas, como buscadores de informacion por ejemplo. 
var splitTexto = texto1.split(" ");
console.log(splitTexto);

//Metodo trim
//Recorta o quita los espacios por delante y por detras de un string 
//Ejemplo
var texto = "           hola mundo           ";
console.log(texto);
console.log(texto.trim());