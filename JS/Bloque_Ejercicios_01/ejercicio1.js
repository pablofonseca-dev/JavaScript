var booleanValidation = true;
do {
    var number1 = parseInt(prompt("Ingrese el primer número: "));
    var number2 = parseInt(prompt("Ingrese el segundo número: "));
    if (isNaN(number1) === false && isNaN(number2) === false) {
        console.log(typeof(number1));
        if (number1 > 0 && number2 > 0) {
            if (number1 > number2) {
                console.log("El número mayor es " + number1 + ", el número menor es: " + number2 + ". No son iguales.");
            } else if (number1 < number2) {
                console.log("El número mayor es " + number2 + ", el número menor es: " + number1 + ". No son iguales.");
            } else {
                console.log("Ambos número son iguales");
            }
            booleanValidation = false;
        } else {
            console.log("El número no puede ser menor o igual a cero.");
            console.log("Vuelva a ingresar los datos.");
            booleanValidation = true;
        }
    } else {
        console.log("El dato debe ser un número.");
        console.log("Vuelva a ingresar los datos.");
        booleanValidation = true;
    }
} while (booleanValidation);