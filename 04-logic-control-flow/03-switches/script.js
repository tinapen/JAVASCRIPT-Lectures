//switch is for enumarated values, mas magandang gamitin sa malalaking bagay, etc...

const d = new Date(2024, 3, 14, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 0:
    console.log("It is January");
    break;
  case 1:
    console.log("It is February");
    break;
  case 2:
    console.log("It is March");
    break;
  case 3:
    console.log("It is April");
    break;

  default:
    console.log("It is not January,Ferbuary,March or April");
}

//Range Evaluation
switch (true) {
  case hour < 12:
    console.log("Good morning");
    break;
  case hour < 18:
    console.log("Good morning");
    break;

  default:
    console.log("Good night");
}
