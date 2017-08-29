// Create a function that returns the factorial of a single integer passed into the function.
// For example, 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
  if(num < 0 || typeof num !== 'number') {
    return console.log("Not a valid number. Please select a positive integer.");
  } else if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);
