const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    if (a < b) {
      return "Subtraction result is negative";
    } else {
      return a - b;
    }
  },
  multiplication(a, b) {
    return a * b;
  },
  division(a, b) {
    if (b === 0) {
      return "Division by zero is not allowed";
    } else {
      return a / b;
    }
  },
};

console.log(`${calculator.add(2, 3)}`);
console.log(`${calculator.subtract(5, 2)}`);
console.log(`${calculator.multiplication(3, 4)}`);
console.log(`${calculator.division(10, 2)}`);
