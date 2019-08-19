// Assigning variables for the native Javascript functions
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var dayW = d.getUTCDay();
var monthVar = d.getMonth();
var day = d.getDate();
var year = d.getUTCFullYear();


document.getElementById("hours").innerHTML = h;
document.getElementById("minutes").innerHTML = m;
document.getElementById("seconds").innerHTML = s;
//document.getElementById("dayW").innerHTML = dayW;
document.getElementById("month").innerHTML = monthVar;
document.getElementById("day").innerHTML = day;
document.getElementById("year").innerHTML = year;

setInterval(timer1, 1000);

function timer1() {

document.getElementById("hours").innerHTML = new Date().getHours();
document.getElementById("minutes").innerHTML = new Date().getMinutes();
document.getElementById("seconds").innerHTML = new Date().getSeconds();
document.getElementById("dayW").innerHTML = new Date().getUTCDay();

if (document.getElementById("dayW").innerHTML = 1) {
  document.getElementById("dayW").innerHTML = "Monday";
} else if (document.getElementById("dayW").innerHTML = 2) {
  document.getElementById("dayW").innerHTML = "Tuesday";
} else if (document.getElementById("dayW").innerHTML = 3) {
  document.getElementById("dayW").innerHTML = "Wednesday";
} else if (document.getElementById("dayW").innerHTML = 4) {
  document.getElementById("dayW").innerHTML = "Thursday";
} else if (document.getElementById("dayW").innerHTML = 5) {
  document.getElementById("dayW").innerHTML = "Friday";
} else if (document.getElementById("dayW").innerHTML = 6) {
  document.getElementById("dayW").innerHTML = "Saturday";
} else if (document.getElementById("dayW").innerHTML = 7) {
  document.getElementById("dayW").innerHTML = "Sunday";
}

document.getElementById("month").innerHTML = new Date().getMonth() + 1;
document.getElementById("day").innerHTML = new Date().getDate();
document.getElementById("year").innerHTML = new Date().getUTCFullYear();
}

if (h >= 12) {
    document.getElementById("mornOrNight").innerHTML = "PM";
  } else if (h < 12 || h === 24) {
    document.getElementById("mornOrNight").innerHTML = "AM";
  }
