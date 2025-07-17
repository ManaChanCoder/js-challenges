class Person {
  constructor(name) {
    this.name = name;
  }
}
class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, working as a ${this.position}.`);
  }
}

const employee1 = new Employee("Rhogenn", "Frontend Developer");
const employee2 = new Employee("Rodney", "Pharmaceutical");
const employee3 = new Employee("Brent", "Construction");
const employee4 = new Employee("Kc", "Factory Worker");
const employee5 = new Employee("Raymond", "Restaurant Crew");

employee1.introduce();
employee2.introduce();
employee3.introduce();
employee4.introduce();
employee5.introduce();
