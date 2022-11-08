window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here

};

function wuju(){
  alert("wuju");
}

//the listener function here

let newBoton = document.getElementById("theGreen");
newBoton.addEventListener("click", wuju)