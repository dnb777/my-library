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
    this.status = (this.status == 'read') ? 'unread' : 'read';
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
    bookStatus.textContent = `Status: ${(status == 'read') ? "Already read" : "Not read yet"}`;

    const BtnContainer = document.createElement('div');
    BtnContainer.classList.add('buttons-container');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-index', index)
    deleteBtn.classList.add('icon', 'delete-button');
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;

    deleteBtn.addEventListener('click', (e) => {
        const remove = e.currentTarget.dataset.index;
        myLibrary.splice(remove, 1);
        displayBooks();
    })

    const changeStatusButton = document.createElement('button');
    changeStatusButton.classList.add('icon', 'change-status-button');
    changeStatusButton.innerHTML = (status == 'read') ? 
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>`;

        changeStatusButton.addEventListener('click', (e) => {
            myLibrary[index].changeStatus();
            displayBooks()
        })

    cardsContainer.appendChild(card);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    card.appendChild(BtnContainer);
    BtnContainer.appendChild(deleteBtn);
    BtnContainer.appendChild(changeStatusButton)
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
addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 310, "unread");
addBookToLibrary("A Princess of Mars", "Edgar Rice Burroughs", 326, "read");
addBookToLibrary("Siddhartha", "Hermann Hesse", 152, "read");
addBookToLibrary("Animal Farm", "George Orwell", 92, "read");
addBookToLibrary("1984", "George Orwell", 326, "unread");