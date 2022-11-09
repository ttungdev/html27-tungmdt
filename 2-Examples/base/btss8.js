function bt1() {
  let number = prompt("Enter");
  console.log(number);
  if (number != null) {
    document.getElementById("bt1").innerHTML = number * 2;
  }
}

function bt2() {
  let min = parseInt(prompt("so 1"));
  let b = parseInt(prompt("so 2"));
  let c = parseInt(prompt("so 3"));
  let d = parseInt(prompt("so 4"));
  console.log(min, b, c, d);
  if (min > b) min = b;
  if (min > c) min = c;
  if (min > d) min = d;
  console.log(min);
  document.getElementById("bt2").innerHTML = min;
}

function bt3() {
  let a = parseInt(prompt("Nhap so"));
  console.log(a);
  let b = (a - 1) / 2;
  console.log(Math.floor(b));
  document.getElementById("bt3").innerHTML = Math.floor(b);
}

function bt4() {
  let a = parseInt(prompt("Nhap so"));
  console.log(a);
  let b = a / 10;
  console.log(Math.floor(b));
  let c = a % 10;
  console.log(c);
  document.getElementById("bt4").innerHTML = Math.floor(b) + " va " + c;
}

function bt5() {
  let n = parseInt(prompt("Nhap so"));
  if (n === 1) {
    n = false;
  } else if (n === 2) {
    n = true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        n = false;
      } else {
        n = true;
      }
    }
  }
  document.getElementById("bt5").innerHTML = n;
}

// function bt6() {
//   let a = parseInt(prompt("nhap so"));
//   let b = parseInt(prompt("nhap so"));
//   while (a != b) {
//     if (a > b) {
//       a -= b;
//     } else {
//       b -= a;
//     }
//   }
//   console.log();
// }

function bt6() {
  let a = parseInt(prompt("nhap so"));
  let b = parseInt(prompt("nhap so"));
  function UCLN(x, y) {
    while (x != y) {
      if (x > y) x = x - y;
      else y = y - x;
    }
    return x;
  }
  document.getElementById("bt6").innerHTML = UCLN(a, b);
}

function bt7() {
  var swapCase = function (letters) {
    var newLetters = "";
    for (var i = 0; i < letters.length; i++) {
      if (letters[i] === letters[i].toLowerCase()) {
        newLetters += letters[i].toUpperCase();
      } else {
        newLetters += letters[i].toLowerCase();
      }
    }
    console.log(newLetters);
    return newLetters;
  }
  var text = prompt('Nhap chu');
  var swappedText = swapCase(text);
  document.getElementById("bt7").innerHTML = swapCase(text);
}
