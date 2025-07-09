/* 
Reuse your students array (use major or course — either is fine).
Use .every() to check if all students are enrolled in a major (i.e., their major property is not empty).
If true, print:
"All students have a declared major."
Else, print:
"Some students are missing a major."
 */

const students = [
  { name: "Alice", major: "Computer Science" },
  { name: "Bob", major: "Mathematics" },
  { name: "Charlie", major: "" }, // This student is missing a major
  { name: "David", major: "Physics" },
];

const allHaveMajors = students.every((student) => {
  return student.major !== "";
});

if (allHaveMajors) {
  console.log("All students have a declared major.");
} else {
  console.log("Some students are missing a major.");
}
