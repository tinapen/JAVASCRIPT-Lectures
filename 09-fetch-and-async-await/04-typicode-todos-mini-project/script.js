const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=5") //limit by concatenating the limit
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }
  document.getElementById("todo-list").appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();
  //   console.log(1);
  //   console.log(e.target.firstElementChild.value);
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
};

const toggleCompleted = (e) => {
  // e.target.classList.toggle('done');
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");
    // console.log(e.target.dataset.id);
    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

const updateTodo = (id, completed) => {
  // console.log(id, completed);
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // .then((res) => res.json())
  // .then((data) => console.log(data));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("todo")) {
    // console.log("delete");
    const id = e.target.dataset.id;
    // console.log(id);
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
};

document.querySelector("#todo-list").addEventListener("click", toggleCompleted);

document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);

init();
