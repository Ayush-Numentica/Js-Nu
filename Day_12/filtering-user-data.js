// filtering desired data from the user

// importing the data from the given user-data.js file
import { usersData } from "./users-data.js";
const totalUsersData = usersData;

// Write a program to get paginated result from the json
function extractDesiredPageForFilteringData(givenPageNumber, givenPageSize) {
    if (givenPageNumber < 1 || givenPageSize < 1) {
        console.error("your input page number and size are invalid");
        return false;
    }
    if (typeof givenPageNumber !== "number" || typeof givenPageSize !== "number") {
        console.error("you have given invalid input of pageSize and pageNumber");
        return false;
    }

    let firstPage = (givenPageNumber - 1) * givenPageSize;
    let lastPage = firstPage + givenPageSize;

    let operableDataList = totalUsersData.slice(firstPage, lastPage);
    operableDataList = operableDataList.filter(item => {
        if (!item || typeof item !== "object") {
            return false;
        }
        if (Array.isArray(item) && item.length === 0) {
            return false;
        }
        if (!Array.isArray(item) && Object.keys(item).length === 0) {
            return false;
        }
    return true;
    getDesiredOutputFromTheUserData(operableDataList);
    return;
}


// collection of all the function to be operated
function getDesiredOutputFromTheUserData(givenUserData) {
    findTheCountryHavingHighestIncome(givenUserData);
    findTheCountryHavingCombinedHighestIncome(givenUserData);
    findCountryHavingMaximumCombinedIncomeForFemale(givenUserData);
    findAllUsersWhoseEmailEndsWithGOV(givenUserData);
}


// function for checking the edge cases
function checkEdgeCases(givenList) {
    // checking whether the given list is array or not
    if (!Array.isArray(givenList)) {
        console.error("Invalid input");
        return false;
    }

    // checking for the empty array
    if (givenList.length === 0) {
        console.error("your entered list is empty");
        return false;
    }
    return true;
}


// finding the country which has the highest income
function findTheCountryHavingHighestIncome(givenInputData) {

    // checking global edge case
    if (!checkEdgeCases(givenInputData)) {
        return false;
    }
    // checking for the valid data type of the input keys
    const validUserList = givenInputData.filter((user) => {
        const { id, first_name, last_name, email, gender, country, income } = user;
        let isValid = true;
        if (typeof id !== "number" || typeof first_name !== "string" || typeof last_name !== "string" || typeof email !== "string" || typeof gender !== "string" ||
            typeof country !== "string" || typeof income !== "number" || income < 0) {
            isValid = false;
        }

        if (!isValid) {
            console.error(`invalid data in`, user);
            return;
        }
        else {
            return isValid;
        }
    });

    // sorting the valid user data
    const sortedGivenInput = validUserList.sort((currentData, nextData) => nextData.income - currentData.income)
    console.log(`the country having highest income is "${sortedGivenInput[0].country}" having income of "${sortedGivenInput[0].income}"`);
    return sortedGivenInput;
}


// finding the country which has combined highest income
function findTheCountryHavingCombinedHighestIncome(givenInputData) {
    // checking global edge case
    if (!checkEdgeCases(givenInputData)) {
        return false;
    }
    // checking for the valid data type of the input keys
    const validUserList = givenInputData.filter((user) => {
        const { id, first_name, last_name, email, gender, country, income } = user;
        let isValid = true;
        if (typeof id !== "number" || typeof first_name !== "string" || typeof last_name !== "string" || typeof email !== "string" || typeof gender !== "string" ||
            typeof country !== "string" || typeof income !== "number" || income < 0) {
            isValid = false;
        }

        if (!isValid) {
            console.error(`invalid data in`, user);
            return;
        }
        else {
            return isValid;
        }
    });

    let totalIncome = {};
    for (let i = 0; i < validUserList.length; i++) {
        let currentCountry = validUserList[i].country;
        if (!totalIncome[currentCountry]) {
            totalIncome[currentCountry] = 0;
        }
        totalIncome[currentCountry] += validUserList[i].income
    }

    let totalIncomeList = Object.entries(totalIncome);

    let highestIncomeCountry = totalIncomeList[0][0];
    let highestIncome = totalIncomeList[0][1];
    for (let i = 1; i < totalIncomeList.length; i++) {

        if (highestIncome < totalIncomeList[i][1]) {
            highestIncome = totalIncomeList[i][1];
            highestIncomeCountry = totalIncomeList[i][0];
        }
    }
    console.log(`the country has combined highest income is "${highestIncomeCountry}" having total income "${highestIncome}"`);
    return highestIncomeCountry;
}


// Get all the users info (complete info) who has the email which ends with .gov
function findAllUsersWhoseEmailEndsWithGOV(givenInputData) {
    // checking global edge case
    if (!checkEdgeCases(givenInputData)) {
        return false;
    }
    // checking for the valid data type of the input keys
    const validUserList = givenInputData.filter((user) => {
        const { id, first_name, last_name, email, gender, country, income } = user;
        let isValid = true;
        if (typeof id !== "number" || typeof first_name !== "string" || typeof last_name !== "string" || typeof email !== "string" || typeof gender !== "string" ||
            typeof country !== "string" || typeof income !== "number" || income < 0) {
            isValid = false;
        }

        if (!isValid) {
            console.error(`invalid data in`, user);
            return;
        }
        else {
            return isValid;
        }
    });

    const userHavingDesiredEmail = validUserList.filter((users) => {
        let splittedUserEmail = users.email.split(".");
        if (splittedUserEmail[splittedUserEmail.length - 1] === "gov") {
            return users;
        }
    })
    console.log("the users having email id ends with .gov are");
    console.log(userHavingDesiredEmail);
    return userHavingDesiredEmail;
}


//Find the country name which has the maximum combined income for Female
function findCountryHavingMaximumCombinedIncomeForFemale(givenInputData) {
    // checking global edge case
    if (!checkEdgeCases(givenInputData)) {
        return false;
    }
    // checking for the valid data type of the input keys
    const validUserList = givenInputData.filter((user) => {
        const { id, first_name, last_name, email, gender, country, income } = user;
        let isValid = true;
        if (typeof id !== "number" || typeof first_name !== "string" || typeof last_name !== "string" || typeof email !== "string" || typeof gender !== "string" ||
            typeof country !== "string" || typeof income !== "number" || income < 0) {
            isValid = false;
        }

        if (!isValid) {
            console.error(`invalid data in`, user);
            return;
        }
        else {
            return isValid;
        }
    });
    let incomeData = {}
    for (let i = 0; i < givenInputData.length; i++) {
        let currentUserCountry = givenInputData[i].country;
        if (givenInputData[i].gender.toLowerCase() === "female") {
            if (!incomeData[currentUserCountry]) {
                incomeData[currentUserCountry] = 0;
            }
            incomeData[currentUserCountry] += givenInputData[i].income;
        }
    }
    let incomeDataList = Object.entries(incomeData);
    let highestIncomeCountry = incomeDataList[0][0];
    let highestIncome = incomeDataList[0][1];
    for (let i = 1; i < incomeDataList.length; i++) {
        if (highestIncome < incomeDataList[i][1]) {
            highestIncome = incomeDataList[i][1];
            highestIncomeCountry = incomeDataList[i][0];
        }
    }

    console.log(`the country which has maximun combined income for female is "${highestIncomeCountry}" having income of "${highestIncome}"`);
    return highestIncomeCountry;

}

const inputPageNumber = 2;
const inputPageSize = 20
extractDesiredPageForFilteringData(inputPageNumber, inputPageSize);
