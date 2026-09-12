// const user = {
//   name: "Kanchan",
//   age: 33,
//   introduction: function () {
//     console.log(`My Name is ${this.name} and age ${this.age}`);
//   },
// };
// // // //this (Jiss)

// // // // console.log(user.introduction());
// // // // user.name = "Sonam";
// // // // console.log(user.introduction());

// // // const user2 = {
// // //   name: "Vaibhavi",
// // //   age: 22,
// // //   introduction: user.introduction,
// // // };
// // // console.log(user2.introduction());
// // // // ----------------------------------------------------------

// // function greet() {
// //   console.log(`${this.name},Welcome to Jungle`);
// // }

// // const user1 = {
// //   name: "Rahul",
// // };
// // const user2 = {
// //   name: "Shubham",
// // };
// // const user3 = {
// //   name: "Aaditya",
// // };
// // user1.greet = greet;
// // user2.greet = greet;
// // user3.greet = greet;

// // console.log(user1.greet());

// // console.log(user2.greet());

// // console.log(user3.greet());

// console.log(this);
// //

// const checkArr = {
//   name: "Sonam",
//   intro: function () {
//     console.log(this);
//   },
// };

// // checkArr.intro();
// //arrow function khud ka
// //Lexical Environment

// // function check() {
// //   console.log(this);
// // }

// // check();

// const arr = () => {
//   console.log(this);
// };
// // arr();
// const user = {
//   name: "Sonam",

//   greet: () => {
//     console.log("check" + this.name);
//   },
// };

// user.greet();

function outer() {
  console.log("I am Outer Function");
  console.log(this);

  const inner = () => {
    console.log("I am inner");
    console.log(this);
  };
  inner();
}
outer();
