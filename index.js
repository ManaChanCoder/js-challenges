/* 
Create an array called people, where each element is an object with these properties:
name
age
hobby
Loop through the array and print this for each person:
"Hi, I'm [name], I'm [age] years old and I love [hobby]."


 */

const people = [
  { name: "Alice", age: 30, hobby: "reading" },
  { name: "Bob", age: 25, hobby: "gaming" },
  { name: "Charlie", age: 35, hobby: "hiking" },
];

people.forEach((person) => {
  console.log(
    `Hi, I'm ${person.name}, I'm ${person.age} years old and I love ${person.hobby}.`
  );
});
