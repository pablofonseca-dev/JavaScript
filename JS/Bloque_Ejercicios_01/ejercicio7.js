let number = 0;
let counter = 1;

number = parseFloat(prompt("Ingrese el número ", 0));

if (isNaN(number) == false) {
    while (counter <= 10) {
        document.write("<br/>" + number + "x" + counter + "=" + (number * counter) + "<br/>");
        counter++;
    }
} else {
    document.write("El dato debe ser un número.");
}

document.write("<h1>" + "Tablas de multiplicar" + "</h1>");
for (let index = 1; index <= 10; index++) {
    document.write("<h3>" + "Tabla de multiplicar del " + index + "</h3>");
    for (let number = 1; number <= 10; number++) {
        document.write("<br/>" + index + "x" + number + "=" + (index * number) + "<br/>");
    }
}