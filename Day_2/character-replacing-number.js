//Replace all numbers in a string with a given character


function toReplaceNumbersToCharacter(originalString, replacingCharacter) {

    //to check whether the input is of string type only
    if (typeof originalString !== "string" && typeof replacingCharacter !== "string") {
        return "Invalid input! It is not a String";
    }

    // check whether the input string is a non-empty string
    if (originalString.length === 0 || originalString === " " || replacingCharacter.length === 0 || replacingCharacter === " ") {
        return "Invalid input! It is an Empty String";
    }

    //replace the numbers with character
    let numberPresence = false;

    let replacedString = "";
    for (let i = 0; i < originalString.length; i++) {
        let currentCharacter = originalString[i];

        if (!isNaN(currentCharacter)) {
            replacedString += replacingCharacter;
            numberPresence = true;
        }
        else {
            replacedString += currentCharacter;
        }
    }

    // if the string does not contain any number
    if (!numberPresence) {
        return "The String Will be" + "'" + originalString + "'" + "as it does not contain any 'Number'";
    }

    return replacedString;
}

const givenString = "arun@123";
const givenReplacingCharacter = "d";
console.log(toReplaceNumbersToCharacter(givenString, givenReplacingCharacter));