// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

function squareSum(numbers){
    let a = 0;
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = numbers[i] ** 2;
    }
    for (let j = 0; j < numbers.length; j++) {
      a += numbers[j];
    }
    return a;
    
    
    }
    
    
    
    console.log(squareSum([0, 3, 4, 5]));