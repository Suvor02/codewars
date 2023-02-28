// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
    let sum = 0;
    let y = 0;
    for(let i = 0; i < x.length; i++){
      x[i] = Number(x[i]);
      
      }
    for(let j = 0; j < x.length; j++){
       sum += x[j];
  }
        return sum;
  
  }