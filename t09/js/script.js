function heroes (team, universe, race, eyeColor, hairColor) {
  if (team == 'Avanger' || team == 'S.H.I.E.L.D'
    && universe == 'Marvel'
    && race == 'human'
    && eyeColor == 'green'
    && hairColor == 'lightBrown/green') {
    alert('This is Black Widow!');
  } else if (team == 'Justice League Of America' || team == 'Teen Titans'
    && universe == 'DC Comics'
    && race == 'human' || race == 'kryptonian'
    && eyeColor == 'blue'
    && hairColor == 'black') {
    alert('This is Superman or Robin!');
  } else {
    alert('Didn\'t recognize!');
  }
}

let team = prompt('Enter the team:', 1 );
let universe = prompt('Enter the team:', 1 );
let race = prompt('Enter the team:', 1 );
let eyeColor = prompt('Enter the team:', 1 );
let hairColor = prompt('Enter the team:', 1 );

heroes (team, universe, race, eyeColor, hairColor);