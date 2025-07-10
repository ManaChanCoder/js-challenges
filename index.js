const people = [
  { name: "John", age: 35 },
  { name: "Smith", age: 63 },
  { name: "Violi", age: 45 },
  { name: "Margie", age: 60 },
];

const findingSenior = people.reduce((count, senior) => {
  if (senior.age >= 60) {
    return count + 1;
  }
  return count;
}, 0);

console.log(`The number of senior citizen is: ${findingSenior}`);
