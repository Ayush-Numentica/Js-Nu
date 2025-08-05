let arr=[10,20,30,40]
let sum=0;

function sum_except_largest(arr)
{
    let a=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>a)
        {
            a=arr[i]
        }
    }
    for(let i=0;i<arr.length;i++)
    {
    if(arr[i]!=a)
    {
        sum=sum+arr[i]
    }
    }

    return sum;
    
}
console.log(sum_except_largest(arr))
