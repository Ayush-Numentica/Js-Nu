// categorise all the clothes item of the shop

function categoriseTheItemsOfClothesShop(givenItemList) {

    // checking whether the input is not an array
    if (!Array.isArray(givenItemList)) {
        console.error("your input is invalid");
        return false;
    }

    // checking for empty array
    if (givenItemList.length === 0) {
        console.error("you have entered an empty array");
        return false;
    }

    // checking for all the variant key to be same if sku id is same

    let finalCategory = {};
    let bySku = {};
    let stats = {};

    stats.totalSkus = 0;
    stats.deduped = 0;
    stats.invalid = 0;

    for (let i = 0; i < givenItemList.length; i++) {

        // skipping for empty array, empty slot, empty string in array

        let currentProduct = givenItemList[i];
        if (!i in givenItemList || typeof currentProduct !== "object" || currentProduct.length === 0) {
            continue;
        }

        for (let j = 0; j < currentProduct.variants.length; j++) {
            let currentVariant = currentProduct.variants[j];
            let description = {};
            let attributes = {};

            // checking for valid variant in input
            if (!currentVariant.sku ||
                !currentVariant.color ||
                !currentVariant.size ||
                currentVariant.price === undefined ||
                currentVariant.stock === undefined ||
                currentVariant.price < 0 ||
                currentVariant.stock < 0 ||
                !Array.isArray(currentProduct.variants) ||
                typeof currentVariant.sku !== "string" ||
                typeof currentVariant.color !== "string" ||
                typeof currentVariant.size !== "string" ||
                typeof currentVariant.price !== "number" ||
                typeof currentVariant.stock !== "number") {
                
                stats.invalid++;
                continue;
            }


            // checking is the same sku is already in the final output
            if (bySku[currentVariant.sku]) {

                let existingSku = bySku[currentVariant.sku]

                // checkig if the same sku variant have some differnet keys
                if (existingSku.price !== currentVariant.price || 
                    existingSku.attributes.color !== currentVariant.color || 
                    existingSku.attributes.size !== currentVariant.size) {
                   
                    console.log(`${JSON.stringify(currentVariant)} is not same with the other product of same sku`);
                    stats.invalid++;
                    // continue;
                }

                // increasing the stock of the same sku product
                existingSku.stock += currentVariant.stock;

                // checking for the similar sku product id
                let idFound = false;
                for (let k = 0; k < existingSku.productId.length; k++) {
                    if (existingSku.productId[k] === currentProduct.id) {
                        idFound = true;
                        break;
                    }
                }

                // if product id is not in the final ouput, enter it into final output
                if (!idFound) {
                    existingSku.productId.push(currentProduct.id);
                }

                stats.deduped++
            }
            else {

                description.sku = currentVariant.sku;
                description.productId = [currentProduct.id];
                description.name = currentProduct.name;
                attributes.color = currentVariant.color;
                attributes.size = currentVariant.size;
                description.attributes = attributes;
                description.price = currentVariant.price;
                description.stock = currentVariant.stock;


                bySku[currentVariant.sku] = description;
                stats.totalSkus++;

            }
        }

    }
    finalCategory.bySku = bySku;
    finalCategory.stats = stats;
    console.dir(finalCategory, { depth: null });
}

const itemsVariety = [
    {
        id: "p1",
        name: "Cotton T‑Shirt",
        variants: [
            { sku: "TS-RED-M", color: "red", size: "M", price: 499, stock: 10 },
            { sku: "TS-RED-L", color: "red", size: "L", price: 499, stock: 0 }
        ]
    },
    {
        id: "p2",
        name: "Cotton T‑Shirt",
        variants: [
            { sku: "TS-BLK-M", color: "black", size: "M", price: 549, stock: 2 },
            { sku: "TS-RED-M", color: "red", size: "M", price: 499, stock: 5 }
        ]
    }
]

categoriseTheItemsOfClothesShop(itemsVariety);
