// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

function titleCase(str) {
  var array = str.split(' ');
  for(var i = 0; i < array.length; i++) {
    var placeHolder = array[i];
    var upFirstLetter = placeHolder.charAt(0).toUpperCase();
    var otherLetters = placeHolder.slice(1, placeHolder.length).toLowerCase();
    array[i] = upFirstLetter.concat(otherLetters);
  }
  
  var newString = array.join(' ');
  return newString;
}

titleCase("I'm a little tea pot");
