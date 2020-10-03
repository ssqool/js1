

let check=()=>{
  let animal = prompt('What animal is the superhero most similar to?', '');
  const ranimal = /^[a-z,A-Z]{1,20}$/g.exec(animal);
  if(ranimal==null){
   return alert('Invalid input!');
  }
  let sex = prompt('Is the superhero male or female? Leave blank if unknown or other.', '');
  const rsex = /^male$|^female$|^()$/;
  if(sex.search(rsex)==-1){
    return alert('Invalid input!');
  }
  let age = prompt('How old is the superhero?', '');
  const rage =/^[1-9][0-9]{0,4}$/g.exec(age);

  if(rage==null){
    return  alert('Invalid input!');
  }

  if(sex=='male' && age<18) {
    alert(animal + '-boy!');
  } else if(sex=='female' && age<18) {
    alert(animal + '-girl!');
  } else if(sex=='male' && age>=18) {
    alert(animal + '-man!');
  } else if(sex=='female' && age>=18) {
    alert(animal + '-woman!');
  } else if(sex==='' && age<18) {
    alert('kid');
  } else if(sex=='' && age>=18) {
    alert('hero');
  }
}
check()

