function firstElements(arr, n) {
  let eji = [];
  if (arr.length < n) {
    n = arr.length;
  }
  for(var i = 0; i < n; i++) {
    eji[i] = arr[i];
  }
  return eji;
}
var heroes= ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
// var eji=new Array(5).fill(null);
console.log(firstElements(heroes, 5));// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, 1));// ["Captain America"]
console.log(firstElements(heroes, 3));// ["Captain America", "Hulk", "Thor"]
console.log(firstElements(heroes, 6));// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, -1));// []