var firstname = prompt("eneter your firstname:")
var lastname = prompt("eneter your lastname:")
var age = prompt("how old are you:")
var hieght = prompt("eneter your hieght:")
var petname = prompt("enter your pet name:")
alert("thank you for your information")

namecond = null;
age = null;
hieght = null;
petcond = null;


if (firstname[0] === lastname[0]) {
  namecond = true;

}else {
  namecond =false
}
if (age>=20 && age<=30) {
  age = true;
}else {
  age = false;
}
if (hieght>=170) {
  hieght = true;
}else {
  hieght = false;
}
if (petname[petname.length-1] === "y") {
  petcond = true;
}else {
  petcond = false;
}
if (firstname && age && hieght && petname) {
  console.log("Welcome spy!");
}else {
  console.log("nothing to see");
}
