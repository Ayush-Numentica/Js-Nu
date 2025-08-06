// Merge two arrays and sort them from lowest to highest

function toMergeTwoArrayAndSort(inputFirstArray, inputSecondArray) {
    // cheking whether the input is array or not
    if (!Array.isArray(inputFirstArray) || !Array.isArray(inputSecondArray)) {
        return "Invalid input,input is not an array";
    }

    //checking whether the input array is empty or not
    if (inputFirstArray.length === 0 || inputSecondArray.length === 0) {
        return "Your List is Empty ";
    }
    
    //merging the array

    let mergedList = [];
    for (let i = 0; i < inputFirstArray.length; i++) {
        mergedList[mergedList.length] = inputFirstArray[i];
    }
    for (let i = 0; i < inputSecondArray.length; i++) {
        mergedList[mergedList.length] = inputSecondArray[i];
    }

    // sorting the array

    let swappingVariable = 0;
    for (let i = 0; i < mergedList.length - 1; i++) {
        for (let j = 0; j < mergedList.length - 1 - i; j++) {
            if (mergedList[j] > mergedList[j + 1]) {
                swappingVariable = mergedList[j];
                mergedList[j] = mergedList[j + 1];
                mergedList[j + 1] = swappingVariable;
            }
        }
    }
    return mergedList;
}

const firstList = [1, 4, 6];
const secondList = [2, 5, 3];
console.log(toMergeTwoArrayAndSort(firstList, secondList))
