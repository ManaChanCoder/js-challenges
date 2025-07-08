/* 
Create a variable age and assign any number to it.
Write an if statement to check if the person is 18 or older.
If true, print: "You are allowed to vote."
If false, print: "Sorry, you are too young to vote."
 */

let age = 24;

if (age >= 18) {
  console.log("You are allowed to vote.");
} else if (age < 18) {
  console.log("Sorry, you are too young to vote.");
} else {
  console.log("Invalid age");
}
