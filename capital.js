let str ="hello from nui"
// let a=str.charAt(0).toUpperCase()
// console.log(a)
 let a=[]
 let c=""
 a=str.split(" ")
 for(let i=0;i<a.length;i++)
 {
    let word= a[i]
    let word_capital=word.charAt(0).toUpperCase()
    for(let j=1;j<=word.length;j++)
        {
            word_capital+=word.charAt(j)
        }
        a[i]=word_capital   
 }
 c=a.join(" ")
 
 console.log(c)
 
 
 
 
//  console.log(a)

