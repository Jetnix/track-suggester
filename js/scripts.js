$(document).ready(function() {
  $("form#option").submit(function(event) {
  var ques1 = $("input:radio[name=ques1]:checked").val();
  var ques2 = $("input:radio[name=ques2]:checked").val();
  var ques3 = $("input:radio[name=ques3]:checked").val();


  if (ques1 === "c#php" && ques2 === "coupe" && ques3 === "green") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".bmwcoupegrn").show();
  }

  else if (make === "bmw" && model === "coupe" && color === "red") {
    console.log(make, color);
    $("#newcar").hide();
    $("#option").hide();
    $(".bmwcoupered").show();
  }
