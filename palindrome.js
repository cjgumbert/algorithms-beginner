//Create a function whereby if a palindrome is passed through, the function returns true, else it returns false.


function palindrome(str) {
  // Good luck!
  for(var i = 0; i < str.length; i++) {
  str = str.toLowerCase();
  str = str.replace(' ', '');
  str = str.replace('_', '');
  str = str.replace('.', '');
  str = str.replace(',', '');
  str = str.replace('(', '');
  str = str.replace(')', '');
  str = str.replace('-', '');
  str = str.replace('\\', '');
  str = str.replace('/', '');
  str = str.replace(':', '');
  }
  
  var rev = str.split('').reverse().join('');
  if (rev === str) {
    return true;
  } else {
  return false;
  }
}



palindrome("A man, a plan, a canal. Panama");
