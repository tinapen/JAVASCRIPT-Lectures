// # Array Method Challenges

// ## Challenge 1

// **Instructions:**

// Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under. The `name` property should have their first and last name.

// ```JavaScript

const people = [
  {
    firstName: "Benjie",
    lastName: "Cruz",
    email: "benjie@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Joanne",
    lastName: "Gamba",
    email: "joanne@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Erickson",
    lastName: "Oreste",
    email: "erickson@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Eimar",
    lastName: "Sison",
    email: "eimar@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Giselle",
    lastName: "Stewart",
    email: "giselle@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];
// ```

// **Expected Result:**

// ```JavaScript
// console.log(youngPeople);

// [
//   {name: 'Joanne Gamba', email:'joanne@gmail.com'},
//   {name: 'Eimar Sison', email:'eimar@gmail.com'},
//   {name: 'Giselle Stewart', email:'giselle@gmail.com'}
// ]

// //Solution Here

// ***** TINAPEN'S ANSWER *****
const youngPeople1 = [];
people.map((person) => {
  if (person.age <= 25) {
    youngPeople1.push({
      name: person.firstName + " " + person.lastName,
      email: person.email,
    });
  }
});
console.log(youngPeople1);

// ***** SIR RYAN'S ANSWER *****
const youngPeople2 = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + " " + person.lastName,
    email: person.email,
  }));

console.log(youngPeople2);

// ## Challenge 2

// **Instructions:**

// Add all of the positive numbers in the array.

// **Expected Result:**

// ```JavaScript

const numbers = [2, -30, 50, 20, -12, -9, 7];

// console.log(positiveSum); // 79

// //Solution Here
//  ***** TINAPEN'S ANSWER *****
const positiveSum1 = () => {
  let acc = 0;
  for (const cur of numbers) {
    if (cur > 0) {
      acc += cur;
    }
  }
  return acc;
};

console.log(positiveSum1());

// ***** SIR RYAN'S ANSWER *****
const positiveSum2 = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum2);

// ## Challenge 3

// **Instructions:**

// Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.

// **Expected Result:**

// ```JavaScript
const words = ["coder", "programmer", "developer"];

// console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']
// ```

// **Hint:**

// Remember back a few sections, we had a challenge to capitalize the first letter of a string. You are doing the same thing here, but for each word in the array.

// //Solution Here

const capitalizedWords = [];

words.forEach(function (word) {
  word = `${word[0].toUpperCase()}${word.slice(1)}`;
  capitalizedWords.push(word);
});

console.log(capitalizedWords);

// ***** SIR RYAN'S ANSWER *****
const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(cWords);
