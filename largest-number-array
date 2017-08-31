//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    
    var largestNumber = 0;
    
    for(var j = 0; j < arr.length; j++) {
      
      if(arr[i][j] > largestNumber) {
        
        largestNumber = arr[i][j];
      }
    }
      newArray.push(largestNumber);
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
