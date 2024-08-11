const listItems = document.querySelectorAll(".item");
// console.log(listItems);

// console.log(listItems[1]);
// console.log(listItems[1].innerText);

// listItems.style.color = "red"; //this will give an error
// listItems[1].style.color = "red";

//gusto mong gawing red lahat
// listItems.forEach((item) => {
//   item.style.color = "red";
// });

// listItems.forEach((item, index) => {
//   item.style.color = "red";

//   if (index === 1) {
//     item.remove();
//   }
// });

// listItems.forEach((item, index) => {
//   item.style.color = "red";

//   if (index === 1) {
//     item.remove();
//   }
// });

// getElementByClassname() - method returns a live HTML  collection of all elements within the document that have specified className

const listItems2 = document.getElementsByClassName("item");
console.log(listItems2);
console.log(listItems2[2].innerText);

// listItems2.forEach((item) => {
//   console.log(item.innerText);
// }); //this will give an error

//gawin munang array bago gamitan ng forEach

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
  console.log(item.innerText);
});
