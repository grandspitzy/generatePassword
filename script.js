// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatepassword() {
  var passwordLength = prompt("How long do you want your password? Please choose between 8-128");
   if (passwordLength >= 8 && passwordLength <=128){
     alert("You chose a password length of " + passwordLength);
   }
   else{
     alert("You did not choose a correct password length!");
   }
   alert(passwordLength);

   alert("Please choose in the following prompts what features you would like on your password");
   
  
} //Function closed bracket


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  alert("suck my dick");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
generatepassword(); // test the password