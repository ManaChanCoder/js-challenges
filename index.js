/* 
Task / Instruction:
Gamit ang array na person, gamitin ang .every() method para malaman kung lahat ay adults (age >= 18).
Kung lahat ay adults, iprint:
"All persons are adults."
Kung meron kahit isa na minor, iprint:
"There are still minors in the list."
 */

const person = [
  { lastName: "Saingga", firstName: "Rhogenn", age: 24 },
  { lastName: "Sihombing", firstName: "Ricky", age: 25 },
  { lastName: "Sihombing", firstName: "Ricky", age: 25 },
];

const allAdults = person.every((p) => p.age >= 18);

if (allAdults) console.log("All persons are adults.");
else console.log("There are still minor in the list.");
