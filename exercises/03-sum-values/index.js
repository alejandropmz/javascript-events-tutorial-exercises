// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

  let result = parseInt(stringA) + parseInt(stringB);

  // var stringResult = document.getElementById("resultNumber").value;
  // stringResult.value = result
  
  alert(`Su resultado es ${result}`)

	//your code goes here
};
