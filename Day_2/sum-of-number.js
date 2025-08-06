function findSumOfNumbersInputAsString(inputString)
{
    let numberList=[];
    for(let i=0;i<inputString.length;i++)
    {
        if(inputString[i]===","||inputString[i]===" ")
        {
            continue;
        }
        else
        {
            numberList+=inputString[i];
        }
    }
    return typeof numberList;
}

const numberInString="1.5, 2, 44, 66, 12, 90";
console.log(findSumOfNumbersInputAsString(numberInString));