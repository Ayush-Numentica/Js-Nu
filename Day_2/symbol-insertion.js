//Add "@" after each occurrence of character "c" in a string

function insertingSymbolAfterCharacter(inputSentenceElements) {

    // checking whether the input is string or not
    if (typeof inputSentenceElements !== "string") {
        return "Invalid input! It is not a String";
    }

    // checking whether the input string is empty or not
    if (inputSentenceElements.length === 0 || inputSentenceElements === " ") {
        return "Invalid Input! It is an Empty String"
    }

    // inserting the character next to desired index
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

const givenSentence = "cat in the bag";
console.log(insertingSymbolAfterCharacter(givenSentence));