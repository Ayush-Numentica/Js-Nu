// converting time in minutes

function convertingTimeInMinutes(inputString) {
    // checking whether the input is string or not
    if (typeof inputString !== "string") {
        console.error("invalid input");
        return false;
    }

    // checking whether it is a empty string
    if (inputString.length === 0 || inputString === " ") {
        console.error("you've entered an empty string");
    }

    // checking whether the input is zero
    if (inputString.length === 1 && (isNaN(inputString[0]))) {
        console.error("your first input is not a number")
        return false;
    }

    // converting in minutes
    let cleanedInput = "";
    for (let i = 0; i < inputString.length; i++) {

        if (!isNaN(inputString[i]) || inputString[i] === ":") {
            cleanedInput += inputString[i];
        }
    }

    // splitting the string
    let splittedString = cleanedInput.split(":");
    let hourInInput = splittedString[0];
    let minutesInInput = splittedString[1];

    if (splittedString.length !== 2) {
        console.log("Invalid ");
        return false;
    }

    // checking whether the hour and minutes are not empty string
    if (hourInInput === "" && minutesInInput === "") {
        console.log("Invalid input: missing hour and minutes")
        return false;
    }

    // converting the string in number
    hourInInput = Number(hourInInput);
    minutesInInput = Number(minutesInInput);


    if (isNaN(hourInInput) || isNaN(minutesInInput)) {
        console.error("Invalid input format: it must be in HH:MM");
        return false;
    }

    
    //generating the output
    const finalMinutes = hourInInput * 60 + minutesInInput
    console.log(finalMinutes);
    return true;

}

const givenTime = "30";
convertingTimeInMinutes(givenTime);


// let deliminiterCount=0;
//     let hourInInput="";
//     let minutesInInput="";
//     for(let i=0;i<cleanedInput.length;i++)
//     {
//         if(cleanedInput[i] === ":")
//         {
//             deliminiterCount=1;
//             continue;
//         }
//         if(deliminiterCount===0)
//         {
//              hourInInput+=cleanedInput[i];
//         }
//         if(deliminiterCount===1)
//         {
//             minutesInInput+=cleanedInput[i];
//         }
//     }