if (typeof document === "undefined") {
  // during server evaluation
  console.log("Server loadding...!!!!");
} else {
  //ajax
  $.get("./header.html", function (data, status) {
    // alert("Data: " + data + "\nStatus: " + status);
    let elm = document.querySelector("header");
    if (elm) {
      elm.innerHTML = data;
    }
    checkPath();
    checkLogin();
  });

  $.get("./footer.html", function (data, status) {
    // alert("Data: " + data + "\nStatus: " + status);
    let elm = document.querySelector("footer");
    if (elm) {
      elm.innerHTML = data;
    }
  });
}

function checkPath() {
  const PATH_NAME = window.location.href;
  console.log("HREF", PATH_NAME);

  let js = document.querySelectorAll("a");
  let listItemNav = $("a");
  for (let index = 0; index < listItemNav.length; index++) {
    const element = listItemNav[index];
    if (PATH_NAME === element.href) {
      $(element).addClass("active text-danger");
    }
  }
}
function checkLogin() {
  let url = new URL(window.location.href);
  let isLogin = url.searchParams.get("islogin");
  let btnLogin = document.getElementById("btn__login");
  let btnLogout = document.getElementById("btn__logout");
  if (isLogin == 1) {
    btnLogin.classList.add("d-none");
    btnLogin.classList.remove("d-block");
    btnLogout.classList.add("d-block");
    btnLogout.classList.remove("d-none");
  } else {
    btnLogout.classList.add("d-none");
    btnLogout.classList.remove("d-block");
    btnLogin.classList.add("d-block");
    btnLogin.classList.remove("d-none");
  }
  console.log(isLogin);
}
