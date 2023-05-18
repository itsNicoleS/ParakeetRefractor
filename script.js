// Assignment code
function generatePassword(){

  //prompt for user inputs
var length = prompt("How many characters? (Between 8-128 chars.)");
var uppercase = prompt("Uppercase? (Enter \"y\" for Yes.)");
var lowercase= prompt("lowercase? (Enter \"y\" for Yes.)");
var numbers= prompt("Do you want to add any numbers? (Enter \"y\" for Yes.)");
var specialCharacters= prompt ("Any special characters? i.e. !,@,#,$,%. (Enter \"y\" for Yes.)");
var outputpassword = "";

  //declaring characters   
  let characters = '';
    if (uppercase == "y" || uppercase == "Y") {
      var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      characters += uppers;
      var randomuppers = Math.floor(Math.random() * uppers.length);
      outputpassword += characters.charAt(randomuppers); 
    } 
   if (lowercase == "y" || lowercase == "Y") {
    var lowers = 'abcdefghijklmnopqrstuvwxyz';
    characters += lowers; 
    var randomlowers = Math.floor(Math.random() *lowers.length);
    outputpassword += characters.charAt(randomlowers);
    } 
   if (numbers == "y" || numbers == "Y") {
    var numbers = '134567890';
    characters += numbers; 
    var randomnumbers = Math.floor(Math.random() * numbers.length);
    outputpassword += characters.charAt(randomnumbers)

  }
   if (specialCharacters == "y" || specialCharacters == "Y") {
    characters += '!@#$%^&*()+~`|}{[]\:;?><,./-=';
    characters += specs;
    var randomchars = Math.floor(Math.random() * specs.length);
    outputpassword += characters.charAt(randomchars);
  }
else if (specialCharacters == "n"){
  alert("Fuck off, pal!");
}

for (let i = outputpassword.length-1; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  outputpassword += characters.charAt(randomIndex);
}

return outputpassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(){
 
 
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
