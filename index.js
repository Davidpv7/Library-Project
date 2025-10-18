const myLibrary = [];

// Constructor function to create book

function Book(title, author, numberOfPages, read) {
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

        row.append(titleCell, authorCell, numberOfPagesCell, readCell);

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


console.log(myLibrary);