/*
	File: demo_page_styles.js
	By: Sean Olson
	Date: 11/16/2014
	Purpose: provide javascript functionality for demonstration purposes
*/

onload = function(){
	var pageSelector = document.getElementById("page-selector");
	pageSelector.addEventListener("click", loadPanel, false)
	loadPanel();
}
function loadPanel(){
	var includedPanel = document.getElementById("page-selector").value;
	$("#content-frame").load("./assets/inc/" + includedPanel); 
}

/*
	*
*/
function textPanelInit(){
	var header = document.getElementById("panel-head");
	header.innerHTML = "Equality Tests";
	panelOutputTest();
}
function formPanelInit(){
	var header = document.getElementById("panel-head");
	header.innerHTML = "HTML 5 Inputs";
}

function panelOutputTest(){

	// var content = 2 + "1 1";
	// var contentPanel = document.getElementById("text-panel");
	// contentPanel.innerHTML = content;

	var some_string = "Now is the winter..."

	for(var i = 0; i < some_string.length; i++){
		console.log(some_string[i]);
	}


}