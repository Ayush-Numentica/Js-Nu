//Calculate the minimum number of vehicles required to deliver the parcel for each location

import Fuse from "fuse.js";
function calculateMinimumVehiclesRequiredToDeliverParcel(givenAddress)
{
    // check whether the given input is an string or not
    if(typeof givenAddress !=="string")
    {
        console.error("Invalid input! the input is not a string");
        return false;
    }

    // checking for the empty array
    if(givenAddress.length===0 || givenAddress===" ")
    {
        console.error("Invalid input! you have not entered any address");
        return false;
    }

    const fuse = new Fuse(parcelDescription, {
        keys: ["location"],
        threshold : 0.4,
        includeScore : true
    });

    const resultAfterFuzzySearch=fuse.search(givenAddress);

    if(resultAfterFuzzySearch.length===0)
    {
        console.error("there is no any delivery to this location");
        return false;
    }

    let matchedInput=resultAfterFuzzySearch[0].item;
    let locationToDeliver=matchedInput.location;
    let weightOfParcel=matchedInput.weight;
    console.log(`the location to deliver is ${locationToDeliver} and the weight of the parcel is ${weightOfParcel}`);

    // sorting the quantity weight of vehicle in descending order    
    let sortedVehicle=[];
    for(let i=0;i<vehicleUsed.length;i++)
    {
        sortedVehicle.push(vehicleUsed[i]);
    }
    for(let i=0;i<sortedVehicle.length-1;i++)
    {
        for(j=0;j<sortedVehicle.length;j++)
        {
            if(sortedVehicle[i].weightCapacity<sortedVehicle[j].weightCapacity)
            {
                let swappingVariable= sortedVehicle[i]
                sortedVehicle[i]=sortedVehicle[j];
                sortedVehicle[j]=swappingVariable;
            }
        }
    }
    
}

const vehicleUsed=[
  { type: "cycle", weightCapacity: 1},
  { type: "bike", weightCapacity: 5 },
  { type: "auto", weightCapacity: 20 },
  { type: "ace", weightCapacity: 50 },
  { type: "tempo", weightCapacity: 100 }
];

const parcelDescription= [
  { location: "velachery", weight: 30 },
  { location: "madipakkam", weight: 17 },
  { location: "sholinganallur", weight: 240 }
];

const deliveryAddress="velachery";
calculateMinimumVehiclesRequiredToDeliverParcel(deliveryAddress)