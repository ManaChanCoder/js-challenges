const students = [
  {
    firstName: "Rhogenn",
    lastName: "Saingga",
    grades: [92, 81, 82, 95, 88],
    isPassed() {
      let average = 0;
      let subjectNumber = 0;
      this.grades.forEach((grade) => {
        subjectNumber = this.grades.length;
        average += grade;
      });
      average /= subjectNumber;
      if (average >= 75) {
        return `${this.firstName} ${
          this.lastName
        } has passed with an average grade of ${average.toFixed(2)}`;
      } else {
        return `${this.firstName} ${
          this.lastName
        } has not passed with an average grade of ${average.toFixed(2)}`;
      }
    },
  },
  {
    firstName: "Rizky",
    lastName: "Maulana",
    grades: [85, 90, 78, 88, 92],
    isPassed() {
      let average = 0;
      let subjectNumber = 0;
      this.grades.forEach((grade) => {
        subjectNumber = this.grades.length;
        average += grade;
      });
      average /= subjectNumber;
      if (average >= 75) {
        return `${this.firstName} ${
          this.lastName
        } has passed with an average grade of ${average.toFixed(2)}`;
      } else {
        return `${this.firstName} ${
          this.lastName
        } has not passed with an average grade of ${average.toFixed(2)}`;
      }
    },
  },
  {
    firstName: "Dimas",
    lastName: "Pratama",
    grades: [75, 80, 85, 90, 95],
    isPassed() {
      let average = 0;
      let subjectNumber = 0;
      this.grades.forEach((grade) => {
        subjectNumber = this.grades.length;
        average += grade;
      });
      average /= subjectNumber;
      if (average >= 75) {
        return `${this.firstName} ${
          this.lastName
        } has passed with an average grade of ${average.toFixed(2)}`;
      } else {
        return `${this.firstName} ${
          this.lastName
        } has not passed with an average grade of ${average.toFixed(2)}`;
      }
    },
  },
];

students.forEach((stud) => {
  console.log(`${stud.isPassed()}`);
});
