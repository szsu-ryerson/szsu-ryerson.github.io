/*
	Author: Sarah "done broke it" Carruthers
	File: errors.js
	Purpose: I broke it, you fix it
*/

//when div is clicked, move the div to a new random location
//original script error: the element with id "square" is not moving when it's clicked because x and y are not in pixels
//solution: added "px" in x and y
function moveMe(){
	var x, y;
	x = Math.random()*(window.innerWidth - 200)+"px";
	y = Math.random()*200+"px";
	var el = document.getElementsByClassName("square")[0];
	el.style.top = y;
	el.style.left = x;
	
}
var x, y;
//should compute the value of xVal + yVal and put the answer in the readonly
//text input location
//original script error: answer is not showing up because class is used instead of id and string were concatenated instead of arithematic calculation.
//solution: change getElementsByClassName to getElementByID; also use parseInt to convert string to number.
function compute(){
	x = parseInt(document.getElementById("xVal").value);
	y = parseInt(document.getElementById("yVal").value);
	var ans = x + y;
	document.getElementById("answer").value = ans;
	//document.getElementsByClassName("answer")[0].value = ans;
	//y = parseInt(document.getElementsByClassName("yVal")[0].value);
}