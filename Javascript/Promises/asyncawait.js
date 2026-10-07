// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     data.forEach((element) => {
//       console.log(element.name);
//     });
//     // console.log(data);
//   } catch (err) {
//     console.log("Error:" + err);
//   }
// }
// getUsers();

function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful!");
      } else {
        reject("Invalid username or password!");
      }
    }, 2000);
  });
}

async function handleLogin() {
  try {
    const result = await login("admin", "1234");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

handleLogin();
