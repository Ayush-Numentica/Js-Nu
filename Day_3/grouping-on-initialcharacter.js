// Group names according to the initial character

function groupingItemsAccordingToInitialCharacter(inputArrayItems) {
    // checking whether the input is array or not
    if (!Array.isArray(inputArrayItems)) {
        return "Invalid Input! The input is not an Array"
    }

    // checking whether the array is empty 
    if (inputArrayItems.length === 0) {
        return "The array is empty"
    }

    // checking whether the inital element of the array is empty string
    if (inputArrayItems.length === 1 && inputArrayItems[0] === " ") {
        return "Invalid input! your array has the initial empty string"
    }


    // ignoring the empty slot and inputs other than string and assigning it in a cleaned array
    let cleanedArray = [];
    for (let i = 0; i < inputArrayItems.length; i++) {
        if ((i in inputArrayItems) && typeof inputArrayItems[i] === "string" && inputArrayItems[i] !== " " && inputArrayItems[i].length !== 0) {
            cleanedArray[cleanedArray.length] = (inputArrayItems[i]);
        }
    }

    // converting all the character to same format
    let smallCase="abcdefghijklmnopqrstuvwxyz";
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let convertedArray=[];
    for(let i=0;i<cleanedArray.length;i++)
    {
        let items=cleanedArray[i];
        let newItems="";
        for(let j=0;j<items.length;j++)
        {
            let itemChar=items[j];
            let replacedBy=itemChar;
            for(let k=0;k<smallCase.length;k++)
            {
                if(itemChar==upperCase[k])
                {
                    replacedBy=smallCase[k];
                    break;
                }
            }
            newItems+=replacedBy
        }
        convertedArray[convertedArray.length]=newItems;
    }


    // grouping the elements
    let finalGroupedElement = [];
    let visitedGroup = [];
    for (let i = 0; i < convertedArray.length; i++) {
        let currentItem = convertedArray[i];
        let intialChar = currentItem[0];
        let alreadyGrouped = false


        // checking whether the same group is not inserted again
        for (let j = 0; j < visitedGroup.length; j++) {
            if (visitedGroup[j] === intialChar) {
                alreadyGrouped = true;
                break;
            }
        }

        // if not in same group, add in the group
        if (!alreadyGrouped) {
            let newGroup = []
            for (let k = 0; k < convertedArray.length; k++) {
                if (convertedArray[k][0] === intialChar) {

                    // checking whether the duplicate item is not present in given array
                    let duplicateItem = false;
                    for (let l = 0; l < newGroup.length; l++) {
                        if (newGroup[l] === convertedArray[k]) {
                            duplicateItem = true;
                            break;
                        }
                    }

                    // if not duplicate insert it into the same group
                    if (!duplicateItem) {
                        newGroup[newGroup.length] = convertedArray[k];
                    }
                }
            }
            // forming the final group
            finalGroupedElement[finalGroupedElement.length] = newGroup;
            visitedGroup[visitedGroup.length] = intialChar;
        }
    }
    return finalGroupedElement;
}

const givenNameList = ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
console.log(groupingItemsAccordingToInitialCharacter(givenNameList));