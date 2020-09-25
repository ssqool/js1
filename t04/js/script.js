function solver(a, b, c, d, e) {
  if (typeof a === 'number' &&
    typeof b === 'number' &&
    typeof c === 'number' &&
    typeof d === 'number' &&
    typeof e === 'number') {
    let x = a ** 2 - (5 * b * c) + (d / 3) + e;
    return x.toFixed(2);
  }
  else {
    alert( 'Wrong input' );
  }
}

alert(solver(40, -9, 0.5, 7, 100));
alert(solver(40, "doesn't look like a number", 0.5, 7, 100));
alert(solver(40, -9, 0.5, 7));