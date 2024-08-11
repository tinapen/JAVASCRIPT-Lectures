// alert("hello");
// console.log(window.innerWidth);

// Global scope variable
const x = 100;

console.log(x, "in global");

function run() {
  console.log(window.innerHeight);
  console.log(x, "in function");
}

run();

//Access global vars in blocks
if (true) {
  console.log(x, "in block");
}

function add() {
  //overwriting global x (variable shadowing)
  const x = 1;
  const y = 50;
  //   console.log(x, "x in function2");
  console.log(x + y);
}
//you cannot access a function scoped variable in global s cope
// console.log(y);

add();
