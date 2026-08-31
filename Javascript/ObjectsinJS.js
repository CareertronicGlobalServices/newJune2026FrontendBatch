let obj1 = {
  name: "vaibhavi",
  age: 25,
  city: "Raipur",
};
console.log(obj1);

console.log(obj1.age);
console.log(obj1["age"]); //Bracket notation
console.log(
  `Hie I am ${obj1.name} from ${obj1.city}. I am ${obj1.age} years Old.  `,
);

//Adding a property
obj1.email = "test@test.com";
console.log(obj1);
//bracket notation '
obj1["address"] = "Devendra NAgar";
console.log(obj1);

//delete
delete obj1.age;
console.log(obj1);
console.log(obj1.age);

//why bracket notation is useful
let property = "name";

console.log(obj1.property); //undefined

console.log(obj1[property]);

//upadte a property
obj1.name = "Vaibhavi Nirmalkar";
console.log(obj1);

//
// let user = {
//   name: "Vaibhavi",
//   age: 25,
//   contact: 8585858585,
//   Email: "test@test.com",
//   skills: ["JavaScript", "HTML", "CSS"],
//   address: {
//     HouseNo: 100077,
//     Street: "C17",
//     City: "Raipur",
//     State: "C.G.",
//   },
// };
// console.log(user.address.City);

// // //Methods
// // 1.Object.keys //returns an array of keys
// console.log(Object.keys(user));
// //2.Object.values //returns an array of values
// console.log(Object.values(user));
// //Object.entries // return a array of all entries in the form of key value pair
// console.log(Object.entries(user));

let students = [
  {
    name: "Rahul",
    age: 20,
    marks: 85,
  },
  {
    name: "Priya",
    age: 21,
    marks: 92,
  },
  {
    name: "Aman",
    age: 19,
    marks: 76,
  },
];

for (let i = 0; i < students.length; i++) {
  console.log(`${i + 1}. ${students[i].name}`);
}
