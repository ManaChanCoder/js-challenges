const employees = [
  { name: "Michael", age: 28 },
  { name: "Rodney", age: 24 },
  { name: "Rhogenn", age: 24 },
  { name: "Brent", age: 25 },
  { name: "Joshua", age: 25 },
  { name: "Kc", age: 24 },
];

const groupedByAge = employees.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = [];
  }
  acc[curr.age].push(curr);
  return acc;
}, {});

console.log(groupedByAge);
