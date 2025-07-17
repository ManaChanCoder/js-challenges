class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static compareAge(personA, personB) {
    if (personA.age < personB.age) return `Person A is younger than person B`;
    else if (personA.age > personB.age)
      return `Person A is Older than person B`;
    else return `They're both same age`;
  }
}

const personA = new Person("Rhogenn", 24);
const personB = new Person("Joshua", 25);
console.log(Person.compareAge(personA, personB));
