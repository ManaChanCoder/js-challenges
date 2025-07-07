/* 
Practice basic conditional logic (if, else if, else)
Use comparison and logical operators
Simulate eligibility for something (like driving, voting, etc.)
 */

let age = 24;
let canVote = false;

if (age >= 18) {
  canVote = true;
}

switch (canVote) {
  case true:
    console.log(`You are ${age} years old, you are valid to vote`);
    break;
  case false:
    console.log("You are Minor");
    break;
  default:
    console.log("Invalid age");
    break;
}
