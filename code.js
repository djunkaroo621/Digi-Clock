var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();

document.getElementById("hours").innerHTML = h - 12;
document.getElementById("minutes").innerHTML = m;


setInterval(timer, 1000);

function timer() {
document.getElementById("seconds").innerHTML = s++;
if (s > 60) {
  s = 0;
}
}

var demo = document.getElementById("header-title");
demo.innerHTML ="Digital Clock";
