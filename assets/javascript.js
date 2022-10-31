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
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
