let output;

const parent = document.querySelector(".parent");
output = parent.children;
output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

//utilizing first / last element child
parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three";

//get parent elements from child
const child = document.querySelector(".child");
output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "orange";

// console.dir(output);
console.log(output);
