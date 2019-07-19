/*
	Team Project 1
	Author: Carol Ann Killeen
	Date: 7/15/19
	Filename: TP1_submit.js
*/

/* Form Submit */

window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank You for taking our Survey. We look foward to seeing you again.");
      return false;
   }
}