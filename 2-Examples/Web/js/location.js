let ARRAY_PROVINCE = [
  {
    name: "Thành phố Hà Nội",
    code: 1,
    districts: [
      {
        name: "Quận Ba Đình",
        code: 1,
        wards: [
          {
            name: "Phường Phúc Xá",
            code: 1,
          },
          {
            name: "Phường Trúc Bạch",
            code: 2,
          },
        ],
      },
      {
        name: "Quận Tây Hồ",
        code: 3,
        wards: [
          {
            name: "Phường Phú Thượng",
            code: 91,
          },
          {
            name: "Phường Nhật Tân",
            code: 94,
          },
        ],
      },
    ],
  },
  {
    name: "Thành phố Đà Nẵng",
    code: 48,
    districts: [
      {
        name: "Quận Liên Chiểu",
        code: 490,
        wards: [
          {
            name: "Phường Hòa Hiệp Bắc",
            code: 20194,
          },
          {
            name: "Phường Hòa Hiệp Nam",
            code: 20195,
          },
        ],
      },
      {
        name: "Quận Hải Châu",
        code: 492,
        wards: [
          {
            name: "Phường Thanh Bình",
            code: 20227,
          },
          {
            name: "Phường Thuận Phước",
            code: 20230,
          },
        ],
      },
    ],
  },
];
let PROVINCE_SELECT;


function handleSubmit() {
  let isValid = $("#myForm").valid();
  if (isValid) {
    let inputName = document.getElementById("inputName");
    let inputAvatar = document.getElementById("inputAvatar");
    let data = {
      name: inputName.value,
      avatar: inputAvatar.value,
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
  let url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users";
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
    "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + userId;
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

function getUser(userId) {
  let url =
    "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + userId;
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
  let inputName = document.getElementById("inputName"); // get elm
  inputName.value = user.name;
  let inputAvatar = document.getElementById("inputAvatar");
  inputAvatar.value = user.avatar;
}

window.onload = function (e) {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  if (id) {
    getUser(id);
  }
  getListUser();
};

function getListUser() {
  fetch("https://provinces.open-api.vn/api/?depth=3", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      ARRAY_PROVINCE = data;
      _renderOptionCity();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleChangeCity() {
  let valueCity = $("#selectCity").val();
  let textCity = $("#selectCity :selected").text();
  console.log("JQ", valueCity, textCity);
  _renderOptionDistrict(valueCity);
}

function handleChangeDistrict() {
  let valueDistrict = $("#selectDistrict").val();
  console.log(PROVINCE_SELECT);
  _renderOptionWards(valueDistrict);
}

function _renderOptionCity() {
  let city = ``;
  ARRAY_PROVINCE.map(
    (item) => (city += `<option value="${item.code}">${item.name}</option>`)
  );
  $("#selectCity").html(city);
  let valueCity = $("#selectCity").val();
  _renderOptionDistrict(valueCity);
}
function _renderOptionDistrict(idCity) {
  // get City Selected
  let citySelected = ARRAY_PROVINCE.find(
    (item) => item.code === parseInt(idCity)
  );
  // save City Selected
  PROVINCE_SELECT = citySelected;

  // render District options
  let district = ``;
  citySelected?.districts?.map(
    (item) => (district += `<option value="${item.code}">${item.name}</option>`)
  );
  $("#selectDistrict").html(district);

  let valueDistrict = $("#selectDistrict").val();

  // render Wards options
  _renderOptionWards(valueDistrict);
}
function _renderOptionWards(valueDistrict) {
  let district = PROVINCE_SELECT.districts.find((item) => {
    return item.code === parseInt(valueDistrict);
  });
  let wards = ``;
  district?.wards?.map(
    (item) => (wards += `<option value="${item.code}">${item.name}</option>`)
  );
  $("#selectWards").html(wards);
}
