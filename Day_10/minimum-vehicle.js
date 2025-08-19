//Calculate the minimum number of vehicles required to deliver the parcel for each location

import Fuse from "fuse.js";
function calculateMinimumVehiclesRequiredToDeliverParcel(givenAddress) {
    // check whether the given input is an string or not
    if (typeof givenAddress !== "string") {
        console.error("Invalid input! the input is not a string");
        return false;
    }

    // checking for the empty array
    if (!givenAddress) {
        console.error("Invalid input! you have not entered any address");
        return false;
    }

    // cleaning the array
    let cleanedParcelDescription = [];
    for (let i = 0; i < parcelDescription.length; i++) {

        let locationVisited = false;
        for (let k = 0; k < cleanedParcelDescription.length; k++) {
            if (cleanedParcelDescription[k].location === parcelDescription[i].location) {
                locationVisited = true;
                break;
            }
        }
        if (locationVisited) {
            continue;
        }
        let currentWeight = parcelDescription[i].weight;
        for (let j = i + 1; j < parcelDescription.length; j++) {
            if (parcelDescription[i].location === parcelDescription[j].location) {
                currentWeight += parcelDescription[j].weight;
            }
        }
        cleanedParcelDescription.push({ location: parcelDescription[i].location, weight: currentWeight });
    }

    // doing fuzzy search in the parcel description
    const fuse = new Fuse(cleanedParcelDescription, {
        keys: ["location"],
        threshold: 0.6,
        includeScore: true
    });

    const resultAfterFuzzySearch = fuse.search(givenAddress);

    if (resultAfterFuzzySearch.length === 0) {
        console.error("there is no any delivery to this location");
        return false;
    }

    let matchedInput = resultAfterFuzzySearch[0].item;
    let locationToDeliver = matchedInput.location;
    let weightOfParcel = matchedInput.weight;
    if (weightOfParcel <= 0) {
        console.error("you dont have any valid weight in parcel");
        return false;
    }
    console.log(`the location to deliver is ${locationToDeliver} and the weight of the parcel is ${weightOfParcel}`);



    // sorting the quantity weight of vehicle in descending order    
    let sortedVehicle = [];
    for (let i = 0; i < vehicleUsed.length; i++) {
        sortedVehicle.push(vehicleUsed[i]);
    }
    for (let i = 0; i < sortedVehicle.length - 1; i++) {
        for (let j = i + 1; j < sortedVehicle.length; j++) {
            if (sortedVehicle[i].weightCapacity < sortedVehicle[j].weightCapacity) {
                let swappingVariable = sortedVehicle[i]
                sortedVehicle[i] = sortedVehicle[j];
                sortedVehicle[j] = swappingVariable;
            }
        }
    }

    // adding the duplicate vehicles from the vehicle used
    let cleanedSortedVehicle = [];
    for (let i = 0; i < sortedVehicle.length; i++) {
        let vehicleVisited = false;
        for (let j = 0; j < cleanedSortedVehicle.length; j++) {
            if (cleanedSortedVehicle[j].type === sortedVehicle[i].type) {
                vehicleVisited = true;
                break;
            }
        }
        if (vehicleVisited) {
            continue;
        }

        let currentWeightCapacity = sortedVehicle[i].weightCapacity;
        for (let k = i + 1; k < sortedVehicle.length; k++) {
            if (sortedVehicle[i].type === sortedVehicle[k].type) {
                currentWeightCapacity += sortedVehicle[k].weightCapacity;
            }
        }
        cleanedSortedVehicle.push({ type: sortedVehicle[i].type, weightCapacity: currentWeightCapacity });

    }



    let vehicleCount = [];
    for (let i = 0; i < cleanedSortedVehicle.length; i++) {
        if (weightOfParcel <= 0) {
            break;
        }

        let capacityOfVehicle = cleanedSortedVehicle[i].weightCapacity;
        let countOfVehicle = Math.floor(weightOfParcel / capacityOfVehicle);

        if (countOfVehicle > 0) {
            vehicleCount.push({ type: cleanedSortedVehicle[i].type, count: countOfVehicle });
            weightOfParcel = weightOfParcel - countOfVehicle * capacityOfVehicle;
        }

    }
    if (vehicleCount.length === 0) {
        console.log("your item cannot be delivered by any of the vehicle");
        return false;
    }
    //for smallest weight left 
    if (weightOfParcel > 0) {
        const smallestVehicle = cleanedSortedVehicle[cleanedSortedVehicle.length - 1];
        if (vehicleCount[vehicleCount.length - 1].type === "cycle") {
            vehicleCount[vehicleCount.length - 1].count++;
        }
        else {
            vehicleCount.push({ type: smallestVehicle.type, count: 1 });
        }
    }
    console.log("minimun vehicle required");
    for (let i = 0; i < vehicleCount.length; i++) {
        console.log(vehicleCount[i].type + ":" + vehicleCount[i].count);
    }
    return vehicleCount;
}

const vehicleUsed = [
    { type: "cycle", weightCapacity: 2 },
    { type: "bike", weightCapacity: 5 },
    { type: "auto", weightCapacity: 3 },
    { type: "ace", weightCapacity: 50 },
    { type: "tempo", weightCapacity: 100 }
];

const parcelDescription = [
    { location: "velachery", weight: 6 },
    { location: "madipakkam", weight: 18 },
    { location: "sholinganallur", weight: 2401 },
    { location: "sholinganallur", weight: 50 },
];

const deliveryAddress = "sholingana";
calculateMinimumVehiclesRequiredToDeliverParcel(deliveryAddress)