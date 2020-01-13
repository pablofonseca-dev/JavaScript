'use strict';

//Arreglos multidimensionales
//Son arreglos dentro de otros arreglos 

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Alicia', 'Gran Torino', 'Divina Comedia'];

//Para ordenar un arreglo se utiliza el metodo sort
console.log(peliculas);
console.log(peliculas.sort());

//Para darle la vuelta a un arreglo por completo se utiliza el metodo reverse
console.log(peliculas.reverse());
// var cine = [categorias, peliculas];
// console.log(cine[0]);
// console.log(cine[0][1]);
// console.log(cine[1][2]);

// var elemento = "";

// do {
//     elemento = prompt("Introduce tu película");
//     if (elemento == "ACABAR".toUpperCase() || elemento == "ACABAR".toLowerCase()) {
//         break;
//     } else {
//         peliculas.push(elemento);
//     }
// } while (elemento != "ACABAR");

// console.log(peliculas);

//Eliminar un dato de un arreglo por completo
var indice = peliculas.indexOf("Gran Torino");

//Esta condicion es necesaria porque si da -1 significa que no encontró el elemento, tons no se podra 
//borrar algo que no existe.
if (indice > -1) {
    //Splice borra los elementos de un arreglo a partir del indice de uno de sus elementos 
    //el segundo valor indica cuántos valores a la derecha se desean borrar a partir de ese indice
    //Como solo queremos borrar el elemento mismo ponemos uno. 
    peliculas.splice(indice, 1);
}
console.log(peliculas);
//Para convertir un Array a un texto sencillo se utiliza el metodo join
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//Para convertir de una cadena a un arreglo
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", "); //Cada cosa dividida por eso sera un elemento del array
console.log(cadena_array);