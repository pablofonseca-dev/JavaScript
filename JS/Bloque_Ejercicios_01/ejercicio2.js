var number_counter = 0;
var number_plus = 0;
var numbers_average = 0;
var number = 0;

while (number >= 0) {
    number = parseFloat(prompt("Ingrese el número " + (number_counter + 1), 0));
    if (isNaN(number) == false) {
        if (number >= 0) {
            number_counter = number_counter + 1;
            number_plus = number_plus + number;
        } else {
            alert("El número ingresado es negativo.");
            break;
        }
    } else {
        alert("El valor tiene que ser un número");
    }
}
numbers_average = (number_plus / number_counter);
alert("La suma da un resultado exacto de: " + number_plus);
alert("La media da un resultado de: " + numbers_average);