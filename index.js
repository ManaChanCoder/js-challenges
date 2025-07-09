/* 
Use your existing students array.
Filter the students who are taking "Computer Science".
Map them into strings like:
"Hi, I'm [name] and I'm majoring in Computer Science."
Print each of those strings using .forEach()
 */

const students = [
  { name: "Alice", major: "Computer Science" },
  { name: "Bob", major: "Mathematics" },
  { name: "Charlie", major: "Computer Science" },
  { name: "David", major: "Physics" },
  { name: "Eve", major: "Computer Science" },
];

const csStudents = students.filter((student) => {
  return student.major === "Computer Science";
});

const csMessage = csStudents.map((student) => {
  return `Hi, I'm ${student.name} and I'm majoring in Computer Science.`;
});

csMessage.forEach((msg) => {
  console.log(msg);
});
