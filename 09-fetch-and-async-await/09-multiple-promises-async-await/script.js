// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject("Error: Something went wrong");
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// async function getAllData() {
//   const movies = await getData("./movies.json");
//   console.log(movies);
//   const actors = await getData("./actors.json");
//   console.log(actors);
//   const directors = await getData("./directors.json");
//   console.log(directors);
//   console.log(123);
// }
// getAllData();
// console.log(456);

// async function getAllDataWithFetch() {
//   const movieRes = await fetch("./movies.json");
//   const movies = await movieRes.json();

//   const actorRes = await fetch("./actors.json");
//   const actors = await actorRes.json();

//   const directorRes = await fetch("./directors.json");
//   const directors = await directorRes.json();

//   console.log(movies, actors, directors);
// }

//utilizing destructuring
async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch("./movies.json"),
    fetch("./actors.json"),
    fetch("./directors.json"),
  ]);
  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}
getAllDataPromiseAll();
