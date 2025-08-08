function checkingTheInputArray(inputArrayElements) {
    // checking whether the inout is array
    if (!Array.isArray(inputArrayElements)) {
        "Invalid inout, it is not an array"
    }

    // check whether the array is empty
    if (inputArrayElements.length === 0) {
        return "the array is empty";
    }

    return null;
}

module.exports = checkingTheInputArray;
const checkingTheInputArray = require('./edgecases');