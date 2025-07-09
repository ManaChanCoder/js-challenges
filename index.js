/* 
Create an array called students. Each object must have:
- name
- age
- course
Step 1: Use .filter() to select students who are 18 or older.
Step 2: Use .sort() to sort the filtered students from youngest to oldest.
Step 3: Use .map() to turn each student into this message:
     "🎓 [name] (age [age]) - Course: [course]"
Step 4: Print each message using .forEach()
 */

const students = [
  { name: "Alice", age: 20, course: "Math" },
  { name: "Bob", age: 17, course: "Science" },
  { name: "Charlie", age: 22, course: "History" },
  { name: "David", age: 19, course: "Art" },
  { name: "Eve", age: 16, course: "Physics" },
]

const eligibleStudents = students.filter((student) => {
  return student.age >= 18
})

const sortedStudents = eligibleStudents.sort((a, b) => {
  return a.age - b.age
})

const messages = sortedStudents.map((stud) => {
  return `🎓 ${stud.name} (age ${stud.age}) - Course: ${stud.course}`
})

messages.forEach((msg) => {
  console.log(msg)
})