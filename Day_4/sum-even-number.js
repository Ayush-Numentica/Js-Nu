//Find the sum of even numbers in an array. find all the even numbers in an array and add them

function findingTheEvenNumberAndTheirSum(givenInputItems) {
    // checking whether the inout is array
    if (!Array.isArray(inputArrayElements)) {
        "Invalid inout, it is not an array"
    }

    // check whether the array is empty
    if (inputArrayElements.length === 0) {
        return "the array is empty";
    }

    // cleaning the array from the empty slot
    let cleanedArray = [];
    for (let i = 0; i < givenInputItems.length; i++) {
        if ((i in givenInputItems) && (typeof givenInputItems[i] !== "string")) {
            cleanedArray[cleanedArray.length] = givenInputItems[i];
        }
    }

    //finding the even number and their sum
    let sumOfEven = 0;
    let evenNum = [];
    for (let i = 0; i < cleanedArray.length; i++) {
        if (cleanedArray[i] % 2 === 0) {
            sumOfEven += cleanedArray[i];
            evenNum[evenNum.length] = cleanedArray[i];
        }
    }
    return "the even number list is " + evenNum + " and the sum of elements are " + sumOfEven;
}

let inputArray = [38, 3, 2, 8, 31];
console.log(findingTheEvenNumberAndTheirSum(inputArray));