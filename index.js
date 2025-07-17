class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet = () => {
    console.log(`Hi i'm ${this.name}, ${this.age} years old`);
  };
}

const person1 = new Person("Rhogenn", 24);
const person2 = new Person("Rodney", 24);
const person3 = new Person("Joshua", 25);
const person4 = new Person("Kc", 25);
const person5 = new Person("Brent", 25);
const person6 = new Person("Michael", 28);
person1.greet();
person6.greet();
