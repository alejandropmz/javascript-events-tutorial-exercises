//This is a global variable
var counter = 0;

window.onload = function loadFunction()
{
	//here I set the screen to the initial value when the website is fully loaded.
	document.getElementById('screen').innerHTML = "let's go, start to count to down or up!!";
}

//called when the user clicks
window.increaseCounter = function increaseCounter()
{
	//increase the global counter in one
	counter++;
	//update the screen with the new value
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
  if (counter == 0){
    document.getElementById("screen").innerHTML = "the actual number is zero, no funny... make it up or down now!"
  }
  else if (counter < 0){
    document.getElementById("screen").innerHTML = "Oh no... number are negative, please make the number "+counter+" positive!"
  }
  
}

window.decreaseCounter = function decreaseCounter(){
  counter--;
  document.getElementById("screen").innerHTML = "The counter value is "+counter;
  if (counter == 0){
    document.getElementById("screen").innerHTML = "the actual number is zero, no funny... make it up or down now!"
  }
  else if (counter < 0){
    document.getElementById("screen").innerHTML = "Oh no... number are negative, please make the number "+counter+" positive!"
  }
}
