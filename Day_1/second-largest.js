function findSecondLargestNumber(inputArrayItems) {
    if (typeof inputArrayItems === "String") {
        return "It is not an array";
    }
    if (inputArrayItems.length === 0) {
        return "The array is Empty";
    }
    for (let i = 0; i < inputArrayItems.length - 1; i++) {
        let temp = 0;
        for (let j = 0; j < inputArrayItems.length - 1 - i; j++) {
            if (inputArrayItems[j] > inputArrayItems[j + 1]) {
                temp = inputArrayItems[j];
                inputArrayItems[j] = inputArrayItems[j + 1];
                inputArrayItems[j + 1] = temp;
            }
        }
    }
    for (let i = 0; i < inputArrayItems.length; i++) {
        return inputArrayItems[inputArrayItems.length - 2];
    }
    return inputArrayItems;
}

const givenList = [1, 45, 32, 76, 23];
console.log(findSecondLargestNumber(givenList));