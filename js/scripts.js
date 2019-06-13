$(function(){

  var userInput;

// Roman Numerals
  function isOnes (userInput) {
    for (index = userInput; index > 0; index --){
      if (index == 4){
      $("#romanOutput").append("IV");
      index-=3;
      } else if (index == 9){
      $("#romanOutput").append("IX");
      index-=8;
    } else if (index >= 5 && index < 9) {
      $("#romanOutput").append("V");
      index-=4;
      } else {
      $("#romanOutput").append("I");
      }
    };
  };
  function isTens (userInput) {
    for (index=userInput; index > 0; index--)
    if (index == 4){
    $("#romanOutput").append("XL");
    index-=3;
    } else if (index == 9){
    $("#romanOutput").append("XC");
    index-=8;
    } else if (index >= 5 && index < 9) {
    $("#romanOutput").append("L");
    index-=4;
    } else {
    $("#romanOutput").append("X");
    }
  };
  function isHuns (userInput) {
    for (index=userInput; index > 0; index--)
    if (index == 4){
    $("#romanOutput").append("CD");
    index-=3;
    } else if (index == 9){
    $("#romanOutput").append("CM");
    index-=8;
    } else if (index >= 5 && index < 9) {
    $("#romanOutput").append("D");
    index-=4;
    console.log(index);
    } else {
    $("#romanOutput").append("C");
    }
  };
  function isK (userInput) {
    for (index=userInput; index > 0; index--)
    if (index >=4){
    $("#romanOutput").append("Impossible as Roman Numerals cannot calculate above 3999");
    } else {
    $("#romanOutput").append("M");
    }
  };
  $("form#romans").submit(function(event){
      event.preventDefault();
      userInput = $("input#number").val().split('');
      $("#romanOutput").text("This is your number in Roman Numerals: ");
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
        $("#romanOutput").text("This number is too large to convert!");
      }
    });

// Cryptograph
  $("form#crypt").submit(function(event){
    event.preventDefault();
    var temp = [];
    var counter = 0;
    var elem = 0;
    var message = $("#msg").val().split('');
    var cols = Math.ceil(Math.sqrt(message.length));
    alert(cols);
    for (i=0; i < message.length; i++) {
      temp += (message[(cols*elem)+counter]);
      elem++;
      // counter = # of resets
      // cols * elem = index of element being grabbed
      if (message[(cols*elem)+counter] == undefined ) {
        counter++;
        elem=0;
      }
    }
    $("#cryptOutput").text("Here is your encrypted message: "+temp+".");
  })
});

// hel
// p m
// e--
//
