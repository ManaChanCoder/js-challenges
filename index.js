const person = [
  { lastName: "Saingga", firstName: "Rhogenn", age: 24 },
  { lastName: "Sihombing", firstName: "Ricky", age: 25 },
  { lastName: "Sihombing", firstName: "Ricky", age: 25 },
];

const findMinor = person.filter((p) => p.age < 18);

findMinor.forEach((minor) =>
  console.log(
    `Sorry ${minor.firstName}, you are still a minor at ${minor.age} years old`
  )
);
