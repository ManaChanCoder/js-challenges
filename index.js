const users = [
  {
    name: "Alice",
    age: 30,
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
  },
  {
    name: "Bob",
    age: 25,
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
  },
  {
    name: "Charlie",
    age: 35,
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
  },
];

users.forEach((user) => {
  console.log(user.greet());
});
