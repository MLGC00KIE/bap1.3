// print line in console
console.log("hallo wereld");


// create random number
var RNG = Math.floor((Math.random() * 10) + 1);

// check if the number is under or equals 4
if (RNG <= 4) {
  console.log("het nummer is 4 of lager");
  var win = false;
} else {
  console.log("het nummer is: " + RNG);
  var win = true;
}

if (win) {
  console.log("congratulations you won nothing");
} else {
  console.log("you lost noob");
}
