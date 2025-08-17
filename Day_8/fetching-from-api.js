let response=fetch("https://jsonplaceholder.typicode.com/todos/1");
response.then((dataInGivenLink) =>
{
    return dataInGivenLink.json();
})
.then((finalOutput) => 
{
    console.log(finalOutput);
})
.catch((error) => console.log("we have an error"))