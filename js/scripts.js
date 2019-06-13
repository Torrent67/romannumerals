$(function(){
var userInput;

function isOnes (userInput) {
  for (index = userInput; index > 0; index --){
    if (index == 4){
    $("#output").append("IV");
    index-=3;
    } else if (index == 9){
    $("#output").append("IX");
    index-=8;
  } else if (index >= 5 && index < 9) {
    $("#output").append("V");
    index-=4;
    console.log(index);
    } else {
    $("#output").append("I");
    }
  };
};
function isTens (userInput) {
  for (index=userInput; index > 0; index--)
  if (index == 4){
  $("#output").append("IX");
  index-=3;
  } else if (index == 9){
  $("#output").append("XC");
  index-=8;
  } else if (index >= 5 && index < 9) {
  $("#output").append("L");
  index-=4;
  } else {
  $("#output").append("X");
  }
};
function isHuns (userInput) {
  for (index=userInput; index > 0; index--)
  if (index == 4){
  $("#output").append("CD");
  index-=3;
  } else if (index == 9){
  $("#output").append("CM");
  index-=8;
  } else if (index >= 5 && index < 9) {
  $("#output").append("D");
  index-=4;
  console.log(index);
  } else {
  $("#output").append("C");
  }
};
function isK (userInput) {
  for (index=userInput; index > 0; index--)
  if (index >=4){
  $("#output").append("Impossible as Roman Numerals cannot calculate above 3999");
  } else {
  $("#output").append("M");
  }
};


  $("form").submit(function(event){
    event.preventDefault();
    userInput = $("input#number").val().split('');
    $("#output").text("This is your number in Roman Numerals: ");
    if (userInput.length == 1){
      isOnes(userInput);
    } else if (userInput.length == 2) {
      isTens (userInput[0]);
      isOnes (userInput[1]);
    } else if (userInput.length ==3){
      isHuns (userInput[0]);
      isTens (userInput[1]);
      isOnes (userInput[2]);
    } else if (userInput.length == 4){
      isK    (userInput[0]);
      isHuns (userInput[1]);
      isTens (userInput[2]);
      isOnes (userInput[3]);
    } else {
      $("#output").text("This number is too large to convert!");
    }
  });
});
