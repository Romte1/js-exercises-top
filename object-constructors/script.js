const btn = document.querySelector('.btn');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`El libro llamado ${this.title}, escrito por ${this.author} tiene ${this.pages} páginas y su estado actual es ${this.read}.`)
    }
}

const book1 = new Book('Harry Potter','J. K. Rowling','250','leido');



btn.addEventListener ('click', () => {
    
console.log(book1.info());

})