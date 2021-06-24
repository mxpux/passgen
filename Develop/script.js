


//This password generator is meant to collect the variable data from the User's choice.
//The user can decide if they want to include any of the following variables below.
//The password is required to be between 8 and 128 characters.

var generateBtn = document.querySelector("#generate");
var numChoice = [0,1,2,3,4,5,6,7,8,9];
var upperCase = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var spCase = ["~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","|","[","]","<",">","?",",",".","/"];



//This set of questions will be utilized to generate the User's password based on their answers.

function generatePassword() {
//Given the choice of 8-128 characters, this data will be the length of their password.
//We are using promt to get and store their answer.
var length = parseInt(prompt("How many characters do you want the password to be? (8 and up to 128 characters)"));

//Given the choice of a Yes or No to confirm, the User can decide if they would like to include any uppercase letters.
var includeUpper = confirm("Do you want your password to have UPPERCASE characters?");

//Given the choice of a Yes or No to confirm, the User can decide if they would like to include any lowercase letters.
var includeLower = confirm("Do you want your password to have lowercase characters?");

//Given the choice of a Yes or No to confirm, the User can decide if they would like to include any numbers.
var includeNumber = confirm("do you want your password to include numbers?");

//Given the choice of a Yes or No to confirm, the User can decide if they would like to include any special characters.
var includeSpChar = confirm("do you want your password to include special characters?");

//We then gather all of the data from the result above and put it in this pot of results.
var pot = [];

//This variable is to store and generate the User's final password.
var finalPassword = ""}
