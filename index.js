/* 
Ask the user to enter two numbers.
Add the two numbers.
Print the result like: "The sum of 4 and 5 is 9."
 */

const resultElement = document.querySelector("#result");
const inputElement1 = document.querySelector("#input1");
const inputElement2 = document.querySelector("#input2");
const btn = document.querySelector("#add-btn");

btn.addEventListener("click", () => {
  const num1 = Number(inputElement1.value);
  const num2 = Number(inputElement2.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Please enter valid numbers.";
    return;
  } else {
    const sum = num1 + num2;
    resultElement.textContent = `${sum}`;
    inputElement1.value = "";
    inputElement2.value = "";
  }
});
