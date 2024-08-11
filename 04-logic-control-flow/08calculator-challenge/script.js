// # Calculator Challenge

// **Instructions:**

// Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

// **Example:**

// ```
// calculator(5, 2, '+') // returns 7
// calculator(5, 2, '-') // returns 3
// calculator(5, 2, '*') // returns 10
// calculator(5, 2, '/') // returns 2.5
// calculator(5, 2, '&') // returns an error message
// ```

// **Hint:**

// - You can use an if statement for the operator, but this is also a good example for using a switch statement.

// <details>
//   <summary>Click For Solution</summary>

// ```JavaScript

// </details>
// ```

// ***** TINAPEN'S ANSWER *****
// Solution 1
console.log("Solution 1 = Using Switch");
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return "invalid operator";
  }
}

console.log(calculator(5, 2, "+"));
console.log(calculator(5, 2, "-"));
console.log(calculator(5, 2, "*"));
console.log(calculator(5, 2, "/"));
console.log(calculator(5, 2, "&"));

// Solution 2
console.log("Solution 2 = Using If Statement");
function calculator2(n1, n2, optr) {
  if (optr == "+") {
    return n1 + n2;
  } else if (optr == "-") {
    return n1 - n2;
  } else if (optr == "*") {
    return n1 * n2;
  } else if (optr == "/") {
    return n1 / n2;
  } else {
    return "invalid operator";
  }
}
console.log(calculator2(5, 2, "+"));
console.log(calculator2(5, 2, "-"));
console.log(calculator2(5, 2, "*"));
console.log(calculator2(5, 2, "/"));
console.log(calculator2(5, 2, "&"));
