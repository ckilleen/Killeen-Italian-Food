/*
	Team Project 1
	Author: Carol Ann Killeen
	Date: 7/15/19
	Filename: TP1_time.js
*/

/* Get Time and Date */

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function myFunction() {
  var d = new Date();
  var x = document.getElementById("time");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  x.innerHTML = h + ":" + m + ":" + s;
}