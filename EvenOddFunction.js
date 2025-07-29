let arr = [1,2,3,4,5,6,7,8,9,10];

function EvenOdd(arr)
 {
    for (let i = 0; i < arr.length; i++)
         {
        if (arr[i] % 2 === 0)
     {
            console.log(arr[i] + " is Even");
    }
         else
      {
            console.log(arr[i] + " is Odd");
      }
    }
}

EvenOdd(arr);



// function isEvenOdd(num)
// {
//      if(num%2===0)
//      {
//         return "Even";
// }
// else
// {
//     return "Odd";
// }   
// }
// console.log(isEvenOdd(7));
// console.log(isEvenOdd(2));


