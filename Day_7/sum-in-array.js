function getPairsEqualsSum(inputListItems, targetSum) {
    // checking whether the input list is an array
    if (!Array.isArray(inputListItems)) {
        console.error("input list is not an array");
        return false;
    }

    // checking for empty array ar single digit array
    if (inputListItems.length < 2) {
        console.error("pair cannot be found as items are not appropriate, there must be two input");
        return false;
    }

    // checking target sum is a number or not
    if (typeof targetSum !== "number") {
        console.error("given target is not a number");
        return false;
    }

    // getting pair
    let finalPairList = [];
    let pairFound=false;
    for (let i = 0; i < inputListItems.length; i++) {
        for (let j = i + 1; j < inputListItems.length; j++) {
            if (inputListItems[i] + inputListItems[j] === targetSum) {
                let itemAlreadyPresent = false;
                for (let k = 0; k < finalPairList.length; k++) {
                    if (inputListItems[i] === finalPairList[k]) {
                        itemAlreadyPresent = true;
                    }
                }
                if (!itemAlreadyPresent) {
                    finalPairList = [];
                    finalPairList.push(inputListItems[i]);
                    finalPairList.push(inputListItems[j]);
                    console.log(finalPairList);
                }
                pairFound=true;
            }
        }
    }
    if(!pairFound)
    {
        console.error("there is no any pair whose sum is target sum")
        return false;
    }
    return finalPairList;
}
const givenNumbers = [-1, 2, -4, 6, 8, -1];
const givenSum = -2;
getPairsEqualsSum(givenNumbers, givenSum);