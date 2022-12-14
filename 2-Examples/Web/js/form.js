jQuery.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    if (regexp.constructor != RegExp) regexp = new RegExp(regexp);
    else if (regexp.global) regexp.lastIndex = 0;
    return this.optional(element) || regexp.test(value);
  },
  "erreur expression reguliere"
);
let settings = {
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
    },
    password: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Bạn chưa nhập tên",
    },
    email: {
      required: "nhap email",
    },
    password: {
      required: "nhap password",
    },
  },
};

let validator = $("#myForm").validate(settings);

function handleSubmit() {
  let isValid = $("#myForm").valid();
  if (isValid) {
    let inputName = document.getElementById("inputName");
    let inputEmail = document.getElementById("inputEmail");
    let inputPassword = document.getElementById("inputPassword");
    let data = {
      name: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
    };
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");
    if (id) {
      updateUser(id, data);
    } else {
      postUser(data);
    }
  } else {
    console.log("cancel submit");
  }
}

function postUser(data) {
  let url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateUser(userId, data) {
  let url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users/" + userId;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

window.onload = function (e) {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  if (id) {
    getUser(id);
  }
};

function getUser(userId) {
  let url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users/" + userId;
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      autoFillUser(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function autoFillUser(user) {
  console.log(user);
  let inputName = document.getElementById("inputName");
  inputName.value = user.name;
  let inputEmail = document.getElementById("inputEmail");
  inputEmail.value = user.email;
  let inputCode = document.getElementById("inputPassword");
  inputCode.value = user.password;
}
