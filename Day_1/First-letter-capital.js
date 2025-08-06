function convertingFirstCharacterOfSentenceToUppercase(characterToModify) {
    let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < lowerCaseAlphabet.length; i++) {
        if (characterToModify === lowerCaseAlphabet[i]) {
            return upperCaseAlphabets[i];
        }
    }
    return characterToModify;
}

function accessingTheCharacterforModification(sentenceToBeProcessed) {
    let modifiedSentence = "";
    for (let i = 0; i < sentenceToBeProcessed.length; i++) {
        let currentChar = sentenceToBeProcessed[i];
        if (i === 0 || sentenceToBeProcessed[i - 1] === " ") {
            currentChar = convertingFirstCharacterOfSentenceToUppercase(currentChar)
        }
        modifiedSentence += currentChar;
    }
    return modifiedSentence;
}

const givenSentence = "hello from nui";
console.log(accessingTheCharacterforModification(givenSentence));