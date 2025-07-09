/* 
Create an array called students — each object must have:
name
course
Use .map() to turn the array into a new array of strings like:
"Hi, I’m [name] and I’m enrolled in [course]."
Print the new array using .forEach() (or console.log() directly inside .map() if you like).
 */

const students = [
  { name: "Alice", course: "Mathematics" },
  { name: "Bob", course: "Physics" },
  { name: "Charlie", course: "Chemistry" },
  { name: "Diana", course: "Biology" },
  { name: "Ethan", course: "Computer Science" },
];

const greetings = students.map((student) => {
  return `Hi, I'm ${student.name} and I'm enrolled in ${student.course}.`;
});

greetings.forEach((stud) => {
  console.log(stud);
});
