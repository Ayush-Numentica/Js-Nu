// removing the leading or trailing zero

function checkingEdgeCase(inputString, positionOfRemoving) {
    // whether the input is string or not , 
    if (typeof inputString !== "string" || typeof positionOfRemoving !== "string") {
        console.error("input is not a string");
        return false;
    }
    // checking for the empty string
    if (inputString.length === 0 || inputString === " " || positionOfRemoving.length === 0 || positionOfRemoving === " ") {
        console.error("your string is empty");
        return false;
    }
    return true;
}

function removeLeadingAndTrailingZeroes(givenString, placesWhereToRemove) {
    if (!checkingEdgeCase(givenString, placesWhereToRemove)) {
        return false;
    }

    // for leading zeroes
    if (placesWhereToRemove === "leading") {
        let startIndex = 0;
        while (startIndex < givenString.length && givenString[startIndex] === "0") {
            startIndex++;
        }
        if (startIndex === givenString.length) {
            console.log("0, as only zero in your input");
            return true;
        }
        else {
            console.log(givenString.slice(startIndex));
        }
    }

    // for trailing zero
    let finalString=" ";
    if (placesWhereToRemove === "trailing") {
        let startIndex = givenString.length - 1;
        while (startIndex >= 0 && givenString[startIndex] === "0") {
            startIndex--;
        }
        if (startIndex === -1) {
            console.log("0, as only zero in your input");
            return true;
        }
        else {
            console.log(givenString.slice(0, startIndex + 1));
        }
    }
    return true;
}

const inputNumber = "0001110000";
const positionOfModification = "trailing";
removeLeadingAndTrailingZeroes(inputNumber, positionOfModification);