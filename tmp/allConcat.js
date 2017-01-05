var Calculator = require('./../js/pingpong.js').calculatorModule;



$(document).ready(function() {
  var getInputValues = function() {
    // get input values from the DOM
    var inputOne = parseInt($('#inputone').val());
    var inputTwo = parseInt($('#inputtwo').val());
    return [inputOne, inputTwo];
  };

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

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = "5f9b78221ca3f66f8522463f6a93e173";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    $.get(url + city + '&appid=' +  apiKey
    .then(function(response)) {
      console.log(response);
      $('.showWeather').text("The weather in " + city + " is " + response.weather[0].description + ".");
    });
    console.log("Notice: The GET request has been made.");
  });
});
