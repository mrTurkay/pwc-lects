console.log(1);

function login(username, password, callback) {
  setTimeout(() => {
    callback("12931290jkfeaijef");
    console.log(2);
  }, 3000);
}

console.log(3);

login("admin", "123456", (token) => {
  console.log(token);
});
