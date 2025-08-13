//Encoder and Decoder
//Encode a string in such a way that the output will be the next characters given as input

let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encodingAndDecodingByShiftingCharacter(inputString, inputShiftTime) {
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
                encodedString += lowerCaseAlphabet[(j + (inputShiftTime % 26)) % 26];
                break;
            }
        }
        // for upper case letters
        for (let j = 0; j < upperCaseAlphabet.length; j++) {
            if (inputString[i] === upperCaseAlphabet[j]) {
                encodedString += upperCaseAlphabet[(j + (inputShiftTime % 26)) % 26];

            }
        }
    }


    //decoding the input string
    let encodedInputString = encodedString;
    let decodedString = "";
    // for lower case letters
    for (let i = 0; i < encodedInputString.length; i++) {
        for (let j = 0; j < lowerCaseAlphabet.length; j++) {
            if (encodedInputString[i] === lowerCaseAlphabet[j]) {
                decodedString += lowerCaseAlphabet[(j - (inputShiftTime % 26)+26) % 26];
            }
        }
        // for upper case letters
        for (let j = 0; j < upperCaseAlphabet.length; j++) {
            if (encodedString[i] === upperCaseAlphabet[j]) {
                decodedString += upperCaseAlphabet[(j - (inputShiftTime % 26)+26) % 26];
            }
        }

    }
    console.log(encodedString);
    console.log(decodedString);
    return true;
}
const givenString = "arunz";
const numberOfShift = 140;
encodingAndDecodingByShiftingCharacter(givenString, numberOfShift);
