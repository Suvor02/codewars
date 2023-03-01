// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
  
    let array = s.split(" ");
   let exit = array.reduce((a, c) => c.length < a.length ? c : a, array[0])
    return exit.length;
  }