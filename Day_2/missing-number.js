// Find the missing numbers in an array

function findMissingNumberInArray(inputArrayElements) {
    // checking whether the input is array or not
    if (!Array.isArray(inputArrayElements)) {
        return "Invalid input, input is not an array";
    }
    // checking whether the array is empty or not
    if (inputArrayElements.length === 0) {
        return "Your List is Empty";
    }


    // checking for the empty slot in array
    for (let i = 0; i < inputArrayElements.length; i++) {
        if (!(i in inputArrayElements)) {
            return "index " + i + " is an empty slot";
        }
    }


    // finding the highest and lowest in the array
    let highestNum = inputArrayElements[0];
    let lowestNum = inputArrayElements[0];
    for (let i = 0; i < inputArrayElements.length; i++) {
        if (inputArrayElements[i] > highestNum) {
            highestNum = inputArrayElements[i];
        }
        if (inputArrayElements[i] < lowestNum) {
            lowestNum = inputArrayElements[i];
        }
    }


    // finding the missing number
    let missingNum = "";
    for (let i = lowestNum; i < highestNum; i++) {
        let numFound = false;
        for (let j = 0; j < inputArrayElements.length; j++) {
            if (i === inputArrayElements[j]) {
                numFound = true;
                break;
            }
        }
        if (!numFound) {
            missingNum += i + " ";
        }
    }
    return "Missing Numbers are " + missingNum;
}

const numberList = [68, 71, 69, 'a', 0, true, 73];
console.log(findMissingNumberInArray(numberList));