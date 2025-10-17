function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.sayInfo = function() {
        const readStatus = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${readStatus}.`;
    }
}

const harryPotter = new Book('Harry Potter', "J.k Roll", 250, false);
const dumbo = new Book('Dumbo', 'Disney', '40', true)

console.log(harryPotter.sayInfo());
console.log(dumbo.sayInfo());
