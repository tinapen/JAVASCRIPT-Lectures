let output;

//get child nodes
const parent = document.querySelector(".parent");
output = parent.childNodes;

output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

//change child 1 to child one
output = parent.childNodes[3].innerText = "Child One";

//change the color of child two
output = parent.childNodes[5].style.color = "red";

const child = document.querySelector(".child");

//to get the parent node
output = child.parentNode;
output = child.parentElement;

//styling
child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

console.log(output);
