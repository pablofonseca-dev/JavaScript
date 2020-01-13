let number = 0;

number = parseFloat(prompt("Ingrese el número ", 0));

while (isNaN(number) == true) {
    alert("El dato no es un número, introduce el número nuevamente");
    number = parseFloat(prompt("Ingrese el número ", 0));
}

if ((number % 2) == 0) {
    alert("El " + number + " es un número par.");
} else if ((number % 2) != 0) {
    alert("El " + number + " es un número impar.");
} else {
    alert("No se puede definir si este número es par o impar");
}