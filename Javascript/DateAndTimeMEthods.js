// // let today = new Date();
// //console.log(today);

// let now = new Date("2026-08-31");
// //console.log(now);
// //console.log(today.getDate());
// //console.log(today.getDay());
// //console.log(today.getFullYear());
// //console.log(today.getMonth());
// //console.log(today.getHours());
// //console.log(today.getMinutes());
// // console.log(today.getMilliseconds());
// // console.log(today.getSeconds());
// // console.log(today.toDateString());
// // console.log(today.toTimeString());

// let today = new Date();
// console.log(today.toDateString());
// today.setFullYear(1993);

// console.log(today.toDateString());
// today.setMonth(0);
// console.log(today.toDateString());
// console.log(today.toISOString());
// console.log(today.toLocaleDateString());
// console.log(today.toLocaleString());
// console.log(today.toTimeString());
// console.log(today.toUTCString());
// const isDAte = today.toLocaleString("en-IN", {
//   timeZone: "Asia/Kolkata",
//   weekday: "short",
//   day: "2-digit",
//   month: "short",
//   year: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: true,
// });

// console.log(isDAte);

// //Date Difference

// let date1 = new Date("2026-08-21");
// let date2 = new Date("2026-08-03");

// let dateDiff = date1 - date2; // this is in milliSeconds
// console.log(dateDiff);
// console.log(dateDiff / (1000 * 60 * 60 * 24));
// //1000 - milisecond ko second me kia
// //60 -second ko minute me kia
// //60 - minutes ko hours me kia
// //24 - hours ko no. of days me convert kia

//Age calculator

// let birthyear = 2002;
// let currentyear = new Date().getFullYear();
// console.log(currentyear);

// let age = currentyear - birthyear;
// console.log(age);
