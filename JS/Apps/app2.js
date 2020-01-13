let element = null;
let comparisonElement = null;
let booleanResult = null;
let fruits = [
    "Pineapple",
    "Strawberry",
    "Coconut",
    "Blackberry",
    "Watermelon",
    "Nectarine",
    "Kiwi",
    "Mango",
    "Kiwi"
];

let evaluation = evaluateRepeatedValues(fruits);
if (evaluation != null) {
    //Evaluate it again
    if (evaluateRepeatedValues(evaluation) == null) {
        document.write("The queue has been cleaned with unique elements.");
    } else {
        document.write("The queue could not be cleaned.");
    }
}



function evaluateRepeatedValues(arr) {
    let dataString = "";
    let counter = 0;
    let repeatedElementsArr = [];
    for (let x = 0; x <= arr.length - 1; x++) {
        element = arr[x];
        for (let y = 0; y <= arr.length - 1; y++) {
            comparisonElement = arr[y];
            if (x != y) {
                if (element === comparisonElement) {
                    booleanResult = true;
                    repeatedElementsArr.push(y);
                    counter = counter + 1;
                }
            }
        }
        if (booleanResult) {
            if (element != undefined) {
                dataString += "The element <strong>" + element + "</strong> has been repeated a total of " + counter + " time(s).";
                dataString += "<br/>";
            }
            console.error(fruits);
            counter = 0; //Reset
            booleanResult = false;
            //Elements Memory Purging
            for (let aux = 0; aux <= arr.length - 1; aux++) {
                delete arr[repeatedElementsArr[aux]];
            }
        }
    }

    if (dataString == "") {
        console.log("%cNow, there are not repeated elements. Fixed correctly", "color: rgb(239, 194, 15)");
    } else {
        document.write(dataString);
        let newArrayStructure = [];
        for (let index = 0; index <= arr.length - 1; index++) {
            if (arr[index] != null) {
                newArrayStructure.push(arr[index]);
            }
        }

        console.error(arr);
        console.log("%c" + newArrayStructure, "color: green");
        return newArrayStructure;
    }

}