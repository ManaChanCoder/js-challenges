const students = {
  firstName: "Rhogenn",
  lastName: "Saingga",
  grades: [90, 85, 88, 92],
  isPassed() {
    let average = 0;
    this.grades.forEach((grade) => {
      average += grade / this.grades.length;
    });
    if (average >= 75) {
      return `Congratulations ${this.firstName} ${
        this.lastName
      }, you have passed with an average grade of ${average.toFixed(2)}.`;
    } else {
      return `Sorry ${this.firstName} ${
        this.lastName
      }, you have not passed. Your average grade is ${average.toFixed(2)}.`;
    }
  },
};

console.log(`${students.isPassed()}`);
