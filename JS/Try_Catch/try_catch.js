'use strict';

window.addEventListener('load', () => {
    console.log("DOM Loaded");
    //Para capturar este error se utiliza la estructura try catch
    //Todo el código que sea suseptible a fallos se mete dentro de la estructura try
    try {
        var year = 2020;
        alert(year);
        var vector = new Array(32840238423904823904823094842390);

        //Para decodificar una URL se usa decodeURIComponent
        console.log(decodeURIComponent("https://pablofonseca-dev.github.io/professional_website"));
    } catch (error) {
        console.log(error);
        //console.log(error);
    }
});