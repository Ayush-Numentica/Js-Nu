// Return the sum of two largest numbers

function findSumOfTwoLargestNumberFromArray(inputArrayItems) {
    
    // check whether the input is array or not    
    if (!Array.isArray(inputArrayItems)) {
        return "It is not a array";
    }

    // check whether the array
    if (inputArrayItems.length === 0) {
        return "It is an empty array";
    }

    let isString = false;
    for (let i = 0; i < inputArrayItems.length; i++) {
        if (typeof inputArrayItems[i] === "string") {
            isString = true;
        }
        if(isString)
        {
            return "your array items has strings"
        }
    }

    for(let i=0;i<inputArrayItems.length;i++)
    {
        if(!(i in inputArrayItems))
        {
            return "your array has an empty slot"
        }
    }

    //sort the array

    let swappingVariable=0;
    for(let i=0;i<inputArrayItems.length;i++)
    {
        for(let j=0;j<inputArrayItems.length-1-i;j++)
        {
            if(inputArrayItems[j]>inputArrayItems[j+1])
            {
                swappingVariable=inputArrayItems[j];
                inputArrayItems[j]=inputArrayItems[j+1];
                inputArrayItems[j+1]=swappingVariable;
            }
        }
    }
    return inputArrayItems[inputArrayItems.length-1]+inputArrayItems[inputArrayItems.length-2];

}

const givenList = [32, 66, 80, 120, 45];
console.log(findSumOfTwoLargestNumberFromArray(givenList));