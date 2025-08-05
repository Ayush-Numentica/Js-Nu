let arr=[2,5,8,9,4]
console.log(even(arr))

function even(myarr)
{
    for(let i=0;i<myarr.length;i++)
    {
        if(myarr[i]%2==0)
        {
            myarr[i]+=myarr[i]
        }
    }
    return myarr;
}