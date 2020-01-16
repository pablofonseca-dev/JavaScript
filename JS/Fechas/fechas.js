'use strict';

window.addEventListener('load', () => {
    console.log("DOM Loaded");
    var fecha = new Date();
    var year = fecha.getFullYear();
    var month = fecha.getMonth();
    var date = fecha.getDate();
    var hours = fecha.getHours();
    var textoHora = `
        El año es: ${year}
        El mes es: ${month + 1}
        El día es: ${date}
        La hora es: ${hours}
    `;
    console.log(fecha);
    console.log(textoHora);
    console.log(Math.ceil(Math.random() * 10000));
});