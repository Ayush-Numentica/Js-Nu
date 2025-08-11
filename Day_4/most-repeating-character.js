//Find the characters that are repeating the most simultaneously

function findTheConsecutivelyRepeatingCharacter(inputString) {
    // checking whether the input is string
    if (typeof inputString !== "string") {
        return "Invalid input! it is not a string";
    }

    // checking for whether the string is empty
    if (inputString.length === 0 || inputString === " ") {
        return "it is an empty string";
    }

    // checking for single character in string
    if(inputString.length===1)
    {
        return inputString;
    }

    //counting the character
    let maxCount = 1;
    let finalChar = "";
    let currentChar = inputString[0]
    let currentCount = 1;

    for (let i = 1; i < inputString.length; i++) {
        if (inputString[i] === currentChar) {
            currentCount++;
        }
        else {
            currentChar = inputString[i];
            currentCount = 1;
        }

        //pushing maximum character in array
        if (currentCount > maxCount) {
            maxCount = currentCount;
            finalChar = "";
            finalChar += currentChar+" ";
        }
        else if (currentCount === maxCount) {

            // checking whether the character is already present
            let alreadyPresence = false;
            for (let j = 0; j < finalChar.length; j++) {
                if (finalChar[j] === currentChar) {
                    alreadyPresence = true;
                    break;
                }
            }
            if (!alreadyPresence) {
                finalChar += currentChar+" ";
            }
        }
    }
    if(maxCount===1)
    {
        return "there is no any consecutive repeating character";
    }
    return finalChar;
}

let givenSentence = "traaainngfornewbie";
console.log(findTheConsecutivelyRepeatingCharacter(givenSentence));