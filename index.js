const people = [
  { name: "Rhogenn", age: 24 },
  { name: "John", age: 25 },
  { name: "Maria", age: 32 },
  { name: "Carlos", age: 19 },
  { name: "Anna", age: 41 },
  { name: "Leo", age: 28 },
  { name: "Violi", age: 45 },
  { name: "Samuel", age: 35 },
  { name: "Ella", age: 22 },
  { name: "Mark", age: 60 },
  { name: "Tina", age: 29 },
];

const grouped = people.reduce(
  (result, person) => {
    if (person.age <= 30) {
      result.young.push(person);
    } else if (person.age > 30 && person.age <= 59) {
      result.adult.push(person);
    } else {
      result.senior.push(person);
    }
    return result;
  },
  { young: [], adult: [], senior: [] }
);

console.log(grouped);
