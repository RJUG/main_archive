/*
	File: page_init.js
	By: Sean Olson
	Date: 11/17/2014
	Purpose: provide initialization and solution loading functionality for Code Eval solutions.
*/

onload = function(){
	var pageSelector = document.getElementById("solution-selector");
	pageSelector.addEventListener("click", loadPanel, false)
	loadPanel();
}

function loadPanel(){
	var includedPanel = document.getElementById("solution-selector").value;
	$("#content-frame").load("./assets/inc/" + includedPanel); 
}

function pageInit(obj){
	var hdr = document.getElementById("page-title");
	hdr.innerHTML = obj.page_title;
	var inst = document.getElementById("page-description");
	inst.innerHTML = obj.page_description;
}

function demoPage(){
	this.page_title = "";
	this.page_description = "";
}

