class Book {
  constructor(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }
  listAvailableBooks() {
    const showBook = this.books.filter((book) => {
      return book.isAvailable;
    });
    showBook.forEach((book) => {
      console.log(`Title: ${book.title} by Author is ${book.author}`);
    });
  }
  borrowBook(title) {
    const foundBook = this.books.find(
      (book) => book.title === title && book.isAvailable
    );

    if (foundBook) {
      foundBook.toggleAvailability();
    } else {
      console.log(`Sorry, ${title} is currently not available`);
    }
  }
}
const lib = new Library();
lib.addBook(new Book("Atomic Habits", "James Clear"));
lib.addBook(new Book("Deep Work", "Cal Newport"));
lib.listAvailableBooks();

lib.borrowBook("Atomic Habits");
lib.listAvailableBooks();
