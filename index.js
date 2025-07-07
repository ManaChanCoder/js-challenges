/* 
Select HTML elements using JavaScript
Display or update content dynamically
Practice event handling (basic button click)
 */

const output = document.querySelector("#output");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  const value = input.value.trim();

  if (value) {
    output.textContent = `You entered: ${value}`;
    input.value = ""; // Clear the input field
  } else {
    console.log("Please enter a value.");
    alert("Please Enter a value.");
  }
});
