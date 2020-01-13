'use strict';

//Plantillas de texto
//Estandares de ECMAScript 6. 
var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus dos apellidos");

//Esto es una plantilla JavaScript de Texto
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3> 
`;

document.write(texto);