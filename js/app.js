var inputoperandA = document.querySelector("#operand_a");
var inputoperandB = document.querySelector("#operand_b");
var output = document.querySelector("#output");
var error = document.querySelector("#error");

var showError = function(){
	error.setAttribute("class", "");
};

var hideError = function(){
	error.setAttribute("class", "hidden");
};

var showResult = function(result){
	output.value = result + "";
};

var add = function(a, b){
	return a + b;
};

var multiply = function(a, b){
	return a * b;
};

var isNumber = function(a){
	return !Number.isNaN(a);
};

var isNonZeroNumber = function(a){
	return isNumber(a) && a != 0;
};

var isInteger = function(a){
	return Number.isInteger(a);
};

var isNaturalNumber = function(a){
	return isInteger(a) && a > 0;
};

var isMultiplication = function(a, b){
	return isNaturalNumber(a) && isNumber(b);
};

var isAddition = function(a, b){
	return isNumber(a) && isNumber(b);
}

var isReady = function(a, b){
	return isMultiplication(a, b);
};

var startCalc = function(){
	var operandA = inputoperandA.value;
	var operandB = inputoperandB.value;

	operandA = Number(operandA);

	hideError();
	if(isReady(operandA, operandB)){
		var result = 0;
		if(operandB == "5%"){
			result = multiply(operandA, 1.05);
		}
		if(operandB == "8%"){
			result = multiply(operandA, 1.08);
		}
		if(operandB == "10%"){
			result = multiply(operandA, 1.1);
		}
		showResult(result);
	}else{
		showError();
	}
};

var initApp = function(){
	var calcButton = document.querySelector("#calcButton");

	calcButton.addEventListener("click", startCalc)
};

initApp();