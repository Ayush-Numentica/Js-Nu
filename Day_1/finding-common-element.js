function toFindTheCommonElementFromArray(firstList, secondList, thirdList) {

    // checking whether the input is array or not
    if (!Array.isArray(firstList) || !Array.isArray(secondList) || !Array.isArray(thirdList)) {
        return ("Invalid input, Enter Array only");
    }

    // checking whether the entered array is empty or not
    if (firstList.length === 0 || secondList.length === 0 || thirdList.length === 0) {
        return ("You have entered the empty array");
    }


    //checking empty slots in arrays
    let emptySlotCount = 0;
    for (i = 0; i < thirdList.length; i++) {
        if (!(i in firstList)) {
            console.log("There is an empty slot at index " + i + " in your first array");
            emptySlotCount++;
        }
        if (!(i in secondList)) {
            console.log("There is an empty slot at index " + i + " in your second array");
            emptySlotCount++;
        }
        if (!(i in thirdList)) {
            console.log("There is an empty slot at index " + i + " in your third array");
            emptySlotCount++
        }
    }


    // finding common element from the firstList and secondList
    let firstOutput = [];


    for (let i = 0; i < firstList.length; i++) {
        for (let j = 0; j < secondList.length; j++) {
            // finding common element
            if (firstList[i] === secondList[j]) {
                //checking for duplicate element
                let duplicateElement = false;
                for (let k = 0; k < firstOutput.length; k++) {
                    if (firstOutput[k] === firstList[i]) {
                        duplicateElement = true;
                        break;
                    }
                }
                if (!duplicateElement) {
                    firstOutput[firstOutput.length] = firstList[i];
                }
            }
        }
    }

    // finding common between firstOutput and thirdList
    let finalCommonList = [];

    for (let i = 0; i < firstOutput.length; i++) {
        for (let j = 0; j < thirdList.length; j++) {

            //finding common element
            if (firstOutput[i] === thirdList[j]) {
                //checking for duplicate element
                let duplicateElement = false;
                for (let k = 0; k < finalCommonList.length; k++) {
                    if (finalCommonList[k] === firstOutput[i]) {
                        duplicateElement = true;
                        break;
                    }
                }
                if (!duplicateElement) {
                    finalCommonList[finalCommonList.length] = firstOutput[i];
                }
            }
        }
    }
    if (emptySlotCount === 0) {
        if (finalCommonList.length > 0) {
            return finalCommonList;
        }
        else {
            return "There if no any common element in the list";
        }
    }
    return "No Checking could be done";
}

const firstArray = [2,2,2 ];
const secondArray = [3, 3, 2];
const thirdArray = [7,3, 2];
console.log(toFindTheCommonElementFromArray(firstArray, secondArray, thirdArray));