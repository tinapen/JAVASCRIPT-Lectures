// String
const firstName = "Ryan";

// Number
const age = 30;
const temp = 21.4;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

//Undefined
// const score = undefined;
let score = undefined;

//Symbol
const id = Symbol("id");

// BigInt
const n = 121325789607987060403850685093087406n;

// Reference Types
const numbers = [1, 2, 3, 4];

const person = {
  name: "Ryan",
};

function sayHello() {
  console.log("Hello");
}

const output = sayHello;
console.log(output, typeof output);

// more info on function object
// https://262.ecma-international.org/5.1/#sec-11.4.3
