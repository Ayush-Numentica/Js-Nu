// Find sum of multiples

function findingTheSumOfMultiple(inputNum, countOfMultiplication) {
    // checking whether is is number only
    if (typeof inputNum !== "number" || typeof countOfMultiplication !== "number") {
        return "Invalid input! it is not a number";
    }

    // checking whether the input number is zero
    if (inputNum === 0 || countOfMultiplication === 0) {
        return 0;
    }

    // when the count of multiplication is negative
    if (countOfMultiplication < 0) {
        countOfMultiplication = -countOfMultiplication;
    }

    // multiplying and finding the sum
    let sumOfMultiple = 0;
    let productExpression = "";

    for (let i = 1; i <= countOfMultiplication; i++) {
        productOfNum = inputNum * i;
        sumOfMultiple += productOfNum;

        // for positive outpur of product with no bracket
        if (productOfNum > 0) {
            productExpression += productOfNum +" ";
        }

        // specifying bracket before and after the negative number
        if (productOfNum < 0) {
            productExpression = productExpression + "(" + productOfNum + ")";
        }

        if (i !== countOfMultiplication) {
            productExpression += "+ "
        }
    }
    return productExpression + "= " + sumOfMultiple;
}

let givenNum = 5;
let numberOfMultiple = 5;
console.log(findingTheSumOfMultiple(givenNum, numberOfMultiple));