/*
	File: demo_script.js
	By: Sean Olson
	Date: 12/01/2014
	Purpose: demonstrate check using modernizr.js
*/

function handRolledTest(input_type){
	var i = document.createElement("input");
	i.setAttribute("type", input_type);
	// return i.type !== "text";
	console.log(i.type !== "text");
}


function browserTest(){
	document.getElementById("has-color").innerHTML = format(Modernizr.inputtypes.color);
	document.getElementById("has-number").innerHTML = format(Modernizr.inputtypes.number);
	document.getElementById("has-range").innerHTML = format(Modernizr.inputtypes.range);
	document.getElementById("has-tel").innerHTML = format(Modernizr.inputtypes.tel);
	document.getElementById("has-url").innerHTML = format(Modernizr.inputtypes.url);
	document.getElementById("has-search").innerHTML = format(Modernizr.inputtypes.search);
	document.getElementById("has-email").innerHTML = format(Modernizr.inputtypes.email);
	document.getElementById("has-date").innerHTML = format(Modernizr.inputtypes.date);
	document.getElementById("has-month").innerHTML = format(Modernizr.inputtypes.month);
	document.getElementById("has-week").innerHTML = format(Modernizr.inputtypes.week);
	document.getElementById("has-time").innerHTML = format(Modernizr.inputtypes.time);
	document.getElementById("has-datetime").innerHTML = format(Modernizr.inputtypes.datetime);
	document.getElementById("has-datetime-local").innerHTML = format(Modernizr.inputtypes.datetime);
}

function format(input){
	if(input){
		return "YES";}
	else{ 
		return "NO";}
}

function executeAwesomeCode(cntrl, trgt){
	

}