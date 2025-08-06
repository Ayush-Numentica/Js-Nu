function findingElementSumExcludingLargest(inputArrayElements) {
    if (typeof inputArrayElements === "String") {
        return "It is not an Array";
    }

    if (inputArrayElements.length === 0) {
        return "This is an Empty array";
    }
    let firstElement = inputArrayElements[0];
    for (let i = 0; i < inputArrayElements.length; i++) {
        if (inputArrayElements[i] > firstElement) {
            firstElement = inputArrayElements[i];
        }
    }
    for (let i = 0; i < inputArrayElements.length; i++) {
        if (inputArrayElements[i] !== firstElement) {
            sumOfItems += inputArrayElements[i];
        }
    }
    return sumOfItems;
}

let dataList = [10, 20, 30, 40];
let sumOfItems = 0;
console.log(findingElementSumExcludingLargest(dataList));
