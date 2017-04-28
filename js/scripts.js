$(document).ready(function() {
  $("form#questions").submit(function(event) {
  var ques1 = $("input:radio[name=ques1]:checked").val();
  var ques2 = $("input:radio[name=ques2]:checked").val();
  var ques3 = $("input:radio[name=ques3]:checked").val();


  if (ques1 === "c#php" && ques2 === "c#" && ques3 === "c#") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".c#").show();
  }

  else if (ques1 === "c#php" && ques2 === "php" && ques3 === "php") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".php").show();
  }
  event.preventDefault();
  });
});
