// function toggle(e) {
//   e.target.classList.toggle("danger");
// }

// document.querySelector("button").addEventListener("click", toggle);

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function creatPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      //passing in a function, it is a callback
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strange> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}
creatPost({ title: "Post Three", body: "This is post three" }, getPosts);
