//Runs in chrome
let age = prompt("Please enter your age:");
age = parseInt(age);

if (!isNaN(age)) {
  if (age >= 18) {
    console.log("You are eligible to drive.");
  } else if (age >= 16) {
    console.log("You can apply for a learner's permit.");
  } else {
    console.log("You are not eligible to drive yet.");
  }
} else {
  console.log("Invalid input. Please enter a valid age.");
}
