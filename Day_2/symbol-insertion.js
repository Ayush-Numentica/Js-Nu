function insertingSymbolAfterCharacter(inputSentenceElements) {
    if (typeof inputSentenceElements !== "string") {
        return "Invalid input! It is not a String";
    }

    if (inputSentenceElements.length === 0 || inputSentenceElements === " ") {
        return "Invalid Input! It is an Empty String"
    }

    let modifiedSentence = "";
    let characterPresence = false;
    for (let i = 0; i < inputSentenceElements.length; i++) {
        let currentChar = inputSentenceElements[i];
        modifiedSentence += currentChar;
        if (currentChar === "c") {
            modifiedSentence += "@";
            characterPresence = true;
        }
    }
    if (!characterPresence) {
        return "The sentence will be " + "'" + inputSentenceElements + "'" + " as it does contain 'c'";
    }
    return modifiedSentence;
}

const givenSentence = "abab";
console.log(insertingSymbolAfterCharacter(givenSentence));