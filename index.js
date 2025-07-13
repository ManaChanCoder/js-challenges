const departments = [
  {
    name: "Engineering",
    employees: [{ name: "Michael" }, { name: "Louije" }, { name: "Kiraray" }],
  },
  {
    name: "Electrician",
    employees: [{ name: "Raymond" }, { name: "Rodney" }, { name: "Tsuyochi" }],
  },
  {
    name: "Frontend Developer",
    employees: [{ name: "Rhogenn" }, { name: "Joshua" }, { name: "Daniel" }],
  },
  {
    name: "HR",
    employees: [{ name: "Anna" }, { name: "Leo" }],
  },
];

departments.forEach((total) => {
  console.log(`${total.name}: ${total.employees.length}`);
});

const getTotal = departments.reduce((accum, current) => {
  return accum + current.employees.length;
}, 0);

console.log(`The Total employees in all department: ${getTotal}`);
