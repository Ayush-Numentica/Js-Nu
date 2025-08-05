let arr1=[1,2,3]
let arr2=[2,3,4]
let arr3=[0,2,5,3]

function common_element(arr1,arr2,arr3)
{
    let arr4=[];
    let arr5=[];
    
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
            {
                arr4.push(arr1[i])
            }
        }
    }
    for(let i=0;i<arr3.length;i++)
    {
        for(let j=0;j<arr4.length;j++)
        {
            if(arr3[i]==arr4[j])
            {
                arr5.push(arr3[i])
            }
        }
    }
    return arr5
}

console.log(common_element(arr1, arr2, arr3))