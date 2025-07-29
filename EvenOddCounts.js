
let arr=[2, 5, 8, 9, 12, 13];

let EvenCount=0;
let OddCount=0;

for(let i=0;i<arr.length;i++)
{
if(arr[i]%2==0)
{
    EvenCount++;
}
else
{
    OddCount++;
}
}
console.log("Even Count is "+EvenCount);
console.log("Odd Count is "+OddCount);