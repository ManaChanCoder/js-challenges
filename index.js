/* 
Create an array called students. Each object must have:
- name
- age
- course
Step 1: Use .filter() to select students who are 18 or older.
Step 2: Use .map() to turn the filtered students into messages like:
"Hi, I’m [name], I’m [age] years old, and I’m taking [course]."
Step 3: Print each message using .forEach()
 */

const students = [
  { name: "Alice", age: 20, course: "Math" },
  { name: "Bob", age: 17, course: "Science" },
  { name: "Charlie", age: 19, course: "History" },
  { name: "David", age: 16, course: "Art" },
  { name: "Eve", age: 22, course: "Computer Science" },
];

const adultStudents = students.filter((student) => {
  return student.age >= 18;
});

const message = adultStudents.map((student) => {
  return `Hi, I’m ${student.name}, I’m ${student.age} years old, and I’m taking ${student.course}.`;
});

message.forEach((msg) => {
  console.log(msg);
});
