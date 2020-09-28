var str1 = "You're catnip to a girl like me. Handsome, dazed,and to die for...";
var str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."'

var sln = str1.length; //1.
var p = str1.charAt(2); //2.
var upper = str1.toUpperCase(); //3.
var str4 = str1.concat(' ', '- Catwoman'); //4.
var str2 = 'Batman: "I tried to save you."' //5.
var str5 = str3.replace(/Catwoman/gi, " "); //6.

alert(`${str1}
Length: ${sln}
Character number 2 is: ${p}
To uppercase ${upper}
Concatenation in phrase: ${str4}
[Batman Returns] ${str2}
${str5}`);
