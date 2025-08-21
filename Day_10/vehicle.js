function calculateMinimumNumberOfVehicle(givenAddress)
{   
    vehicleUsed.sort((a,b) => b.weightCapacity-a.weightCapacity);
    // console.log(vehicleUsed);
    let vehicleNumber=[];
    for(let i=0;i<parcelDescription.length;i++)
    {
        let currentLocation=parcelDescription[i].location
        if(givenAddress===currentLocation)
        {
            let currentWeight=parcelDescription[i].weight;
            for(let j=0;j<vehicleUsed.length;j++)
            {
                let currentVehicle=vehicleUsed[j].type;
                let vehicleWeight=vehicleUsed[j].weightCapacity;
                let count=0;
                while(currentWeight>=vehicleWeight)
                {
                    currentWeight-=vehicleWeight;
                    count++;
                }

                if(count>0)
                {
                    vehicleNumber.push(currentVehicle+":"+count);
                }
                if(currentWeight==0)
                {
                    break;
                }
                
            }
            if (currentWeight > 0) {
                let smallestVehicle = vehicleUsed[vehicleUsed.length - 1];
                vehicleNumber.push(smallestVehicle.type + ":1");
            }
        }
    }
    console.log(vehicleNumber);

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

const deliveryAddress = "sholinganallur";
calculateMinimumNumberOfVehicle(deliveryAddress)