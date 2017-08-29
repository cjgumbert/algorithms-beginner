//Reverse a string

function reverseString(str) {
  var revArr = str.split('').reverse();
  var revStr = revArr.join('');
  return revStr;
}

reverseString("hello");
