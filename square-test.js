// Given an integral number, determine if it's a square number:

//The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function(n){
  return Math.sqrt(n)%1===0
}
