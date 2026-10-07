const grandparent = document.querySelector("#Grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

grandparent.addEventListener("click", function (e) {
  console.log("Grandparent Click");
  e.stopPropagation();
});

parent.addEventListener("click", function (e) {
  console.log("parent Click");
  e.stopPropagation();
});

child.addEventListener("click", function (e) {
  console.log("child Click");
  console.log(e.target);
  e.stopPropagation();
});
i;
