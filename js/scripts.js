$(function(){
var userInput;

  $("form").submit(function(event){
    event.preventDefault();
    userInput = $("input#number").val().split('');
    $("#output").text("This is your number in Roman Numerals: ");
    if (userInput.length == 1){
      isOnes(userInput);
    } else if (userInput.length == 2) {
      isTens (userInput);
    }
  });
});

//
// split()
//
// 3999
//
// 0,1,2,3


function isOnes (userInput) {
  for (index = userInput; index > 0; index --){
    if (index == 4){
    $("#output").append("IV");
    index-=3;
    } else if (index == 9){
    $("#output").append("IX");
    index-=8;
    } else if (index > 5 && index < 9) {
    $("#output").append("V");
    index-=4;
    console.log(index);
    } else {
    $("#output").append("I");
    }
  };
};
function isTens (userInput) {
  for (index=0; index < 1; index++)
  if (index == 4){
  $("#output").append("IX");
  index-=3;
  } else if (index == 9){
  $("#output").append("XC");
  index-=8;
  } else if (index > 5 && index < 9) {
  $("#output").append("L");
  index-=4;
  console.log(index);
  } else {
  $("#output").append("X");
  }
  isOnes(userInput[index]);
};




//
//
// I, II, III, IV V
// VI VII VIII IX X
