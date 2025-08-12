let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encodingAndDecodingTheCharacterToShifts(inputString, inputShiftTime) {
    // checking whether the input string is of string type only
    if (typeof inputString !== "string") {
        console.error("your input is not a string");
        return false;
    }

    // checking whether the shift is of number 
    if (typeof inputShiftTime !== "number") {
        console.error("your shift time is not a number");
        return false;
    }

    // when the shift time is 0 
    if (inputShiftTime === 0) {
        console.log(inputString);
        return true;
    }

    // checking whether there is an empty string
    if (inputString.length === 0 || inputString === " ") {
        console.error("you have entered the empty string");
        return false;
    }

    //encoding the input string
    let encodedString = "";
    // for lower case letters
    for (let i = 0; i < inputString.length; i++) {
        for (let j = 0; j < lowerCaseAlphabet.length; j++) {
            if (inputString[i] === lowerCaseAlphabet[j]) {
                if ((j + inputShiftTime) > 25) {
                    encodedString += lowerCaseAlphabet[(j + inputShiftTime) - 26];
                }
                else {
                    encodedString += lowerCaseAlphabet[j + inputShiftTime];
                }
            }
        }
        // for upper case letters
            for (let j = 0; j < upperCaseAlphabet.length; j++) {
                if (inputString[i] === upperCaseAlphabet[j]) {
                    if ((j + inputShiftTime) > 25) {
                        encodedString += upperCaseAlphabet[(j + inputShiftTime) - 26];
                    }
                    else {
                        encodedString += upperCaseAlphabet[j + inputShiftTime];
                    }
                }
            }
    }


    //decoding the input string
    let encodedInputString=encodedString;
    let decodedString = "";
    // for lower case letters
    for (let i = 0; i < encodedInputString.length; i++) {
        for (let j = 0; j < lowerCaseAlphabet.length; j++) {
            if (encodedInputString[i] === lowerCaseAlphabet[j]) {
                if ((j - inputShiftTime) < 0) {
                    decodedString += lowerCaseAlphabet[(j - inputShiftTime) + 26];
                }
                else {
                    decodedString += lowerCaseAlphabet[j - inputShiftTime];
                }
            }
        }
        // for upper case letters
        for (let j = 0; j < upperCaseAlphabet.length; j++) {
            if (encodedString[i] === upperCaseAlphabet[j]) {
                if ((j - inputShiftTime) < 0) {
                    decodedString += upperCaseAlphabet[(j - inputShiftTime) + 26];
                }
                else {
                    decodedString += upperCaseAlphabet[j - inputShiftTime]
                }
            }
        }

    }
    console.log(encodedString);
    console.log(decodedString);
    return true;
}
const givenString = "arun";
const numberOfShift = 4;
encodingAndDecodingTheCharacterToShifts(givenString, numberOfShift);
