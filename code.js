// Assigning variables for the native Javascript functions
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var monthVar = d.getMonth();
var day = d.getDate();
var year = d.getUTCFullYear();


document.getElementById("hours").innerHTML = h;
document.getElementById("minutes").innerHTML = m;
document.getElementById("seconds").innerHTML = s;
document.getElementById("month").innerHTML = monthVar;
document.getElementById("day").innerHTML = day;
document.getElementById("year").innerHTML = year;

setInterval(timer1, 1000);

function timer1() {

document.getElementById("hours").innerHTML = new Date().getHours();
document.getElementById("minutes").innerHTML = new Date().getMinutes();
document.getElementById("seconds").innerHTML = new Date().getSeconds();

document.getElementById("month").innerHTML = new Date().getMonth();
document.getElementById("day").innerHTML = new Date().getDate();
document.getElementById("year").innerHTML = new Date().getUTCFullYear();

}
if (h >= 12) {
    document.getElementById("mornOrNight").innerHTML = "PM";
  } else if (h < 12 || h === 24) {
    document.getElementById("mornOrNight").innerHTML = "AM";
  }
