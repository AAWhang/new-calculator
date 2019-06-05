
var number1;
var number2;

function addstuff(number1, number2) {
  var result = number1 + number2;
   $("#output").text(result);
};

function substuff(number1, number2) {
  var result = number1 - number2;
   $("#output2").text(result);
};

function multiply(number1, number2) {
  var result = number1 * number2;
   $("#output3").text(result);
};

function divide(number1, number2) {
  var result = number1 / number2;
   $("#output4").text(result);
};




$(document).ready(function() {


  $("form#math").submit(function(event) {
      event.preventDefault();
      number1 = parseInt($("#num1").val());
      number2 = parseInt($("#num2").val());
      addstuff(number1, number2);
    });

    $("form#mathsub").submit(function(event) {
        event.preventDefault();
        number1 = parseInt($("#num3").val());
        number2 = parseInt($("#num4").val());
        substuff(number1, number2);
      });

      $("form#mathmul").submit(function(event) {
          event.preventDefault();
          number1 = parseInt($("#num5").val());
          number2 = parseInt($("#num6").val());
          multiply(number1, number2);
        });

        $("form#mathdiv").submit(function(event) {
            event.preventDefault();
            number1 = parseInt($("#num7").val());
            number2 = parseInt($("#num8").val());
            divide(number1, number2);
          });

/*
    $("form#subtract").submit(function(event) {
        event.preventDefault();
        var number1 = parseInt($("#num1").val());
        var number2 = parseInt($("#num2").val());
        var resultb = subtract(number1, number2);
        $("#outputb").text(result);
      });




      $("form#math").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#num1").val());
          var number2 = parseInt($("#num2").val());
          var result = multiply(number1, number2);
          $("#outputb").text(result);
        });
        $("form#math").submit(function(event) {
            event.preventDefault();
            var number1 = parseInt($("#num1").val());
            var number2 = parseInt($("#num2").val());
            var result = divide(number1, number2);
            $("#output").text(result);
          });

*/
});
