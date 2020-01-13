//Simplificación de Código ECMAScript 6.
var pelicula = nombrePelicula => {
    return "La pelicula es: " + nombrePelicula;
}

sumame = (numero1, numero2, sumaYmuestra, sumaPorDos) => {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 7, dato => {
    console.log("La suma es: " + dato);
}, dato => {
    console.log("La suma por dos es: ", (dato * 2));
});