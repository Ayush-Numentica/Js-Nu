let arr=[1,45,32,76,23]

console.log(second_largest(arr))

function second_largest(arr)
{
    // arr.sort();

    for(let i=0;i<arr.length-1;i++)
    {
    let temp=0

        for(let j=0;j<arr.length-1-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
            
            temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp;
            }
            

        }
    }
    

    for(let i=0;i<arr.length;i++)
    {
        return arr[arr.length-2];
        
    }
    return arr;
}