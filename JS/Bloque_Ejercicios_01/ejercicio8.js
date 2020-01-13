let number = 0;
let counter = 0;
let multiplicationResult, divisionResult, additionResult, subtractionResult;
let stringData = " ";
multiplicationResult = 1;
divisionResult = 0;
additionResult = 0;
subtractionResult = 0;
alert("Ingrese los números que desea calcular. Para finalizar escriba una letra");
number = parseFloat(prompt("Ingrese el número " + (counter + 1), 0));
divisionResult = number / 1;
subtractionResult = number;
while (isNaN(number) == false) {
    multiplicationResult = multiplicationResult * number;
    additionResult = additionResult + number;
    counter = counter + 1;
    number = parseFloat(prompt("Ingrese el número " + (counter + 1), 0));
    if (isNaN(number)) {
        break;
    } else {
        divisionResult = divisionResult / number;
        subtractionResult = subtractionResult - number;
    }
}
stringData += "<strong>" + "El resultado de la división es: " + divisionResult + "<br/>" +
    "El resultado de la multiplicación es: " + multiplicationResult + "<br/>" +
    "El resultado de la suma es: " + additionResult + "<br/>" +
    "El resultado de la resta es: " + subtractionResult + "<br/>" +
    "</strong>";
document.write(stringData);
console.log(stringData);