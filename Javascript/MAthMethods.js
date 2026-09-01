// console.log(Math);

//roundoff

// console.log(Math.round(5.9));
// console.log(Math.round(5.2));
// console.log(Math.round(5.5));

//Floor and ceil
// console.log(Math.floor(5.99999999));
// console.log(Math.floor(5.2));
// console.log(Math.floor(5.5));

// console.log(Math.ceil(5.99999999));
// console.log(Math.ceil(5.2));
// console.log(Math.ceil(5.5));
// console.log(Math.ceil(5.012));
//

//trunc
// console.log(Math.trunc(-8.9));

// //Absolute
// console.log(Math.abs(-10));
// console.log(Math.abs(10));

// //power
// console.log(Math.pow(2, 3));
// // **
// //sqrt
// console.log(Math.sqrt(25));

// //cuberoot
// console.log(Math.cbrt(64));

// //max
// console.log(Math.max(10, 15, 85, 96, 2, 4));
// console.log(Math.min(10, 15, 85, 96, 2, 4));

// // random
// console.log(Math.random());

//0 to 10
// console.log(Math.floor(Math.random() * 10) + 1);
//
// General Formula
// Math.floor(Math.random() * (max - min + 1)) + min
//25 se 50

// //console.log(Math.floor(Math.random() * (50 - 25 + 1)) + 25);
// console.log(Math.floor(Math.random() * (50 - 25 + 1)));

//Dice Example 1 -6
//console.log(Math.floor(Math.random() * (6 - 1 + 1)) + 1);

//OTP  generation 4 digits
//9999-1000
//console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

//OTP 6 digit
//999999 ,100000
//console.log(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);

//password Generator
let str =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

let pass = "";
let length = 10;

for (let i = 0; i < length; i++) {
  let randomIndex = Math.floor(Math.random() * str.length);
  //console.log(randomIndex);
  pass = pass + str.charAt(randomIndex);
}
console.log(pass);
