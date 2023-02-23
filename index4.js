// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    let n = number 
    if(n % 2 === 0){
      return n*8;
  }else if(n % 2 != 0){
  return n*9
  }
 }