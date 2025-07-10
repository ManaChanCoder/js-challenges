const person = [
  { lastName: "Saingga", firstName: "Rhogenn", age: 24 },
  { lastName: "Sihombing", firstName: "Ricky", age: 25 },
  { lastName: "Sihombing", firstName: "Ricky", age: 25 },
];

const findPerson = (lastName) => {
  const found = person.find((p) => {
    return p.lastName.toLowerCase() === lastName.toLowerCase();
  });
};
findPerson("Saingga");
