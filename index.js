/* 
Create an object called person with these properties:
name
age
hobby
Print this sentence using the object:
"Hi, I'm [name], I'm [age] years old and I love [hobby]."
 */

const personInfoElement = document.getElementById("person-info");

const person = {
  name: "John",
  age: 30,
  hobby: "coding",
};
console.log(
  `Hi, I'm ${person.name}, I'm ${person.age} years old and I love ${person.hobby}.`
);

personInfoElement.textContent = `Hi, I'm ${person.name}, I'm ${person.age} years old and I love ${person.hobby}.`;
