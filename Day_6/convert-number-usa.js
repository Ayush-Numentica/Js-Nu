// Convert a ten digit number into US phone formatting

function convertTheNumberToTheUSAFormat(inputNumber) {
    // checking whether the input is a number or not
    if (typeof inputNumber !== "number") {
        console.error("invalid input")
        return false;
    }

    // if there is a negative number
    if (inputNumber < 0) {
        inputNumber = -inputNumber
    }

    // converting number to string
    let numberAsString = inputNumber.toString();

    //checking the proper length of the number
    if (numberAsString.length != 10) {
        console.error("the input is not a 10 digit number");
        return false;
    }

    // converting the number
    let initialPart = numberAsString.slice(0, 3);
    let middlePart = numberAsString.slice(3, 6);
    let lastPart = numberAsString.slice(6, 10);

    let finalNumber = "";
    finalNumber = "(" + initialPart + ")" + middlePart + "-" + lastPart;

    console.log(finalNumber)
    return true;

}

let givenNumber = 8.89527220;
convertTheNumberToTheUSAFormat(givenNumber);

// //slicing first three number
//     let initialPart="";
//     for(let i=0;i<3;i++)
//     {
//         initialPart+=numberAsString[i];
//     }

//     // slicing after three number
//     let middlePart="";
//     for(let i=3;i<6;i++)
//     {
//         middlePart+=numberAsString[i];
//     }

//     // slicing last part
//     let lastPart="";
//     for(let i=6;i<10;i++)
//     {
//         lastPart+=numberAsString[i];
//     }


// converting number to string

// let numberAsString="";
// while(inputNumber!=0)
// {
//     let lastDigit=inputNumber%10;
//     numberAsString=lastDigit+numberAsString;
//     inputNumber=(inputNumber-lastDigit)/10;
// }