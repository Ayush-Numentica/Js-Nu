let str="code";

let count=str.length
for(let i=1;i<=((count*2)+1);i++)
{
    if(i>str.length && i<(str.length+2))
    {
        process.stdout.write(str)
    }
    else
    {
        process.stdout.write("*")
    }
}