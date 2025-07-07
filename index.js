/* 
Practice writing reusable functions
Accept arguments, return values
Use a function to perform an operation or format data
 */

const calculator = (num1, num2, operation) => {
  switch (operation) {
    case "addition":
      return num1 + num2;

    case "subtraction":
      return num1 - num2;

    case "multiplication":
      return num1 * num2;

    case "division":
      return num1 / num2;

    default:
      return "Invalid operation";
  }
};
const greeting = (name) => {
  return `Good Day, ${name}!`;
};
const ageCalculation = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};
const celsiusFarenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

console.log(calculator(21, 55, "multiplication"));
console.log(greeting("Rhogenn"));
console.log(ageCalculation(2001));
console.log(celsiusFarenheit(30));
