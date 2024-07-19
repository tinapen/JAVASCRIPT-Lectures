let amount = "5.55";

// convert string to number
// amount = parseInt(amount);
// amount += amount;
// amount = Number(amount);
// amount += amount;

// Convert number to string
// amount = amount.toString();

// convert string to decimal
amount = parseFloat(amount);
amount = Number(amount);

// Convert numberto boolean
amount = Boolean(amount);
console.log(amount, typeof amount);

// Ways to get a NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("bye" / 3);
