const employees = [
  { name: "Michael", age: 28 },
  { name: "Rodney", age: 24 },
  { name: "Rhogenn", age: 24 },
  { name: "Brent", age: 25 },
  { name: "Joshua", age: 25 },
  { name: "Kc", age: 24 },
];

const commonAge = employees.reduce((total, current) => {
  total[current.age] = (total[current.age] || 0) + 1;
  return total;
}, {});

let mostCommon = null;
let maxCount = 0;

for (const age in commonAge) {
  if (commonAge[age] > maxCount) {
    maxCount = commonAge[age];
    mostCommon = Number(age);
  }
}
console.log(
  `The most common age: ${mostCommon}, we have ${maxCount} of them with same age`
);
