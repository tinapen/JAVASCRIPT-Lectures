//insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  //   filter.insertAdjacentElement("beforebegin", h1); //before 'filter'
  filter.insertAdjacentElement("afterend", h1); //after filter
}
insertElement();

//insertAdjacentText Example
function insertText() {
  const item = document.querySelector("li:first-child");

  //   item.insertAdjacentText("afterend", "insertAdjacentText");
  item.insertAdjacentText("beforebegin", "insertAdjacentText"); //position
}
insertText();

//insertAdjacentHTML Example
function insertHTML() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.insertAdjacentHTML("afterend", "<h2>insertAdjacentHTML");
}
insertHTML();
// <!-- beforebegin -->
// <p>
//     <!-- afterbegin -->
//     foo
//     <!-- beforeend -->
// </p>
// <!-- afterend -->
