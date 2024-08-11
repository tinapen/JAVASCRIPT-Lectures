const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Ryan", age: 40 });
  }, 1000);
});

promise.then((data) => console.log(data)); //consuming the promise with .then and getting the data

//async await
async function getPromise() {
  const response = await promise;
  console.log(response);
}

getPromise();

//async await using api
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}
getUsers();

//arrow functionc
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  console.log(data);
};
getPosts();
