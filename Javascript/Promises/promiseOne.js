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

const p1 = Promise.resolve("Users");
const p2 = Promise.reject("Products");
const p3 = Promise.resolve("Orders");
Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
