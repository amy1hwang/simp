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
