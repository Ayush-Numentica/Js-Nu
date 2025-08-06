function swappingTheFirstAndLastElement(givenListItems) {
    let swapVariable = 0;

    if (typeof givenListItems === "String") {
        return "It is not an Array";
    }
    if (givenListItems.length === 0) {
        return "It is an Empty Array";
    }

    if (givenListItems.length > 1) {
        swapVariable = givenListItems[0];
        givenListItems[0] = givenListItems[givenListItems.length - 1];
        givenListItems[givenListItems.length - 1] = swapVariable;
    }
    return givenListItems;

}

const inputList = [3, 5, 9, 2, 7];
console.log(swappingTheFirstAndLastElement(inputList));