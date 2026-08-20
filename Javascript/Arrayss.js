// let numbers = [1, 2, 3, 4, 5]; //Array of numbers
//let stringArr = ["Sidhu", "Kiran", "Vaibhavi", "Sonam"]; //Array of String

//let arr = [1, 2, "Sonam", "Kanchan"]; //
// console.log(numbers, typeof numbers);
// console.log(stringArr, typeof stringArr);
// console.log(arr, typeof arr);

//Array Methods
//push
// let numbers = [1, 2, 3, 4, 5]; //0 se chalu hoti hai //index
//console.log(numbers[4]);

//numbers[3] = 52;
//console.log(numbers);

//length
//console.log(numbers.length);

//arr[index]
//numbers.push(85);
//console.log(numbers); // adds the element at the last position

//Que.Find the last element
const randomArr = [
  85, 74, 74, 85, 96, 85, 77, 741, 852, 963, 8710, 85, 7, 20, 78, 5, 1, 74, 79,
  74, 8585, 8,
];
const arrlength = randomArr.length;
//console.log(arrlength);
//console.log(randomArr[arrlength / 2]);

//2 .push
let numbers = [1, 2, 3, 4, 5];
numbers.push(52); // existing array ko update krta hai
//console.log(numbers);

//3.pop
numbers.pop(); // existing array ko update krta hai
//console.log(numbers);

//4.unshift
numbers.unshift(25); // existing array ko update krta hai
//console.log(numbers);
//5.shift
numbers.shift();
//console.log(numbers);

//6.includes //boolean return- elememt present hai ya nahi
// console.log(numbers.includes(40));
// console.log(numbers);

//7.indexOf() // returns the index of a element in the array , if element is not present returns -1
// console.log(numbers.indexOf(45));

//8.join
// const myFruitArr = ["Apple", "Mango", "Banana"];
// const myFruitArrStr = myFruitArr.join(); // ek string bana deta hia
// const numStr = numbers.join("/");
// console.log(myFruitArr);
// console.log(myFruitArrStr, typeof myFruitArrStr);
// console.log(numStr, typeof numStr);

// 9.Slice(start , end) start to include rahega lekin end value include ni hogi

// //Slice does not effect original array
// const myFruitArrSl = [
//   "Apple",
//   "Mango",
//   "Banana",
//   "Kiwi",
//   "Grapes",
//   "DragonFruit",
// ];

// console.log("Slice " + myFruitArrSl.slice(0, 3));
// console.log("Slice " + myFruitArrSl.slice(-4)); //negative value means last se values showkarega
// console.log(myFruitArr);

// // 10.Splice(start, no.of element) //original array ko update krdate hai
// const myFruitArrSp = [
//   "Apple",
//   "Mango",
//   "Banana",
//   "Kiwi",
//   "Grapes",
//   "DragonFruit",
// ];

// myFruitArr.splice(3, 3);
// console.log(myFruitArr);

//11.reverse changes the original array

// let newNumbers = [1, 2, 8, 5, 4, 5, 7, 6, 8];
// newNumbers.reverse();
// console.log(newNumbers);

//Que12
// let numA = [1, 2, 3];
// let numB = [4, 5, 6];

// //prob with push

// // numA.push(numB);
// // numA.push(74);
// //console.log(numA);

// const result = numA.concat(numB); // original array ko modify nahi karega
// console.log(numA);
// console.log(result);

//13.
let newArr = [1, 3, 4, [4, 5, 6, [7, 8, [9, 10]]]];
// console.log(newArr.flat(2));
// console.log(newArr.flat(Infinity));

// 14.sort
const myFruitArrSp = [
  "Apple",
  "Mango",
  "Banana",
  "Kiwi",
  "Grapes",
  "DragonFruit",
  "Orange",
  "Papaya",
  "Lichi",
  "Pomengranate",
];
console.log(myFruitArrSp.sort());

let newNumbers = [1, 2, 8, 5, 4, 5, 7, 6, 8];
//console.log(newNumbers.sort());

//
let val = 98;
//console.log(Array.isArray(newNumbers));
//console.log(Array.isArray(val));
//
let nameNew = "kanchan";

//console.log(Array.from(nameNew)); //returns  new Array

//

//loops over Array
const myFruitArr = [
  "Apple",
  "Mango",
  "Banana",
  "Kiwi",
  "Grapes",
  "DragonFruit",
  "Orange",
  "Papaya",
  "Lichi",
  "Pomengranate",
];

for (let i = 0; i < myFruitArr.length; i++) {
  console.log(`${i + 1} . ${myFruitArr[i]}`);
}
