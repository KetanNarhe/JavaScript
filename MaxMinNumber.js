let Number=[23, 45, 12, 67, 34];

let max=Number[0];
let min=Number[0];

for(let i=1;i<Number.length;i++)
{
    if(Number[i]>max)
    {
        max=Number[i];
}

if(Number[i]<min)
{
    min=Number[i];
}
}
console.log("Max Number is " +max);
console.log("min Number is "+min); 