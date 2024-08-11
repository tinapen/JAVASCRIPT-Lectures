const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram", "Tiktok"];

// console.log(socials.__proto__);

// Long method
// socials.forEach(function (item) {
//   console.log(item);
// });

//arrow function
// socials.forEach((item) => console.log(item));

//pass in the index and original array
// socials.forEach((item, index, arr) => console.log(`${index}- ${item}`, arr));

//using a named function in foreach
// function logSocials(social) {
//   console.log(social);
// }

// socials.forEach(logSocials);

//Array of Objects
const socialObjs = [
  { name: "Twitter", url: "https://x.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Tiktok", url: "https://tiktok.com" },
];

//objects
socialObjs.forEach((item) => console.log(item));

// to access the property
socialObjs.forEach((item) => console.log(item.url));
