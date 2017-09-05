// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  
  var newString = "";
  for(var i = 0; i < num; i++) {
    newString += str;
  }
  
  return newString;
}

repeatStringNumTimes("abc", 3);
