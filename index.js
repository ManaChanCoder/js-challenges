/* 
Create a function called printFavorites that takes one parameter — an array.
Inside the function, loop through the array.
Print out: "One of my favorites is [item]" for each element.
Call the function with an array like ["coding", "gaming", "reading"].
 */

const hobbies = ["coding", "gaming", "reading"];

const printHobbies = (hobbies) => {
  for (hobby of hobbies) {
    console.log(`One of my favorites is ${hobby}`);
  }
};
