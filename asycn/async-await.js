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

const loginBusiness = async () => {
  console.log(1);
  var token = await login("murat", "12345");
  console.log(token);
  console.log(2);
};

async function loginBusiness2() {
  try {
    console.log(1);
    var token = await login("murat", "12345");
    console.log(token);
    console.log(2);
  } catch (err) {
      
  }
}

loginBusiness2();
