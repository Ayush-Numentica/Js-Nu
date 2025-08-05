let str="code";
let num=3;

// let a=str.padStart(7,"*")
// let b=a.padEnd(10,"*")

// console.log(b)
let count = str.length-1
function star(str, num)
{
    
    let total_length= num+str.length+num
    for(let i=0;i<total_length;i++)
    {
        if(i>=num && i<(total_length-num))
        {
            process.stdout.write(str[i-num])
        }
        else
        {
            process.stdout.write("*")
        }
    }
}
star(str, num)