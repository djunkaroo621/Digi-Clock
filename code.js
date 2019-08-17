var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();

document.getElementById("hours").innerHTML = h - 12;
document.getElementById("minutes").innerHTML = m;
document.getElementById("seconds").innerHTML = s;

var demo = document.getElementById("header-title");
demo.innerHTML ="Digital Clock";
