class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  // Methods related to data management
  createBook() {
    // Implementation here
  }

  readBook() {
    // Implementation here
  }

  updateBook() {
    // Implementation here
  }

  deleteBook() {
    // Implementation here
  }
}

class BookDisplay {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  // Method related to data presentation
  displayHTML() {
    return `<h1>${this.title}</h1><p>${this.author}</p>`;
  }
}
