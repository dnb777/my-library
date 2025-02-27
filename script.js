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

Book.prototype.changeStatus = function() {
    this.status = (this.status == 'read' ? 'unread' : 'read')
}

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    cardsContainer.innerHTML = "";
    myLibrary.forEach((book, index) => {
        createBookCard(book.title, book.author, book.pages, book.status, index);
    })
}

function createBookCard(title, author, pages, status, index) {
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

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-index', index)
    deleteBtn.classList.add('icon', 'delete-button');
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;

    deleteBtn.addEventListener('click', (e) => {
        const remove = e.currentTarget.dataset.index;
        console.log(remove)
        myLibrary.splice(remove, 1);
        displayBooks();
    })

    const changeStatusButton = document.createElement('button');
    changeStatusButton.classList.add('icon', 'change-status-button');
    changeStatusButton.innerHTML = ``

    cardsContainer.appendChild(card);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    card.appendChild(deleteBtn);
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