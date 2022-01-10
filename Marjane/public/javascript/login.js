const $ = (className) => {
  return document.querySelector(className);
};

const login = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    email: $("#email").value,
    password: $("#password").value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/users/login", requestOptions)
    .then((response) => response.JSON())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
