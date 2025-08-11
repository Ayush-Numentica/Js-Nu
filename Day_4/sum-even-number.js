//Find the sum of even numbers in an array. find all the even numbers in an array and add them

function findingTheEvenNumberAndTheirSum(givenInputItems) {
    // checking whether the inout is array
    if (!Array.isArray(givenInputItems)) {
        "Invalid inout, it is not an array"
    }

    // check whether the array is empty
    if (givenInputItems.length === 0) {
        return "the array is empty";
    }

    // checking if the first item is not a string or empty slot
    if (givenInputItems.length === 1 && (!(0 in givenInputItems) || typeof givenInputItems[0] === "string")) {
        return "Invalid input, your first item is invalid";
    }

    //finding the even number and their sum
    let sumOfEven = 0;
    let evenNum = [];
    for (let i = 0; i < givenInputItems.length; i++) {
        // skipping the non number values
        if (!(i in givenInputItems) && (typeof givenInputItems[i] !== "number")) {
            continue;
        }
        if (givenInputItems[i] % 2 === 0) {
            sumOfEven += givenInputItems[i];
            evenNum[evenNum.length] = givenInputItems[i];
        }
    }
    if (sumOfEven===0) {
        return "Even number is not present in array";
    }
    return " list is " + evenNum + " sum is " + sumOfEven;
}

let inputArray = [3,5,7];
console.log(findingTheEvenNumberAndTheirSum(inputArray));