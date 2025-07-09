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

details.firstName = "Michael";
details.lastName = "Gallon";
details.age = 28;
details.address.street = "San buena st";
details.address.city = "Cainta";
details.address.province = "Rizal";
details.address.zip = "1900";

const {
  firstName,
  lastName,
  age,
  address: { street, city, province, zip },
} = details;

console.log(
  `My name is ${firstName} ${lastName}, I am ${age} years old, I live at ${street}, ${city}, ${province}, ${zip}.`
);
