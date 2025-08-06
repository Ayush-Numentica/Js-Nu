function findSumOfNumbersInputAsString(inputString) {
    let currentNumber = "";
    let numberList = [];

    for (let i = 0; i <= inputString.length; i++) {
        let inputStringChar = inputString[i];

        if (inputStringChar === "," || i === inputString.length) {
            if (currentNumber !== "") {
                let num = parseFloat(currentNumber);
                numberList[numberList.length] = num;
            }
            currentNumber = "";
        }
        else if (inputStringChar !== " ") {
            currentNumber += inputStringChar;
        }
    }

    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }

    return sum;
}
