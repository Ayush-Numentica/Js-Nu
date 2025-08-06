function doubleEvenNumbersInArray(inputArrayItems) {

    if (typeof inputArrayItems !== "array") {
        return "It is not an array";
    }
    if (inputArrayItems.length === 0) {
        return "The array is empty"
    }
    for (let i = 0; i < inputArrayItems.length; i++) {
        if (inputArrayItems[i] % 2 == 0) {
            inputArrayItems[i] += inputArrayItems[i];
        }
    }
    return inputArrayItems;
}

const numberList = [2, 5, 8, 9, 4];
console.log(doubleEvenNumbersInArray(numberList))