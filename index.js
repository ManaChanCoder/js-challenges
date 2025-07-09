const details = {
  firstName: "Rhogenn",
  lastName: "Saingga",
  age: 24,
  address: {
    street: "Calavinti st",
    city: "Rodriguez Montalban",
    province: "Rizal",
    zip: "1860",
  },
};
const {
  firstName,
  lastName,
  age,
  address: { street, city, province, zip },
} = details;

console.log(
  `My name is ${firstName} ${lastName}, I am ${age} years old, I live at ${street}, ${city}, ${province}, ${zip}.`
);
