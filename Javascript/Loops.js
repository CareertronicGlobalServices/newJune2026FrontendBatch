// //loop- repetition

// let i = 1; //initialise
// //While loop
// while (i <= 10) { //condition
//   console.log(i);
// i++; //inc /dec
// }

// let i = 1;
// while (i <= 20) {
//   console.log(`2 x ${i} = ${i * 2}`);
//   i++;
// }

// do while

// let j = 11;
// do {
//   console.log(`5 x ${j} = ${j * 5}`);
//   j++;
// } while (j <= 10);

//for loop

// for (initialization ; CSSConditionRule; inc/dec){
//   -----
// // }

// for (let i = 1; i <= 10; i++) {
//   console.log(`2 x ${i} = ${i * 2}`);
// }

// for (let i = 15; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`*`);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   {
//     for (let j = 1; j <= i; j++) {
//       row = row + "*";
//     }
//     console.log(row);
//   }
// }

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   {
//     for (let j = n - 1; j >= i; j--) {
//       row = row + "*";
//     }
//     console.log(row);
//   }
// }

// // for (let i = 1; i <= 5; i++) {
// //   let row = "";

// //   for (let j = 1; j <= 5; j++) {
// //     row = row + "*";
// //   }
// //   console.log(row);
// // }

// // *
// // **
// // ***
// // ****
// // *****
// // ****
// // ***
// // **
// // // *
// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i;
  }
  console.log(row);
}

// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  console.log(row);
}
