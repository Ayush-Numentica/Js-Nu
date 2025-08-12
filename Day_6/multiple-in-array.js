//Get the result of the array in multiples

function findingAndStoringNumberMultipleInArray(inputNumber, timesOfMultiplication) {
    // checking whether the input is array or not
    if (typeof inputNumber !== "number" || typeof timesOfMultiplication !== "number") {
        console.error("input is invalid");
        return false;
    }

    // checking either of the number is zero
    if (inputNumber === 0 || timesOfMultiplication === 0) {
        console.error("0");
        return false;
    }

    //finding multiples and storing in array
    let finalMultipleContainingArray = [];
    let signForNegative = -1;

    // when the input number is positive
    if (inputNumber > 0) {
        for (let i = 1; i <= timesOfMultiplication; i++) {
            finalMultipleContainingArray.push(i * inputNumber);
        }
    }

    // when input number is negative
    if (inputNumber < 0) {
        for (let i = 1; i <= timesOfMultiplication; i++) {
            finalMultipleContainingArray.push((i * inputNumber));
        }
    }

    // when both input number and times of multiplication is negative
    if (inputNumber < 0 && timesOfMultiplication < 0) {
        for (let i = 1; i <= timesOfMultiplication; i++) {
            finalMultipleContainingArray.push((i * inputNumber));
        }
    }

    // when times of multiplication is negative
    if (timesOfMultiplication < 0) {
        let multiples = -timesOfMultiplication;
        for (let i = 1; i <= multiples; i++) {
            finalMultipleContainingArray.push((i * inputNumber * signForNegative));
        }
    }
    console.log(finalMultipleContainingArray);
    return true;
}

const givenNum = 2;
const numberOfMultiple = 5;
findingAndStoringNumberMultipleInArray(givenNum, numberOfMultiple);