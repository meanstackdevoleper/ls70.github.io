$(".grear-check").click(function(){

$(".profile-personal").fadeToggle();
});




$(window).load(function()
{
 
  $(".loading-overlay .sk-folding-cube").fadeOut(3000, 
    function()
{
$(this).parent().fadeOut(3000,
  function()

 
 {
  $(this).remove();
  

});
});
});

//bweee
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box


// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


// Validate capital letters
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

 if(req.url=="/home"){
  fs.readFile('project/aLMASERY.html' , function(err, pgRes) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(pgRes);
     res.end();
  });
}
}).listen(8080);
