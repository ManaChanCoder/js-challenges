/* 
Practice looping through arrays
Display a numbered list of tasks, hobbies, or items using a loop
 */

const hobbies = [
  "Playing guitar",
  "Reading books",
  "Hiking",
  "Cooking",
  "Traveling",
];

for (let i = 0; i < hobbies.length; i++) {
  console.log(`${i + 1}. ${hobbies[i]}`);
}

const numbers = [11, 22, 33, 44, 55];
let sum = 0;

numbers.forEach((num) => {
  sum += num;
});

console.log(sum);
