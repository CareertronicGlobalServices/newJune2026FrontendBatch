// const msg = document.getElementById("heading");
// console.log(`I am Coming from JS file `);
// console.log(msg.textContent);
// console.log(msg.innerText);
// console.log(msg.innerHTML);
// msg.style.color = " rgb(256,0,0)";

// // const para = document.getElementsByClassName("para");
// // console.log(para);
// // for (let element of para) {
// //   element.style.color = "Blue";
// // }

// //innerText innerHTML text content

// const container = document.querySelector("#container");
// console.log(container);
// const container2 = document.getElementById("container");
// console.log(container2);
const arr = [1, 2, 3];
console.log(arr);
const para = document.querySelectorAll(".para");
console.log("NOdelist before");
console.log(para); // Nodelist
const para2 = document.getElementsByClassName("para"); //HTML Collection
console.log("HTML Collection before");
console.log(para2);
const button = document.createElement("button");
button.style.height = "50px";
button.style.width = "100px";
button.textContent = "New Button";
button.classList.add("para");
document.body.appendChild(button);
console.log("NOdelist after");
console.log(para);
console.log("HTML Collection after");
console.log(para2);
