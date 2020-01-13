let number = 0;
number = parseFloat(prompt("Ingrese el número ", 0));

if (isNaN(number) == false) {
    if (number < 0) {
        document.write("El dato debe ser mayor a cero");
    } else {
        if (number == 0) {
            document.write("El cero no tiene dividores");
        } else if (number == 1) {
            document.write("¡La descomposición de 1 es 1!");
        } else {
            document.write("El número " + number + " es divisible por:" + "<br/>");
            for (let index = 1; index <= 10; index++) {
                if ((number % index) == 0) {
                    document.write("<br/>" + index);
                }
            }
        }
    }
} else {
    document.write("El dato debe ser un número.");
}