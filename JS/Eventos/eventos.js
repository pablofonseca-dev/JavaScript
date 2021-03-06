//Los eventos son funciones que se ejecutan cada vez que sucede algo. 
//Por ejemplo, cuando el usuario da click en una parte del website. 
//Con JS podemos interactuar con todos los elementos de la página web de manera sencilla.

//Eventos del ratón

//onclick -> al presinonar con el raton una vez
//ondblclick -> presionar dos veces rapidamente 
//Aunque la buena practica es separar por completo el JS del HTML 
'use strict';


//Evento load
//Sirve para cargar primero el HTML y luego el JS, es como el document.ready de jQuery
window.addEventListener('load', function() {
    function cambiarColor() {
        var bg = boton.style.backgroundColor;
        if (bg == "green") {
            boton.style.backgroundColor = "red";
        } else {
            boton.style.backgroundColor = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
    }

    //Para separar el codigo de un evento por completo de HTML se utiliza un EventListener
    var boton = document.querySelector('#boton');

    //Evento click 
    boton.addEventListener("click", function() {
        console.log("Event Listener!");
        cambiarColor();
        //Operador 
        this.style.border = "3px solid red";
    });

    //Evento mouse over -> cuando el raton pasa encima de un elemento realiza una accion
    boton.addEventListener("mouseover", () => {
        boton.style.backgroundColor = "#000";
        boton.style.color = "#fff";
    })

    //Mouseout -> el event listener se activa cuando el raton sale del area del elemento 
    boton.addEventListener("mouseout", () => {
        boton.style.color = "#000";
        boton.style.backgroundColor = "#fff";
    });

    //Eventos de teclado y foco, etc

    var input = document.querySelector('#campo_nombre');
    //Focus -> se ejecuta cuando se le hace foco a un input 
    input.addEventListener('focus', function() {
        console.log("Estas dentro del input");
    });

    //Blur -> se ejecuta cuando se sale del foco de un input 
    input.addEventListener('blur', function() {
        console.log("Estas fuera del input");
    });

    //Keydown -> sucede inmediatamente cuando se pulsa una tecla 
    input.addEventListener('keydown', function(event) {
        //fromCharCode convierte en String el char de event.keycode
        console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));
    });

    //Keypress -> este evento se ejecuta despues de presionar una tecla
    input.addEventListener('keypress', function(event) {
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    });

    //Keyup -> se ejecuta cuando se levanta el dedo de la tecla presionada
    input.addEventListener('keyup', function(event) {
        console.log("[keyup] Tecla soltada");
    });
}); //End event listener of load event