// The data is the available inventory in the store. In the store you have various products with their price and available quantity.
//Based on this data, write a function to generate the total bill of a grocery list given by an user

import Fuse from "fuse.js";

function generateTheTotalBillFromUserList(givenInventoryData, givenGroceryList) {
    // checking whether the grocery list is an array
    if (!Array.isArray(givenGroceryList) || !Array.isArray(givenInventoryData)) {
        console.error("you have enetered the empty list or the list is not in a proper format");
        return false;
    }

    // checking whether the list is data and list is empty
    if (givenInventoryData.length === 0) {
        console.error("your inventory is empty, add items in your inventory");
        return false;
    }
    if (givenGroceryList.length === 0) {
        console.error("your grocery list is empty, buy some items");
        return false;
    }

    let totalBill = 0;
    const fuse = new Fuse(givenInventoryData,
        {
            includeScore: true,
            keys: ["item"],
            threshold: 0.4
        }
    );

    for (let i = 0; i < givenGroceryList.length; i++) {
        // skipping the invalid inputs in grocery list list
        if (typeof givenGroceryList[i] !== "object" || givenGroceryList[i].quantity < 0) {
            continue;
        }
        // assuring that there must be three keys in inventory
        if (Object.keys(givenGroceryList[i]).length < 2) {
            console.error(`you have a key missing in your ${JSON.stringify(givenGroceryList[i])}`);
            return false;
        }
        //checking for each inputs in the inventory list is in proper format or not
        if (typeof givenGroceryList[i].item !== "string") {
            console.error(`your entered item is incorrect in ${JSON.stringify(givenGroceryList[i])}`);
            return false;
        }
        if (typeof givenGroceryList[i].quantity !== "number") {
            console.error(`your entered quantity is incorrect in ${JSON.stringify(givenGroceryList[i])}`);
            return false;
        }


        let requestedItem = givenGroceryList[i];


        // checking for the zero quantity in the list and skipping it
        if (givenGroceryList.length === 1 && requestedItem.quantity === 0) {
            console.warn("you have only onle item in your list and your item's quantity is 0, kindly increase the quantity");
            return false;
        }
        else if (requestedItem.quantity === 0) {
            continue;
        }

        const matcheditem = fuse.search(requestedItem.item);
        // console.log(matcheditem);
        if (matcheditem.length > 0) {
            const availableItem = matcheditem[0].item;
            let quantityOfItem = requestedItem.quantity;
            if (quantityOfItem > availableItem.quantity) {
                quantityOfItem = availableItem.quantity;
                console.log(`Requested quantity for "${requestedItem.item}" exceeds inventory quantity. Using available quantity ${quantityOfItem}.`)
            }
            totalBill = totalBill + quantityOfItem * availableItem.price;
            totalBill = Math.round(totalBill * 100) / 100;
            availableItem.quantity = availableItem.quantity - quantityOfItem;
        }
        else {
            console.warn(`the ${requestedItem.item} is not in the inventory`);
        }
    }
    console.log(`the total bill of yours is ${totalBill}`);
    return totalBill;
}

const inventoryItems = [
    { item: "apple", price: 10.20, quantity: 10 },
    { item: "banana", price: 20, quantity: 15 },
    { item: "Jam - Apricot   ", price: 94.11, quantity: 2 },
    { item: "Creamers - 10%", price: 15.20, quantity: 4 }
];

const groceryList = [
    { item: "Jam - Apricot", quantity: 0 },
    { item: "Creamers - 10%", quantity: 5 },
    // { item: "Creamers - 10%", quantity:3},
    // { item: "butter", quantity: 3 }
];
generateTheTotalBillFromUserList(inventoryItems, groceryList);