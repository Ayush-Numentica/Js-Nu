// The data is the available inventory in the store. In the store you have various products with their price and available quantity.
//Based on this data, write a function to generate the total bill of a grocery list given by an user

function generateTheTotalBillFromUserList(givenGroceryList)
{
    // checking whether the grocery list is an array
    if(!Array.isArray(givenGroceryList) || givenGroceryList.length===0)
    {
        console.error("yu have enetered the empty list or the list is not in a proper format");
        return false;
    }
}