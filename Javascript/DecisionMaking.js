// // Boolean thinking
// let varOne = 5;
// console.log(varOne >= 8);

// //2. If Statements

// let age = 8;
// if (age >= 18) {
//   console.log(`yes this guy is Adult`);
// }
// //3.If--else statemnets
// let newage = 8;
// if (newage >= 18) {
//   console.log(`yes this guy is Adult`);
// } else {
//   console.log("this guy is Minor");
// }

// //nested if else
// //Que.
// let SName = "Vaibhav";
// let hindi = 75;
// let eng = 75;
// let math = 76;
// let computer = 70;
// let science = 74;
// let sst = 70;

// let total = hindi + eng + math + computer + science + sst;
// let percentage = (total / 600) * 100;
// let Grade = "";
// if (percentage >= 90) {
//   Grade = "A+";
// } else if (percentage >= 80 && percentage < 90) {
//   Grade = "A";
// } else if (percentage >= 70 && percentage < 80) {
//   Grade = "B+";
// } else if (percentage >= 60 && percentage < 70) {
//   Grade = "B";
// } else {
//   Grade = "NA";
// }

// console.log(
//   `Dear ${SName} , You have Scored ${percentage} with grade as ${Grade} `,
// );

// // Question is
// // Write a program to check if a person can drive or not . Need the Output as Dear Rahul, You are Above 18 SO YOU CAN DRIVE OR VOTE"

// let userName = "Rahul";
// let chckage = 25;
// let isHavingLicenseCheck = true;
// if (chckage >= 18) {
//   isHavingLicense = true;
//   console.log(`Dear ${userName}, You are Above 18 SO YOU CAN DRIVE`);
// } else {
//   isHavingLicenseCheck = false;
//   console.log(`Dear ${userName}, You are below 18 SO YOU CAN NOT DRIVE`);
// }

// // if (isHavingLicenseCheck) {
// //   console.log("Bande k pas license hai");
// // } else {
// //   console.log("nahi hai");
// // }
// //Ques -- age>18 and u should have license

// let userName = "Rahul";
// let n_age = 25;
// let isHavingLicense = true;

// if (n_age >= 18 && isHavingLicense == true) {
//   console.log(`Dear ${userName}, You can Drive`);
// } else {
//   console.log(`Dear ${userName}, You cannot Drive`);
// }

// Que.1
// Write a program to check the students eligibility for college admission
// Rules
// 1. 12th School percentage  60 and above
// 2. entrace exam 70 and above

// let schoolPer = 45;
// let entraceresult = 70;

// if (schoolPer >= 60 && entraceresult >= 70) {
//   console.log("Eligible");
// } else {
//   console.log("NA");
// }

// Que.2
// ATM Logic
// let balance = 5000;
// let withdrawal = 3000;

// If withdrawal > 0
//     If withdrawal <= balance
//         → "Transaction Successful"
//         → Show remaining balance
//     Else
//         → "Insufficient Balance"
// Else
//     → "Invalid Amount"

// Write the complete program
// let balance = 5000;
// let withdrawal = -2000;

// if (withdrawal > 0 ) {
//   if (withdrawal <= balance) {
//     let remaining = balance - withdrawal;
//     console.log(`Transaction Succesful`);
//     console.log(`Remaining Balance is ${remaining}`);
//   } else {
//     console.log(`Insufficient Balance`);
//   }
// } else {
//   console.log(`Invalid Amount`);
// // }
// let age = 20;
// let hasID = false;

// if (age >= 18) {
//   console.log("Age is valid");

//   if (hasID) {
//     console.log("Entry Allowed");
//   } else {
//     console.log("ID Required");
//   }
// } else {
//   console.log("Underage");
// }
//Ques Cehck if a enetred no is positive negative or zero

// let num = -20;

// if (num == 0) {
//   console.log("Entered Number is Zero");
// } else if (num > 0) {
// //   console.log("number is greater than zero :Positive");
// // } else if (num < 0) {
// //   console.log("number is smaller than zero :Negative");
// // }

// //Ques check which is greater of all the three numbers

// let a = 6;
// let b = 8;
// let c = 10;

// if (a > b && a > c) {
//   console.log(`A is greater than b and c`);
// } else if (b > a && b > c) {
//   console.log("B is greater than a and c");
// // } else console.log("C is greater ");
// let x = 10;
// let y = 20;

// if (x > 5) {
//   if (y < 15) {
//     console.log("A");
//   } else {
//     console.log("B");
//   }
// } else if (x === 10) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// Discount System — Coding Question

// Create a program using if-else:
// Purchase ≥ ₹10,000 → 20% discount
// Purchase ≥ ₹5,000 → 10% discount
// Purchase ≥ ₹2,000 → 5% discount
// Below ₹2,000 → No discount
// variable :- let amount;
//output
// Sale : 7000
//discount:10%
//total payable amount = 6300/-

// let amount = 17500;
// let discountPer = 0;

// if (amount >= 10000) {
//   discountPer = 20;
// } else if (amount >= 5000) {
//   discountPer = 10;
// } else if (amount >= 2000) {
//   discountPer = 5;
// } else {
//   discountPer = 0;
// }
// let amountPayable = amount - (discountPer * amount) / 100;
// console.log(
//   `Amount: ${amount} DiscountPercent :${discountPer} NetPayableAmount: ${amountPayable}`,
// );

// let letter = "b";

// if (
//   letter === "a" ||
//   letter === "e" ||
//   letter === "i" ||
//   letter === "o" ||
//   letter === "u"
// ) {
//   console.log("Its a Vowel");
// } else {
//   console.log("Its a Consonant");
// }
// Q9. Login + Role Based Access
// let isLoggedIn = true;
// let role = "editor";

// Create conditions:

// Not logged in → "Please login"
// Admin → "Full access"
// Editor → "Can edit content"
// User → "Read only access"
// Any other role → "Invalid role"

// let isLoggedIn = false;
// let role = "user";

// if (isLoggedIn) {
//   if (role === "Admin") {
//     console.log("Full Access");
//   } else if (role === "Editor") {
//     console.log("Can Edit Content");
//   } else if (role === "user") {
//     console.log("Read Only ");
//     b;
//   } else {
//     console.log("InvalidROle");
//   }
// } else {
//   console.log("Please Login");
// }

// ---------------------------------------------------------
// ---------------------------------------------------------------
// Switch-case

let day = 17;

switch (day) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }

  case 7: {
    console.log("Sunday");
    break;
  }
  default: {
    console.log("Invalid Number , Enter number from 1 to 7");
  }
}
