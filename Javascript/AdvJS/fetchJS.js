const data = document.getElementById("data");
const container = document.getElementById("container");

data.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      data.forEach((user) => {
        // const uname = document.createElement("p");
        // uname.textContent = user.name;
        // console.log(user.name);
        // container.appendChild(uname);

        const card = document.createElement("div");
        card.innerHTML = `<h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.phone}</p>`;
        card.style.border = "3px";

        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.log("Something Went wrong");
    });
});
