
var add = function(number1, number2) {
  var result = number1 + number2;
   $("#output").text(result);
};

var subtract = function(number1, number2) {
  var result = number1 - number2;
   $("#output").text(result);
};

var multiply = function(number1, number2) {
  var result = number1 * number2;
   $("#output").text(result);
};

var divide = function(number1, number2) {
  var result = number1 / number2;
   $("#output").text(result);
};



$(document).ready(function() {


  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
  }

  $("form#math").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var result = add(number1, number2);
      $("#output").text(result);
    });

    $("form#math").submit(function(event) {
        event.preventDefault();
        var number1 = parseInt($("#num1").val());
        var number2 = parseInt($("#num2").val());
        var result = subtract(number1, number2);
        $("#output").text(result);
      });
      $("form#math").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#num1").val());
          var number2 = parseInt($("#num2").val());
          var result = multiply(number1, number2);
          $("#output").text(result);
        });
        $("form#math").submit(function(event) {
            event.preventDefault();
            var number1 = parseInt($("#num1").val());
            var number2 = parseInt($("#num2").val());
            var result = divide(number1, number2);
            $("#output").text(result);
          });


});
