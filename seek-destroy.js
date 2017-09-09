// You are provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as the following arguments.

function destroyer(arr) {
 
  var args = Array.prototype.slice.call(arguments);
  
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < args.length; j++) {
      if(arr[i] == args[j]) {
        delete arr[i];
      }
    }
  }
  var newArray = arr.filter(removeFalseValues);
  return newArray;
}

function removeFalseValues(value) {
  return Boolean(value);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// --> [1, 1];
