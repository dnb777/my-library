//array to contain every book of the library
const myLibrary = []
const cardsContainer = document.querySelector('.books-container');
const dialog = document.querySelector('.dialog');
const form = document.querySelector('.new-book-form');
const showDialogButton = document.querySelector('.show-dialog');
const closeDialogButotn = document.querySelector('.close');
const addBookButton =  document.querySelector('.add-book');

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    cardsContainer.innerHTML = "";
    myLibrary.forEach((book) => {
        createBookCard(book.title, book.author, book.pages, book.status);
    })
}

function createBookCard(title, author, pages, status) {
    const card = document.createElement('div');
    card.classList.add('card');

    const bookTitle = document.createElement('h3');
    bookTitle.textContent = title;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${author}`;

    const bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${pages}`;

    const bookStatus = document.createElement('p');
    bookStatus.textContent = `Status: ${(status == 'true') ? "Already read" : "Not read yet"}`;

    cardsContainer.appendChild(card);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
}


showDialogButton.addEventListener('click', () => {
    dialog.showModal()
    
})

addBookButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    const bookTitle = document.querySelector('#title').value.trim();
    const bookAuthor = document.querySelector('#author').value.trim();
    const bookPages = document.querySelector('#pages').value.trim();
    const bookStatus = document.querySelector('input[name="status"]:checked').value;
    
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookStatus);

    dialog.close()
    form.reset();
})

// Dummy content
addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 310, "false");
addBookToLibrary("A Princess of Mars", "Edgar Rice Burroughs", 326, "true");
addBookToLibrary("Siddhartha", "Hermann Hesse", 152, "true");
addBookToLibrary("Animal Farm", "George Orwell", 92, "true");
addBookToLibrary("1984", "George Orwell", 326, "false");
addBookToLibrary("1984", "George Orwell", 326, "false");