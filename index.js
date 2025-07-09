const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

books.forEach((book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`
  );
});
