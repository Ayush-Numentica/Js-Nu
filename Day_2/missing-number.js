function toFindMissingNumberInArray(inputArrayElements) {
    if (!Array.isArray(inputArrayElements)) {
        return "Invalid input, input is not an array";
    }
    if (inputArrayElements.length === 0) {
        return "Your List is Empty";
    }

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
    return "Missing Numbers are" + missingNum;
}

const numberList = [68, 71, 69, 73];
console.log(toFindMissingNumberInArray(numberList));