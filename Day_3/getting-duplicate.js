function findAllTheDuplicatesInArray(inputListItems) {
    // checking whether the input is array or not
    if (!Array.isArray(inputListItems)) {
        return "Invalid input! it is not an array";
    }

    // check whether the array is empty 
    if (inputListItems.length === 0) {
        return "Your array is empty";
    }

    // checking whether the inital element of the array is empty string and empty slot
    if (inputListItems.length === 1 && (inputListItems[0] === " " || !(0 in inputListItems) || typeof inputListItems[0] !== "number")) {
        return "Invalid input";
    }

    // finding the duplicate items and pushing it into new array
    let duplicateItemArray = [];
    for (let i = 0; i < inputListItems.length; i++) {


        if (!(i in inputListItems) || typeof inputListItems[i] !== "number" || isNaN(inputListItems[i])) {
            continue;
        }
        for (let j = i + 1 ; j < inputListItems.length ; j++) {
            if (inputListItems[i] === inputListItems[j]) {

                // checking if the string is already present or not
                let alreadyExist = false;
                for (let k = 0; k < duplicateItemArray.length; k++) {
                    if (duplicateItemArray[k] === inputListItems[i]) {
                        alreadyExist = true;
                        break;
                    }
                }
                if (!alreadyExist) {
                    duplicateItemArray[duplicateItemArray.length] = inputListItems[i];
                }
            }
        }
    }
    return duplicateItemArray;
}


const givenList = [,];
console.log(findAllTheDuplicatesInArray(givenList));