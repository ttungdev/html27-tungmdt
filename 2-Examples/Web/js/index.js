window.onload = function () {
  getListUsers();
};

function _renderListUser(listUser) {
  let contentBody = ``;
  listUser.map((user) => {
    console.log(user.name);
    contentBody += `<tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td class="w-25">
            <a class="btn btn-success" href="./detail.html?id=${user.id}" onclick="gotoDetail(id)">Detail</a>
            <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
        </td>
      </tr>`;
  });
  let res = `
    <div class="w-75 m-auto mt-3">
    <table id="table_users" class="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
          ${contentBody}
          </tbody>
          </table>
      </div>`;

  let elm = document.getElementById("result");
  elm.innerHTML = res;
}

function gotoDetail(id) {
  console.log("gotoDetail", id);
  window.location.href = `./detail.html?id=${user.id}`;
}

function getListUsers() {
  fetch("https://63758f5b48dfab73a4fb0332.mockapi.io/users", {
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

function postUsers() {
  const data = {
    name: "Thanh Tung",
    avatar:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2F442822159475452%2Fphotos%2Fd41d8cd9%2F442826556141679%2F&psig=AOvVaw2NvEGmoAogUDWZWDnshQ2J&ust=1668081758891000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMie8PWGofsCFQAAAAAdAAAAABAE",
  };
  fetch("https://636b8f0aad62451f9fb53421.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.error("Error:", error);
    });
}

function deleteUser(id) {
  console.log("deleteUser", id);
  fetch("https://636b8f0aad62451f9fb53421.mockapi.io/users/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getListUsers();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function putUser() {
  const data = {
    name: "Thanh Tung",
    avatar:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2F442822159475452%2Fphotos%2Fd41d8cd9%2F442826556141679%2F&psig=AOvVaw2NvEGmoAogUDWZWDnshQ2J&ust=1668081758891000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMie8PWGofsCFQAAAAAdAAAAABAE",
  };
  fetch("https://636b8f0aad62451f9fb53421.mockapi.io/users/4", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.error("Error:", error);
    });
}

