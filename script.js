// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //created variable prompts and confirms to get required data
  var carnum = prompt('how long would you like your password?');
  var undtext = confirm('Would you like lowercase letters?');
  var upptext = confirm('Would you like uppercase letters?');
  var number = confirm('Would you like numbers?');
  var special = confirm('Would you like specila Characters?');
  //converts carnum from at string to a number
  Number(carnum);

  //created all arrays with preferenced character 
  var passpref = [' '];
  var specialchar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '{', '[', ']', ';', ':', '.', ',', '/'];
  var alphabetlow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var alphabetupp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numchar = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  //Added conditional statements inorder create final array
  if (undtext === true){
    passpref = passpref.concat(alphabetlow);
  }

  if (upptext === true){
    passpref = passpref.concat(alphabetupp);
  }

  if (number === true){
    passpref = passpref.concat(numchar);
  }

  if (special === true){
    passpref = passpref.concat(specialchar);
  }
  console.log(passpref);
  
  //Password is crated and calls upon passpref for random character thats as long as carnum
  var password = [];
  for (var i = 0; i < carnum; i++){
    //Provided Math Funcion inorder to randomly choose characters for the password
    const random = Math.floor(Math.random() * passpref.length);
    var passlength = passpref[random];
    //continually adding another cell to the array with each run
    password = password.concat(passlength);
  }
  
  //Turns the passowrd Array into a string as well as removes commas
  var passwordstring = password.join('');

  //returns ther string to the write password function
  return passwordstring;
} 