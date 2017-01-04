(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Calculator = require('./../js/pingpong.js').calculatorModule;



$(document).ready(function() {
  var getInputValues = function() {
    // get input values from the DOM
    var inputOne = parseInt($('#inputone').val());
    var inputTwo = parseInt($('#inputtwo').val());
    return [inputOne, inputTwo];
  }

  $("[data-calculation-type]").click(function() {
    // get the value in data-calculation-type from the DOM
    // and use it to call the corresponding function in the simpleCalculator
    // e.g. if data-calculation-type="add", then we call simpleCalculator['add']()

    var method = $(this).attr('data-calculation-type');
    var simpleCalculator = new Calculator("hot pink");
    // since our functions accept two arguments, not an array of arguments, we use
    // apply() to pass an array as individual function arguments.
    var output = simpleCalculator[method].apply(this, getInputValues());
    $('#solution').html(output);
  });

  //
  // $('#add').click(function(event) {
  //   event.preventDefault();
  //   var simpleCalculator = new Calculator("hot pink");
  //   var output = simpleCalculator.add.apply(this, getInputValues());
  //
  //   // output.forEach(function(element) {
  //     $('#solution').html(output);
  //   // });
  // });
  // $('#subtract').click(function(event) {
  //   event.preventDefault();
  //   var simpleCalculator = new Calculator("hot pink");
  //   var output = simpleCalculator.subtract.apply(this, getInputValues());
  //   // output.forEach(function(element) {
  //     $('#solution').html(output);
  //   // });
  // });
  // $('#multiply').click(function(event) {
  //   event.preventDefault();
  //   var simpleCalculator = new Calculator("hot pink");
  //   var output = simpleCalculator.multiply.apply(this, getInputValues());
  //   // output.forEach(function(element) {
  //     $('#solution').html(output);
  //   // });
  // });
  // $('#divide').click(function(event) {
  //   event.preventDefault();
  //   var simpleCalculator = new Calculator("hot pink");
  //   var output = simpleCalculator.divide.apply(this, getInputValues());
  //   // output.forEach(function(element) {
  //     $('#solution').html(output);
  //   // });
  // });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/pingpong.js":1}]},{},[2]);
