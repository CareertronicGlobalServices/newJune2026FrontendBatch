// // // 46. Shopping Cart
// // // let cart = ["Laptop", "Mouse", "Keyboard"];
// // // Perform these operations: add Monitor, remove Mouse, add Webcam at the beginning, check whether
// // // Keyboard exists, find the position of Laptop, and display the final cart as one readable line.
// // let cart = ["Laptop", "mouse", "Keyboard"];
// // console.log(cart);
// // // 1/ Add Monitor
// // cart.push("Monitor");
// // console.log(cart);

// // //2.
// // // let mouseIndex = cart.indexOf("mouse");
// // // console.log(mouseIndex);
// // // cart.splice(mouseIndex, 1);
// // cart.splice(cart.indexOf("mouse"), 1);

// // console.log(cart);
// // //3.webcam
// // cart.unshift("webcam");

// // //4.
// // //console.log(cart.includes("Keyboard"));

// // //5.
// // //console.log(cart.indexOf("Laptop"));

// // //6.
// // //console.log(cart.join("->"));

// //Ques47
// // let students = ["Rahul", "Priya", "Aman", "Riya"];
// // Add Karan at the end, add Neha at the beginning, remove the last student, replace Aman with Arjun, check
// // whether Priya exists, and find the position of Riya.

// // let students = ["Rahul", "Priya", "Aman", "Riya"];

// // //1.
// // students.push("Karan");
// // //2.
// // students.unshift("Neha");
// // //3.
// // students.pop();
// // //4.
// // let indexOFAman = students.indexOf("Aman");

// // students[indexOFAman] = "Arjun";
// // //console.log(students);
// // //5.
// // console.log(students.includes("Priya"));
// // console.log(students.indexOf("Riya"));

// // let frontend = ["HTML", "CSS", "JavaScript"];
// // let backend = ["Node", "Express"];
// // Create one skills collection, add MongoDB, reverse it, and display it using arrows between values.

// // let frontend = ["HTML", "CSS", "JavaScript"];
// // let backend = ["Node", "Express"];
// // let skills = frontend.concat(backend);
// // skills.push("MongoDB");
// // console.log(skills.reverse().join("->"));

// let fruits = ["apple", "banana", "mango"];
// // fruits.splice(1, 0, "orange");
// // console.log(fruits);
// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray(["Hello"]));
// console.log(Array.isArray({}));
// console.log(Array.isArray(100));
// console.log(Array.isArray(fruits));
// let categories = [
//   ["Shirts", ["Jeans"]],
//   ["Shoes", "Sandals"],
//   ["Bags", "Wallets"],
// ];
// let newCat = categories.flat(Infinity);
// console.log(newCat);
// console.log(newCat.indexOf("Wallets"));
// let depthFlat = [
//   "Param",
//   ["Sidhu", ["Vaibhavi", ["Sonam"]]],
//   "Kanchan",
//   ["kd", "hjk"],
// ];
// console.log(depthFlat.length);
// let checkFlat = depthFlat.flat(1);
// console.log(checkFlat);

// let values = [[1, 2], "Hello", 100, true, { name: "Rahul" }];

// for (let i = 0; i <= values.length; i++) {
//   console.log(`element at position ${i} is ${Array.isArray(values[i])}`);

//Print Only the Even values
// let numbers = [11, 24, 35, 42, 57, 68];
// for (let i = 0; i <numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(` ${numbers[i]} value at position/index ${i + 1} is even `);
//   }
// }
//Find the sum of an array
// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
//   console.log(sum); //sum = 0+numbers[0] =0+10=10
//   //sum=10+numbers[1]=10+20=30
//   //sum=30+numbers[2]=30+30 =60
//   //sum=60+numbers[3]=60+40=100
//   //sum=100+numbers[4]=100+50=150
// }
// console.log(`Sum of the elements of numbers Array is ${sum}`);
// let avg = sum / numbers.length;
// console.log(avg);
// find the average of an array
//find the largest number in an array

// let numbers = [11, 24, 7825, 35, 402, 57, 68, 74, 100, 963, 748];
// let largest = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (largest < numbers[i]) {
//     largest = numbers[i];
//   }
// }
// console.log(`largest ${largest}`);
let lang = ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"];

//Output
// J
// JA
// JAVA
// JAVAS
// JAVASC
// JAVASCR
// JAVASCRI
// JAVASCRIP
// JAVASCRIPT
for (let i = 0; i < lang.length; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + lang[j];
  }
  console.log(row);
}
