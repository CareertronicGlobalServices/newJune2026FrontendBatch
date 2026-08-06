//Memory
//Stack Memory (Primitive)
//get a copy of a variable

// let a = 10;
// let b = a;
// console.log(`a :${a}`);
// console.log(`b : ${b}`);

// b = 1000;
// console.log("Changed B");
// console.log(`a :${a}`);
// console.log(`b : ${b}`);

//Heap MEmory (nonPrimitive)
//REference of a value

//a
let student = {
  name: "Sidhu Paaji",
  age: 25,
};
console.log(student);
console.log(student.name);
//b=a
let newStudent = student;
//b=1000
newStudent.name = "veer ji";
newStudent.age = 85;
console.log(student);
console.log(newStudent);
