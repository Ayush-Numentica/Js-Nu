// Group names according to the initial character

function groupingItemsAccordingToInitialCharacter(inputArrayItems) {
    // checking whether the input is array or not
    if (!Array.isArray(inputArrayItems)) {
        return "Invalid Input! The input is not an Array"
    }

    // checking whether the array is empty 
    if (inputArrayItems.length === 0) {
        return "The array is empty"
    }

    // checking whether the inital element of the array is empty string and empty slot
    if (inputArrayItems.length === 1 && (inputArrayItems[0] === " " || !(0 in inputArrayItems) || typeof inputArrayItems[0] !== "string")) {
        return "Invalid input";
    }

    // grouping the elements
    let finalGroupedElement = [];
    let visitedGroup = [];
    for (let i = 0; i < inputArrayItems.length; i++) {

        // ignoring the empty slot, non strings and empty strings
        if (typeof inputArrayItems[i] !== "string" || !(i in inputArrayItems) || inputArrayItems[i] === " ") {
            continue;
        }


        let currentItem = inputArrayItems[i];
        let intialChar = currentItem[0];
        // checking whether the same group is not inserted again
        let alreadyGrouped = false
        for (let j = 0; j < visitedGroup.length; j++) {
            if (visitedGroup[j] === intialChar) {
                alreadyGrouped = true;
                break;
            }
        }

        // if not in same group, add in the group
        if (!alreadyGrouped) {
            let newGroup = []
            for (let k = 0; k < inputArrayItems.length; k++) {
                if (inputArrayItems[k][0] === intialChar) {

                    // checking whether the duplicate item is not present in given array
                    let duplicateItem = false;
                    for (let l = 0; l < newGroup.length; l++) {
                        if (newGroup[l] === inputArrayItems[k]) {
                            duplicateItem = true;
                            break;
                        }
                    }

                    // if not duplicate insert it into the same group
                    if (!duplicateItem) {
                        newGroup[newGroup.length] = inputArrayItems[k];
                    }
                }
            }
            // forming the final group
            finalGroupedElement[finalGroupedElement.length] = newGroup;
            visitedGroup[visitedGroup.length] = intialChar;
        }
    }
    return finalGroupedElement;

}

const givenNameList =  [" "];
console.log(groupingItemsAccordingToInitialCharacter(givenNameList));