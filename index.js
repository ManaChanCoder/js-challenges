const students = [
  { firstName: "Rhogenn", lastName: "Saingga", age: 20, grades: [90, 85, 88] },
  { firstName: "Rizky", lastName: "Hidayat", age: 22, grades: [78, 82, 80] },
  { firstName: "Dimas", lastName: "Pratama", age: 21, grades: [95, 92, 89] },
];

const addStudent = (firstName, lastName, age, grades = []) => {
  const newStudent = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    grades: grades,
  };
  students.push(newStudent);
  console.log(`Student ${firstName} ${lastName} added successfully.`);
};

addStudent("Budi", "Santoso", 23, [88, 90, 85]);

students.forEach((student) => {
  console.log(
    `Name: ${student.firstName} ${student.lastName}, Age: ${
      student.age
    }, Grades: ${student.grades.join(", ")}`
  );
});
