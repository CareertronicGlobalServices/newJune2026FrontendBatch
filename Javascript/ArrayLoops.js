// const arr = [1, 2, 3, 4, 5];
// // const newarr = [];
// // let element = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   element = arr[i] * 5;
// //   newarr.push(element);
// // }
// // console.log(newarr)
// arr.forEach((num) => num * 5);
// console.log(arr);

// //for ....of
// //values
// const fruits = ["apple", "mango", "banana", "kiwi", "grapes"];

// for (let i of fruits) {
//   console.log(i);
// }

// const students = ["Sonam", "Shristi", "Monica", "Vaibhavi", "Rahul"];
// // for (let i of students) {
// // //   console.log(`Welcome ${i}`);
// // //   if (i === "Monica") {
// // //     break;
// // //   }
// // // }
// // for (let i in students) {
// //   //console.log(i);
// //   // if (i < 2) {
// //   //   console.log(`${Number(i)} Welcome ${students[i]}`);
// //   // }
// //   console.log(`${Number(i)} Welcome ${students[i]}`);
// //   if (i == 3) {
// //     break;
// //   }
// // }

// const user = {
//   name: "Sonam",
//   age: 35,
//   intrest: "JS",
// };
// for (let key in user) {
//   console.log(key);
// }
//map / filter /reduce

// const arr = [1, 2, 3, 4, 5];
// const newarr = arr.map((num) => num * 5);
// console.log(arr);
// // console.log(newarr);

// const prices = [100, 200, 400, 500, 800];
// const newPrices = prices.map((spiderman) => spiderman - (10 * spiderman) / 100);
// //console.log(newPrices);

// const names = ["Sonam", "Shristi", "Monica", "Madam", "Vaibhavi", "Rahul"];
// //console.log(names.reverse());
// // const check = names.map((str) => str.split("").reverse().join(""));
// // console.log(check);

// //const str = "Sonam";
// // console.log(str.split("").reverse().join(""));
// const check = names.map((str, index) => {
//   const newarr = str.toLowerCase().split("").reverse().join("");
//   //console.log(newarr);
//   if (str.toLowerCase() === newarr) {
//     return ` ${newarr} ,at ${index} ,This is a Palindrome`;
//   } else return "Not a palindrome";
// });
// console.log(check);

// //

// const students = [
//   { name: "Kanchan", age: 35, course: "AI AUtomation" },
//   { name: "Sonam", age: 45, course: "DSAI" },
//   { name: "KD", age: 25, course: "FS with AI" },
// ];

// students.map((user, index) => console.log(`${index + 1}. ${user.name}`));

//Filter Condition

// const students = [
//   { name: "Kanchan", age: 35, course: "AI AUtomation" },
//   { name: "Sonam", age: 45, course: "DSAI" },
//   { name: "KD", age: 25, course: "FS with AI" },
//   { name: "Viraj", age: 15, course: "FS with AI" },
//   { name: "Vedika", age: 10, course: "FS with AI" },
//   { name: "Shaurya", age: 17, course: "FS with AI" },
// ];

// const Adults = students.filter((user) => user.age >= 18);
// console.log(Adults);

const products = [
  { name: "T-Shirt", price: 399 },
  { name: "Jeans", price: 799 },
  { name: "Shoes", price: 1299 },
  { name: "Watch", price: 1899 },
  { name: "Bag", price: 999 },
  { name: "Jacket", price: 1499 },
  { name: "Laptop Bag", price: 2499 },
];

// Create filters for:

// ₹0 – ₹500
// ₹500 – ₹1000
// ₹1000 – ₹1500
// ₹1500 – ₹2000
// ₹2000+
// console.log(`Products Under 500`);
// const under500 = products
//   .filter((product) => product.price <= 500)
//   .forEach((product, index) =>
//     console.log(` ${index + 1}.${product.name} at ${product.price}`),
//   );

// console.log(`Products Under 500 to 1000`);
// const under1000 = products
//   .filter((product) => product.price > 500 && product.price <= 1000)
// //   .forEach((product, index) =>
// //     console.log(` ${index + 1}.${product.name} at ${product.price}`),
// //   );

// // console.log(`Products Under 1000 to 1500`);

// // const under1500 = products
// //   .filter((product) => product.price > 1000 && product.price <= 1500)
// //   .forEach((product, index) =>
// //     console.log(` ${index + 1}.${product.name} at ${product.price}`),
// //   );
// // console.log(`Products Under 1500 to 2000`);
// // const under2000 = products
// //   .filter((product) => product.price > 1500 && product.price <= 2000)
// //   .forEach((product, index) =>
// //     console.log(` ${index + 1}.${product.name} at ${product.price}`),
// //   );

// //Reduce
// const numbers = [10, 20, 30, 40, 50];

// const total = numbers.reduce((acc, val) => {
//   return acc + val;
// }, 0);

// console.log(total);
// const cart = products.reduce((acc, product) => {
//   return acc + product.price;
// }, 0);
// console.log(cart);
const orders = [
  {
    id: 101,
    customer: "Rahul",
    status: "delivered",
    items: [
      { name: "Laptop", category: "electronics", price: 60000, quantity: 1 },
      { name: "Mouse", category: "electronics", price: 1000, quantity: 2 },
    ],
  },
  {
    id: 102,
    customer: "Priya",
    status: "cancelled",
    items: [
      { name: "Keyboard", category: "electronics", price: 2000, quantity: 1 },
    ],
  },
  {
    id: 103,
    customer: "Aman",
    status: "delivered",
    items: [
      { name: "T-Shirt", category: "fashion", price: 1500, quantity: 3 },
      { name: "Jeans", category: "fashion", price: 2500, quantity: 1 },
    ],
  },
  {
    id: 104,
    customer: "Neha",
    status: "delivered",
    items: [
      { name: "Mobile", category: "electronics", price: 30000, quantity: 1 },
      { name: "Headphones", category: "electronics", price: 3000, quantity: 2 },
    ],
  },
];
// Task

// E-commerce dashboard

// 1. filter()

// Show only  delivered orders : -

// Expected:
// Order 101
// Order 103
// Order 104

// 2. map()

// from Delivered orders , show customers name

// ["Rahul", "Aman", "Neha"]

// 3. reduce :
// total revenue  from  Delivered orders

// ⚠️  consider  quantity  as well

// For example:

// Laptop = 60000 × 1
// Mouse = 1000 × 2

// 4. 🔥Combined Challenge

// Sirf electronics category ke products ka total revenue calculate karo, but:

// cancelled orders ignore karo
// quantity consider karo
// filter(), map(), and reduce() use karo
// 5. 🔥🔥 Final Dashboard

// Ek object return karo:

// {
//   totalDeliveredOrders: ?,
//   customers: ?,
//   totalRevenue: ?,
//   electronicsRevenue: ?
// // }
// orders
//   .filter((product) => product.status === "delivered")
//   .forEach((curr) => console.log(`Order ${curr.id}`));

const delivered = orders.filter((product) => product.status === "delivered");
console.log(delivered);

const deliveredto = delivered.map((product) => product.customer);
console.log(deliveredto);

const revenue = delivered.reduce((acc, product) => {
  return (
    acc +
    product.items.reduce((acc, item) => {
      console.log(item);
      return acc + item.price * item.quantity;
    }, 0)
  );
}, 0);

console.log(revenue);
