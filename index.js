/* 
Create an array called people with several person objects. Each object must have:
name
age
Use .filter() to create a new array that only includes people who are 18 years old or older.
Print out each adult’s name and age like this:
"Jane is 25 years old and is allowed."
 */

const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "Diana", age: 16 },
  { name: "Ethan", age: 30 },
];

const adult = people.filter((person) => {
  return person.age >= 18;
});

adult.forEach((person) => {
  console.log(
    `name: ${person.name} is ${person.age} years old and is allowed.`
  );
});
