function putStarBeforeAndAfterString(inputString, inputStarCount) {
    let stringOfStars = "";
    for (let i = 0; i < inputStarCount; i++) {
        stringOfStars += "*";
    }
    return stringOfStars + inputString + stringOfStars;
}

let givenString = "code";
let starCount = 3;
console.log(putStarBeforeAndAfterString(givenString, starCount))