let x;

//Array Literals
const numbers = [12, 45, 33, 29, 39, 56];
const mixed = [12, "Hello", true, null];

//Array Constructor
const fruits = new Array("apple", "grapes", "orange");

//Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[0]}`;

x = numbers.length;

fruits[2] = "pear";
// x = fruits;

fruits[3] = "strawberry";
fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";
console.log(fruits);
// console.log(numbers);
console.log(x);
