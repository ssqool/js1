function sortOddEven(a, b) {
  if ( a % 2 === 0 && b % 2 === 0) {
    return a - b;
  } else if ( a % 2 !== 0 && b % 2 !== 0) {
    return a - b;
  } else {
    if ( a % 2 !== 0 ) {
      return 1;
    } else {
      return -1;
    }
  }
}

const arr= [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
alert(arr.sort(sortOddEven));
sortEvenOdd(arr);
console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15]