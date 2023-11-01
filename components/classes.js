import resetPage from "./resetpage.js";


class Book {
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

export default class Library {
    constructor(){
        this.library = [];
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    addBook(title,author,pages,read) {
        const newBook = new Book(title,author,pages,read);
        this.library.push(newBook);
        this.length++;
        this.printBooks();
        return this.library;
    }

    removeBook(title) {
        if(this.isEmpty()){
            return 'Library is empty can not delete!';
        }

        let position = 0;

        this.library.forEach(book => {
            if(book.title === title){
                this.length--;
                return this.library.splice(position,1);
            }
            position++;
        });

        this.printBooks();
        return this.library;
    }

    printBooks() {
        //This checks if the library si empty and if it does it returns an error message.
        if(this.isEmpty()){
            return 'The library is empty give me books to print please!';
        }
        //This runs the resetpage meethod which cleans the dom before printing the list again.
        resetPage('bookcontainer');
        //This creates all the variable for the creation of a card to print.
        const container = document.querySelector('.bookcontainer');
        //This loops through the library and creates each card and prints it in order.
        this.library.forEach(book => {
            //Create a new element for each card
            const bookDiv = document.createElement('div');
            const bookTitle = document.createElement('h2');
            const bookAuthor = document.createElement('p');
            const bookPage = document.createElement('p');
            const bookRead = document.createElement('button');
            const bookDelete = document.createElement('p');
            // This creates id/class for each piece of the card for styling and more.
            bookDiv.id = `${book.title}`;
            bookDiv.classList = 'bookdivs';
            bookTitle.id = `${book.title} inner`;
            bookTitle.classList = 'booktitles';
            bookAuthor.id = `${book.author}`;
            bookAuthor.classList = 'bookauthors';
            bookPage.id = `${book.pages}`;
            bookPage.classList = 'bookpages';
            bookRead.id = `${book.read}`;
            bookRead.classList = 'bookread';
            bookDelete.classList = 'deletebtns';
            //This creates the text content for each piece of the card
            bookTitle.textContent = `${book.title}`;
            bookAuthor.textContent = `${book.author}`;
            bookPage.textContent = `${book.pages}`;
            bookRead.textContent = `${book.read}`;
            bookDelete.textContent = 'X';
            //Append all to the card and then append the card to the page.
            bookDiv.appendChild(bookDelete);
            bookDiv.appendChild(bookTitle);
            bookDiv.appendChild(bookAuthor);
            bookDiv.appendChild(bookPage);
            bookDiv.appendChild(bookRead);
            //Appending card to the page
            container.appendChild(bookDiv);
        });

        return this.library;
    }

    saveBooks() {
        /*After I finish the createpage function and some user interaction we will create and 
        utilize this to save the library the user created in local storage. */
    }

    pullBooks(){
        /*After I finish the createpage function and some user interaction we will create and 
        utilize this to pull the library the user created in local storage and set that value to the 
        original librarys value. This should allow for persistant libraries but we will see.*/
    }
}

