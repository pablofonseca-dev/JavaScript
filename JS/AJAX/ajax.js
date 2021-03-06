'use strict';

/*
Fetch es un método que nos permite hacer peticiones AJAX de una manera más simple, no como
en JavaScript Clásico o Antiguo. 

Una petición AJAX es simplemente una llamada a un servicio REST, a un API REST o a un Back-End que nos
devuelve un resultado y podemos hacer con él lo que deseemos. 

Fetch nos permite usar AJAX de una manera más sencilla y consumir servicios que están en la nube, o en un 
Back-End.

JSON Placeholder es un API REST para hacer pruebas, es la que se utilizará aquí. 

Un API Rest es un Back-End, servicio que devuelve datos en formato JSON. Puede
recibir peticiones por medio de métodos HTTP como POST, PUT, DELETE. Recibe información en JSON
y devuelve la información en JSON. 

*/

window.addEventListener('load', () => {
    console.log("DOM Loaded");
    let user_queue = [];
    let user_list_dom = document.getElementById("user_list");
    fetch("https://jsonplaceholder.typicode.com/users")
        //Método then tiene una función de Call Back que convierte cada dato en JSON    
        .then((data) => data.json())
        .then((data) => {
            user_queue = data;
            console.log(user_queue);
            user_queue.map((user_value, user_index) => {
                let dom_listItem = document.createElement("li");
                let dom_strong = document.createElement("strong");
                dom_listItem.appendChild(dom_strong);
                dom_listItem.append(user_value.name);
                let dom_user_list = document.querySelector("#user_list ol");
                dom_user_list.append(dom_listItem);
            });
            document.querySelector("#loading").style.display = "none";
        });

});