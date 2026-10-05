// setInterval(() => {
//   console.log("Hello");
// }, 2000);
// clearInterval();

// let count = 0;
// let timer = setInterval(() => {
//   count++;

//   console.log(count);
//   if (count === 5) {
//     clearInterval(timer);
//   }
// }, 1000);

const traffic = ["red", "yellow", "green", "blue"];
let index = 0;
// console.log(traffic.length);
// console.log(2 % traffic.length);

let signal = setInterval(() => {
  console.log(traffic[index]);
  index = (index + 1) % traffic.length;
}, 2000);

setTimeout(() => {
  clearInterval(signal);
  console.log("Timer khatm");
}, 22000);
