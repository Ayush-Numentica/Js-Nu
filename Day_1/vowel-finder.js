function countNumberOfVowels(inputString) {
    let vowelCount = 0;
    if (typeof inputString !== "string") {
        return "It is not a string";
    }
    if (inputString.length === 0) {
        return "Invalid! It is an empty String";
    }
    for (let i = 0; i < inputString.length; i++) {
        const vowels = "aeiouAEIOU"
        for (let j = 0; j < vowels.length; j++) {
            if (inputString[i] === vowels[j]) {
                vowelCount++;
            }
        }
    }
    return vowelCount;
}

let inputString = "numentica ui";
let numberOfVowels = countNumberOfVowels(inputString);
console.log(numberOfVowels);

