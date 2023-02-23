// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  
  let str1 = operation;

  let summ = 0;

  let a = value1;
  let b = value2;

  switch (str1){
    case "+":
    return summ = a + b;
    case "-":
    return summ = a - b;
    case "*":
    return summ = a * b;
    case "/":
    return summ = a / b;
  }
  return summ ; 
}