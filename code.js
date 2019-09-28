setInterval(timer1, 1000);
function timer1() {
  const date = new Date();
  let gHours = date.getHours();
  let gMinutes = date.getMinutes();
    if (gMinutes < 10) {
      gMinutes = "0" + gMinutes;
    }
  let gSeconds = date.getSeconds();
    if (gSeconds < 10) {
      gSeconds = "0" + gSeconds;
    }
  let gDayOfWeek = new Date().getUTCDay();
   if (gDayOfWeek === 1) {
     document.getElementById("weekDay").innerHTML = "Monday";
   } else if (gDayOfWeek === 2) {
     document.getElementById("weekDay").innerHTML = "Tuesday";
   } else if (gDayOfWeek === 3) {
     document.getElementById("weekDay").innerHTML = "Wednesday";
   } else if (gDayOfWeek === 4) {
     document.getElementById("weekDay").innerHTML = "Thursday";
   } else if (gDayOfWeek === 5) {
     document.getElementById("weekDay").innerHTML = "Friday";
   } else if (gDayOfWeek === 6) {
     document.getElementById("weekDay").innerHTML = "Saturday";
   } else if (gDayOfWeek === 0) {
     document.getElementById("weekDay").innerHTML = "Sunday";
   }
  let gMonth = date.getMonth() + 1;
  let gDate = date.getDate();
  let gFullYear = date.getUTCFullYear();
  if (gHours >= 12) {
    pam = "PM";
  } else if (gHours < 12 || gHours === 24) {
    pam = "AM";
    }
document.getElementById("time").innerHTML = gHours + ":" + gMinutes + ":" + gSeconds + " " + pam;
document.getElementById("date").innerHTML = gMonth + "/" + gDate + "/" + gFullYear;
}
