window.onload = function () {
  let id = getIdUrl();
  getUser(id);
  console.log(id);
};
function getUser(id) {
  let url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users/" + id;
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      _renderInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(id);
}
function getIdUrl() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  return id;
}
function _renderInfo(user) {
  const contentHTML = `
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Password: ${user.password}</p>
            <button onclick="gotoForm()">Update</button>
        `;
  const elm = document.getElementById("info");
  elm.innerHTML = contentHTML;
}
function gotoForm() {
  let id = getIdUrl();
  gotoFormURL(id);
}

function gotoFormURL(id) {
  window.location.href = `./form.html?id=${id}`;
}
