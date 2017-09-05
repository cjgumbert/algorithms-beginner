// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {

  var startingPoint = str.length - target.length;
  if(str.substr(startingPoint, str.length) === target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
