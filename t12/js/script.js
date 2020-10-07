let str1 = "";
let smt = prompt("Size of triangle: ", "")

for(let i = 0; i <= smt; i++) {
  for(let j = 0; j < i; j++) {
    str1 += "*";
  }
  str1 += "\n"
}

alert(str1);