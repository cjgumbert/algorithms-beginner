//Return the remaining elements of an array after chopping off n elements from the head.
//The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArray = [];
  if(howMany === 0) {
    return arr;
    
  } else if (howMany === 1) {
    return arr.slice(1);
    
  } else if (howMany > 1) {
    return arr.splice(howMany, howMany);
  }
}

console.log(slasher([1, 2, 3], 1));


/*
Alternative, simpler solution:

function slasher(arr, howMany) {
  
  arr.splice(0, howMany);
  return arr;
}

console.log(slasher([1, 2, 3], 1));
*/
