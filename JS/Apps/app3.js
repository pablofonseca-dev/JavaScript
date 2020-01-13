let arrayOne = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
    [1, 10]
];

let arrayTwo = [
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
    [2, 9],
    [2, 10, 12]
];

function addTwoDimensionsArr(arr) {
    let tempArr = [];
    let addition = 0;
    for (let xDimension = 0; xDimension <= arr.length - 1; xDimension++) {
        for (let yDimension = 0; yDimension <= arr[xDimension].length - 1; yDimension++) {
            addition = addition + arr[xDimension][yDimension];
        }
        tempArr.push(addition); //Push the addition of the two elements 
        addition = 0; //Reset 
    }
    return tempArr;
}

function multiplyTwoArrs(arr1, arr2) {
    let tempArr = [];
    let multiplyTempContainer = 0;
    if (arr1.length == arr2.length) {
        for (let index = 0; index < arr1.length; index++) {
            multiplyTempContainer = arr1[index] * arr2[index];
            tempArr.push(multiplyTempContainer);
            multiplyTempContainer = 0; //Reset
        }
        return tempArr;
    } else {
        return null;
    }
}



let addArrayOne = addTwoDimensionsArr(arrayOne);
let addArrayTwo = addTwoDimensionsArr(arrayTwo);
console.log(addArrayOne);
console.log(addArrayTwo);
let multiplicationResult = multiplyTwoArrs(addArrayOne, addArrayTwo);
console.log(multiplicationResult);
console.log(NaN.length);