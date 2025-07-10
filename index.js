const person = [
  { lastName: "Saingga", firstName: "Rhogenn", age: 24 },
  { lastName: "Sihombing", firstName: "Ricky", age: 25 },
  { lastName: "Sihombing", firstName: "Ricky", age: 25 },
];

const filteredPeople = person.filter((p) => {
  return p.age >= 18;
});

if (filteredPeople.length > 0) {
  filteredPeople.forEach((filteredPerson) => {
    console.log(`You are allowed age: ${filteredPerson.age}`);
  });
}
