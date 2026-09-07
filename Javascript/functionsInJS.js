// //

// //without parameters
// // function greet() {
// //   console.log(`Hello World!`);
// // }
// // greet();

// // greet();

// //with parameters
// function greet(name) {
//   console.log(`hello ${name}`);
// }
// greet("Sidhu Paaji");
// greet("Vaibhavi");
// greet("Param");

// //function add
// //parameters
// function add(a, b) {
//   let c = a + b;
//   console.log(`result is ${c}`);
// }
// //console.log(c);
// //arguments
// add(25, 85);
// add(78, 74);

// function sqr(side) {
//   let result = side * side;
//   console.log(`result ${result}`);
//   return "mai retuen k baad hu";
// }
// let square = sqr(25);
// console.log(square);

//Create a function showEvenNumbers() that prints even numbers from 2 to 20.
// function showEvenNumbers() {
//   for (let i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// showEvenNumbers();

//DEfault parammeters

// function greet(name = "Guest User") {
//   console.log(`hello ${name}`);
// }
// greet("Sonam");
// greet();

// //---------------------------------------------
// //function expression

// const greetExp = function () {
//   console.log(`hello world`);
// };
// greetExp();

// //pareameterss

// const addExp = function (a, b) {
//   console.log(a + b);
//   // return a + b;
// };

// addExp(5, 9);
// console.log(addExp(5, 9));

// //

//Result

// const result = function (
//   studentName,
//   math,
//   science,
//   hindi,
//   english,
//   computer,
//   sst,
// ) {
//   let total = math + science + hindi + english + computer + sst;
//   let percent = (total / 600) * 100;
//   let grade = "";
//   if (percent > 90) {
//     grade = "A+";
//   } else if (percent > 80 && percent <= 90) {
//     grade = "A";
//   } else if (percent > 70 && percent <= 80) {
//     grade = "B+";
//   } else if (percent > 60 && percent <= 70) {
//     grade = "B";
//   } else if (percent > 50 && percent <= 60) {
//     grade = "C+";
//   } else {
//     grade = "Fail";
//   }

//   return `${studentName} has secured ${grade} grade with ${percent.toFixed(3)}%`;
// };
// console.log(result("Sonam", 85, 85, 98, 74, 65, 54));

// Arrow Function
// ()=>()(single line code - return ki jarurat nahi hai - implicit return)
//()=>{}(jaha block scope ko open kia wal aretuen keyword - explicit return)

const greetArrow = () => `HI hello function`;
const ans = greetArrow();
console.log(ans);

const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(5, 6));
