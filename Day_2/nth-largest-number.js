// Find the Nth largest number in an array

function toFindTheNthLargestNumberFromArray(inputItemList, nthNumber) {

    // check whether the input is of type array or not and number input is of type number or not
    if (!(Array.isArray(inputItemList)) || typeof nthNumber !== "number") {
        return "It is not an Array";
    }

    // check if the input array is empty or not
    if (inputItemList.length === 0) {
        return "The Array is Empty";
    }

    // check whether the input number is 0 or not
    if (nthNumber === 0) {
        return "Your target Number is Invalid";
    }

    // checking that the searched element must be within the array itself
    if (inputItemList.length < nthNumber) {
        return "You are accessing out of the List"
    }

    // checking whether the array contain string or not
    let stringPresence = false;
    for (let i = 0; i < inputItemList.length; i++) {

        // checking for the empty slot in array
        if (!(i in inputItemList)) {
            return "index " + i + " is an empty slot";
        }

        if (typeof inputItemList[i] === "string") {
            stringPresence = true;
        }
    }

    //sorting and returning the desired target
    let swapVariable = 0;
    for (let i = 0; i < inputItemList.length - 1; i++) {
        for (let j = 0; j < inputItemList.length - 1 - i; j++) {
            if (inputItemList[j] > inputItemList[j + 1]) {
                swapVariable = inputItemList[j];
                inputItemList[j] = inputItemList[j + 1];
                inputItemList[j + 1] = swapVariable;
            }
        }
    }
    if (stringPresence) {
        return "You have entered string in your list";
    }
    return inputItemList[inputItemList.length - nthNumber];
}

const numberList = [1, 3, 9, 2, 4];
const targetNumber = 4;
let numberListSize = numberList.length;
console.log(toFindTheNthLargestNumberFromArray(numberList, targetNumber));