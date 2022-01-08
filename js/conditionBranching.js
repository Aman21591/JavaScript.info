console.log("Welcome to condition branching");

let name = prompt("What is your name ?", "");
if (name == "Aman Yadav") {
  console.log(`You are Write ${name}`);
} else {
  console.log(`you are wrong`);
}

// Else if

let year = prompt("choose your year?", "");
let Name = "Aman Yadav";
if (year == 2000) {
  console.log(`This is your Birthday Year ${Name}`);
} else if (year < 2000) {
  console.log(`This year is before your Birthday ${Name}`);
} else {
  console.log(`This year is after your Birthday ${Name}`);
}

//Multiple ?
let age = prompt("age?", 21);
let message =
  age < 3
    ? "Hii baby"
    : age < 21
    ? "You are not mature"
    : age < 35
    ? "you are fully mature"
    : "you are pro mature";
console.log(message);

//Non traditional use of ?
let brand = prompt("which app you created using javaScript?", "");
brand == "Flipcart"
  ? console.log("You are Right!")
  : console.log("You are Wrong!");

  // Example 1
  if('0'){
      alert('Hii');
  }

  //Example 2
  let givenName=prompt('What the "official" name of JavaScript?','');
  if(givenName=="ECMAScript"){
      console.log('Right');
  }
  else{
      console.log('You dont know? "ECMAScript"');
  }
