// const red = document.getElementById("red");
//const reset = document.getElementById("reset");
// red.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });
// reset.addEventListener("click", function () {
//   document.body.style.backgroundColor = "white";
// });

const reset = document.getElementById("reset");
const colorName = document.getElementById("colorName");
const colorContainer = document.getElementById("colorContainer");

const colors = ["grey", "azure", "Pink", "lightblue"];

//creating buttons automatically

colors.forEach(function (color) {
  const button = document.createElement("button");

  //classname
  button.style.width = "100px";
  button.style.height = "50px";
  button.textContent = color;
  //classname
  button.classList.add("color-btn");

  //button ko color
  button.style.backgroundColor = color;

  //setAttribute
  button.setAttribute("data-color", color);
  //
  colorContainer.appendChild(button);

  button.addEventListener("click", function () {
    const selectedColor = button.getAttribute("data-color");
    document.body.style.backgroundColor = selectedColor;
    colorName.textContent = `Selected Color ${selectedColor}`;
  });
});
reset.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});
