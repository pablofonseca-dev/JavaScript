'use strict';

$(document).ready(function() {
    console.log("DOM Loaded");
    /*
      Load permite hacer una petición get
      nos permitirá incrustar el resultado en un div.
      Una petición AJAX se puede usar de varias maneras, se puede
      incrustar en la página un trozo de HTML o también se puede recoger
      JSON y ejecutar cualquier tipo de funcionalidad.

      En una aplicación monolítica clásica (una aplicación donde
      el back-end y el front-end van mezclados, ya sea con laravel o symfony) 
      es más común que hayan peticiones de AJAX a una URL en específico y
      ese esa petición nos devolverá un trozo de HTML5, que podremos incrustar
      en algún elemento dentro del DOM.

      Con el método load podremos hacer eso.
    */

    //Por ejemplo, podemos cargar todo el HTML de una página
    let data = $(".data");
    $(data).load("https://reqres.in/");

    //Get y Post
    //Permiten hacer peticiones HTTP en JQuery. 
    /*
        En el protocolo HTTP tenemos varios métodos, el GET, el POST, el DELETE, etc. 
    */

    //Ejemplo con GET
    //solution: https://reqres.in/api/users?page=2

    $.get("https://reqres.in/api/users/", { page: 2 }, function(response) {
        //Se recoge la identificación en el DOM donde se insertarán los datos. 
        let information_wrapper = $(".information_wrapper ul");
        //También se registran en consola 
        console.log(response);
        //Imprime los nombres y apellidos de una peticion
        response.data.forEach((element, index) => {
            console.log(element);
            let listItem = document.createElement("li");
            listItem.append(element.first_name + " " + element.last_name);
            information_wrapper.append(listItem);
        })
    });



    //Primer Ejemplo con Post 
    //Se crea un objeto JSON
    var user = {
        name: "Pablo",
        lastName: "Fonseca",
        web: "https://pablofonseca-dev.github.io/professional-website",
        email: "pablo.fonsecam@outlook.com"
    }

    //Se realiza la petición AJAX
    $.post("https://reqres.in/api/users", user, function(response) {
        //En el caso de que la petición POST se apruebe, se mostrará la respuesta en la línea de comandos. 
        console.log("Example One: Post Response");
        console.log(response);
    });


    //Segundo Ejemplo con POST
    $("#form").submit(function(e) {
        //De esta manera cuando los datos se envíen no me va a redirigir a otra página. 
        e.preventDefault();
        //Se inicializan variables con el valor de cada elemento en el DOM
        let userNameVal = $('input[name="user_name"]').val();
        let lastNameVal = $('input[name="user_lastName"]').val();
        let userEmailVal = $('input[name="user_email"]').val();

        //Se crea un objeto json
        let user_json_data = {
            name: userNameVal,
            lastName: lastNameVal,
            email: userEmailVal
        }

        $.post("https://reqres.in/api/users", user_json_data, function(response) {
            console.log("Example Two: Post Response");
            console.log(response);
            let notification = $("#notification_box");
            notification.append("Submited");
        }).done(function() {
            alert("User Added Correctly");
        });
        return false;
    });

    //Tercer Ejemplo con el método complejo $.ajax
    //No se pudo utilizar la API de reqres.in, sino la de JSON Placeholder. 
    $("#ajaxProve").submit(function(e) {
        e.preventDefault();
        let user = {
            name: $('input[name="userName"]').val(),
            lastName: $('input[name="userLastName"]').val(),
            email: $('input[name="userEmail"]').val(),
            id: 101,
            title: 'Custom Object Title',
            body: 'bar',
            userId: 1
        }
        $.ajax({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(user),
            success: function(response) {
                window.alert("User Logged");
                let notification_box = $("#notificationBox");
                notification_box.innerHTML = "";
                notification_box.append("Submited");
                console.log("Example Three: Post Respone");
                console.log(response);
            },
            beforeSend: function() {
                console.log("Sending User");
            },
            error: function() {
                console.error("An error has occurred");
                let notification_box = $("#notificationBox");
                notification_box.innerHTML = "";
                notification_box.append("Error");
            },
            timeout: 2000
        });
        return false;
    });
});