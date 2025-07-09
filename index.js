const details = {
  firstName: "Rhogenn",
  lastName: "Saingga",
  age: 24,
  hobbies: ["coding", "gaming", "reading"],
};
const { firstName, lastName, age, hobbies } = details;

console.log(`My name is ${firstName} ${lastName}, I am ${age} years old.`);

hobbies.forEach((hobby) => {
  console.log(`One of Rhogenn's hobbies is ${hobby}.`);
});
