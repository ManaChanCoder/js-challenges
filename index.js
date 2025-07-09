const students = [
  { firstName: "Rhogenn", lastName: "Saingga", age: 24, grades: [90, 85, 88] },
  { firstName: "Aldo", lastName: "Pratama", age: 22, grades: [78, 82, 80] },
  { firstName: "Budi", lastName: "Santoso", age: 23, grades: [95, 92, 89] },
  { firstName: "Citra", lastName: "Wulandari", age: 21, grades: [88, 90, 85] },
  { firstName: "Dewi", lastName: "Lestari", age: 20, grades: [82, 84, 87] },
];

const callStudentByName = (lastName) => {
  const findStudent = students.find((student) => {
    return student.lastName.toLowerCase() === lastName.toLowerCase();
  });
  if (findStudent) {
    return `Hello, ${findStudent.firstName} ${findStudent.lastName}! You are ${
      findStudent.age
    } years old and your grades are ${findStudent.grades.join(", ")}.`;
  } else {
    return "Student not found.";
  }
};

console.log(callStudentByName("Saingga"));
