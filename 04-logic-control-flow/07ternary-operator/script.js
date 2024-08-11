// condition ? valueIfTrue : valueIfFalse

// const age = 19;
const age = 15;

//if statement
// if (age >= 18) {
//   console.log("You can vote!");
// } else {
//   console.log("You cannot");
// }

age >= 18 ? console.log("You can vote") : console.log("You cannot vote!");

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "You can vote" : "You cannot vote!";

console.log(canVote);
console.log(canVote2);

//Multiple statements
const auth = true;

//long version
// let redirect;

// if (auth) {
//   alert("Welcome to the dashboard");
//   redirect = "/dashboard";
// } else {
//   alert("Access denied");
//   redirect = "/login";
// }

//Shorter Ternary Version
// const redirect = auth
//   ? (alert("Welcome to the dashboard"), "/dasboard")
//   : (alert("Access denied"), "/login");
//   console.log(redirect);

//ternary with no else
auth ? console.log("Welcome to the dashboard") : null;

//shorthand for ternary with no else
auth && console.log("Welcome to the dashboard");
