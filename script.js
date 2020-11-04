// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var passwordLength = prompt("How long do you want your password? Please choose between 8-128");
  if (passwordLength >= 8 && passwordLength <=128){
     alert("You chose a password length of " + passwordLength);
  }
  else{
     alert("You did not choose a correct password length!");
     return;
  }
   alert(passwordLength);

  alert("Please choose in the following prompts what features you would like on your password");
   
  var lowerCase = confirm("Do you want lower case letters in your password?");
  var upperCase = confirm("Do you want uppercase letters in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var specialChars = confirm("Do you want special characters in your password?");

  alert("Lower Case "+ lowerCase + " Upper Case "+ upperCase + " Numbers "+ numbers + " specialChars "+ specialChars);
  
  if (lowerCase === false && upperCase === false && numbers === false && specialChars === false){
    alert("You didn't choose any correct characters");
     return;
  }
  var tempPassword = "";
  var realPassword = ""; // for loop used later to create string of random password
  var lowerCaseString = "abcdefghigklmnopqrstuvwxyz";
  var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersString = "1234567890";
  var specialString= " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  if (lowerCase === true){
    tempPassword += lowerCaseString;
     alert(tempPassword);
    }
  if (upperCase === true){
    tempPassword += upperCaseString;
    alert(tempPassword);
  }
  if (numbers === true){
    tempPassword += numbersString;
    alert(tempPassword);
  }
  if (specialChars === true){
    tempPassword += specialString;
    alert(tempPassword);
  }

  for (var i = 1; i <= passwordLength; i++){
    var randomChar = Math.floor(Math.random() * tempPassword.length + 1);
    realPassword += tempPassword.charAt(randomChar);
  } // for loop end
  alert(realPassword);

  return (realPassword);

} //Function closed bracket


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
