let myLibrary = [];

// Constructor function to create book - changed to class

class Book {
    constructor(title, author, numberOfPages, read){
        this.id = crypto.randomUUID();

        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.read = read;
    }

    sayInfo(){
       const readStatus = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${readStatus}.` 
    }
}

/* Here is the old constructor functions below

/* function Book(title, author, numberOfPages, read) {
    // Gives unique ID
    this.id = crypto.randomUUID();

    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.sayInfo = function() {
        const readStatus = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${readStatus}.`;
    }
} */

// Prototype to toggle read or not

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

// Function to add book to array (library) 

function addBookTolibrary(book) {
    myLibrary.push(book);
}

// Display books in HTML

function displayBooks(book) {
    const tableBody = document.querySelector('#book-table tbody');
    tableBody.innerHTML = '';

    myLibrary.forEach(book =>{
        const row = document.createElement('tr');
       
        // Create each cell

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;

        const numberOfPagesCell = document.createElement('td');
        numberOfPagesCell.textContent = book.numberOfPages;

        const readCell = document.createElement('td');
        readCell.textContent = book.read ? 'Yes' : 'No';

        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = "-";
        buttonRemove.classList.add('RemoveButton');
        buttonRemove.dataset.id = book.id;

        // Button to remove books

        buttonRemove.addEventListener('click', (e) =>{
            const bookId = e.target.dataset.id;

            myLibrary = myLibrary.filter(book => book.id !== bookId);
            e.target.parentElement.remove();
        });

        // Toggle read button

        const buttonToggleRead = document.createElement('button');
        buttonToggleRead.textContent = "Read Status";
        buttonToggleRead.classList.add('ToggleButton');
        buttonToggleRead.dataset.id = book.id;

        buttonToggleRead.addEventListener('click', (e) => {
            const bookId = e.target.dataset.id;
            const bookToToggle = myLibrary.find(b => b.id === bookId);
            bookToToggle.toggleRead();
            displayBooks();
        })

        row.append(titleCell, authorCell, numberOfPagesCell, readCell, buttonRemove, buttonToggleRead);

        tableBody.appendChild(row);
    });
}


// Books created

const harryPotter = new Book('Harry Potter', "J.k Roll", 250, false);
const dumbo = new Book('Dumbo', 'Disney', '40', true);


// Books added to library

addBookTolibrary(dumbo);
addBookTolibrary(harryPotter);

// Books added to display

displayBooks();

// Dialog (pop up window) JS

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})


// Create book with JS

const addBookButton = document.querySelector('.submit-button');
const cancelButton = document.querySelector('.cancel-button');
const formInput = document.querySelector('.form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

titleInput.addEventListener('input', (event) => {
    if(!titleInput.checkValidity()){
        titleInput.setCustomValidity('Please use a valid title!')
    } else {
        titleInput.setCustomValidity('')
    };
});

authorInput.addEventListener('input', (event) => {
    if(!authorInput.checkValidity()){
        authorInput.setCustomValidity('Please use a valid author!')
    } else {
        authorInput.setCustomValidity('')
    };
});

pagesInput.addEventListener('input', (event) => {
    if(!pagesInput.checkValidity()){
        pagesInput.setCustomValidity('Please use a valid number!')
    } else {
        pagesInput.setCustomValidity('')
    };
});

formInput.addEventListener('submit', (e) => {

e.preventDefault(); 

const titleValue = titleInput.value;
const authorValue = authorInput.value;
const pagesValue = pagesInput.value;
const readValue = readInput.value === 'yes';

const createBook = new Book(titleValue, authorValue, pagesValue, readValue);


addBookTolibrary(createBook);

displayBooks();

formInput.reset();

modal.close();

});
