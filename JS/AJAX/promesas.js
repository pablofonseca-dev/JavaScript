'use strict';

/*

Este es el segundo archivo de AJAX 

Las promesas son necesarias para evitar el CallBack Hell. 

Un CallBack Hell es un formato donde hay un CallBack dentro de otro CallBack y así sucesivamente, 
hasta tener un código fuente muy ilegible y difícil de mantener. Esto suele suceder cuando no se
utilizan las promesas a la hora de realizar procesos asíncronos, o solicitudes a APIS Rest. 

En este caso tenemos la promesa fetch, donde se solicita un bloque de datos de un server y se realiza
una secuencia de thens. Básicamente son procesos que esperan a que el otro finalice para empezar su ejecución, 
y así seguidamente...

Aqui se utilizará el API reqers.in, que es muy parecida a JSON PlaceHolder FAKE API.
*/

window.addEventListener('load', () => {
    console.log("DOM Loaded");
    let user_queue;
    let user_list_dom = document.getElementById("user_list");
    let teacher_dom = document.getElementById("teacher_user");
    let teacher_dom_list = document.querySelector("#teacher_user ol");
    let user;
    //Este patrón se llama en JS "Promise Chaining". 
    getUsers()
        //Método then tiene una función de Call Back que convierte cada dato en JSON    
        .then((data) => data.json())
        //Ahora la promesa tiene un método para obtener los valores e imprimirlos en pantalla
        //Esto una vez que todos los datos se conviertan en JSON.
        .then((users) => {
            user_queue = users;
            console.log(user_queue.data);
            listUsers(user_queue.data);
            //Cuando termina retorna el valor de la promesa getInfo
            return getInfo(); //Retorna la llamada a la promesa creada manualmente
        })
        .then((data) => {
            let list_item = document.createElement("li");
            list_item.append(data);
            teacher_dom_list.append(list_item);
            return getSingleUser();
        })
        .then((data) => data.json())
        .then((data) => {
            user = data;
            console.log(user.data);
            listSingleUser(user.data);
        })
        //El método catch es esencial para capturar los errores y las excepciones que suceden en el codigo.
        .catch(error => {
            console.error(error);
        });
});

let getUsers = () => {
    return fetch("https://reqres.in/api/users?paged=2");
}

let getSingleUser = () => {
    return fetch("https://reqres.in/api/users/2");
}

//getInfo es un ejemplo para aprender cómo se crea una promesa desde cero. 
//getInfo es una promesa que retorna el objeto teacher, si hay un error retorna un mensaje cancelando la 
//peticion. 
let getInfo = () => {
    var teacher = {
            first_name: "Pablo",
            last_name: "Fonseca",
            url: "https://pablofonseca-dev.github.io/professional-website"
        }
        //La palabra reservada new sirve para instanciar una clase, para crear un objeto. 
    return new Promise((resolve, reject) => {
        var teacher_string = "";
        setTimeout(function() {
            var teacher_string = JSON.stringify(teacher);
            if (typeof(teacher_string) != "string" || teacher_string == "") {
                return reject("Error 1");
            } else {
                return resolve(teacher_string);
            }
        }, 3000);
    });


}

let listUsers = (user_queue) => {
    user_queue.map((user_value, user_index) => {
        let dom_listItem = document.createElement("li");
        dom_listItem.append(user_value.first_name + " " + user_value.last_name);
        let dom_user_list = document.querySelector("#user_list ol");
        dom_user_list.append(dom_listItem);
    });
    document.querySelector(".loading_users").style.display = "none";
};
//debugger;
/* 
    Esto solo devuelve un valor, no una coleccion, por ende no se usa un map.
*/
let listSingleUser = (user) => {
    let dom_listItem = document.createElement("li");
    let dom_image = document.createElement("img");
    dom_listItem.append(user.first_name + " " + user.last_name);
    dom_image.src = user.avatar;
    let dom_user = document.querySelector("#single_user");
    dom_user.append(dom_image);
    let dom_user_list = document.querySelector("#single_user ol");
    dom_user_list.append(dom_listItem);
    document.querySelector(".loading_user").style.display = "none";
};