const user = {
  firstName: "Rhogenn",
  lastName: "Saingga",
  age: 24,
  greet() {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
    );
  },
};

user.greet();
