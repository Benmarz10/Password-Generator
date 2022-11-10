// Assignment code here
//window.prompt

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomChar(list) {
  return list[randomInt(list.length)]
}

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

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var options = []

  if (userOksNumbers === true) {
    options.push(numberList)
  }

  if (userOksSymbols === true) {
    options.push(symbolList)
  }

  if (userOksLowercase === true) {
    options.push(lowercaseList)
  }

  if (userOksUppercase === true) {
    options.push(uppercaseList)
  }

  var generatePassword = ""

  for (var i = 0; i < passLength; i++) {
    var randomList = getRandomChar(options)
    var randomItem = getRandomChar(randomList)
    generatePassword += randomItem
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
