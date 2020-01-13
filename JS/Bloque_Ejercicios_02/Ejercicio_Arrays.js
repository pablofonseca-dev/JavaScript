'use strict';

/* Hacer un programa que 

1. Pida 6 números por pantalla y los meta en un array 
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice 
(Se valorará el uso de funciones)

*/

let number = 0;
let counter = 0;
let numberCollection = [];
do {
    number = parseFloat(prompt("Ingrese el número " + (counter + 1), 0));
    if (isNaN(number) == false) {
        numberCollection.push(number);
        counter++;
        if (counter < 6) {
            continue;
        } else {
            break;
        }
    } else {
        alert("El dato debe ser un número");
    }
} while (isNaN(number) == false);

//Make a backup 
let numberCollectionBackup = Object.assign([], numberCollection);
document.write("<h1>" + "Lista de los 6 Números" + "</h1>");
document.write("<ol>");
numberCollection.forEach(elemento => {
    document.write("<li><strong>" + elemento + "</strong></li>");
});
document.write("</ol>");
console.log(numberCollection);

document.write("<h2>" + "Lista de los 6 Números Ordenados" + "</h1>");
document.write("<ol>");
numberCollection.sort(function(a, b) {
    return a - b;
});
numberCollection.forEach(elemento => {
    document.write("<li><strong>" + elemento + "</strong></li>");
});
document.write("</ol>");

document.write("<h2>" + "Colección Inicial" + "</h2>");
document.write("<br/>" + `<strong>[${numberCollectionBackup}]</strong>`);

document.write("<h2>" + "Colección Inicial Invertida" + "</h2>");
document.write("<br/>" + `<strong>[${numberCollectionBackup.reverse()}]</strong>`);

document.write("<br/>" + "El arreglo tiene un total de: " + numberCollectionBackup.length + " valores.");

let findNumberInCollection = parseFloat(prompt("Ingrese el valor que desea buscar", 0));

if (isNaN(findNumberInCollection) == false) {
    let numberSearch = numberCollectionBackup.findIndex(number => number == findNumberInCollection);
    if (numberSearch >= 0) {
        document.write("<br/>" + "Valor " + `${findNumberInCollection}` +
            " encontrado, sus indice es " + numberSearch + " en el backup de la colección.");
    } else {
        document.write("<br/>" + "El valor "
            `${findNumberInCollection}` + " no ha sido encontrado en el backup de la colección.");
    }
} else {
    alert("El dato debe ser un número!");
}