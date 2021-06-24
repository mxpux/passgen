


//This password generator is meant to collect the variable password output from the User's specified choice.
//The user can decide if they want to include any of the following variables below.
//The password is required to be between 8 and 128 characters.

var generateBtn = document.querySelector("#generate");
var numChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var spCase = ["~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","|","[","]","<",">","?",",",".","/",];



//This set of questions will be utilized to generate the User's password based on their answers.
function generatePassword() {
//Given the choice of 8-128 characters, this data will be the length of their password.
//We are using promt to get and store their answer.
//Using parse-int to get a numbered output.
var length = parseInt(prompt("How many characters do you want the password to be? (8 and up to 128 characters)"));

//Given the choice of a Yes or No to confirm, the User can decide if they would like to include any uppercase letters.
var includeUpper = confirm("Do you want your password to have UPPERCASE characters?");

//Given the choice of a Yes or No to confirm, the User can decide if they would like to include any lowercase letters.
var includeLower = confirm("Do you want your password to have lowercase characters?");

//Given the choice of a Yes or No to confirm, the User can decide if they would like to include any numbers.
var includeNumber = confirm("do you want your password to include numbers?");

//Given the choice of a Yes or No to confirm, the User can decide if they would like to include any special characters.
var includeSpCase = confirm("do you want your password to include special characters?");

//We then gather all of the data from the result above and put it in this password-pot of results.
var potPassword = [];

//This variable is to store and generate the User's final password.
var finalPassword = ""



//+++The set of data below are now gathered and retrived from the User's choices above.+++//


//With an If statement, we can gather and combine the arrays to/from our "password-pot", and also our original arrays of the variables.
//If the user chose Yes to include uppercase letters, it is then added to our password-pot.
if(includeUpper === true){
  potPassword = potPassword.concat(upperCase);
}

//If the user chose Yes to include lowercase letters, it is then added to our password-pot.
//Because we are using the concat method, we can also write it as =+
if(includeLower === true){
  potPassword = potPassword.concat(lowerCase);
}

//If the user chose Yes to include special characters, it is then added to our password-pot.
if(includeSpCase === true){
  potPassword = potPassword.concat(spCase);
}

//If the user chose Yes to include lowercase letters, it is then added to our password-pot.
if(includeNumber === true){
  potPassword = potPassword.concat(numChoice);
}

//This step is now to mix all of the data from the User into the password-pot.
 console.log(potPassword)



//Looping is used to generate the variables from the User's choice.
for (let i = 0 ; i < length ; i++){
//To generate the random output, Random is used here based on the password-length specified by the User.
//The loop above will generate a new password-string everytime it's being run.
  var index = Math.floor(Math.random()*potPassword.length);
  var temp = potPassword[index];
  finalPassword += temp;
}
//Generating final password
return finalPassword;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
