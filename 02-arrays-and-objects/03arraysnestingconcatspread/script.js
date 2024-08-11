let x;

const fruits = ["apple", "pear", "orange", "banans"];
const berries = ["strawberry", "blueberry", "raspberry"];

//Nesting Arrays
//nest berries inside of fruits
// fruits.push(berries);

// x = fruits[1];
// x = fruits[3][1]; //multi-dimensional array

//create a new variable and nest both arrays
// const allFruits = [fruits, berries];
// x = allFruits[1][2];

//concat() concatenate arrays
// x = fruits.concat(berries);

//spread operator (...) - concatenate with
x = [...fruits, ...berries]; //modern concat()

//flat() - flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

//Static methods of Array object
//isArray
x = Array.isArray(fruits);

//from() a creates an array from an array like value
x = Array.from("12345");

//of() - creates an array from a set of value
const a = 12;
const b = 3;
const c = 4;
const d = 5;

x = Array.of(a, b, c, d);
// console.log(allFruits);
console.log(arr);
console.log(x);
