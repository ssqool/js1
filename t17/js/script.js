let firstName = prompt("Enter first name:", "");
let lastName = prompt("Enter last name:", "");

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

const valid1 = /^[a-z,A-Z]{1,20}$/g.exec(firstName);
const valid2 = /^[a-z,A-Z]{1,20}$/g.exec(lastName);

if (valid1==null || valid2==null) {
  alert("Wrong input");
} else {
  alert("First name: " + firstName + "  Last name: " + lastName);
}
