function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login ");
      if (username == "murat") {
        resolve("1238912h2h1eih2ek");
      } else {
        reject();
      }
    }, 2000);
  });
}

login("murat4", 1234)
  .then((token) => {
    console.log(token);
  })
  .catch((err) => console.log(err));
