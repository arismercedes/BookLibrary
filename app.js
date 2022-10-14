let myLibrary = [];
const bookCard = document.querySelectorAll("ul.book")

class Book {
  constructor(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = title.replace(/[^a-zA-Z0-9]/g, '')
    // this.create = function () {
    //   let library = document.getElementsByClassName("library")[0];
    //   const ul = document.createElement("ul");
    //   ul.classList.add("book");
    //   const liTitle = document.createElement("li");
    //   liTitle.classList.add("title");
    //   liTitle.textContent = title;
    //   const liAuthor = document.createElement("li");
    //   liAuthor.classList.add("author");
    //   liAuthor.textContent = author;
    //   const liPages = document.createElement("li");
    //   liPages.classList.add("pages");
    //   liPages.textContent = pages;
    //   const toggleRead = document.createElement("button");
    //   toggleRead.classList.add("read");
    //   toggleRead.textContent = "Read";
    //   const delButton = document.createElement("button");
    //   delButton.classList.add("delButton");
    //   delButton.textContent = "Remove";
    //   ul.append(liTitle,liAuthor,liPages,toggleRead,delButton);
    //   library.append(ul);
    // };
  }
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const harry = new Book("Harry Potter", "J.K. Rowling", 349, "read");
const dracula = new Book("Dracula", "Bram Stocker", 295, "read");

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book)
}

function displayBooks(book) {
  myLibrary.forEach(book => {
    let library = document.getElementsByClassName("library")[0];
      const ul = document.createElement("ul");
      ul.classList.add("book");
      ul.setAttribute('data-key', book.id);
      const liTitle = document.createElement("li");
      liTitle.classList.add("title");
      liTitle.textContent = book.title;
      const liAuthor = document.createElement("li");
      liAuthor.classList.add("author");
      liAuthor.textContent = book.author;
      const liPages = document.createElement("li");
      liPages.classList.add("pages");
      liPages.textContent = book.pages;
      const toggleRead = document.createElement("button");
      toggleRead.classList.add("read");
      toggleRead.textContent = "Read";
      const delButton = document.createElement("button");
      delButton.classList.add("delButton");
      delButton.textContent = "Remove";
      ul.append(liTitle,liAuthor,liPages,toggleRead,delButton);
      library.append(ul);
  });
}

function removeBook() {
  
}

addBookToLibrary(hobbit);
addBookToLibrary(harry);
addBookToLibrary(dracula);

displayBooks();
