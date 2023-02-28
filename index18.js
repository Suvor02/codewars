// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!


function getSum(a, b)
{
  let sum = 0;
  let array = [];
   if(a === b){
     return a;}
  if (a < b) { for (let i = a; i <= b; i++){
    array.push(i)
    }
    }
     else {for (let i = b; i <= a; i++){
    array.push(i)
    }
    }
  for (let i = 0; i < array.length; i++){
    sum += array[i];
    }
    return sum;
}