// document.getElementById() // chinecheck nya yung mga id, pag wala syang makita ang return nya null

//get attribute
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

//set attibute
// document.getElementById("app-title").id = "new-id";
// document.getElementById("new-id").title = "Shopping List Ko";
//My observation is kaya hindi gumana kay sir yung title na Shopping List Ko is dahil nag set sya ng new attribute sa id ng app-title na new-id kaya nung ni-run nya di gumana. Whereas nung ginawa kong new-id ang id sa title ay gumana :).

//so back to sir Ryan's solution
const title = document.getElementById("app-title");
console.log(title);

//get change content
console.log(title);
console.log(title.textContent);
title.textContent = "Hello World";
console.log(title.textContent);
title.innerText = "Hello Again";
console.log(title.innerText);

//change styles
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

//use any css selector
console.log(document.querySelector("h1"));

//by id
console.log(document.querySelector("#app-title"));

//by class
console.log(document.querySelector(".container"));

//attribute
console.log(document.querySelector("input[type=text]"));

//by pseudo selector
console.log(document.querySelector("li:nth-child(2)").innerText);

//yung second item is gawin nating apple juice
const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

const list = document.querySelector("ul");
// console.log(list);

const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
