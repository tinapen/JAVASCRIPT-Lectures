console.log(addDollarSign(100));
//Function Declaration (pwedeng mauna ang pagcall at nasa baba ang function, gagana pa rin)
function addDollarSign(value) {
  return "$" + value;
}

//Function Expression (naging variable yung function, hindi rin pwedeng i-calla ang output bago mag function unlike declaration)

const addPlusSign = function (value) {
  return "+" + value;
};
console.log(addPlusSign(200));
