//DOM - Document Object Model 
//Append significa añade despues
//Prepend significa añade antes
'use strict';

//Conseguir elementos con un ID concreto
var box = document.getElementById('my-box');

function cambiaColor(color) {
    box.style.color = color;
}

box.innerHTML = "Texto en la caja desde JS!";
box.style.background = "red";
box.style.padding = "20px";
box.style.color = "#FFFFFF";
box.className = "clase1 clase2";
console.log(box);

//Query Selector, una manera más simple de seleccionar elementos, muy parecido a JQuery
var boxQuery = document.querySelector("#my-box"); //Para seleccionar un ID
//var boxQuery = document.querySelector("p"); Para seleccionar etiquetas
//var boxQuery = document.querySelector(".p"); Para seleccionar clases

//Conseguir elementos por su etiqueta
//Esto retorna un HTMLCollection, es decir, una colección de elementos HTML. 
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);
var contenidoDiv2 = todosLosDivs[2].innerHTML;
console.log(contenidoDiv2);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
seccion.append(hr);

var valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        /*
        Text Node Explained 
        The createTextNode() method creates a Text Node with the specified text.

        Tip: Use the createElement() method to create an Element Node with the specified name.
        Tip: After the Text Node is created, use the element.appendChild() or element.insertBefore() method to append it to an element.
        */
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }
}
//Conseguir elementos por su clase
var divsRojos = document.getElementsByClassName('rojo');
console.log(divsRojos);


for (let index in divsRojos) {
    if (divsRojos[index].className == "rojo") {
        divsRojos[index].style.backgroundColor = "red";
    } else {
        console.log("Got it, there is a function");
    }
}

var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.backgroundColor = "yellow";

//Query Selector 

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);