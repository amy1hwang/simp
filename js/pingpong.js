function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.add = function(inputOne, inputTwo) {
  var output = inputOne + inputTwo;
  return output;
  
};
Calculator.prototype.subtract = function(inputOne, inputTwo) {
  var output = inputOne - inputTwo;
  return output;
};
Calculator.prototype.multiply = function(inputOne, inputTwo) {
  console.log("This is: ", this);
  var output = inputOne * inputTwo;
  return output;
};
Calculator.prototype.divide = function(inputOne, inputTwo) {
  var output = inputOne / inputTwo;
  return output;
};


exports.calculatorModule = Calculator;
