$(document).ready(function() {
  $("form#questions").submit(function(event) {
  var ques1 = $("input:radio[name=ques1]:checked").val();
  var ques2 = $("input:radio[name=ques2]:checked").val();
  var ques3 = $("input:radio[name=ques3]:checked").val();


  if (ques1 === "csphp" && ques2 === "cs" && ques3 === "cs") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".cs").show();
  }

  else if (ques1 === "csphp" && ques2 === "php" && ques3 === "php") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".php").show();
  }
  else if (ques1 === "ruby" && ques2 === "ruby" && ques3 === "ruby") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".ruby").show();
  }
  else if (ques1 === "csphp" && ques2 === "cs" && ques3 === "ruby") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".cs").show();
  }
  else if (ques1 === "csphp" && ques2 === "php" && ques3 === "ruby") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".php").show();
  }
  else if (ques1 === "ruby" && ques2 === "cs" && ques3 === "cs") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".cs").show();
  }
  else if (ques1 === "ruby" && ques2 === "php" && ques3 === "php") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".php").show();
  }
  else if (ques1 === "ruby" && ques2 === "php" && ques3 === "ruby") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".ruby").show();
  }
  else if (ques1 === "ruby" && ques2 === "cs" && ques3 === "ruby") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".ruby").show();
  }
  else if (ques1 === "csphp" && ques2 === "ruby" && ques3 === "ruby") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".ruby").show();
  }
  else if (ques1 === "ruby" && ques2 === "cs" && ques3 === "php") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".ruby").show();
  }
  else if (ques1 === "ruby" && ques2 === "php" && ques3 === "cs") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".ruby").show();
  }
  else if (ques1 === "csphp" && ques2 === "php" && ques3 === "cs") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".cs").show();
  }
  else if (ques1 === "csphp" && ques2 === "cs" && ques3 === "php") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".php").show();
  }
  else if (ques1 === "ruby" && ques2 === "ruby" && ques3 === "cs") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".ruby").show();
  }
  else if (ques1 === "ruby" && ques2 === "ruby" && ques3 === "php") {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $("#questions").hide();
    $("#try").show();
    $(".ruby").show();
  }
  else {
    console.log(ques1, ques2, ques3);
    $("#track").hide();
    $(".fillout").show();
  }
  event.preventDefault();
  });
});
