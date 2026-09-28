setInterval(() => {
  console.log("Hello");
}, 2000);
clearInterval();

let count = 0;
let timer = setInterval(() => {
  count++;
  console.log(count);
  if (count === 5) {
    clearInterval(timer);
  }
}, 1000);
