'use strict';

window.addEventListener("load", function() {
    this.console.log("DOM Loaded");
    //LocalStorage
    //Con el HTML 5 Local Storage podemos guardar información en el navegador web a modo de sesión. 
    //Se utiliza mucho principalmente cuando los websites son desarrollados completamente en JavaScript. 
    //Especialmente usado en el desarrollo MEANS Stack. 
    //El LocalStorage es una memoria que tenemos en el navegador guardada, donde podemos persistir información del usuario. 

    //Primero se valida que sea compatible con la versión del Browser. 
    if (typeof(Storage) !== null) {
        this.console.log("Local Storage Available");
        //Guardar Datos en Local Storage
        this.localStorage.setItem("title", "Local Storage WebSite");
        //Obtener datos de Local Storage y almacenarlos en variables temporales para luego asignarlas al DOM
        let storage_title = this.localStorage.getItem("title");
        this.document.getElementById("title").innerHTML = storage_title;
        //Crear un objeto JSON y guardarlo en Local Storage
        let user = {
                user_name: "Pablo",
                user_lastName: "Fonseca",
                user_email: "pablo.fonsecam@outlook.com",
                user_website: "pablofonseca-dev.github.io/professional-website"
            }
            //Los datos que se almacenan con formato JSON en local storage suele ser necesario convertirlos a un String 
            //porque usualmente esa es la manera en la que se pueden enviar datos via HTTP, normalmente no se suelen enviar
            //datos en JSON puro, solo transformados en un JSON String y pasa lo mismo cuando queremos almacenar un dato en el local storage
            //tienen que ir convertidos, tienen que ser un string o un número obligtoriamente 
            //El metodo stringify de JSON permite convertir un valor de JSON puro a un JSON String, para solucionar este problema. 
        this.localStorage.setItem("user_data", JSON.stringify(user));
        //Obtener un objeto del Local Storage 
        //Hay que convertir el JSON String en un objeto
        let parsedObject = JSON.parse(this.localStorage.getItem("user_data"));
        let wrapper = document.getElementById("object_information");
        parsedObject.user_name;
        wrapper.append(
            parsedObject.user_name + " - " +
            parsedObject.user_lastName + " - " +
            parsedObject.user_email + " - " +
            parsedObject.user_website
        );
        //Para eliminar un elemento del Local Storage 
        this.localStorage.removeItem("user_data");
        //Entonces esto daria null
        this.console.log(JSON.parse(this.localStorage.getItem("user_data")));
        //Sin embargo los objetos que se crearon con la informacion obtenida siguen existiendo 

        //Para limpiar toda la información del local storage se usa clear();
        this.localStorage.clear();
    } else {
        this.console.log("Browser is not compatible with LocalStorage, update it");
    }
});