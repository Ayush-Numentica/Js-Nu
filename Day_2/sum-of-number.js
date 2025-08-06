// Calculate the sumOfListItems of numbers in a comma-separated string

function findSumOfNumbersInputAsString(inputString) {

    // checking whether the input is string only
    if(typeof inputString !== "string")
    {
        return "Invalid input! Input is not a String";
    }

    // checking whether the input string is empty 
    if(inputString.length===0 || inputString.length===" ")
    {
        return "Invalid input! the string is empty";
    }

    // checking whether the string element is only number
    for(let i=0;i<inputString.length;i++)
    {
        if(isNaN(inputString[i]))
        {
            return inputString[i]+"It is not a valid input";
        }
    }

    let currentNumber = "";
    let numberList = [];

    for (let i = 0; i <= inputString.length; i++) {
        let inputStringChar = inputString[i];

        if (inputStringChar === "," || i === inputString.length) {
            if (currentNumber !== "") {
                let parsedNumber = parseFloat(currentNumber);
                numberList[numberList.length] = parsedNumber;
            }
            currentNumber = "";
        }
        else if (inputStringChar !== " ") {
            currentNumber += inputStringChar;
        }
    }

    let sumOfListItems = 0;
    for (let i = 0; i < numberList.length; i++) {
        sumOfListItems += numberList[i];
    }

    return sumOfListItems;
}

let stringOfNumbers="1.5, 2, 44, 66, 12, 90";
console.log(findSumOfNumbersInputAsString(stringOfNumbers));
