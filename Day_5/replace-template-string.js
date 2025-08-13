//Template String Replace

function replaceTemplateStringsWithDesiredInput(givenSentence, replacingKeyAndItsValue) {
    // checking whether the given sentence is string or not
    if (typeof givenSentence !== "string") {
        console.error("input is not the string ");
        return false;
    }

    // checking whether the given key and value to be replaced is array or not
    if (!Array.isArray(replacingKeyAndItsValue)) {
        console.error("replacingKeyAndItsValue is not an array");
        return false;
    }

    // checking whether the given sentence is not an empty string
    if (!givenSentence) {
        console.error("given senetence is empty");
        return false;
    }

    // checking whether the replacing key and value is an empty array
    if (replacingKeyAndItsValue.length === 0) {
        console.error("replacingKeyAndItsValue array is empty");
        return false;
    }

    // checking whether the first input in array is not empty slot or a string
    if (replacingKeyAndItsValue.length === 1 && (!(0 in replacingKeyAndItsValue) || replacingKeyAndItsValue[0] === " ")) {
        console.error("first input in array is not properly defined");
        return false;
    }


    // replacing the string
    let replacedSentence=givenSentence;
    
    for (let i = 0; i < replacingKeyAndItsValue.length; i++) {
        //skipping the empty slot
        if (!(i in replacingKeyAndItsValue)) {
            continue;
        }
        const currentItem = replacingKeyAndItsValue[i];
        let replacingKey = currentItem[0];
        let replacingValue = currentItem[1];
        let searchTerm = "#[" + replacingKey + "]";
        const replacingKeyInSentence = givenSentence.includes(searchTerm);
        if(replacingKeyInSentence===false)
        {
            console.error(searchTerm+" is not present in sentence");
            return false;
        }
        replacedSentence = replacedSentence.replaceAll(searchTerm, replacingValue);
    }
    console.log(replacedSentence);
    return true;
}

const templateSentence = "Numentica is 1 company focused on delivering high quality code. It is located in #[location2] #[state] #[phone]";
const inputKeyAndValue = [["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]];
replaceTemplateStringsWithDesiredInput(templateSentence, inputKeyAndValue);

// function replaceTheWord(givenSentence,searchTerm,replacingValue)
// {
//     let finalSentence="";
//     let indexOfGivenSentence=0;
//     while(indexOfGivenSentence<givenSentence.length)
//     {
//         let matchFound=true;
//         for(let j=0;j<searchTerm.length;j++)
//         {
//             if(givenSentence[indexOfGivenSentence+j]!==searchTerm[j])
//             {
//                 matchFound=false;
//                 break;
//             }
//         }
//         if(matchFound)
//         {
//             finalSentence+=replacingValue;
//             indexOfGivenSentence+=searchTerm.length;
//         }
//         if(!matchFound)
//         {
//             finalSentence+=givenSentence[indexOfGivenSentence];
//             indexOfGivenSentence++;
//         }
//     }
//     return finalSentence;
// }


