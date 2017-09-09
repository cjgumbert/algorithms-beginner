// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {

  var newArray = []; //created a placeholder
  
  newArray = arr.filter(isBoolean);
  //this step last. need to create the argument below. if function argument inside filter is true, the new array values that return true will be the only ones in the new array.
  
  return newArray;
}

function isBoolean(trueValue) {
  return Boolean(trueValue); 
  //Boolean function will give true if argument is true
}

bouncer([7, "ate", "", false, 9]);
