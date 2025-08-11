// Convert number to strings

function convertingTheNumberToString(inputNum) {
    // checking whether is is number only
    if (typeof inputNum !== "number") {
        console.error("error in input");
        return false;
    }

    //if the number is zero
    if (inputNum === 0) {
        return "zero";
    }

    //handling negative number
    let originalNum = inputNum;
    if (inputNum < 0) {
        inputNum = -inputNum;
    }

    // converting number to string
    let numberWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "Nine"];
    let finalNumberWord = "";

    while (inputNum > 0) {
        let lastElement = inputNum % 10;
        inputNum = (inputNum - (inputNum % 10)) / 10;
        for (let i = 0; i < numberWord.length; i++) {
            if (i === lastElement) {
                finalNumberWord = numberWord[i] + finalNumberWord;
            }
        }

    }
    // printing negative infront of negative number
    if (originalNum < 0) {
        return "negative " + finalNumberWord;
    }
    return finalNumberWord;
}

const givenNum = "ayush";
console.log(convertingTheNumberToString(givenNum));