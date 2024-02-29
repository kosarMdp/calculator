let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let sum = document.querySelector("#sum");
sum.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) + Number(num2.value);
});

let mul = document.querySelector("#mul");
mul.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) * Number(num2.value);
});

let div = document.querySelector("#div");
div.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) / Number(num2.value);
});

let minus = document.querySelector("#minus");
minus.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) - Number(num2.value);
});

let power = document.querySelector("#power");
power.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) ** Number(num2.value);
});

let percentage = document.querySelector("#percentage");
percentage.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) / 100;
});