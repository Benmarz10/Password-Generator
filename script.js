// Assignment code here
//window.prompt

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 var userInput = window.prompt("How long of a password would you like?")
 var passLength = parseInt(userInput)
 if (isNaN(passLength)) {
  window.alert("Your input is not a valid number.")
  // If no valid number is enter then leave the function
  return
 }
  if (passLength < 8 || passLength > 128) {
    window.alert("The length of password must be between 8 and 128 characters!")
    return
  }

  var userOksNumbers = window.confirm("Do you want numbers in your password?")
  var userOksSymbols = window.confirm("Do you want symbols in your password?")
  var userOksUppercase = window.confirm("Do you want uppercase letters in your password?")
  var userOksLowercase = window.confirm("Do you want lowercase letters in your password?")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
