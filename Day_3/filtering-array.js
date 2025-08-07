//from array filter out the invalid items

function filteringTheInvalidItemsFromArray(originalArray, filteringCriteria) {
    // checking whether the input is array or not
    if (!Array.isArray(originalArray)) {
        "Invalid input! it is not an array";
    }

    // checking whether the filtering criteria is string
    if (typeof filteringCriteria !== "string") {
        "Invalid input!"
    }

    // cleaning the array if it contains the empty slot
    let cleanedArray = [];
    for (let i = 0; i < originalArray.length; i++) {
        if ((i in originalArray)) {
            cleanedArray.push(originalArray[i]);
        }
    }

    // filtering the array
    let invalidItems = [];
    let validItems=[];
    for (let i = 0; i < cleanedArray.length; i++) {
        if (typeof cleanedArray[i] !== filteringCriteria) {
            invalidItems.push(cleanedArray[i]);
        }
        else{
            validItems.push(cleanedArray[i]);
        }
    }
    return "Invalid Items are "+"["+invalidItems+"]"+ " and " + "Valid items are "+"["+ validItems+"]";
}

const givenList = ["a", "d", , true, "cd", 33];
const givenDataType = "number";
console.log(filteringTheInvalidItemsFromArray(givenList, givenDataType));