//Return true if the string in the first element of the array contains all of the letters 
//of the string in the second element of the array.

function mutation(arr) {
  
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  
  for(var i = 0; i < secondWord.length; i++) {
    var test = firstWord.indexOf(secondWord[i]);
      if(test === - 1) {
      return false;
      } 
    }
  return true;  
}

mutation(["hello", "hlo"]);
