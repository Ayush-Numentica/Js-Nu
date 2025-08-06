function findSumOfNumbersInputAsString(inputNumberElements)
{
    let numberFromString=[];
    for(let i=0;i<inputNumberElements.length;i++)
    {
        numberFromString+=parseFloat(inputNumberElements[i])
    }
    return numberFromString;
}

const numberInString="1.5, 2, 44, 66, 12, 90";
console.log(findSumOfNumbersInputAsString(numberInString));