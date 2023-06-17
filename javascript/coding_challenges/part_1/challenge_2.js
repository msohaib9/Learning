/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// let massOfMark = 78;
// let heightOfMark = 1.69;

// let massOfJohn = 92;
// let heightOfJohn = 1.95;

let massOfMark = 95;
let heightOfMark = 1.88;

let massOfJohn = 85;
let heightOfJohn = 1.76;

let bmiOfMark = massOfMark / heightOfMark ** 2;
let bmiOfJohn = massOfJohn / heightOfJohn ** 2;

let markHigherBMI = false;

// Part 1
if (bmiOfMark > bmiOfJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

// Part 2
if (bmiOfMark > bmiOfJohn) {
  console.log(
    `Mark's BMI (${bmiOfMark}) is higher than John's (${bmiOfJohn})!"`
  );
} else {
  console.log(
    `"John's BMI (${bmiOfJohn}) is higher than Mark's (${bmiOfMark}) !"`
  );
}
