var x = prompt("Enter the first number", "1");
var y = prompt("Enter the second number", "100");

// function checkDivision(beginRange, endRange) {
//   for (let i = beginRange; i <= endRange; i++) {
//     if (i % 2 === 0 && i % 3 !== 0 && i % 10 !== 0) {
//       console.log(i + " is even");
//     } else if (i % 3 === 0 && i % 2 !== 0 && i % 10 !== 0) {
//       console.log(i + " is a multiple of 3");
//     } else if (i % 10 === 0  && i % 2 !== 0 && i % 3 !== 0) {
//       console.log(i + " is a multiple of 10");
//     } else if (i % 10 === 0 && i % 2 === 0 && i % 3 === 0){
//       console.log(i + " is even, a multiple of 3, a multiple of 10");
//     }  else if (i % 2 === 0 && i % 3 === 0){
//       console.log(i + " is even, a multiple of 3");
//     } else if(i % 2 === 0 && i % 10 === 0){
//       console.log(i + " is even, a multiple of 10");
//     } else {
//       console.log(i + " -");
//     }
//   }
// }
function checkDivision(beginRange, endRange) {
  for (let i = beginRange; i <= endRange; i++) {
    let result = i;
    if (i % 2 === 0) {
      result += " is even";
      if (i % 3 === 0) {
        result += ", a mult of 3";
        if (i % 10 === 0)
          result += ", a mult of 10";
      }
    } else if (i % 3 === 0) {
      result += " is multiply of 3";
    } else if (i % 10 === 0) {
      result += " is multiply of 10";
    } else {
      result += " -";
    } 
    console.log(result);
  }
}

checkDivision(x,y);