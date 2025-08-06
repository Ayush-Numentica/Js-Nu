function toReplaceNumbersToCharacter(originalString, replacingCharacter) {
    if (typeof originalString !== "string" && typeof replacingCharacter !== "string") {
        return "Invalid input! It is not a String";
    }
    if (originalString.length === 0 || originalString === " " || replacingCharacter.length === 0 || replacingCharacter === " ") {
        return "Invalid input! It is an Empty String";
    }
    let numberPresence = false;
    let replacedString = ""
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
    if (!numberPresence) {
        return "The String Will be" + "'" + originalString + "'" + "as it does contain any 'Number'";
    }
    return replacedString;
}

const givenString = "arun@123";
const givenReplacingCharacter = "d";
console.log(toReplaceNumbersToCharacter(givenString, givenReplacingCharacter));