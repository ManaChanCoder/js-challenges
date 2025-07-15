const employees = [
  { name: "Michael", age: 28 },
  { name: "Rodney", age: 24 },
  { name: "Rhogenn", age: 24 },
  { name: "Brent", age: 25 },
  { name: "Joshua", age: 25 },
  { name: "Kc", age: 23 },
];

const reformatEmployees = employees.map((emp) => {
  return emp.name;
});
const flatEmployees = reformatEmployees.flat();
const totalEmployees = reformatEmployees.reduce((accumalator, currentValue) => {
  return accumalator + 1;
}, 0);

console.log(flatEmployees);
console.log(`we have ${totalEmployees} total employees in our company`);
