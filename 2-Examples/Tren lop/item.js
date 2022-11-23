window.onload = function () {
  getListUsers();
};
function _renderListUser(listUser) {
  let contentBody = ``;
  listUser.map((user) => {
    // console.log(user.accessories);
    contentBody += `<div onclick="gotoLogin()">
    <div class="card mb-3" style="max-width: 300px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${user.avatar}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title text-truncate">${user.id}</h5>
                <a href="">
                    <p class="card-text text-truncate">${user.accessories}</p>
                </a>
                <a href="">
                    <p class="card-text text-truncate">${user.bags}</p>
                </a>
                <a href="">
                    <p class="card-text text-truncate">${user.kidFashion}</p>
                </a>
                <a href="">
                    <p class="card-text text-truncate">${user.mens}</p>
                </a>
            </div>
        </div>
    </div>
</div>
</div>
`;
  });
  let res = `${contentBody}`;

  let elm = document.getElementById("result");
  elm.innerHTML = res;
}
function getListUsers() {
  fetch("https://63758f5b48dfab73a4fb0332.mockapi.io/product", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      _renderListUser(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function gotoLogin() {
  window.location.href ="./header.html";
}
