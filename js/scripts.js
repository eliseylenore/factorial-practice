$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-number").val());
    var result = 1;
    for (i = userInput; i > 0; i -= 1) {
      result *= i;
      console.log(result);
    }
  });
});
