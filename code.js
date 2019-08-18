var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();


document.getElementById("hours").innerHTML = h;

setInterval(timer1, 1000);

function timer1() {
document.getElementById("hours").innerHTML = h++;
if (h > 12) {
  h = 1;
}
}


document.getElementById("hours").innerHTML = m;

setInterval(timer2, 1000);

function timer2() {
document.getElementById("minutes").innerHTML = m++;
if (m > 60) {
  m = 0;
}
}


document.getElementById("seconds").innerHTML = s;

setInterval(timer3, 1000);

function timer3() {
document.getElementById("seconds").innerHTML = s++;
if (s > 60) {
  s = 0;
}
}

var demo = document.getElementById("header-title");
demo.innerHTML ="Digital Clock";
