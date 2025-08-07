// Group names according to the initial character

function groupingItemsAccordingToInitialCharacter(inputArrayItems)
{
    // checking whether the input is array or not
    if(!Array.isArray(inputArrayItems))
    {
        return "Invalid Input! The input is not an Array"
    }
    
    // checking whether the array is empty 
    if(inputArrayItems.length===0)
    {
        return "The array is empty"
    }

    // ignoring the empty slot and inputs other than string and assigning it in a cleaned array

    let cleanedArray=[];
    for(let i=0;i<inputArrayItems.length;i++)
    {
        if((i in inputArrayItems) && typeof inputArrayItems[i] === "string" && inputArrayItems[i]!==" " && inputArrayItems[i].length!==0)
        {
            cleanedArray.push(inputArrayItems[i]);
        }
    }
    

    // grouping the elements
    for(let i=0;i<cleanedArray.length;i++)
        {
        let similarInitialCharacterList=[];
        let currentItem=cleanedArray[i];
        for(let j=0;j<cleanedArray.length;j++)
        {
            let nextItem=cleanedArray[j];
            if(currentItem[0]===nextItem[0])
            {
                similarInitialCharacterList.push(cleanedArray[j]);
            }
        }
        console.log( similarInitialCharacterList);
    }
}

const givenNameList=["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
void(groupingItemsAccordingToInitialCharacter(givenNameList));