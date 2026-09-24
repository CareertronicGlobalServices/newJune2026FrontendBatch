// // ...Spread  ...rest

const arr = [10, 20, 30, 40, 50];
// console.log(...arr);
const [first, second, ...others] = arr;
console.log(first);
console.log(second);
console.log(others);

// const newArr = [...arr];
// console.log(newArr);

// const arr1 = ["Apple", "Mango", "Banana"];
// const arr2 = ["Kiwi", "Grapes", "Pomengranate"];
// const newFruitArray = [...arr1, "Pineapple", ...arr2];
// console.log(newFruitArray);

const objUser = {
  uname: "Sonam",
  age: 35,
};
//console.log({ ...obj });
// const newObj = {
//   ...obj,
//   course: "FS",
// };
//console.log(newObj);

const Profession = {
  job: "Trainer",
  Location: "Raipur",
};

const newUser = {
  ...objUser,
  ...Profession,
  Location: "Indore",
};
//console.log(newUser);

const { Location, uname, ...Others } = newUser;
console.log(Location);
console.log(uname);
console.log(Others);
