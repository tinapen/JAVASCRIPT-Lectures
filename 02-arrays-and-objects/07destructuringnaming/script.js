//setting object properties with the same name as variable

const firstName = "Alice";
const lastName = "Guo";
const age = 24;

// const person = {
//   firstName: firstName,
//   lirstName: lastName,
//   age: age,
// }; //it doesn't make sense na inuulit ulit mo sya

//destructure
const person = {
  firstName,
  lastName,
  age,
};

//Destructuring object properties

const todo = {
  id: 1,
  title: "Buy BBQ",
  user: {
    name: "Alice",
  },
};

// const id = todo.id;
const { id, title, user } = todo;

console.log(user);
// destructuring array & using the rest/spread operator

const numbers = [23, 45, 29, 8, 52];
// const [first, second] = numbers;
const [first, second, ...rest] = numbers;
console.log(first, second, rest);
