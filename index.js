/* 
Create an array called favoriteFoods with at least 3 food names inside.
Use a for loop to print each food to the console.
Make the output look like:
" pizza!", " sushi!", etc.
 */

const favoriteFoods = [" pizza", " sushi", " pasta"];
const favoriteDrinks = [" coffee", " tea", " juice"];
const favoriteDesserts = [" ice cream", " cake", " cookies"];

for (let i = 0; i < favoriteFoods.length; i++) {
  console.log(`I love ${favoriteFoods[i]}!`);
}

favoriteDrinks.forEach((drink) => {
  console.log(`I love ${drink}!`);
});

for (favoriteDessert of favoriteDesserts) {
  console.log(`I love ${favoriteDessert}!`);
}
