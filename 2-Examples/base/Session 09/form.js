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
      regex:
        /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
    },
    avatar: {
      required: true,
    },
    email: {
      required: true,
    },
    code: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Bạn chưa nhập email",
      regex: "chi duoc nhap chu",
    },
    avatar: {
      required: "Yeu cau nhap password",
    },
    email: {
      required: "nhap email",
    },
    code: {
      required: "nhap code",
    },
  },
};

let validator = $("#myForm").validate(settings);

function handleSubmit() {
  let isValid = $("#myForm").valid();
  if (isValid) {
    let inputName = document.getElementById("inputName");
    let inputAvatar = document.getElementById("inputAvatar");
    let inputEmail = document.getElementById("inputEmail");
    let inputCode = document.getElementById("inputCode");
    let data = {
      name: inputName.value,
      avatar: inputAvatar.value,
      email: inputEmail.value,
      code: inputCode.value,
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
  let url = "https://636b8f0aad62451f9fb53421.mockapi.io/users";
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
  let url =
    "https://636b8f0aad62451f9fb53421.mockapi.io/users/" + userId;
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
  let url = "https://636b8f0aad62451f9fb53421.mockapi.io/users/" + userId;
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
  let inputAvatar = document.getElementById("inputAvatar");
  inputAvatar.value = user.avatar;
  let inputEmail = document.getElementById("inputEmail");
  inputEmail.value = user.email;
  let inputCode = document.getElementById("inputCode");
  inputCode.value = user.code;
}
