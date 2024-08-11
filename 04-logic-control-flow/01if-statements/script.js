//syntax
// if (condition) {

// }

if (true) {
  console.log("This is  true");
}

if (false) {
  console.log("This is NOT true"); //this will not be evaluated if the condition is false
}

//Evaluate expressions
const x = 10;
const y = 50;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

//block scope
if (x !== y) {
  var z = 20;
  console.log(`${z} is 20`);
}

console.log(z); //throw error

// function modifyZ() {
//   z += 5;
//   console.log(`Modified value of z is ${z}`);
// }

// modifyZ();
//var can be result to a potential problem because it can go outside the block scope

//shorthand if/else
if (x >= y) console.log(`${x} is greater than or equal to ${y}`);
// console.log("This is true"); Good to know pero mas maganda pa rin gamitin open and close curly brace
else console.log("This is false");
