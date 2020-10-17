function checkBrackets(str) {
  var l = 0;
  var p = 0;
  for(var i = 0; i < str.length; i++) {
    str.charAt(i);
    if ( str.charAt(i) === ')' ) {
      p += 1;
    }
    if ( str.charAt(i) === '(' ) {
      l += 1;
    }
  }
  return l - p;
}


console.log(checkBrackets('1)()(())2(()'));