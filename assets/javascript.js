// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = '';
  var runAgain = true;

  while (runAgain) {
    var passwordLength = validatePrompt();
    console.log(`before if statement: ${passwordLength}`)

    if (passwordLength === null) {
      runAgain = false;
      password = ''
      console.log(`Null Break`)
      break
    } else if (passwordLength === undefined) {
      runAgain = true;
      password = 'Please try again!'
      console.log(`Undefined Repeat`)
      writeToPage(password)
    } else {
      console.log(`generating password. passwordLength ${passwordLength}`)
      password = generatePassword(passwordLength);
      runAgain = false;
      writeToPage(password)
    }
  }




  function writeToPage(password) {
    var passwordText = document.querySelector("#password").textContent = password;
      console.log(`password: ", ${password}`)
      console.log(`passwordText: ", ${passwordText}`)
      console.log(`passwordText.value: ", ${passwordText.value}`)
     // setTimeout(() => {}, 5000);
     console.log(`write to page function: ${document.querySelector('#password').value}`)
  }
  //All character strings to put into arrays-----------------
var availableUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var availableLowercase = 'abcdefghijklmnopqrstuvwxyz';
var availableNumbers = '0123456789';
var availableSpecial = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';


function validatePrompt() {
  var passwordLength = prompt('What length of password would you like? \nPlease enter a number from 8-128');


  if (passwordLength === "" || passwordLength > 128 || passwordLength < 8 || passwordLength === null || (isNaN(passwordLength))) {
    if (passwordLength === null) {
      console.log(`Failed`)
      return null
    }
    else if (passwordLength === "") {
      alert('Please enter a password length')
      console.log(`Failed`)
      return undefined
    } else if (passwordLength > 128) {
      alert('Selected password length is too long. Please choose a shorter password.')
      console.log(`Failed`)
      return undefined
    } else if (passwordLength < 8) {
      alert('Selected password length is too short. Please choose a longer password.');
      console.log(`Failed`)
      return undefined
    } else if (isNaN(passwordLength)) {
      alert('Please enter a number only');
      console.log(`Failed`)
      return undefined
    }
    console.log(`end of validate ${passwordLength}`)
  }

  return passwordLength
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
