let number = prompt('Enter the value:', 1);

if (number == 1) {
  alert(number * 2 / 'a');
} else if (number == 2){
  alert(number - number / 0);
} else if (number == 3){
  alert(0 * Infinity);
} else if (number == 4){
  alert(number * 4000000 == Infinity);
} else {
  alert('Wrong input')
}
