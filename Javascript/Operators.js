// //Arithmetic operators
// let a = 10;
// let b = 3;

// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.333...

// //modulus - it returns your remainder of a division
// console.log(a % b); // 1
// //Exponent
// //power: 10 raised to 3 = 10 * 10*10 ;

// console.log(a ** b); // 1000

// //2.Assignment Operator(=)
// let c = 10;

// //3.Comparision Operators ( < ,> ,<=,>=,== ,===,!= ,!==)
// // <  Lessthan
// /* > greater than ,
// <= lessthan equal to,
// >= greater than eual to ,
// == equal to ,
// === strict equal,
// != not equal ,
// !== strict not equal*/

// console.log(5 == "5"); //true -

// console.log(5 === "5"); // false stict check with datatype

// console.log(5 != "5"); //false

// console.log(5 !== "5"); //true Strict Check

//Booleans Logical operators

// 1.And (&&)

// both the condition should be true

// let age = 18;
// let hasLicense = true;

// console.log(age > 18 && hasLicense);

//2.OR(||)

// let age = 18;
// let hasLicense = true;

// console.log(age > 18 || hasLicense);

// //Not
// console.log(!hasLicense);

//Increment(++) and decrement(--) operators

// let count = 5;
// console.log(count);
// count++;
// console.log(`Increment ${count}`);

// count--;
// console.log(`Decrement ${count}`);

//post INC/DEC operator

//let a = 6;

//console.log(a++ + "a dekhte h " + a);
// console.log(a);

// let b = 25;
// console.log(b--);
// console.log(b);

//pre INC/DEC

// let a = 6;

// // console.log(++a);
// // console.log(a);

// // let b = 25;
// // console.log(--b);
// // console.log(b);

// //Question
// // let x = 5;
// // let y = 10;
// // console.log(x++ + ++x);
// // //console.log(x++ + y++);

// let a = 10;

// console.log(++a + a++);
// console.log(a);

// //pre = ++ pehle ++x , incremented value hi  le lo

// //post = ++ baad me x++ , tum abhi current value use karlo next se incremented value lena
// let m = 4;
// console.log(m++ + ++m + m++ + ++m + m++ + m++);
// //4 + 6 + 6 +8+8+9

// let x = 5;

// console.log(x++ + x++);
// //5 + 6 =11

// console.log(x);
// //7
// ``````js
// let x = 5;

// console.log(++x + ++x);
// 6 + 7;
// console.log(x);
// 7;

// // ``````js
// let x = 5;

// let y = x++ + ++x;
// //5 + 7
// console.log(y); //12
// console.log(x); //7
// ``````js
// let x = 10;

// let y = x-- + --x;
// 10 + 8;

// console.log(y);
// 18;
// console.log(x);
// 8;

// // ``````js
// let x = 3;

// let y = ++x + x++ + ++x;
// // 4 + 4 + 6;
// // console.log(y);
// // 14;
// // console.log(x);
// // 6;
// // ``` -
// // //   ```js
// let x = 5;

// let y = x++ + x++ + ++x;
// //5+6+8
// console.log(y); //19
// console.log(x); //8

// // ``````js
// let x = 5;

// let y = x++ + ++x + x++ + ++x;
// //5+7+7+9 =28
// console.log(y);
// 28;
// console.log(x);
// 9;
// // // ```;
// let x = 5;
// console.log(x++ + ++x - x--);
// //5 + 7 - 7;
// console.log(x); //6

// let a = 5;
// let b = a++ + ++a;
// let c = --a + a--;
// let d = ++a + a++;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//Ternary Operator(condition ? trueOption : falseOption)

//short form If-else

let age = 2;
let check = age > 18 ? "ADULT" : "MINOR";
console.log(check);

//Even /odd

let num = 6;

let check2 = num % 2 == 0 ? "Even" : "Odd";
console.log(check2);
