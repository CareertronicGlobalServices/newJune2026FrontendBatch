// const promiseOne = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Task Completed");
//   } else {
//     reject("Failed");
//   }
// });
// console.log(promiseOne);
// promiseOne
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Ho gya kaam "));

// new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve(10);
//   } else {
//     reject(0);
//   }
// })
//   .then((num) => {
//     console.log(num);
//     return num * 2;
//   })
//   .then((num2) => {
//     console.log(num2);
//     return num2 * 30;
//   })
//   .then((num3) => console.log(num3))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Done"));

// const check = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// console.log(check);

// const p1 = Promise.resolve("Users");
// const p2 = Promise.reject("Products");
// const p3 = Promise.resolve("Orders");
// Promise.all([p1, p2, p3])
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

// const p1 = fetch("https://jsonplaceholder.typicode.com/users");
// const p2 = fetch("https://jsonplaceholder.typicode.com/posts");
// const p3 = fetch("https://jsonplaceholder.typicode.com/comments");
// Promise.all([p1, p2, p3])
//   .then(async ([users, posts, comments]) => {
//     const userdata = await users.json();
//     const postsdata = await posts.json();
//     const commentsDAta = await comments.json();
//     console.log(userdata, postsdata, commentsDAta);
//   })
//   .catch((err) => console.log(err));

// allSettled
// const p1 = Promise.resolve("Success 1");
// const p2 = Promise.reject("Failed");
// const p3 = Promise.resolve("Success");
// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//race

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("server1"), 6000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("server2"), 4000);
});

const p3 = Promise.reject("rejected");

Promise.any([p1, p2, p3]).then((result) => console.log(result));
