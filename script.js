const fname = prompt("Enter your First name");
const lname = prompt("Enter your Last name");
const pno = prompt("Enter your phone number");
const village = prompt("Enter your village");
const city = prompt("Enter your city");
const state = prompt("Enter your state");
const country = prompt("Enter your country");

const userData = {
  fname,
  lname,
  pno,
  village,
  city,
  state,
  country,
};

// console.log(userData);
localStorage.setItem("user data", JSON.stringify(userData));

const data = JSON.parse(localStorage.getItem("user data"));
// console.log(data);

document.getElementById("fname").innerText = data.fname;
document.getElementById("lname").innerText = data.lname;
document.getElementById("phn").innerText = data.pno;
document.getElementById("village").innerText = data.village;
document.getElementById("city").innerText = data.city;
document.getElementById("state").innerText = data.state;
document.getElementById("country").innerText = data.country;
