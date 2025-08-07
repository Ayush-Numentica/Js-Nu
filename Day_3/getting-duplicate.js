function findAllTheDuplicatesInArray(inputListItems) {
    // checking whether the inout is array or not
    if (!Array.isArray(inputListItems)) {
        return "Invalid input! it is not an array";
    }

    // check whether the array is empty 
    if (inputListItems.length === 0) {
        return "Your array is empty";
    }


    // checking whether the array does not contain string, empty slot or any character
    let cleanedList = [];
    for (let i = 0; i < inputListItems.length; i++) {
        if ((i in inputListItems) && typeof inputListItems[i] === "number" && !isNaN(inputListItems[i])) {
            cleanedList[cleanedList.length] = inputListItems[i];
        }
    }

    // finding the duplicate items and pushing it into new array

    let duplicateArray = [];

    for (let i = 0; i < cleanedList.length; i++) {
        for (let j = i + 1; j < cleanedList.length; j++) {
            if (cleanedList[i] === cleanedList[j]) {

                // checking if the string is already present or not
                let alreadyExist = false;
                for (let k = 0; k < duplicateArray.length; k++) {
                    if (duplicateArray[k] === cleanedList[i]) {
                        alreadyExist = true;
                        break;
                    }
                }
                if (!alreadyExist) {
                    duplicateArray[duplicateArray.length] = cleanedList[i];
                }
            }
        }
    }
    return duplicateArray;
}


const givenList = [1, 2, 3, 2, 4, 5, 3, 6];
console.log(findAllTheDuplicatesInArray(givenList));