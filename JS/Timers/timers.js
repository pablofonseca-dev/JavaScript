'use strict';

window.addEventListener('load', () => {
    //Timers
    //Set interval nos permite ejecutar una funcion de CallBack o un bloque de codigo cada ciertos 
    //segundos. El codigo que hay en la funcion de callback se ejecutara hasta el infinito en esa sequencia de tiempo
    //a no ser que un factor externo lo impida
    var tiempo = setInterval(function() {
        for (let index = 0; index < 5; index++) {
            var getNode = document.querySelector("#timer_change");
            if (getNode.style.fontSize == "50px") {
                getNode.style.fontSize = "30px";
            } else {
                getNode.style.fontSize = "50px";
            }
        }
    }, 2000);

    //Set time out es parecido a set interval, no obstante ejecuta el codigo una sola vez
    //despues de x milisegundos. 
    //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    var timeout = setTimeout(function() {
        for (let index = 0; index < 5; index++) {
            var getNode = document.querySelector("#timer_change_timeout");
            if (getNode.style.fontSize == "50px") {
                getNode.style.fontSize = "30px";
            } else {
                getNode.style.fontSize = "50px";
                getNode.innerHTML = "hello, world STOP!";
            }
        }
    }, 500);

    //Factor externo para parar un set interval
    //Caso -> presionar boton
    var botton = document.querySelector('#stop');
    botton.addEventListener('click', () => {
        console.log("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });


});