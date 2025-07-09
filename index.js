/* 
Use your existing students array.
Use .some() to check if there’s at least one student enrolled in "Computer Science".
If true, print:
"There is at least one Computer Science student!"
Else, print:
"No Computer Science students found."
 */

const students = [
  { name: "Alice", major: "Mathematics" },
  { name: "Bob", major: "Computer Science" },
  { name: "Charlie", major: "Physics" },
  { name: "David", major: "Computer Science" },
  { name: "Eve", major: "Biology" },
];

const hasBiology = students.some((student) => student.major === "Biology");

if (hasBiology) {
  console.log("There is at least one Biology student!");
} else {
  console.log("No Biology students found.");
}
