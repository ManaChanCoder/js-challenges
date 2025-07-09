/* 
Use your existing students array
Use .find() to get the first student whose course is "Physics"
If found, print:
"Found [name]! They are enrolled in Physics."
 */

const students = [
  { name: "Alice", course: "Mathematics" },
  { name: "Bob", course: "Physics" },
  { name: "Charlie", course: "Chemistry" },
  { name: "David", course: "Physics" },
  { name: "Eve", course: "Biology" },
];

const foundStudent = students.find((student) => {
  return student.course === "Physics";
});
if (foundStudent) {
  console.log(`Found ${foundStudent.name}! They are enrolled in Physics.`);
}
