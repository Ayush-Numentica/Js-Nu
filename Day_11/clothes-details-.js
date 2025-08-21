function categoriseItemOfTheShop(inputList) {

    let bySku = {};
    let dedupedCount = 0;
    let invalidCount = 0;

    inputList.map(productDescription => {
        let productId = productDescription.id;
        let productName = productDescription.name;
        let productVariant = productDescription.variants;

        productVariant.map(variantKey => {
            let sku = variantKey.sku;
            let color = variantKey.color;
            let size = variantKey.size;
            let price = variantKey.price;
            let stock = variantKey.stock;

            if (typeof sku !== "string" || typeof color !== "string" || typeof size !== "string" || typeof price !== "number" || typeof stock !== "number" ||
                !sku || !color || !size || price === undefined || stock === undefined || price < 0 || stock < 0) {
                invalidCount++;
                return;

            }

            let existingSku = bySku[sku];

            if (existingSku) {
                if (existingSku.attribute.size !== size || existingSku.attribute.color !== color || existingSku.price !== price) {
                    invalidCount++;
                    return;
                }
                existingSku.stock += stock;
                dedupedCount++;
                if (!existingSku.productId.includes(productId)) {
                    existingSku.productId.push(productId);
                }
            }
            else {
                bySku[sku] = {
                    sku,
                    productId: [productId],
                    productName,
                    attribute: {
                        color,
                        size
                    },
                    price,
                    stock
                };
            }
        }
        );
    }
    );

    const stats = {
        totalSku: Object.keys(bySku).length,
        deduped: dedupedCount,
        invalid: invalidCount
    };

    const finalOutput = {
        bySku,
        stats
    }
    if(Object.keys(bySku).length===0)
    {
        console.error("there is no any valid item is not in your given list");
        return;
    }
    console.dir(finalOutput, { depth: null });
    return finalOutput;
}
const givenItemList = [
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
categoriseItemOfTheShop(givenItemList);