let x;

//coerced to string
x = 5 + "5";
x = 5 + Number("5");

//coerced to a number
x = 5 * "5";

//null is coerced to 0 because it is a falsy values
x = 5 + null;
x = Number(null);
x = Number(true);
x = Number(false);

//true is coerced to 0
x = 5 + false;

// underfined
x = 5 + undefined;

console.log(x);
